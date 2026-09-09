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
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_ENHANCEMENT_BONUS",
      functionName: "ItemPropertyEnhancementBonus",
    },
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
    nwscript: {
      propertyType: "ITEM_PROPERTY_AC_BONUS",
      functionName: "ItemPropertyACBonus",
    },
  },

  {
    id: "damageBonus",
    name: "Schadensbonus",
    allowedSlots: ["weapon"],
    parameters: [
      {
        id: "damageType",
        label: "Schadensart",
        type: "select",
        required: true,
        options: [
          {
            label: "Säure",
            value: "acid",
            nwscriptValue: "IP_CONST_DAMAGETYPE_ACID",
          },
          {
            label: "Kälte",
            value: "cold",
            nwscriptValue: "IP_CONST_DAMAGETYPE_COLD",
          },
          {
            label: "Göttlich",
            value: "divine",
            nwscriptValue: "IP_CONST_DAMAGETYPE_DIVINE",
          },
          {
            label: "Elektrisch",
            value: "electrical",
            nwscriptValue: "IP_CONST_DAMAGETYPE_ELECTRICAL",
          },
          {
            label: "Feuer",
            value: "fire",
            nwscriptValue: "IP_CONST_DAMAGETYPE_FIRE",
          },
          {
            label: "Negativ",
            value: "negative",
            nwscriptValue: "IP_CONST_DAMAGETYPE_NEGATIVE",
          },
          {
            label: "Positiv",
            value: "positive",
            nwscriptValue: "IP_CONST_DAMAGETYPE_POSITIVE",
          },
          {
            label: "Schall",
            value: "sonic",
            nwscriptValue: "IP_CONST_DAMAGETYPE_SONIC",
          },
        ],
      },
      {
        id: "damage",
        label: "Schaden",
        type: "select",
        required: true,
        options: [
          {
            label: "+1",
            value: "1",
            nwscriptValue: "IP_CONST_DAMAGEBONUS_1",
          },
          {
            label: "+2",
            value: "2",
            nwscriptValue: "IP_CONST_DAMAGEBONUS_2",
          },
          {
            label: "1W4",
            value: "1d4",
            nwscriptValue: "IP_CONST_DAMAGEBONUS_1d4",
          },
          {
            label: "1W6",
            value: "1d6",
            nwscriptValue: "IP_CONST_DAMAGEBONUS_1d6",
          },
          {
            label: "1W8",
            value: "1d8",
            nwscriptValue: "IP_CONST_DAMAGEBONUS_1d8",
          },
          {
            label: "1W10",
            value: "1d10",
            nwscriptValue: "IP_CONST_DAMAGEBONUS_1d10",
          },
          {
            label: "2W6",
            value: "2d6",
            nwscriptValue: "IP_CONST_DAMAGEBONUS_2d6",
          },
        ],
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_DAMAGE_BONUS",
      functionName: "ItemPropertyDamageBonus",
    },
  },
]
