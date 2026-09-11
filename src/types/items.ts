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

export type WeaponCategory = "melee" | "ranged"

export type PhysicalDamageType = "bludgeoning" | "piercing" | "slashing"

export type LevelItem = {
  id: string
  name: string
  slot: ItemSlot
  tag: string
  resRef: string
  grantLevel: number

  weaponCategory?: WeaponCategory
  physicalDamageTypes?: PhysicalDamageType[]
}
