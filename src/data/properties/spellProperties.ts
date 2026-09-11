import type { ItemPropertyDefinition } from "@/types/properties"
import {
  spellImmunityOptions,
  spellSchoolOptions,
} from "@/data/propertyOptions"

export const spellProperties: ItemPropertyDefinition[] = [
  // spellImmunitySpecific
  {
    id: "spellImmunitySpecific",
    name: "Immunität gegen bestimmten Zauber",
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
    keyParameters: ["spell"],
    parameters: [
      {
        id: "spell",
        label: "Zauber",
        type: "select",
        required: true,
        options: spellImmunityOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_IMMUNITY_SPECIFIC_SPELL",
      functionName: "ItemPropertySpellImmunitySpecific",
      parameterOrder: ["spell"],
    },
  },
  // spellImmunitySchool
  {
    id: "spellImmunitySchool",
    name: "Immunität gegen Zauberschule",
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
    keyParameters: ["school"],
    parameters: [
      {
        id: "school",
        label: "Zauberschule",
        type: "select",
        required: true,
        options: spellSchoolOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_IMMUNITY_SPELL_SCHOOL",
      functionName: "ItemPropertySpellImmunitySchool",
      parameterOrder: ["school"],
    },
  },
  // spellImmunityLevel
  {
    id: "spellImmunityLevel",
    name: "Immunität gegen Zauberstufen",
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
        id: "level",
        label: "Zauberstufe",
        type: "number",
        required: true,
        min: 1,
        max: 9,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_IMMUNITY_SPELLS_BY_LEVEL",
      functionName: "ItemPropertyImmunityToSpellLevel",
      parameterOrder: ["level"],
    },
  },
]
