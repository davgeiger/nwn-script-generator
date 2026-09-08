export type ItemSlot =
  | "weapon"
  | "shield"
  | "armor"
  | "helmet"
  | "cloak"
  | "boots"
  | "belt"
  | "gloves"
  | "amulet"
  | "ring"

export type LevelItem = {
  id: string
  name: string
  resRef: string
  tag: string
  slot: ItemSlot
}
