import type { ItemPropertyDefinition } from "@/types/properties"

export const itemProperties: ItemPropertyDefinition[] = [
  {
    id: "enhancementBonus",
    name: "Verbesserungsbonus",
    allowedSlots: ["weapon"],
    parameters: [
      {
        id: "bonus",
        label: "Bonus",
        type: "number",
        min: 1,
        max: 20,
      },
    ],
  },

  {
    id: "armorClassBonus",
    name: "Rüstungsklassenbonus",
    allowedSlots: [
      "shield",
      "armor",
      "helmet",
      "cloak",
      "boots",
      "belt",
      "gloves",
      "amulet",
      "ring",
    ],
    parameters: [
      {
        id: "bonus",
        label: "Bonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
  },

  {
    id: "damageBonus",
    name: "Zusatzschaden",
    allowedSlots: ["weapon"],
    parameters: [
      {
        id: "damageType",
        label: "Schadensart",
        type: "select",
        required: true,
        options: [
          { label: "Säure", value: "acid" },
          { label: "Kälte", value: "cold" },
          { label: "Göttlich", value: "divine" },
          { label: "Elektrizität", value: "electrical" },
          { label: "Feuer", value: "fire" },
          { label: "Negativ", value: "negative" },
          { label: "Positiv", value: "positive" },
          { label: "Schall", value: "sonic" },
        ],
      },
      {
        id: "damage",
        label: "Schaden",
        type: "select",
        required: true,
        options: [
          { label: "+1", value: "1" },
          { label: "+2", value: "2" },
          { label: "1W4", value: "1d4" },
          { label: "1W6", value: "1d6" },
          { label: "1W8", value: "1d8" },
          { label: "1W10", value: "1d10" },
          { label: "2W6", value: "2d6" },
        ],
      },
    ],
  },
]
