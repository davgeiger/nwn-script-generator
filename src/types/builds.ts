import type { TierConfig } from "@/types/tiers"

export type BuildItemConfig = {
  itemId: string
  grantLevel: number
}

export type BuildConfig = {
  id: string
  name: string
  items: BuildItemConfig[]
  tiers: TierConfig[]
}
