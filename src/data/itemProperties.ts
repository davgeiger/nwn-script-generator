import type { ItemPropertyDefinition } from "@/types/properties"
import {
  alignmentGroupOptions,
  alignmentOptions,
  damageBonusOptions,
  lightBrightnessOptions,
  lightColorOptions,
  physicalDamageTypeOptions,
  racialTypeOptions,
  reducedWeightOptions,
  spellImmunityOptions,
  spellSchoolOptions,
} from "@/data/propertyOptions"

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
        options: damageBonusOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_DAMAGE_BONUS",
      functionName: "ItemPropertyDamageBonus",
    },
  },
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

      functionByValue: {
        parameterId: "saveType",
        values: {
          fortitude: "ItemPropertyBonusSavingThrow",
          reflex: "ItemPropertyBonusSavingThrow",
          will: "ItemPropertyBonusSavingThrow",
          universal: "ItemPropertyBonusSavingThrowVsX",
        },
      },
    },
  },

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
            label: "Schall",
            value: "sonic",
            nwscriptValue: "IP_CONST_DAMAGETYPE_SONIC",
          },
        ],
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
  {
    id: "onHitCastSpell",
    name: "OnHit-Zauber",
    allowedSlots: ["weapon", "shield", "armor"],
    parameters: [
      {
        id: "spell",
        label: "Zauber",
        type: "select",
        required: true,
        options: [
          {
            label: "Benommenheit",
            value: "daze",
            nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DAZE",
          },
          {
            label: "Verwirrung",
            value: "confusion",
            nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CONFUSION",
          },
          {
            label: "Blindheit / Taubheit",
            value: "blindnessDeafness",
            nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BLINDNESS_AND_DEAFNESS",
          },
          {
            label: "Dunkelheit",
            value: "darkness",
            nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DARKNESS",
          },
          {
            label: "Fluch",
            value: "bestowCurse",
            nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BESTOW_CURSE",
          },
          {
            label: "Verdammnis",
            value: "doom",
            nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DOOM",
          },
          {
            label: "Magie bannen",
            value: "dispelMagic",
            nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DISPEL_MAGIC",
          },
        ],
      },
      {
        id: "casterLevel",
        label: "Zauberstufe",
        type: "number",
        required: true,
        min: 1,
        max: 40,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_ONHITCASTSPELL",
      functionName: "ItemPropertyOnHitCastSpell",
    },
  },
  {
    id: "onHitProperty",
    name: "OnHit-Effekt",
    allowedSlots: ["weapon"],
    keyParameters: ["effect"],
    parameters: [
      {
        id: "effect",
        label: "Effekt",
        type: "select",
        required: true,
        options: [
          {
            label: "Benommenheit",
            value: "daze",
            nwscriptValue: "IP_CONST_ONHIT_DAZE",
          },
          {
            label: "Verwirrung",
            value: "confusion",
            nwscriptValue: "IP_CONST_ONHIT_CONFUSION",
          },
          {
            label: "Furcht",
            value: "fear",
            nwscriptValue: "IP_CONST_ONHIT_FEAR",
          },
          {
            label: "Festhalten",
            value: "hold",
            nwscriptValue: "IP_CONST_ONHIT_HOLD",
          },
          {
            label: "Schlaf",
            value: "sleep",
            nwscriptValue: "IP_CONST_ONHIT_SLEEP",
          },
          {
            label: "Verlangsamen",
            value: "slow",
            nwscriptValue: "IP_CONST_ONHIT_SLOW",
          },
          {
            label: "Betäuben",
            value: "stun",
            nwscriptValue: "IP_CONST_ONHIT_STUN",
          },
          {
            label: "Gift",
            value: "poison",
            nwscriptValue: "IP_CONST_ONHIT_ITEMPOISON",
          },
          {
            label: "Krankheit",
            value: "disease",
            nwscriptValue: "IP_CONST_ONHIT_DISEASE",
          },
          {
            label: "Attributsentzug",
            value: "abilityDrain",
            nwscriptValue: "IP_CONST_ONHIT_ABILITYDRAIN",
          },
          {
            label: "Stufenentzug",
            value: "levelDrain",
            nwscriptValue: "IP_CONST_ONHIT_LEVELDRAIN",
          },
          {
            label: "Verwundung",
            value: "wounding",
            nwscriptValue: "IP_CONST_ONHIT_WOUNDING",
          },
          {
            label: "Rasse töten",
            value: "slayRace",
            nwscriptValue: "IP_CONST_ONHIT_SLAYRACE",
          },
          {
            label: "Gesinnungsgruppe töten",
            value: "slayAlignmentGroup",
            nwscriptValue: "IP_CONST_ONHIT_SLAYALIGNMENTGROUP",
          },
          {
            label: "Gesinnung töten",
            value: "slayAlignment",
            nwscriptValue: "IP_CONST_ONHIT_SLAYALIGNMENT",
          },
          {
            label: "Blindheit",
            value: "blindness",
            nwscriptValue: "IP_CONST_ONHIT_BLINDNESS",
          },
          {
            label: "Taubheit",
            value: "deafness",
            nwscriptValue: "IP_CONST_ONHIT_DEAFNESS",
          },
          {
            label: "Magie bannen",
            value: "dispelMagic",
            nwscriptValue: "IP_CONST_ONHIT_DISPELMAGIC",
          },
          {
            label: "Verdammnis",
            value: "doom",
            nwscriptValue: "IP_CONST_ONHIT_DOOM",
          },
          {
            label: "Mächtiges Magie bannen",
            value: "greaterDispel",
            nwscriptValue: "IP_CONST_ONHIT_GREATERDISPEL",
          },
          {
            label: "Klopfen",
            value: "knock",
            nwscriptValue: "IP_CONST_ONHIT_KNOCK",
          },
          {
            label: "Schwächeres Magie bannen",
            value: "lesserDispel",
            nwscriptValue: "IP_CONST_ONHIT_LESSERDISPEL",
          },
          {
            label: "Mordenkainens Auftrennung",
            value: "mordsDisjunction",
            nwscriptValue: "IP_CONST_ONHIT_MORDSDISJUNCTION",
          },
          {
            label: "Stille",
            value: "silence",
            nwscriptValue: "IP_CONST_ONHIT_SILENCE",
          },
          {
            label: "Vorpal",
            value: "vorpal",
            nwscriptValue: "IP_CONST_ONHIT_VORPAL",
          },
        ],
      },
      {
        id: "alignment",
        label: "Gesinnung",
        type: "select",
        required: true,
        condition: {
          parameterId: "effect",
          values: ["slayAlignment"],
        },
        options: alignmentOptions,
      },
      {
        id: "saveDC",
        label: "Rettungswurf-SG",
        type: "select",
        required: true,
        options: [
          {
            label: "14",
            value: 14,
            nwscriptValue: "IP_CONST_ONHIT_SAVEDC_14",
          },
          {
            label: "16",
            value: 16,
            nwscriptValue: "IP_CONST_ONHIT_SAVEDC_16",
          },
          {
            label: "18",
            value: 18,
            nwscriptValue: "IP_CONST_ONHIT_SAVEDC_18",
          },
          {
            label: "20",
            value: 20,
            nwscriptValue: "IP_CONST_ONHIT_SAVEDC_20",
          },
          {
            label: "22",
            value: 22,
            nwscriptValue: "IP_CONST_ONHIT_SAVEDC_22",
          },
          {
            label: "24",
            value: 24,
            nwscriptValue: "IP_CONST_ONHIT_SAVEDC_24",
          },
          {
            label: "26",
            value: 26,
            nwscriptValue: "IP_CONST_ONHIT_SAVEDC_26",
          },
        ],
      },
      {
        id: "duration",
        label: "Dauer / Chance",
        type: "select",
        required: true,
        condition: {
          parameterId: "effect",
          values: ["blindness", "confusion", "sleep", "slow", "stun"],
        },
        options: [
          {
            label: "5 % / 5 Runden",
            value: "5-5",
            nwscriptValue: "IP_CONST_ONHIT_DURATION_5_PERCENT_5_ROUNDS",
          },
          {
            label: "10 % / 4 Runden",
            value: "10-4",
            nwscriptValue: "IP_CONST_ONHIT_DURATION_10_PERCENT_4_ROUNDS",
          },
          {
            label: "25 % / 3 Runden",
            value: "25-3",
            nwscriptValue: "IP_CONST_ONHIT_DURATION_25_PERCENT_3_ROUNDS",
          },
          {
            label: "50 % / 2 Runden",
            value: "50-2",
            nwscriptValue: "IP_CONST_ONHIT_DURATION_50_PERCENT_2_ROUNDS",
          },
          {
            label: "75 % / 1 Runde",
            value: "75-1",
            nwscriptValue: "IP_CONST_ONHIT_DURATION_75_PERCENT_1_ROUND",
          },
        ],
      },
      {
        id: "poisonType",
        label: "Giftart",
        type: "select",
        required: true,
        condition: {
          parameterId: "effect",
          values: ["poison"],
        },
        options: [
          {
            label: "1W2 Stärke-Schaden",
            value: "strength",
            nwscriptValue: "IP_CONST_POISON_1D2_STRDAMAGE",
          },
          {
            label: "1W2 Geschicklichkeits-Schaden",
            value: "dexterity",
            nwscriptValue: "IP_CONST_POISON_1D2_DEXDAMAGE",
          },
          {
            label: "1W2 Konstitutions-Schaden",
            value: "constitution",
            nwscriptValue: "IP_CONST_POISON_1D2_CONDAMAGE",
          },
          {
            label: "1W2 Intelligenz-Schaden",
            value: "intelligence",
            nwscriptValue: "IP_CONST_POISON_1D2_INTDAMAGE",
          },
          {
            label: "1W2 Weisheits-Schaden",
            value: "wisdom",
            nwscriptValue: "IP_CONST_POISON_1D2_WISDAMAGE",
          },
          {
            label: "1W2 Charisma-Schaden",
            value: "charisma",
            nwscriptValue: "IP_CONST_POISON_1D2_CHADAMAGE",
          },
        ],
      },
      {
        id: "diseaseType",
        label: "Krankheit",
        type: "select",
        required: true,
        condition: {
          parameterId: "effect",
          values: ["disease"],
        },
        options: [
          {
            label: "Blinding Sickness",
            value: "blindingSickness",
            nwscriptValue: "DISEASE_BLINDING_SICKNESS",
          },
          {
            label: "Cackle Fever",
            value: "cackleFever",
            nwscriptValue: "DISEASE_CACKLE_FEVER",
          },
          {
            label: "Devil Chills",
            value: "devilChills",
            nwscriptValue: "DISEASE_DEVIL_CHILLS",
          },
          {
            label: "Demon Fever",
            value: "demonFever",
            nwscriptValue: "DISEASE_DEMON_FEVER",
          },
          {
            label: "Filth Fever",
            value: "filthFever",
            nwscriptValue: "DISEASE_FILTH_FEVER",
          },
          {
            label: "Mindfire",
            value: "mindfire",
            nwscriptValue: "DISEASE_MINDFIRE",
          },
          {
            label: "Mummy Rot",
            value: "mummyRot",
            nwscriptValue: "DISEASE_MUMMY_ROT",
          },
          {
            label: "Red Ache",
            value: "redAche",
            nwscriptValue: "DISEASE_RED_ACHE",
          },
          {
            label: "Shakes",
            value: "shakes",
            nwscriptValue: "DISEASE_SHAKES",
          },
          {
            label: "Slimy Doom",
            value: "slimyDoom",
            nwscriptValue: "DISEASE_SLIMY_DOOM",
          },
          {
            label: "Red Slaad Eggs",
            value: "redSlaadEggs",
            nwscriptValue: "DISEASE_RED_SLAAD_EGGS",
          },
          {
            label: "Ghoul Rot",
            value: "ghoulRot",
            nwscriptValue: "DISEASE_GHOUL_ROT",
          },
          {
            label: "Zombie Creep",
            value: "zombieCreep",
            nwscriptValue: "DISEASE_ZOMBIE_CREEP",
          },
          {
            label: "Dread Blisters",
            value: "dreadBlisters",
            nwscriptValue: "DISEASE_DREAD_BLISTERS",
          },
          {
            label: "Burrow Maggots",
            value: "burrowMaggots",
            nwscriptValue: "DISEASE_BURROW_MAGGOTS",
          },
          {
            label: "Soldier Shakes",
            value: "soldierShakes",
            nwscriptValue: "DISEASE_SOLDIER_SHAKES",
          },
          {
            label: "Vermin Madness",
            value: "verminMadness",
            nwscriptValue: "DISEASE_VERMIN_MADNESS",
          },
        ],
      },
      {
        id: "ability",
        label: "Attribut",
        type: "select",
        required: true,
        condition: {
          parameterId: "effect",
          values: ["abilityDrain"],
        },
        options: [
          {
            label: "Stärke",
            value: "strength",
            nwscriptValue: "IP_CONST_ABILITY_STR",
          },
          {
            label: "Geschicklichkeit",
            value: "dexterity",
            nwscriptValue: "IP_CONST_ABILITY_DEX",
          },
          {
            label: "Konstitution",
            value: "constitution",
            nwscriptValue: "IP_CONST_ABILITY_CON",
          },
          {
            label: "Intelligenz",
            value: "intelligence",
            nwscriptValue: "IP_CONST_ABILITY_INT",
          },
          {
            label: "Weisheit",
            value: "wisdom",
            nwscriptValue: "IP_CONST_ABILITY_WIS",
          },
          {
            label: "Charisma",
            value: "charisma",
            nwscriptValue: "IP_CONST_ABILITY_CHA",
          },
        ],
      },
      {
        id: "amount",
        label: "Wert",
        type: "select",
        required: true,
        condition: {
          parameterId: "effect",
          values: ["levelDrain", "wounding"],
        },
        options: [
          {
            label: "1",
            value: 1,
          },
          {
            label: "2",
            value: 2,
          },
          {
            label: "3",
            value: 3,
          },
          {
            label: "4",
            value: 4,
          },
          {
            label: "5",
            value: 5,
          },
        ],
      },
      {
        id: "race",
        label: "Rasse",
        type: "select",
        required: true,
        condition: {
          parameterId: "effect",
          values: ["slayRace"],
        },
        options: racialTypeOptions,
      },
      {
        id: "alignmentGroup",
        label: "Gesinnungsgruppe",
        type: "select",
        required: true,
        condition: {
          parameterId: "effect",
          values: ["slayAlignmentGroup"],
        },
        options: alignmentGroupOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_ON_HIT_PROPERTIES",
      functionName: "ItemPropertyOnHitProps",
      parameterOrder: [
        "effect",
        "saveDC",
        "duration",
        "poisonType",
        "diseaseType",
        "ability",
        "amount",
        "race",
        "alignmentGroup",
        "alignment",
      ],
    },
  },
  {
    id: "abilityBonus",
    name: "Attributsbonus",
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
    keyParameters: ["ability"],
    parameters: [
      {
        id: "ability",
        label: "Attribut",
        type: "select",
        required: true,
        options: [
          {
            label: "Stärke",
            value: "strength",
            nwscriptValue: "IP_CONST_ABILITY_STR",
          },
          {
            label: "Geschicklichkeit",
            value: "dexterity",
            nwscriptValue: "IP_CONST_ABILITY_DEX",
          },
          {
            label: "Konstitution",
            value: "constitution",
            nwscriptValue: "IP_CONST_ABILITY_CON",
          },
          {
            label: "Intelligenz",
            value: "intelligence",
            nwscriptValue: "IP_CONST_ABILITY_INT",
          },
          {
            label: "Weisheit",
            value: "wisdom",
            nwscriptValue: "IP_CONST_ABILITY_WIS",
          },
          {
            label: "Charisma",
            value: "charisma",
            nwscriptValue: "IP_CONST_ABILITY_CHA",
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
      propertyType: "ITEM_PROPERTY_ABILITY_BONUS",
      functionName: "ItemPropertyAbilityBonus",
      parameterOrder: ["ability", "bonus"],
    },
  },
  {
    id: "skillBonus",
    name: "Fertigkeitsbonus",
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
    keyParameters: ["skill"],
    parameters: [
      {
        id: "skill",
        label: "Fertigkeit",
        type: "select",
        required: true,
        options: [
          {
            label: "Tierempathie",
            value: "animalEmpathy",
            nwscriptValue: "SKILL_ANIMAL_EMPATHY",
          },
          {
            label: "Schätzen",
            value: "appraise",
            nwscriptValue: "SKILL_APPRAISE",
          },
          {
            label: "Bluffen",
            value: "bluff",
            nwscriptValue: "SKILL_BLUFF",
          },
          {
            label: "Konzentration",
            value: "concentration",
            nwscriptValue: "SKILL_CONCENTRATION",
          },
          {
            label: "Rüstung herstellen",
            value: "craftArmor",
            nwscriptValue: "SKILL_CRAFT_ARMOR",
          },
          {
            label: "Fallen herstellen",
            value: "craftTrap",
            nwscriptValue: "SKILL_CRAFT_TRAP",
          },
          {
            label: "Waffen herstellen",
            value: "craftWeapon",
            nwscriptValue: "SKILL_CRAFT_WEAPON",
          },
          {
            label: "Fallen entschärfen",
            value: "disableTrap",
            nwscriptValue: "SKILL_DISABLE_TRAP",
          },
          {
            label: "Disziplin",
            value: "discipline",
            nwscriptValue: "SKILL_DISCIPLINE",
          },
          {
            label: "Heilen",
            value: "heal",
            nwscriptValue: "SKILL_HEAL",
          },
          {
            label: "Verstecken",
            value: "hide",
            nwscriptValue: "SKILL_HIDE",
          },
          {
            label: "Einschüchtern",
            value: "intimidate",
            nwscriptValue: "SKILL_INTIMIDATE",
          },
          {
            label: "Lauschen",
            value: "listen",
            nwscriptValue: "SKILL_LISTEN",
          },
          {
            label: "Sagenkunde",
            value: "lore",
            nwscriptValue: "SKILL_LORE",
          },
          {
            label: "Leise bewegen",
            value: "moveSilently",
            nwscriptValue: "SKILL_MOVE_SILENTLY",
          },
          {
            label: "Schlösser öffnen",
            value: "openLock",
            nwscriptValue: "SKILL_OPEN_LOCK",
          },
          {
            label: "Parieren",
            value: "parry",
            nwscriptValue: "SKILL_PARRY",
          },
          {
            label: "Auftreten",
            value: "perform",
            nwscriptValue: "SKILL_PERFORM",
          },
          {
            label: "Überreden",
            value: "persuade",
            nwscriptValue: "SKILL_PERSUADE",
          },
          {
            label: "Taschendiebstahl",
            value: "pickPocket",
            nwscriptValue: "SKILL_PICK_POCKET",
          },
          {
            label: "Reiten",
            value: "ride",
            nwscriptValue: "SKILL_RIDE",
          },
          {
            label: "Suchen",
            value: "search",
            nwscriptValue: "SKILL_SEARCH",
          },
          {
            label: "Fallen stellen",
            value: "setTrap",
            nwscriptValue: "SKILL_SET_TRAP",
          },
          {
            label: "Zauberkunde",
            value: "spellcraft",
            nwscriptValue: "SKILL_SPELLCRAFT",
          },
          {
            label: "Entdecken",
            value: "spot",
            nwscriptValue: "SKILL_SPOT",
          },
          {
            label: "Provozieren",
            value: "taunt",
            nwscriptValue: "SKILL_TAUNT",
          },
          {
            label: "Tänzeln",
            value: "tumble",
            nwscriptValue: "SKILL_TUMBLE",
          },
          {
            label: "Magischen Gegenstand benutzen",
            value: "useMagicDevice",
            nwscriptValue: "SKILL_USE_MAGIC_DEVICE",
          },
        ],
      },
      {
        id: "bonus",
        label: "Bonus",
        type: "number",
        required: true,
        min: 1,
        max: 50,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_SKILL_BONUS",
      functionName: "ItemPropertySkillBonus",
      parameterOrder: ["skill", "bonus"],
    },
  },

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
  {
    id: "keen",
    name: "Verbesserte kritische Trefferchance",
    allowedSlots: ["weapon"],
    parameters: [],
    nwscript: {
      propertyType: "ITEM_PROPERTY_KEEN",
      functionName: "ItemPropertyKeen",
    },
  },
  {
    id: "massiveCriticals",
    name: "Massive kritische Treffer",
    allowedSlots: ["weapon"],
    parameters: [
      {
        id: "damage",
        label: "Zusatzschaden",
        type: "select",
        required: true,
        options: damageBonusOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_MASSIVE_CRITICALS",
      functionName: "ItemPropertyMassiveCrits",
      parameterOrder: ["damage"],
    },
  },
  {
    id: "attackBonus",
    name: "Angriffsbonus",
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
      propertyType: "ITEM_PROPERTY_ATTACK_BONUS",
      functionName: "ItemPropertyAttackBonus",
      parameterOrder: ["bonus"],
    },
  },
  {
    id: "attackBonusVsRace",
    name: "Angriffsbonus gegen Rasse",
    allowedSlots: ["weapon"],
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
        label: "Bonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_ATTACK_BONUS_VS_RACIAL_GROUP",
      functionName: "ItemPropertyAttackBonusVsRace",
      parameterOrder: ["race", "bonus"],
    },
  },
  {
    id: "attackBonusVsAlignmentGroup",
    name: "Angriffsbonus gegen Gesinnungsgruppe",
    allowedSlots: ["weapon"],
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
        label: "Bonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_ATTACK_BONUS_VS_ALIGNMENT_GROUP",
      functionName: "ItemPropertyAttackBonusVsAlign",
      parameterOrder: ["alignmentGroup", "bonus"],
    },
  },
  {
    id: "attackBonusVsAlignment",
    name: "Angriffsbonus gegen Gesinnung",
    allowedSlots: ["weapon"],
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
        label: "Bonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_ATTACK_BONUS_VS_SPECIFIC_ALIGNMENT",
      functionName: "ItemPropertyAttackBonusVsSAlign",
      parameterOrder: ["alignment", "bonus"],
    },
  },
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
    id: "weightReduction",
    name: "Gewichtsreduzierung",
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
    parameters: [
      {
        id: "reduction",
        label: "Gewichtsreduzierung",
        type: "select",
        required: true,
        options: reducedWeightOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_WEIGHT_REDUCTION",
      functionName: "ItemPropertyWeightReduction",
      parameterOrder: ["reduction"],
    },
  },

  {
    id: "light",
    name: "Licht",
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
    parameters: [
      {
        id: "brightness",
        label: "Helligkeit",
        type: "select",
        required: true,
        options: lightBrightnessOptions,
      },
      {
        id: "color",
        label: "Farbe",
        type: "select",
        required: true,
        options: lightColorOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_LIGHT",
      functionName: "ItemPropertyLight",
      parameterOrder: ["brightness", "color"],
    },
  },
]
