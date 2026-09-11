import type { ItemPropertyDefinition } from "@/types/properties"
import {
  alignmentGroupOptions,
  alignmentOptions,
  damageBonusOptions,
  racialTypeOptions,
} from "@/data/propertyOptions"

export const weaponProperties: ItemPropertyDefinition[] = [
  // enhancementBonus
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

  // damageBonus
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
  // keen
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
  // massiveCriticals
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
  // attackBonus
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
  // attackBonusVsRace
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
  // attackBonusVsAlignmentGroup
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
  // attackBonusVsAlignment
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
]
