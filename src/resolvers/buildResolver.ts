import type { BuildConfig } from "@/types/builds"
import type { LevelItem } from "@/types/items"
import type { ProjectConfig } from "@/types/config"

export function getActiveBuild(config: ProjectConfig): BuildConfig | undefined {
  return config.builds.find((build) => build.id === config.activeBuildId)
}

export function getBuildItems(
  config: ProjectConfig,
  build: BuildConfig
): LevelItem[] {
  return config.items.filter((item) => build.itemIds.includes(item.id))
}
