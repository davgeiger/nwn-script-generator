import type { BuildConfig } from "@/types/builds"
import type { LevelItem } from "@/types/items"

export type ScriptConfig = {
  updateItemsName: string
  updateName: string
  rebuildName: string
}

export type ProjectConfig = {
  items: LevelItem[]
  builds: BuildConfig[]
  activeBuildId: string
  scripts: ScriptConfig
}
