import type { ItemPropertyDefinition } from "@/types/properties"
import {
  arcaneSpellFailureOptions,
  castSpellUsesOptions,
  spellClassOptions,
  spellImmunityOptions,
  spellSchoolOptions,
} from "@/data/propertyOptions"
import { castSpellOptions } from "@/data/options/castSpellOptions"

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
  {
    id: "arcaneSpellFailure",
    name: "Arkane Zauberpatzerchance",
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
        id: "modifier",
        label: "Modifikator",
        type: "select",
        required: true,
        options: arcaneSpellFailureOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_ARCANE_SPELL_FAILURE",
      functionName: "ItemPropertyArcaneSpellFailure",
      parameterOrder: ["modifier"],
    },
  },
  {
    id: "bonusSpellSlot",
    name: "Zusätzlicher Zauberplatz",
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
    keyParameters: ["class", "spellLevel"],
    parameters: [
      {
        id: "class",
        label: "Zauberklasse",
        type: "select",
        required: true,
        options: spellClassOptions,
      },
      {
        id: "spellLevel",
        label: "Zaubergrad",
        type: "number",
        required: true,
        min: 0,
        max: 9,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_BONUS_SPELL_SLOT_OF_LEVEL_N",
      functionName: "ItemPropertyBonusLevelSpell",
      parameterOrder: ["class", "spellLevel"],
    },
  },
  {
    id: "castSpell",
    name: "Zauber wirken",
    allowedSlots: [
      "weapon",
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
        searchable: true,
        options: castSpellOptions,
      },
      {
        id: "uses",
        label: "Anwendungen",
        type: "select",
        required: true,
        options: castSpellUsesOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_CAST_SPELL",
      functionName: "ItemPropertyCastSpell",
      parameterOrder: ["spell", "uses"],
    },
  },
]
