import type { TierConfig } from "@/types/tiers"

export type BuildConfig = {
  id: string
  name: string
  itemIds: string[]
  tiers: TierConfig[]
}
