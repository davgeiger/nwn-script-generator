import { itemProperties } from "@/data/itemProperties"
import type { ItemPropertyConfig } from "@/types/properties"
import type { TierConfig } from "@/types/tiers"
import { getPropertyKey } from "@/resolvers/propertyResolver"

export type ResolvedTierItem = {
  itemId: string
  properties: ItemPropertyConfig[]
}

export type ResolvedTier = {
  tier: number
  level: number
  items: ResolvedTierItem[]
}

export function resolveTierState(
  tiers: TierConfig[],
  targetTier: TierConfig
): ResolvedTier {
  const relevantTiers = tiers
    .filter((tier) => tier.tier <= targetTier.tier)
    .sort((a, b) => a.tier - b.tier)

  const itemMap = new Map<string, Map<string, ItemPropertyConfig>>()

  for (const tier of relevantTiers) {
    for (const item of tier.items) {
      let propertyMap = itemMap.get(item.itemId)

      if (!propertyMap) {
        propertyMap = new Map()
        itemMap.set(item.itemId, propertyMap)
      }

      for (const property of item.properties) {
        const propertyKey = getPropertyKey(property)

        switch (property.operation) {
          case "add":
          case "replace":
            propertyMap.set(propertyKey, property)
            break
          case "remove":
            propertyMap.delete(propertyKey)
            break
        }
      }
    }
  }

  return {
    tier: targetTier.tier,
    level: targetTier.level,
    items: Array.from(itemMap.entries()).map(([itemId, propertyMap]) => ({
      itemId,
      properties: Array.from(propertyMap.values()),
    })),
  }
}

export function getManagedPropertyTypes(
  tiers: TierConfig[],
  itemId: string,
  targetLevel: number
): string[] {
  const propertyTypes = new Set<string>()

  const relevantTiers = tiers.filter((tier) => tier.level <= targetLevel)

  for (const tier of relevantTiers) {
    const itemConfig = tier.items.find((item) => item.itemId === itemId)

    if (!itemConfig) {
      continue
    }

    for (const property of itemConfig.properties) {
      const definition = itemProperties.find(
        (definition) => definition.id === property.propertyId
      )

      if (!definition) {
        continue
      }

      propertyTypes.add(definition.nwscript.propertyType)
    }
  }

  return Array.from(propertyTypes)
}

export function resolveLevelState(
  tiers: TierConfig[],
  targetLevel: number
): ResolvedTier {
  const relevantTiers = tiers
    .filter((tier) => tier.level <= targetLevel)
    .sort((a, b) => a.level - b.level)

  const itemMap = new Map<string, Map<string, ItemPropertyConfig>>()

  for (const tier of relevantTiers) {
    for (const item of tier.items) {
      let propertyMap = itemMap.get(item.itemId)

      if (!propertyMap) {
        propertyMap = new Map()
        itemMap.set(item.itemId, propertyMap)
      }

      for (const property of item.properties) {
        const propertyKey = getPropertyKey(property)

        switch (property.operation) {
          case "add":
          case "replace":
            propertyMap.set(propertyKey, property)
            break

          case "remove":
            propertyMap.delete(propertyKey)
            break
        }
      }
    }
  }

  return {
    tier: 0,
    level: targetLevel,
    items: Array.from(itemMap.entries()).map(([itemId, propertyMap]) => ({
      itemId,
      properties: Array.from(propertyMap.values()),
    })),
  }
}
