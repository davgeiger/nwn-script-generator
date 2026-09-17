import type { PropertyParameterOption } from "@/types/properties"
import { sortOptionsByLabel } from "./propertyOptions"

export const onHitCastSpellOptions: PropertyParameterOption[] =
  sortOptionsByLabel([
    {
      label: "Säurenebel",
      value: "acidFog",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ACID_FOG",
    },
    {
      label: "Säurespritzer",
      value: "acidSplash",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ACID_SPLASH",
    },
    {
      label: "Balagarn's Eisenhorn",
      value: "balagarnsIronHorn",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BALAGARNSIRONHORN",
    },
    {
      label: "Blitzkugeln",
      value: "ballLightning",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BALL_LIGHTNING",
    },
    {
      label: "Verfluchen",
      value: "bane",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BANE",
    },
    {
      label: "Verbannung",
      value: "banishment",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BANISHMENT",
    },
    {
      label: "Fluch",
      value: "bestowCurse",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BESTOW_CURSE",
    },
    {
      label: "Bigbys Geballte Faust",
      value: "bigbysClenchedFist",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BIGBYS_CLENCHED_FIST",
    },
    {
      label: "Bigbys Zerdrückende Hand",
      value: "bigbysCrushingHand",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BIGBYS_CRUSHING_HAND",
    },
    {
      label: "Bigbys Kräftige Hand",
      value: "bigbysForcefulHand",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BIGBYS_FORCEFUL_HAND",
    },
    {
      label: "Bigbys Zugreifende Hand",
      value: "bigbysGraspingHand",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BIGBYS_GRASPING_HAND",
    },
    {
      label: "Bigbys Behindernde Hand",
      value: "bigbysInterposingHand",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BIGBYS_INTERPOSING_HAND",
    },
    {
      label: "Klingenbarriere",
      value: "bladeBarrier",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BLADE_BARRIER",
    },
    {
      label: "Blind- und Taubheit verursachen",
      value: "blindnessAndDeafness",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BLINDNESS_AND_DEAFNESS",
    },
    {
      label: "Bombardierung",
      value: "bombardment",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BOMBARDMENT",
    },
    {
      label: "Blitze herbeirufen",
      value: "callLightning",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CALL_LIGHTNING",
    },
    {
      label: "Kugelblitz",
      value: "chainLightning",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CHAIN_LIGHTNING",
    },
    {
      label: "Todeswolke",
      value: "cloudkill",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CLOUDKILL",
    },
    {
      label: "Entzünden",
      value: "combust",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_COMBUST",
    },
    {
      label: "Verwirrung",
      value: "confusion",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CONFUSION",
    },
    {
      label: "Ansteckung",
      value: "contagion",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CONTAGION",
    },
    {
      label: "Kriechender Tod",
      value: "creepingDoom",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CREEPING_DOOM",
    },
    {
      label: "Zerfall",
      value: "crumble",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CRUMBLE",
    },
    {
      label: "Dunkelheit",
      value: "darkness",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DARKNESS",
    },
    {
      label: "Benommenheit",
      value: "daze",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DAZE",
    },
    {
      label: "Ohrenbetäubender Klang (5 Runden taub, Zähigkeitswurf [SG 15] für keine Wirkung)",
      value: "deafeningClang",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DEAFENING_CLNG",
    },
    {
      label: "Spätzündender Feuerball",
      value: "delayedBlastFireball",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DELAYED_BLAST_FIREBALL",
    },
    {
      label: "Zerstörung",
      value: "destruction",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DESTRUCTION",
    },
    {
      label: "Fortschicken",
      value: "dismissal",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DISMISSAL",
    },
    {
      label: "Magie bannen",
      value: "dispelMagic",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DISPEL_MAGIC",
    },
    {
      label: "Unheil",
      value: "doom",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DOOM",
    },
    {
      label: "Ertränken",
      value: "drown",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DROWN",
    },
    {
      label: "Erdbeben",
      value: "earthquake",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_EARTHQUAKE",
    },
    {
      label: "Elektrischer Schlag",
      value: "electricJolt",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ELECTRIC_JOLT",
    },
    {
      label: "Entzug von Lebenskraft",
      value: "energyDrain",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ENERGY_DRAIN",
    },
    {
      label: "Entkräftung",
      value: "enervation",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ENERVATION",
    },
    {
      label: "Verstricken",
      value: "entangle",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ENTANGLE",
    },
    {
      label: "Evards Schwarze Tentakel",
      value: "evardsBlackTentacles",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_EVARDS_BLACK_TENTACLES",
    },
    {
      label: "Böser Fluch",
      value: "evilBlight",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_EVIL_BLIGHT",
    },
    {
      label: "Furcht",
      value: "fear",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FEAR",
    },
    {
      label: "Schwachsinn",
      value: "feeblemind",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FEEBLEMIND",
    },
    {
      label: "Feuersturm",
      value: "fireStorm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FIRE_STORM",
    },
    {
      label: "Feuerball",
      value: "fireball",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FIREBALL",
    },
    {
      label: "Flächenbrand",
      value: "firebrand",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FIREBRAND",
    },
    {
      label: "Flammenstoß",
      value: "flameLash",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FLAME_LASH",
    },
    {
      label: "Flammenschlag",
      value: "flameStrike",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FLAME_STRIKE",
    },
    {
      label: "Aufblitzen",
      value: "flare",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FLARE",
    },
    {
      label: "Fleisch zu Stein",
      value: "fleshToStone",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FLESH_TO_STONE",
    },
    {
      label: "Einfrieren (Angreifer verlangsamen, Zähigkeitswurf SG 10 + Zauberstufe)",
      value: "freeze",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FREEZE",
    },
    {
      label: "Gedlees Blitzring",
      value: "gedleesElectricLoop",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GEDLEES_ELECTRIC_LOOP",
    },
    {
      label: "Ghulhand",
      value: "ghoulTouch",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GHOUL_TOUCH",
    },
    {
      label: "Schmieren",
      value: "grease",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GREASE",
    },
    {
      label: "Großer Donnerschlag",
      value: "greatThunderclap",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GREAT_THUNDERCLAP",
    },
    {
      label: "Mächtige Magie bannen",
      value: "greaterDispelling",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GREATER_DISPELLING",
    },
    {
      label: "Mächtige Magische Bresche",
      value: "greaterSpellBreach",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GREATER_SPELL_BREACH",
    },
    {
      label: "Windstoß",
      value: "gustOfWind",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GUST_OF_WIND",
    },
    {
      label: "Hammer der Götter",
      value: "hammerOfTheGods",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HAMMER_OF_THE_GODS",
    },
    {
      label: "Leid",
      value: "harm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HARM",
    },
    {
      label: "Tier festhalten",
      value: "holdAnimal",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HOLD_ANIMAL",
    },
    {
      label: "Monster festhalten",
      value: "holdMonster",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HOLD_MONSTER",
    },
    {
      label: "Person festhalten",
      value: "holdPerson",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HOLD_PERSON",
    },
    {
      label: "Horizikaul's Knall",
      value: "horizikaulsBoom",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HORIZIKAULS_BOOM",
    },
    {
      label: "Verdorren",
      value: "horridWilting",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HORRID_WILTING",
    },
    {
      label: "Eissturm",
      value: "iceStorm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ICE_STORM",
    },
    {
      label: "Implosion",
      value: "implosion",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_IMPLOSION",
    },
    {
      label: "Flammende Wolke",
      value: "incendiaryCloud",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INCENDIARY_CLOUD",
    },
    {
      label: "Inferno",
      value: "inferno",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFERNO",
    },
    {
      label: "Madenbefall",
      value: "infestationOfMaggots",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFESTATION_OF_MAGGOTS",
    },
    {
      label: "Kritische Wunden verursachen",
      value: "inflictCriticalWounds",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFLICT_CRITICAL_WOUNDS",
    },
    {
      label: "Leichte Wunden verursachen",
      value: "inflictLightWounds",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFLICT_LIGHT_WOUNDS",
    },
    {
      label: "Kleinere Wunde verursachen",
      value: "inflictMinorWounds",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFLICT_MINOR_WOUNDS",
    },
    {
      label: "Mittelschwere Wunden verursachen",
      value: "inflictModerateWounds",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFLICT_MODERATE_WOUNDS",
    },
    {
      label: "Schwere Wunden verursachen",
      value: "inflictSeriousWounds",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFLICT_SERIOUS_WOUNDS",
    },
    {
      label: "Intelligente Waffe",
      value: "intelligentWeaponOnHit",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INTELLIGENT_WEAPON_ONHIT",
    },
    {
      label: "Issacs Mächtiger Geschosshagel",
      value: "isaacsGreaterMissileStorm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ISAACS_GREATER_MISSILE_STORM",
    },
    {
      label: "Issacs Schwacher Geschosshagel",
      value: "isaacsLesserMissileStorm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ISAACS_LESSER_MISSILE_STORM",
    },
    {
      label: "Niederwerfen (nur Monster, SG 10 + Zauberstufe)",
      value: "knockdown",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_KNOCKDOWN",
    },
    {
      label: "Schwache Magie bannen",
      value: "lesserDispel",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_LESSER_DISPEL",
    },
    {
      label: "Schwache Magische Bresche",
      value: "lesserSpellBreach",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_LESSER_SPELL_BREACH",
    },
    {
      label: "Licht",
      value: "light",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_LIGHT",
    },
    {
      label: "Blitz",
      value: "lightningBolt",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_LIGHTNING_BOLT",
    },
    {
      label: "Magisches Geschoss",
      value: "magicMissile",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MAGIC_MISSILE",
    },
    {
      label: "Massenblind- und Taubheit verursachen",
      value: "massBlindnessAndDeafness",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MASS_BLINDNESS_AND_DEAFNESS",
    },
    {
      label: "Massenbezauberung",
      value: "massCharm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MASS_CHARM",
    },
    {
      label: "Melfs Säurepfeil",
      value: "melfsAcidArrow",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MELFS_ACID_ARROW",
    },
    {
      label: "Mestils Säureodem",
      value: "mestilsAcidBreath",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MESTILS_ACID_BREATH",
    },
    {
      label: "Meteoritenschwarm",
      value: "meteorSwarm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_METEOR_SWARM",
    },
    {
      label: "Gedankennebel",
      value: "mindFog",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MIND_FOG",
    },
    {
      label: "Negativer Energieschlag",
      value: "negativeEnergyBurst",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_NEGATIVE_ENERGY_BURST",
    },
    {
      label: "Chaosschild (2%, den Angreifer zu treffen)",
      value: "chaosShield",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHIT_CHAOSSHIELD",
    },
    {
      label: "Constrict Weapon",
      value: "constrictWeapon",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHIT_CONSTRICTWEAPON",
    },
    {
      label: "Dunkelfeuer (Verbrennen)",
      value: "darkfire",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHIT_DARKFIRE",
    },
    {
      label: "Gehirn extrahieren",
      value: "extractBrain",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHIT_EXTRACTBRAIN",
    },
    {
      label: "Flammenwaffe-Eigenschaften (Feuerschaden)",
      value: "fireDamage",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHIT_FIREDAMAGE",
    },
    {
      label: "Riss in den Ebenen - Eigenschaften (Schwarze Klinge der Verdammnis)",
      value: "planarRift",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHIT_PLANARRIFT",
    },
    {
      label: "Geweihter Bolzen, Eigenschaften (Rakshasa töten)",
      value: "slayRakshasa",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHIT_SLAYRAKSHASA",
    },
    {
      label: "Teleportation Geschosseigenschaften",
      value: "teleport",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHIT_TELEPORT",
    },
    {
      label: "Lähmende Berührung (Halb-Leichnam)",
      value: "demilichTouch",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHITDEMILICHTOUCH",
    },
    {
      label: "Lähmende Berührung (Drachenleichnam)",
      value: "dracolichTouch",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHITDRACOLICHTOUCH",
    },
    {
      label: "Flammende Haut",
      value: "flamingSkin",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHITFLAMINGSKIN",
    },
    {
      label: "Rüstung zerstören (Bebilith)",
      value: "ruinArmorBebilith",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ONHITRUINARMORBEBILITH",
    },
    {
      label: "Tödliches Phantom",
      value: "phantasmalKiller",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_PHANTASMAL_KILLER",
    },
    {
      label: "Vergiften",
      value: "poison",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_POISON",
    },
    {
      label: "Wort der Macht: Tod",
      value: "powerWordKill",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_POWER_WORD_KILL",
    },
    {
      label: "Wort der Macht: Betäubung",
      value: "powerWordStun",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_POWER_WORD_STUN",
    },
    {
      label: "Stachelfeuer",
      value: "quillfire",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_QUILLFIRE",
    },
    {
      label: "Erschrecken",
      value: "scare",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SCARE",
    },
    {
      label: "Schillernder Ball",
      value: "scintillatingSphere",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SCINTILLATING_SPHERE",
    },
    {
      label: "Gleißendes Licht",
      value: "searingLight",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SEARING_LIGHT",
    },
    {
      label: "Stille",
      value: "silence",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SILENCE",
    },
    {
      label: "Schneller Tod",
      value: "slayLiving",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SLAY_LIVING",
    },
    {
      label: "Schlaf",
      value: "sleep",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SLEEP",
    },
    {
      label: "Verlangsamen",
      value: "slow",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SLOW",
    },
    {
      label: "Geräuschexplosion",
      value: "soundBurst",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SOUND_BURST",
    },
    {
      label: "Dornenwuchs",
      value: "spikeGrowth",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SPIKE_GROWTH",
    },
    {
      label: "Stinkende Wolke",
      value: "stinkingCloud",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_STINKING_CLOUD",
    },
    {
      label: "Stein zu Fleisch",
      value: "stoneToFlesh",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_STONE_TO_FLESH",
    },
    {
      label: "Steinerner Griff",
      value: "stonehold",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_STONEHOLD",
    },
    {
      label: "Sturm der Vergeltung",
      value: "stormOfVengeance",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_STORM_OF_VENGEANCE",
    },
    {
      label: "Sonnenstrahl",
      value: "sunbeam",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SUNBEAM",
    },
    {
      label: "Sonnenfeuer",
      value: "sunburst",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SUNBURST",
    },
    {
      label: "Tashas Fürchterlicher Lachanfall",
      value: "tashasHideousLaughter",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_TASHAS_HIDEOUS_LAUGHTER",
    },
    {
      label: "Tod den Untoten",
      value: "undeathToDeath",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_UNDEATH_TO_DEATH",
    },
    {
      label: "Ewiger Feind der Untoten",
      value: "undeathsEternalFoe",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_UNDEATHS_ETERNAL_FOE",
    },
    {
      label: "Vampirgriff",
      value: "vampiricTouch",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_VAMPIRIC_TOUCH",
    },
    {
      label: "Wehgeschrei der Todesfee",
      value: "wailOfTheBanshee",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_WAIL_OF_THE_BANSHEE",
    },
    {
      label: "Feuerwand",
      value: "wallOfFire",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_WALL_OF_FIRE",
    },
    {
      label: "Spinnennetz",
      value: "web",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_WEB",
    },
    {
      label: "Unheimliches Schicksal",
      value: "weird",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_WEIRD",
    },
    {
      label: "Wort des Glaubens",
      value: "wordOfFaith",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_WORD_OF_FAITH",
    },
    {
      label: "Verletzendes Flüstern",
      value: "woundingWhispers",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_WOUNDING_WHISPERS",
    },
  ])
