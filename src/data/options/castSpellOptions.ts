import type { PropertyParameterOption } from "@/types/properties"
import { sortOptionsByLabel } from "./propertyOptions"

export const castSpellOptions: PropertyParameterOption[] = sortOptionsByLabel([
  {
    label: "Säurenebel (11)",
    value: "acidFog11",
    nwscriptValue: "IP_CONST_CASTSPELL_ACID_FOG_11",

    description: "Säurenebel erschafft eine dicke Wolke wallenden, grünen Nebels, der sich förmlich an alles anzuhaften scheint. Kreaturen, die in die Wolke geraten, ziehen sich einen 4W6 Säureschaden zu. Kreaturen innerhalb der Wolke, denen ein Zähigkeitswurf misslingt, haben eine um 50% reduzierte Bewegungsrate. Alle Kreaturen innerhalb der Wolke erleiden 2W6 Punkte Säureschaden pro Runde.",
  },
  {
    label: "Säurespritzer (1)",
    value: "acidSplash1",
    nwscriptValue: "IP_CONST_CASTSPELL_ACID_SPLASH_1",

    description: "Der Magieanwender erzeugt eine kleine Säurekugel, die bei ihrem Opfer 1W3 Punkte Säureschaden verursacht.",
  },
  {
    label: "Besondere Eigenschaft",
    value: "activateItem",
    nwscriptValue: "IP_CONST_CASTSPELL_ACTIVATE_ITEM",

    description: "Erlaubt es dem Anwender, ein spezielles geskriptetes Ereignis zu schaffen, das durch einen Gegenstand innerhalb eines bestimmten Moduls ausgelöst wird.",
  },
  {
    label: "Beistand (3)",
    value: "aid3",
    nwscriptValue: "IP_CONST_CASTSPELL_AID_3",

    description: "Das Ziel erhält +1 auf Angriffswürfe sowie +1 auf Rettungswürfe gegen Furcht. Seine maximalen Trefferpunkte erhöhen sich um 1W8 Punkte.",
  },
  {
    label: "Verstärken (5)",
    value: "amplify5",
    nwscriptValue: "IP_CONST_CASTSPELL_AMPLIFY_5",

    description: "Das Ziel erhält +20 auf Fertigkeitswürfe für Lauschen.",
  },
  {
    label: "Tote beleben (10)",
    value: "animateDead10",
    nwscriptValue: "IP_CONST_CASTSPELL_ANIMATE_DEAD_10",

    description: "Tote beleben zaubert einen untoten Diener herbei, dessen Stärke von der Zauberstufe des Magieanwenders abhängt:\nStufe 1 bis 5: Schreckensnebelzombie\nStufe 6 bis 9: Skelettkrieger\nStufe 10 oder höher: Skeletthäuptling",
  },
  {
    label: "Tote beleben (15)",
    value: "animateDead15",
    nwscriptValue: "IP_CONST_CASTSPELL_ANIMATE_DEAD_15",

    description: "Tote beleben zaubert einen untoten Diener herbei, dessen Stärke von der Zauberstufe des Magieanwenders abhängt:\nStufe 1 bis 5: Schreckensnebelzombie\nStufe 6 bis 9: Skelettkrieger\nStufe 10 oder höher: Skeletthäuptling",
  },
  {
    label: "Tote beleben (5)",
    value: "animateDead5",
    nwscriptValue: "IP_CONST_CASTSPELL_ANIMATE_DEAD_5",

    description: "Tote beleben zaubert einen untoten Diener herbei, dessen Stärke von der Zauberstufe des Magieanwenders abhängt:\nStufe 1 bis 5: Schreckensnebelzombie\nStufe 6 bis 9: Skelettkrieger\nStufe 10 oder höher: Skeletthäuptling",
  },
  {
    label: "Aura des Ruhms (7)",
    value: "auraofglory7",
    nwscriptValue: "IP_CONST_CASTSPELL_AURAOFGLORY_7",

    description: "Der Magieanwender ruft göttliche Energie auf sich herab und erhält dadurch einen Charismabonus von +4. Alle Verbündeten in der Nähe des Magieanwenders erhalten +5 auf Rettungswürfe gegen Furcht und werden um 1d4 Trefferpunkte geheilt.",
  },
  {
    label: "Aura der Lebenskraft (13)",
    value: "auraOfVitality13",
    nwscriptValue: "IP_CONST_CASTSPELL_AURA_OF_VITALITY_13",

    description: "Alle Verbündeten im Wirkungsbereich erhalten +4 auf Stärke, Konstitution und Geschicklichkeit.",
  },
  {
    label: "Aura gegen Gesinnung (15)",
    value: "auraVersusAlignment15",
    nwscriptValue: "IP_CONST_CASTSPELL_AURA_VERSUS_ALIGNMENT_15",

    description: "Der Magieanwender muss wählen, ob er vor Gutem oder Bösem geschützt sein will. Gegen Kreaturen mit der gewählten Gesinnung erhält er einen Ablenkungsbonus +4 auf die RK, Immunität gegen Zauber und zauberähnliche Effekte der Kategorie Geistesbeeinflussung. Dazu hat er ZR 25. Kreaturen der gewählten Gesinnung, die den Magieanwender im Nahkampf treffen, erleiden jedes Mal 1W8+6 SP.",
  },
  {
    label: "Erwecken (9)",
    value: "awaken9",
    nwscriptValue: "IP_CONST_CASTSPELL_AWAKEN_9",

    description: "Der Tiergefährte des Magieanwenders erhält +4 auf Stärke, +4 auf Konstitution, +1W10 auf Weisheit und +2 auf Angriffswürfe, solange er an der Seite des Druiden bleibt.",
  },
  {
    label: "Balagarn's Eisenhorn (7)",
    value: "balagarnsironhorn7",
    nwscriptValue: "IP_CONST_CASTSPELL_BALAGARNSIRONHORN_7",

    description: "Der Magieanwender erzeugt einen tiefen, vibrierenden Ton im Wirkungsbereich. Alle Kreaturen, denen ein konkurrierender Stärkewurf misslingt (als ob der Magieanwender Stärke 20 hätte), werden zu Boden geworfen und gelten eine Runde lang als niedergeworfen.",
  },
  {
    label: "Verfluchen (5)",
    value: "bane5",
    nwscriptValue: "IP_CONST_CASTSPELL_BANE_5",

    description: "Die Feinde des Magieanwenders werden von Zweifel und Furcht erfüllt. Sie erleiden -1 auf Angriffswürfe und -1 auf Rettungswürfe gegen Furcht.",
  },
  {
    label: "Verbannung (15)",
    value: "banishment15",
    nwscriptValue: "IP_CONST_CASTSPELL_BANISHMENT_15",

    description: "Dieser Zauber zerstört alle herbeigezauberten Kreaturen, Vertraute, Tiergefährten und Externare im Wirkungsbereich, denen ein Willenswurf misslingt. Der Zauber kann maximal doppelt so viele TW an Kreaturen zerstören, wie der Magieanwender Zauberstufen hat.",
  },
  {
    label: "Rindenhaut (12)",
    value: "barkskin12",
    nwscriptValue: "IP_CONST_CASTSPELL_BARKSKIN_12",

    description: "Rindenhaut macht die Haut der Zielkreatur zäh wie Rinde. Dadurch erhält sie einen Natürlichen Rüstungsbonus, der von der Zauberstufe des Anwenders abhängt:\nStufe 1-6: +3\nStufe 7-12: +4\nStufe 13+: +5",
  },
  {
    label: "Rindenhaut (3)",
    value: "barkskin3",
    nwscriptValue: "IP_CONST_CASTSPELL_BARKSKIN_3",

    description: "Rindenhaut macht die Haut der Zielkreatur zäh wie Rinde. Dadurch erhält sie einen Natürlichen Rüstungsbonus, der von der Zauberstufe des Anwenders abhängt:\nStufe 1-6: +3\nStufe 7-12: +4\nStufe 13+: +5",
  },
  {
    label: "Rindenhaut (6)",
    value: "barkskin6",
    nwscriptValue: "IP_CONST_CASTSPELL_BARKSKIN_6",

    description: "Rindenhaut macht die Haut der Zielkreatur zäh wie Rinde. Dadurch erhält sie einen Natürlichen Rüstungsbonus, der von der Zauberstufe des Anwenders abhängt:\nStufe 1-6: +3\nStufe 7-12: +4\nStufe 13+: +5",
  },
  {
    label: "Fluch (11)",
    value: "bestowCurse5",
    nwscriptValue: "IP_CONST_CASTSPELL_BESTOW_CURSE_5",

    description: "Fluch reduziert alle Attributswerte des Ziels um 2 Punkte.",
  },
  {
    label: "Bigbys Geballte Faust (20)",
    value: "bigbysClenchedFist20",
    nwscriptValue: "IP_CONST_CASTSPELL_BIGBYS_CLENCHED_FIST_20",

    description: "Eine riesige Hand taucht über dem Ziel auf und greift es während der Wirkungsdauer des Zaubers einmal pro Runde an. Bei einem Treffer erleidet das Ziel 1W8+11 SP und muss einen Zähigkeitswurf schaffen. Scheitert es, ist es für diese Runde betäubt.",
  },
  {
    label: "Bigbys Zerdrückende Hand (20)",
    value: "bigbysCrushingHand20",
    nwscriptValue: "IP_CONST_CASTSPELL_BIGBYS_CRUSHING_HAND_20",

    description: "Eine riesige Hand taucht auf und greift das Ziel an. Wenn die Hand trifft und bei einem Ringkampfwurf erfolgreich ist, hält sie das Opfer für die Wirkungsdauer fest und richtet dabei pro Runde 2W6+12 SP an.",
  },
  {
    label: "Bigbys Kräftige Hand (15)",
    value: "bigbysForcefulHand15",
    nwscriptValue: "IP_CONST_CASTSPELL_BIGBYS_FORCEFUL_HAND_15",

    description: "Eine riesige Hand taucht auf und macht einen Ansturm auf ein Ziel. Die Hand erhält +14 auf ihren Stärkewurf. Wenn der Ansturm erfolgreich ist, wird das Ziel zu Boden geworfen und ist für die Wirkungsdauer des Zaubers benommen.",
  },
  {
    label: "Bigbys Zugreifende Hand (17)",
    value: "bigbysGraspingHand17",
    nwscriptValue: "IP_CONST_CASTSPELL_BIGBYS_GRASPING_HAND_17",

    description: "Eine riesige Hand taucht über dem Ziel auf und versucht, es zu packen. Wenn die Hand trifft und bei einem Ringkampfwurf erfolgreich ist, wird das Opfer für die Wirkungsdauer festgehalten.",
  },
  {
    label: "Bigbys Behindernde Hand (15)",
    value: "bigbysInterposingHand15",
    nwscriptValue: "IP_CONST_CASTSPELL_BIGBYS_INTERPOSING_HAND_15",

    description: "Eine riesige Hand taucht über dem Ziel auf und tut alles, um es bei seinen Angriffen zu behindern. Das Ziel erhält während der Wirkungsdauer -10 auf Angriffswürfe.",
  },
  {
    label: "Klingenbarriere (11)",
    value: "bladeBarrier11",
    nwscriptValue: "IP_CONST_CASTSPELL_BLADE_BARRIER_11",

    description: "Der Zauber erschafft eine 9 m lange und 90 cm starke Wand aus wirbelnden Klingen. Alle Kreaturen, die den Wirkungsbereich durchqueren, erleiden 1W6 SP je Zauberstufe.",
  },
  {
    label: "Klingenbarriere (15)",
    value: "bladeBarrier15",
    nwscriptValue: "IP_CONST_CASTSPELL_BLADE_BARRIER_15",

    description: "Der Zauber erschafft eine 9 m lange und 90 cm starke Wand aus wirbelnden Klingen. Alle Kreaturen, die den Wirkungsbereich durchqueren, erleiden 1W6 SP je Zauberstufe.",
  },
  {
    label: "Segnen (2)",
    value: "bless2",
    nwscriptValue: "IP_CONST_CASTSPELL_BLESS_2",

    description: "Alle Verbündeten im Wirkungsbereich bekommen +1 auf Angriffswürfe, sowie +1 auf Willenswürfe gegen Furcht.",
  },
  {
    label: "Blind- und Taubheit verursachen (3)",
    value: "blindnessDeafness3",
    nwscriptValue: "IP_CONST_CASTSPELL_BLINDNESS_DEAFNESS_3",

    description: "Wenn das Ziel bei seinem Rettungswurf scheitert, wird es blind und taub.",
  },
  {
    label: "Blutrausch (7)",
    value: "bloodFrenzy7",
    nwscriptValue: "IP_CONST_CASTSPELL_BLOOD_FRENZY_7",

    description: "Der Magieanwender gerät in einen Blutrausch, der dem Kampfrausch eines Barbaren ähnelt. Dadurch erhält er Stärke +2, Konstitution +2, Willenswürfe +1 und -1 auf die RK.",
  },
  {
    label: "Bombardierung (20)",
    value: "bombardment20",
    nwscriptValue: "IP_CONST_CASTSPELL_BOMBARDMENT_20",

    description: "Felsbrocken regnen vom Himmel herab und richten bei allen Feinden im Wirkungsbereich 1W8 SP je Zauberstufe an (maximal 10W8).",
  },
  {
    label: "Bärenstärke (10)",
    value: "bullsStrength10",
    nwscriptValue: "IP_CONST_CASTSPELL_BULLS_STRENGTH_10",

    description: "Die Stärke des Ziels erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Bärenstärke (15)",
    value: "bullsStrength15",
    nwscriptValue: "IP_CONST_CASTSPELL_BULLS_STRENGTH_15",

    description: "Die Stärke des Ziels erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Bärenstärke (3)",
    value: "bullsStrength3",
    nwscriptValue: "IP_CONST_CASTSPELL_BULLS_STRENGTH_3",

    description: "Die Stärke des Ziels erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Brennende Hände (2)",
    value: "burningHands2",
    nwscriptValue: "IP_CONST_CASTSPELL_BURNING_HANDS_2",

    description: "Aus den Fingerspitzen des Magieanwenders schießt ein Feuerkegel und alle im Wirkungsbereich erleiden 1W4 Schadenspunkte je Zauberstufe, bis zu einem Maximum von 5W4 SP.",
  },
  {
    label: "Brennende Hände (5)",
    value: "burningHands5",
    nwscriptValue: "IP_CONST_CASTSPELL_BURNING_HANDS_5",

    description: "Aus den Fingerspitzen des Magieanwenders schießt ein Feuerkegel und alle im Wirkungsbereich erleiden 1W4 Schadenspunkte je Zauberstufe, bis zu einem Maximum von 5W4 SP.",
  },
  {
    label: "Blitze herbeirufen (10)",
    value: "callLightning10",
    nwscriptValue: "IP_CONST_CASTSPELL_CALL_LIGHTNING_10",

    description: "Alle Feinde im Wirkungsbereich erleiden 1W6 SP je Zauberstufe, bis zu einem Maximum von 10W6 SP.",
  },
  {
    label: "Blitze herbeirufen (5)",
    value: "callLightning5",
    nwscriptValue: "IP_CONST_CASTSPELL_CALL_LIGHTNING_5",

    description: "Alle Feinde im Wirkungsbereich erleiden 1W6 SP je Zauberstufe, bis zu einem Maximum von 10W6 SP.",
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

    description: "Die Geschicklichkeit des Ziels erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Katzenhafte Anmut (15)",
    value: "catsGrace15",
    nwscriptValue: "IP_CONST_CASTSPELL_CATS_GRACE_15",

    description: "Die Geschicklichkeit des Ziels erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Katzenhafte Anmut (3)",
    value: "catsGrace3",
    nwscriptValue: "IP_CONST_CASTSPELL_CATS_GRACE_3",

    description: "Die Geschicklichkeit des Ziels erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Kugelblitz (11)",
    value: "chainLightning11",
    nwscriptValue: "IP_CONST_CASTSPELL_CHAIN_LIGHTNING_11",

    description: "Ein Blitz trifft das ausgewählte Ziel und springt von dort auf andere Feinde im Wirkungsbereich über. Der Blitz verursacht 1W6 SP pro Zauberstufe mit einem Maximum von 20W6 SP beim ersten Ziel. Die anderen Ziele erleiden halben Schaden.",
  },
  {
    label: "Kugelblitz (15)",
    value: "chainLightning15",
    nwscriptValue: "IP_CONST_CASTSPELL_CHAIN_LIGHTNING_15",

    description: "Ein Blitz trifft das ausgewählte Ziel und springt von dort auf andere Feinde im Wirkungsbereich über. Der Blitz verursacht 1W6 SP pro Zauberstufe mit einem Maximum von 20W6 SP beim ersten Ziel. Die anderen Ziele erleiden halben Schaden.",
  },
  {
    label: "Kugelblitz (20)",
    value: "chainLightning20",
    nwscriptValue: "IP_CONST_CASTSPELL_CHAIN_LIGHTNING_20",

    description: "Ein Blitz trifft das ausgewählte Ziel und springt von dort auf andere Feinde im Wirkungsbereich über. Der Blitz verursacht 1W6 SP pro Zauberstufe mit einem Maximum von 20W6 SP beim ersten Ziel. Die anderen Ziele erleiden halben Schaden.",
  },
  {
    label: "Monster bezaubern (10)",
    value: "charmMonster10",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_MONSTER_10",

    description: "Für die Zielkreatur verbessert sich der Ruf des Magieanwenders um 50%.",
  },
  {
    label: "Monster bezaubern (5)",
    value: "charmMonster5",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_MONSTER_5",

    description: "Für die Zielkreatur verbessert sich der Ruf des Magieanwenders um 50%.",
  },
  {
    label: "Person bezaubern (10)",
    value: "charmPerson10",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_PERSON_10",

    description: "In den Augen des humanoiden Ziels verbessert sich der Ruf des Magieanwenders um 50%.",
  },
  {
    label: "Person bezaubern (2)",
    value: "charmPerson2",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_PERSON_2",

    description: "In den Augen des humanoiden Ziels verbessert sich der Ruf des Magieanwenders um 50%.",
  },
  {
    label: "Person oder Tier bezaubern (10)",
    value: "charmPersonOrAnimal10",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_PERSON_OR_ANIMAL_10",

    description: "In den Augen des Ziels, bei dem es sich um ein Tier oder ein humanoides Wesen handeln muss, verbessert sich der Ruf des Magieanwenders um 50%.",
  },
  {
    label: "Person oder Tier bezaubern (3)",
    value: "charmPersonOrAnimal3",
    nwscriptValue: "IP_CONST_CASTSPELL_CHARM_PERSON_OR_ANIMAL_3",

    description: "In den Augen des Ziels, bei dem es sich um ein Tier oder ein humanoides Wesen handeln muss, verbessert sich der Ruf des Magieanwenders um 50%.",
  },
  {
    label: "Todeskreis (11)",
    value: "circleOfDeath11",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DEATH_11",

    description: "Ein Welle negativer Energie entsteht beim Ziel und breitet sich von dort aus. Insgesamt müssen Kreaturen mit 1W4 TW pro Zauberstufe einen Zähigkeitswurf bestehen oder sterben. Kreaturen mit der niedrigsten Trefferwürfelzahl werden zuerst betroffen. Kreaturen mit 9 TW oder mehr sind von diesem Zauber nicht betroffen.",
  },
  {
    label: "Todeskreis (15)",
    value: "circleOfDeath15",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DEATH_15",

    description: "Ein Welle negativer Energie entsteht beim Ziel und breitet sich von dort aus. Insgesamt müssen Kreaturen mit 1W4 TW pro Zauberstufe einen Zähigkeitswurf bestehen oder sterben. Kreaturen mit der niedrigsten Trefferwürfelzahl werden zuerst betroffen. Kreaturen mit 9 TW oder mehr sind von diesem Zauber nicht betroffen.",
  },
  {
    label: "Todeskreis (20)",
    value: "circleOfDeath20",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DEATH_20",

    description: "Ein Welle negativer Energie entsteht beim Ziel und breitet sich von dort aus. Insgesamt müssen Kreaturen mit 1W4 TW pro Zauberstufe einen Zähigkeitswurf bestehen oder sterben. Kreaturen mit der niedrigsten Trefferwürfelzahl werden zuerst betroffen. Kreaturen mit 9 TW oder mehr sind von diesem Zauber nicht betroffen.",
  },
  {
    label: "Kreis des Unheils (15)",
    value: "circleOfDoom15",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DOOM_15",

    description: "Alle Feinde im Wirkungsbereich werden von dem Ausbruch an negativer Energie betroffen und erleiden 1W8 SP +1 pro Zauberstufe. Auf Untote hat die negative Energie eine heilende und nicht schädigende Wirkung.",
  },
  {
    label: "Kreis des Unheils (20)",
    value: "circleOfDoom20",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DOOM_20",

    description: "Alle Feinde im Wirkungsbereich werden von dem Ausbruch an negativer Energie betroffen und erleiden 1W8 SP +1 pro Zauberstufe. Auf Untote hat die negative Energie eine heilende und nicht schädigende Wirkung.",
  },
  {
    label: "Kreis des Unheils (9)",
    value: "circleOfDoom9",
    nwscriptValue: "IP_CONST_CASTSPELL_CIRCLE_OF_DOOM_9",

    description: "Alle Feinde im Wirkungsbereich werden von dem Ausbruch an negativer Energie betroffen und erleiden 1W8 SP +1 pro Zauberstufe. Auf Untote hat die negative Energie eine heilende und nicht schädigende Wirkung.",
  },
  {
    label: "Hellhören/Hellsehen (10)",
    value: "clairaudienceClairvoyance10",
    nwscriptValue: "IP_CONST_CASTSPELL_CLAIRAUDIENCE_CLAIRVOYANCE_10",

    description: "Während der Wirkungsdauer erhält das Ziel +10 auf alle Fertigkeitswürfe für Entdecken und Lauschen.",
  },
  {
    label: "Hellhören/Hellsehen (15)",
    value: "clairaudienceClairvoyance15",
    nwscriptValue: "IP_CONST_CASTSPELL_CLAIRAUDIENCE_CLAIRVOYANCE_15",

    description: "Während der Wirkungsdauer erhält das Ziel +10 auf alle Fertigkeitswürfe für Entdecken und Lauschen.",
  },
  {
    label: "Hellhören/Hellsehen (5)",
    value: "clairaudienceClairvoyance5",
    nwscriptValue: "IP_CONST_CASTSPELL_CLAIRAUDIENCE_CLAIRVOYANCE_5",

    description: "Während der Wirkungsdauer erhält das Ziel +10 auf alle Fertigkeitswürfe für Entdecken und Lauschen.",
  },
  {
    label: "Klarheit (3)",
    value: "clarity3",
    nwscriptValue: "IP_CONST_CASTSPELL_CLARITY_3",

    description: "Der Zauber hebt die Auswirkungen von Benommenheit, Schlaf, Verwirrung, Betäubung und Bezauberung auf und schützt das Ziel während der Wirkungsdauer vor Geistesbeeinflussung. Für jede aufgehobene Auswirkung erleidet das Ziel 1 SP.",
  },
  {
    label: "Todeswolke (9)",
    value: "cloudkill9",
    nwscriptValue: "IP_CONST_CASTSPELL_CLOUDKILL_9",

    description: "Eine wabernde Wolke aus giftigen Dämpfen entsteht im Wirkungsbereich. Kreaturen werden abhängig von ihren TW von der Wolke unterschiedlich betroffen:\n1-3 TW: Augenblicklicher Tod\n4-6 TW: Zähigkeitswurf oder Tod\nMehr als 6 TW: 1W10 SP/je Runde",
  },
  {
    label: "Sprühende Farben (2)",
    value: "colorSpray2",
    nwscriptValue: "IP_CONST_CASTSPELL_COLOR_SPRAY_2",

    description: "Sprühende Farben erzeugt ein verwirrendes Farbspiel im Wirkungsbereich. Die Auswirkungen auf die betroffenen Kreaturen hängen von deren Trefferwürfeln ab:\n1-2 TW: Schlaf für 3 + 1W4 Runden\n3-4 TW: Blindheit für 2 + 1W4 Runden\nMehr als 4 TW: Betäubt für 1 + 1W4 Runden",
  },
  {
    label: "Kältekegel (15)",
    value: "coneOfCold15",
    nwscriptValue: "IP_CONST_CASTSPELL_CONE_OF_COLD_15",

    description: "Aus den Händen des Magieanwenders schießt ein Kegel aus eisiger Kälte und Schnee, der je Zauberstufe 1W6 Punkte Kälteschaden bei allen Kreaturen im Wirkungsbereich verursacht. Der Maximalschaden beträgt 15W6 SP.",
  },
  {
    label: "Kältekegel (9)",
    value: "coneOfCold9",
    nwscriptValue: "IP_CONST_CASTSPELL_CONE_OF_COLD_9",

    description: "Aus den Händen des Magieanwenders schießt ein Kegel aus eisiger Kälte und Schnee, der je Zauberstufe 1W6 Punkte Kälteschaden bei allen Kreaturen im Wirkungsbereich verursacht. Der Maximalschaden beträgt 15W6 SP.",
  },
  {
    label: "Verwirrung (10)",
    value: "confusion10",
    nwscriptValue: "IP_CONST_CASTSPELL_CONFUSION_10",

    description: "Alle betroffenen Kreaturen wandern entweder ziellos herum, greifen ein beliebiges Ziel an oder tun gar nichts.",
  },
  {
    label: "Verwirrung (5)",
    value: "confusion5",
    nwscriptValue: "IP_CONST_CASTSPELL_CONFUSION_5",

    description: "Alle betroffenen Kreaturen wandern entweder ziellos herum, greifen ein beliebiges Ziel an oder tun gar nichts.",
  },
  {
    label: "Ansteckung (5)",
    value: "contagion5",
    nwscriptValue: "IP_CONST_CASTSPELL_CONTAGION_5",

    description: "Das Ziel erleidet eine der folgenden Krankheiten: Trübe Sieche, Wahnsinnsfieber, Hirnbrand, Rote Qual, Schüttelkrampf oder Schleimiges Verderben. Die Krankheit wird zufällig ausgewählt.",
  },
  {
    label: "Dauerhafte Flamme (7)",
    value: "continualFlame7",
    nwscriptValue: "IP_CONST_CASTSPELL_CONTINUAL_FLAME_7",

    description: "Der Zauber erschafft eine magische Flamme, die brennt, bis sie gebannt wird. Man kann den Zauber auf einen beliebigen Gegenstand wirken, der sich ausrüsten lässt. Dieser Gegenstand dient dann als beständige Lichtquelle.",
  },
  {
    label: "Untote befehligen (13)",
    value: "controlUndead13",
    nwscriptValue: "IP_CONST_CASTSPELL_CONTROL_UNDEAD_13",

    description: "Eine einzelne untote Kreatur, die maximal 2 TW je Zauberstufe haben darf, wird vom Magieanwender geistig kontrolliert, außer der Kreatur gelingt ein Willenswurf.",
  },
  {
    label: "Untote befehligen (20)",
    value: "controlUndead20",
    nwscriptValue: "IP_CONST_CASTSPELL_CONTROL_UNDEAD_20",

    description: "Eine einzelne untote Kreatur, die maximal 2 TW je Zauberstufe haben darf, wird vom Magieanwender geistig kontrolliert, außer der Kreatur gelingt ein Willenswurf.",
  },
  {
    label: "Mächtigere Untote erschaffen (15)",
    value: "createGreaterUndead15",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_GREATER_UNDEAD_15",

    description: "Ein mächtiger untoter Diener wird herbeigezaubert, dessen Stärke von der Zauberstufe des Magieanwenders abhängt:\nUnter der 15. Stufe: Vampir\nStufe 16-17: Verdammnisritter\nStufe 18-19: Leichnam\nStufe 20: Mächtige Mumie",
  },
  {
    label: "Mächtigere Untote erschaffen (16)",
    value: "createGreaterUndead16",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_GREATER_UNDEAD_16",

    description: "Ein mächtiger untoter Diener wird herbeigezaubert, dessen Stärke von der Zauberstufe des Magieanwenders abhängt:\nUnter der 15. Stufe: Vampir\nStufe 16-17: Verdammnisritter\nStufe 18-19: Leichnam\nStufe 20: Mächtige Mumie",
  },
  {
    label: "Mächtigere Untote erschaffen (18)",
    value: "createGreaterUndead18",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_GREATER_UNDEAD_18",

    description: "Ein mächtiger untoter Diener wird herbeigezaubert, dessen Stärke von der Zauberstufe des Magieanwenders abhängt:\nUnter der 15. Stufe: Vampir\nStufe 16-17: Verdammnisritter\nStufe 18-19: Leichnam\nStufe 20: Mächtige Mumie",
  },
  {
    label: "Untote erschaffen (11)",
    value: "createUndead11",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_UNDEAD_11",

    description: "Ein untoter Diener wird herbeigezaubert, dessen Stärke von der Zauberstufe des Magieanwenders abhängt:\nUnter der 11. Stufe: Ghul\nStufe 12-13: Grul\nStufe 14-15: Gruftschrecken\nStufe 16+: Schreckgespenst",
  },
  {
    label: "Untote erschaffen (14)",
    value: "createUndead14",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_UNDEAD_14",

    description: "Ein untoter Diener wird herbeigezaubert, dessen Stärke von der Zauberstufe des Magieanwenders abhängt:\nUnter der 11. Stufe: Ghul\nStufe 12-13: Grul\nStufe 14-15: Gruftschrecken\nStufe 16+: Schreckgespenst",
  },
  {
    label: "Untote erschaffen (16)",
    value: "createUndead16",
    nwscriptValue: "IP_CONST_CASTSPELL_CREATE_UNDEAD_16",

    description: "Ein untoter Diener wird herbeigezaubert, dessen Stärke von der Zauberstufe des Magieanwenders abhängt:\nUnter der 11. Stufe: Ghul\nStufe 12-13: Grul\nStufe 14-15: Gruftschrecken\nStufe 16+: Schreckgespenst",
  },
  {
    label: "Kriechender Tod (13)",
    value: "creepingDoom13",
    nwscriptValue: "IP_CONST_CASTSPELL_CREEPING_DOOM_13",

    description: "Der Magieanwender beschwört einen Schwarm aus stechenden und beißenden Insekten. Jede Kreatur im Wirkungsbereich erleidet 1W6 SP. Mit jeder neuen Runde im Wirkungsbereich erhöht sich der Schaden um +1W6 SP (also 1W6 SP in der ersten Runde, 2W6 SP in der zweiten Runde, 4W6 SP in der dritten Runde, 7W6 SP in der vierten Runde usw.) Der Zauber verursacht Schaden, bis die Wirkungsdauer endet oder bis er insgesamt 1.000 Schadenspunkte verursacht hat.",
  },
  {
    label: "Kritische Wunden heilen (12)",
    value: "cureCriticalWounds12",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_CRITICAL_WOUNDS_12",

    description: "Beim Ziel werden 4W8 SP + 1 SP je Zauberstufe (bis zu +20) geheilt. Bei Untoten haben heilende Zauber die gegenteilige Wirkung. Sie fügen ihnen Schaden zu. Um einen Untoten mit einem derartigen Zauber zu treffen, ist ein erfolgreicher Berührungsangriff erforderlich.",
  },
  {
    label: "Kritische Wunden heilen (15)",
    value: "cureCriticalWounds15",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_CRITICAL_WOUNDS_15",

    description: "Beim Ziel werden 4W8 SP + 1 SP je Zauberstufe (bis zu +20) geheilt. Bei Untoten haben heilende Zauber die gegenteilige Wirkung. Sie fügen ihnen Schaden zu. Um einen Untoten mit einem derartigen Zauber zu treffen, ist ein erfolgreicher Berührungsangriff erforderlich.",
  },
  {
    label: "Kritische Wunden heilen (7)",
    value: "cureCriticalWounds7",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_CRITICAL_WOUNDS_7",

    description: "Beim Ziel werden 4W8 SP + 1 SP je Zauberstufe (bis zu +20) geheilt. Bei Untoten haben heilende Zauber die gegenteilige Wirkung. Sie fügen ihnen Schaden zu. Um einen Untoten mit einem derartigen Zauber zu treffen, ist ein erfolgreicher Berührungsangriff erforderlich.",
  },
  {
    label: "Leichte Wunden heilen (2)",
    value: "cureLightWounds2",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_LIGHT_WOUNDS_2",

    description: "Beim Ziel werden 1W8 SP + 1 SP je Zauberstufe (bis zu +5) geheilt. Bei Untoten haben heilende Zauber die gegenteilige Wirkung. Sie fügen ihnen Schaden zu. Um einen Untoten mit einem derartigen Zauber zu treffen, ist ein erfolgreicher Berührungsangriff erforderlich.",
  },
  {
    label: "Leichte Wunden heilen (5)",
    value: "cureLightWounds5",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_LIGHT_WOUNDS_5",

    description: "Beim Ziel werden 1W8 SP + 1 SP je Zauberstufe (bis zu +5) geheilt. Bei Untoten haben heilende Zauber die gegenteilige Wirkung. Sie fügen ihnen Schaden zu. Um einen Untoten mit einem derartigen Zauber zu treffen, ist ein erfolgreicher Berührungsangriff erforderlich.",
  },
  {
    label: "Kleinere Wunde heilen (1)",
    value: "cureMinorWounds1",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_MINOR_WOUNDS_1",

    description: "Beim Ziel werden 4 SP geheilt. Bei Untoten haben heilende Zauber die gegenteilige Wirkung. Sie fügen ihnen Schaden zu. Um einen Untoten mit einem derartigen Zauber zu treffen, ist ein erfolgreicher Berührungsangriff erforderlich.",
  },
  {
    label: "Mittelschwere Wunden heilen (10)",
    value: "cureModerateWounds10",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_MODERATE_WOUNDS_10",

    description: "Beim Ziel werden 2W8 SP + 1 SP je Zauberstufe (bis zu +10) geheilt. Bei Untoten haben heilende Zauber die gegenteilige Wirkung. Sie fügen ihnen Schaden zu. Um einen Untoten mit einem derartigen Zauber zu treffen, ist ein erfolgreicher Berührungsangriff erforderlich.",
  },
  {
    label: "Mittelschwere Wunden heilen (3)",
    value: "cureModerateWounds3",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_MODERATE_WOUNDS_3",

    description: "Beim Ziel werden 2W8 SP + 1 SP je Zauberstufe (bis zu +10) geheilt. Bei Untoten haben heilende Zauber die gegenteilige Wirkung. Sie fügen ihnen Schaden zu. Um einen Untoten mit einem derartigen Zauber zu treffen, ist ein erfolgreicher Berührungsangriff erforderlich.",
  },
  {
    label: "Mittelschwere Wunden heilen (6)",
    value: "cureModerateWounds6",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_MODERATE_WOUNDS_6",

    description: "Beim Ziel werden 2W8 SP + 1 SP je Zauberstufe (bis zu +10) geheilt. Bei Untoten haben heilende Zauber die gegenteilige Wirkung. Sie fügen ihnen Schaden zu. Um einen Untoten mit einem derartigen Zauber zu treffen, ist ein erfolgreicher Berührungsangriff erforderlich.",
  },
  {
    label: "Schwere Wunden heilen (10)",
    value: "cureSeriousWounds10",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_SERIOUS_WOUNDS_10",

    description: "Beim Ziel werden 3W8 SP + 1 SP je Zauberstufe (bis zu +15) geheilt. Bei Untoten haben heilende Zauber die gegenteilige Wirkung. Sie fügen ihnen Schaden zu. Um einen Untoten mit einem derartigen Zauber zu treffen, ist ein erfolgreicher Berührungsangriff erforderlich.",
  },
  {
    label: "Schwere Wunden heilen (5)",
    value: "cureSeriousWounds5",
    nwscriptValue: "IP_CONST_CASTSPELL_CURE_SERIOUS_WOUNDS_5",

    description: "Beim Ziel werden 3W8 SP + 1 SP je Zauberstufe (bis zu +15) geheilt. Bei Untoten haben heilende Zauber die gegenteilige Wirkung. Sie fügen ihnen Schaden zu. Um einen Untoten mit einem derartigen Zauber zu treffen, ist ein erfolgreicher Berührungsangriff erforderlich.",
  },
  {
    label: "Dunkelheit (3)",
    value: "darkness3",
    nwscriptValue: "IP_CONST_CASTSPELL_DARKNESS_3",

    description: "Alle Kreaturen im Wirkungsbereich werden von einem Schleier aus Dunkelheit umhüllt, der nur mit Ultrasicht durchdrungen werden kann.",
  },
  {
    label: "Ultrasicht (3)",
    value: "darkvision3",
    nwscriptValue: "IP_CONST_CASTSPELL_DARKVISION_3",

    description: "Die Zielkreatur kann in vollständiger Dunkelheit sehen und zwar noch besser, als wenn sie über die angeborene Dunkelsicht verfügen würde. Der Zauber durchdringt selbst magische Dunkelheit.",
  },
  {
    label: "Ultrasicht (6)",
    value: "darkvision6",
    nwscriptValue: "IP_CONST_CASTSPELL_DARKVISION_6",

    description: "Die Zielkreatur kann in vollständiger Dunkelheit sehen und zwar noch besser, als wenn sie über die angeborene Dunkelsicht verfügen würde. Der Zauber durchdringt selbst magische Dunkelheit.",
  },
  {
    label: "Benommenheit (1)",
    value: "daze1",
    nwscriptValue: "IP_CONST_CASTSPELL_DAZE_1",

    description: "Wenn das Opfer humanoid ist und 5TW oder weniger hat, ist es für zwei Runden benommen.",
  },
  {
    label: "Schutz vor Todesmagie (7)",
    value: "deathWard7",
    nwscriptValue: "IP_CONST_CASTSPELL_DEATH_WARD_7",

    description: "Die Kreatur wird gegen alle Zauber, zauberähnliche Fähigkeiten und Effekte der Kategorie Tod immun.",
  },
  {
    label: "Spätzündender Feuerball (13)",
    value: "delayedBlastFireball13",
    nwscriptValue: "IP_CONST_CASTSPELL_DELAYED_BLAST_FIREBALL_13",

    description: "Der Magieanwender erschafft eine kleine, magische Zone, die auf Bewegungen von feindlichen Kreaturen reagiert. Sobald sie ausgelöst wird, explodiert sie in einem Feuerball, der bei allen Kreaturen im Wirkungsbereich 1W6 SP je Zauberstufe, mit einem Maximum von 20W6 SP, anrichtet.",
  },
  {
    label: "Spätzündender Feuerball (15)",
    value: "delayedBlastFireball15",
    nwscriptValue: "IP_CONST_CASTSPELL_DELAYED_BLAST_FIREBALL_15",

    description: "Der Magieanwender erschafft eine kleine, magische Zone, die auf Bewegungen von feindlichen Kreaturen reagiert. Sobald sie ausgelöst wird, explodiert sie in einem Feuerball, der bei allen Kreaturen im Wirkungsbereich 1W6 SP je Zauberstufe, mit einem Maximum von 20W6 SP, anrichtet.",
  },
  {
    label: "Spätzündender Feuerball (20)",
    value: "delayedBlastFireball20",
    nwscriptValue: "IP_CONST_CASTSPELL_DELAYED_BLAST_FIREBALL_20",

    description: "Der Magieanwender erschafft eine kleine, magische Zone, die auf Bewegungen von feindlichen Kreaturen reagiert. Sobald sie ausgelöst wird, explodiert sie in einem Feuerball, der bei allen Kreaturen im Wirkungsbereich 1W6 SP je Zauberstufe, mit einem Maximum von 20W6 SP, anrichtet.",
  },
  {
    label: "Zerstörung (13)",
    value: "destruction13",
    nwscriptValue: "IP_CONST_CASTSPELL_DESTRUCTION_13",

    description: "Die Zielkreatur muss einen Zähigkeitswurf bestehen oder sterben. Selbst bei einem erfolgreichen Zähigkeitswurf erleidet sie 10W6 Schadenspunkte.",
  },
  {
    label: "Grabgesang (15)",
    value: "dirge15",
    nwscriptValue: "IP_CONST_CASTSPELL_DIRGE_15",

    description: "Das Lied entfesselt die Energien des Todes und der Zerstörung. Alle Feinde im Wirkungsbereich erleiden pro Runde 2 Punkte Stärkeschaden und 2 Punkte Geschicklichkeitsschaden. Sobald man den Wirkungsbereich verlässt, kehren die Attribute zum Ausgangswert zurück.",
  },
  {
    label: "Fortschicken (12)",
    value: "dismissal12",
    nwscriptValue: "IP_CONST_CASTSPELL_DISMISSAL_12",

    description: "Alle herbeigezauberten Verbündeten von feindlichen Magieanwendern im Wirkungsbereich werden weggeschickt.",
  },
  {
    label: "Fortschicken (18)",
    value: "dismissal18",
    nwscriptValue: "IP_CONST_CASTSPELL_DISMISSAL_18",

    description: "Alle herbeigezauberten Verbündeten von feindlichen Magieanwendern im Wirkungsbereich werden weggeschickt.",
  },
  {
    label: "Fortschicken (7)",
    value: "dismissal7",
    nwscriptValue: "IP_CONST_CASTSPELL_DISMISSAL_7",

    description: "Alle herbeigezauberten Verbündeten von feindlichen Magieanwendern im Wirkungsbereich werden weggeschickt.",
  },
  {
    label: "Magie bannen (10)",
    value: "dispelMagic10",
    nwscriptValue: "IP_CONST_CASTSPELL_DISPEL_MAGIC_10",

    description: "Wird der Zauber auf eine Kreatur gewirkt, versucht er alle magischen Effekte und Zauber, die auf der Kreatur liegen, aufzuheben. Man kann den Zauber auch als Zauber mit Flächenwirkung einsetzen. In diesem Fall versucht er, bei jedem Ziel im Wirkungsbereich den mächtigsten Zauber aufzuheben. Um einen Zauber aufzuheben, muss dem Magieanwender ein Bannwurf mit 1W20 + 1 pro Zauberstufe (bis zu +10) gegen SG 11 + Zauberstufe des Zaubers oder Effekts, der gebannt werden soll, gelingen.",
  },
  {
    label: "Magie bannen (5)",
    value: "dispelMagic5",
    nwscriptValue: "IP_CONST_CASTSPELL_DISPEL_MAGIC_5",

    description: "Wird der Zauber auf eine Kreatur gewirkt, versucht er alle magischen Effekte und Zauber, die auf der Kreatur liegen, aufzuheben. Man kann den Zauber auch als Zauber mit Flächenwirkung einsetzen. In diesem Fall versucht er, bei jedem Ziel im Wirkungsbereich den mächtigsten Zauber aufzuheben. Um einen Zauber aufzuheben, muss dem Magieanwender ein Bannwurf mit 1W20 + 1 pro Zauberstufe (bis zu +10) gegen SG 11 + Zauberstufe des Zaubers oder Effekts, der gebannt werden soll, gelingen.",
  },
  {
    label: "Versetzung (9)",
    value: "displacement9",
    nwscriptValue: "IP_CONST_CASTSPELL_DISPLACEMENT_9",

    description: "Das Ziel erhält 50% Tarnung. Der Zauber dupliziert sozusagen die angeborene Fähigkeit einer Täuschungsbestie.",
  },
  {
    label: "Göttliche Gunst (5)",
    value: "divineFavor5",
    nwscriptValue: "IP_CONST_CASTSPELL_DIVINE_FAVOR_5",

    description: "Der Anwender erhält +1 auf Angriffs- und Schadenswürfe für je drei Zauberstufen (Minimum +1, Maximum +5).",
  },
  {
    label: "Göttliche Kraft (5)",
    value: "divineMight5",
    nwscriptValue: "IP_CONST_CASTSPELL_DIVINE_MIGHT_5",

    description: "Der Magieanwender erhält +1 Trefferpunkt pro Zauberstufe. Seine Stärke wird auf 18 erhöht. Wenn sie bereits 18 oder höher ist, verändert sie sich nicht. Außerdem erhält er den Grund-Angriffsbonus eines Kämpfers seiner Stufe.",
  },
  {
    label: "Göttliche Macht (7)",
    value: "divinePower7",
    nwscriptValue: "IP_CONST_CASTSPELL_DIVINE_POWER_7",

    description: "Der Magieanwender erhält +1 Trefferpunkt pro Zauberstufe. Seine Stärke wird auf 18 erhöht. Wenn sie bereits 18 oder höher ist, verändert sie sich nicht. Außerdem erhält er den Grund-Angriffsbonus eines Kämpfers seiner Stufe.",
  },
  {
    label: "Göttlicher Schild (5)",
    value: "divineShield5",
    nwscriptValue: "IP_CONST_CASTSPELL_DIVINE_SHIELD_5",

    description: "Der Magieanwender erhält +1 Trefferpunkt pro Zauberstufe. Seine Stärke wird auf 18 erhöht. Wenn sie bereits 18 oder höher ist, verändert sie sich nicht. Außerdem erhält er den Grund-Angriffsbonus eines Kämpfers seiner Stufe.",
  },
  {
    label: "Tier beherrschen (5)",
    value: "dominateAnimal5",
    nwscriptValue: "IP_CONST_CASTSPELL_DOMINATE_ANIMAL_5",

    description: "Wenn das Ziel, bei dem es sich um ein Tier handeln muss, bei seinem Rettungswurf versagt, wird es für die Wirkungsdauer zum treuen und loyalen Diener des Magieanwenders.",
  },
  {
    label: "Monster beherrschen (17)",
    value: "dominateMonster17",
    nwscriptValue: "IP_CONST_CASTSPELL_DOMINATE_MONSTER_17",

    description: "Das Monster, das der Magieanwender als Ziel gewählt hat, wird zu einem treuen und loyalen Diener.",
  },
  {
    label: "Person beherrschen (7)",
    value: "dominatePerson7",
    nwscriptValue: "IP_CONST_CASTSPELL_DOMINATE_PERSON_7",

    description: "Die Person, die der Magieanwender als Ziel gewählt hat, wird zu einem treuen und loyalen Diener, wenn sie bei ihrem Willenswurf scheitert.",
  },
  {
    label: "Unheil (2)",
    value: "doom2",
    nwscriptValue: "IP_CONST_CASTSPELL_DOOM_2",

    description: "Das Opfer erhält -2 auf Angriffs-, Schadens-, Rettungs-, Attributs- und Fertigkeitswürfe.",
  },
  {
    label: "Unheil (5)",
    value: "doom5",
    nwscriptValue: "IP_CONST_CASTSPELL_DOOM_5",

    description: "Das Opfer erhält -2 auf Angriffs-, Schadens-, Rettungs-, Attributs- und Fertigkeitswürfe.",
  },
  {
    label: "Drachenodem: Säure",
    value: "dragonBreathAcid10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_ACID_10",

    description: "Odemwaffen können nur einmal alle 1W4 Runden eingesetzt werden. Der Wirkungsbereich beginnt direkt vor der Kreatur und breitet sich in einem Radius von 4,50 m aus. Es gibt folgende Arten von Odemwaffen:\n\nSchaden:\nSäure: SG 13 bis 36, Schaden 2W4 bis 24W4.\nElektrizität: SG 14 bis 37, Schaden 2W8 bis 24W8.\nChlorgas: SG 13 bis 37, Schaden 2W6 bis 24W6.\nFeuer: SG 15 bis 40, Schaden 2W10 bis 24W10.\nKälte: SG 12 bis 36, Schaden 2W6 bis 24W6.\nSchwächung: SG 16 bis 41, Schaden 1 Punkt Stärkeschaden +1 je 3 TW über 6 TW.\n\nSonstiges:\nSchlaf: SG 14 bis 37.\nFurcht: SG 14 bis 37.\nVerlangsamen: SG 13 bis 37.\nLähmung: SG 14 bis 39.",
  },
  {
    label: "Drachenodem: Kälte",
    value: "dragonBreathCold10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_COLD_10",

    description: "Odemwaffen können nur einmal alle 1W4 Runden eingesetzt werden. Der Wirkungsbereich beginnt direkt vor der Kreatur und breitet sich in einem Radius von 4,50 m aus. Es gibt folgende Arten von Odemwaffen:\n\nSchaden:\nSäure: SG 13 bis 36, Schaden 2W4 bis 24W4.\nElektrizität: SG 14 bis 37, Schaden 2W8 bis 24W8.\nChlorgas: SG 13 bis 37, Schaden 2W6 bis 24W6.\nFeuer: SG 15 bis 40, Schaden 2W10 bis 24W10.\nKälte: SG 12 bis 36, Schaden 2W6 bis 24W6.\nSchwächung: SG 16 bis 41, Schaden 1 Punkt Stärkeschaden +1 je 3 TW über 6 TW.\n\nSonstiges:\nSchlaf: SG 14 bis 37.\nFurcht: SG 14 bis 37.\nVerlangsamen: SG 13 bis 37.\nLähmung: SG 14 bis 39.",
  },
  {
    label: "Drachenodem: Furcht",
    value: "dragonBreathFear10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_FEAR_10",

    description: "Odemwaffen können nur einmal alle 1W4 Runden eingesetzt werden. Der Wirkungsbereich beginnt direkt vor der Kreatur und breitet sich in einem Radius von 4,50 m aus. Es gibt folgende Arten von Odemwaffen:\n\nSchaden:\nSäure: SG 13 bis 36, Schaden 2W4 bis 24W4.\nElektrizität: SG 14 bis 37, Schaden 2W8 bis 24W8.\nChlorgas: SG 13 bis 37, Schaden 2W6 bis 24W6.\nFeuer: SG 15 bis 40, Schaden 2W10 bis 24W10.\nKälte: SG 12 bis 36, Schaden 2W6 bis 24W6.\nSchwächung: SG 16 bis 41, Schaden 1 Punkt Stärkeschaden +1 je 3 TW über 6 TW.\n\nSonstiges:\nSchlaf: SG 14 bis 37.\nFurcht: SG 14 bis 37.\nVerlangsamen: SG 13 bis 37.\nLähmung: SG 14 bis 39.",
  },
  {
    label: "Drachenodem: Feuer",
    value: "dragonBreathFire10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_FIRE_10",

    description: "Odemwaffen können nur einmal alle 1W4 Runden eingesetzt werden. Der Wirkungsbereich beginnt direkt vor der Kreatur und breitet sich in einem Radius von 4,50 m aus. Es gibt folgende Arten von Odemwaffen:\n\nSchaden:\nSäure: SG 13 bis 36, Schaden 2W4 bis 24W4.\nElektrizität: SG 14 bis 37, Schaden 2W8 bis 24W8.\nChlorgas: SG 13 bis 37, Schaden 2W6 bis 24W6.\nFeuer: SG 15 bis 40, Schaden 2W10 bis 24W10.\nKälte: SG 12 bis 36, Schaden 2W6 bis 24W6.\nSchwächung: SG 16 bis 41, Schaden 1 Punkt Stärkeschaden +1 je 3 TW über 6 TW.\n\nSonstiges:\nSchlaf: SG 14 bis 37.\nFurcht: SG 14 bis 37.\nVerlangsamen: SG 13 bis 37.\nLähmung: SG 14 bis 39.",
  },
  {
    label: "Drachenodem: Giftgas",
    value: "dragonBreathGas10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_GAS_10",

    description: "Odemwaffen können nur einmal alle 1W4 Runden eingesetzt werden. Der Wirkungsbereich beginnt direkt vor der Kreatur und breitet sich in einem Radius von 4,50 m aus. Es gibt folgende Arten von Odemwaffen:\n\nSchaden:\nSäure: SG 13 bis 36, Schaden 2W4 bis 24W4.\nElektrizität: SG 14 bis 37, Schaden 2W8 bis 24W8.\nChlorgas: SG 13 bis 37, Schaden 2W6 bis 24W6.\nFeuer: SG 15 bis 40, Schaden 2W10 bis 24W10.\nKälte: SG 12 bis 36, Schaden 2W6 bis 24W6.\nSchwächung: SG 16 bis 41, Schaden 1 Punkt Stärkeschaden +1 je 3 TW über 6 TW.\n\nSonstiges:\nSchlaf: SG 14 bis 37.\nFurcht: SG 14 bis 37.\nVerlangsamen: SG 13 bis 37.\nLähmung: SG 14 bis 39.",
  },
  {
    label: "Drachenodem: Elektrizität",
    value: "dragonBreathLightning10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_LIGHTNING_10",

    description: "Odemwaffen können nur einmal alle 1W4 Runden eingesetzt werden. Der Wirkungsbereich beginnt direkt vor der Kreatur und breitet sich in einem Radius von 4,50 m aus. Es gibt folgende Arten von Odemwaffen:\n\nSchaden:\nSäure: SG 13 bis 36, Schaden 2W4 bis 24W4.\nElektrizität: SG 14 bis 37, Schaden 2W8 bis 24W8.\nChlorgas: SG 13 bis 37, Schaden 2W6 bis 24W6.\nFeuer: SG 15 bis 40, Schaden 2W10 bis 24W10.\nKälte: SG 12 bis 36, Schaden 2W6 bis 24W6.\nSchwächung: SG 16 bis 41, Schaden 1 Punkt Stärkeschaden +1 je 3 TW über 6 TW.\n\nSonstiges:\nSchlaf: SG 14 bis 37.\nFurcht: SG 14 bis 37.\nVerlangsamen: SG 13 bis 37.\nLähmung: SG 14 bis 39.",
  },
  {
    label: "Drachenodem: Lähmung",
    value: "dragonBreathParalyze10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_PARALYZE_10",

    description: "Odemwaffen können nur einmal alle 1W4 Runden eingesetzt werden. Der Wirkungsbereich beginnt direkt vor der Kreatur und breitet sich in einem Radius von 4,50 m aus. Es gibt folgende Arten von Odemwaffen:\n\nSchaden:\nSäure: SG 13 bis 36, Schaden 2W4 bis 24W4.\nElektrizität: SG 14 bis 37, Schaden 2W8 bis 24W8.\nChlorgas: SG 13 bis 37, Schaden 2W6 bis 24W6.\nFeuer: SG 15 bis 40, Schaden 2W10 bis 24W10.\nKälte: SG 12 bis 36, Schaden 2W6 bis 24W6.\nSchwächung: SG 16 bis 41, Schaden 1 Punkt Stärkeschaden +1 je 3 TW über 6 TW.\n\nSonstiges:\nSchlaf: SG 14 bis 37.\nFurcht: SG 14 bis 37.\nVerlangsamen: SG 13 bis 37.\nLähmung: SG 14 bis 39.",
  },
  {
    label: "Drachenodem: Schlaf",
    value: "dragonBreathSleep10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_SLEEP_10",

    description: "Odemwaffen können nur einmal alle 1W4 Runden eingesetzt werden. Der Wirkungsbereich beginnt direkt vor der Kreatur und breitet sich in einem Radius von 4,50 m aus. Es gibt folgende Arten von Odemwaffen:\n\nSchaden:\nSäure: SG 13 bis 36, Schaden 2W4 bis 24W4.\nElektrizität: SG 14 bis 37, Schaden 2W8 bis 24W8.\nChlorgas: SG 13 bis 37, Schaden 2W6 bis 24W6.\nFeuer: SG 15 bis 40, Schaden 2W10 bis 24W10.\nKälte: SG 12 bis 36, Schaden 2W6 bis 24W6.\nSchwächung: SG 16 bis 41, Schaden 1 Punkt Stärkeschaden +1 je 3 TW über 6 TW.\n\nSonstiges:\nSchlaf: SG 14 bis 37.\nFurcht: SG 14 bis 37.\nVerlangsamen: SG 13 bis 37.\nLähmung: SG 14 bis 39.",
  },
  {
    label: "Drachenodem: Verlangsamen",
    value: "dragonBreathSlow10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_SLOW_10",

    description: "Odemwaffen können nur einmal alle 1W4 Runden eingesetzt werden. Der Wirkungsbereich beginnt direkt vor der Kreatur und breitet sich in einem Radius von 4,50 m aus. Es gibt folgende Arten von Odemwaffen:\n\nSchaden:\nSäure: SG 13 bis 36, Schaden 2W4 bis 24W4.\nElektrizität: SG 14 bis 37, Schaden 2W8 bis 24W8.\nChlorgas: SG 13 bis 37, Schaden 2W6 bis 24W6.\nFeuer: SG 15 bis 40, Schaden 2W10 bis 24W10.\nKälte: SG 12 bis 36, Schaden 2W6 bis 24W6.\nSchwächung: SG 16 bis 41, Schaden 1 Punkt Stärkeschaden +1 je 3 TW über 6 TW.\n\nSonstiges:\nSchlaf: SG 14 bis 37.\nFurcht: SG 14 bis 37.\nVerlangsamen: SG 13 bis 37.\nLähmung: SG 14 bis 39.",
  },
  {
    label: "Drachenodem: Schwächung",
    value: "dragonBreathWeaken10",
    nwscriptValue: "IP_CONST_CASTSPELL_DRAGON_BREATH_WEAKEN_10",

    description: "Odemwaffen können nur einmal alle 1W4 Runden eingesetzt werden. Der Wirkungsbereich beginnt direkt vor der Kreatur und breitet sich in einem Radius von 4,50 m aus. Es gibt folgende Arten von Odemwaffen:\n\nSchaden:\nSäure: SG 13 bis 36, Schaden 2W4 bis 24W4.\nElektrizität: SG 14 bis 37, Schaden 2W8 bis 24W8.\nChlorgas: SG 13 bis 37, Schaden 2W6 bis 24W6.\nFeuer: SG 15 bis 40, Schaden 2W10 bis 24W10.\nKälte: SG 12 bis 36, Schaden 2W6 bis 24W6.\nSchwächung: SG 16 bis 41, Schaden 1 Punkt Stärkeschaden +1 je 3 TW über 6 TW.\n\nSonstiges:\nSchlaf: SG 14 bis 37.\nFurcht: SG 14 bis 37.\nVerlangsamen: SG 13 bis 37.\nLähmung: SG 14 bis 39.",
  },
  {
    label: "Ertränken (15)",
    value: "drown15",
    nwscriptValue: "IP_CONST_CASTSPELL_DROWN_15",

    description: "Mit diesem Zauber füllt der Anwender die Lungen eines Wesens mit Wasser. Jedes ertrunkene Wesen erleidet Schaden in Höhe von 90% seiner aktuellen TP. Golems und andere nicht lebendige Kreaturen können nicht ertränkt werden.",
  },
  {
    label: "Adlerhafte Pracht (10)",
    value: "eagleSpledor10",
    nwscriptValue: "IP_CONST_CASTSPELL_EAGLE_SPLEDOR_10",

    description: "Das Charisma der Zielkreatur erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Adlerhafte Pracht (15)",
    value: "eagleSpledor15",
    nwscriptValue: "IP_CONST_CASTSPELL_EAGLE_SPLEDOR_15",

    description: "Das Charisma der Zielkreatur erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Adlerhafte Pracht (3)",
    value: "eagleSpledor3",
    nwscriptValue: "IP_CONST_CASTSPELL_EAGLE_SPLEDOR_3",

    description: "Das Charisma der Zielkreatur erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Erdbeben (20)",
    value: "earthquake20",
    nwscriptValue: "IP_CONST_CASTSPELL_EARTHQUAKE_20",

    description: "Der Magieanwender erzeugt rund um sich ein gewaltiges Erdbeben, dass bei allen Kreaturen im Wirkungsbereich (außer bei ihm selbst) 1W6 Schadenspunkte je Zauberstufe (maximal 10W6 SP) verursacht.",
  },
  {
    label: "Elektrischer Schlag (1)",
    value: "electricJolt1",
    nwscriptValue: "IP_CONST_CASTSPELL_ELECTRIC_JOLT_1",

    description: "Das Ziel erleidet 1W3 Punkte Schaden durch Elektrizität.",
  },
  {
    label: "Elementarschild (12)",
    value: "elementalShield12",
    nwscriptValue: "IP_CONST_CASTSPELL_ELEMENTAL_SHIELD_12",

    description: "Der Magieanwender wird von einem Feuerring umgeben, der bei allen Gegnern, die einen Nahkampfangriff gegen den Magier schaffen, 1W6 SP + 1 SP je Zauberstufe verursacht. Außerdem erhält der Zaubernde 50% Immunität gegen Kälte und Feuer.",
  },
  {
    label: "Elementarschild (7)",
    value: "elementalShield7",
    nwscriptValue: "IP_CONST_CASTSPELL_ELEMENTAL_SHIELD_7",

    description: "Der Magieanwender wird von einem Feuerring umgeben, der bei allen Gegnern, die einen Nahkampfangriff gegen den Magier schaffen, 1W6 SP + 1 SP je Zauberstufe verursacht. Außerdem erhält der Zaubernde 50% Immunität gegen Kälte und Feuer.",
  },
  {
    label: "Elementarhorde (17)",
    value: "elementalSwarm17",
    nwscriptValue: "IP_CONST_CASTSPELL_ELEMENTAL_SWARM_17",

    description: "Der Magieanwender zaubert einen Luftelementar mit 21 TW herbei, der ihm loyal dient, bis er getötet wird oder die Wirkungsdauer endet. Stirbt der Luftelementar, bevor die Wirkungsdauer verstrichen ist, wird automatisch als Ersatz ein Wasserelementar mit 21 TW herbeigezaubert. Das setzt sich dann mit einem Erd- und einem Feuerelementar fort. Sollte auch der Feuerelementar sterben, endet der Zauber.",
  },
  {
    label: "Ausdauer (10)",
    value: "endurance10",
    nwscriptValue: "IP_CONST_CASTSPELL_ENDURANCE_10",

    description: "Die Konstitution des Ziels erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Ausdauer (15)",
    value: "endurance15",
    nwscriptValue: "IP_CONST_CASTSPELL_ENDURANCE_15",

    description: "Die Konstitution des Ziels erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Ausdauer (3)",
    value: "endurance3",
    nwscriptValue: "IP_CONST_CASTSPELL_ENDURANCE_3",

    description: "Die Konstitution des Ziels erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Elementen trotzen (2)",
    value: "endureElements2",
    nwscriptValue: "IP_CONST_CASTSPELL_ENDURE_ELEMENTS_2",

    description: "Das Ziel erhält Schadensreduzierung 10 gegen alle Arten von elementaren Angriffen. Sobald der Zauber 20 SP durch ein bestimmtes Element abgewehrt hat, endet er.",
  },
  {
    label: "Energiepuffer (11)",
    value: "energyBuffer11",
    nwscriptValue: "IP_CONST_CASTSPELL_ENERGY_BUFFER_11",

    description: "Der Magieanwender erhält Schadensreduzierung 40 gegen alle Arten von elementaren Angriffen. Sobald der Zauber 60 SP durch ein bestimmtes Element abgewehrt hat, endet er.",
  },
  {
    label: "Energiepuffer (15)",
    value: "energyBuffer15",
    nwscriptValue: "IP_CONST_CASTSPELL_ENERGY_BUFFER_15",

    description: "Der Magieanwender erhält Schadensreduzierung 40 gegen alle Arten von elementaren Angriffen. Sobald der Zauber 60 SP durch ein bestimmtes Element abgewehrt hat, endet er.",
  },
  {
    label: "Energiepuffer (20)",
    value: "energyBuffer20",
    nwscriptValue: "IP_CONST_CASTSPELL_ENERGY_BUFFER_20",

    description: "Der Magieanwender erhält Schadensreduzierung 40 gegen alle Arten von elementaren Angriffen. Sobald der Zauber 60 SP durch ein bestimmtes Element abgewehrt hat, endet er.",
  },
  {
    label: "Entzug von Lebenskraft (17)",
    value: "energyDrain17",
    nwscriptValue: "IP_CONST_CASTSPELL_ENERGY_DRAIN_17",

    description: "Das Ziel verliert permanent 2W4 Charakterstufen.",
  },
  {
    label: "Entkräftung (7)",
    value: "enervation7",
    nwscriptValue: "IP_CONST_CASTSPELL_ENERVATION_7",

    description: "Das Ziel verliert vorübergehend 1W4 Charakterstufen.",
  },
  {
    label: "Verstricken (2)",
    value: "entangle2",
    nwscriptValue: "IP_CONST_CASTSPELL_ENTANGLE_2",

    description: "Alle Kreaturen im Wirkungsbereich werden von Lianen, Schlingpflanzen und ähnlichem Gewächs umfangen. Sie können sich nicht bewegen, aber weiterhin kämpfen und Zauber wirken. Opfer, deren Reflexwurf gelingt, können sich mit halber Bewegungsrate bewegen.",
  },
  {
    label: "Verstricken (5)",
    value: "entangle5",
    nwscriptValue: "IP_CONST_CASTSPELL_ENTANGLE_5",

    description: "Alle Kreaturen im Wirkungsbereich werden von Lianen, Schlingpflanzen und ähnlichem Gewächs umfangen. Sie können sich nicht bewegen, aber weiterhin kämpfen und Zauber wirken. Opfer, deren Reflexwurf gelingt, können sich mit halber Bewegungsrate bewegen.",
  },
  {
    label: "Entropieschild (5)",
    value: "entropicShield5",
    nwscriptValue: "IP_CONST_CASTSPELL_ENTROPIC_SHIELD_5",

    description: "Ein magischer Schild umhüllt den Anwender, wodurch Fernkampfangriffe gegen den Anwender zu 20% danebengehen.",
  },
  {
    label: "Mächtiges Heiligtum (18)",
    value: "etherealness18",
    nwscriptValue: "IP_CONST_CASTSPELL_ETHEREALNESS_18",

    description: "Der Magieanwender wird ätherisch. Er kann von anderen Kreaturen nicht bemerkt werden. Sobald er angreift oder eine andere feindselige Aktion ergreift, hört die Wirkung auf.",
  },
  {
    label: "Ätherisches Antlitz (15)",
    value: "etherealVisage15",
    nwscriptValue: "IP_CONST_CASTSPELL_ETHEREAL_VISAGE_15",

    description: "Der Magieanwender wird von einem geisterhaften Licht umspielt, das ihm Schadensreduzierung 20/+3 gewährt und ihn vor allen Zaubern des 2. oder eines niedrigeren Grades schützt. Außerdem erhält er 25% Tarnung.",
  },
  {
    label: "Ätherisches Antlitz (9)",
    value: "etherealVisage9",
    nwscriptValue: "IP_CONST_CASTSPELL_ETHEREAL_VISAGE_9",

    description: "Der Magieanwender wird von einem geisterhaften Licht umspielt, das ihm Schadensreduzierung 20/+3 gewährt und ihn vor allen Zaubern des 2. oder eines niedrigeren Grades schützt. Außerdem erhält er 25% Tarnung.",
  },
  {
    label: "Evards Schwarze Tentakel (15)",
    value: "evardsBlackTentacles15",
    nwscriptValue: "IP_CONST_CASTSPELL_EVARDS_BLACK_TENTACLES_15",

    description: "Dicke, gummiartige 10 Fuß lange Tentakel schieben sich aus dem Boden. Jedes Tentakel kann ein Ziel greifen und verursacht Schaden von je 1W6+4 SP wie durch Wuchtwaffen. Dem lähmenden Effekt der Attacken kann mit einem Zähigkeitswurf widerstanden werden. Die Tentakel verteilen sich zufällig im Wirkungsbereich, aber es können nicht mehr als die Hälfte der Tentakel ein einzelnes Opfer pro Runde greifen. Die Unfähigkeit der Tentakel, kleine Ziele zu ergreifen, macht kleine Wesen absolut immun gegen die Auswirkungen des Zaubers.",
  },
  {
    label: "Evards Schwarze Tentakel (7)",
    value: "evardsBlackTentacles7",
    nwscriptValue: "IP_CONST_CASTSPELL_EVARDS_BLACK_TENTACLES_7",

    description: "Dicke, gummiartige 10 Fuß lange Tentakel schieben sich aus dem Boden. Jedes Tentakel kann ein Ziel greifen und verursacht Schaden von je 1W6+4 SP wie durch Wuchtwaffen. Dem lähmenden Effekt der Attacken kann mit einem Zähigkeitswurf widerstanden werden. Die Tentakel verteilen sich zufällig im Wirkungsbereich, aber es können nicht mehr als die Hälfte der Tentakel ein einzelnes Opfer pro Runde greifen. Die Unfähigkeit der Tentakel, kleine Ziele zu ergreifen, macht kleine Wesen absolut immun gegen die Auswirkungen des Zaubers.",
  },
  {
    label: "Rascher Rückzug (5)",
    value: "expeditiousRetreat5",
    nwscriptValue: "IP_CONST_CASTSPELL_EXPEDITIOUS_RETREAT_5",

    description: "Der Magieanwender bewegt sich mit 150% seiner normalen Bewegungsrate. Dadurch kann er vor gefährlichen Begegnungen fliehen. Der Zauber hat keine Auswirkung, wenn auf den Magieanwender bereits Hast wirkt.",
  },
  {
    label: "Furcht (5)",
    value: "fear5",
    nwscriptValue: "IP_CONST_CASTSPELL_FEAR_5",

    description: "Alle betroffenen Kreaturen werden von einer überwältigenden Furcht befallen, die alle anderen Gedanken auslöscht. Sie rennen panisch vor allen Kreaturen davon, die sie nicht als Verbündete ansehen.",
  },
  {
    label: "Schwachsinn (9)",
    value: "feeblemind9",
    nwscriptValue: "IP_CONST_CASTSPELL_FEEBLEMIND_9",

    description: "Wenn dem Magieanwender ein erfolgreicher Berührungsangriff im Fernkampf gelingt, erleidet das Ziel einen Intelligenzverlust von 1W4 Punkten je 4 Zauberstufen.",
  },
  {
    label: "Fallen finden (3)",
    value: "findTraps3",
    nwscriptValue: "IP_CONST_CASTSPELL_FIND_TRAPS_3",

    description: "Der Magieanwender entdeckt alle Fallen im Wirkungsbereich. Außerdem werden die Fallen entschärft.",
  },
  {
    label: "Finger des Todes (13)",
    value: "fingerOfDeath13",
    nwscriptValue: "IP_CONST_CASTSPELL_FINGER_OF_DEATH_13",

    description: "Wenn dem Opfer ein Zähigkeitswurf misslingt, stirbt es. Auch bei einem erfolgreichen Zähigkeitswurf erleidet es 3W6 SP und 1 SP je Zauberstufe.",
  },
  {
    label: "Feuerball (10)",
    value: "fireball10",
    nwscriptValue: "IP_CONST_CASTSPELL_FIREBALL_10",

    description: "Der Magieanwender schießt ein flammendes Projektil ab, das beim Aufschlag in einem Feuerball explodiert. Alle Kreaturen im Wirkungsbereich erleiden 1W6 Punkte Feuerschaden je Zauberstufe mit einem Maximum von 10W6 SP.",
  },
  {
    label: "Feuerball (5)",
    value: "fireball5",
    nwscriptValue: "IP_CONST_CASTSPELL_FIREBALL_5",

    description: "Der Magieanwender schießt ein flammendes Projektil ab, das beim Aufschlag in einem Feuerball explodiert. Alle Kreaturen im Wirkungsbereich erleiden 1W6 Punkte Feuerschaden je Zauberstufe mit einem Maximum von 10W6 SP.",
  },
  {
    label: "Flächenbrand (15)",
    value: "firebrand15",
    nwscriptValue: "IP_CONST_CASTSPELL_FIREBRAND_15",

    description: "Zahlreiche Flammen tauchen auf (eine je Zauberstufe) und jede von ihnen schlägt bei einer feindlichen Kreatur im Wirkungsbereich ein. Wenn mehr Kreaturen als Flammen anwesend sind, dann werden die nächststehenden Ziele betroffen. Gibt es mehr Flammen als Kreaturen, verschwinden die überschüssigen Flammen, ohne Schaden anzurichten. Jede Flamme explodiert für 1W6 SP je Zauberstufe (maximal 15W6 SP).",
  },
  {
    label: "Feuersturm (13)",
    value: "fireStorm13",
    nwscriptValue: "IP_CONST_CASTSPELL_FIRE_STORM_13",

    description: "Im Wirkungsbereich entsteht ein tosender Feuersturm, der bei allen Kreaturen, die sich im Bereich des Infernos aufhalten, 1W6 SP pro Zauberstufe bis zu 20W6 SP anrichtet. Die Hälfte des Schadens ist Feuerschaden, und die andere Hälfte ist Schaden durch göttliche Energie.",
  },
  {
    label: "Feuersturm (18)",
    value: "fireStorm18",
    nwscriptValue: "IP_CONST_CASTSPELL_FIRE_STORM_18",

    description: "Im Wirkungsbereich entsteht ein tosender Feuersturm, der bei allen Kreaturen, die sich im Bereich des Infernos aufhalten, 1W6 SP pro Zauberstufe bis zu 20W6 SP anrichtet. Die Hälfte des Schadens ist Feuerschaden, und die andere Hälfte ist Schaden durch göttliche Energie.",
  },
  {
    label: "Flammenpfeil (12)",
    value: "flameArrow12",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_ARROW_12",

    description: "Der Magieanwender schießt mit flammenden Pfeilen auf sein Ziel. Je 4 Zauberstufen wird ein Pfeil beschworen. Jeder Pfeil richtet 4W6 SP an.",
  },
  {
    label: "Flammenpfeil (18)",
    value: "flameArrow18",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_ARROW_18",

    description: "Der Magieanwender schießt mit flammenden Pfeilen auf sein Ziel. Je 4 Zauberstufen wird ein Pfeil beschworen. Jeder Pfeil richtet 4W6 SP an.",
  },
  {
    label: "Flammenpfeil (5)",
    value: "flameArrow5",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_ARROW_5",

    description: "Der Magieanwender schießt mit flammenden Pfeilen auf sein Ziel. Je 4 Zauberstufen wird ein Pfeil beschworen. Jeder Pfeil richtet 4W6 SP an.",
  },
  {
    label: "Flammenstoß (10)",
    value: "flameLash10",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_LASH_10",

    description: "Vom Druiden greifen Flammenzungen nach einem Feind, die 2W6 Punkte Feuerschaden +1W6 Punkte Feuerschaden je 3 Zauberstufen über der 3. Stufe verursachen.",
  },
  {
    label: "Flammenstoß (3)",
    value: "flameLash3",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_LASH_3",

    description: "Vom Druiden greifen Flammenzungen nach einem Feind, die 2W6 Punkte Feuerschaden +1W6 Punkte Feuerschaden je 3 Zauberstufen über der 3. Stufe verursachen.",
  },
  {
    label: "Flammenschlag (12)",
    value: "flameStrike12",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_STRIKE_12",

    description: "Eine Flammensäule schießt vom Himmel herab und hüllt alle Ziele im Wirkungsbereich ein. Sie verursacht 1W6 SP je Zauberstufe mit einem Maximum von 15W6 SP. Die Hälfte des Schadens ist Feuerschaden, und die andere Hälfte ist Schaden durch göttliche Energie. Feinde im Wirkungsbereich erleiden vollen Schaden, während Verbündete nur den Feuerschaden erleiden.",
  },
  {
    label: "Flammenschlag (18)",
    value: "flameStrike18",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_STRIKE_18",

    description: "Eine Flammensäule schießt vom Himmel herab und hüllt alle Ziele im Wirkungsbereich ein. Sie verursacht 1W6 SP je Zauberstufe mit einem Maximum von 15W6 SP. Die Hälfte des Schadens ist Feuerschaden, und die andere Hälfte ist Schaden durch göttliche Energie. Feinde im Wirkungsbereich erleiden vollen Schaden, während Verbündete nur den Feuerschaden erleiden.",
  },
  {
    label: "Flammenschlag (7)",
    value: "flameStrike7",
    nwscriptValue: "IP_CONST_CASTSPELL_FLAME_STRIKE_7",

    description: "Eine Flammensäule schießt vom Himmel herab und hüllt alle Ziele im Wirkungsbereich ein. Sie verursacht 1W6 SP je Zauberstufe mit einem Maximum von 15W6 SP. Die Hälfte des Schadens ist Feuerschaden, und die andere Hälfte ist Schaden durch göttliche Energie. Feinde im Wirkungsbereich erleiden vollen Schaden, während Verbündete nur den Feuerschaden erleiden.",
  },
  {
    label: "Aufblitzen (1)",
    value: "flare1",
    nwscriptValue: "IP_CONST_CASTSPELL_FLARE_1",

    description: "Wenn dem Ziel ein Zähigkeitswurf misslingt, wird es von dem Licht geblendet, das der Magieanwender verschießt, und es erleidet -1 auf Angriffswürfe.",
  },
  {
    label: "Fleisch zu Stein (5)",
    value: "fleshToStone5",
    nwscriptValue: "IP_CONST_CASTSPELL_FLESH_TO_STONE_5",

    description: "Das Opfer und all seine Besitztümer werden in eine bewegungslose Statue verwandelt. Nur Stein zu Fleisch kann das Opfer wieder herstellen.\n* Bei einem Schwierigkeitsgrad von Normal oder weniger ist die Wirkungsdauer 1 Runde/Stufe. Auf höheren Schwierigkeitsgraden ist die Versteinerung permanent. Wenn sich der Magieanwender jedoch ausruht, werden alle Kreaturen, die von ihm versteinert wurden, wieder in ihren Normalzustand zurückversetzt, als ob Stein zu Fleisch auf sie gewirkt worden wäre.",
  },
  {
    label: "Verschlagenheit des Fuchses (10)",
    value: "foxsCunning10",
    nwscriptValue: "IP_CONST_CASTSPELL_FOXS_CUNNING_10",

    description: "Die Intelligenz der Zielkreatur erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Verschlagenheit des Fuchses (15)",
    value: "foxsCunning15",
    nwscriptValue: "IP_CONST_CASTSPELL_FOXS_CUNNING_15",

    description: "Die Intelligenz der Zielkreatur erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Verschlagenheit des Fuchses (3)",
    value: "foxsCunning3",
    nwscriptValue: "IP_CONST_CASTSPELL_FOXS_CUNNING_3",

    description: "Die Intelligenz der Zielkreatur erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Bewegungsfreiheit (7)",
    value: "freedomOfMovement7",
    nwscriptValue: "IP_CONST_CASTSPELL_FREEDOM_OF_MOVEMENT_7",

    description: "Das Ziel wird gegen Zauber und Effekte immun, die Lähmung, Verlangsamung oder Verstrickung verursachen.",
  },
  {
    label: "Tor (17)",
    value: "gate17",
    nwscriptValue: "IP_CONST_CASTSPELL_GATE_17",

    description: "Dieser mächtige Zauber öffnet ein Tor auf eine andere Existenzebene und ruft einen Balor herbei. Wenn der Magieanwender durch Schutz vor Bösem oder Schutzkreis gegen Böses oder Schutzaura gegen Böses geschützt ist, dient ihm der Balor. Andernfalls versucht der Balor, ihn zu zerstören.",
  },
  {
    label: "Geisterhaftes Antlitz (15)",
    value: "ghostlyVisage15",
    nwscriptValue: "IP_CONST_CASTSPELL_GHOSTLY_VISAGE_15",

    description: "Der Magieanwender wird von einem geisterhaften Licht umhüllt. Dieses gewährt ihm Schadensreduzierung 5/+1, schützt ihn vor allen Zaubern des maximal 1. Grades und verleiht ihm 10% Tarnung.",
  },
  {
    label: "Geisterhaftes Antlitz (3)",
    value: "ghostlyVisage3",
    nwscriptValue: "IP_CONST_CASTSPELL_GHOSTLY_VISAGE_3",

    description: "Der Magieanwender wird von einem geisterhaften Licht umhüllt. Dieses gewährt ihm Schadensreduzierung 5/+1, schützt ihn vor allen Zaubern des maximal 1. Grades und verleiht ihm 10% Tarnung.",
  },
  {
    label: "Geisterhaftes Antlitz (9)",
    value: "ghostlyVisage9",
    nwscriptValue: "IP_CONST_CASTSPELL_GHOSTLY_VISAGE_9",

    description: "Der Magieanwender wird von einem geisterhaften Licht umhüllt. Dieses gewährt ihm Schadensreduzierung 5/+1, schützt ihn vor allen Zaubern des maximal 1. Grades und verleiht ihm 10% Tarnung.",
  },
  {
    label: "Ghulhand (3)",
    value: "ghoulTouch3",
    nwscriptValue: "IP_CONST_CASTSPELL_GHOUL_TOUCH_3",

    description: "Die Hand des Magieanwenders wird von einem unirdischen Licht umspielt. Gelingt dem Magieanwender ein erfolgreicher Berührungsangriff, muss das Opfer einen Zähigkeitswurf ausführen. Scheitert das Opfer, ist es gelähmt. Kreaturen, die durch den Zauber gelähmt wurden, geben giftige Dämpfe ab, die alle feindlichen Kreaturen in 1,50 m Radius betreffen. Diese erleiden -2 auf Fertigkeits-, Rettungs-, Angriffs- und Schadenswürfe.",
  },
  {
    label: "Kugel der Unverwundbarkeit (11)",
    value: "globeOfInvulnerability11",
    nwscriptValue: "IP_CONST_CASTSPELL_GLOBE_OF_INVULNERABILITY_11",

    description: "Der Magieanwender wird von einem leuchtenden Energiefeld umhüllt, das ihn vor allen Zaubern des 4. oder eines niederen Grades schützt.",
  },
  {
    label: "Schmieren (2)",
    value: "grease2",
    nwscriptValue: "IP_CONST_CASTSPELL_GREASE_2",

    description: "Waberndes Öl und Schmiere füllen den Wirkungsbereich. Alle Kreaturen im Wirkungsbereich stürzen entweder zu Boden oder bewegen sich mit reduzierter Bewegungsrate.",
  },
  {
    label: "Mächtige Bärenstärke (11)",
    value: "greaterBullsStrength11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_BULLS_STRENGTH_11",

    description: "Gewährt einen Bonus 2W4 +1 auf das angeführte Attribut:\nMächtige Bärenstärke auf Stärke.\nMächtige Katzenhafte Anmut auf Geschicklichkeit.\nMächtige Adlerhafte Pracht auf Charisma.\nMächtige Ausdauer auf Konstitution.\nMächtige Verschlagenheit des Fuches auf Intelligenz.\nMächtige Weisheit der Eule auf Weisheit.",
  },
  {
    label: "Mächtige Katzenhafte Anmut (11)",
    value: "greaterCatsGrace11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_CATS_GRACE_11",

    description: "Gewährt einen Bonus 2W4 +1 auf das angeführte Attribut:\nMächtige Bärenstärke auf Stärke.\nMächtige Katzenhafte Anmut auf Geschicklichkeit.\nMächtige Adlerhafte Pracht auf Charisma.\nMächtige Ausdauer auf Konstitution.\nMächtige Verschlagenheit des Fuches auf Intelligenz.\nMächtige Weisheit der Eule auf Weisheit.",
  },
  {
    label: "Mächtige Magie bannen (15)",
    value: "greaterDispelling15",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_DISPELLING_15",

    description: "Wird der Zauber auf eine Kreatur gewirkt, versucht er alle magischen Effekte und Zauber, die auf der Kreatur liegen, aufzuheben. Man kann den Zauber auch als Zauber mit Flächenwirkung einsetzen. In diesem Fall versucht er, bei jedem Ziel im Wirkungsbereich den mächtigsten Zauber aufzuheben. Um einen Zauber aufzuheben, muss dem Magieanwender ein Bannwurf mit 1W20 + 1 pro Zauberstufe (bis zu +15) gegen SG 11 + Zauberstufe des Zaubers oder Effekts, der gebannt werden soll, gelingen.",
  },
  {
    label: "Mächtige Magie bannen (7)",
    value: "greaterDispelling7",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_DISPELLING_7",

    description: "Wird der Zauber auf eine Kreatur gewirkt, versucht er alle magischen Effekte und Zauber, die auf der Kreatur liegen, aufzuheben. Man kann den Zauber auch als Zauber mit Flächenwirkung einsetzen. In diesem Fall versucht er, bei jedem Ziel im Wirkungsbereich den mächtigsten Zauber aufzuheben. Um einen Zauber aufzuheben, muss dem Magieanwender ein Bannwurf mit 1W20 + 1 pro Zauberstufe (bis zu +15) gegen SG 11 + Zauberstufe des Zaubers oder Effekts, der gebannt werden soll, gelingen.",
  },
  {
    label: "Mächtige Adlerhafte Pracht (11)",
    value: "greaterEaglesSplendor11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_EAGLES_SPLENDOR_11",

    description: "Gewährt einen Bonus 2W4 +1 auf das angeführte Attribut:\nMächtige Bärenstärke auf Stärke.\nMächtige Katzenhafte Anmut auf Geschicklichkeit.\nMächtige Adlerhafte Pracht auf Charisma.\nMächtige Ausdauer auf Konstitution.\nMächtige Verschlagenheit des Fuches auf Intelligenz.\nMächtige Weisheit der Eule auf Weisheit.",
  },
  {
    label: "Mächtige Ausdauer (11)",
    value: "greaterEndurance11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_ENDURANCE_11",

    description: "Gewährt einen Bonus 2W4 +1 auf das angeführte Attribut:\nMächtige Bärenstärke auf Stärke.\nMächtige Katzenhafte Anmut auf Geschicklichkeit.\nMächtige Adlerhafte Pracht auf Charisma.\nMächtige Ausdauer auf Konstitution.\nMächtige Verschlagenheit des Fuches auf Intelligenz.\nMächtige Weisheit der Eule auf Weisheit.",
  },
  {
    label: "Mächtige Verschlagenheit des Fuchses (11)",
    value: "greaterFoxsCunning11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_FOXS_CUNNING_11",

    description: "Gewährt einen Bonus 2W4 +1 auf das angeführte Attribut:\nMächtige Bärenstärke auf Stärke.\nMächtige Katzenhafte Anmut auf Geschicklichkeit.\nMächtige Adlerhafte Pracht auf Charisma.\nMächtige Ausdauer auf Konstitution.\nMächtige Verschlagenheit des Fuches auf Intelligenz.\nMächtige Weisheit der Eule auf Weisheit.",
  },
  {
    label: "Mächtige Magische Fänge (9)",
    value: "greaterMagicFang9",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_MAGIC_FANG_9",

    description: "Der Zaubers stärkt den Tiergefährten des Magieanwenders und gibt ihm +1 auf Angriffs- und Schadenswürfe für je drei Zauberstufen (maximal +5). Zusätzlich erhält der Tiergefährte einen Verzauberungsbonus auf seine Angriffe, der dem Bonus auf Angriffs- und Schadenswürfe entspricht.",
  },
  {
    label: "Mächtige Weisheit der Eule (11)",
    value: "greaterOwlsWisdom11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_OWLS_WISDOM_11",

    description: "Gewährt einen Bonus 2W4 +1 auf das angeführte Attribut:\nMächtige Bärenstärke auf Stärke.\nMächtige Katzenhafte Anmut auf Geschicklichkeit.\nMächtige Adlerhafte Pracht auf Charisma.\nMächtige Ausdauer auf Konstitution.\nMächtige Verschlagenheit des Fuches auf Intelligenz.\nMächtige Weisheit der Eule auf Weisheit.",
  },
  {
    label: "Mächtiger Bindender Ruf (15)",
    value: "greaterPlanarBinding15",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_PLANAR_BINDING_15",

    description: "Den Zauber kann man entweder auf einen anwesenden Externar anwenden, der bei einem gescheiterten Willenswurf für 1 Runde je 2 Zauberstufen gelähmt ist, oder man kann den Zauber auf eine freie Stelle anwenden. In diesem Fall wird ein Verbündeter aus den Ebenen, abhängig von der Gesinnung des Anwenders, herbeigerufen:\nBöse: Vrock\nNeutral: Todesslaad\nGut: Celestischer Rächer",
  },
  {
    label: "Vollständige Genesung (13)",
    value: "greaterRestoration13",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_RESTORATION_13",

    description: "Vollständige Genesung hebt die meisten vorübergehenden und alle permanenten negativen Auswirkungen auf, unter denen das Ziel leidet. Darunter fällt auch Energieverlust. Der Zauber hebt keine Effekte auf, die den Geist beeinflussen oder die Bewegungsrate des Ziels reduzieren. Außerdem heilt Vollständige Genesung das Ziel auf volle Trefferpunkte.",
  },
  {
    label: "Höhere Schattenbeschwörung (9)",
    value: "greaterShadowConjuration9",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_SHADOW_CONJURATION_9",

    description: "Der Zauber gestattet es dem Magieanwender, aus Schatten einen der nachfolgenden Zauber zu formen: Schatten herbeizaubern, Melfs Säurepfeil, Geisterhaftes Antlitz, Spinnennetz oder Kleinere Kugel der Unverwundbarkeit.",
  },
  {
    label: "Mächtige Magische Bresche (11)",
    value: "greaterSpellBreach11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_SPELL_BREACH_11",

    description: "Der Zauber hebt bis zu vier Schutzzauber beim Ziel auf. Betroffen sind die Zauber: Schutzmantel, Kugel der Unverwundbarkeit, Steinhaut, Vorahnung, Schutz vor Elementen, Geisterhaftes und Ätherisches Antlitz, Magierrüstung, Schattenschild und Elementarschild. Des Weiteren wird die Zauberresistenz des Ziels für zehn Runden um 5 gesenkt.",
  },
  {
    label: "Mächtiger Schutzmantel (17)",
    value: "greaterSpellMantle17",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_SPELL_MANTLE_17",

    description: "Der Zauber erschafft eine Barriere rund um den Magieanwender, die alle Zauber abhält. Die Barriere hält bis zu 1W12+10 Zaubergrade ab, bevor sie in sich zusammenbricht.",
  },
  {
    label: "Mächtige Steinhaut (11)",
    value: "greaterStoneskin11",
    nwscriptValue: "IP_CONST_CASTSPELL_GREATER_STONESKIN_11",

    description: "Der Magieanwender erhält Schadensreduzierung 20/+5. Sobald der Zauber 10 SP je Zauberstufe (maximal 150) abgehalten hat, endet seine Wirkung.",
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

    description: "Der Zauber erzeugt einen Windstoß, der Kreaturen, die bei ihrem Rettungswurf versagen, niederwirft. Alle flächendeckenden, wolkenartigen Zauber im Wirkungsbereich, z. B. eine Todeswolke, werden zerstreut.",
  },
  {
    label: "Hammer der Götter (12)",
    value: "hammerOfTheGods12",
    nwscriptValue: "IP_CONST_CASTSPELL_HAMMER_OF_THE_GODS_12",

    description: "Der Magieanwender ruft göttliches Licht vom Himmel herab. Alle Feinde im Wirkungsbereich erleiden 1W8 SP für je 2 Zauberstufen durch göttliche Energie. Der Maximalschaden beträgt 5W8 SP. Feinde, die einen erfolgreichen Willenswurf ausführen, nehmen nur den halben Schaden und vermeiden, für 1W6 Runden benommen zu sein.",
  },
  {
    label: "Hammer der Götter (7)",
    value: "hammerOfTheGods7",
    nwscriptValue: "IP_CONST_CASTSPELL_HAMMER_OF_THE_GODS_7",

    description: "Der Magieanwender ruft göttliches Licht vom Himmel herab. Alle Feinde im Wirkungsbereich erleiden 1W8 SP für je 2 Zauberstufen durch göttliche Energie. Der Maximalschaden beträgt 5W8 SP. Feinde, die einen erfolgreichen Willenswurf ausführen, nehmen nur den halben Schaden und vermeiden, für 1W6 Runden benommen zu sein.",
  },
  {
    label: "Leid (11)",
    value: "harm11",
    nwscriptValue: "IP_CONST_CASTSPELL_HARM_11",

    description: "Wenn dem Magieanwender ein erfolgreicher Berührungsangriff im Nahkampf gelingt, werden die Trefferpunkte des Ziels durch negative Energie auf 1W4 TP reduziert. Bei Untoten hat Leid genau die gegenteiligen Auswirkungen. Der Zauber heilt sie vollständig, statt ihnen Schaden zuzufügen.",
  },
  {
    label: "Hast (10)",
    value: "haste10",
    nwscriptValue: "IP_CONST_CASTSPELL_HASTE_10",

    description: "Das Ziel erhält einen Ausweichbonus +4 auf die Rüstungsklasse. Es erhält überdies eine zusätzliche Aktion pro Runde; dadurch kann es beispielsweise einmal mehr pro Runde angreifen oder einen zusätzlichen Zauber wirken. Außerdem wird die Bewegungsrate des Ziels um 50% erhöht.",
  },
  {
    label: "Hast (5)",
    value: "haste5",
    nwscriptValue: "IP_CONST_CASTSPELL_HASTE_5",

    description: "Das Ziel erhält einen Ausweichbonus +4 auf die Rüstungsklasse. Es erhält überdies eine zusätzliche Aktion pro Runde; dadurch kann es beispielsweise einmal mehr pro Runde angreifen oder einen zusätzlichen Zauber wirken. Außerdem wird die Bewegungsrate des Ziels um 50% erhöht.",
  },
  {
    label: "Kreis der Heilung (16)",
    value: "healingCircle16",
    nwscriptValue: "IP_CONST_CASTSPELL_HEALING_CIRCLE_16",

    description: "Alle freundlichen Kreaturen im Wirkungsbereich werden um 1W8 Trefferpunkte +1 Trefferpunkt pro Zauberstufe geheilt (höchstens +20). Auf Untote hat der Zauber genau den gegenteiligen Effekt: Sie erleiden Schaden.",
  },
  {
    label: "Kreis der Heilung (9)",
    value: "healingCircle9",
    nwscriptValue: "IP_CONST_CASTSPELL_HEALING_CIRCLE_9",

    description: "Alle freundlichen Kreaturen im Wirkungsbereich werden um 1W8 Trefferpunkte +1 Trefferpunkt pro Zauberstufe geheilt (höchstens +20). Auf Untote hat der Zauber genau den gegenteiligen Effekt: Sie erleiden Schaden.",
  },
  {
    label: "Heilung (11)",
    value: "heal11",
    nwscriptValue: "IP_CONST_CASTSPELL_HEAL_11",

    description: "Das Ziel wird auf volle Trefferpunkte geheilt. Bei Untoten hat Heilung genau den gegenteiligen Effekt. Um den Zauber auf einen Untoten anzuwenden, ist ein erfolgreicher Berührungsangriff im Nahkampf erforderlich. Bei einem Treffer werden die Trefferpunkte des Untoten auf 1W4 reduziert.",
  },
  {
    label: "Tier festhalten (3)",
    value: "holdAnimal3",
    nwscriptValue: "IP_CONST_CASTSPELL_HOLD_ANIMAL_3",

    description: "Das Ziel, bei dem es sich um ein Tier handeln muss, wird für die Wirkungsdauer des Zaubers gelähmt.",
  },
  {
    label: "Monster festhalten (7)",
    value: "holdMonster7",
    nwscriptValue: "IP_CONST_CASTSPELL_HOLD_MONSTER_7",

    description: "Das Ziel wird für die Wirkungsdauer des Zaubers gelähmt.",
  },
  {
    label: "Person festhalten (3)",
    value: "holdPerson3",
    nwscriptValue: "IP_CONST_CASTSPELL_HOLD_PERSON_3",

    description: "Das Ziel, bei dem es sich um ein humanoides Wesen handeln muss, wird für die Wirkungsdauer des Zaubers gelähmt.",
  },
  {
    label: "Verdorren (15)",
    value: "horridWilting15",
    nwscriptValue: "IP_CONST_CASTSPELL_HORRID_WILTING_15",

    description: "Alle feindlichen Kreaturen im Wirkungsbereich erleiden durch Verdorrung 1W8 SP je Zauberstufe, mit einem Maximum von 25W8 SP.",
  },
  {
    label: "Verdorren (20)",
    value: "horridWilting20",
    nwscriptValue: "IP_CONST_CASTSPELL_HORRID_WILTING_20",

    description: "Alle feindlichen Kreaturen im Wirkungsbereich erleiden durch Verdorrung 1W8 SP je Zauberstufe, mit einem Maximum von 25W8 SP.",
  },
  {
    label: "Eissturm (9)",
    value: "iceStorm9",
    nwscriptValue: "IP_CONST_CASTSPELL_ICE_STORM_9",

    description: "Alle Kreaturen im Wirkungsbereich erleiden 3W6 SP, wie durch Wuchtwaffen, und 2W6 Punkte Kälteschaden. Eissturm verursacht außerdem 1W6 weiteren Kälteschaden für je 3 Zauberstufen des Magieanwenders.",
  },
  {
    label: "Identifizieren (3)",
    value: "identify3",
    nwscriptValue: "IP_CONST_CASTSPELL_IDENTIFY_3",

    description: "Während der nächsten zwei Runden erhält der Magieanwender +10 und +1 pro Zauberstufe auf Würfe für die Fertigkeit Sagenkunde.",
  },
  {
    label: "Implosion (17)",
    value: "implosion17",
    nwscriptValue: "IP_CONST_CASTSPELL_IMPLOSION_17",

    description: "Im Wirkungsbereich entsteht ein Vortex der Zerstörung, der alle lebende Ziele, die bei ihrem Zähigkeitswurf scheitern, auseinanderreißt und sie so tötet.",
  },
  {
    label: "Erweiterte Unsichtbarkeit (7)",
    value: "improvedInvisibility7",
    nwscriptValue: "IP_CONST_CASTSPELL_IMPROVED_INVISIBILITY_7",

    description: "Die Kreatur wird völlig unsichtbar und kann durch normale Sicht nicht aufgespürt werden. Wenn die Kreatur angreift oder Zauber wirkt, wird sie teilweise sichtbar und ihr Standort kann von Feinden erkannt werden. Sie hat aber dennoch 50% Deckung.",
  },
  {
    label: "Flammende Wolke (15)",
    value: "incendiaryCloud15",
    nwscriptValue: "IP_CONST_CASTSPELL_INCENDIARY_CLOUD_15",

    description: "Der Magieanwender erschafft eine Wolke aus Rauch und Glut, die bei allen Kreaturen im Wirkungsbereich 4W6 Punkte Feuerschaden je Runde anrichtet.",
  },
  {
    label: "Inferno (15)",
    value: "inferno15",
    nwscriptValue: "IP_CONST_CASTSPELL_INFERNO_15",

    description: "Das Ziel beginnt zu brennen und erleidet in jeder Runde 2W6 Punkte Feuerschaden.",
  },
  {
    label: "Kritische Wunden verursachen (12)",
    value: "inflictCriticalWounds12",
    nwscriptValue: "IP_CONST_CASTSPELL_INFLICT_CRITICAL_WOUNDS_12",

    description: "Wenn dem Magieanwender ein Berührungsangriff gegen sein Opfer gelingt, erleidet es 4W8 SP + 1 SP je Zauberstufe (maximal 4W8 + 20). Auf Untote haben Zauber dieser Art die gegenteilige Wirkung. Sie heilen sie um die entsprechende Menge an Trefferpunkten, statt ihnen Schaden zuzufügen.",
  },
  {
    label: "Leichte Wunden verursachen (5)",
    value: "inflictLightWounds5",
    nwscriptValue: "IP_CONST_CASTSPELL_INFLICT_LIGHT_WOUNDS_5",

    description: "Wenn dem Magieanwender ein Berührungsangriff gegen sein Opfer gelingt, erleidet es 1W8 SP + 1 SP je Zauberstufe (maximal 1W8 + 5). Auf Untote haben Zauber dieser Art die gegenteilige Wirkung. Sie heilen sie um die entsprechende Menge an Trefferpunkten, statt ihnen Schaden zuzufügen.",
  },
  {
    label: "Kleinere Wunde verursachen (1)",
    value: "inflictMinorWounds1",
    nwscriptValue: "IP_CONST_CASTSPELL_INFLICT_MINOR_WOUNDS_1",

    description: "Wenn dem Magieanwender ein Berührungsangriff gegen sein Opfer gelingt, erleidet es 1 Schadenspunkt. Auf Untote haben Zauber dieser Art die gegenteilige Wirkung. Sie heilen sie um die entsprechende Menge an Trefferpunkten, statt ihnen Schaden zuzufügen.",
  },
  {
    label: "Mittelschwere Wunden verursachen (7)",
    value: "inflictModerateWounds7",
    nwscriptValue: "IP_CONST_CASTSPELL_INFLICT_MODERATE_WOUNDS_7",

    description: "Wenn dem Magieanwender ein Berührungsangriff gegen sein Opfer gelingt, erleidet es 2W8 SP + 1 SP je Zauberstufe (maximal 2W8 + 10). Auf Untote haben Zauber dieser Art die gegenteilige Wirkung. Sie heilen sie um die entsprechende Menge an Trefferpunkten, statt ihnen Schaden zuzufügen.",
  },
  {
    label: "Schwere Wunden verursachen (9)",
    value: "inflictSeriousWounds9",
    nwscriptValue: "IP_CONST_CASTSPELL_INFLICT_SERIOUS_WOUNDS_9",

    description: "Wenn dem Magieanwender ein Berührungsangriff gegen sein Opfer gelingt, erleidet es 3W8 SP + 1 SP je Zauberstufe (maximal 3W8 + 15). Auf Untote haben Zauber dieser Art die gegenteilige Wirkung. Sie heilen sie um die entsprechende Menge an Trefferpunkten, statt ihnen Schaden zuzufügen.",
  },
  {
    label: "Unsichtbarkeit (3)",
    value: "invisibility3",
    nwscriptValue: "IP_CONST_CASTSPELL_INVISIBILITY_3",

    description: "Die Kreatur wird völlig unsichtbar und kann durch normale Sicht nicht aufgespürt werden. Wenn die Kreatur angreift oder einen Zauber wirkt, wird die Unsichtbarkeit sofort aufgehoben.",
  },
  {
    label: "Unsichtbarkeit aufheben (5)",
    value: "invisibilityPurge5",
    nwscriptValue: "IP_CONST_CASTSPELL_INVISIBILITY_PURGE_5",

    description: "Der Zauber macht alle unsichtbaren Kreaturen und Gegenstände im Wirkungsbereich sichtbar.",
  },
  {
    label: "Sphäre der Unsichtbarkeit (5)",
    value: "invisibilitySphere5",
    nwscriptValue: "IP_CONST_CASTSPELL_INVISIBILITY_SPHERE_5",

    description: "Der Magieanwender erschafft um sich herum eine bewegliche Zone der Unsichtbarkeit. Alle Verbündeten innerhalb des Wirkungsbereichs werden Feinden gegenüber unsichtbar, können sich jedoch noch immer gegenseitig sehen. Verlässt jemand den Wirkungsbereich, wird er augenblicklich sichtbar.",
  },
  {
    label: "Issacs Mächtiger Geschosshagel (15)",
    value: "isaacsGreaterMissileStorm15",
    nwscriptValue: "IP_CONST_CASTSPELL_ISAACS_GREATER_MISSILE_STORM_15",

    description: "Eine bestimmte Anzahl an Energiegeschossen erscheint (eines pro Zauberstufe, maximal 20 Stück) und diese treffen willkürlich ausgewählte Feinde im Wirkungsbereich. Wenn mehr Kreaturen als Geschosse vorhanden sind, nehmen nur die nächststehenden Kreaturen Schaden. Gibt es mehr Geschosse als Kreaturen, wird eine Kreatur von mehreren Geschossen getroffen. Jedes Geschoss richtet 2W6 SP an.",
  },
  {
    label: "Issacs Schwacher Geschosshagel (13)",
    value: "isaacsLesserMissileStorm13",
    nwscriptValue: "IP_CONST_CASTSPELL_ISAACS_LESSER_MISSILE_STORM_13",

    description: "Je Zauberstufe taucht ein magisches Geschoss auf (maximal 10 Stück) und schlägt bei einem zufällig ausgewählten Feind im Wirkungsbereich ein. Wenn mehr Kreaturen als Geschosse anwesend sind, werden nur die nächststehenden Kreaturen betroffen. Gibt es mehr Geschosse als Kreaturen, wird eine Kreatur von mehreren Geschossen getroffen. Jedes Geschoss richtet 1W6 SP an.",
  },
  {
    label: "Klopfen (3)",
    value: "knock3",
    nwscriptValue: "IP_CONST_CASTSPELL_KNOCK_3",

    description: "Der Zauber entriegelt Türen und Behälter im Umkreis von 45 m um den Magieanwender. Außergewöhnlich komplexe Schlösser oder magisch versiegelte Türen und Behälter können durch diesen einfachen Zauber nicht geöffnet werden.",
  },
  {
    label: "Sagenkunde (5)",
    value: "legendLore5",
    nwscriptValue: "IP_CONST_CASTSPELL_LEGEND_LORE_5",

    description: "Der Magieanwender erhält +10 und +1 für je zwei Zauberstufen auf alle Fertigkeitswürfe für Sagenkunde.",
  },
  {
    label: "Schwache Magie bannen (3)",
    value: "lesserDispel3",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_DISPEL_3",

    description: "Wird der Zauber auf eine Kreatur gewirkt, versucht er alle magischen Effekte und Zauber, die auf der Kreatur liegen, aufzuheben. Man kann den Zauber auch als Zauber mit Flächenwirkung einsetzen. In diesem Fall versucht er, bei jedem Ziel im Wirkungsbereich den mächtigsten Zauber aufzuheben. Um einen Zauber aufzuheben, muss dem Magieanwender ein Bannwurf mit 1W20 +1 pro Zauberstufe (bis zu +5) gegen SG 11 + Zauberstufe des Zaubers oder Effekts, der gebannt werden soll, gelingen.",
  },
  {
    label: "Schwache Magie bannen (5)",
    value: "lesserDispel5",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_DISPEL_5",

    description: "Wird der Zauber auf eine Kreatur gewirkt, versucht er alle magischen Effekte und Zauber, die auf der Kreatur liegen, aufzuheben. Man kann den Zauber auch als Zauber mit Flächenwirkung einsetzen. In diesem Fall versucht er, bei jedem Ziel im Wirkungsbereich den mächtigsten Zauber aufzuheben. Um einen Zauber aufzuheben, muss dem Magieanwender ein Bannwurf mit 1W20 +1 pro Zauberstufe (bis zu +5) gegen SG 11 + Zauberstufe des Zaubers oder Effekts, der gebannt werden soll, gelingen.",
  },
  {
    label: "Schwache Gedankenleere (9)",
    value: "lesserMindBlank9",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_MIND_BLANK_9",

    description: "Der Zauber macht das Ziel gegen alle Zauber und zauberähnlichen Effekte, die den Geist beeinflussen, immun und hebt alle negativen Auswirkungen derartiger Zauber auf.",
  },
  {
    label: "Schwacher Bindender Ruf (9)",
    value: "lesserPlanarBinding9",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_PLANAR_BINDING_9",

    description: "Den Zauber kann man entweder auf einen anwesenden Externar anwenden, der bei einem gescheiterten Willenswurf für 1 Runde je 2 Zauberstufen gelähmt ist, oder man kann den Zauber auf eine freie Stelle anwenden. In diesem Fall wird ein Verbündeter aus den Ebenen, abhängig von der Gesinnung des Anwenders, herbeigerufen:\nBöse: Imp\nNeutral: Roter Slaad\nGut: Leuchtender Archon",
  },
  {
    label: "Teilweise Genesung (3)",
    value: "lesserRestoration3",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_RESTORATION_3",

    description: "Der Zauber hebt alle zauberähnlichen, außergewöhnlichen und übernatürlichen Effekte auf, die dem Ziel einen Malus auf Attribute, RK, Angriffs- oder Schadenswürfe, Zauberresistenz oder Rettungswürfe geben. Er hat keinerlei Auswirkung auf Krankheiten oder einen Fluch.",
  },
  {
    label: "Schwache Magische Bresche (7)",
    value: "lesserSpellBreach7",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_SPELL_BREACH_7",

    description: "Der Zauber hebt bis zu zwei Schutzzauber beim Ziel auf. Betroffen sind auch die Zauber: Schutzmantel, Kugel der Unverwundbarkeit, Steinhaut, Vorahnung, Schutz vor Elementen, Geisterhaftes und Ätherisches Antlitz, Magierrüstung, Schattenschild und Elementarschild. Des Weiteren wird die Zauberresistenz des Ziels für 10 Runden um 3 reduziert.",
  },
  {
    label: "Schwacher Schutzmantel (9)",
    value: "lesserSpellMantle9",
    nwscriptValue: "IP_CONST_CASTSPELL_LESSER_SPELL_MANTLE_9",

    description: "Der Zauber erschafft eine Barriere rund um den Magieanwender, die alle Zauber und zauberähnlichen Effekte abhält. Die Barriere hält bis zu 1W4+6 Zaubergrade ab, bevor sie in sich zusammenbricht.",
  },
  {
    label: "Blitz (10)",
    value: "lightningBolt10",
    nwscriptValue: "IP_CONST_CASTSPELL_LIGHTNING_BOLT_10",

    description: "Aus den Fingerspitzen des Magiers schießt ein Blitz und trifft alle Kreaturen, die sich in einer geraden Linie vor dem Magieanwender befinden. Alle im Wirkungsbereich erleiden 1W6 Punkte Elektrizitätsschaden je Zauberstufe mit einem Maximum von 10W6 SP.",
  },
  {
    label: "Blitz (5)",
    value: "lightningBolt5",
    nwscriptValue: "IP_CONST_CASTSPELL_LIGHTNING_BOLT_5",

    description: "Aus den Fingerspitzen des Magiers schießt ein Blitz und trifft alle Kreaturen, die sich in einer geraden Linie vor dem Magieanwender befinden. Alle im Wirkungsbereich erleiden 1W6 Punkte Elektrizitätsschaden je Zauberstufe mit einem Maximum von 10W6 SP.",
  },
  {
    label: "Licht (1)",
    value: "light1",
    nwscriptValue: "IP_CONST_CASTSPELL_LIGHT_1",

    description: "Handelt es sich beim Ziel des Zaubers um eine Kreatur, erschafft er eine kleine Lichtquelle über deren Kopf. Das Licht bewegt sich mit der Kreatur und kann ein kleines Gebiet erhellen. Der Zauber kann auch auf einen Gegenstand gewirkt werden, mit dem sich der Charakter ausrüsten kann. Solange die Wirkung des Zaubers anhält, dient dieser Gegenstand dann als natürliche Lichtquelle.",
  },
  {
    label: "Licht (5)",
    value: "light5",
    nwscriptValue: "IP_CONST_CASTSPELL_LIGHT_5",

    description: "Handelt es sich beim Ziel des Zaubers um eine Kreatur, erschafft er eine kleine Lichtquelle über deren Kopf. Das Licht bewegt sich mit der Kreatur und kann ein kleines Gebiet erhellen. Der Zauber kann auch auf einen Gegenstand gewirkt werden, mit dem sich der Charakter ausrüsten kann. Solange die Wirkung des Zaubers anhält, dient dieser Gegenstand dann als natürliche Lichtquelle.",
  },
  {
    label: "Magierrüstung (2)",
    value: "mageArmor2",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGE_ARMOR_2",

    description: "Das Ziel erhält folgende Boni auf sein RK: Natürliche Rüstung +1, Ausweichen +1, Ablenkung +1 und Verbesserung +1. Der Ausweichbonus ist mit anderen Ausweichboni kumulativ, aber die anderen Boni sind mit Boni des gleichen Typs nicht kumulativ.",
  },
  {
    label: "Schutzkreis gegen Gesinnung (5)",
    value: "magicCircleAgainstAlignment5",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGIC_CIRCLE_AGAINST_ALIGNMENT_5",

    description: "Der Magieanwender muss wählen, ob das Ziel vor Gutem oder Bösem geschützt sein soll. Gegen Kreaturen mit der gewählten Gesinnung erhält das Ziel und alle Verbündeten in 3 m Radius einen Ablenkungsbonus +2 auf die RK, +2 auf alle Rettungswürfe und Immunität gegen Zauber und zauberähnliche Effekte der Kategorie Geistesbeeinflussung.",
  },
  {
    label: "Magische Fänge (5)",
    value: "magicFang5",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGIC_FANG_5",

    description: "Der Zauber stärkt den Tiergefährten des Zaubernden. Dieser erhält +1 auf Angriffs- und Schadenswürfe. Außerdem erhält er die Fähigkeit, wie eine magische Waffe +1 zu treffen (so dass er Monster verletzen kann, die über Schadensreduzierung verfügen).",
  },
  {
    label: "Magisches Geschoss (3)",
    value: "magicMissile3",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGIC_MISSILE_3",

    description: "Der Magieanwender erzeugt ein magisches Geschoss aus reiner Energie, welches das gewählte Ziel automatisch trifft und 1W4+1 Schadenspunkte verursacht. Der Zauber erzeugt auf der 1. Stufe ein Magisches Geschoss und je 2 zusätzliche Zauberstufen ein weiteres Magisches Geschoss, bis zu maximal fünf Magischen Geschossen auf der 9. Stufe.",
  },
  {
    label: "Magisches Geschoss (5)",
    value: "magicMissile5",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGIC_MISSILE_5",

    description: "Der Magieanwender erzeugt ein magisches Geschoss aus reiner Energie, welches das gewählte Ziel automatisch trifft und 1W4+1 Schadenspunkte verursacht. Der Zauber erzeugt auf der 1. Stufe ein Magisches Geschoss und je 2 zusätzliche Zauberstufen ein weiteres Magisches Geschoss, bis zu maximal fünf Magischen Geschossen auf der 9. Stufe.",
  },
  {
    label: "Magisches Geschoss (9)",
    value: "magicMissile9",
    nwscriptValue: "IP_CONST_CASTSPELL_MAGIC_MISSILE_9",

    description: "Der Magieanwender erzeugt ein magisches Geschoss aus reiner Energie, welches das gewählte Ziel automatisch trifft und 1W4+1 Schadenspunkte verursacht. Der Zauber erzeugt auf der 1. Stufe ein Magisches Geschoss und je 2 zusätzliche Zauberstufen ein weiteres Magisches Geschoss, bis zu maximal fünf Magischen Geschossen auf der 9. Stufe.",
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

    description: "Alle Feinde in einem Radius von 3 m werden blind und taub.",
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

    description: "Der Ruf des Magieanwenders verbessert sich für alle nicht verbündeten Kreaturen im Wirkungsbereich um 50%. Der Zauberwirkende kann eine Anzahl von Kreaturen in der Höhe des maximal Doppelten seiner eigenen Trefferpunkte bezaubern.",
  },
  {
    label: "Massenhast (11)",
    value: "massHaste11",
    nwscriptValue: "IP_CONST_CASTSPELL_MASS_HASTE_11",

    description: "Alle Verbündeten im Wirkungsbereich können eine zusätzliche Aktion je Runde ausführen (beispielsweise einen weiteren Angriff starten oder einen Zauber wirken). Außerdem erhöht sich ihre Bewegungsrate um 50%.",
  },
  {
    label: "Massenheilung (15)",
    value: "massHeal15",
    nwscriptValue: "IP_CONST_CASTSPELL_MASS_HEAL_15",

    description: "Alle Verbündeten im Wirkungsbereich erhalten alle verlorenen Trefferpunkte zurück. Auf Untote haben heilende Zauber eine umgekehrte Wirkung, d. h. sie erleiden durch Heilzauber Schaden. Alle Untoten im Wirkungsbereich dieses Zaubers werden auf 1W4 Trefferpunkte reduziert.",
  },
  {
    label: "Melfs Säurepfeil (3)",
    value: "melfsAcidArrow3",
    nwscriptValue: "IP_CONST_CASTSPELL_MELFS_ACID_ARROW_3",

    description: "Der Magieanwender erzeugt ein magisches Geschoss aus Säure, das auf eine Kreatur zufliegt. Der Zauber richtet zuerst 3W6 SP an und dann bis zum Ende der Wirkungsdauer 1W6 SP je Runde.",
  },
  {
    label: "Melfs Säurepfeil (6)",
    value: "melfsAcidArrow6",
    nwscriptValue: "IP_CONST_CASTSPELL_MELFS_ACID_ARROW_6",

    description: "Der Magieanwender erzeugt ein magisches Geschoss aus Säure, das auf eine Kreatur zufliegt. Der Zauber richtet zuerst 3W6 SP an und dann bis zum Ende der Wirkungsdauer 1W6 SP je Runde.",
  },
  {
    label: "Melfs Säurepfeil (9)",
    value: "melfsAcidArrow9",
    nwscriptValue: "IP_CONST_CASTSPELL_MELFS_ACID_ARROW_9",

    description: "Der Magieanwender erzeugt ein magisches Geschoss aus Säure, das auf eine Kreatur zufliegt. Der Zauber richtet zuerst 3W6 SP an und dann bis zum Ende der Wirkungsdauer 1W6 SP je Runde.",
  },
  {
    label: "Meteoritenschwarm (17)",
    value: "meteorSwarm17",
    nwscriptValue: "IP_CONST_CASTSPELL_METEOR_SWARM_17",

    description: "Im Wirkungsbereich schlagen tödliche Meteore auf, die in Feuerbällen explodieren. Alle Kreaturen im Wirkungsbereich erleiden 20W6 SP. Kreaturen in einer Entfernung von maximal 1,50 m vom Magieanwender erleiden keinen Schaden.",
  },
  {
    label: "Gedankenleere (15)",
    value: "mindBlank15",
    nwscriptValue: "IP_CONST_CASTSPELL_MIND_BLANK_15",

    description: "Alle Verbündeten im Wirkungsbereich werden gegen die Auswirkungen von Zaubern und Effekten, die den Geist beeinflussen, immun. Außerdem hebt der Zauber die negativen Auswirkungen aller derartiger Zauber und Effekte auf, von denen die Ziele betroffen sind.",
  },
  {
    label: "Gedankennebel (9)",
    value: "mindFog9",
    nwscriptValue: "IP_CONST_CASTSPELL_MIND_FOG_9",

    description: "Der Zauber erschafft eine bläulich schimmernde Nebelbank. Der Nebel stiehlt allen, die sich in seinem Wirkungsbereich aufhalten oder ihn betreten, die Willenskraft. Die Opfer erleiden -10 auf alle Willenswürfe gegen Zauber und Effekte, die den Geist beeinflussen. Der Malus besteht so lange, wie sich die Opfer im Nebel aufhalten. Sobald sie den Wirkungsbereich des Nebels verlassen, verfliegt der Malus innerhalb von 2W6 Runden.",
  },
  {
    label: "Kleinere Kugel der Unverwundbarkeit (15)",
    value: "minorGlobeOfInvulnerability15",
    nwscriptValue: "IP_CONST_CASTSPELL_MINOR_GLOBE_OF_INVULNERABILITY_15",

    description: "Der Magieanwender wird von einem schillernden Energiefeld umhüllt, das ihn vor allen Zaubern des 3. oder eines niedrigeren Grades schützt.",
  },
  {
    label: "Kleinere Kugel der Unverwundbarkeit (7)",
    value: "minorGlobeOfInvulnerability7",
    nwscriptValue: "IP_CONST_CASTSPELL_MINOR_GLOBE_OF_INVULNERABILITY_7",

    description: "Der Magieanwender wird von einem schillernden Energiefeld umhüllt, das ihn vor allen Zaubern des 3. oder eines niedrigeren Grades schützt.",
  },
  {
    label: "Mordenkainens Auftrennung (17)",
    value: "mordenkainensDisjunction17",
    nwscriptValue: "IP_CONST_CASTSPELL_MORDENKAINENS_DISJUNCTION_17",

    description: "Wird Mordenkainens Auftrennung auf eine Kreatur gewirkt, versucht er, alle magischen Effekte und Zauber, die auf der Kreatur liegen, aufzuheben. Man kann den Zauber auch als Zauber mit Flächenwirkung einsetzen. In diesem Fall versucht er, bei jedem Ziel im Wirkungsbereich die zwei mächtigsten Zauber aufzuheben. Um einen Zauber aufzuheben, muss dem Magieanwender ein Bannwurf mit 1W20 +1 pro Zauberstufe (bis zu +40) gegen SG 11 + Zauberstufe des Zaubers oder Effekts, der gebannt werden soll, gelingen. Außerdem hebt der Zauber bei einem gegnerischen Magieanwender bis zu 6 Schutzzauber auf oder bei einer ganzen Gruppe von gegnerischen Magieanwendern jeweils 2 Schutzzauber. Des Weiteren senkt der Zauber die Zauberresistenz aller Kreaturen im Wirkungsbereich um 10.\n\nDie betroffenen Zauber sind unter anderen: Schutzmantel, Kugel der Unverwundbarkeit, Steinhaut, Vorahnung, Schutz vor Elementen, Geisterhaftes und Ätherisches Antlitz, Magierrüstung, Schattenschild und Elementarschild.",
  },
  {
    label: "Mordenkainens Schwert (13)",
    value: "mordenkainensSword13",
    nwscriptValue: "IP_CONST_CASTSPELL_MORDENKAINENS_SWORD_13",

    description: "Der Zauber beschwört einen mächtigen, mit einem Schwert bewaffneten Helmschrecken, der dem Magieanwender treu dient.",
  },
  {
    label: "Mordenkainens Schwert (18)",
    value: "mordenkainensSword18",
    nwscriptValue: "IP_CONST_CASTSPELL_MORDENKAINENS_SWORD_18",

    description: "Der Zauber beschwört einen mächtigen, mit einem Schwert bewaffneten Helmschrecken, der dem Magieanwender treu dient.",
  },
  {
    label: "Gleichgewicht der Natur (15)",
    value: "naturesBalance15",
    nwscriptValue: "IP_CONST_CASTSPELL_NATURES_BALANCE_15",

    description: "Alle Feinde im Wirkungsbereich verlieren für je 5 Zauberstufen 1W4 Punkte Zauberresistenz. Alle Verbündeten im Wirkungsbereich werden um 3W8 Trefferpunkte + 1 Trefferpunkt je Zauberstufe geheilt.",
  },
  {
    label: "Negativer Energieschlag (10)",
    value: "negativeEnergyBurst10",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_BURST_10",

    description: "Alle Kreaturen im Wirkungsbereich erleiden 1W8 SP durch negative Energie, +1 SP pro Zauberstufe (bis maximal 1W8 +20). Des Weiteren verlieren alle Kreaturen im Wirkungsbereich 1 Stärkepunkt für je 4 Zauberstufen des Magieanwenders. Auf Untote hat dieser Zauber den entgegengesetzten Effekt. Sie werden geheilt.",
  },
  {
    label: "Negativer Energieschlag (5)",
    value: "negativeEnergyBurst5",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_BURST_5",

    description: "Alle Kreaturen im Wirkungsbereich erleiden 1W8 SP durch negative Energie, +1 SP pro Zauberstufe (bis maximal 1W8 +20). Des Weiteren verlieren alle Kreaturen im Wirkungsbereich 1 Stärkepunkt für je 4 Zauberstufen des Magieanwenders. Auf Untote hat dieser Zauber den entgegengesetzten Effekt. Sie werden geheilt.",
  },
  {
    label: "Schutz vor Negativer Energie (10)",
    value: "negativeEnergyProtection10",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_PROTECTION_10",

    description: "Die berührte Kreatur wird gegen alle Angriffe durch negative Energie geschützt. Darunter fallen auch übernatürliche Angriffe, die Energie- und Attributsverlust verursachen.",
  },
  {
    label: "Schutz vor Negativer Energie (15)",
    value: "negativeEnergyProtection15",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_PROTECTION_15",

    description: "Die berührte Kreatur wird gegen alle Angriffe durch negative Energie geschützt. Darunter fallen auch übernatürliche Angriffe, die Energie- und Attributsverlust verursachen.",
  },
  {
    label: "Schutz vor Negativer Energie (5)",
    value: "negativeEnergyProtection5",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_PROTECTION_5",

    description: "Die berührte Kreatur wird gegen alle Angriffe durch negative Energie geschützt. Darunter fallen auch übernatürliche Angriffe, die Energie- und Attributsverlust verursachen.",
  },
  {
    label: "Negativer Energiestrahl (1)",
    value: "negativeEnergyRay1",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_RAY_1",

    description: "Negative Energie schlägt in das Ziel ein und verursacht 1W6 SP. Für je 2 Zauberstufen über der ersten richtet der Zauber zusätzliche 1W6 SP an, bis zu einem Maximum von 5W6 SP auf der 9. Stufe. Untote werden durch den Zauber geheilt.",
  },
  {
    label: "Negativer Energiestrahl (3)",
    value: "negativeEnergyRay3",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_RAY_3",

    description: "Negative Energie schlägt in das Ziel ein und verursacht 1W6 SP. Für je 2 Zauberstufen über der ersten richtet der Zauber zusätzliche 1W6 SP an, bis zu einem Maximum von 5W6 SP auf der 9. Stufe. Untote werden durch den Zauber geheilt.",
  },
  {
    label: "Negativer Energiestrahl (5)",
    value: "negativeEnergyRay5",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_RAY_5",

    description: "Negative Energie schlägt in das Ziel ein und verursacht 1W6 SP. Für je 2 Zauberstufen über der ersten richtet der Zauber zusätzliche 1W6 SP an, bis zu einem Maximum von 5W6 SP auf der 9. Stufe. Untote werden durch den Zauber geheilt.",
  },
  {
    label: "Negativer Energiestrahl (7)",
    value: "negativeEnergyRay7",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_RAY_7",

    description: "Negative Energie schlägt in das Ziel ein und verursacht 1W6 SP. Für je 2 Zauberstufen über der ersten richtet der Zauber zusätzliche 1W6 SP an, bis zu einem Maximum von 5W6 SP auf der 9. Stufe. Untote werden durch den Zauber geheilt.",
  },
  {
    label: "Negativer Energiestrahl (9)",
    value: "negativeEnergyRay9",
    nwscriptValue: "IP_CONST_CASTSPELL_NEGATIVE_ENERGY_RAY_9",

    description: "Negative Energie schlägt in das Ziel ein und verursacht 1W6 SP. Für je 2 Zauberstufen über der ersten richtet der Zauber zusätzliche 1W6 SP an, bis zu einem Maximum von 5W6 SP auf der 9. Stufe. Untote werden durch den Zauber geheilt.",
  },
  {
    label: "Gift neutralisieren (5)",
    value: "neutralizePoison5",
    nwscriptValue: "IP_CONST_CASTSPELL_NEUTRALIZE_POISON_5",

    description: "Das Ziel wird von allen Vergiftungen geheilt, unter denen es leidet.",
  },
  {
    label: "Eins mit dem Land (7)",
    value: "oneWithTheLand7",
    nwscriptValue: "IP_CONST_CASTSPELL_ONE_WITH_THE_LAND_7",

    description: "Der Magieanwender entwickelt ein mächtiges Verständnis für die Natur, wodurch er einen Kompetenzbonus von +4 auf Gefühl für Tiere, Fallen stellen, Leise bewegen und Verstecken erhält.",
  },
  {
    label: "Verständnis der Eule (15)",
    value: "owlsInsight15",
    nwscriptValue: "IP_CONST_CASTSPELL_OWLS_INSIGHT_15",

    description: "Das Ziel erhält einen Verbesserungsbonus auf Weisheit in Höhe der halben Zauberstufe.",
  },
  {
    label: "Weisheit der Eule (10)",
    value: "owlsWisdom10",
    nwscriptValue: "IP_CONST_CASTSPELL_OWLS_WISDOM_10",

    description: "Die Weisheit der Zielkreatur erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Weisheit der Eule (15)",
    value: "owlsWisdom15",
    nwscriptValue: "IP_CONST_CASTSPELL_OWLS_WISDOM_15",

    description: "Die Weisheit der Zielkreatur erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Weisheit der Eule (3)",
    value: "owlsWisdom3",
    nwscriptValue: "IP_CONST_CASTSPELL_OWLS_WISDOM_3",

    description: "Die Weisheit der Zielkreatur erhöht sich um 1W4+1 Punkte.",
  },
  {
    label: "Tödliches Phantom (7)",
    value: "phantasmalKiller7",
    nwscriptValue: "IP_CONST_CASTSPELL_PHANTASMAL_KILLER_7",

    description: "Der Magieanwender beschwört ein Abbild des absoluten Schreckens aus dem Unterbewusstsein einer Kreatur herauf. Wenn dem Ziel ein Willenswurf gelingt, erkennt es, dass das Abbild nicht real ist und vermeidet alle Auswirkungen des Zaubers. Scheitert der Willenswurf, muss das Opfer einen Zähigkeitswurf bestehen oder sterben. Selbst wenn der Zähigkeitswurf gelingt, erleidet das Opfer 3W6 Schadenspunkte.",
  },
  {
    label: "Verbündeter aus den Ebenen (15)",
    value: "planarAlly15",
    nwscriptValue: "IP_CONST_CASTSPELL_PLANAR_ALLY_15",

    description: "Ein Externar wird beschworen, um an der Seite des Magieanwenders zu kämpfen. Die Art des Externars hängt von der Gesinnung des Magieanwenders ab.",
  },
  {
    label: "Bindender Ruf (11)",
    value: "planarBinding11",
    nwscriptValue: "IP_CONST_CASTSPELL_PLANAR_BINDING_11",

    description: "Den Zauber kann man entweder auf einen anwesenden Externar anwenden, der bei einem gescheiterten Willenswurf für 1 Runde für je 2 Zauberstufen gelähmt ist, oder man kann den Zauber auf eine freie Stelle anwenden. In diesem Fall wird ein Verbündeter aus den Ebenen, abhängig von der Gesinnung des Anwenders, herbeigerufen:\nBöse: Sukkubus\nNeutral: Grüner Slaad\nGut: Hundearchon",
  },
  {
    label: "Vergiften (5)",
    value: "poison5",
    nwscriptValue: "IP_CONST_CASTSPELL_POISON_5",

    description: "Wenn dem Magieanwender ein Berührungsangriff im Nahkampf gelingt, muss das Ziel einen Zähigkeitswurf machen. Scheitert dieser, erleidet es Schaden durch Skorpiongift (Erst- und Zweitschaden je 1W6 Stärke).",
  },
  {
    label: "Selbstverwandlung (7)",
    value: "polymorphSelf7",
    nwscriptValue: "IP_CONST_CASTSPELL_POLYMORPH_SELF_7",

    description: "Der Magieanwender kann eine der folgenden Gestalten annehmen:\nRiesenspinne\nTroll\nErdkoloss\nPixie\nZombie",
  },
  {
    label: "Wort der Macht: Tod (17)",
    value: "powerWordKill17",
    nwscriptValue: "IP_CONST_CASTSPELL_POWER_WORD_KILL_17",

    description: "Der Zauber kann entweder auf eine Kreatur gezielt werden oder als Zauber mit Flächenwirkung eingesetzt werden. Wird er auf eine Kreatur gezielt, tötet er sie augenblicklich, falls sie nicht mehr als 100 Trefferpunkte hat. Als Zauber mit Flächenwirkung tötet er alle Kreaturen im Wirkungsbereich, die maximal 20 Trefferpunkte haben, allerdings maximal Kreaturen mit insgesamt 200 Trefferpunkten.",
  },
  {
    label: "Wort der Macht: Betäubung (13)",
    value: "powerWordStun13",
    nwscriptValue: "IP_CONST_CASTSPELL_POWER_WORD_STUN_13",

    description: "Das Ziel wird automatisch betäubt. Die Dauer der Betäubung hängt von den Trefferpunkten des Ziels ab:\nUnter 50 Trefferpunkten: 4W4 Runden\n51-100 Trefferpunkte: 2W4 Runden\n101-150 Trefferpunkte: 1W4 Runden",
  },
  {
    label: "Gebet (5)",
    value: "prayer5",
    nwscriptValue: "IP_CONST_CASTSPELL_PRAYER_5",

    description: "Alle Verbündeten im Wirkungsbereich erhalten +1 auf Angriffs-, Schadens-, Rettungs- und Fertigkeitswürfe. Alle Feinde erhalten -1 auf diese Würfe.",
  },
  {
    label: "Vorahnung (15)",
    value: "premonition15",
    nwscriptValue: "IP_CONST_CASTSPELL_PREMONITION_15",

    description: "Dank Vorahnung kann der Magieanwender ein kleines Stück in die Zukunft blicken und so im Nahkampf viel Schaden vermeiden. Er erhält Schadensreduzierung 30/+5. Bevor seine schützende Wirkung endet, hebt der Zauber außerdem 10 SP pro Stufe auf, die durch Nahkampf entstanden sind,.",
  },
  {
    label: "Regenbogenspiel (13)",
    value: "prismaticSpray13",
    nwscriptValue: "IP_CONST_CASTSPELL_PRISMATIC_SPRAY_13",

    description: "Alle Wesen im Wirkungsbereich, werden von einem bis zwei der nachfolgenden Effekte (zufällig ausgewählt) betroffen:\n20 Punkte Feuerschaden\n40 Punkte Säureschaden\n80 Punkte Elektrizitätsschaden\nBebilithgift\nGelähmt für 10 Runden\nVerwirrt für 10 Runden\nTod",
  },
  {
    label: "Schutz vor Gesinnung (2)",
    value: "protectionFromAlignment2",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_ALIGNMENT_2",

    description: "Der Magieanwender muss wählen, ob das Ziel vor Gutem oder Bösem geschützt sein soll. Gegen Kreaturen mit der gewählten Gesinnung erhält das Ziel einen Ablenkungsbonus +2 auf RK, +2 auf alle Rettungswürfe und Immunität gegen Zauber und zauberähnliche Effekte der Kategorie Geistesbeeinflussung.",
  },
  {
    label: "Schutz vor Gesinnung (5)",
    value: "protectionFromAlignment5",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_ALIGNMENT_5",

    description: "Der Magieanwender muss wählen, ob das Ziel vor Gutem oder Bösem geschützt sein soll. Gegen Kreaturen mit der gewählten Gesinnung erhält das Ziel einen Ablenkungsbonus +2 auf RK, +2 auf alle Rettungswürfe und Immunität gegen Zauber und zauberähnliche Effekte der Kategorie Geistesbeeinflussung.",
  },
  {
    label: "Schutz vor Elementen (10)",
    value: "protectionFromElements10",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_ELEMENTS_10",

    description: "Das Ziel erhält Schadensreduzierung 30 gegen alle Arten von elementaren Angriffen. Sobald der Zauber 40 SP durch ein bestimmtes Element abgewehrt hat, endet er.",
  },
  {
    label: "Schutz vor Elementen (3)",
    value: "protectionFromElements3",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_ELEMENTS_3",

    description: "Das Ziel erhält Schadensreduzierung 30 gegen alle Arten von elementaren Angriffen. Sobald der Zauber 40 SP durch ein bestimmtes Element abgewehrt hat, endet er.",
  },
  {
    label: "Schutz vor Zaubern (13)",
    value: "protectionFromSpells13",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_SPELLS_13",

    description: "Ein Verbündeter für je 4 Zauberstufen erhält +8 im Wirkungsbereich auf alle Rettungswürfe gegen Zauber.",
  },
  {
    label: "Schutz vor Zaubern (20)",
    value: "protectionFromSpells20",
    nwscriptValue: "IP_CONST_CASTSPELL_PROTECTION_FROM_SPELLS_20",

    description: "Ein Verbündeter für je 4 Zauberstufen erhält +8 im Wirkungsbereich auf alle Rettungswürfe gegen Zauber.",
  },
  {
    label: "Stachelfeuer (8)",
    value: "quillfire8",
    nwscriptValue: "IP_CONST_CASTSPELL_QUILLFIRE_8",

    description: "Der Magieanwender verschießt Giftstacheln auf ein Ziel, die 1W8 SP + 1 SP für je zwei Zauberstufen (maximal 1W8 + 5 SP) anrichten. Wenn dem Ziel ein Zähigkeitswurf misslingt, wird es von den Auswirkungen des Skorpiongifts betroffen.",
  },
  {
    label: "Tote erwecken (9)",
    value: "raiseDead9",
    nwscriptValue: "IP_CONST_CASTSPELL_RAISE_DEAD_9",

    description: "Ruft einen toten Charakter wieder ins Leben zurück. Der wiederlebte Charakter hat 1 Trefferpunkt, kann aber natürlich normal geheilt werden.",
  },
  {
    label: "Schwächestrahl (2)",
    value: "rayOfEnfeeblement2",
    nwscriptValue: "IP_CONST_CASTSPELL_RAY_OF_ENFEEBLEMENT_2",

    description: "Das Ziel erleidet einen Attributsverlust von 1W6 Stärkepunkten +1 je 2 Zauberstufen, bis zu einem Maximum von 11 Stärkepunkten.",
  },
  {
    label: "Kältestrahl (1)",
    value: "rayOfFrost1",
    nwscriptValue: "IP_CONST_CASTSPELL_RAY_OF_FROST_1",

    description: "Ein Ziel erleidet 1W4+1 Punkte Kälteschaden.",
  },
  {
    label: "Regeneration (13)",
    value: "regenerate13",
    nwscriptValue: "IP_CONST_CASTSPELL_REGENERATE_13",

    description: "Während der Wirkungsdauer des Zaubers regeneriert das Ziel 6 Trefferpunkte pro Runde.",
  },
  {
    label: "Blind- und Taubheit kurieren (5)",
    value: "removeBlindnessDeafness5",
    nwscriptValue: "IP_CONST_CASTSPELL_REMOVE_BLINDNESS_DEAFNESS_5",

    description: "Alle Verbündeten im Wirkungsbereich werden von Blind- und Taubheit geheilt.",
  },
  {
    label: "Fluch brechen (5)",
    value: "removeCurse5",
    nwscriptValue: "IP_CONST_CASTSPELL_REMOVE_CURSE_5",

    description: "Alle Flüche und alle Auswirkungen von Flüchen auf der Zielkreatur werden aufgehoben.",
  },
  {
    label: "Krankheit kurieren (5)",
    value: "removeDisease5",
    nwscriptValue: "IP_CONST_CASTSPELL_REMOVE_DISEASE_5",

    description: "Alle Krankheiten und Auswirkungen von Krankheiten bei der Zielkreatur werden aufgehoben.",
  },
  {
    label: "Furcht bannen (2)",
    value: "removeFear2",
    nwscriptValue: "IP_CONST_CASTSPELL_REMOVE_FEAR_2",

    description: "Alle Furchteffekte bei betroffenen Verbündeten im Wirkungsbereich werden aufgehoben. Außerdem erhalten diese Verbündeten für die Wirkungsdauer des Zaubers +4 auf Rettungswürfe gegen Furcht.",
  },
  {
    label: "Lähmung aufheben (3)",
    value: "removeParalysis3",
    nwscriptValue: "IP_CONST_CASTSPELL_REMOVE_PARALYSIS_3",

    description: "Alle betroffenen Verbündeten im Wirkungsbereich werden von Lähmung und Festhalten befreit.",
  },
  {
    label: "Resistenz (2)",
    value: "resistance2",
    nwscriptValue: "IP_CONST_CASTSPELL_RESISTANCE_2",

    description: "Die Zielkreatur erhält +1 auf alle Rettungswürfe.",
  },
  {
    label: "Resistenz (5)",
    value: "resistance5",
    nwscriptValue: "IP_CONST_CASTSPELL_RESISTANCE_5",

    description: "Die Zielkreatur erhält +1 auf alle Rettungswürfe.",
  },
  {
    label: "Elementen widerstehen (10)",
    value: "resistElements10",
    nwscriptValue: "IP_CONST_CASTSPELL_RESIST_ELEMENTS_10",

    description: "Das Ziel erhält Schadensreduzierung 20 gegen alle Arten von elementaren Angriffen. Sobald der Zauber 30 SP durch ein bestimmtes Element abgewehrt hat, endet er.",
  },
  {
    label: "Elementen widerstehen (3)",
    value: "resistElements3",
    nwscriptValue: "IP_CONST_CASTSPELL_RESIST_ELEMENTS_3",

    description: "Das Ziel erhält Schadensreduzierung 20 gegen alle Arten von elementaren Angriffen. Sobald der Zauber 30 SP durch ein bestimmtes Element abgewehrt hat, endet er.",
  },
  {
    label: "Genesung (7)",
    value: "restoration7",
    nwscriptValue: "IP_CONST_CASTSPELL_RESTORATION_7",

    description: "Der Zauber hebt alle zauberähnlichen, außergewöhnlichen und übernatürlichen Effekte auf, die dem Ziel einen Malus auf Attribute, RK, Angriffs- oder Schadenswürfe, Zauberresistenz, Rettungswürfe oder Schadensreduzierung geben. Außerdem hebt der Zauber Energieverlust auf und heilt das Ziel von Blind- und Taubheit. Der Zauber hat keine Auswirkung bei Flüchen oder Krankheiten.",
  },
  {
    label: "Auferstehung (13)",
    value: "resurrection13",
    nwscriptValue: "IP_CONST_CASTSPELL_RESURRECTION_13",

    description: "Das Ziel wird wiederbelebt und verfügt sofort über alle Trefferpunkte.",
  },
  {
    label: "Schurkenverschlagenheit (3)",
    value: "roguesCunning3",
    nwscriptValue: "IP_CONST_CASTSPELL_ROGUES_CUNNING_3",

    description: "Der Charakter erhält vorübergehend +5 auf Schlösser öffnen und +10 auf Suchen, Fallen entschärfen, Leise bewegen, Taschendiebstahl, Fallen stellen und Verstecken.",
  },
  {
    label: "Heiligtum (2)",
    value: "sanctuary2",
    nwscriptValue: "IP_CONST_CASTSPELL_SANCTUARY_2",

    description: "Das Ziel des Zaubers wird von allen Kreaturen in Nähe für die gesamte Dauer des Zaubers völlig ignoriert.",
  },
  {
    label: "Erschrecken (2)",
    value: "scare2",
    nwscriptValue: "IP_CONST_CASTSPELL_SCARE_2",

    description: "Eine Zielkreatur mit maximal 5 TW wird von Furcht betroffen. Sie erleidet -2 auf Moral-, Angriffs-, Schadens- und Rettungswürfe.",
  },
  {
    label: "Gleißendes Licht (5)",
    value: "searingLight5",
    nwscriptValue: "IP_CONST_CASTSPELL_SEARING_LIGHT_5",

    description: "Ein gleißender Strahl sengend heißen Lichts schießt auf das Ziel zu. Der Schaden hängt von der Art des Ziels ab:\nUntoter: 1W8 SP je Zauberstufe (Maximum 10W8)\nKonstrukt: 1W6 SP je 2 Zauberstufen (Maximum 5W6)\nAndere: 1W8 je 2 Zauberstufen (Maximum 5W8)",
  },
  {
    label: "Unsichtbares sehen (3)",
    value: "seeInvisibility3",
    nwscriptValue: "IP_CONST_CASTSPELL_SEE_INVISIBILITY_3",

    description: "Die Zielkreatur kann alle unsichtbaren Kreaturen in ihrem Sichtbereich normal sehen.",
  },
  {
    label: "Schatten (11)",
    value: "shades11",
    nwscriptValue: "IP_CONST_CASTSPELL_SHADES_11",

    description: "Der Zauber gestattet es dem Magieanwender, aus Schatten einen der nachfolgenden Zauber zu formen: Kältekegel, Feuerball, Steinhaut, Feuerwand oder Schatten herbeizaubern.",
  },
  {
    label: "Schattenbeschwörung (7)",
    value: "shadowConjuration7",
    nwscriptValue: "IP_CONST_CASTSPELL_SHADOW_CONJURATION_7",

    description: "Der Zauber gestattet es dem Magieanwender, aus Schatten einen der nachfolgenden Zauber zu formen: Dunkelheit, Unsichtbarkeit, Magierrüstung, Magisches Geschoss oder Schatten herbeizaubern.",
  },
  {
    label: "Schattenschild (13)",
    value: "shadowShield13",
    nwscriptValue: "IP_CONST_CASTSPELL_SHADOW_SHIELD_13",

    description: "Der Magieanwender hüllt sich in einen Mantel aus Schatten, der ihn durch verschiedene Effekte schützt:\nNatürlicher Rüstungsbonus +5\nSchadensreduzierung 10/+3\nImmunität gegen Effekte, die augenblicklichen Tod verursachen\nImmunität gegen Zauber der Schule Nekromantie\nImmunität gegen Schaden durch Negative Energie",
  },
  {
    label: "Gestaltwandel (17)",
    value: "shapechange17",
    nwscriptValue: "IP_CONST_CASTSPELL_SHAPECHANGE_17",

    description: "Der Magieanwender nimmt vorübergehend eine furchterregende Gestalt mit großer Zerstörungskraft an. Er kann zwischen folgenden Formen wählen:\nRoter Drache\nFeuerriese\nBalor\nTodesslad\nEisengolem",
  },
  {
    label: "Schild (5)",
    value: "shield5",
    nwscriptValue: "IP_CONST_CASTSPELL_SHIELD_5",

    description: "Der Magieanwender erhält einen Bonus von +4 auf die RK. Außerdem ist er für die Wirkungsdauer des Zaubers gegen Magisches Geschoss immun.",
  },
  {
    label: "Schild des Glaubens (5)",
    value: "shieldOfFaith5",
    nwscriptValue: "IP_CONST_CASTSPELL_SHIELD_OF_FAITH_5",

    description: "Das Ziel erhält einen Ablenkungsbonus +2 auf die RK, der um +1 für je sechs Stufen des Magieanwenders steigt (maximal +5).",
  },
  {
    label: "Stille (3)",
    value: "silence3",
    nwscriptValue: "IP_CONST_CASTSPELL_SILENCE_3",

    description: "Der Zauber erschafft rund um die Zielkreatur ein Gebiet der Stille. In dem Wirkungsbereich können keine Zauber mit verbalen (V) Komponenten gewirkt werden. Wenn der Zauber auf einen Verbündeten gewirkt wird, muss keine Zauberresistenz überwunden werden, und das Ziel muss auch keinen Rettungswurf machen.",
  },
  {
    label: "Schneller Tod (9)",
    value: "slayLiving9",
    nwscriptValue: "IP_CONST_CASTSPELL_SLAY_LIVING_9",

    description: "Wenn dem Ziel ein Zähigkeitswurf misslingt, stirbt es. Selbst bei einem erfolgreichen Zähigkeitswurf erleidet das Opfer 3W6 SP durch negative Energie + 1 SP je Zauberstufe.",
  },
  {
    label: "Schlaf (2)",
    value: "sleep2",
    nwscriptValue: "IP_CONST_CASTSPELL_SLEEP_2",

    description: "4 +1W4 TW an Kreaturen fallen in einen komatösen Schlaf, beginnend mit den Kreaturen, die die wenigsten TW haben. Kreaturen mit 5 TW oder mehr sind dagegen immun.",
  },
  {
    label: "Schlaf (5)",
    value: "sleep5",
    nwscriptValue: "IP_CONST_CASTSPELL_SLEEP_5",

    description: "4 +1W4 TW an Kreaturen fallen in einen komatösen Schlaf, beginnend mit den Kreaturen, die die wenigsten TW haben. Kreaturen mit 5 TW oder mehr sind dagegen immun.",
  },
  {
    label: "Verlangsamen (5)",
    value: "slow5",
    nwscriptValue: "IP_CONST_CASTSPELL_SLOW_5",

    description: "Feindliche Kreaturen im Wirkungsbereich, die bei ihrem Willenswurf scheitern, verlieren einen Angriff je Runde und haben eine um 50% reduzierte Bewegungsrate.",
  },
  {
    label: "Geräuschexplosion (3)",
    value: "soundBurst3",
    nwscriptValue: "IP_CONST_CASTSPELL_SOUND_BURST_3",

    description: "Alle Kreaturen im Wirkungsbereich erleiden 1W8 SP und müssen einen Willenswurf machen. Wer scheitert, ist für 2 Runden betäubt.",
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

    description: "Der Zauber erschafft eine Barriere rund um den Magieanwender, die alle Zauber und zauberähnlichen Effekte abhält. Die Barriere hält bis zu 1W8+8 Zaubergrade ab, bevor sie in sich zusammenbricht.",
  },
  {
    label: "Zauberresistenz (15)",
    value: "spellResistance15",
    nwscriptValue: "IP_CONST_CASTSPELL_SPELL_RESISTANCE_15",

    description: "Die berührte Kreatur erhält eine Zauberresistenz von 12 +1 pro Zauberstufe. Verfügt das Ziel bereits über eine höhere Zauberresistenz, ist der Zauber wirkungslos.",
  },
  {
    label: "Zauberresistenz (9)",
    value: "spellResistance9",
    nwscriptValue: "IP_CONST_CASTSPELL_SPELL_RESISTANCE_9",

    description: "Die berührte Kreatur erhält eine Zauberresistenz von 12 +1 pro Zauberstufe. Verfügt das Ziel bereits über eine höhere Zauberresistenz, ist der Zauber wirkungslos.",
  },
  {
    label: "Dornenwuchs (9)",
    value: "spikeGrowth9",
    nwscriptValue: "IP_CONST_CASTSPELL_SPIKE_GROWTH_9",

    description: "Der Wirkungsbereich wird von kleinen Dornen überzogen. Jede Kreatur im Wirkungsbereich erleidet 1W4 SP je Runde. Die Dornen können den Füssen schwere Verletzungen zufügen, wodurch die betroffene Kreatur für einen Tag eine reduzierte Bewegungsrate hat, selbst nachdem sie den Wirkungsbereich verlassen hat.",
  },
  {
    label: "Stinkende Wolke (5)",
    value: "stinkingCloud5",
    nwscriptValue: "IP_CONST_CASTSPELL_STINKING_CLOUD_5",

    description: "Alle Kreaturen im Wirkungsbereich sind benommen. Die Wirkung hält so lange an, wie sich die Kreaturen im Wirkungsbereich aufhalten. Verlässt ein Opfer den Wirkungsbereich, so hält die Benommenheit noch für 1 Runde an.",
  },
  {
    label: "Steinhaut (7)",
    value: "stoneskin7",
    nwscriptValue: "IP_CONST_CASTSPELL_STONESKIN_7",

    description: "Die berührte Kreatur erhält Schadensreduzierung 10/+5. Der Zauber kann bis zu 10 Punkte Nahkampfschaden je Zauberstufe, bis zu maximal 100 SP abhalten, bevor seine Wirkung endet.",
  },
  {
    label: "Stein zu Fleisch (5)",
    value: "stoneToFlesh5",
    nwscriptValue: "IP_CONST_CASTSPELL_STONE_TO_FLESH_5",

    description: "Der Zauber verwandelt eine versteinerte Person oder Kreatur wieder zu Fleisch. Dadurch beginnt sie wieder zu leben, und auch ihre Besitztümer werden wieder zugänglich.",
  },
  {
    label: "Sturm der Vergeltung (17)",
    value: "stormOfVengeance17",
    nwscriptValue: "IP_CONST_CASTSPELL_STORM_OF_VENGEANCE_17",

    description: "Im Gebiet rund um den Magieanwender geht ein Säureregen nieder, in dem ein Inferno aus Blitzen tobt. Alle Feinde im Wirkungsbereich erleiden in jeder Runde 3W6 Punkte Säureschaden. Jene Kreaturen, denen ein Reflexwurf misslingt, erleiden zusätzlich 3W6 Punkte Elektrizitätsschaden und sind eine Runde lang betäubt.",
  },
  {
    label: "Monster herbeizaubern III (5)",
    value: "summonCreatureIii5",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_III_5",

    description: "Der Magieanwender zaubert einen Schreckenswolf herbei, der ihm loyal dient.",
  },
  {
    label: "Monster herbeizaubern II (3)",
    value: "summonCreatureIi3",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_II_3",

    description: "Der Magieanwender zaubert einen Schreckenseber herbei, der ihm loyal dient.",
  },
  {
    label: "Monster herbeizaubern IV (7)",
    value: "summonCreatureIv7",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_IV_7",

    description: "Der Magieanwender zaubert einen Schreckensspinne herbei, die ihm loyal dient.",
  },
  {
    label: "Monster herbeizaubern IX (17)",
    value: "summonCreatureIx17",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_IX_17",

    description: "Der Magieanwender zaubert einen Älteren Elementar von einem zufällig ausgewählten Element herbei, der ihm loyal dient.",
  },
  {
    label: "Monster herbeizaubern I (2)",
    value: "summonCreatureI2",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_I_2",

    description: "Der Magieanwender zaubert einen Schreckensdachs herbei, der ihm loyal dient.",
  },
  {
    label: "Monster herbeizaubern I (5)",
    value: "summonCreatureI5",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_I_5",

    description: "Der Magieanwender zaubert einen Schreckensdachs herbei, der ihm loyal dient.",
  },
  {
    label: "Monster herbeizaubern VIII (15)",
    value: "summonCreatureViii15",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_VIII_15",

    description: "Der Magieanwender zaubert einen Mächtigen Elementar von einem zufällig ausgewählten Element herbei, der ihm loyal dient.",
  },
  {
    label: "Monster herbeizaubern VII (13)",
    value: "summonCreatureVii13",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_VII_13",

    description: "Der Magieanwender zaubert einen riesigen Elementar von einem zufällig ausgewählten Element herbei, der ihm loyal dient.",
  },
  {
    label: "Monster herbeizaubern VI (11)",
    value: "summonCreatureVi11",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_VI_11",

    description: "Der Magieanwender zaubert einen Schreckenstiger herbei, der ihm loyal dient.",
  },
  {
    label: "Monster herbeizaubern V (9)",
    value: "summonCreatureV9",
    nwscriptValue: "IP_CONST_CASTSPELL_SUMMON_CREATURE_V_9",

    description: "Der Magieanwender zaubert einen Schreckensbär herbei, der ihm loyal dient.",
  },
  {
    label: "Sonnenstrahl (13)",
    value: "sunbeam13",
    nwscriptValue: "IP_CONST_CASTSPELL_SUNBEAM_13",

    description: "Der Magieanwender beschwört eine gleißende Kugel göttlichen Lichts, um alle im Wirkungsbereich zu blenden und zu verbrennen. Untote erleiden durch göttliche Energie 1W6 SP je Stufe des Magieanwenders bis zu einem Maximum von 20W6 SP. Alle anderen Kreaturen erleiden 3W6 SP durch göttliche Energie und werden für 3 Runden geblendet. Bei einem erfolgreichen Reflexwurf erleiden Untote halben Schaden, und andere Kreaturen werden nicht geblendet.",
  },
  {
    label: "Sonnenfeuer (20)",
    value: "sunburst20",
    nwscriptValue: "IP_CONST_CASTSPELL_SUNBURST_20",

    description: "Eine gleißende Explosion, deren Zentrum der Anwender genau platzieren kann, verursacht 1W6 SP je Zauberstufe bei allen Untoten (maximal 25W6). Andere Kreaturen erleiden nur 6W6 SP. Vampire, die bei einem Reflexwurf versagen, werden augenblicklich zerstört. Alle Feinde im Wirkungsbereich, die bei einem Reflexwurf versagen, werden geblendet. Die Blindheit kann nur durch magische Mittel geheilt werden.",
  },
  {
    label: "Tashas Fürchterlicher Lachanfall (7)",
    value: "tashasHideousLaughter7",
    nwscriptValue: "IP_CONST_CASTSPELL_TASHAS_HIDEOUS_LAUGHTER_7",

    description: "Wenn dem Ziel ein Rettungswurf misslingt, beginnt es hysterisch zu lachen. Das Opfer kann sich nicht verteidigen, während es von dem Zauber betroffen ist. Eine Kreatur, die einer anderen Volksgruppe angehört als der Magieanwender, erhält +4 auf ihren Rettungswurf, weil der Zauber sozusagen an den Sinn für Humor des Opfers appelliert und dieser sich oft von Volk zu Volk dramatisch unterscheidet.",
  },
  {
    label: "Tensers Umwandlung (11)",
    value: "tensersTransformation11",
    nwscriptValue: "IP_CONST_CASTSPELL_TENSERS_TRANSFORMATION_11",

    description: "Der Magieanwender wird zu einer Kampfmaschine. Er erhält einen Angriffsbonus +1 für je 2 Zauberstufen, Natürlichen Rüstungsbonus +4,  Stärke 20, Geschicklichkeit 22 und Konstitution 18 und +1W6 Trefferpunkte pro Zauberstufe.",
  },
  {
    label: "Zeitstopp (17)",
    value: "timeStop17",
    nwscriptValue: "IP_CONST_CASTSPELL_TIME_STOP_17",

    description: "Der Magieanwender kann dem unerbittlichen Verströmen der Zeit trotzen. Während der Wirkungsdauer scheint die ganze Welt bis auf den Magieanwender eingefroren zu sein. Er hingegen kann sich normal bewegen, angreifen und Zauber wirken.",
  },
  {
    label: "Wahrer Blick (9)",
    value: "trueSeeing9",
    nwscriptValue: "IP_CONST_CASTSPELL_TRUE_SEEING_9",

    description: "Das Ziel wird von Heiligtum nicht betroffen und kann unsichtbare Dinge und Kreaturen sehen. Es bemerkt automatisch versteckte Gegner.",
  },
  {
    label: "Zielsicherer Schlag (5)",
    value: "trueStrike5",
    nwscriptValue: "IP_CONST_CASTSPELL_TRUE_STRIKE_5",

    description: "Dank magischer Intuition erhält der Magieanwender +20 auf Angriffswürfe.",
  },
  {
    label: "Ewiger Feind der Untoten (20)",
    value: "undeathsEternalFoe20",
    nwscriptValue: "IP_CONST_CASTSPELL_UNDEATHS_ETERNAL_FOE_20",

    description: "Alle Verbündeten im Wirkungsbereich erhalten folgende Immunitäten: Immunität gegen Schaden durch negative Energie, Immunität gegen Energie-/Stufenverlust, Immunität gegen Attributverlust, Immunität gegen Gift, Immunität gegen Krankheiten und einen Ablenkungsbonus von +4 auf die RK.",
  },
  {
    label: "Besondere Eigenschaft",
    value: "uniquePower",
    nwscriptValue: "IP_CONST_CASTSPELL_UNIQUE_POWER",
  },
  {
    label: "Besondere Eigenschaft, nur vom Träger benutzbar",
    value: "uniquePowerSelfOnly",
    nwscriptValue: "IP_CONST_CASTSPELL_UNIQUE_POWER_SELF_ONLY",
  },
  {
    label: "Vampirgriff (5)",
    value: "vampiricTouch5",
    nwscriptValue: "IP_CONST_CASTSPELL_VAMPIRIC_TOUCH_5",

    description: "Wenn dem Magieanwender ein Berührungsangriff im Nahkampf gelingt, erleidet das Ziel 1W6 SP für je 2 Zauberstufen (maximal 10W6). Der Schaden wird daraufhin als temporärer Bonus den Trefferpunkten des Magieanwenders gutgeschrieben. Es ist unmöglich, mehr temporäre Trefferpunkte zu erhalten, als notwendig wären, um das Ziel zu töten (Aktuelle Trefferpunkte des Ziels +10).",
  },
  {
    label: "Tugend (1)",
    value: "virtue1",
    nwscriptValue: "IP_CONST_CASTSPELL_VIRTUE_1",

    description: "Die maximalen Trefferpunkte der berührten Kreatur erhöhen sich während der Wirkungsdauer um 1.",
  },
  {
    label: "Wehgeschrei der Todesfee (17)",
    value: "wailOfTheBanshee17",
    nwscriptValue: "IP_CONST_CASTSPELL_WAIL_OF_THE_BANSHEE_17",

    description: "Alle Feinde im Wirkungsbereich, die bei einem Zähigkeitswurf scheitern, sterben. Es wird maximal ein Gegner je Zauberstufe betroffen.",
  },
  {
    label: "Feuerwand (9)",
    value: "wallOfFire9",
    nwscriptValue: "IP_CONST_CASTSPELL_WALL_OF_FIRE_9",

    description: "Der Zauber erschafft einen Vorhang aus Feuer, der bei jeder Kreatur, die ihn durchquert, 4W6 Punkte Feuerschaden anrichtet.",
  },
  {
    label: "Kriegsschrei (7)",
    value: "warCry7",
    nwscriptValue: "IP_CONST_CASTSPELL_WAR_CRY_7",

    description: "Der Magieanwender stößt einen mächtigen Kriegsschrei aus, durch den alle Verbündeten im Wirkungsbereich +2 auf Angriffs- und Schadenswürfe erhalten. Alle Feinde, deren Willenswurf scheitert, werden von Furcht betroffen.",
  },
  {
    label: "Spinnennetz (3)",
    value: "web3",
    nwscriptValue: "IP_CONST_CASTSPELL_WEB_3",

    description: "Klebrige Fäden bedecken den Wirkungsbereich und verstricken alle, die bei ihrem Reflexwurf scheitern. Kreaturen, deren Reflexwurf erfolgreich war, können sich mit einer reduzierten Bewegungsrate bewegen. Die Bewegungsrate hängt von der Stärke ab.",
  },
  {
    label: "Unheimliches Schicksal (17)",
    value: "weird17",
    nwscriptValue: "IP_CONST_CASTSPELL_WEIRD_17",

    description: "Vor den Feinden im Wirkungsbereich erhebt sich ein Furcht erregendes Phantom. Jeder Feind im Wirkungsbereich muss einen Willenswurf schaffen. Wer scheitert, wird vom Phantom berührt und muss einen Zähigkeitswurf bestehen. Wer erneut scheitert, stirbt. Auch wenn man beim Zähigkeitswurf erfolgreich ist, erleidet man 3W6 SP. Kreaturen mit 4 TW oder weniger sterben automatisch. Ihnen steht überhaupt kein Rettungswurf zu.",
  },
  {
    label: "Wort des Glaubens (13)",
    value: "wordOfFaith13",
    nwscriptValue: "IP_CONST_CASTSPELL_WORD_OF_FAITH_13",

    description: "Eine Welle göttlicher Energie trifft alle feindlichen Kreaturen im Wirkungsbereich. Alle Feinde im Wirkungsbereich sind für 1 Runde je 2 Zauberstufen betäubt. Kreaturen mit 4 oder weniger Trefferwürfeln werden automatisch getötet. Alle feindlichen, herbeigezauberten Kreaturen kehren auf ihre Heimatebene zurück.",
  },
  {
    label: "Verletzendes Flüstern (9)",
    value: "woundingWhispers9",
    nwscriptValue: "IP_CONST_CASTSPELL_WOUNDING_WHISPERS_9",

    description: "Der Magieanwender wird von einem magischen Flüstern umhüllt, das jeder Kreatur, die ihm Schaden zufügt, einen Schallschaden von 1W6 +1 Punkte pro Stufe zufügt.",
  },
])
