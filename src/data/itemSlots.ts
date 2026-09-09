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
