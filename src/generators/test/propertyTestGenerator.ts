import {
  defensiveProperties,
  miscProperties,
  onHitProperties,
  spellProperties,
  weaponProperties,
} from "@/data/properties"

import { generatePropertyExpression } from "@/generators/propertyGenerator"
import { indent } from "@/generators/utils"

import { createTestPropertyConfigs } from "./propertyTestValues"

import type {
  ItemPropertyConfig,
  ItemPropertyDefinition,
} from "@/types/properties"
import type { ProjectConfig } from "@/types/config"
import type { GeneratedScriptFile } from "@/types/scripts"

const TEST_BATCH_SIZE = 25

function chunkArray<T>(values: T[], size: number): T[][] {
  const chunks: T[][] = []

  for (let i = 0; i < values.length; i += size) {
    chunks.push(values.slice(i, i + size))
  }

  return chunks
}

function generatePropertyTests(
  definitions: ItemPropertyDefinition[]
): string[] {
  return definitions
    .flatMap((definition) =>
      createTestPropertyConfigs(definition).map((config) => ({
        definition,
        config,
      }))
    )
    .map(({ definition, config }) => {
      const expression = generatePropertyExpression(config)

      if (!expression) {
        return undefined
      }

      const label = getTestPropertyLabel(definition, config)

      return [
        `// ${label}`,
        `IPSafeAddItemProperty(oItem, ${expression});`,
      ].join("\n")
    })
    .filter((code): code is string => code !== undefined)
}

function getTestPropertyLabel(
  definition: ItemPropertyDefinition,
  config: ItemPropertyConfig
): string {
  const labels = (definition.keyParameters ?? [])
    .map((parameterId) => {
      const parameter = definition.parameters.find(
        (parameter) => parameter.id === parameterId
      )

      if (!parameter || parameter.type !== "select") {
        return undefined
      }

      const value = config.values[parameterId]

      const option = parameter.options?.find((option) => option.value === value)

      return option?.label
    })
    .filter((label): label is string => label !== undefined)

  if (labels.length === 0) {
    return definition.name
  }

  return `${definition.name} - ${labels.join(" / ")}`
}

function generateBatchScript(tests: string[], itemTag: string): string {
  return [
    '#include "x2_inc_itemprop"',
    "",
    "void main()",
    "{",
    indent("object oPC = OBJECT_SELF;"),
    indent(`object oItem = GetItemPossessedBy(oPC, "${itemTag}");`),
    "",
    indent("if (!GetIsObjectValid(oItem))"),
    indent("{"),
    indent('SendMessageToPC(oPC, "Testitem nicht gefunden.");', 8),
    indent("return;", 8),
    indent("}"),
    "",
    indent(tests.join("\n\n")),
    "",
    indent('SendMessageToPC(oPC, "Test-Batch abgeschlossen.");'),
    "}",
  ].join("\n")
}

function generateCategoryScripts(
  name: string,
  definitions: ItemPropertyDefinition[],
  itemTag: string
): GeneratedScriptFile[] {
  const tests = generatePropertyTests(definitions)

  const batches = chunkArray(tests, TEST_BATCH_SIZE)

  return batches.map((batch, index) => ({
    filename: `lvl_t_${name}${index + 1}.nss`,
    content: generateBatchScript(batch, itemTag),
  }))
}

function getItemBySlot(config: ProjectConfig, slot: string) {
  return config.items.find((item) => item.slot === slot)
}

function generateEnsureItem(
  variableName: string,
  tag: string,
  resRef: string
): string {
  return [
    `object ${variableName} = GetItemPossessedBy(oPC, "${tag}");`,
    "",
    `if (!GetIsObjectValid(${variableName}))`,
    "{",
    indent(`${variableName} = CreateItemOnObject("${resRef}", oPC);`),
    "}",
  ].join("\n")
}

export function generatePropertyTestScripts(
  config: ProjectConfig
): GeneratedScriptFile[] {
  const weapon = getItemBySlot(config, "weapon")
  const shield = getItemBySlot(config, "shield")
  const armor = getItemBySlot(config, "armor")
  const cloak = getItemBySlot(config, "cloak")

  if (!weapon || !shield || !armor || !cloak) {
    return []
  }

  const testScripts: GeneratedScriptFile[] = [
    ...generateCategoryScripts("weapon", weaponProperties, weapon.tag),

    ...generateCategoryScripts("onhit", onHitProperties, weapon.tag),

    ...generateCategoryScripts("def", defensiveProperties, shield.tag),

    ...generateCategoryScripts("misc", miscProperties, armor.tag),

    ...generateCategoryScripts("spell", spellProperties, cloak.tag),
  ]

  const mainScript: GeneratedScriptFile = {
    filename: "lvl_test_main.nss",
    content: generateMainScript(weapon, shield, armor, cloak),
  }

  const runnerScript: GeneratedScriptFile = {
    filename: "lvl_test_all.nss",
    content: generateTestRunnerScript(testScripts),
  }

  return [mainScript, runnerScript, ...testScripts]
}

function generateMainScript(
  weapon: { tag: string; resRef: string },
  shield: { tag: string; resRef: string },
  armor: { tag: string; resRef: string },
  cloak: { tag: string; resRef: string }
): string {
  return [
    "void main()",
    "{",
    indent("object oPC = OBJECT_SELF;"),
    "",
    indent(generateEnsureItem("oWeapon", weapon.tag, weapon.resRef)),
    "",
    indent(generateEnsureItem("oShield", shield.tag, shield.resRef)),
    "",
    indent(generateEnsureItem("oArmor", armor.tag, armor.resRef)),
    "",
    indent(generateEnsureItem("oCloak", cloak.tag, cloak.resRef)),
    "",
    indent('SendMessageToPC(oPC, "Testitems sind vorhanden.");'),
    "}",
  ].join("\n")
}

function generateTestRunnerScript(testScripts: GeneratedScriptFile[]): string {
  const delayStep = 0.25

  const commands = testScripts.map((script, index) => {
    const scriptName = script.filename.replace(/\.nss$/, "")
    const delay = ((index + 1) * delayStep).toFixed(2)

    return `DelayCommand(${delay}, ExecuteScript("${scriptName}", oPC));`
  })

  return [
    "void main()",
    "{",
    indent("object oPC = OBJECT_SELF;"),
    "",
    // Testitems zuerst erzeugen
    indent('ExecuteScript("lvl_test_main", oPC);'),
    "",
    ...commands.map((command) => indent(command)),
    "",
    indent(
      `DelayCommand(${((testScripts.length + 2) * delayStep).toFixed(
        2
      )}, SendMessageToPC(oPC, "Alle Property-Tests wurden gestartet."));`
    ),
    "}",
  ].join("\n")
}
