import type { LevelItem } from "@/types/items"
import type { TierConfig } from "@/types/tiers"

export type ScriptConfig = {
  updateItemsName: string
  updateName: string
  rebuildName: string
}

export type ProjectConfig = {
  items: LevelItem[]
  tiers: TierConfig[]
  scripts: ScriptConfig
}
