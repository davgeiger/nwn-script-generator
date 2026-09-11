import type { ItemPropertyDefinition } from "@/types/properties"
import {
  alignmentGroupOptions,
  alignmentOptions,
  damageBonusOptions,
  damageTypeOptions,
  itemVisualOptions,
  physicalDamageTypeOptions,
  racialTypeOptions,
  standardDamageTypeOptions,
  unlimitedAmmoOptions,
} from "@/data/propertyOptions"

export const weaponProperties: ItemPropertyDefinition[] = [
  // enhancementBonus
  {
    id: "enhancementBonus",
    name: "Verbesserungsbonus",
    allowedSlots: ["weapon"],
    allowedWeaponCategories: ["melee"],
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
        options: damageTypeOptions,
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
    allowedWeaponCategories: ["melee"],
    allowedPhysicalDamageTypes: ["piercing", "slashing"],
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
  // Vampiric Regeneration
  {
    id: "vampiricRegeneration",
    name: "Vampirische Regeneration",
    allowedSlots: ["weapon"],
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
      propertyType: "ITEM_PROPERTY_REGENERATION_VAMPIRIC",
      functionName: "ItemPropertyVampiricRegeneration",
      parameterOrder: ["amount"],
    },
  },
  // Damage Bonus vs Alignment Group
  {
    id: "damageBonusVsAlignmentGroup",
    name: "Schadensbonus gegen Gesinnungsgruppe",
    allowedSlots: ["weapon"],
    keyParameters: ["alignmentGroup", "damageType"],
    parameters: [
      {
        id: "alignmentGroup",
        label: "Gesinnungsgruppe",
        type: "select",
        required: true,
        options: alignmentGroupOptions,
      },
      {
        id: "damageType",
        label: "Schadensart",
        type: "select",
        required: true,
        options: standardDamageTypeOptions,
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
      propertyType: "ITEM_PROPERTY_DAMAGE_BONUS_VS_ALIGNMENT_GROUP",
      functionName: "ItemPropertyDamageBonusVsAlign",
      parameterOrder: ["alignmentGroup", "damageType", "damage"],
    },
  },
  // Damage Bonus vs race
  {
    id: "damageBonusVsRace",
    name: "Schadensbonus gegen Rasse",
    allowedSlots: ["weapon"],
    keyParameters: ["race", "damageType"],
    parameters: [
      {
        id: "race",
        label: "Rasse",
        type: "select",
        required: true,
        options: racialTypeOptions,
      },
      {
        id: "damageType",
        label: "Schadensart",
        type: "select",
        required: true,
        options: standardDamageTypeOptions,
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
      propertyType: "ITEM_PROPERTY_DAMAGE_BONUS_VS_RACIAL_GROUP",
      functionName: "ItemPropertyDamageBonusVsRace",
      parameterOrder: ["race", "damageType", "damage"],
    },
  },
  // Damage Bonus vs Alignment
  {
    id: "damageBonusVsAlignment",
    name: "Schadensbonus gegen Gesinnung",
    allowedSlots: ["weapon"],
    keyParameters: ["alignment", "damageType"],
    parameters: [
      {
        id: "alignment",
        label: "Gesinnung",
        type: "select",
        required: true,
        options: alignmentOptions,
      },
      {
        id: "damageType",
        label: "Schadensart",
        type: "select",
        required: true,
        options: standardDamageTypeOptions,
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
      propertyType: "ITEM_PROPERTY_DAMAGE_BONUS_VS_SPECIFIC_ALIGNMENT",
      functionName: "ItemPropertyDamageBonusVsSAlign",
      parameterOrder: ["alignment", "damageType", "damage"],
    },
  },
  {
    id: "enhancementBonusVsRace",
    name: "Verbesserungsbonus gegen Rasse",
    allowedSlots: ["weapon"],
    allowedWeaponCategories: ["melee"],
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
        label: "Verbesserungsbonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_ENHANCEMENT_BONUS_VS_RACIAL_GROUP",
      functionName: "ItemPropertyEnhancementBonusVsRace",
      parameterOrder: ["race", "bonus"],
    },
  },
  {
    id: "enhancementBonusVsAlignmentGroup",
    name: "Verbesserungsbonus gegen Gesinnungsgruppe",
    allowedSlots: ["weapon"],
    allowedWeaponCategories: ["melee"],
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
        label: "Verbesserungsbonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_ENHANCEMENT_BONUS_VS_ALIGNMENT_GROUP",
      functionName: "ItemPropertyEnhancementBonusVsAlign",
      parameterOrder: ["alignmentGroup", "bonus"],
    },
  },
  {
    id: "enhancementBonusVsAlignment",
    name: "Verbesserungsbonus gegen Gesinnung",
    allowedSlots: ["weapon"],
    allowedWeaponCategories: ["melee"],
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
        label: "Verbesserungsbonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_ENHANCEMENT_BONUS_VS_SPECIFIC_ALIGN",
      functionName: "ItemPropertyEnhancementBonusVsSAlign",
      parameterOrder: ["alignment", "bonus"],
    },
  },
  {
    id: "mighty",
    name: "Mighty",
    allowedSlots: ["weapon"],
    allowedWeaponCategories: ["ranged"],
    parameters: [
      {
        id: "bonus",
        label: "Stärke-Bonus",
        type: "number",
        required: true,
        min: 1,
        max: 20,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_MAXRANGE_STRENGTH_MOD",
      functionName: "ItemPropertyMaxRangeStrengthMod",
      parameterOrder: ["bonus"],
    },
  },
  {
    id: "unlimitedAmmo",
    name: "Unbegrenzte Munition",
    allowedSlots: ["weapon"],
    allowedWeaponCategories: ["ranged"],
    parameters: [
      {
        id: "ammo",
        label: "Munition",
        type: "select",
        required: true,
        options: unlimitedAmmoOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_UNLIMITED_AMMUNITION",
      functionName: "ItemPropertyUnlimitedAmmo",
      parameterOrder: ["ammo"],
    },
  },
  {
    id: "visualEffect",
    name: "Visueller Waffeneffekt",
    allowedSlots: ["weapon"],
    allowedWeaponCategories: ["melee"],
    parameters: [
      {
        id: "effect",
        label: "Effekt",
        type: "select",
        required: true,
        options: itemVisualOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_VISUALEFFECT",
      functionName: "ItemPropertyVisualEffect",
      parameterOrder: ["effect"],
    },
  },
  {
    id: "holyAvenger",
    name: "Heiliger Rächer",
    allowedSlots: ["weapon"],
    parameters: [],
    nwscript: {
      propertyType: "ITEM_PROPERTY_HOLY_AVENGER",
      functionName: "ItemPropertyHolyAvenger",
    },
  },
  {
    id: "extraMeleeDamageType",
    name: "Zusätzliche Nahkampf-Schadensart",
    allowedSlots: ["weapon"],
    allowedWeaponCategories: ["melee"],
    parameters: [
      {
        id: "damageType",
        label: "Schadensart",
        type: "select",
        required: true,
        options: physicalDamageTypeOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_EXTRA_MELEE_DAMAGE_TYPE",
      functionName: "ItemPropertyExtraMeleeDamageType",
      parameterOrder: ["damageType"],
    },
  },
  {
    id: "extraRangedDamageType",
    name: "Zusätzliche Fernkampf-Schadensart",
    allowedSlots: ["weapon"],
    allowedWeaponCategories: ["ranged"],
    parameters: [
      {
        id: "damageType",
        label: "Schadensart",
        type: "select",
        required: true,
        options: physicalDamageTypeOptions,
      },
    ],
    nwscript: {
      propertyType: "ITEM_PROPERTY_EXTRA_RANGED_DAMAGE_TYPE",
      functionName: "ItemPropertyExtraRangeDamageType",
      parameterOrder: ["damageType"],
    },
  },
]
