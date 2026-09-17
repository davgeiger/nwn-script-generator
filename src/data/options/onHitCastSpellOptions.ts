import type { PropertyParameterOption } from "@/types/properties"
import { sortOptionsByLabel } from "./propertyOptions"

export const onHitCastSpellOptions: PropertyParameterOption[] =
  sortOptionsByLabel([
    {
      label: "Säurenebel",
      value: "acidFog",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ACID_FOG",

      description: "Säurenebel erschafft eine dicke Wolke wallenden, grünen Nebels, der sich förmlich an alles anzuhaften scheint. Kreaturen, die in die Wolke geraten, ziehen sich einen 4W6 Säureschaden zu. Kreaturen innerhalb der Wolke, denen ein Zähigkeitswurf misslingt, haben eine um 50% reduzierte Bewegungsrate. Alle Kreaturen innerhalb der Wolke erleiden 2W6 Punkte Säureschaden pro Runde.",
    },
    {
      label: "Säurespritzer",
      value: "acidSplash",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ACID_SPLASH",

      description: "Der Magieanwender erzeugt eine kleine Säurekugel, die bei ihrem Opfer 1W3 Punkte Säureschaden verursacht.",
    },
    {
      label: "Balagarn's Eisenhorn",
      value: "balagarnsIronHorn",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BALAGARNSIRONHORN",

      description: "Der Magieanwender erzeugt einen tiefen, vibrierenden Ton im Wirkungsbereich. Alle Kreaturen, denen ein konkurrierender Stärkewurf misslingt (als ob der Magieanwender Stärke 20 hätte), werden zu Boden geworfen und gelten eine Runde lang als niedergeworfen.",
    },
    {
      label: "Blitzkugeln",
      value: "ballLightning",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BALL_LIGHTNING",

      description: "Ihr erschafft eine Blitzkugel, die bei einem Ziel einschlägt und 1W6 SP pro Zauberstufe verursacht (maximal 15W6).",
    },
    {
      label: "Verfluchen",
      value: "bane",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BANE",

      description: "Die Feinde des Magieanwenders werden von Zweifel und Furcht erfüllt. Sie erleiden -1 auf Angriffswürfe und -1 auf Rettungswürfe gegen Furcht.",
    },
    {
      label: "Verbannung",
      value: "banishment",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BANISHMENT",

      description: "Dieser Zauber zerstört alle herbeigezauberten Kreaturen, Vertraute, Tiergefährten und Externare im Wirkungsbereich, denen ein Willenswurf misslingt. Der Zauber kann maximal doppelt so viele TW an Kreaturen zerstören, wie der Magieanwender Zauberstufen hat.",
    },
    {
      label: "Fluch",
      value: "bestowCurse",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BESTOW_CURSE",

      description: "Fluch reduziert alle Attributswerte des Ziels um 2 Punkte.",
    },
    {
      label: "Bigbys Geballte Faust",
      value: "bigbysClenchedFist",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BIGBYS_CLENCHED_FIST",

      description: "Eine riesige Hand taucht über dem Ziel auf und greift es während der Wirkungsdauer des Zaubers einmal pro Runde an. Bei einem Treffer erleidet das Ziel 1W8+11 SP und muss einen Zähigkeitswurf schaffen. Scheitert es, ist es für diese Runde betäubt.",
    },
    {
      label: "Bigbys Zerdrückende Hand",
      value: "bigbysCrushingHand",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BIGBYS_CRUSHING_HAND",

      description: "Eine riesige Hand taucht auf und greift das Ziel an. Wenn die Hand trifft und bei einem Ringkampfwurf erfolgreich ist, hält sie das Opfer für die Wirkungsdauer fest und richtet dabei pro Runde 2W6+12 SP an.",
    },
    {
      label: "Bigbys Kräftige Hand",
      value: "bigbysForcefulHand",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BIGBYS_FORCEFUL_HAND",

      description: "Eine riesige Hand taucht auf und macht einen Ansturm auf ein Ziel. Die Hand erhält +14 auf ihren Stärkewurf. Wenn der Ansturm erfolgreich ist, wird das Ziel zu Boden geworfen und ist für die Wirkungsdauer des Zaubers benommen.",
    },
    {
      label: "Bigbys Zugreifende Hand",
      value: "bigbysGraspingHand",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BIGBYS_GRASPING_HAND",

      description: "Eine riesige Hand taucht über dem Ziel auf und versucht, es zu packen. Wenn die Hand trifft und bei einem Ringkampfwurf erfolgreich ist, wird das Opfer für die Wirkungsdauer festgehalten.",
    },
    {
      label: "Bigbys Behindernde Hand",
      value: "bigbysInterposingHand",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BIGBYS_INTERPOSING_HAND",

      description: "Eine riesige Hand taucht über dem Ziel auf und tut alles, um es bei seinen Angriffen zu behindern. Das Ziel erhält während der Wirkungsdauer -10 auf Angriffswürfe.",
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

      description: "Wenn das Ziel bei seinem Rettungswurf scheitert, wird es blind und taub.",
    },
    {
      label: "Bombardierung",
      value: "bombardment",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_BOMBARDMENT",

      description: "Felsbrocken regnen vom Himmel herab und richten bei allen Feinden im Wirkungsbereich 1W8 SP je Zauberstufe an (maximal 10W8).",
    },
    {
      label: "Blitze herbeirufen",
      value: "callLightning",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CALL_LIGHTNING",

      description: "Alle Feinde im Wirkungsbereich erleiden 1W6 SP je Zauberstufe, bis zu einem Maximum von 10W6 SP.",
    },
    {
      label: "Kugelblitz",
      value: "chainLightning",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CHAIN_LIGHTNING",

      description: "Ein Blitz trifft das ausgewählte Ziel und springt von dort auf andere Feinde im Wirkungsbereich über. Der Blitz verursacht 1W6 SP pro Zauberstufe mit einem Maximum von 20W6 SP beim ersten Ziel. Die anderen Ziele erleiden halben Schaden.",
    },
    {
      label: "Todeswolke",
      value: "cloudkill",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CLOUDKILL",

      description: "Eine wabernde Wolke aus giftigen Dämpfen entsteht im Wirkungsbereich. Kreaturen werden abhängig von ihren TW von der Wolke unterschiedlich betroffen:\n1-3 TW: Augenblicklicher Tod\n4-6 TW: Zähigkeitswurf oder Tod\nMehr als 6 TW: 1W10 SP/je Runde",
    },
    {
      label: "Entzünden",
      value: "combust",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_COMBUST",

      description: "Ein Flammenschlag verursacht 2W6 Punkte Feuerschaden +1 pro Zauberstufe (maximal +10). Das Opfer erhält keinen Rettungswurf gegen den Schaden. Es muss allerdings einen Reflexwurf schaffen, um nicht in Brand zu geraten und weitere 1W6 Punkte Feuerschaden zu erleiden. Das Opfer erleidet diesen Schaden in jeder folgenden Runde, bis ihm ein Reflexwurf gelingt.",
    },
    {
      label: "Verwirrung",
      value: "confusion",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CONFUSION",

      description: "Alle betroffenen Kreaturen wandern entweder ziellos herum, greifen ein beliebiges Ziel an oder tun gar nichts.",
    },
    {
      label: "Ansteckung",
      value: "contagion",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CONTAGION",

      description: "Das Ziel erleidet eine der folgenden Krankheiten: Trübe Sieche, Wahnsinnsfieber, Hirnbrand, Rote Qual, Schüttelkrampf oder Schleimiges Verderben. Die Krankheit wird zufällig ausgewählt.",
    },
    {
      label: "Kriechender Tod",
      value: "creepingDoom",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CREEPING_DOOM",

      description: "Der Magieanwender beschwört einen Schwarm aus stechenden und beißenden Insekten. Jede Kreatur im Wirkungsbereich erleidet 1W6 SP. Mit jeder neuen Runde im Wirkungsbereich erhöht sich der Schaden um +1W6 SP (also 1W6 SP in der ersten Runde, 2W6 SP in der zweiten Runde, 4W6 SP in der dritten Runde, 7W6 SP in der vierten Runde usw.) Der Zauber verursacht Schaden, bis die Wirkungsdauer endet oder bis er insgesamt 1.000 Schadenspunkte verursacht hat.",
    },
    {
      label: "Zerfall",
      value: "crumble",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_CRUMBLE",

      description: "Ein Konstrukt erleidet 1W6 SP pro Zauberstufe (maximal 15W6). Der Zauber betrifft keine lebende Kreaturen.",
    },
    {
      label: "Dunkelheit",
      value: "darkness",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DARKNESS",

      description: "Alle Kreaturen im Wirkungsbereich werden von einem Schleier aus Dunkelheit umhüllt, der nur mit Ultrasicht durchdrungen werden kann.",
    },
    {
      label: "Benommenheit",
      value: "daze",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DAZE",

      description: "Wenn das Opfer humanoid ist und 5TW oder weniger hat, ist es für zwei Runden benommen.",
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

      description: "Der Magieanwender erschafft eine kleine, magische Zone, die auf Bewegungen von feindlichen Kreaturen reagiert. Sobald sie ausgelöst wird, explodiert sie in einem Feuerball, der bei allen Kreaturen im Wirkungsbereich 1W6 SP je Zauberstufe, mit einem Maximum von 20W6 SP, anrichtet.",
    },
    {
      label: "Zerstörung",
      value: "destruction",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DESTRUCTION",

      description: "Die Zielkreatur muss einen Zähigkeitswurf bestehen oder sterben. Selbst bei einem erfolgreichen Zähigkeitswurf erleidet sie 10W6 Schadenspunkte.",
    },
    {
      label: "Fortschicken",
      value: "dismissal",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DISMISSAL",

      description: "Alle herbeigezauberten Verbündeten von feindlichen Magieanwendern im Wirkungsbereich werden weggeschickt.",
    },
    {
      label: "Magie bannen",
      value: "dispelMagic",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DISPEL_MAGIC",

      description: "Wird der Zauber auf eine Kreatur gewirkt, versucht er alle magischen Effekte und Zauber, die auf der Kreatur liegen, aufzuheben. Man kann den Zauber auch als Zauber mit Flächenwirkung einsetzen. In diesem Fall versucht er, bei jedem Ziel im Wirkungsbereich den mächtigsten Zauber aufzuheben. Um einen Zauber aufzuheben, muss dem Magieanwender ein Bannwurf mit 1W20 + 1 pro Zauberstufe (bis zu +10) gegen SG 11 + Zauberstufe des Zaubers oder Effekts, der gebannt werden soll, gelingen.",
    },
    {
      label: "Unheil",
      value: "doom",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DOOM",

      description: "Das Opfer erhält -2 auf Angriffs-, Schadens-, Rettungs-, Attributs- und Fertigkeitswürfe.",
    },
    {
      label: "Ertränken",
      value: "drown",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_DROWN",

      description: "Mit diesem Zauber füllt der Anwender die Lungen eines Wesens mit Wasser. Jedes ertrunkene Wesen erleidet Schaden in Höhe von 90% seiner aktuellen TP. Golems und andere nicht lebendige Kreaturen können nicht ertränkt werden.",
    },
    {
      label: "Erdbeben",
      value: "earthquake",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_EARTHQUAKE",

      description: "Der Magieanwender erzeugt rund um sich ein gewaltiges Erdbeben, dass bei allen Kreaturen im Wirkungsbereich (außer bei ihm selbst) 1W6 Schadenspunkte je Zauberstufe (maximal 10W6 SP) verursacht.",
    },
    {
      label: "Elektrischer Schlag",
      value: "electricJolt",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ELECTRIC_JOLT",

      description: "Das Ziel erleidet 1W3 Punkte Schaden durch Elektrizität.",
    },
    {
      label: "Entzug von Lebenskraft",
      value: "energyDrain",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ENERGY_DRAIN",

      description: "Das Ziel verliert permanent 2W4 Charakterstufen.",
    },
    {
      label: "Entkräftung",
      value: "enervation",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ENERVATION",

      description: "Das Ziel verliert vorübergehend 1W4 Charakterstufen.",
    },
    {
      label: "Verstricken",
      value: "entangle",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ENTANGLE",

      description: "Alle Kreaturen im Wirkungsbereich werden von Lianen, Schlingpflanzen und ähnlichem Gewächs umfangen. Sie können sich nicht bewegen, aber weiterhin kämpfen und Zauber wirken. Opfer, deren Reflexwurf gelingt, können sich mit halber Bewegungsrate bewegen.",
    },
    {
      label: "Evards Schwarze Tentakel",
      value: "evardsBlackTentacles",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_EVARDS_BLACK_TENTACLES",

      description: "Dicke, gummiartige 10 Fuß lange Tentakel schieben sich aus dem Boden. Jedes Tentakel kann ein Ziel greifen und verursacht Schaden von je 1W6+4 SP wie durch Wuchtwaffen. Dem lähmenden Effekt der Attacken kann mit einem Zähigkeitswurf widerstanden werden. Die Tentakel verteilen sich zufällig im Wirkungsbereich, aber es können nicht mehr als die Hälfte der Tentakel ein einzelnes Opfer pro Runde greifen. Die Unfähigkeit der Tentakel, kleine Ziele zu ergreifen, macht kleine Wesen absolut immun gegen die Auswirkungen des Zaubers.",
    },
    {
      label: "Böser Fluch",
      value: "evilBlight",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_EVIL_BLIGHT",

      description: "Alle Feinde im Wirkungsbereich werden verflucht. Dadurch sinken ihre Attributswerte um -3.",
    },
    {
      label: "Furcht",
      value: "fear",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FEAR",

      description: "Alle betroffenen Kreaturen werden von einer überwältigenden Furcht befallen, die alle anderen Gedanken auslöscht. Sie rennen panisch vor allen Kreaturen davon, die sie nicht als Verbündete ansehen.",
    },
    {
      label: "Schwachsinn",
      value: "feeblemind",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FEEBLEMIND",

      description: "Wenn dem Magieanwender ein erfolgreicher Berührungsangriff im Fernkampf gelingt, erleidet das Ziel einen Intelligenzverlust von 1W4 Punkten je 4 Zauberstufen.",
    },
    {
      label: "Feuersturm",
      value: "fireStorm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FIRE_STORM",

      description: "Im Wirkungsbereich entsteht ein tosender Feuersturm, der bei allen Kreaturen, die sich im Bereich des Infernos aufhalten, 1W6 SP pro Zauberstufe bis zu 20W6 SP anrichtet. Die Hälfte des Schadens ist Feuerschaden, und die andere Hälfte ist Schaden durch göttliche Energie.",
    },
    {
      label: "Feuerball",
      value: "fireball",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FIREBALL",

      description: "Der Magieanwender schießt ein flammendes Projektil ab, das beim Aufschlag in einem Feuerball explodiert. Alle Kreaturen im Wirkungsbereich erleiden 1W6 Punkte Feuerschaden je Zauberstufe mit einem Maximum von 10W6 SP.",
    },
    {
      label: "Flächenbrand",
      value: "firebrand",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FIREBRAND",

      description: "Zahlreiche Flammen tauchen auf (eine je Zauberstufe) und jede von ihnen schlägt bei einer feindlichen Kreatur im Wirkungsbereich ein. Wenn mehr Kreaturen als Flammen anwesend sind, dann werden die nächststehenden Ziele betroffen. Gibt es mehr Flammen als Kreaturen, verschwinden die überschüssigen Flammen, ohne Schaden anzurichten. Jede Flamme explodiert für 1W6 SP je Zauberstufe (maximal 15W6 SP).",
    },
    {
      label: "Flammenstoß",
      value: "flameLash",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FLAME_LASH",

      description: "Vom Druiden greifen Flammenzungen nach einem Feind, die 2W6 Punkte Feuerschaden +1W6 Punkte Feuerschaden je 3 Zauberstufen über der 3. Stufe verursachen.",
    },
    {
      label: "Flammenschlag",
      value: "flameStrike",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FLAME_STRIKE",

      description: "Eine Flammensäule schießt vom Himmel herab und hüllt alle Ziele im Wirkungsbereich ein. Sie verursacht 1W6 SP je Zauberstufe mit einem Maximum von 15W6 SP. Die Hälfte des Schadens ist Feuerschaden, und die andere Hälfte ist Schaden durch göttliche Energie. Feinde im Wirkungsbereich erleiden vollen Schaden, während Verbündete nur den Feuerschaden erleiden.",
    },
    {
      label: "Aufblitzen",
      value: "flare",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FLARE",

      description: "Wenn dem Ziel ein Zähigkeitswurf misslingt, wird es von dem Licht geblendet, das der Magieanwender verschießt, und es erleidet -1 auf Angriffswürfe.",
    },
    {
      label: "Fleisch zu Stein",
      value: "fleshToStone",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_FLESH_TO_STONE",

      description: "Das Opfer und all seine Besitztümer werden in eine bewegungslose Statue verwandelt. Nur Stein zu Fleisch kann das Opfer wieder herstellen.\n* Bei einem Schwierigkeitsgrad von Normal oder weniger ist die Wirkungsdauer 1 Runde/Stufe. Auf höheren Schwierigkeitsgraden ist die Versteinerung permanent. Wenn sich der Magieanwender jedoch ausruht, werden alle Kreaturen, die von ihm versteinert wurden, wieder in ihren Normalzustand zurückversetzt, als ob Stein zu Fleisch auf sie gewirkt worden wäre.",
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

      description: "Der Magieanwender erschafft einen kleinen Ring aus Blitzen, der bei allen Kreaturen im Wirkungsbereich 1W6 SP für je zwei Zauberstufen (maximal 5W6) anrichtet. Wem der Reflexwurf misslingt, muss anschließend noch einen Willenswurf bestehen, oder er ist für eine Runde betäubt.",
    },
    {
      label: "Ghulhand",
      value: "ghoulTouch",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GHOUL_TOUCH",

      description: "Die Hand des Magieanwenders wird von einem unirdischen Licht umspielt. Gelingt dem Magieanwender ein erfolgreicher Berührungsangriff, muss das Opfer einen Zähigkeitswurf ausführen. Scheitert das Opfer, ist es gelähmt. Kreaturen, die durch den Zauber gelähmt wurden, geben giftige Dämpfe ab, die alle feindlichen Kreaturen in 1,50 m Radius betreffen. Diese erleiden -2 auf Fertigkeits-, Rettungs-, Angriffs- und Schadenswürfe.",
    },
    {
      label: "Schmieren",
      value: "grease",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GREASE",

      description: "Waberndes Öl und Schmiere füllen den Wirkungsbereich. Alle Kreaturen im Wirkungsbereich stürzen entweder zu Boden oder bewegen sich mit reduzierter Bewegungsrate.",
    },
    {
      label: "Großer Donnerschlag",
      value: "greatThunderclap",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GREAT_THUNDERCLAP",

      description: "Der Magieanwender erzeugt einen mächtigen Knall, ähnlich eines großen Donnerschlags bei einem Gewitter. Der Zauber hat drei Auswirkungen. Alle Kreaturen im Wirkungsbereich, denen ein Willenswurf misslingt, werden für 1 Runde betäubt. Alle Kreaturen im Wirkungsbereich, denen ein Zähigkeitswurf misslingt, werden für eine Runde taub, und alle Kreaturen im Wirkungsbereich, denen ein Reflexwurf misslingt, stürzen zu Boden.",
    },
    {
      label: "Mächtige Magie bannen",
      value: "greaterDispelling",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GREATER_DISPELLING",

      description: "Wird der Zauber auf eine Kreatur gewirkt, versucht er alle magischen Effekte und Zauber, die auf der Kreatur liegen, aufzuheben. Man kann den Zauber auch als Zauber mit Flächenwirkung einsetzen. In diesem Fall versucht er, bei jedem Ziel im Wirkungsbereich den mächtigsten Zauber aufzuheben. Um einen Zauber aufzuheben, muss dem Magieanwender ein Bannwurf mit 1W20 + 1 pro Zauberstufe (bis zu +15) gegen SG 11 + Zauberstufe des Zaubers oder Effekts, der gebannt werden soll, gelingen.",
    },
    {
      label: "Mächtige Magische Bresche",
      value: "greaterSpellBreach",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GREATER_SPELL_BREACH",

      description: "Der Zauber hebt bis zu vier Schutzzauber beim Ziel auf. Betroffen sind die Zauber: Schutzmantel, Kugel der Unverwundbarkeit, Steinhaut, Vorahnung, Schutz vor Elementen, Geisterhaftes und Ätherisches Antlitz, Magierrüstung, Schattenschild und Elementarschild. Des Weiteren wird die Zauberresistenz des Ziels für zehn Runden um 5 gesenkt.",
    },
    {
      label: "Windstoß",
      value: "gustOfWind",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_GUST_OF_WIND",

      description: "Der Zauber erzeugt einen Windstoß, der Kreaturen, die bei ihrem Rettungswurf versagen, niederwirft. Alle flächendeckenden, wolkenartigen Zauber im Wirkungsbereich, z. B. eine Todeswolke, werden zerstreut.",
    },
    {
      label: "Hammer der Götter",
      value: "hammerOfTheGods",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HAMMER_OF_THE_GODS",

      description: "Der Magieanwender ruft göttliches Licht vom Himmel herab. Alle Feinde im Wirkungsbereich erleiden 1W8 SP für je 2 Zauberstufen durch göttliche Energie. Der Maximalschaden beträgt 5W8 SP. Feinde, die einen erfolgreichen Willenswurf ausführen, nehmen nur den halben Schaden und vermeiden, für 1W6 Runden benommen zu sein.",
    },
    {
      label: "Leid",
      value: "harm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HARM",

      description: "Wenn dem Magieanwender ein erfolgreicher Berührungsangriff im Nahkampf gelingt, werden die Trefferpunkte des Ziels durch negative Energie auf 1W4 TP reduziert. Bei Untoten hat Leid genau die gegenteiligen Auswirkungen. Der Zauber heilt sie vollständig, statt ihnen Schaden zuzufügen.",
    },
    {
      label: "Tier festhalten",
      value: "holdAnimal",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HOLD_ANIMAL",

      description: "Das Ziel, bei dem es sich um ein Tier handeln muss, wird für die Wirkungsdauer des Zaubers gelähmt.",
    },
    {
      label: "Monster festhalten",
      value: "holdMonster",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HOLD_MONSTER",

      description: "Das Ziel wird für die Wirkungsdauer des Zaubers gelähmt.",
    },
    {
      label: "Person festhalten",
      value: "holdPerson",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HOLD_PERSON",

      description: "Das Ziel, bei dem es sich um ein humanoides Wesen handeln muss, wird für die Wirkungsdauer des Zaubers gelähmt.",
    },
    {
      label: "Horizikaul's Knall",
      value: "horizikaulsBoom",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HORIZIKAULS_BOOM",

      description: "Ihr bombardiert das Ziel mit einem extrem unangenehmen, schrillen Geräusch. Das Ziel erleidet 1W4 Punkte Schallschaden für je zwei Zauberstufen (maximal 5W4). Wenn den Opfern ein Willenswurf misslingt, sind sie für 1W4 Runden taub.",
    },
    {
      label: "Verdorren",
      value: "horridWilting",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_HORRID_WILTING",

      description: "Alle feindlichen Kreaturen im Wirkungsbereich erleiden durch Verdorrung 1W8 SP je Zauberstufe, mit einem Maximum von 25W8 SP.",
    },
    {
      label: "Eissturm",
      value: "iceStorm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ICE_STORM",

      description: "Alle Kreaturen im Wirkungsbereich erleiden 3W6 SP, wie durch Wuchtwaffen, und 2W6 Punkte Kälteschaden. Eissturm verursacht außerdem 1W6 weiteren Kälteschaden für je 3 Zauberstufen des Magieanwenders.",
    },
    {
      label: "Implosion",
      value: "implosion",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_IMPLOSION",

      description: "Im Wirkungsbereich entsteht ein Vortex der Zerstörung, der alle lebende Ziele, die bei ihrem Zähigkeitswurf scheitern, auseinanderreißt und sie so tötet.",
    },
    {
      label: "Flammende Wolke",
      value: "incendiaryCloud",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INCENDIARY_CLOUD",

      description: "Der Magieanwender erschafft eine Wolke aus Rauch und Glut, die bei allen Kreaturen im Wirkungsbereich 4W6 Punkte Feuerschaden je Runde anrichtet.",
    },
    {
      label: "Inferno",
      value: "inferno",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFERNO",

      description: "Das Ziel beginnt zu brennen und erleidet in jeder Runde 2W6 Punkte Feuerschaden.",
    },
    {
      label: "Madenbefall",
      value: "infestationOfMaggots",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFESTATION_OF_MAGGOTS",

      description: "Mit einem erfolgreichen Berührungsangriff infiziert der Magieanwender sein Opfer mit madenähnlichen Kreaturen, die in jeder Runde 1W4 Punkte vorübergehenden Konstitutionsschaden verursachen. In jeder Runde steht dem Opfer ein neuer Zähigkeitswurf zu. Der Zauber endet, sobald ein Zähigkeitswurf gelingt.",
    },
    {
      label: "Kritische Wunden verursachen",
      value: "inflictCriticalWounds",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFLICT_CRITICAL_WOUNDS",

      description: "Wenn dem Magieanwender ein Berührungsangriff gegen sein Opfer gelingt, erleidet es 4W8 SP + 1 SP je Zauberstufe (maximal 4W8 + 20). Auf Untote haben Zauber dieser Art die gegenteilige Wirkung. Sie heilen sie um die entsprechende Menge an Trefferpunkten, statt ihnen Schaden zuzufügen.",
    },
    {
      label: "Leichte Wunden verursachen",
      value: "inflictLightWounds",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFLICT_LIGHT_WOUNDS",

      description: "Wenn dem Magieanwender ein Berührungsangriff gegen sein Opfer gelingt, erleidet es 1W8 SP + 1 SP je Zauberstufe (maximal 1W8 + 5). Auf Untote haben Zauber dieser Art die gegenteilige Wirkung. Sie heilen sie um die entsprechende Menge an Trefferpunkten, statt ihnen Schaden zuzufügen.",
    },
    {
      label: "Kleinere Wunde verursachen",
      value: "inflictMinorWounds",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFLICT_MINOR_WOUNDS",

      description: "Wenn dem Magieanwender ein Berührungsangriff gegen sein Opfer gelingt, erleidet es 1 Schadenspunkt. Auf Untote haben Zauber dieser Art die gegenteilige Wirkung. Sie heilen sie um die entsprechende Menge an Trefferpunkten, statt ihnen Schaden zuzufügen.",
    },
    {
      label: "Mittelschwere Wunden verursachen",
      value: "inflictModerateWounds",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFLICT_MODERATE_WOUNDS",

      description: "Wenn dem Magieanwender ein Berührungsangriff gegen sein Opfer gelingt, erleidet es 2W8 SP + 1 SP je Zauberstufe (maximal 2W8 + 10). Auf Untote haben Zauber dieser Art die gegenteilige Wirkung. Sie heilen sie um die entsprechende Menge an Trefferpunkten, statt ihnen Schaden zuzufügen.",
    },
    {
      label: "Schwere Wunden verursachen",
      value: "inflictSeriousWounds",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_INFLICT_SERIOUS_WOUNDS",

      description: "Wenn dem Magieanwender ein Berührungsangriff gegen sein Opfer gelingt, erleidet es 3W8 SP + 1 SP je Zauberstufe (maximal 3W8 + 15). Auf Untote haben Zauber dieser Art die gegenteilige Wirkung. Sie heilen sie um die entsprechende Menge an Trefferpunkten, statt ihnen Schaden zuzufügen.",
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

      description: "Eine bestimmte Anzahl an Energiegeschossen erscheint (eines pro Zauberstufe, maximal 20 Stück) und diese treffen willkürlich ausgewählte Feinde im Wirkungsbereich. Wenn mehr Kreaturen als Geschosse vorhanden sind, nehmen nur die nächststehenden Kreaturen Schaden. Gibt es mehr Geschosse als Kreaturen, wird eine Kreatur von mehreren Geschossen getroffen. Jedes Geschoss richtet 2W6 SP an.",
    },
    {
      label: "Issacs Schwacher Geschosshagel",
      value: "isaacsLesserMissileStorm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_ISAACS_LESSER_MISSILE_STORM",

      description: "Je Zauberstufe taucht ein magisches Geschoss auf (maximal 10 Stück) und schlägt bei einem zufällig ausgewählten Feind im Wirkungsbereich ein. Wenn mehr Kreaturen als Geschosse anwesend sind, werden nur die nächststehenden Kreaturen betroffen. Gibt es mehr Geschosse als Kreaturen, wird eine Kreatur von mehreren Geschossen getroffen. Jedes Geschoss richtet 1W6 SP an.",
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

      description: "Wird der Zauber auf eine Kreatur gewirkt, versucht er alle magischen Effekte und Zauber, die auf der Kreatur liegen, aufzuheben. Man kann den Zauber auch als Zauber mit Flächenwirkung einsetzen. In diesem Fall versucht er, bei jedem Ziel im Wirkungsbereich den mächtigsten Zauber aufzuheben. Um einen Zauber aufzuheben, muss dem Magieanwender ein Bannwurf mit 1W20 +1 pro Zauberstufe (bis zu +5) gegen SG 11 + Zauberstufe des Zaubers oder Effekts, der gebannt werden soll, gelingen.",
    },
    {
      label: "Schwache Magische Bresche",
      value: "lesserSpellBreach",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_LESSER_SPELL_BREACH",

      description: "Der Zauber hebt bis zu zwei Schutzzauber beim Ziel auf. Betroffen sind auch die Zauber: Schutzmantel, Kugel der Unverwundbarkeit, Steinhaut, Vorahnung, Schutz vor Elementen, Geisterhaftes und Ätherisches Antlitz, Magierrüstung, Schattenschild und Elementarschild. Des Weiteren wird die Zauberresistenz des Ziels für 10 Runden um 3 reduziert.",
    },
    {
      label: "Licht",
      value: "light",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_LIGHT",

      description: "Handelt es sich beim Ziel des Zaubers um eine Kreatur, erschafft er eine kleine Lichtquelle über deren Kopf. Das Licht bewegt sich mit der Kreatur und kann ein kleines Gebiet erhellen. Der Zauber kann auch auf einen Gegenstand gewirkt werden, mit dem sich der Charakter ausrüsten kann. Solange die Wirkung des Zaubers anhält, dient dieser Gegenstand dann als natürliche Lichtquelle.",
    },
    {
      label: "Blitz",
      value: "lightningBolt",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_LIGHTNING_BOLT",

      description: "Aus den Fingerspitzen des Magiers schießt ein Blitz und trifft alle Kreaturen, die sich in einer geraden Linie vor dem Magieanwender befinden. Alle im Wirkungsbereich erleiden 1W6 Punkte Elektrizitätsschaden je Zauberstufe mit einem Maximum von 10W6 SP.",
    },
    {
      label: "Magisches Geschoss",
      value: "magicMissile",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MAGIC_MISSILE",

      description: "Der Magieanwender erzeugt ein magisches Geschoss aus reiner Energie, welches das gewählte Ziel automatisch trifft und 1W4+1 Schadenspunkte verursacht. Der Zauber erzeugt auf der 1. Stufe ein Magisches Geschoss und je 2 zusätzliche Zauberstufen ein weiteres Magisches Geschoss, bis zu maximal fünf Magischen Geschossen auf der 9. Stufe.",
    },
    {
      label: "Massenblind- und Taubheit verursachen",
      value: "massBlindnessAndDeafness",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MASS_BLINDNESS_AND_DEAFNESS",

      description: "Alle Feinde in einem Radius von 3 m werden blind und taub.",
    },
    {
      label: "Massenbezauberung",
      value: "massCharm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MASS_CHARM",

      description: "Der Ruf des Magieanwenders verbessert sich für alle nicht verbündeten Kreaturen im Wirkungsbereich um 50%. Der Zauberwirkende kann eine Anzahl von Kreaturen in der Höhe des maximal Doppelten seiner eigenen Trefferpunkte bezaubern.",
    },
    {
      label: "Melfs Säurepfeil",
      value: "melfsAcidArrow",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MELFS_ACID_ARROW",

      description: "Der Magieanwender erzeugt ein magisches Geschoss aus Säure, das auf eine Kreatur zufliegt. Der Zauber richtet zuerst 3W6 SP an und dann bis zum Ende der Wirkungsdauer 1W6 SP je Runde.",
    },
    {
      label: "Mestils Säureodem",
      value: "mestilsAcidBreath",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MESTILS_ACID_BREATH",

      description: "Ihr atmet einen Nebel aus feinen Säuretröpfchen in einem kegelförmigen Wirkungsbereich aus. Alle Kreaturen im Wirkungsbereich erleiden 1W6 Punkte Säureschaden pro Zauberstufe (maximal 10W6).",
    },
    {
      label: "Meteoritenschwarm",
      value: "meteorSwarm",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_METEOR_SWARM",

      description: "Im Wirkungsbereich schlagen tödliche Meteore auf, die in Feuerbällen explodieren. Alle Kreaturen im Wirkungsbereich erleiden 20W6 SP. Kreaturen in einer Entfernung von maximal 1,50 m vom Magieanwender erleiden keinen Schaden.",
    },
    {
      label: "Gedankennebel",
      value: "mindFog",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_MIND_FOG",

      description: "Der Zauber erschafft eine bläulich schimmernde Nebelbank. Der Nebel stiehlt allen, die sich in seinem Wirkungsbereich aufhalten oder ihn betreten, die Willenskraft. Die Opfer erleiden -10 auf alle Willenswürfe gegen Zauber und Effekte, die den Geist beeinflussen. Der Malus besteht so lange, wie sich die Opfer im Nebel aufhalten. Sobald sie den Wirkungsbereich des Nebels verlassen, verfliegt der Malus innerhalb von 2W6 Runden.",
    },
    {
      label: "Negativer Energieschlag",
      value: "negativeEnergyBurst",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_NEGATIVE_ENERGY_BURST",

      description: "Alle Kreaturen im Wirkungsbereich erleiden 1W8 SP durch negative Energie, +1 SP pro Zauberstufe (bis maximal 1W8 +20). Des Weiteren verlieren alle Kreaturen im Wirkungsbereich 1 Stärkepunkt für je 4 Zauberstufen des Magieanwenders. Auf Untote hat dieser Zauber den entgegengesetzten Effekt. Sie werden geheilt.",
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

      description: "Der Zauber umhüllt eine normale Waffe mit Flammen. Diese richtet +1W6 Punkte Feuerschaden +1 Punkt für je 2 Zauberstufen (maximal +10) an. Ihr könnt den Zauber entweder direkt auf eine Waffe wirken oder auf eine Kreatur, die sich mit einer Waffe ausgerüstet hat.",
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

      description: "Der Zauber erschafft einen Riss in den Ebenen in Form eines schwarzen Zweihänders, der an der Seite des Magieanwenders kämpft. Die Klinge kann durch körperliche Angriffe nicht beschädigt werden, sie kann jedoch durch Magie bannen und ähnliche Effekte gebannt werden. Das Schwert hat einen Verbesserungsbonus in der Höhe des IN-Modifikators (Magier) bzw. CH-Modifikators (Hexenmeister) bis maximal +20, um Schadensreduzierung zu überwinden. Der Magieanwender muss sich auf den Zauber konzentrieren. Wenn er andere Zauber wirkt oder eine andere Aktion außer sich zu bewegen oder zu sprechen ausführt, während er den Zauber aufrecht erhält, kann ein Wurf auf Konzentration fehlschlagen und der Zauber enden.",
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

      description: "Der Magieanwender beschwört ein Abbild des absoluten Schreckens aus dem Unterbewusstsein einer Kreatur herauf. Wenn dem Ziel ein Willenswurf gelingt, erkennt es, dass das Abbild nicht real ist und vermeidet alle Auswirkungen des Zaubers. Scheitert der Willenswurf, muss das Opfer einen Zähigkeitswurf bestehen oder sterben. Selbst wenn der Zähigkeitswurf gelingt, erleidet das Opfer 3W6 Schadenspunkte.",
    },
    {
      label: "Vergiften",
      value: "poison",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_POISON",

      description: "Wenn dem Magieanwender ein Berührungsangriff im Nahkampf gelingt, muss das Ziel einen Zähigkeitswurf machen. Scheitert dieser, erleidet es Schaden durch Skorpiongift (Erst- und Zweitschaden je 1W6 Stärke).",
    },
    {
      label: "Wort der Macht: Tod",
      value: "powerWordKill",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_POWER_WORD_KILL",

      description: "Der Zauber kann entweder auf eine Kreatur gezielt werden oder als Zauber mit Flächenwirkung eingesetzt werden. Wird er auf eine Kreatur gezielt, tötet er sie augenblicklich, falls sie nicht mehr als 100 Trefferpunkte hat. Als Zauber mit Flächenwirkung tötet er alle Kreaturen im Wirkungsbereich, die maximal 20 Trefferpunkte haben, allerdings maximal Kreaturen mit insgesamt 200 Trefferpunkten.",
    },
    {
      label: "Wort der Macht: Betäubung",
      value: "powerWordStun",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_POWER_WORD_STUN",

      description: "Das Ziel wird automatisch betäubt. Die Dauer der Betäubung hängt von den Trefferpunkten des Ziels ab:\nUnter 50 Trefferpunkten: 4W4 Runden\n51-100 Trefferpunkte: 2W4 Runden\n101-150 Trefferpunkte: 1W4 Runden",
    },
    {
      label: "Stachelfeuer",
      value: "quillfire",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_QUILLFIRE",

      description: "Der Magieanwender verschießt Giftstacheln auf ein Ziel, die 1W8 SP + 1 SP für je zwei Zauberstufen (maximal 1W8 + 5 SP) anrichten. Wenn dem Ziel ein Zähigkeitswurf misslingt, wird es von den Auswirkungen des Skorpiongifts betroffen.",
    },
    {
      label: "Erschrecken",
      value: "scare",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SCARE",

      description: "Eine Zielkreatur mit maximal 5 TW wird von Furcht betroffen. Sie erleidet -2 auf Moral-, Angriffs-, Schadens- und Rettungswürfe.",
    },
    {
      label: "Schillernder Ball",
      value: "scintillatingSphere",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SCINTILLATING_SPHERE",

      description: "Der Magieanwender verschießt ein mit Elektrizität knisterndes Projektil, das bei allen Kreaturen im Wirkungsbereich 1W6 Punkte Elektrizitätsschaden pro Zauberstufe (maximal 10W6) verursacht.",
    },
    {
      label: "Gleißendes Licht",
      value: "searingLight",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SEARING_LIGHT",

      description: "Ein gleißender Strahl sengend heißen Lichts schießt auf das Ziel zu. Der Schaden hängt von der Art des Ziels ab:\nUntoter: 1W8 SP je Zauberstufe (Maximum 10W8)\nKonstrukt: 1W6 SP je 2 Zauberstufen (Maximum 5W6)\nAndere: 1W8 je 2 Zauberstufen (Maximum 5W8)",
    },
    {
      label: "Stille",
      value: "silence",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SILENCE",

      description: "Der Zauber erschafft rund um die Zielkreatur ein Gebiet der Stille. In dem Wirkungsbereich können keine Zauber mit verbalen (V) Komponenten gewirkt werden. Wenn der Zauber auf einen Verbündeten gewirkt wird, muss keine Zauberresistenz überwunden werden, und das Ziel muss auch keinen Rettungswurf machen.",
    },
    {
      label: "Schneller Tod",
      value: "slayLiving",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SLAY_LIVING",

      description: "Wenn dem Ziel ein Zähigkeitswurf misslingt, stirbt es. Selbst bei einem erfolgreichen Zähigkeitswurf erleidet das Opfer 3W6 SP durch negative Energie + 1 SP je Zauberstufe.",
    },
    {
      label: "Schlaf",
      value: "sleep",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SLEEP",

      description: "4 +1W4 TW an Kreaturen fallen in einen komatösen Schlaf, beginnend mit den Kreaturen, die die wenigsten TW haben. Kreaturen mit 5 TW oder mehr sind dagegen immun.",
    },
    {
      label: "Verlangsamen",
      value: "slow",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SLOW",

      description: "Feindliche Kreaturen im Wirkungsbereich, die bei ihrem Willenswurf scheitern, verlieren einen Angriff je Runde und haben eine um 50% reduzierte Bewegungsrate.",
    },
    {
      label: "Geräuschexplosion",
      value: "soundBurst",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SOUND_BURST",

      description: "Alle Kreaturen im Wirkungsbereich erleiden 1W8 SP und müssen einen Willenswurf machen. Wer scheitert, ist für 2 Runden betäubt.",
    },
    {
      label: "Dornenwuchs",
      value: "spikeGrowth",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SPIKE_GROWTH",

      description: "Der Wirkungsbereich wird von kleinen Dornen überzogen. Jede Kreatur im Wirkungsbereich erleidet 1W4 SP je Runde. Die Dornen können den Füssen schwere Verletzungen zufügen, wodurch die betroffene Kreatur für einen Tag eine reduzierte Bewegungsrate hat, selbst nachdem sie den Wirkungsbereich verlassen hat.",
    },
    {
      label: "Stinkende Wolke",
      value: "stinkingCloud",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_STINKING_CLOUD",

      description: "Alle Kreaturen im Wirkungsbereich sind benommen. Die Wirkung hält so lange an, wie sich die Kreaturen im Wirkungsbereich aufhalten. Verlässt ein Opfer den Wirkungsbereich, so hält die Benommenheit noch für 1 Runde an.",
    },
    {
      label: "Stein zu Fleisch",
      value: "stoneToFlesh",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_STONE_TO_FLESH",

      description: "Der Zauber verwandelt eine versteinerte Person oder Kreatur wieder zu Fleisch. Dadurch beginnt sie wieder zu leben, und auch ihre Besitztümer werden wieder zugänglich.",
    },
    {
      label: "Steinerner Griff",
      value: "stonehold",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_STONEHOLD",

      description: "Der Zauber erschafft eine Wolke, die Kreaturen im Wirkungsbereich lähmt, indem er sie für 1W6 Runden in Stein einschließt.",
    },
    {
      label: "Sturm der Vergeltung",
      value: "stormOfVengeance",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_STORM_OF_VENGEANCE",

      description: "Im Gebiet rund um den Magieanwender geht ein Säureregen nieder, in dem ein Inferno aus Blitzen tobt. Alle Feinde im Wirkungsbereich erleiden in jeder Runde 3W6 Punkte Säureschaden. Jene Kreaturen, denen ein Reflexwurf misslingt, erleiden zusätzlich 3W6 Punkte Elektrizitätsschaden und sind eine Runde lang betäubt.",
    },
    {
      label: "Sonnenstrahl",
      value: "sunbeam",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SUNBEAM",

      description: "Der Magieanwender beschwört eine gleißende Kugel göttlichen Lichts, um alle im Wirkungsbereich zu blenden und zu verbrennen. Untote erleiden durch göttliche Energie 1W6 SP je Stufe des Magieanwenders bis zu einem Maximum von 20W6 SP. Alle anderen Kreaturen erleiden 3W6 SP durch göttliche Energie und werden für 3 Runden geblendet. Bei einem erfolgreichen Reflexwurf erleiden Untote halben Schaden, und andere Kreaturen werden nicht geblendet.",
    },
    {
      label: "Sonnenfeuer",
      value: "sunburst",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_SUNBURST",

      description: "Eine gleißende Explosion, deren Zentrum der Anwender genau platzieren kann, verursacht 1W6 SP je Zauberstufe bei allen Untoten (maximal 25W6). Andere Kreaturen erleiden nur 6W6 SP. Vampire, die bei einem Reflexwurf versagen, werden augenblicklich zerstört. Alle Feinde im Wirkungsbereich, die bei einem Reflexwurf versagen, werden geblendet. Die Blindheit kann nur durch magische Mittel geheilt werden.",
    },
    {
      label: "Tashas Fürchterlicher Lachanfall",
      value: "tashasHideousLaughter",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_TASHAS_HIDEOUS_LAUGHTER",

      description: "Wenn dem Ziel ein Rettungswurf misslingt, beginnt es hysterisch zu lachen. Das Opfer kann sich nicht verteidigen, während es von dem Zauber betroffen ist. Eine Kreatur, die einer anderen Volksgruppe angehört als der Magieanwender, erhält +4 auf ihren Rettungswurf, weil der Zauber sozusagen an den Sinn für Humor des Opfers appelliert und dieser sich oft von Volk zu Volk dramatisch unterscheidet.",
    },
    {
      label: "Tod den Untoten",
      value: "undeathToDeath",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_UNDEATH_TO_DEATH",

      description: "Der Zauber vernichtet 1W4 TW untote Kreaturen pro Zauberstufe (maximal 20W4). Die Kreaturen mit den niedrigsten TW sind zuerst betroffen. Von mehreren Kreaturen mit der gleichen Anzahl TW sind jene zuerst betroffen, die dem Zentrum des Wirkungsbereichs am nächsten stehen.",
    },
    {
      label: "Ewiger Feind der Untoten",
      value: "undeathsEternalFoe",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_UNDEATHS_ETERNAL_FOE",

      description: "Alle Verbündeten im Wirkungsbereich erhalten folgende Immunitäten: Immunität gegen Schaden durch negative Energie, Immunität gegen Energie-/Stufenverlust, Immunität gegen Attributverlust, Immunität gegen Gift, Immunität gegen Krankheiten und einen Ablenkungsbonus von +4 auf die RK.",
    },
    {
      label: "Vampirgriff",
      value: "vampiricTouch",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_VAMPIRIC_TOUCH",

      description: "Wenn dem Magieanwender ein Berührungsangriff im Nahkampf gelingt, erleidet das Ziel 1W6 SP für je 2 Zauberstufen (maximal 10W6). Der Schaden wird daraufhin als temporärer Bonus den Trefferpunkten des Magieanwenders gutgeschrieben. Es ist unmöglich, mehr temporäre Trefferpunkte zu erhalten, als notwendig wären, um das Ziel zu töten (Aktuelle Trefferpunkte des Ziels +10).",
    },
    {
      label: "Wehgeschrei der Todesfee",
      value: "wailOfTheBanshee",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_WAIL_OF_THE_BANSHEE",

      description: "Alle Feinde im Wirkungsbereich, die bei einem Zähigkeitswurf scheitern, sterben. Es wird maximal ein Gegner je Zauberstufe betroffen.",
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

      description: "Klebrige Fäden bedecken den Wirkungsbereich und verstricken alle, die bei ihrem Reflexwurf scheitern. Kreaturen, deren Reflexwurf erfolgreich war, können sich mit einer reduzierten Bewegungsrate bewegen. Die Bewegungsrate hängt von der Stärke ab.",
    },
    {
      label: "Unheimliches Schicksal",
      value: "weird",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_WEIRD",

      description: "Vor den Feinden im Wirkungsbereich erhebt sich ein Furcht erregendes Phantom. Jeder Feind im Wirkungsbereich muss einen Willenswurf schaffen. Wer scheitert, wird vom Phantom berührt und muss einen Zähigkeitswurf bestehen. Wer erneut scheitert, stirbt. Auch wenn man beim Zähigkeitswurf erfolgreich ist, erleidet man 3W6 SP. Kreaturen mit 4 TW oder weniger sterben automatisch. Ihnen steht überhaupt kein Rettungswurf zu.",
    },
    {
      label: "Wort des Glaubens",
      value: "wordOfFaith",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_WORD_OF_FAITH",

      description: "Eine Welle göttlicher Energie trifft alle feindlichen Kreaturen im Wirkungsbereich. Alle Feinde im Wirkungsbereich sind für 1 Runde je 2 Zauberstufen betäubt. Kreaturen mit 4 oder weniger Trefferwürfeln werden automatisch getötet. Alle feindlichen, herbeigezauberten Kreaturen kehren auf ihre Heimatebene zurück.",
    },
    {
      label: "Verletzendes Flüstern",
      value: "woundingWhispers",
      nwscriptValue: "IP_CONST_ONHIT_CASTSPELL_WOUNDING_WHISPERS",

      description: "Der Magieanwender wird von einem magischen Flüstern umhüllt, das jeder Kreatur, die ihm Schaden zufügt, einen Schallschaden von 1W6 +1 Punkte pro Stufe zufügt.",
    },
  ])
