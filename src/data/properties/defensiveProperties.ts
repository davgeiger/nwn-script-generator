import type { ItemPropertyDefinition } from "@/types/properties"
import {
  alignmentGroupOptions,
  alignmentOptions,
  damageTypeOptions,
  damageVulnerabilityOptions,
  physicalDamageTypeOptions,
  racialTypeOptions,
} from "@/data/options/propertyOptions"

export const defensiveProperties: ItemPropertyDefinition[] = [
  // armorClassBonus
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
  // acBonusVsAlignmentGroup
  {
    id: "acBonusVsAlignmentGroup",
    name: "RK-Bonus gegen Gesinnungsgruppe",
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
    keyParameters: ["alignmentGroup"],
    parameters: [
      {
        id: "alignmentGroup",
        label: "Gesinnungsgruppe",
        type: "select",
        required: true,
        options: alignmentGroupOptions,
      },
      {
        id: "bonus",
        label: "RK-Bonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_AC_BONUS_VS_ALIGNMENT_GROUP",
      functionName: "ItemPropertyACBonusVsAlign",
      parameterOrder: ["alignmentGroup", "bonus"],
    },
  },
  // acBonusVsRace
  {
    id: "acBonusVsRace",
    name: "RK-Bonus gegen Rasse",
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
    keyParameters: ["race"],
    parameters: [
      {
        id: "race",
        label: "Rasse",
        type: "select",
        required: true,
        options: racialTypeOptions,
      },
      {
        id: "bonus",
        label: "RK-Bonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_AC_BONUS_VS_RACIAL_GROUP",
      functionName: "ItemPropertyACBonusVsRace",
      parameterOrder: ["race", "bonus"],
    },
  },
  // acBonusVsAlignment
  {
    id: "acBonusVsAlignment",
    name: "RK-Bonus gegen Gesinnung",
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
    keyParameters: ["alignment"],
    parameters: [
      {
        id: "alignment",
        label: "Gesinnung",
        type: "select",
        required: true,
        options: alignmentOptions,
      },
      {
        id: "bonus",
        label: "RK-Bonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_AC_BONUS_VS_SPECIFIC_ALIGNMENT",
      functionName: "ItemPropertyACBonusVsSAlign",
      parameterOrder: ["alignment", "bonus"],
    },
  },
  // acBonusVsDamageType
  {
    id: "acBonusVsDamageType",
    name: "RK-Bonus gegen Schadensart",
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
    keyParameters: ["damageType"],
    parameters: [
      {
        id: "damageType",
        label: "Schadensart",
        type: "select",
        required: true,
        options: physicalDamageTypeOptions,
      },
      {
        id: "bonus",
        label: "RK-Bonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_AC_BONUS_VS_DAMAGE_TYPE",
      functionName: "ItemPropertyACBonusVsDmgType",
      parameterOrder: ["damageType", "bonus"],
    },
  },
  // savingThrowBonus
  {
    id: "savingThrowBonus",
    name: "Rettungswurfbonus",
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
    keyParameters: ["saveType"],
    parameters: [
      {
        id: "saveType",
        label: "Rettungswurf",
        type: "select",
        required: true,
        options: [
          {
            label: "Zähigkeit",
            value: "fortitude",
            nwscriptValue: "IP_CONST_SAVEBASETYPE_FORTITUDE",
          },
          {
            label: "Reflex",
            value: "reflex",
            nwscriptValue: "IP_CONST_SAVEBASETYPE_REFLEX",
          },
          {
            label: "Willen",
            value: "will",
            nwscriptValue: "IP_CONST_SAVEBASETYPE_WILL",
          },
          {
            label: "Universal",
            value: "universal",
            nwscriptValue: "IP_CONST_SAVEVS_UNIVERSAL",
          },
        ],
      },
      {
        id: "bonus",
        label: "Bonus",
        type: "number",
        required: true,
        min: 1,
        max: 12,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_SAVING_THROW_BONUS_SPECIFIC",

      propertyTypeByValue: {
        parameterId: "saveType",
        values: {
          fortitude: "ITEM_PROPERTY_SAVING_THROW_BONUS_SPECIFIC",
          reflex: "ITEM_PROPERTY_SAVING_THROW_BONUS_SPECIFIC",
          will: "ITEM_PROPERTY_SAVING_THROW_BONUS_SPECIFIC",
          universal: "ITEM_PROPERTY_SAVING_THROW_BONUS",
        },
      },

      functionByValue: {
        parameterId: "saveType",
        values: {
          fortitude: "ItemPropertyBonusSavingThrow",
          reflex: "ItemPropertyBonusSavingThrow",
          will: "ItemPropertyBonusSavingThrow",
          universal: "ItemPropertyBonusSavingThrowVsX",
        },
      },

      parameterOrder: ["saveType", "bonus"],
    },
  },
  // damageResistance
  {
    id: "damageResistance",
    name: "Schadensresistenz",
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
    keyParameters: ["damageType"],
    parameters: [
      {
        id: "damageType",
        label: "Schadensart",
        type: "select",
        required: true,
        options: damageTypeOptions,
      },
      {
        id: "amount",
        label: "Resistenz",
        type: "select",
        required: true,
        options: [
          {
            label: "5",
            value: 5,
            nwscriptValue: "IP_CONST_DAMAGERESIST_5",
          },
          {
            label: "10",
            value: 10,
            nwscriptValue: "IP_CONST_DAMAGERESIST_10",
          },
          {
            label: "15",
            value: 15,
            nwscriptValue: "IP_CONST_DAMAGERESIST_15",
          },
          {
            label: "20",
            value: 20,
            nwscriptValue: "IP_CONST_DAMAGERESIST_20",
          },
          {
            label: "25",
            value: 25,
            nwscriptValue: "IP_CONST_DAMAGERESIST_25",
          },
          {
            label: "30",
            value: 30,
            nwscriptValue: "IP_CONST_DAMAGERESIST_30",
          },
          {
            label: "35",
            value: 35,
            nwscriptValue: "IP_CONST_DAMAGERESIST_35",
          },
          {
            label: "40",
            value: 40,
            nwscriptValue: "IP_CONST_DAMAGERESIST_40",
          },
          {
            label: "45",
            value: 45,
            nwscriptValue: "IP_CONST_DAMAGERESIST_45",
          },
          {
            label: "50",
            value: 50,
            nwscriptValue: "IP_CONST_DAMAGERESIST_50",
          },
        ],
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_DAMAGE_RESISTANCE",
      functionName: "ItemPropertyDamageResistance",
    },
  },
  // damageImmunity
  {
    id: "damageImmunity",
    name: "Schadensimmunität",
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
    keyParameters: ["damageType"],
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
            label: "Wucht",
            value: "bludgeoning",
            nwscriptValue: "IP_CONST_DAMAGETYPE_BLUDGEONING",
          },
          {
            label: "Kälte",
            value: "cold",
            nwscriptValue: "IP_CONST_DAMAGETYPE_COLD",
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
            label: "Stich",
            value: "piercing",
            nwscriptValue: "IP_CONST_DAMAGETYPE_PIERCING",
          },
          {
            label: "Hieb",
            value: "slashing",
            nwscriptValue: "IP_CONST_DAMAGETYPE_SLASHING",
          },
          {
            label: "Schall",
            value: "sonic",
            nwscriptValue: "IP_CONST_DAMAGETYPE_SONIC",
          },
        ],
      },
      {
        id: "percentage",
        label: "Immunität",
        type: "select",
        required: true,
        options: [
          {
            label: "5 %",
            value: 5,
            nwscriptValue: "IP_CONST_DAMAGEIMMUNITY_5_PERCENT",
          },
          {
            label: "10 %",
            value: 10,
            nwscriptValue: "IP_CONST_DAMAGEIMMUNITY_10_PERCENT",
          },
          {
            label: "25 %",
            value: 25,
            nwscriptValue: "IP_CONST_DAMAGEIMMUNITY_25_PERCENT",
          },
          {
            label: "50 %",
            value: 50,
            nwscriptValue: "IP_CONST_DAMAGEIMMUNITY_50_PERCENT",
          },
          {
            label: "75 %",
            value: 75,
            nwscriptValue: "IP_CONST_DAMAGEIMMUNITY_75_PERCENT",
          },
          {
            label: "90 %",
            value: 90,
            nwscriptValue: "IP_CONST_DAMAGEIMMUNITY_90_PERCENT",
          },
          {
            label: "100 %",
            value: 100,
            nwscriptValue: "IP_CONST_DAMAGEIMMUNITY_100_PERCENT",
          },
        ],
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_IMMUNITY_DAMAGE_TYPE",
      functionName: "ItemPropertyDamageImmunity",
    },
  },
  // miscImmunity
  {
    id: "miscImmunity",
    name: "Immunität",
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
    keyParameters: ["immunityType"],
    parameters: [
      {
        id: "immunityType",
        label: "Immunität gegen",
        type: "select",
        required: true,
        options: [
          {
            label: "Hinterhältige Angriffe",
            value: "backstab",
            nwscriptValue: "IP_CONST_IMMUNITYMISC_BACKSTAB",
          },
          {
            label: "Kritische Treffer",
            value: "criticalHits",
            nwscriptValue: "IP_CONST_IMMUNITYMISC_CRITICAL_HITS",
          },
          {
            label: "Todesmagie",
            value: "deathMagic",
            nwscriptValue: "IP_CONST_IMMUNITYMISC_DEATH_MAGIC",
          },
          {
            label: "Krankheit",
            value: "disease",
            nwscriptValue: "IP_CONST_IMMUNITYMISC_DISEASE",
          },
          {
            label: "Furcht",
            value: "fear",
            nwscriptValue: "IP_CONST_IMMUNITYMISC_FEAR",
          },
          {
            label: "Niederschlag",
            value: "knockdown",
            nwscriptValue: "IP_CONST_IMMUNITYMISC_KNOCKDOWN",
          },
          {
            label: "Stufen-/Attributsentzug",
            value: "levelAbilityDrain",
            nwscriptValue: "IP_CONST_IMMUNITYMISC_LEVEL_ABIL_DRAIN",
          },
          {
            label: "Geistesbeeinflussende Zauber",
            value: "mindSpells",
            nwscriptValue: "IP_CONST_IMMUNITYMISC_MINDSPELLS",
          },
          {
            label: "Lähmung",
            value: "paralysis",
            nwscriptValue: "IP_CONST_IMMUNITYMISC_PARALYSIS",
          },
          {
            label: "Gift",
            value: "poison",
            nwscriptValue: "IP_CONST_IMMUNITYMISC_POISON",
          },
        ],
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_IMMUNITY_MISCELLANEOUS",
      functionName: "ItemPropertyImmunityMisc",
    },
  },
  // spellResistance
  {
    id: "spellResistance",
    name: "Zauberresistenz",
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
        id: "amount",
        label: "Zauberresistenz",
        type: "select",
        required: true,
        options: [
          {
            label: "10",
            value: 10,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_10",
          },
          {
            label: "12",
            value: 12,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_12",
          },
          {
            label: "14",
            value: 14,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_14",
          },
          {
            label: "16",
            value: 16,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_16",
          },
          {
            label: "18",
            value: 18,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_18",
          },
          {
            label: "20",
            value: 20,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_20",
          },
          {
            label: "22",
            value: 22,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_22",
          },
          {
            label: "24",
            value: 24,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_24",
          },
          {
            label: "26",
            value: 26,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_26",
          },
          {
            label: "28",
            value: 28,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_28",
          },
          {
            label: "30",
            value: 30,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_30",
          },
          {
            label: "32",
            value: 32,
            nwscriptValue: "IP_CONST_SPELLRESISTANCEBONUS_32",
          },
        ],
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_SPELL_RESISTANCE",
      functionName: "ItemPropertyBonusSpellResistance",
    },
  },
  // damageReduction
  {
    id: "damageReduction",
    name: "Schadensreduktion",
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
        id: "enhancement",
        label: "Überwindbar ab Verbesserungsbonus",
        type: "select",
        required: true,
        options: [
          {
            label: "+1",
            value: 1,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_1",
          },
          {
            label: "+2",
            value: 2,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_2",
          },
          {
            label: "+3",
            value: 3,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_3",
          },
          {
            label: "+4",
            value: 4,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_4",
          },
          {
            label: "+5",
            value: 5,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_5",
          },
          {
            label: "+6",
            value: 6,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_6",
          },
          {
            label: "+7",
            value: 7,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_7",
          },
          {
            label: "+8",
            value: 8,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_8",
          },
          {
            label: "+9",
            value: 9,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_9",
          },
          {
            label: "+10",
            value: 10,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_10",
          },
          {
            label: "+11",
            value: 11,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_11",
          },
          {
            label: "+12",
            value: 12,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_12",
          },
          {
            label: "+13",
            value: 13,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_13",
          },
          {
            label: "+14",
            value: 14,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_14",
          },
          {
            label: "+15",
            value: 15,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_15",
          },
          {
            label: "+16",
            value: 16,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_16",
          },
          {
            label: "+17",
            value: 17,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_17",
          },
          {
            label: "+18",
            value: 18,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_18",
          },
          {
            label: "+19",
            value: 19,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_19",
          },
          {
            label: "+20",
            value: 20,
            nwscriptValue: "IP_CONST_DAMAGEREDUCTION_20",
          },
        ],
      },
      {
        id: "soak",
        label: "Absorbierter Schaden",
        type: "select",
        required: true,
        options: [
          {
            label: "5 HP",
            value: 5,
            nwscriptValue: "IP_CONST_DAMAGESOAK_5_HP",
          },
          {
            label: "10 HP",
            value: 10,
            nwscriptValue: "IP_CONST_DAMAGESOAK_10_HP",
          },
          {
            label: "15 HP",
            value: 15,
            nwscriptValue: "IP_CONST_DAMAGESOAK_15_HP",
          },
          {
            label: "20 HP",
            value: 20,
            nwscriptValue: "IP_CONST_DAMAGESOAK_20_HP",
          },
          {
            label: "25 HP",
            value: 25,
            nwscriptValue: "IP_CONST_DAMAGESOAK_25_HP",
          },
          {
            label: "30 HP",
            value: 30,
            nwscriptValue: "IP_CONST_DAMAGESOAK_30_HP",
          },
          {
            label: "35 HP",
            value: 35,
            nwscriptValue: "IP_CONST_DAMAGESOAK_35_HP",
          },
          {
            label: "40 HP",
            value: 40,
            nwscriptValue: "IP_CONST_DAMAGESOAK_40_HP",
          },
          {
            label: "45 HP",
            value: 45,
            nwscriptValue: "IP_CONST_DAMAGESOAK_45_HP",
          },
          {
            label: "50 HP",
            value: 50,
            nwscriptValue: "IP_CONST_DAMAGESOAK_50_HP",
          },
        ],
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_DAMAGE_REDUCTION",
      functionName: "ItemPropertyDamageReduction",
      parameterOrder: ["enhancement", "soak"],
    },
  },
  // Damage Vulnerability
  {
    id: "damageVulnerability",
    name: "Schadensverwundbarkeit",
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
    keyParameters: ["damageType"],
    parameters: [
      {
        id: "damageType",
        label: "Schadensart",
        type: "select",
        required: true,
        options: damageTypeOptions,
      },
      {
        id: "vulnerability",
        label: "Verwundbarkeit",
        type: "select",
        required: true,
        options: damageVulnerabilityOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_DAMAGE_VULNERABILITY",
      functionName: "ItemPropertyDamageVulnerability",
      parameterOrder: ["damageType", "vulnerability"],
    },
  },
  {
    id: "regeneration",
    name: "Regeneration",
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
        id: "amount",
        label: "Regeneration",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_REGENERATION",
      functionName: "ItemPropertyRegeneration",
      parameterOrder: ["amount"],
    },
  },
  // Freedom of Movement
  {
    id: "freedomOfMovement",
    name: "Bewegungsfreiheit",
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
    parameters: [],
    nwscript: {
      propertyType: "ITEM_PROPERTY_FREEDOM_OF_MOVEMENT",
      functionName: "ItemPropertyFreeAction",
    },
  },
  // Improved Evasion
  {
    id: "improvedEvasion",
    name: "Verbessertes Entrinnen",
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
    parameters: [],
    nwscript: {
      propertyType: "ITEM_PROPERTY_IMPROVED_EVASION",
      functionName: "ItemPropertyImprovedEvasion",
    },
  },
  // Darkvision
  {
    id: "darkvision",
    name: "Dunkelsicht",
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
    parameters: [],
    nwscript: {
      propertyType: "ITEM_PROPERTY_DARKVISION",
      functionName: "ItemPropertyDarkvision",
    },
  },
  // True Seeing
  {
    id: "trueSeeing",
    name: "Wahrer Blick",
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
    parameters: [],
    nwscript: {
      propertyType: "ITEM_PROPERTY_TRUE_SEEING",
      functionName: "ItemPropertyTrueSeeing",
    },
  },
]
