import type { ItemPropertyConfig } from "@/types/properties"

export type TierItemConfig = {
  itemId: string
  properties: ItemPropertyConfig[]
}

export type TierConfig = {
  id: string
  tier: number
  level: number
  items: TierItemConfig[]
}
