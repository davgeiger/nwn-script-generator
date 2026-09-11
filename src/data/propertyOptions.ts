import type { PropertyParameterOption } from "@/types/properties"

export const damageBonusOptions: PropertyParameterOption[] = [
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
    label: "+3",
    value: "3",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_3",
  },
  {
    label: "+4",
    value: "4",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_4",
  },
  {
    label: "+5",
    value: "5",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_5",
  },
  {
    label: "+6",
    value: "6",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_6",
  },
  {
    label: "+7",
    value: "7",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_7",
  },
  {
    label: "+8",
    value: "8",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_8",
  },
  {
    label: "+9",
    value: "9",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_9",
  },
  {
    label: "+10",
    value: "10",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_10",
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
    label: "1W12",
    value: "1d12",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_1d12",
  },

  {
    label: "2W4",
    value: "2d4",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_2d4",
  },
  {
    label: "2W6",
    value: "2d6",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_2d6",
  },
  {
    label: "2W8",
    value: "2d8",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_2d8",
  },
  {
    label: "2W10",
    value: "2d10",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_2d10",
  },
  {
    label: "2W12",
    value: "2d12",
    nwscriptValue: "IP_CONST_DAMAGEBONUS_2d12",
  },
]

export const alignmentGroupOptions: PropertyParameterOption[] = [
  {
    label: "Alle",
    value: "all",
    nwscriptValue: "IP_CONST_ALIGNMENTGROUP_ALL",
  },
  {
    label: "Gut",
    value: "good",
    nwscriptValue: "IP_CONST_ALIGNMENTGROUP_GOOD",
  },
  {
    label: "Böse",
    value: "evil",
    nwscriptValue: "IP_CONST_ALIGNMENTGROUP_EVIL",
  },
  {
    label: "Rechtschaffen",
    value: "lawful",
    nwscriptValue: "IP_CONST_ALIGNMENTGROUP_LAWFUL",
  },
  {
    label: "Chaotisch",
    value: "chaotic",
    nwscriptValue: "IP_CONST_ALIGNMENTGROUP_CHAOTIC",
  },
  {
    label: "Neutral",
    value: "neutral",
    nwscriptValue: "IP_CONST_ALIGNMENTGROUP_NEUTRAL",
  },
]

export const alignmentOptions: PropertyParameterOption[] = [
  {
    label: "Rechtschaffen gut",
    value: "lawfulGood",
    nwscriptValue: "IP_CONST_ALIGNMENT_LG",
  },
  {
    label: "Neutral gut",
    value: "neutralGood",
    nwscriptValue: "IP_CONST_ALIGNMENT_NG",
  },
  {
    label: "Chaotisch gut",
    value: "chaoticGood",
    nwscriptValue: "IP_CONST_ALIGNMENT_CG",
  },
  {
    label: "Rechtschaffen neutral",
    value: "lawfulNeutral",
    nwscriptValue: "IP_CONST_ALIGNMENT_LN",
  },
  {
    label: "Neutral",
    value: "trueNeutral",
    nwscriptValue: "IP_CONST_ALIGNMENT_TN",
  },
  {
    label: "Chaotisch neutral",
    value: "chaoticNeutral",
    nwscriptValue: "IP_CONST_ALIGNMENT_CN",
  },
  {
    label: "Rechtschaffen böse",
    value: "lawfulEvil",
    nwscriptValue: "IP_CONST_ALIGNMENT_LE",
  },
  {
    label: "Neutral böse",
    value: "neutralEvil",
    nwscriptValue: "IP_CONST_ALIGNMENT_NE",
  },
  {
    label: "Chaotisch böse",
    value: "chaoticEvil",
    nwscriptValue: "IP_CONST_ALIGNMENT_CE",
  },
]

export const racialTypeOptions: PropertyParameterOption[] = [
  {
    label: "Zwerg",
    value: "dwarf",
    nwscriptValue: "IP_CONST_RACIALTYPE_DWARF",
  },
  {
    label: "Elf",
    value: "elf",
    nwscriptValue: "IP_CONST_RACIALTYPE_ELF",
  },
  {
    label: "Gnom",
    value: "gnome",
    nwscriptValue: "IP_CONST_RACIALTYPE_GNOME",
  },
  {
    label: "Halbling",
    value: "halfling",
    nwscriptValue: "IP_CONST_RACIALTYPE_HALFLING",
  },
  {
    label: "Halbelf",
    value: "halfElf",
    nwscriptValue: "IP_CONST_RACIALTYPE_HALFELF",
  },
  {
    label: "Halbork",
    value: "halfOrc",
    nwscriptValue: "IP_CONST_RACIALTYPE_HALFORC",
  },
  {
    label: "Mensch",
    value: "human",
    nwscriptValue: "IP_CONST_RACIALTYPE_HUMAN",
  },
  {
    label: "Aberration",
    value: "aberration",
    nwscriptValue: "IP_CONST_RACIALTYPE_ABERRATION",
  },
  {
    label: "Tier",
    value: "animal",
    nwscriptValue: "IP_CONST_RACIALTYPE_ANIMAL",
  },
  {
    label: "Bestie",
    value: "beast",
    nwscriptValue: "IP_CONST_RACIALTYPE_BEAST",
  },
  {
    label: "Konstrukt",
    value: "construct",
    nwscriptValue: "IP_CONST_RACIALTYPE_CONSTRUCT",
  },
  {
    label: "Drache",
    value: "dragon",
    nwscriptValue: "IP_CONST_RACIALTYPE_DRAGON",
  },
  {
    label: "Goblinoider Humanoider",
    value: "goblinoid",
    nwscriptValue: "IP_CONST_RACIALTYPE_HUMANOID_GOBLINOID",
  },
  {
    label: "Monströser Humanoider",
    value: "monstrousHumanoid",
    nwscriptValue: "IP_CONST_RACIALTYPE_HUMANOID_MONSTROUS",
  },
  {
    label: "Orkischer Humanoider",
    value: "orc",
    nwscriptValue: "IP_CONST_RACIALTYPE_HUMANOID_ORC",
  },
  {
    label: "Reptilien-Humanoider",
    value: "reptilian",
    nwscriptValue: "IP_CONST_RACIALTYPE_HUMANOID_REPTILIAN",
  },
  {
    label: "Elementar",
    value: "elemental",
    nwscriptValue: "IP_CONST_RACIALTYPE_ELEMENTAL",
  },
  {
    label: "Feenwesen",
    value: "fey",
    nwscriptValue: "IP_CONST_RACIALTYPE_FEY",
  },
  {
    label: "Riese",
    value: "giant",
    nwscriptValue: "IP_CONST_RACIALTYPE_GIANT",
  },
  {
    label: "Magische Bestie",
    value: "magicalBeast",
    nwscriptValue: "IP_CONST_RACIALTYPE_MAGICAL_BEAST",
  },
  {
    label: "Externer",
    value: "outsider",
    nwscriptValue: "IP_CONST_RACIALTYPE_OUTSIDER",
  },
  {
    label: "Gestaltwandler",
    value: "shapechanger",
    nwscriptValue: "IP_CONST_RACIALTYPE_SHAPECHANGER",
  },
  {
    label: "Untoter",
    value: "undead",
    nwscriptValue: "IP_CONST_RACIALTYPE_UNDEAD",
  },
  {
    label: "Ungeziefer",
    value: "vermin",
    nwscriptValue: "IP_CONST_RACIALTYPE_VERMIN",
  },
]

export const physicalDamageTypeOptions: PropertyParameterOption[] = [
  {
    label: "Wucht",
    value: "bludgeoning",
    nwscriptValue: "IP_CONST_DAMAGETYPE_BLUDGEONING",
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
]

export const spellSchoolOptions: PropertyParameterOption[] = [
  {
    label: "Bannzauber",
    value: "abjuration",
    nwscriptValue: "IP_CONST_SPELLSCHOOL_ABJURATION",
  },
  {
    label: "Beschwörung",
    value: "conjuration",
    nwscriptValue: "IP_CONST_SPELLSCHOOL_CONJURATION",
  },
  {
    label: "Erkenntnismagie",
    value: "divination",
    nwscriptValue: "IP_CONST_SPELLSCHOOL_DIVINATION",
  },
  {
    label: "Verzauberung",
    value: "enchantment",
    nwscriptValue: "IP_CONST_SPELLSCHOOL_ENCHANTMENT",
  },
  {
    label: "Hervorrufung",
    value: "evocation",
    nwscriptValue: "IP_CONST_SPELLSCHOOL_EVOCATION",
  },
  {
    label: "Illusion",
    value: "illusion",
    nwscriptValue: "IP_CONST_SPELLSCHOOL_ILLUSION",
  },
  {
    label: "Nekromantie",
    value: "necromancy",
    nwscriptValue: "IP_CONST_SPELLSCHOOL_NECROMANCY",
  },
  {
    label: "Verwandlung",
    value: "transmutation",
    nwscriptValue: "IP_CONST_SPELLSCHOOL_TRANSMUTATION",
  },
]

export const spellImmunityOptions: PropertyParameterOption[] = [
  {
    label: "Acid Fog",
    value: "acidFog",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_ACID_FOG",
  },
  { label: "Aid", value: "aid", nwscriptValue: "IP_CONST_IMMUNITYSPELL_AID" },
  {
    label: "Aura of Vitality",
    value: "auraOfVitality",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_AURA_OF_VITALITY",
  },
  {
    label: "Barkskin",
    value: "barkskin",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_BARKSKIN",
  },
  {
    label: "Bestow Curse",
    value: "bestowCurse",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_BESTOW_CURSE",
  },
  {
    label: "Blindness and Deafness",
    value: "blindnessAndDeafness",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_BLINDNESS_AND_DEAFNESS",
  },
  {
    label: "Burning Hands",
    value: "burningHands",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_BURNING_HANDS",
  },
  {
    label: "Call Lightning",
    value: "callLightning",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CALL_LIGHTNING",
  },
  {
    label: "Chain Lightning",
    value: "chainLightning",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CHAIN_LIGHTNING",
  },
  {
    label: "Charm Monster",
    value: "charmMonster",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CHARM_MONSTER",
  },
  {
    label: "Charm Person",
    value: "charmPerson",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CHARM_PERSON",
  },
  {
    label: "Charm Person or Animal",
    value: "charmPersonOrAnimal",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CHARM_PERSON_OR_ANIMAL",
  },
  {
    label: "Circle of Death",
    value: "circleOfDeath",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CIRCLE_OF_DEATH",
  },
  {
    label: "Circle of Doom",
    value: "circleOfDoom",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CIRCLE_OF_DOOM",
  },
  {
    label: "Cloudkill",
    value: "cloudkill",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CLOUDKILL",
  },
  {
    label: "Color Spray",
    value: "colorSpray",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_COLOR_SPRAY",
  },
  {
    label: "Cone of Cold",
    value: "coneOfCold",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CONE_OF_COLD",
  },
  {
    label: "Confusion",
    value: "confusion",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CONFUSION",
  },
  {
    label: "Contagion",
    value: "contagion",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CONTAGION",
  },
  {
    label: "Control Undead",
    value: "controlUndead",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CONTROL_UNDEAD",
  },
  {
    label: "Cure Critical Wounds",
    value: "cureCriticalWounds",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CURE_CRITICAL_WOUNDS",
  },
  {
    label: "Cure Light Wounds",
    value: "cureLightWounds",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CURE_LIGHT_WOUNDS",
  },
  {
    label: "Cure Minor Wounds",
    value: "cureMinorWounds",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CURE_MINOR_WOUNDS",
  },
  {
    label: "Cure Moderate Wounds",
    value: "cureModerateWounds",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CURE_MODERATE_WOUNDS",
  },
  {
    label: "Cure Serious Wounds",
    value: "cureSeriousWounds",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_CURE_SERIOUS_WOUNDS",
  },
  {
    label: "Darkness",
    value: "darkness",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_DARKNESS",
  },
  {
    label: "Daze",
    value: "daze",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_DAZE",
  },
  {
    label: "Death Ward",
    value: "deathWard",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_DEATH_WARD",
  },
  {
    label: "Delayed Blast Fireball",
    value: "delayedBlastFireball",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_DELAYED_BLAST_FIREBALL",
  },
  {
    label: "Dismissal",
    value: "dismissal",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_DISMISSAL",
  },
  {
    label: "Dispel Magic",
    value: "dispelMagic",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_DISPEL_MAGIC",
  },
  {
    label: "Dominate Animal",
    value: "dominateAnimal",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_DOMINATE_ANIMAL",
  },
  {
    label: "Dominate Monster",
    value: "dominateMonster",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_DOMINATE_MONSTER",
  },
  {
    label: "Dominate Person",
    value: "dominatePerson",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_DOMINATE_PERSON",
  },
  {
    label: "Doom",
    value: "doom",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_DOOM",
  },
  {
    label: "Eagle's Splendor",
    value: "eaglesSplendor",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_EAGLE_SPLEDOR",
  },
  {
    label: "Energy Drain",
    value: "energyDrain",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_ENERGY_DRAIN",
  },
  {
    label: "Enervation",
    value: "enervation",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_ENERVATION",
  },
  {
    label: "Entangle",
    value: "entangle",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_ENTANGLE",
  },
  {
    label: "Evard's Black Tentacles",
    value: "evardsBlackTentacles",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_EVARDS_BLACK_TENTACLES",
  },
  {
    label: "Fear",
    value: "fear",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_FEAR",
  },
  {
    label: "Feeblemind",
    value: "feeblemind",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_FEEBLEMIND",
  },
  {
    label: "Find Traps",
    value: "findTraps",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_FIND_TRAPS",
  },
  {
    label: "Finger of Death",
    value: "fingerOfDeath",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_FINGER_OF_DEATH",
  },
  {
    label: "Fire Storm",
    value: "fireStorm",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_FIRE_STORM",
  },
  {
    label: "Fireball",
    value: "fireball",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_FIREBALL",
  },
  {
    label: "Flame Arrow",
    value: "flameArrow",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_FLAME_ARROW",
  },
  {
    label: "Flame Lash",
    value: "flameLash",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_FLAME_LASH",
  },
  {
    label: "Flame Strike",
    value: "flameStrike",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_FLAME_STRIKE",
  },
  {
    label: "Fox's Cunning",
    value: "foxsCunning",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_FOXS_CUNNING",
  },
  {
    label: "Freedom of Movement",
    value: "freedomOfMovement",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_FREEDOM_OF_MOVEMENT",
  },
  {
    label: "Grease",
    value: "grease",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_GREASE",
  },
  {
    label: "Greater Bull's Strength",
    value: "greaterBullsStrength",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_GREATER_BULLS_STRENGTH",
  },
  {
    label: "Greater Cat's Grace",
    value: "greaterCatsGrace",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_GREATER_CATS_GRACE",
  },
  {
    label: "Greater Dispelling",
    value: "greaterDispelling",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_GREATER_DISPELLING",
  },
  {
    label: "Greater Eagle's Splendor",
    value: "greaterEaglesSplendor",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_GREATER_EAGLES_SPLENDOR",
  },
  {
    label: "Greater Endurance",
    value: "greaterEndurance",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_GREATER_ENDURANCE",
  },
  {
    label: "Greater Fox's Cunning",
    value: "greaterFoxsCunning",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_GREATER_FOXS_CUNNING",
  },
  {
    label: "Greater Owl's Wisdom",
    value: "greaterOwlsWisdom",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_GREATER_OWLS_WISDOM",
  },
  {
    label: "Greater Planar Binding",
    value: "greaterPlanarBinding",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_GREATER_PLANAR_BINDING",
  },
  {
    label: "Greater Shadow Conjuration",
    value: "greaterShadowConjuration",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_GREATER_SHADOW_CONJURATION",
  },
  {
    label: "Greater Spell Breach",
    value: "greaterSpellBreach",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_GREATER_SPELL_BREACH",
  },
  {
    label: "Hammer of the Gods",
    value: "hammerOfTheGods",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_HAMMER_OF_THE_GODS",
  },
  {
    label: "Harm",
    value: "harm",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_HARM",
  },
  {
    label: "Heal",
    value: "heal",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_HEAL",
  },
  {
    label: "Healing Circle",
    value: "healingCircle",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_HEALING_CIRCLE",
  },
  {
    label: "Hold Animal",
    value: "holdAnimal",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_HOLD_ANIMAL",
  },
  {
    label: "Hold Monster",
    value: "holdMonster",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_HOLD_MONSTER",
  },
  {
    label: "Hold Person",
    value: "holdPerson",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_HOLD_PERSON",
  },
  {
    label: "Implosion",
    value: "implosion",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_IMPLOSION",
  },
  {
    label: "Improved Invisibility",
    value: "improvedInvisibility",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_IMPROVED_INVISIBILITY",
  },
  {
    label: "Incendiary Cloud",
    value: "incendiaryCloud",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_INCENDIARY_CLOUD",
  },
  {
    label: "Invisibility Purge",
    value: "invisibilityPurge",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_INVISIBILITY_PURGE",
  },
  {
    label: "Legend Lore",
    value: "legendLore",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_LEGEND_LORE",
  },
  {
    label: "Lesser Dispel",
    value: "lesserDispel",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_LESSER_DISPEL",
  },
  {
    label: "Lesser Planar Binding",
    value: "lesserPlanarBinding",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_LESSER_PLANAR_BINDING",
  },
  {
    label: "Lesser Spell Breach",
    value: "lesserSpellBreach",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_LESSER_SPELL_BREACH",
  },
  {
    label: "Lightning Bolt",
    value: "lightningBolt",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_LIGHTNING_BOLT",
  },
  {
    label: "Magic Circle Against Alignment",
    value: "magicCircleAgainstAlignment",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_MAGIC_CIRCLE_AGAINST_ALIGNMENT",
  },
  {
    label: "Magic Missile",
    value: "magicMissile",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_MAGIC_MISSILE",
  },
  {
    label: "Mass Blindness and Deafness",
    value: "massBlindnessAndDeafness",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_MASS_BLINDNESS_AND_DEAFNESS",
  },
  {
    label: "Mass Charm",
    value: "massCharm",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_MASS_CHARM",
  },
  {
    label: "Mass Heal",
    value: "massHeal",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_MASS_HEAL",
  },
  {
    label: "Melf's Acid Arrow",
    value: "melfsAcidArrow",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_MELFS_ACID_ARROW",
  },
  {
    label: "Meteor Swarm",
    value: "meteorSwarm",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_METEOR_SWARM",
  },
  {
    label: "Mind Fog",
    value: "mindFog",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_MIND_FOG",
  },
  {
    label: "Mordenkainen's Disjunction",
    value: "mordenkainensDisjunction",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_MORDENKAINENS_DISJUNCTION",
  },
  {
    label: "Owl's Wisdom",
    value: "owlsWisdom",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_OWLS_WISDOM",
  },
  {
    label: "Phantasmal Killer",
    value: "phantasmalKiller",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_PHANTASMAL_KILLER",
  },
  {
    label: "Planar Binding",
    value: "planarBinding",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_PLANAR_BINDING",
  },
  {
    label: "Poison",
    value: "poison",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_POISON",
  },
  {
    label: "Power Word Kill",
    value: "powerWordKill",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_POWER_WORD_KILL",
  },
  {
    label: "Power Word Stun",
    value: "powerWordStun",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_POWER_WORD_STUN",
  },
  {
    label: "Prismatic Spray",
    value: "prismaticSpray",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_PRISMATIC_SPRAY",
  },
  {
    label: "Ray of Enfeeblement",
    value: "rayOfEnfeeblement",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_RAY_OF_ENFEEBLEMENT",
  },
  {
    label: "Ray of Frost",
    value: "rayOfFrost",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_RAY_OF_FROST",
  },
  {
    label: "Regenerate",
    value: "regenerate",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_REGENERATE",
  },
  {
    label: "Scare",
    value: "scare",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_SCARE",
  },
  {
    label: "Searing Light",
    value: "searingLight",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_SEARING_LIGHT",
  },
  {
    label: "Shades",
    value: "shades",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_SHADES",
  },
  {
    label: "Shadow Conjuration",
    value: "shadowConjuration",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_SHADOW_CONJURATION",
  },
  {
    label: "Silence",
    value: "silence",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_SILENCE",
  },
  {
    label: "Slay Living",
    value: "slayLiving",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_SLAY_LIVING",
  },
  {
    label: "Sleep",
    value: "sleep",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_SLEEP",
  },
  {
    label: "Slow",
    value: "slow",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_SLOW",
  },
  {
    label: "Sound Burst",
    value: "soundBurst",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_SOUND_BURST",
  },
  {
    label: "Stinking Cloud",
    value: "stinkingCloud",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_STINKING_CLOUD",
  },
  {
    label: "Stoneskin",
    value: "stoneskin",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_STONESKIN",
  },
  {
    label: "Storm of Vengeance",
    value: "stormOfVengeance",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_STORM_OF_VENGEANCE",
  },
  {
    label: "Sunbeam",
    value: "sunbeam",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_SUNBEAM",
  },
  {
    label: "Virtue",
    value: "virtue",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_VIRTUE",
  },
  {
    label: "Wail of the Banshee",
    value: "wailOfTheBanshee",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_WAIL_OF_THE_BANSHEE",
  },
  {
    label: "War Cry",
    value: "warCry",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_WAR_CRY",
  },
  { label: "Web", value: "web", nwscriptValue: "IP_CONST_IMMUNITYSPELL_WEB" },
  {
    label: "Weird",
    value: "weird",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_WEIRD",
  },
  {
    label: "Word of Faith",
    value: "wordOfFaith",
    nwscriptValue: "IP_CONST_IMMUNITYSPELL_WORD_OF_FAITH",
  },
]

export const reducedWeightOptions: PropertyParameterOption[] = [
  {
    label: "10 %",
    value: 10,
    nwscriptValue: "IP_CONST_REDUCEDWEIGHT_10_PERCENT",
  },
  {
    label: "20 %",
    value: 20,
    nwscriptValue: "IP_CONST_REDUCEDWEIGHT_20_PERCENT",
  },
  {
    label: "40 %",
    value: 40,
    nwscriptValue: "IP_CONST_REDUCEDWEIGHT_40_PERCENT",
  },
  {
    label: "60 %",
    value: 60,
    nwscriptValue: "IP_CONST_REDUCEDWEIGHT_60_PERCENT",
  },
  {
    label: "80 %",
    value: 80,
    nwscriptValue: "IP_CONST_REDUCEDWEIGHT_80_PERCENT",
  },
]

export const weightIncreaseOptions: PropertyParameterOption[] = [
  {
    label: "5 lbs",
    value: 5,
    nwscriptValue: "IP_CONST_WEIGHTINCREASE_5_LBS",
  },
  {
    label: "10 lbs",
    value: 10,
    nwscriptValue: "IP_CONST_WEIGHTINCREASE_10_LBS",
  },
  {
    label: "15 lbs",
    value: 15,
    nwscriptValue: "IP_CONST_WEIGHTINCREASE_15_LBS",
  },
  {
    label: "30 lbs",
    value: 30,
    nwscriptValue: "IP_CONST_WEIGHTINCREASE_30_LBS",
  },
  {
    label: "50 lbs",
    value: 50,
    nwscriptValue: "IP_CONST_WEIGHTINCREASE_50_LBS",
  },
  {
    label: "100 lbs",
    value: 100,
    nwscriptValue: "IP_CONST_WEIGHTINCREASE_100_LBS",
  },
]

export const lightBrightnessOptions: PropertyParameterOption[] = [
  {
    label: "Gedämpft",
    value: "dim",
    nwscriptValue: "IP_CONST_LIGHTBRIGHTNESS_DIM",
  },
  {
    label: "Niedrig",
    value: "low",
    nwscriptValue: "IP_CONST_LIGHTBRIGHTNESS_LOW",
  },
  {
    label: "Normal",
    value: "normal",
    nwscriptValue: "IP_CONST_LIGHTBRIGHTNESS_NORMAL",
  },
  {
    label: "Hell",
    value: "bright",
    nwscriptValue: "IP_CONST_LIGHTBRIGHTNESS_BRIGHT",
  },
]

export const lightColorOptions: PropertyParameterOption[] = [
  {
    label: "Blau",
    value: "blue",
    nwscriptValue: "IP_CONST_LIGHTCOLOR_BLUE",
  },
  {
    label: "Gelb",
    value: "yellow",
    nwscriptValue: "IP_CONST_LIGHTCOLOR_YELLOW",
  },
  {
    label: "Violett",
    value: "purple",
    nwscriptValue: "IP_CONST_LIGHTCOLOR_PURPLE",
  },
  {
    label: "Rot",
    value: "red",
    nwscriptValue: "IP_CONST_LIGHTCOLOR_RED",
  },
  {
    label: "Grün",
    value: "green",
    nwscriptValue: "IP_CONST_LIGHTCOLOR_GREEN",
  },
  {
    label: "Orange",
    value: "orange",
    nwscriptValue: "IP_CONST_LIGHTCOLOR_ORANGE",
  },
  {
    label: "Weiß",
    value: "white",
    nwscriptValue: "IP_CONST_LIGHTCOLOR_WHITE",
  },
]

export const damageVulnerabilityOptions: PropertyParameterOption[] = [
  {
    label: "5 %",
    value: 5,
    nwscriptValue: "IP_CONST_DAMAGEVULNERABILITY_5_PERCENT",
  },
  {
    label: "10 %",
    value: 10,
    nwscriptValue: "IP_CONST_DAMAGEVULNERABILITY_10_PERCENT",
  },
  {
    label: "25 %",
    value: 25,
    nwscriptValue: "IP_CONST_DAMAGEVULNERABILITY_25_PERCENT",
  },
  {
    label: "50 %",
    value: 50,
    nwscriptValue: "IP_CONST_DAMAGEVULNERABILITY_50_PERCENT",
  },
  {
    label: "75 %",
    value: 75,
    nwscriptValue: "IP_CONST_DAMAGEVULNERABILITY_75_PERCENT",
  },
  {
    label: "90 %",
    value: 90,
    nwscriptValue: "IP_CONST_DAMAGEVULNERABILITY_90_PERCENT",
  },
  {
    label: "100 %",
    value: 100,
    nwscriptValue: "IP_CONST_DAMAGEVULNERABILITY_100_PERCENT",
  },
]

export const damageTypeOptions: PropertyParameterOption[] = [
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
    label: "Magisch",
    value: "magical",
    nwscriptValue: "IP_CONST_DAMAGETYPE_MAGICAL",
  },
  {
    label: "Negativ",
    value: "negative",
    nwscriptValue: "IP_CONST_DAMAGETYPE_NEGATIVE",
  },
  {
    label: "Stich",
    value: "piercing",
    nwscriptValue: "IP_CONST_DAMAGETYPE_PIERCING",
  },
  {
    label: "Positiv",
    value: "positive",
    nwscriptValue: "IP_CONST_DAMAGETYPE_POSITIVE",
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
]

export const bonusFeatOptions: PropertyParameterOption[] = [
  {
    label: "Wachsamkeit",
    value: "alertness",
    nwscriptValue: "IP_CONST_FEAT_ALERTNESS",
  },
  {
    label: "Beidhändigkeit",
    value: "ambidextrous",
    nwscriptValue: "IP_CONST_FEAT_AMBIDEXTROUS",
  },
  {
    label: "Rüstungskenntnis: Schwer",
    value: "armorProfHeavy",
    nwscriptValue: "IP_CONST_FEAT_ARMOR_PROF_HEAVY",
  },
  {
    label: "Rüstungskenntnis: Leicht",
    value: "armorProfLight",
    nwscriptValue: "IP_CONST_FEAT_ARMOR_PROF_LIGHT",
  },
  {
    label: "Rüstungskenntnis: Mittel",
    value: "armorProfMedium",
    nwscriptValue: "IP_CONST_FEAT_ARMOR_PROF_MEDIUM",
  },
  {
    label: "Großer Rundumschlag",
    value: "cleave",
    nwscriptValue: "IP_CONST_FEAT_CLEAVE",
  },
  {
    label: "Kampfzaubern",
    value: "combatCasting",
    nwscriptValue: "IP_CONST_FEAT_COMBAT_CASTING",
  },
  {
    label: "Entwaffnen",
    value: "disarm",
    nwscriptValue: "IP_CONST_FEAT_DISARM",
  },
  {
    label: "Entwaffnen mit Peitsche",
    value: "disarmWhip",
    nwscriptValue: "IP_CONST_FEAT_DISARM_WHIP",
  },
  {
    label: "Ausweichen",
    value: "dodge",
    nwscriptValue: "IP_CONST_FEAT_DODGE",
  },
  {
    label: "Zusätzliches Untote vertreiben",
    value: "extraTurning",
    nwscriptValue: "IP_CONST_FEAT_EXTRA_TURNING",
  },
  {
    label: "Verstecken im offenen Gelände",
    value: "hideInPlainSight",
    nwscriptValue: "IP_CONST_FEAT_HIDE_IN_PLAIN_SIGHT",
  },
  {
    label: "Verbesserter kritischer Treffer: Waffenlos",
    value: "improvedCriticalUnarmed",
    nwscriptValue: "IP_CONST_FEAT_IMPCRITUNARM",
  },
  {
    label: "Niederschlag",
    value: "knockdown",
    nwscriptValue: "IP_CONST_FEAT_KNOCKDOWN",
  },
  {
    label: "Beweglichkeit",
    value: "mobility",
    nwscriptValue: "IP_CONST_FEAT_MOBILITY",
  },
  {
    label: "Kernschuss",
    value: "pointBlankShot",
    nwscriptValue: "IP_CONST_FEAT_POINTBLANK",
  },
  {
    label: "Heftiger Angriff",
    value: "powerAttack",
    nwscriptValue: "IP_CONST_FEAT_POWERATTACK",
  },
  {
    label: "Schneller Schuss",
    value: "rapidShot",
    nwscriptValue: "IP_CONST_FEAT_RAPID_SHOT",
  },
  {
    label: "Schildkenntnis",
    value: "shieldProficiency",
    nwscriptValue: "IP_CONST_FEAT_SHIELD_PROFICIENCY",
  },
  {
    label: "Hinterhältiger Angriff 1W6",
    value: "sneakAttack1d6",
    nwscriptValue: "IP_CONST_FEAT_SNEAK_ATTACK_1D6",
  },
  {
    label: "Hinterhältiger Angriff 2W6",
    value: "sneakAttack2d6",
    nwscriptValue: "IP_CONST_FEAT_SNEAK_ATTACK_2D6",
  },
  {
    label: "Hinterhältiger Angriff 3W6",
    value: "sneakAttack3d6",
    nwscriptValue: "IP_CONST_FEAT_SNEAK_ATTACK_3D6",
  },
  {
    label: "Hinterhältiger Angriff 5W6",
    value: "sneakAttack5d6",
    nwscriptValue: "IP_CONST_FEAT_SNEAK_ATTACK_5D6",
  },

  {
    label: "Zauberfokus: Bannzauber",
    value: "spellFocusAbjuration",
    nwscriptValue: "IP_CONST_FEAT_SPELLFOCUSABJ",
  },
  {
    label: "Zauberfokus: Beschwörung",
    value: "spellFocusConjuration",
    nwscriptValue: "IP_CONST_FEAT_SPELLFOCUSCON",
  },
  {
    label: "Zauberfokus: Erkenntnismagie",
    value: "spellFocusDivination",
    nwscriptValue: "IP_CONST_FEAT_SPELLFOCUSDIV",
  },
  {
    label: "Zauberfokus: Verzauberung",
    value: "spellFocusEnchantment",
    nwscriptValue: "IP_CONST_FEAT_SPELLFOCUSENC",
  },
  {
    label: "Zauberfokus: Hervorrufung",
    value: "spellFocusEvocation",
    nwscriptValue: "IP_CONST_FEAT_SPELLFOCUSEVO",
  },
  {
    label: "Zauberfokus: Illusion",
    value: "spellFocusIllusion",
    nwscriptValue: "IP_CONST_FEAT_SPELLFOCUSILL",
  },
  {
    label: "Zauberfokus: Nekromantie",
    value: "spellFocusNecromancy",
    nwscriptValue: "IP_CONST_FEAT_SPELLFOCUSNEC",
  },
  {
    label: "Zauberdurchdringung",
    value: "spellPenetration",
    nwscriptValue: "IP_CONST_FEAT_SPELLPENETRATION",
  },

  {
    label: "Gift verwenden",
    value: "usePoison",
    nwscriptValue: "IP_CONST_FEAT_USE_POISON",
  },
  {
    label: "Kampf mit zwei Waffen",
    value: "twoWeaponFighting",
    nwscriptValue: "IP_CONST_FEAT_TWO_WEAPON_FIGHTING",
  },
  {
    label: "Waffenfinesse",
    value: "weaponFinesse",
    nwscriptValue: "IP_CONST_FEAT_WEAPFINESSE",
  },
  {
    label: "Waffenkenntnis: Exotisch",
    value: "weaponProfExotic",
    nwscriptValue: "IP_CONST_FEAT_WEAPON_PROF_EXOTIC",
  },
  {
    label: "Waffenkenntnis: Kriegerisch",
    value: "weaponProfMartial",
    nwscriptValue: "IP_CONST_FEAT_WEAPON_PROF_MARTIAL",
  },
  {
    label: "Waffenkenntnis: Einfach",
    value: "weaponProfSimple",
    nwscriptValue: "IP_CONST_FEAT_WEAPON_PROF_SIMPLE",
  },
  {
    label: "Waffenspezialisierung: Waffenlos",
    value: "weaponSpecializationUnarmed",
    nwscriptValue: "IP_CONST_FEAT_WEAPSPEUNARM",
  },
  {
    label: "Wirbelwindangriff",
    value: "whirlwind",
    nwscriptValue: "IP_CONST_FEAT_WHIRLWIND",
  },
]

export const unlimitedAmmoOptions: PropertyParameterOption[] = [
  {
    label: "Standard",
    value: "basic",
    nwscriptValue: "IP_CONST_UNLIMITEDAMMO_BASIC",
  },
  {
    label: "1W6 Feuer",
    value: "1d6Fire",
    nwscriptValue: "IP_CONST_UNLIMITEDAMMO_1D6FIRE",
  },
  {
    label: "1W6 Kälte",
    value: "1d6Cold",
    nwscriptValue: "IP_CONST_UNLIMITEDAMMO_1D6COLD",
  },
  {
    label: "1W6 Elektrizität",
    value: "1d6Lightning",
    nwscriptValue: "IP_CONST_UNLIMITEDAMMO_1D6LIGHT",
  },
  {
    label: "+1",
    value: "plus1",
    nwscriptValue: "IP_CONST_UNLIMITEDAMMO_PLUS1",
  },
  {
    label: "+2",
    value: "plus2",
    nwscriptValue: "IP_CONST_UNLIMITEDAMMO_PLUS2",
  },
  {
    label: "+3",
    value: "plus3",
    nwscriptValue: "IP_CONST_UNLIMITEDAMMO_PLUS3",
  },
  {
    label: "+4",
    value: "plus4",
    nwscriptValue: "IP_CONST_UNLIMITEDAMMO_PLUS4",
  },
  {
    label: "+5",
    value: "plus5",
    nwscriptValue: "IP_CONST_UNLIMITEDAMMO_PLUS5",
  },
]

export const itemVisualOptions: PropertyParameterOption[] = [
  {
    label: "Säure",
    value: "acid",
    nwscriptValue: "ITEM_VISUAL_ACID",
  },
  {
    label: "Kälte",
    value: "cold",
    nwscriptValue: "ITEM_VISUAL_COLD",
  },
  {
    label: "Elektrisch",
    value: "electrical",
    nwscriptValue: "ITEM_VISUAL_ELECTRICAL",
  },
  {
    label: "Feuer",
    value: "fire",
    nwscriptValue: "ITEM_VISUAL_FIRE",
  },
  {
    label: "Schall",
    value: "sonic",
    nwscriptValue: "ITEM_VISUAL_SONIC",
  },
  {
    label: "Heilig",
    value: "holy",
    nwscriptValue: "ITEM_VISUAL_HOLY",
  },
  {
    label: "Böse",
    value: "evil",
    nwscriptValue: "ITEM_VISUAL_EVIL",
  },
]

export const arcaneSpellFailureOptions: PropertyParameterOption[] = [
  {
    label: "-50 %",
    value: -50,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_MINUS_50_PERCENT",
  },
  {
    label: "-45 %",
    value: -45,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_MINUS_45_PERCENT",
  },
  {
    label: "-40 %",
    value: -40,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_MINUS_40_PERCENT",
  },
  {
    label: "-35 %",
    value: -35,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_MINUS_35_PERCENT",
  },
  {
    label: "-30 %",
    value: -30,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_MINUS_30_PERCENT",
  },
  {
    label: "-25 %",
    value: -25,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_MINUS_25_PERCENT",
  },
  {
    label: "-20 %",
    value: -20,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_MINUS_20_PERCENT",
  },
  {
    label: "-15 %",
    value: -15,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_MINUS_15_PERCENT",
  },
  {
    label: "-10 %",
    value: -10,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_MINUS_10_PERCENT",
  },
  {
    label: "-5 %",
    value: -5,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_MINUS_5_PERCENT",
  },

  {
    label: "+5 %",
    value: 5,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_PLUS_5_PERCENT",
  },
  {
    label: "+10 %",
    value: 10,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_PLUS_10_PERCENT",
  },
  {
    label: "+15 %",
    value: 15,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_PLUS_15_PERCENT",
  },
  {
    label: "+20 %",
    value: 20,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_PLUS_20_PERCENT",
  },
  {
    label: "+25 %",
    value: 25,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_PLUS_25_PERCENT",
  },
  {
    label: "+30 %",
    value: 30,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_PLUS_30_PERCENT",
  },
  {
    label: "+35 %",
    value: 35,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_PLUS_35_PERCENT",
  },
  {
    label: "+40 %",
    value: 40,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_PLUS_40_PERCENT",
  },
  {
    label: "+45 %",
    value: 45,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_PLUS_45_PERCENT",
  },
  {
    label: "+50 %",
    value: 50,
    nwscriptValue: "IP_CONST_ARCANE_SPELL_FAILURE_PLUS_50_PERCENT",
  },
]

export const spellClassOptions: PropertyParameterOption[] = [
  {
    label: "Barde",
    value: "bard",
    nwscriptValue: "IP_CONST_CLASS_BARD",
  },
  {
    label: "Kleriker",
    value: "cleric",
    nwscriptValue: "IP_CONST_CLASS_CLERIC",
  },
  {
    label: "Druide",
    value: "druid",
    nwscriptValue: "IP_CONST_CLASS_DRUID",
  },
  {
    label: "Paladin",
    value: "paladin",
    nwscriptValue: "IP_CONST_CLASS_PALADIN",
  },
  {
    label: "Waldläufer",
    value: "ranger",
    nwscriptValue: "IP_CONST_CLASS_RANGER",
  },
  {
    label: "Hexenmeister",
    value: "sorcerer",
    nwscriptValue: "IP_CONST_CLASS_SORCERER",
  },
  {
    label: "Magier",
    value: "wizard",
    nwscriptValue: "IP_CONST_CLASS_WIZARD",
  },
]

export const classOptions: PropertyParameterOption[] = [
  {
    label: "Barbar",
    value: "barbarian",
    nwscriptValue: "CLASS_TYPE_BARBARIAN",
  },
  {
    label: "Barde",
    value: "bard",
    nwscriptValue: "CLASS_TYPE_BARD",
  },
  {
    label: "Kleriker",
    value: "cleric",
    nwscriptValue: "CLASS_TYPE_CLERIC",
  },
  {
    label: "Druide",
    value: "druid",
    nwscriptValue: "CLASS_TYPE_DRUID",
  },
  {
    label: "Kämpfer",
    value: "fighter",
    nwscriptValue: "CLASS_TYPE_FIGHTER",
  },
  {
    label: "Mönch",
    value: "monk",
    nwscriptValue: "CLASS_TYPE_MONK",
  },
  {
    label: "Paladin",
    value: "paladin",
    nwscriptValue: "CLASS_TYPE_PALADIN",
  },
  {
    label: "Waldläufer",
    value: "ranger",
    nwscriptValue: "CLASS_TYPE_RANGER",
  },
  {
    label: "Schurke",
    value: "rogue",
    nwscriptValue: "CLASS_TYPE_ROGUE",
  },
  {
    label: "Hexenmeister",
    value: "sorcerer",
    nwscriptValue: "CLASS_TYPE_SORCERER",
  },
  {
    label: "Magier",
    value: "wizard",
    nwscriptValue: "CLASS_TYPE_WIZARD",
  },

  // Prestigeklassen
  {
    label: "Arkaner Bogenschütze",
    value: "arcaneArcher",
    nwscriptValue: "CLASS_TYPE_ARCANE_ARCHER",
  },
  {
    label: "Assassine",
    value: "assassin",
    nwscriptValue: "CLASS_TYPE_ASSASSIN",
  },
  {
    label: "Waffenmeister",
    value: "weaponMaster",
    nwscriptValue: "CLASS_TYPE_WEAPON_MASTER",
  },
  {
    label: "Göttlicher Champion",
    value: "divineChampion",
    nwscriptValue: "CLASS_TYPE_DIVINECHAMPION",
  },
  {
    label: "Bleicher Meister",
    value: "paleMaster",
    nwscriptValue: "CLASS_TYPE_PALEMASTER",
  },
  {
    label: "Zwergenverteidiger",
    value: "dwarvenDefender",
    nwscriptValue: "CLASS_TYPE_DWARVEN_DEFENDER",
  },
  {
    label: "Purpurdrachenritter",
    value: "purpleDragonKnight",
    nwscriptValue: "CLASS_TYPE_PURPLE_DRAGON_KNIGHT",
  },
]

export const castSpellUsesOptions: PropertyParameterOption[] = [
  {
    label: "Einmalig",
    value: "single",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_SINGLE_USE",
  },
  {
    label: "1 Ladung pro Anwendung",
    value: "1Charge",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_1_CHARGE_PER_USE",
  },
  {
    label: "2 Ladungen pro Anwendung",
    value: "2Charges",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_2_CHARGES_PER_USE",
  },
  {
    label: "3 Ladungen pro Anwendung",
    value: "3Charges",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_3_CHARGES_PER_USE",
  },
  {
    label: "4 Ladungen pro Anwendung",
    value: "4Charges",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_4_CHARGES_PER_USE",
  },
  {
    label: "5 Ladungen pro Anwendung",
    value: "5Charges",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_5_CHARGES_PER_USE",
  },
  {
    label: "1× pro Tag",
    value: "1PerDay",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_1_USE_PER_DAY",
  },
  {
    label: "2× pro Tag",
    value: "2PerDay",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_2_USES_PER_DAY",
  },
  {
    label: "3× pro Tag",
    value: "3PerDay",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_3_USES_PER_DAY",
  },
  {
    label: "4× pro Tag",
    value: "4PerDay",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_4_USES_PER_DAY",
  },
  {
    label: "5× pro Tag",
    value: "5PerDay",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_5_USES_PER_DAY",
  },
  {
    label: "Unbegrenzt",
    value: "unlimited",
    nwscriptValue: "IP_CONST_CASTSPELL_NUMUSES_UNLIMITED_USE",
  },
]
