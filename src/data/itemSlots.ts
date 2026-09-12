import type { ItemSlot } from "@/types/items"

export type ItemSlotOption = {
  value: ItemSlot
  label: string
}

export const itemSlots: ItemSlotOption[] = [
  { value: "weapon", label: "Waffe" },
  { value: "shield", label: "Schild" },
  { value: "armor", label: "Rüstung" },
  { value: "helmet", label: "Helm" },
  { value: "cloak", label: "Umhang" },
  { value: "boots", label: "Stiefel" },
  { value: "belt", label: "Gürtel" },
  { value: "gloves", label: "Handschuhe" },
  { value: "amulet", label: "Amulett" },
  { value: "ring", label: "Ring" },
]

export const inventorySlotMap: Partial<Record<ItemSlot, string>> = {
  weapon: "INVENTORY_SLOT_RIGHTHAND",
  shield: "INVENTORY_SLOT_LEFTHAND",
  armor: "INVENTORY_SLOT_CHEST",
  helmet: "INVENTORY_SLOT_HEAD",
  cloak: "INVENTORY_SLOT_CLOAK",
  boots: "INVENTORY_SLOT_BOOTS",
  belt: "INVENTORY_SLOT_BELT",
  gloves: "INVENTORY_SLOT_ARMS",
  amulet: "INVENTORY_SLOT_NECK",
}
