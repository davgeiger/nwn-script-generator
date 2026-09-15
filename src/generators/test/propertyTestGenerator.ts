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
const MAX_PROPERTIES_PER_TEST_ITEM = 250

const weaponTestProperties = [...weaponProperties, ...onHitProperties]

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

function generateBatchScript(
  tests: string[],
  itemTag: string,
  itemGroup: number
): string {
  return [
    '#include "x2_inc_itemprop"',
    "",
    generateFindTestItemFunction(),
    "",
    "void main()",
    "{",
    indent("object oPC = OBJECT_SELF;"),
    indent(`object oItem = FindTestItem(oPC, "${itemTag}", ${itemGroup});`),
    "",
    indent("if (!GetIsObjectValid(oItem))"),
    indent("{"),
    indent(
      `SendMessageToPC(oPC, "Testitem ${itemTag} / Gruppe ${itemGroup} nicht gefunden.");`,
      8
    ),
    indent("return;", 8),
    indent("}"),
    "",
    indent(tests.join("\n\n")),
    "",
    indent(
      `SendMessageToPC(oPC, "Test-Batch Gruppe ${itemGroup} abgeschlossen.");`
    ),
    "}",
  ].join("\n")
}

function generateCategoryScripts(
  name: string,
  definitions: ItemPropertyDefinition[],
  itemTag: string
): GeneratedScriptFile[] {
  const tests = generatePropertyTests(definitions)

  const itemGroups = chunkArray(tests, MAX_PROPERTIES_PER_TEST_ITEM)

  return itemGroups.flatMap((itemTests, groupIndex) => {
    const itemGroup = groupIndex + 1

    const batches = chunkArray(itemTests, TEST_BATCH_SIZE)

    return batches.map((batch, batchIndex) => ({
      filename: `lvl_t_${name}_g${itemGroup}_${batchIndex + 1}.nss`,

      content: generateBatchScript(batch, itemTag, itemGroup),
    }))
  })
}

function getItemBySlot(config: ProjectConfig, slot: string) {
  return config.items.find((item) => item.slot === slot)
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
    ...generateCategoryScripts("we", weaponTestProperties, weapon.tag),

    ...generateCategoryScripts("de", defensiveProperties, shield.tag),

    ...generateCategoryScripts("mi", miscProperties, armor.tag),

    ...generateCategoryScripts("sp", spellProperties, cloak.tag),
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
  const weaponGroups = getTestItemGroupCount(weaponTestProperties)

  const shieldGroups = getTestItemGroupCount(defensiveProperties)

  const armorGroups = getTestItemGroupCount(miscProperties)

  const cloakGroups = getTestItemGroupCount(spellProperties)

  const testItems: string[] = []

  for (let group = 1; group <= weaponGroups; group++) {
    testItems.push(
      generateCreateTestItem(`oWeapon${group}`, weapon.resRef, group)
    )
  }

  for (let group = 1; group <= shieldGroups; group++) {
    testItems.push(
      generateCreateTestItem(`oShield${group}`, shield.resRef, group)
    )
  }

  for (let group = 1; group <= armorGroups; group++) {
    testItems.push(
      generateCreateTestItem(`oArmor${group}`, armor.resRef, group)
    )
  }

  for (let group = 1; group <= cloakGroups; group++) {
    testItems.push(
      generateCreateTestItem(`oCloak${group}`, cloak.resRef, group)
    )
  }

  return [
    generateCleanupTestItemsFunction(),
    "",
    "void main()",
    "{",
    indent("object oPC = OBJECT_SELF;"),
    "",
    indent("RemoveOldPropertyTestItems(oPC);"),
    "",
    indent(testItems.join("\n\n")),
    "",
    indent('SendMessageToPC(oPC, "Testitems wurden erstellt.");'),
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

function generateFindTestItemFunction(): string {
  return [
    "object FindTestItem(object oPC, string sTag, int nGroup)",
    "{",
    "    object oItem = GetFirstItemInInventory(oPC);",
    "",
    "    while (GetIsObjectValid(oItem))",
    "    {",
    '        if (GetTag(oItem) == sTag && GetLocalInt(oItem, "LVL_TEST_GROUP") == nGroup)',
    "        {",
    "            return oItem;",
    "        }",
    "",
    "        oItem = GetNextItemInInventory(oPC);",
    "    }",
    "",
    "    return OBJECT_INVALID;",
    "}",
  ].join("\n")
}

function generateCreateTestItem(
  variableName: string,
  resRef: string,
  group: number
): string {
  return [
    `object ${variableName} = CreateItemOnObject("${resRef}", oPC);`,
    "",
    `if (GetIsObjectValid(${variableName}))`,
    "{",
    indent(`SetLocalInt(${variableName}, "LVL_PROPERTY_TEST_ITEM", 1);`),
    indent(`SetLocalInt(${variableName}, "LVL_TEST_GROUP", ${group});`),
    "}",
  ].join("\n")
}

function getTestItemGroupCount(definitions: ItemPropertyDefinition[]): number {
  const testCount = generatePropertyTests(definitions).length

  return Math.max(1, Math.ceil(testCount / MAX_PROPERTIES_PER_TEST_ITEM))
}

function generateCleanupTestItemsFunction(): string {
  return [
    "void RemoveOldPropertyTestItems(object oPC)",
    "{",
    "    object oItem = GetFirstItemInInventory(oPC);",
    "",
    "    while (GetIsObjectValid(oItem))",
    "    {",
    "        object oNextItem = GetNextItemInInventory(oPC);",
    "",
    '        if (GetLocalInt(oItem, "LVL_PROPERTY_TEST_ITEM") == 1)',
    "        {",
    "            DestroyObject(oItem);",
    "        }",
    "",
    "        oItem = oNextItem;",
    "    }",
    "}",
  ].join("\n")
}
