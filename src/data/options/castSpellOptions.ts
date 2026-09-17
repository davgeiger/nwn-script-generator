import type { PropertyParameterOption } from "@/types/properties"
import { sortOptionsByLabel } from "./propertyOptions"

export const castSpellOptions: PropertyParameterOption[] = sortOptionsByLabel([
  {
    label: "Säurenebel (11)",
    value: "acidFog11",
    nwscriptValue: "IP_CONST_CASTSPELL_ACID_FOG_11",
  },
  {
    label: "Säurespritzer (1)",
    value: "acidSplash1",
    nwscriptValue: "IP_CONST_CASTSPELL_ACID_SPLASH_1",
  },
  // {
  //   label: "Besondere Eigenschaft",
  //   value: "activateItem",
  //   nwscriptValue: "IP_CONST_CASTSPELL_ACTIVATE_ITEM",
  // },
  {
    label: "Beistand (3)",
    value: "aid3",
    nwscriptValue: "IP_CONST_CASTSPELL_AID_3",
  },
  {
    label: "Verstärken (5)",
    value: "amplify5",
    nwscriptValue: "IP_CONST_CASTSPELL_AMPLIFY_5",
  },
  {
    label: "Tote beleben (10)",
    value: "animateDead10",
    nwscriptValue: "IP_CONST_CASTSPELL_ANIMATE_DEAD_10",
  },
  {
    label: "Tote beleben (15)",
    value: "animateDead15",
    nwscriptValue: "IP_CONST_CASTSPELL_ANIMATE_DEAD_15",
  },
  {
    label: "Tote beleben (5)",
    value: "animateDead5",
    nwscriptValue: "IP_CONST_CASTSPELL_ANIMATE_DEAD_5",
  },
  {
    label: "Aura des Ruhms (7)",
    value: "auraofglory7",
    nwscriptValue: "IP_CONST_CASTSPELL_AURAOFGLORY_7",
  },
  {
    label: "Aura der Lebenskraft (13)",
    value: "auraOfVitality13",
    nwscriptValue: "IP_CONST_CASTSPELL_AURA_OF_VITALITY_13",
  },
  {
    label: "Aura gegen Gesinnung (15)",
    value: "auraVersusAlignment15",
    nwscriptValue: "IP_CONST_CASTSPELL_AURA_VERSUS_ALIGNMENT_15",
  },
  {
    label: "Erwecken (9)",
    value: "awaken9",
    nwscriptValue: "IP_CONST_CASTSPELL_AWAKEN_9",
  },
  {
    label: "Balagarn's Eisenhorn (7)",
    value: "balagarnsironhorn7",
    nwscriptValue: "IP_CONST_CASTSPELL_BALAGARNSIRONHORN_7",
  },
  {
    label: "Verfluchen (5)",
    value: "bane5",
    nwscriptValue: "IP_CONST_CASTSPELL_BANE_5",
  },
  {
    label: "Verbannung (15)",
    value: "banishment15",
    nwscriptValue: "IP_CONST_CASTSPELL_BANISHMENT_15",
  },
  {
    label: "Rindenhaut (12)",
    value: "barkskin12",
    nwscriptValue: "IP_CONST_CASTSPELL_BARKSKIN_12",
  },
  {
    label: "Rindenhaut (3)",
    value: "barkskin3",
    nwscriptValue: "IP_CONST_CASTSPELL_BARKSKIN_3",
  },
  {
    label: "Rindenhaut (6)",
    value: "barkskin6",
    nwscriptValue: "IP_CONST_CASTSPELL_BARKSKIN_6",
  },
  {
    label: "Fluch (11)",
    value: "bestowCurse5",
    nwscriptValue: "IP_CONST_CASTSPELL_BESTOW_CURSE_5",
  },
  {
    label: "Bigbys Geballte Faust (20)",
    value: "bigbysClenchedFist20",
    nwscriptValue: "IP_CONST_CASTSPELL_BIGBYS_CLENCHED_FIST_20",
  },
  {
    label: "Bigbys Zerdrückende Hand (20)",
    value: "bigbysCrushingHand20",
    nwscriptValue: "IP_CONST_CASTSPELL_BIGBYS_CRUSHING_HAND_20",
  },
  {
    label: "Bigbys Kräftige Hand (15)",
    value: "bigbysForcefulHand15",
    nwscriptValue: "IP_CONST_CASTSPELL_BIGBYS_FORCEFUL_HAND_15",
  },
  {
    label: "Bigbys Zugreifende Hand (17)",
    value: "bigbysGraspingHand17",
    nwscriptValue: "IP_CONST_CASTSPELL_BIGBYS_GRASPING_HAND_17",
  },
  {
    label: "Bigbys Behindernde Hand (15)",
    value: "bigbysInterposingHand15",
    nwscriptValue: "IP_CONST_CASTSPELL_BIGBYS_INTERPOSING_HAND_15",
  },
  {
    label: "Klingenbarriere (11)",
    value: "bladeBarrier11",
    nwscriptValue: "IP_CONST_CASTSPELL_BLADE_BARRIER_11",
  },
  {
    label: "Klingenbarriere (15)",
    value: "bladeBarrier15",
    nwscriptValue: "IP_CONST_CASTSPELL_BLADE_BARRIER_15",
  },
  {
    label: "Segnen (2)",
    value: "bless2",
    nwscriptValue: "IP_CONST_CASTSPELL_BLESS_2",
  },
  {
    label: "Blind- und Taubheit verursachen (3)",
    value: "blindnessDeafness3",
    nwscriptValue: "IP_CONST_CASTSPELL_BLINDNESS_DEAFNESS_3",
  },
  {
    label: "Blutrausch (7)",
    value: "bloodFrenzy7",
    nwscriptValue: "IP_CONST_CASTSPELL_BLOOD_FRENZY_7",
  },
  {
    label: "Bombardierung (20)",
    value: "bombardment20",
    nwscriptValue: "IP_CONST_CASTSPELL_BOMBARDMENT_20",
  },
  {
    label: "Bärenstärke (10)",
    value: "bullsStrength10",
    nwscriptValue: "IP_CONST_CASTSPELL_BULLS_STRENGTH_10",
  },
  {
    label: "Bärenstärke (15)",
    value: "bullsStrength15",
    nwscriptValue: "IP_CONST_CASTSPELL_BULLS_STRENGTH_15",
  },
  {
    label: "Bärenstärke (3)",
    value: "bullsStrength3",
    nwscriptValue: "IP_CONST_CASTSPELL_BULLS_STRENGTH_3",
  },
  {
    label: "Brennende Hände (2)",
    value: "burningHands2",
    nwscriptValue: "IP_CONST_CASTSPELL_BURNING_HANDS_2",
  },
  {
    label: "Brennende Hände (5)",
    value: "burningHands5",
    nwscriptValue: "IP_CONST_CASTSPELL_BURNING_HANDS_5",
  },
  {
    label: "Blitze herbeirufen (10)",
    value: "callLightning10",
    nwscriptValue: "IP_CONST_CASTSPELL_CALL_LIGHTNING_10",
  },
  {
    label: "Blitze herbeirufen (5)",
    value: "callLightning5",
    nwscriptValue: "IP_CONST_CASTSPELL_CALL_LIGHTNING_5",
  },
  {
    label: "Tarnung (5)",
    value: "camoflage5",
    nwscriptValue: "IP_CONST_CASTSPELL_CAMOFLAGE_5",
  },
  {
    label: "Katzenhafte Anmut (10)",
    value: "catsGrace10",
    nwscriptValue: "IP_CONST_CASTSPELL_CATS_GRACE_10",
  },
  {
    label: "Katzenhafte Anmut (15)",
    value: "catsGrace15",
    nwscriptValue: "IP_CONST_CASTSPELL_CATS_GRACE_15",
  },
  {
    label: "Katzenhafte Anmut (3)",
    value: "catsGrace3",
    nwscriptValue: "IP_CONST_CASTSPELL_CATS_GRACE_3",
  },
  {
    label: "Kugelblitz (11)",
    value: "chainLightning11",
    nwscriptValue: "IP_CONST_CASTSPELL_CHAIN_LIGHTNING_11",
  },
  {
    label: "Kugelblitz (15)",
    value: "chainLightning15",
    nwscriptValue: "IP_CONST_CASTSPELL_CHAIN_LIGHTNING_15",
  },
  {
    label: "Kugelblitz (20)",
    value: "chainLightning20",
    nwscriptValue: "IP_CONST_CASTSPELL_CHAIN_LIGHTNING_20",
  },
  {
    label: "Monster bezaubern (10)",
    value: "charmMonster10",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_MONSTER_10",
  },
  {
    label: "Monster bezaubern (5)",
    value: "charmMonster5",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_MONSTER_5",
  },
  {
    label: "Person bezaubern (10)",
    value: "charmPerson10",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_PERSON_10",
  },
  {
    label: "Person bezaubern (2)",
    value: "charmPerson2",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_PERSON_2",
  },
  {
    label: "Person oder Tier bezaubern (10)",
    value: "charmPersonOrAnimal10",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_PERSON_OR_ANIMAL_10",
  },
  {
    label: "Person oder Tier bezaubern (3)",
    value: "charmPersonOrAnimal3",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_PERSON_OR_ANIMAL_3",
  },
  {
    label: "Todeskreis (11)",
    value: "circleOfDeath11",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DEATH_11",
  },
  {
    label: "Todeskreis (15)",
    value: "circleOfDeath15",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DEATH_15",
  },
  {
    label: "Todeskreis (20)",
    value: "circleOfDeath20",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DEATH_20",
  },
  {
    label: "Kreis des Unheils (15)",
    value: "circleOfDoom15",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DOOM_15",
  },
  {
    label: "Kreis des Unheils (20)",
    value: "circleOfDoom20",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DOOM_20",
  },
  {
    label: "Kreis des Unheils (9)",
    value: "circleOfDoom9",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DOOM_9",
  },
  {
    label: "Hellhören/Hellsehen (10)",
    value: "clairaudienceClairvoyance10",
    nwscriptValue: "IP_CONST_CASTSPELL_CLAIRAUDIENCE_CLAIRVOYANCE_10",
  },
  {
    label: "Hellhören/Hellsehen (15)",
    value: "clairaudienceClairvoyance15",
    nwscriptValue: "IP_CONST_CASTSPELL_CLAIRAUDIENCE_CLAIRVOYANCE_15",
  },
  {
    label: "Hellhören/Hellsehen (5)",
    value: "clairaudienceClairvoyance5",
    nwscriptValue: "IP_CONST_CASTSPELL_CLAIRAUDIENCE_CLAIRVOYANCE_5",
  },
  {
    label: "Klarheit (3)",
    value: "clarity3",
    nwscriptValue: "IP_CONST_CASTSPELL_CLARITY_3",
  },
  {
    label: "Todeswolke (9)",
    value: "cloudkill9",
    nwscriptValue: "IP_CONST_CASTSPELL_CLOUDKILL_9",
  },
  {
    label: "Sprühende Farben (2)",
    value: "colorSpray2",
    nwscriptValue: "IP_CONST_CASTSPELL_COLOR_SPRAY_2",
  },
  {
    label: "Kältekegel (15)",
    value: "coneOfCold15",
    nwscriptValue: "IP_CONST_CASTSPELL_CONE_OF_COLD_15",
  },
  {
    label: "Kältekegel (9)",
    value: "coneOfCold9",
    nwscriptValue: "IP_CONST_CASTSPELL_CONE_OF_COLD_9",
  },
  {
    label: "Verwirrung (10)",
    value: "confusion10",
    nwscriptValue: "IP_CONST_CASTSPELL_CONFUSION_10",
  },
  {
    label: "Verwirrung (5)",
    value: "confusion5",
    nwscriptValue: "IP_CONST_CASTSPELL_CONFUSION_5",
  },
  {
    label: "Ansteckung (5)",
    value: "contagion5",
    nwscriptValue: "IP_CONST_CASTSPELL_CONTAGION_5",
  },
  {
    label: "Dauerhafte Flamme (7)",
    value: "continualFlame7",
    nwscriptValue: "IP_CONST_CASTSPELL_CONTINUAL_FLAME_7",
  },
  {
    label: "Untote befehligen (13)",
    value: "controlUndead13",
    nwscriptValue: "IP_CONST_CASTSPELL_CONTROL_UNDEAD_13",
  },
  {
    label: "Untote befehligen (20)",
    value: "controlUndead20",
    nwscriptValue: "IP_CONST_CASTSPELL_CONTROL_UNDEAD_20",
  },
  {
    label: "Mächtigere Untote erschaffen (15)",
    value: "createGreaterUndead15",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_GREATER_UNDEAD_15",
  },
  {
    label: "Mächtigere Untote erschaffen (16)",
    value: "createGreaterUndead16",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_GREATER_UNDEAD_16",
  },
  {
    label: "Mächtigere Untote erschaffen (18)",
    value: "createGreaterUndead18",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_GREATER_UNDEAD_18",
  },
  {
    label: "Untote erschaffen (11)",
    value: "createUndead11",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_UNDEAD_11",
  },
  {
    label: "Untote erschaffen (14)",
    value: "createUndead14",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_UNDEAD_14",
  },
  {
    label: "Untote erschaffen (16)",
    value: "createUndead16",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_UNDEAD_16",
  },
  {
    label: "Kriechender Tod (13)",
    value: "creepingDoom13",
    nwscriptValue: "IP_CONST_CASTSPELL_CREEPING_DOOM_13",
  },
  {
    label: "Kritische Wunden heilen (12)",
    value: "cureCriticalWounds12",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_CRITICAL_WOUNDS_12",
  },
  {
    label: "Kritische Wunden heilen (15)",
    value: "cureCriticalWounds15",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_CRITICAL_WOUNDS_15",
  },
  {
    label: "Kritische Wunden heilen (7)",
    value: "cureCriticalWounds7",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_CRITICAL_WOUNDS_7",
  },
  {
    label: "Leichte Wunden heilen (2)",
    value: "cureLightWounds2",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_LIGHT_WOUNDS_2",
  },
  {
    label: "Leichte Wunden heilen (5)",
    value: "cureLightWounds5",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_LIGHT_WOUNDS_5",
  },
  {
    label: "Kleinere Wunde heilen (1)",
    value: "cureMinorWounds1",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_MINOR_WOUNDS_1",
  },
  {
    label: "Mittelschwere Wunden heilen (10)",
    value: "cureModerateWounds10",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_MODERATE_WOUNDS_10",
  },
  {
    label: "Mittelschwere Wunden heilen (3)",
    value: "cureModerateWounds3",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_MODERATE_WOUNDS_3",
  },
  {
    label: "Mittelschwere Wunden heilen (6)",
    value: "cureModerateWounds6",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_MODERATE_WOUNDS_6",
  },
  {
    label: "Schwere Wunden heilen (10)",
    value: "cureSeriousWounds10",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_SERIOUS_WOUNDS_10",
  },
  {
    label: "Schwere Wunden heilen (5)",
    value: "cureSeriousWounds5",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_SERIOUS_WOUNDS_5",
  },
  {
    label: "Dunkelheit (3)",
    value: "darkness3",
    nwscriptValue: "IP_CONST_CASTSPELL_DARKNESS_3",
  },
  {
    label: "Ultrasicht (3)",
    value: "darkvision3",
    nwscriptValue: "IP_CONST_CASTSPELL_DARKVISION_3",
  },
  {
    label: "Ultrasicht (6)",
    value: "darkvision6",
    nwscriptValue: "IP_CONST_CASTSPELL_DARKVISION_6",
  },
  {
    label: "Benommenheit (1)",
    value: "daze1",
    nwscriptValue: "IP_CONST_CASTSPELL_DAZE_1",
  },
  {
    label: "Schutz vor Todesmagie (7)",
    value: "deathWard7",
    nwscriptValue: "IP_CONST_CASTSPELL_DEATH_WARD_7",
  },
  {
    label: "Spätzündender Feuerball (13)",
    value: "delayedBlastFireball13",
    nwscriptValue: "IP_CONST_CASTSPELL_DELAYED_BLAST_FIREBALL_13",
  },
  {
    label: "Spätzündender Feuerball (15)",
    value: "delayedBlastFireball15",
    nwscriptValue: "IP_CONST_CASTSPELL_DELAYED_BLAST_FIREBALL_15",
  },
  {
    label: "Spätzündender Feuerball (20)",
    value: "delayedBlastFireball20",
    nwscriptValue: "IP_CONST_CASTSPELL_DELAYED_BLAST_FIREBALL_20",
  },
  {
    label: "Zerstörung (13)",
    value: "destruction13",
    nwscriptValue: "IP_CONST_CASTSPELL_DESTRUCTION_13",
  },
  {
    label: "Grabgesang (15)",
    value: "dirge15",
    nwscriptValue: "IP_CONST_CASTSPELL_DIRGE_15",
  },
  {
    label: "Fortschicken (12)",
    value: "dismissal12",
    nwscriptValue: "IP_CONST_CASTSPELL_DISMISSAL_12",
  },
  {
    label: "Fortschicken (18)",
    value: "dismissal18",
    nwscriptValue: "IP_CONST_CASTSPELL_DISMISSAL_18",
  },
  {
    label: "Fortschicken (7)",
    value: "dismissal7",
    nwscriptValue: "IP_CONST_CASTSPELL_DISMISSAL_7",
  },
  {
    label: "Magie bannen (10)",
    value: "dispelMagic10",
    nwscriptValue: "IP_CONST_CASTSPELL_DISPEL_MAGIC_10",
  },
  {
    label: "Magie bannen (5)",
    value: "dispelMagic5",
    nwscriptValue: "IP_CONST_CASTSPELL_DISPEL_MAGIC_5",
  },
  {
    label: "Versetzung (9)",
    value: "displacement9",
    nwscriptValue: "IP_CONST_CASTSPELL_DISPLACEMENT_9",
  },
  {
    label: "Göttliche Gunst (5)",
    value: "divineFavor5",
    nwscriptValue: "IP_CONST_CASTSPELL_DIVINE_FAVOR_5",
  },
  {
    label: "Göttliche Kraft (5)",
    value: "divineMight5",
    nwscriptValue: "IP_CONST_CASTSPELL_DIVINE_MIGHT_5",
  },
  {
    label: "Göttliche Macht (7)",
    value: "divinePower7",
    nwscriptValue: "IP_CONST_CASTSPELL_DIVINE_POWER_7",
  },
  {
    label: "Göttlicher Schild (5)",
    value: "divineShield5",
    nwscriptValue: "IP_CONST_CASTSPELL_DIVINE_SHIELD_5",
  },
  {
    label: "Tier beherrschen (5)",
    value: "dominateAnimal5",
    nwscriptValue: "IP_CONST_CASTSPELL_DOMINATE_ANIMAL_5",
  },
  {
    label: "Monster beherrschen (17)",
    value: "dominateMonster17",
    nwscriptValue: "IP_CONST_CASTSPELL_DOMINATE_MONSTER_17",
  },
  {
    label: "Person beherrschen (7)",
    value: "dominatePerson7",
    nwscriptValue: "IP_CONST_CASTSPELL_DOMINATE_PERSON_7",
  },
  {
    label: "Unheil (2)",
    value: "doom2",
    nwscriptValue: "IP_CONST_CASTSPELL_DOOM_2",
  },
  {
    label: "Unheil (5)",
    value: "doom5",
    nwscriptValue: "IP_CONST_CASTSPELL_DOOM_5",
  },
  {
    label: "Drachenodem: Säure",
    value: "dragonBreathAcid10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_ACID_10",
  },
  {
    label: "Drachenodem: Kälte",
    value: "dragonBreathCold10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_COLD_10",
  },
  {
    label: "Drachenodem: Furcht",
    value: "dragonBreathFear10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_FEAR_10",
  },
  {
    label: "Drachenodem: Feuer",
    value: "dragonBreathFire10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_FIRE_10",
  },
  {
    label: "Drachenodem: Giftgas",
    value: "dragonBreathGas10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_GAS_10",
  },
  {
    label: "Drachenodem: Elektrizität",
    value: "dragonBreathLightning10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_LIGHTNING_10",
  },
  {
    label: "Drachenodem: Lähmung",
    value: "dragonBreathParalyze10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_PARALYZE_10",
  },
  {
    label: "Drachenodem: Schlaf",
    value: "dragonBreathSleep10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_SLEEP_10",
  },
  {
    label: "Drachenodem: Verlangsamen",
    value: "dragonBreathSlow10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_SLOW_10",
  },
  {
    label: "Drachenodem: Schwächung",
    value: "dragonBreathWeaken10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_WEAKEN_10",
  },
  {
    label: "Ertränken (15)",
    value: "drown15",
    nwscriptValue: "IP_CONST_CASTSPELL_DROWN_15",
  },
  {
    label: "Adlerhafte Pracht (10)",
    value: "eagleSpledor10",
    nwscriptValue: "IP_CONST_CASTSPELL_EAGLE_SPLEDOR_10",
  },
  {
    label: "Adlerhafte Pracht (15)",
    value: "eagleSpledor15",
    nwscriptValue: "IP_CONST_CASTSPELL_EAGLE_SPLEDOR_15",
  },
  {
    label: "Adlerhafte Pracht (3)",
    value: "eagleSpledor3",
    nwscriptValue: "IP_CONST_CASTSPELL_EAGLE_SPLEDOR_3",
  },
  {
    label: "Erdbeben (20)",
    value: "earthquake20",
    nwscriptValue: "IP_CONST_CASTSPELL_EARTHQUAKE_20",
  },
  {
    label: "Elektrischer Schlag (1)",
    value: "electricJolt1",
    nwscriptValue: "IP_CONST_CASTSPELL_ELECTRIC_JOLT_1",
  },
  {
    label: "Elementarschild (12)",
    value: "elementalShield12",
    nwscriptValue: "IP_CONST_CASTSPELL_ELEMENTAL_SHIELD_12",
  },
  {
    label: "Elementarschild (7)",
    value: "elementalShield7",
    nwscriptValue: "IP_CONST_CASTSPELL_ELEMENTAL_SHIELD_7",
  },
  {
    label: "Elementarhorde (17)",
    value: "elementalSwarm17",
    nwscriptValue: "IP_CONST_CASTSPELL_ELEMENTAL_SWARM_17",
  },
  {
    label: "Ausdauer (10)",
    value: "endurance10",
    nwscriptValue: "IP_CONST_CASTSPELL_ENDURANCE_10",
  },
  {
    label: "Ausdauer (15)",
    value: "endurance15",
    nwscriptValue: "IP_CONST_CASTSPELL_ENDURANCE_15",
  },
  {
    label: "Ausdauer (3)",
    value: "endurance3",
    nwscriptValue: "IP_CONST_CASTSPELL_ENDURANCE_3",
  },
  {
    label: "Elementen trotzen (2)",
    value: "endureElements2",
    nwscriptValue: "IP_CONST_CASTSPELL_ENDURE_ELEMENTS_2",
  },
  {
    label: "Energiepuffer (11)",
    value: "energyBuffer11",
    nwscriptValue: "IP_CONST_CASTSPELL_ENERGY_BUFFER_11",
  },
  {
    label: "Energiepuffer (15)",
    value: "energyBuffer15",
    nwscriptValue: "IP_CONST_CASTSPELL_ENERGY_BUFFER_15",
  },
  {
    label: "Energiepuffer (20)",
    value: "energyBuffer20",
    nwscriptValue: "IP_CONST_CASTSPELL_ENERGY_BUFFER_20",
  },
  {
    label: "Entzug von Lebenskraft (17)",
    value: "energyDrain17",
    nwscriptValue: "IP_CONST_CASTSPELL_ENERGY_DRAIN_17",
  },
  {
    label: "Entkräftung (7)",
    value: "enervation7",
    nwscriptValue: "IP_CONST_CASTSPELL_ENERVATION_7",
  },
  {
    label: "Verstricken (2)",
    value: "entangle2",
    nwscriptValue: "IP_CONST_CASTSPELL_ENTANGLE_2",
  },
  {
    label: "Verstricken (5)",
    value: "entangle5",
    nwscriptValue: "IP_CONST_CASTSPELL_ENTANGLE_5",
  },
  {
    label: "Entropieschild (5)",
    value: "entropicShield5",
    nwscriptValue: "IP_CONST_CASTSPELL_ENTROPIC_SHIELD_5",
  },
  {
    label: "Mächtiges Heiligtum (18)",
    value: "etherealness18",
    nwscriptValue: "IP_CONST_CASTSPELL_ETHEREALNESS_18",
  },
  {
    label: "Ätherisches Antlitz (15)",
    value: "etherealVisage15",
    nwscriptValue: "IP_CONST_CASTSPELL_ETHEREAL_VISAGE_15",
  },
  {
    label: "Ätherisches Antlitz (9)",
    value: "etherealVisage9",
    nwscriptValue: "IP_CONST_CASTSPELL_ETHEREAL_VISAGE_9",
  },
  {
    label: "Evards Schwarze Tentakel (15)",
    value: "evardsBlackTentacles15",
    nwscriptValue: "IP_CONST_CASTSPELL_EVARDS_BLACK_TENTACLES_15",
  },
  {
    label: "Evards Schwarze Tentakel (7)",
    value: "evardsBlackTentacles7",
    nwscriptValue: "IP_CONST_CASTSPELL_EVARDS_BLACK_TENTACLES_7",
  },
  {
    label: "Rascher Rückzug (5)",
    value: "expeditiousRetreat5",
    nwscriptValue: "IP_CONST_CASTSPELL_EXPEDITIOUS_RETREAT_5",
  },
  {
    label: "Furcht (5)",
    value: "fear5",
    nwscriptValue: "IP_CONST_CASTSPELL_FEAR_5",
  },
  {
    label: "Schwachsinn (9)",
    value: "feeblemind9",
    nwscriptValue: "IP_CONST_CASTSPELL_FEEBLEMIND_9",
  },
  {
    label: "Fallen finden (3)",
    value: "findTraps3",
    nwscriptValue: "IP_CONST_CASTSPELL_FIND_TRAPS_3",
  },
  {
    label: "Finger des Todes (13)",
    value: "fingerOfDeath13",
    nwscriptValue: "IP_CONST_CASTSPELL_FINGER_OF_DEATH_13",
  },
  {
    label: "Feuerball (10)",
    value: "fireball10",
    nwscriptValue: "IP_CONST_CASTSPELL_FIREBALL_10",
  },
  {
    label: "Feuerball (5)",
    value: "fireball5",
    nwscriptValue: "IP_CONST_CASTSPELL_FIREBALL_5",
  },
  {
    label: "Flächenbrand (15)",
    value: "firebrand15",
    nwscriptValue: "IP_CONST_CASTSPELL_FIREBRAND_15",
  },
  {
    label: "Feuersturm (13)",
    value: "fireStorm13",
    nwscriptValue: "IP_CONST_CASTSPELL_FIRE_STORM_13",
  },
  {
    label: "Feuersturm (18)",
    value: "fireStorm18",
    nwscriptValue: "IP_CONST_CASTSPELL_FIRE_STORM_18",
  },
  {
    label: "Flammenpfeil (12)",
    value: "flameArrow12",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_ARROW_12",
  },
  {
    label: "Flammenpfeil (18)",
    value: "flameArrow18",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_ARROW_18",
  },
  {
    label: "Flammenpfeil (5)",
    value: "flameArrow5",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_ARROW_5",
  },
  {
    label: "Flammenstoß (10)",
    value: "flameLash10",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_LASH_10",
  },
  {
    label: "Flammenstoß (3)",
    value: "flameLash3",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_LASH_3",
  },
  {
    label: "Flammenschlag (12)",
    value: "flameStrike12",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_STRIKE_12",
  },
  {
    label: "Flammenschlag (18)",
    value: "flameStrike18",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_STRIKE_18",
  },
  {
    label: "Flammenschlag (7)",
    value: "flameStrike7",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_STRIKE_7",
  },
  {
    label: "Aufblitzen (1)",
    value: "flare1",
    nwscriptValue: "IP_CONST_CASTSPELL_FLARE_1",
  },
  {
    label: "Fleisch zu Stein (5)",
    value: "fleshToStone5",
    nwscriptValue: "IP_CONST_CASTSPELL_FLESH_TO_STONE_5",
  },
  {
    label: "Verschlagenheit des Fuchses (10)",
    value: "foxsCunning10",
    nwscriptValue: "IP_CONST_CASTSPELL_FOXS_CUNNING_10",
  },
  {
    label: "Verschlagenheit des Fuchses (15)",
    value: "foxsCunning15",
    nwscriptValue: "IP_CONST_CASTSPELL_FOXS_CUNNING_15",
  },
  {
    label: "Verschlagenheit des Fuchses (3)",
    value: "foxsCunning3",
    nwscriptValue: "IP_CONST_CASTSPELL_FOXS_CUNNING_3",
  },
  {
    label: "Bewegungsfreiheit (7)",
    value: "freedomOfMovement7",
    nwscriptValue: "IP_CONST_CASTSPELL_FREEDOM_OF_MOVEMENT_7",
  },
  {
    label: "Tor (17)",
    value: "gate17",
    nwscriptValue: "IP_CONST_CASTSPELL_GATE_17",
  },
  {
    label: "Geisterhaftes Antlitz (15)",
    value: "ghostlyVisage15",
    nwscriptValue: "IP_CONST_CASTSPELL_GHOSTLY_VISAGE_15",
  },
  {
    label: "Geisterhaftes Antlitz (3)",
    value: "ghostlyVisage3",
    nwscriptValue: "IP_CONST_CASTSPELL_GHOSTLY_VISAGE_3",
  },
  {
    label: "Geisterhaftes Antlitz (9)",
    value: "ghostlyVisage9",
    nwscriptValue: "IP_CONST_CASTSPELL_GHOSTLY_VISAGE_9",
  },
  {
    label: "Ghulhand (3)",
    value: "ghoulTouch3",
    nwscriptValue: "IP_CONST_CASTSPELL_GHOUL_TOUCH_3",
  },
  {
    label: "Kugel der Unverwundbarkeit (11)",
    value: "globeOfInvulnerability11",
    nwscriptValue: "IP_CONST_CASTSPELL_GLOBE_OF_INVULNERABILITY_11",
  },
  {
    label: "Schmieren (2)",
    value: "grease2",
    nwscriptValue: "IP_CONST_CASTSPELL_GREASE_2",
  },
  {
    label: "Mächtige Bärenstärke (11)",
    value: "greaterBullsStrength11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_BULLS_STRENGTH_11",
  },
  {
    label: "Mächtige Katzenhafte Anmut (11)",
    value: "greaterCatsGrace11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_CATS_GRACE_11",
  },
  {
    label: "Mächtige Magie bannen (15)",
    value: "greaterDispelling15",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_DISPELLING_15",
  },
  {
    label: "Mächtige Magie bannen (7)",
    value: "greaterDispelling7",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_DISPELLING_7",
  },
  {
    label: "Mächtige Adlerhafte Pracht (11)",
    value: "greaterEaglesSplendor11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_EAGLES_SPLENDOR_11",
  },
  {
    label: "Mächtige Ausdauer (11)",
    value: "greaterEndurance11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_ENDURANCE_11",
  },
  {
    label: "Mächtige Verschlagenheit des Fuchses (11)",
    value: "greaterFoxsCunning11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_FOXS_CUNNING_11",
  },
  {
    label: "Mächtige Magische Fänge (9)",
    value: "greaterMagicFang9",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_MAGIC_FANG_9",
  },
  {
    label: "Mächtige Weisheit der Eule (11)",
    value: "greaterOwlsWisdom11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_OWLS_WISDOM_11",
  },
  {
    label: "Mächtiger Bindender Ruf (15)",
    value: "greaterPlanarBinding15",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_PLANAR_BINDING_15",
  },
  {
    label: "Vollständige Genesung (13)",
    value: "greaterRestoration13",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_RESTORATION_13",
  },
  {
    label: "Höhere Schattenbeschwörung (9)",
    value: "greaterShadowConjuration9",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_SHADOW_CONJURATION_9",
  },
  {
    label: "Mächtige Magische Bresche (11)",
    value: "greaterSpellBreach11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_SPELL_BREACH_11",
  },
  {
    label: "Mächtiger Schutzmantel (17)",
    value: "greaterSpellMantle17",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_SPELL_MANTLE_17",
  },
  {
    label: "Mächtige Steinhaut (11)",
    value: "greaterStoneskin11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_STONESKIN_11",
  },
  {
    label: "Säurefläschchen",
    value: "grenadeAcid1",
    nwscriptValue: "IP_CONST_CASTSPELL_GRENADE_ACID_1",
  },
  {
    label: "Fußangeln",
    value: "grenadeCaltrops1",
    nwscriptValue: "IP_CONST_CASTSPELL_GRENADE_CALTROPS_1",
  },
  {
    label: "Hühnerei",
    value: "grenadeChicken1",
    nwscriptValue: "IP_CONST_CASTSPELL_GRENADE_CHICKEN_1",
  },
  {
    label: "Erstickungspulver",
    value: "grenadeChoking1",
    nwscriptValue: "IP_CONST_CASTSPELL_GRENADE_CHOKING_1",
  },
  {
    label: "Alchemistenfeuer",
    value: "grenadeFire1",
    nwscriptValue: "IP_CONST_CASTSPELL_GRENADE_FIRE_1",
  },
  {
    label: "Weihwasser",
    value: "grenadeHoly1",
    nwscriptValue: "IP_CONST_CASTSPELL_GRENADE_HOLY_1",
  },
  {
    label: "Verstrickungsbeutel",
    value: "grenadeTangle1",
    nwscriptValue: "IP_CONST_CASTSPELL_GRENADE_TANGLE_1",
  },
  {
    label: "Donnerstein",
    value: "grenadeThunderstone1",
    nwscriptValue: "IP_CONST_CASTSPELL_GRENADE_THUNDERSTONE_1",
  },
  {
    label: "Windstoß (10)",
    value: "gustOfWind10",
    nwscriptValue: "IP_CONST_CASTSPELL_GUST_OF_WIND_10",
  },
  {
    label: "Hammer der Götter (12)",
    value: "hammerOfTheGods12",
    nwscriptValue: "IP_CONST_CASTSPELL_HAMMER_OF_THE_GODS_12",
  },
  {
    label: "Hammer der Götter (7)",
    value: "hammerOfTheGods7",
    nwscriptValue: "IP_CONST_CASTSPELL_HAMMER_OF_THE_GODS_7",
  },
  {
    label: "Leid (11)",
    value: "harm11",
    nwscriptValue: "IP_CONST_CASTSPELL_HARM_11",
  },
  {
    label: "Hast (10)",
    value: "haste10",
    nwscriptValue: "IP_CONST_CASTSPELL_HASTE_10",
  },
  {
    label: "Hast (5)",
    value: "haste5",
    nwscriptValue: "IP_CONST_CASTSPELL_HASTE_5",
  },
  {
    label: "Kreis der Heilung (16)",
    value: "healingCircle16",
    nwscriptValue: "IP_CONST_CASTSPELL_HEALING_CIRCLE_16",
  },
  {
    label: "Kreis der Heilung (9)",
    value: "healingCircle9",
    nwscriptValue: "IP_CONST_CASTSPELL_HEALING_CIRCLE_9",
  },
  {
    label: "Heilung (11)",
    value: "heal11",
    nwscriptValue: "IP_CONST_CASTSPELL_HEAL_11",
  },
  {
    label: "Tier festhalten (3)",
    value: "holdAnimal3",
    nwscriptValue: "IP_CONST_CASTSPELL_HOLD_ANIMAL_3",
  },
  {
    label: "Monster festhalten (7)",
    value: "holdMonster7",
    nwscriptValue: "IP_CONST_CASTSPELL_HOLD_MONSTER_7",
  },
  {
    label: "Person festhalten (3)",
    value: "holdPerson3",
    nwscriptValue: "IP_CONST_CASTSPELL_HOLD_PERSON_3",
  },
  {
    label: "Verdorren (15)",
    value: "horridWilting15",
    nwscriptValue: "IP_CONST_CASTSPELL_HORRID_WILTING_15",
  },
  {
    label: "Verdorren (20)",
    value: "horridWilting20",
    nwscriptValue: "IP_CONST_CASTSPELL_HORRID_WILTING_20",
  },
  {
    label: "Eissturm (9)",
    value: "iceStorm9",
    nwscriptValue: "IP_CONST_CASTSPELL_ICE_STORM_9",
  },
  {
    label: "Identifizieren (3)",
    value: "identify3",
    nwscriptValue: "IP_CONST_CASTSPELL_IDENTIFY_3",
  },
  {
    label: "Implosion (17)",
    value: "implosion17",
    nwscriptValue: "IP_CONST_CASTSPELL_IMPLOSION_17",
  },
  {
    label: "Erweiterte Unsichtbarkeit (7)",
    value: "improvedInvisibility7",
    nwscriptValue: "IP_CONST_CASTSPELL_IMPROVED_INVISIBILITY_7",
  },
  {
    label: "Flammende Wolke (15)",
    value: "incendiaryCloud15",
    nwscriptValue: "IP_CONST_CASTSPELL_INCENDIARY_CLOUD_15",
  },
  {
    label: "Inferno (15)",
    value: "inferno15",
    nwscriptValue: "IP_CONST_CASTSPELL_INFERNO_15",
  },
  {
    label: "Kritische Wunden verursachen (12)",
    value: "inflictCriticalWounds12",
    nwscriptValue: "IP_CONST_CASTSPELL_INFLICT_CRITICAL_WOUNDS_12",
  },
  {
    label: "Leichte Wunden verursachen (5)",
    value: "inflictLightWounds5",
    nwscriptValue: "IP_CONST_CASTSPELL_INFLICT_LIGHT_WOUNDS_5",
  },
  {
    label: "Kleinere Wunde verursachen (1)",
    value: "inflictMinorWounds1",
    nwscriptValue: "IP_CONST_CASTSPELL_INFLICT_MINOR_WOUNDS_1",
  },
  {
    label: "Mittelschwere Wunden verursachen (7)",
    value: "inflictModerateWounds7",
    nwscriptValue: "IP_CONST_CASTSPELL_INFLICT_MODERATE_WOUNDS_7",
  },
  {
    label: "Schwere Wunden verursachen (9)",
    value: "inflictSeriousWounds9",
    nwscriptValue: "IP_CONST_CASTSPELL_INFLICT_SERIOUS_WOUNDS_9",
  },
  {
    label: "Unsichtbarkeit (3)",
    value: "invisibility3",
    nwscriptValue: "IP_CONST_CASTSPELL_INVISIBILITY_3",
  },
  {
    label: "Unsichtbarkeit aufheben (5)",
    value: "invisibilityPurge5",
    nwscriptValue: "IP_CONST_CASTSPELL_INVISIBILITY_PURGE_5",
  },
  {
    label: "Sphäre der Unsichtbarkeit (5)",
    value: "invisibilitySphere5",
    nwscriptValue: "IP_CONST_CASTSPELL_INVISIBILITY_SPHERE_5",
  },
  {
    label: "Issacs Mächtiger Geschosshagel (15)",
    value: "isaacsGreaterMissileStorm15",
    nwscriptValue: "IP_CONST_CASTSPELL_ISAACS_GREATER_MISSILE_STORM_15",
  },
  {
    label: "Issacs Schwacher Geschosshagel (13)",
    value: "isaacsLesserMissileStorm13",
    nwscriptValue: "IP_CONST_CASTSPELL_ISAACS_LESSER_MISSILE_STORM_13",
  },
  {
    label: "Klopfen (3)",
    value: "knock3",
    nwscriptValue: "IP_CONST_CASTSPELL_KNOCK_3",
  },
  {
    label: "Sagenkunde (5)",
    value: "legendLore5",
    nwscriptValue: "IP_CONST_CASTSPELL_LEGEND_LORE_5",
  },
  {
    label: "Schwache Magie bannen (3)",
    value: "lesserDispel3",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_DISPEL_3",
  },
  {
    label: "Schwache Magie bannen (5)",
    value: "lesserDispel5",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_DISPEL_5",
  },
  {
    label: "Schwache Gedankenleere (9)",
    value: "lesserMindBlank9",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_MIND_BLANK_9",
  },
  {
    label: "Schwacher Bindender Ruf (9)",
    value: "lesserPlanarBinding9",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_PLANAR_BINDING_9",
  },
  {
    label: "Teilweise Genesung (3)",
    value: "lesserRestoration3",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_RESTORATION_3",
  },
  {
    label: "Schwache Magische Bresche (7)",
    value: "lesserSpellBreach7",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_SPELL_BREACH_7",
  },
  {
    label: "Schwacher Schutzmantel (9)",
    value: "lesserSpellMantle9",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_SPELL_MANTLE_9",
  },
  {
    label: "Blitz (10)",
    value: "lightningBolt10",
    nwscriptValue: "IP_CONST_CASTSPELL_LIGHTNING_BOLT_10",
  },
  {
    label: "Blitz (5)",
    value: "lightningBolt5",
    nwscriptValue: "IP_CONST_CASTSPELL_LIGHTNING_BOLT_5",
  },
  {
    label: "Licht (1)",
    value: "light1",
    nwscriptValue: "IP_CONST_CASTSPELL_LIGHT_1",
  },
  {
    label: "Licht (5)",
    value: "light5",
    nwscriptValue: "IP_CONST_CASTSPELL_LIGHT_5",
  },
  {
    label: "Magierrüstung (2)",
    value: "mageArmor2",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGE_ARMOR_2",
  },
  {
    label: "Schutzkreis gegen Gesinnung (5)",
    value: "magicCircleAgainstAlignment5",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGIC_CIRCLE_AGAINST_ALIGNMENT_5",
  },
  {
    label: "Magische Fänge (5)",
    value: "magicFang5",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGIC_FANG_5",
  },
  {
    label: "Magisches Geschoss (3)",
    value: "magicMissile3",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGIC_MISSILE_3",
  },
  {
    label: "Magisches Geschoss (5)",
    value: "magicMissile5",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGIC_MISSILE_5",
  },
  {
    label: "Magisches Geschoss (9)",
    value: "magicMissile9",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGIC_MISSILE_9",
  },
  {
    label: "Portalstein manipulieren",
    value: "manipulatePortalStone",
    nwscriptValue: "IP_CONST_CASTSPELL_MANIPULATE_PORTAL_STONE",
  },
  {
    label: "Massenblind- und Taubheit verursachen (15)",
    value: "massBlindnessDeafness15",
    nwscriptValue: "IP_CONST_CASTSPELL_MASS_BLINDNESS_DEAFNESS_15",
  },
  {
    label: "Massentarnung (13)",
    value: "massCamoflage13",
    nwscriptValue: "IP_CONST_CASTSPELL_MASS_CAMOFLAGE_13",
  },
  {
    label: "Massenbezauberung (15)",
    value: "massCharm15",
    nwscriptValue: "IP_CONST_CASTSPELL_MASS_CHARM_15",
  },
  {
    label: "Massenhast (11)",
    value: "massHaste11",
    nwscriptValue: "IP_CONST_CASTSPELL_MASS_HASTE_11",
  },
  {
    label: "Massenheilung (15)",
    value: "massHeal15",
    nwscriptValue: "IP_CONST_CASTSPELL_MASS_HEAL_15",
  },
  {
    label: "Melfs Säurepfeil (3)",
    value: "melfsAcidArrow3",
    nwscriptValue: "IP_CONST_CASTSPELL_MELFS_ACID_ARROW_3",
  },
  {
    label: "Melfs Säurepfeil (6)",
    value: "melfsAcidArrow6",
    nwscriptValue: "IP_CONST_CASTSPELL_MELFS_ACID_ARROW_6",
  },
  {
    label: "Melfs Säurepfeil (9)",
    value: "melfsAcidArrow9",
    nwscriptValue: "IP_CONST_CASTSPELL_MELFS_ACID_ARROW_9",
  },
  {
    label: "Meteoritenschwarm (17)",
    value: "meteorSwarm17",
    nwscriptValue: "IP_CONST_CASTSPELL_METEOR_SWARM_17",
  },
  {
    label: "Gedankenleere (15)",
    value: "mindBlank15",
    nwscriptValue: "IP_CONST_CASTSPELL_MIND_BLANK_15",
  },
  {
    label: "Gedankennebel (9)",
    value: "mindFog9",
    nwscriptValue: "IP_CONST_CASTSPELL_MIND_FOG_9",
  },
  {
    label: "Kleinere Kugel der Unverwundbarkeit (15)",
    value: "minorGlobeOfInvulnerability15",
    nwscriptValue: "IP_CONST_CASTSPELL_MINOR_GLOBE_OF_INVULNERABILITY_15",
  },
  {
    label: "Kleinere Kugel der Unverwundbarkeit (7)",
    value: "minorGlobeOfInvulnerability7",
    nwscriptValue: "IP_CONST_CASTSPELL_MINOR_GLOBE_OF_INVULNERABILITY_7",
  },
  {
    label: "Mordenkainens Auftrennung (17)",
    value: "mordenkainensDisjunction17",
    nwscriptValue: "IP_CONST_CASTSPELL_MORDENKAINENS_DISJUNCTION_17",
  },
  {
    label: "Mordenkainens Schwert (13)",
    value: "mordenkainensSword13",
    nwscriptValue: "IP_CONST_CASTSPELL_MORDENKAINENS_SWORD_13",
  },
  {
    label: "Mordenkainens Schwert (18)",
    value: "mordenkainensSword18",
    nwscriptValue: "IP_CONST_CASTSPELL_MORDENKAINENS_SWORD_18",
  },
  {
    label: "Gleichgewicht der Natur (15)",
    value: "naturesBalance15",
    nwscriptValue: "IP_CONST_CASTSPELL_NATURES_BALANCE_15",
  },
  {
    label: "Negativer Energieschlag (10)",
    value: "negativeEnergyBurst10",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_BURST_10",
  },
  {
    label: "Negativer Energieschlag (5)",
    value: "negativeEnergyBurst5",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_BURST_5",
  },
  {
    label: "Schutz vor Negativer Energie (10)",
    value: "negativeEnergyProtection10",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_PROTECTION_10",
  },
  {
    label: "Schutz vor Negativer Energie (15)",
    value: "negativeEnergyProtection15",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_PROTECTION_15",
  },
  {
    label: "Schutz vor Negativer Energie (5)",
    value: "negativeEnergyProtection5",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_PROTECTION_5",
  },
  {
    label: "Negativer Energiestrahl (1)",
    value: "negativeEnergyRay1",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_RAY_1",
  },
  {
    label: "Negativer Energiestrahl (3)",
    value: "negativeEnergyRay3",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_RAY_3",
  },
  {
    label: "Negativer Energiestrahl (5)",
    value: "negativeEnergyRay5",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_RAY_5",
  },
  {
    label: "Negativer Energiestrahl (7)",
    value: "negativeEnergyRay7",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_RAY_7",
  },
  {
    label: "Negativer Energiestrahl (9)",
    value: "negativeEnergyRay9",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_RAY_9",
  },
  {
    label: "Gift neutralisieren (5)",
    value: "neutralizePoison5",
    nwscriptValue: "IP_CONST_CASTSPELL_NEUTRALIZE_POISON_5",
  },
  {
    label: "Eins mit dem Land (7)",
    value: "oneWithTheLand7",
    nwscriptValue: "IP_CONST_CASTSPELL_ONE_WITH_THE_LAND_7",
  },
  {
    label: "Verständnis der Eule (15)",
    value: "owlsInsight15",
    nwscriptValue: "IP_CONST_CASTSPELL_OWLS_INSIGHT_15",
  },
  {
    label: "Weisheit der Eule (10)",
    value: "owlsWisdom10",
    nwscriptValue: "IP_CONST_CASTSPELL_OWLS_WISDOM_10",
  },
  {
    label: "Weisheit der Eule (15)",
    value: "owlsWisdom15",
    nwscriptValue: "IP_CONST_CASTSPELL_OWLS_WISDOM_15",
  },
  {
    label: "Weisheit der Eule (3)",
    value: "owlsWisdom3",
    nwscriptValue: "IP_CONST_CASTSPELL_OWLS_WISDOM_3",
  },
  {
    label: "Tödliches Phantom (7)",
    value: "phantasmalKiller7",
    nwscriptValue: "IP_CONST_CASTSPELL_PHANTASMAL_KILLER_7",
  },
  {
    label: "Verbündeter aus den Ebenen (15)",
    value: "planarAlly15",
    nwscriptValue: "IP_CONST_CASTSPELL_PLANAR_ALLY_15",
  },
  {
    label: "Bindender Ruf (11)",
    value: "planarBinding11",
    nwscriptValue: "IP_CONST_CASTSPELL_PLANAR_BINDING_11",
  },
  {
    label: "Vergiften (5)",
    value: "poison5",
    nwscriptValue: "IP_CONST_CASTSPELL_POISON_5",
  },
  {
    label: "Selbstverwandlung (7)",
    value: "polymorphSelf7",
    nwscriptValue: "IP_CONST_CASTSPELL_POLYMORPH_SELF_7",
  },
  {
    label: "Wort der Macht: Tod (17)",
    value: "powerWordKill17",
    nwscriptValue: "IP_CONST_CASTSPELL_POWER_WORD_KILL_17",
  },
  {
    label: "Wort der Macht: Betäubung (13)",
    value: "powerWordStun13",
    nwscriptValue: "IP_CONST_CASTSPELL_POWER_WORD_STUN_13",
  },
  {
    label: "Gebet (5)",
    value: "prayer5",
    nwscriptValue: "IP_CONST_CASTSPELL_PRAYER_5",
  },
  {
    label: "Vorahnung (15)",
    value: "premonition15",
    nwscriptValue: "IP_CONST_CASTSPELL_PREMONITION_15",
  },
  {
    label: "Regenbogenspiel (13)",
    value: "prismaticSpray13",
    nwscriptValue: "IP_CONST_CASTSPELL_PRISMATIC_SPRAY_13",
  },
  {
    label: "Schutz vor Gesinnung (2)",
    value: "protectionFromAlignment2",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_ALIGNMENT_2",
  },
  {
    label: "Schutz vor Gesinnung (5)",
    value: "protectionFromAlignment5",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_ALIGNMENT_5",
  },
  {
    label: "Schutz vor Elementen (10)",
    value: "protectionFromElements10",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_ELEMENTS_10",
  },
  {
    label: "Schutz vor Elementen (3)",
    value: "protectionFromElements3",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_ELEMENTS_3",
  },
  {
    label: "Schutz vor Zaubern (13)",
    value: "protectionFromSpells13",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_SPELLS_13",
  },
  {
    label: "Schutz vor Zaubern (20)",
    value: "protectionFromSpells20",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_SPELLS_20",
  },
  {
    label: "Stachelfeuer (8)",
    value: "quillfire8",
    nwscriptValue: "IP_CONST_CASTSPELL_QUILLFIRE_8",
  },
  {
    label: "Tote erwecken (9)",
    value: "raiseDead9",
    nwscriptValue: "IP_CONST_CASTSPELL_RAISE_DEAD_9",
  },
  {
    label: "Schwächestrahl (2)",
    value: "rayOfEnfeeblement2",
    nwscriptValue: "IP_CONST_CASTSPELL_RAY_OF_ENFEEBLEMENT_2",
  },
  {
    label: "Kältestrahl (1)",
    value: "rayOfFrost1",
    nwscriptValue: "IP_CONST_CASTSPELL_RAY_OF_FROST_1",
  },
  {
    label: "Regeneration (13)",
    value: "regenerate13",
    nwscriptValue: "IP_CONST_CASTSPELL_REGENERATE_13",
  },
  {
    label: "Blind- und Taubheit kurieren (5)",
    value: "removeBlindnessDeafness5",
    nwscriptValue: "IP_CONST_CASTSPELL_REMOVE_BLINDNESS_DEAFNESS_5",
  },
  {
    label: "Fluch brechen (5)",
    value: "removeCurse5",
    nwscriptValue: "IP_CONST_CASTSPELL_REMOVE_CURSE_5",
  },
  {
    label: "Krankheit kurieren (5)",
    value: "removeDisease5",
    nwscriptValue: "IP_CONST_CASTSPELL_REMOVE_DISEASE_5",
  },
  {
    label: "Furcht bannen (2)",
    value: "removeFear2",
    nwscriptValue: "IP_CONST_CASTSPELL_REMOVE_FEAR_2",
  },
  {
    label: "Lähmung aufheben (3)",
    value: "removeParalysis3",
    nwscriptValue: "IP_CONST_CASTSPELL_REMOVE_PARALYSIS_3",
  },
  {
    label: "Resistenz (2)",
    value: "resistance2",
    nwscriptValue: "IP_CONST_CASTSPELL_RESISTANCE_2",
  },
  {
    label: "Resistenz (5)",
    value: "resistance5",
    nwscriptValue: "IP_CONST_CASTSPELL_RESISTANCE_5",
  },
  {
    label: "Elementen widerstehen (10)",
    value: "resistElements10",
    nwscriptValue: "IP_CONST_CASTSPELL_RESIST_ELEMENTS_10",
  },
  {
    label: "Elementen widerstehen (3)",
    value: "resistElements3",
    nwscriptValue: "IP_CONST_CASTSPELL_RESIST_ELEMENTS_3",
  },
  {
    label: "Genesung (7)",
    value: "restoration7",
    nwscriptValue: "IP_CONST_CASTSPELL_RESTORATION_7",
  },
  {
    label: "Auferstehung (13)",
    value: "resurrection13",
    nwscriptValue: "IP_CONST_CASTSPELL_RESURRECTION_13",
  },
  {
    label: "Schurkenverschlagenheit (3)",
    value: "roguesCunning3",
    nwscriptValue: "IP_CONST_CASTSPELL_ROGUES_CUNNING_3",
  },
  {
    label: "Heiligtum (2)",
    value: "sanctuary2",
    nwscriptValue: "IP_CONST_CASTSPELL_SANCTUARY_2",
  },
  {
    label: "Erschrecken (2)",
    value: "scare2",
    nwscriptValue: "IP_CONST_CASTSPELL_SCARE_2",
  },
  {
    label: "Gleißendes Licht (5)",
    value: "searingLight5",
    nwscriptValue: "IP_CONST_CASTSPELL_SEARING_LIGHT_5",
  },
  {
    label: "Unsichtbares sehen (3)",
    value: "seeInvisibility3",
    nwscriptValue: "IP_CONST_CASTSPELL_SEE_INVISIBILITY_3",
  },
  {
    label: "Schatten (11)",
    value: "shades11",
    nwscriptValue: "IP_CONST_CASTSPELL_SHADES_11",
  },
  {
    label: "Schattenbeschwörung (7)",
    value: "shadowConjuration7",
    nwscriptValue: "IP_CONST_CASTSPELL_SHADOW_CONJURATION_7",
  },
  {
    label: "Schattenschild (13)",
    value: "shadowShield13",
    nwscriptValue: "IP_CONST_CASTSPELL_SHADOW_SHIELD_13",
  },
  {
    label: "Gestaltwandel (17)",
    value: "shapechange17",
    nwscriptValue: "IP_CONST_CASTSPELL_SHAPECHANGE_17",
  },
  {
    label: "Schild (5)",
    value: "shield5",
    nwscriptValue: "IP_CONST_CASTSPELL_SHIELD_5",
  },
  {
    label: "Schild des Glaubens (5)",
    value: "shieldOfFaith5",
    nwscriptValue: "IP_CONST_CASTSPELL_SHIELD_OF_FAITH_5",
  },
  {
    label: "Stille (3)",
    value: "silence3",
    nwscriptValue: "IP_CONST_CASTSPELL_SILENCE_3",
  },
  {
    label: "Schneller Tod (9)",
    value: "slayLiving9",
    nwscriptValue: "IP_CONST_CASTSPELL_SLAY_LIVING_9",
  },
  {
    label: "Schlaf (2)",
    value: "sleep2",
    nwscriptValue: "IP_CONST_CASTSPELL_SLEEP_2",
  },
  {
    label: "Schlaf (5)",
    value: "sleep5",
    nwscriptValue: "IP_CONST_CASTSPELL_SLEEP_5",
  },
  {
    label: "Verlangsamen (5)",
    value: "slow5",
    nwscriptValue: "IP_CONST_CASTSPELL_SLOW_5",
  },
  {
    label: "Geräuschexplosion (3)",
    value: "soundBurst3",
    nwscriptValue: "IP_CONST_CASTSPELL_SOUND_BURST_3",
  },
  {
    label: "Alkohol, Bier",
    value: "specialAlcoholBeer",
    nwscriptValue: "IP_CONST_CASTSPELL_SPECIAL_ALCOHOL_BEER",
  },
  {
    label: "Alkohol, Schnaps",
    value: "specialAlcoholSpirits",
    nwscriptValue: "IP_CONST_CASTSPELL_SPECIAL_ALCOHOL_SPIRITS",
  },
  {
    label: "Alkohol, Wein",
    value: "specialAlcoholWine",
    nwscriptValue: "IP_CONST_CASTSPELL_SPECIAL_ALCOHOL_WINE",
  },
  {
    label: "Kraut oder Gewürz, Belladonna",
    value: "specialHerbBelladonna",
    nwscriptValue: "IP_CONST_CASTSPELL_SPECIAL_HERB_BELLADONNA",
  },
  {
    label: "Kraut oder Gewürz, Knoblauch",
    value: "specialHerbGarlic",
    nwscriptValue: "IP_CONST_CASTSPELL_SPECIAL_HERB_GARLIC",
  },
  {
    label: "Schutzmantel (13)",
    value: "spellMantle13",
    nwscriptValue: "IP_CONST_CASTSPELL_SPELL_MANTLE_13",
  },
  {
    label: "Zauberresistenz (15)",
    value: "spellResistance15",
    nwscriptValue: "IP_CONST_CASTSPELL_SPELL_RESISTANCE_15",
  },
  {
    label: "Zauberresistenz (9)",
    value: "spellResistance9",
    nwscriptValue: "IP_CONST_CASTSPELL_SPELL_RESISTANCE_9",
  },
  {
    label: "Dornenwuchs (9)",
    value: "spikeGrowth9",
    nwscriptValue: "IP_CONST_CASTSPELL_SPIKE_GROWTH_9",
  },
  {
    label: "Stinkende Wolke (5)",
    value: "stinkingCloud5",
    nwscriptValue: "IP_CONST_CASTSPELL_STINKING_CLOUD_5",
  },
  {
    label: "Steinhaut (7)",
    value: "stoneskin7",
    nwscriptValue: "IP_CONST_CASTSPELL_STONESKIN_7",
  },
  {
    label: "Stein zu Fleisch (5)",
    value: "stoneToFlesh5",
    nwscriptValue: "IP_CONST_CASTSPELL_STONE_TO_FLESH_5",
  },
  {
    label: "Sturm der Vergeltung (17)",
    value: "stormOfVengeance17",
    nwscriptValue: "IP_CONST_CASTSPELL_STORM_OF_VENGEANCE_17",
  },
  {
    label: "Monster herbeizaubern III (5)",
    value: "summonCreatureIii5",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_III_5",
  },
  {
    label: "Monster herbeizaubern II (3)",
    value: "summonCreatureIi3",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_II_3",
  },
  {
    label: "Monster herbeizaubern IV (7)",
    value: "summonCreatureIv7",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_IV_7",
  },
  {
    label: "Monster herbeizaubern IX (17)",
    value: "summonCreatureIx17",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_IX_17",
  },
  {
    label: "Monster herbeizaubern I (2)",
    value: "summonCreatureI2",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_I_2",
  },
  {
    label: "Monster herbeizaubern I (5)",
    value: "summonCreatureI5",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_I_5",
  },
  {
    label: "Monster herbeizaubern VIII (15)",
    value: "summonCreatureViii15",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_VIII_15",
  },
  {
    label: "Monster herbeizaubern VII (13)",
    value: "summonCreatureVii13",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_VII_13",
  },
  {
    label: "Monster herbeizaubern VI (11)",
    value: "summonCreatureVi11",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_VI_11",
  },
  {
    label: "Monster herbeizaubern V (9)",
    value: "summonCreatureV9",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_V_9",
  },
  {
    label: "Sonnenstrahl (13)",
    value: "sunbeam13",
    nwscriptValue: "IP_CONST_CASTSPELL_SUNBEAM_13",
  },
  {
    label: "Sonnenfeuer (20)",
    value: "sunburst20",
    nwscriptValue: "IP_CONST_CASTSPELL_SUNBURST_20",
  },
  {
    label: "Tashas Fürchterlicher Lachanfall (7)",
    value: "tashasHideousLaughter7",
    nwscriptValue: "IP_CONST_CASTSPELL_TASHAS_HIDEOUS_LAUGHTER_7",
  },
  {
    label: "Tensers Umwandlung (11)",
    value: "tensersTransformation11",
    nwscriptValue: "IP_CONST_CASTSPELL_TENSERS_TRANSFORMATION_11",
  },
  {
    label: "Zeitstopp (17)",
    value: "timeStop17",
    nwscriptValue: "IP_CONST_CASTSPELL_TIME_STOP_17",
  },
  {
    label: "Wahrer Blick (9)",
    value: "trueSeeing9",
    nwscriptValue: "IP_CONST_CASTSPELL_TRUE_SEEING_9",
  },
  {
    label: "Zielsicherer Schlag (5)",
    value: "trueStrike5",
    nwscriptValue: "IP_CONST_CASTSPELL_TRUE_STRIKE_5",
  },
  {
    label: "Ewiger Feind der Untoten (20)",
    value: "undeathsEternalFoe20",
    nwscriptValue: "IP_CONST_CASTSPELL_UNDEATHS_ETERNAL_FOE_20",
  },
  // {
  //   label: "Besondere Eigenschaft",
  //   value: "uniquePower",
  //   nwscriptValue: "IP_CONST_CASTSPELL_UNIQUE_POWER",
  // },
  // {
  //   label: "Besondere Eigenschaft, nur vom Träger benutzbar",
  //   value: "uniquePowerSelfOnly",
  //   nwscriptValue: "IP_CONST_CASTSPELL_UNIQUE_POWER_SELF_ONLY",
  // },
  {
    label: "Vampirgriff (5)",
    value: "vampiricTouch5",
    nwscriptValue: "IP_CONST_CASTSPELL_VAMPIRIC_TOUCH_5",
  },
  {
    label: "Tugend (1)",
    value: "virtue1",
    nwscriptValue: "IP_CONST_CASTSPELL_VIRTUE_1",
  },
  {
    label: "Wehgeschrei der Todesfee (17)",
    value: "wailOfTheBanshee17",
    nwscriptValue: "IP_CONST_CASTSPELL_WAIL_OF_THE_BANSHEE_17",
  },
  {
    label: "Feuerwand (9)",
    value: "wallOfFire9",
    nwscriptValue: "IP_CONST_CASTSPELL_WALL_OF_FIRE_9",
  },
  {
    label: "Kriegsschrei (7)",
    value: "warCry7",
    nwscriptValue: "IP_CONST_CASTSPELL_WAR_CRY_7",
  },
  {
    label: "Spinnennetz (3)",
    value: "web3",
    nwscriptValue: "IP_CONST_CASTSPELL_WEB_3",
  },
  {
    label: "Unheimliches Schicksal (17)",
    value: "weird17",
    nwscriptValue: "IP_CONST_CASTSPELL_WEIRD_17",
  },
  {
    label: "Wort des Glaubens (13)",
    value: "wordOfFaith13",
    nwscriptValue: "IP_CONST_CASTSPELL_WORD_OF_FAITH_13",
  },
  {
    label: "Verletzendes Flüstern (9)",
    value: "woundingWhispers9",
    nwscriptValue: "IP_CONST_CASTSPELL_WOUNDING_WHISPERS_9",
  },
])
