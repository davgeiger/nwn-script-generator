import { generateResolvedPropertyStatement } from "@/generators/propertyGenerator"
import type { LevelItem } from "@/types/items"
import type { TierConfig } from "@/types/tiers"
import { indent } from "@/generators/utils"
import {
  getManagedPropertyTypes,
  type ResolvedTier,
} from "@/resolvers/tierResolver"

export function generateResolvedTierCode(
  tier: ResolvedTier,
  items: LevelItem[],
  tiers: TierConfig[]
): string {
  const itemBlocks = tier.items
    .map((itemConfig, itemIndex) => {
      const item = items.find((item) => item.id === itemConfig.itemId)

      if (!item) {
        return undefined
      }

      const itemVariable = `oItem${itemIndex + 1}`

      const statements = itemConfig.properties
        .map((property) =>
          generateResolvedPropertyStatement(property, itemVariable)
        )
        .filter((statement): statement is string => statement !== undefined)

      const propertyTypes = getManagedPropertyTypes(tiers, item.id, tier.level)

      const cleanupStatements = propertyTypes.map(
        (propertyType) =>
          `IPRemoveMatchingItemProperties(${itemVariable}, ${propertyType}, -1);`
      )

      if (cleanupStatements.length === 0 && statements.length === 0) {
        return undefined
      }

      const propertyCode = [
        ...cleanupStatements,
        ...(cleanupStatements.length > 0 && statements.length > 0 ? [""] : []),
        ...statements,
      ].join("\n")

      return [
        `// ${item.name}`,
        `object ${itemVariable} = GetPlayerItemByTag(oPC, "${item.tag}");`,
        "",
        `if (GetIsObjectValid(${itemVariable}))`,
        "{",
        indent(propertyCode),
        "}",
      ].join("\n")
    })
    .filter((block): block is string => block !== undefined)

  return itemBlocks.join("\n\n")
}
