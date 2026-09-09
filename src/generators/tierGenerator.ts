import { generatePropertyStatement } from "@/generators/propertyGenerator"
import type { LevelItem } from "@/types/items"
import type { TierConfig } from "@/types/tiers"
import { indent } from "@/generators/utils"

export function generateTierCode(tier: TierConfig, items: LevelItem[]): string {
  const itemBlocks = tier.items
    .map((itemConfig, itemIndex) => {
      const item = items.find((item) => item.id === itemConfig.itemId)

      if (!item) {
        return undefined
      }

      const itemVariable = `oItem${itemIndex + 1}`

      const statements = itemConfig.properties
        .map((property) => generatePropertyStatement(property, itemVariable))
        .filter((statement): statement is string => statement !== undefined)

      if (statements.length === 0) {
        return undefined
      }

      return [
        `// ${item.name}`,
        `object ${itemVariable} = GetItemByTag("${item.tag}");`,
        "",
        ...statements,
      ].join("\n")
    })
    .filter((block): block is string => block !== undefined)

  if (itemBlocks.length === 0) {
    return ""
  }

  const content = itemBlocks.join("\n\n")

  return [`if (nLevel >= ${tier.level})`, "{", indent(content), "}"].join("\n")
}
