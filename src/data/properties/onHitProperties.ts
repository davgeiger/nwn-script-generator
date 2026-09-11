import type { ItemPropertyDefinition } from "@/types/properties"
import {
  alignmentGroupOptions,
  alignmentOptions,
  racialTypeOptions,
} from "@/data/propertyOptions"

export const onHitProperties: ItemPropertyDefinition[] = [
  // onHit
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
  // onHitCastSpell
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
]
