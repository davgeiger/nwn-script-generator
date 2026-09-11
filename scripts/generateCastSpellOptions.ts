import fs from "node:fs"
import path from "node:path"

const inputPath = path.resolve("scripts/data/castSpellConstants.txt")

const outputPath = path.resolve("src/data/options/castSpellOptions.ts")

const PREFIX = "IP_CONST_CASTSPELL_"

const labelOverrides: Record<string, string> = {
  IP_CONST_CASTSPELL_EAGLE_SPLEDOR_3: "Eagle's Splendor (Stufe 3)",

  IP_CONST_CASTSPELL_EAGLE_SPLEDOR_10: "Eagle's Splendor (Stufe 10)",

  IP_CONST_CASTSPELL_EAGLE_SPLEDOR_15: "Eagle's Splendor (Stufe 15)",
}

function createLabel(constant: string): string {
  const override = labelOverrides[constant]

  if (override) {
    return override
  }

  const name = constant.replace(PREFIX, "")

  const match = name.match(/^(.*)_(\d+)$/)

  const spellName = match ? match[1] : name
  const casterLevel = match ? Number(match[2]) : undefined

  const label = spellName
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")

  if (casterLevel !== undefined) {
    return `${label} (Stufe ${casterLevel})`
  }

  return label
}

function createValue(constant: string): string {
  const name = constant.replace(PREFIX, "").toLowerCase()

  const parts = name.split("_")

  return parts
    .map((part, index) => {
      if (index === 0) {
        return part
      }

      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join("")
}

function main() {
  const input = fs.readFileSync(inputPath, "utf8")

  const matches = input.match(/IP_CONST_CASTSPELL_[A-Z0-9_]+/g) ?? []

  const constants = [...new Set(matches)]

  if (constants.length === 0) {
    throw new Error("Keine IP_CONST_CASTSPELL_* Konstanten gefunden.")
  }

  constants.sort()

  console.log(
    `Found ${constants.length} unique IP_CONST_CASTSPELL_* constants.`
  )

  if (constants.length < 100) {
    console.warn("Warnung: Die Cast-Spell-Liste wirkt ungewöhnlich kurz.")
  }

  const entries = constants
    .map((constant) => {
      const label = createLabel(constant)
      const value = createValue(constant)

      return `  {
    label: ${JSON.stringify(label)},
    value: ${JSON.stringify(value)},
    nwscriptValue: ${JSON.stringify(constant)},
  },`
    })
    .join("\n")

  const output = `import type { PropertyParameterOption } from "@/types/properties"

export const castSpellOptions: PropertyParameterOption[] = [
${entries}
]
`

  fs.mkdirSync(path.dirname(outputPath), {
    recursive: true,
  })

  fs.writeFileSync(outputPath, output, "utf8")

  console.log(`Generated ${constants.length} Cast Spell options.`)

  console.log(outputPath)
}

main()
