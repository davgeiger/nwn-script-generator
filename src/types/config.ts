import type { LevelItem } from "@/types/items"
import type { TierConfig } from "@/types/tiers"

export type ProjectConfig = {
  items: LevelItem[]
  tiers: TierConfig[]
}
