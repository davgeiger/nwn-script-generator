import type { BuildConfig } from "@/types/builds"
import type { ProjectConfig } from "@/types/config"
import type { LevelItem } from "@/types/items"

export type ResolvedBuildItem = LevelItem & {
  grantLevel: number
}

export function getActiveBuild(config: ProjectConfig): BuildConfig | undefined {
  return config.builds.find((build) => build.id === config.activeBuildId)
}

export function getBuildItems(
  config: ProjectConfig,
  build: BuildConfig
): ResolvedBuildItem[] {
  return build.items.flatMap((buildItem) => {
    const item = config.items.find((item) => item.id === buildItem.itemId)

    if (!item) {
      return []
    }

    return [
      {
        ...item,
        grantLevel: buildItem.grantLevel,
      },
    ]
  })
}
