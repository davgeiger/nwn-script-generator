# NWN Skript Generator

Der **NWN Skript Generator** ist eine Anwendung zur Erstellung von Level-Up-Skripten für **Neverwinter Nights: Enhanced Edition**.

Mit der Anwendung können Items definiert werden, die sich abhängig vom Charakterlevel weiterentwickeln. Die gewünschten Item-Eigenschaften werden über ein Tier-System konfiguriert und anschließend automatisch als NWScript-Skripte generiert.

Die Anwendung steht neben der Webseite auch als Windows-Desktopanwendung auf Basis von Tauri zur Verfügung.

## Features

- Verwaltung unterschiedlicher Charakter-Builds
- Globale Verwaltung der verwendeten Items
- Zuordnung von Items und Startleveln zu einzelnen Builds
- Frei konfigurierbare Level-Tiers
- Item-Eigenschaften hinzufügen, ersetzen und entfernen
- Automatische Generierung der benötigten NWScript-Skripte
- Anzeige und Export der generierten `.nss`-Dateien
- Direkte Kompilierung der Skripte mit `nwnsc`
- Automatische Erkennung einer Steam-Installation von Neverwinter Nights
- Automatische Erkennung des NWN-Benutzerverzeichnisses bei Verwendung des Standardpfads

## Build und Item-Zuordnung

Für unterschiedliche Spielweisen können eigene Builds angelegt werden, beispielsweise für Kämpfer, Magier oder Schurken.

Jedem Build können die global verfügbaren Items zugeordnet werden. Dabei wird für jedes Item festgelegt, ab welchem Charakterlevel es zur Verfügung stehen soll.

![Build](docs/images/build.png)

![Item-Zuordnung](docs/images/item-assignment.png)

## Item Editor

Im Item Editor werden die Items verwaltet, die anschließend in allen Builds verwendet werden können.

Für jedes Item werden unter anderem folgende Angaben festgelegt:

- **Name** – Anzeigename innerhalb des Skript Generators
- **ResRef** – ResRef des im NWN Toolset erstellten Blueprints
- **Tag** – eindeutiger Tag, über den das Item im Spiel identifiziert wird
- **Item-Typ** – beispielsweise Waffe, Schild oder Rüstung

![Item Editor](docs/images/item-editor.png)

### Blueprints

Die eigentlichen Item-Blueprints müssen im **Neverwinter Nights Toolset** erstellt werden.

ResRef und Tag im Skript Generator müssen mit den entsprechenden Blueprints übereinstimmen. Die benötigten Blueprints müssen im `development`-Verzeichnis des NWN-Benutzerverzeichnisses vorhanden sein.

## Tier Editor

Im Tier Editor wird festgelegt, wie sich die Items eines Builds mit steigendem Charakterlevel entwickeln.

Jedes Tier wird einem Charakterlevel zugeordnet. Dadurch kann beispielsweise eine Progression wie

- Tier 1 → Level 3
- Tier 2 → Level 5
- Tier 3 → Level 8

erstellt werden.

Alternativ können Tiers auch für einzelne aufeinanderfolgende Level angelegt werden. Möglich sind bis zu 39 Tiers für die Charakterlevel bis Level 40.

Für die Item-Eigenschaften stehen drei grundlegende Aktionen zur Verfügung:

- **Hinzufügen**
- **Ersetzen**
- **Entfernen**

Der Editor zeigt außerdem den aktuellen Zustand eines Items im jeweiligen Tier an.

![Tier Editor](docs/images/tier-editor.png)

## Skripte

Aus der konfigurierten Item-Progression erzeugt die Anwendung die benötigten NWScript-Dateien.

Die generierten Skripte können direkt in der Anwendung angezeigt und kopiert oder als `.nss`-Dateien exportiert werden.

![Skripte](docs/images/scripts.png)

Die Skriptvorschau ermöglicht es, den generierten NWScript-Code vor der weiteren Verwendung zu kontrollieren.

![Skriptvorschau](docs/images/script-preview.png)


### Generierte Skripte

Der Generator erstellt mehrere Skripte mit unterschiedlichen Aufgaben.

#### `inc_lvlitems.nss`

Dieses Include enthält die zentrale Logik der konfigurierten Item-Progression.

Darin wird unter anderem festgelegt:

- welche Items zu einem Build gehören,
- ab welchem Charakterlevel ein Item verfügbar ist,
- welche Eigenschaften in den einzelnen Tiers hinzugefügt, ersetzt oder entfernt werden.

Das Include wird von den anderen generierten Skripten verwendet und nicht direkt ausgeführt.

#### Level-Up-Skripte

Für die Originalkampagne und **Hordes of the Underdark** stellt der Generator angepasste Versionen der von den Kampagnenmodulen verwendeten Level-Up-Skripte bereit:

- `m1q0_levelup.nss`
- `nw_o0_levelup.nss`
- `x1_playerlevelup.nss`

Die Skripte behalten die ursprüngliche Level-Up-Logik der Kampagne bei und ergänzen den Aufruf der generierten Item-Progression.

Werden die kompilierten `.ncs`-Dateien im `development`-Verzeichnis abgelegt, werden die gleichnamigen Skripte der Kampagnenmodule zur Laufzeit durch diese Versionen ersetzt. Die Kampagnenmodule selbst müssen daher nicht im Toolset angepasst werden.

Welches Level-Up-Skript verwendet wird, hängt vom jeweiligen Kampagnenmodul ab.

#### `lvl_update_items.nss`

Dieses Skript aktualisiert die verwalteten Items entsprechend dem aktuellen Charakterlevel.

Es kann unabhängig von einem Level-Up manuell ausgeführt werden. Dadurch lässt sich die Item-Progression beispielsweise nach Änderungen an der Konfiguration erneut auf einen bestehenden Charakter anwenden.

Dazu muss zunächst der Debug-Modus von Neverwinter Nights aktiviert werden:

```text
DebugMode 1
```

Anschließend kann das Skript über die Konsole ausgeführt werden:

```text
dm_runscript lvl_update_items
```

Das Skript prüft die für den Charakter vorgesehenen Items und wendet die bis zum aktuellen Level erreichte Progression an.

`lvl_update_items` eignet sich insbesondere, um Änderungen an den generierten Item-Eigenschaften zu testen oder auf einen bereits bestehenden Spielstand anzuwenden.

#### `lvl_rebuild.nss`

`lvl_rebuild` erstellt die vom Generator verwalteten Items vollständig neu.

Ausführung:

```text
dm_runscript lvl_rebuild
```

Dabei werden die vorhandenen verwalteten Items entfernt und anhand ihrer im Toolset erstellten Blueprints neu erzeugt. Anschließend wird die zum aktuellen Charakterlevel gehörende Progression erneut angewendet.

Das Skript ist insbesondere dann hilfreich, wenn die zugrunde liegenden `.uti`-Blueprints geändert wurden. Änderungen am Blueprint werden von `lvl_update_items` nicht automatisch auf ein bereits vorhandenes Item übertragen.

**Achtung:** Beim Rebuild werden die vorhandenen verwalteten Items durch neu erzeugte Exemplare ersetzt. Nachträgliche Änderungen am vorhandenen Item gehen dadurch verloren.

#### Update oder Rebuild?

Für Änderungen an der über den Generator definierten Item-Progression genügt normalerweise:

```text
dm_runscript lvl_update_items
```

Wurden dagegen die eigentlichen `.uti`-Blueprints verändert, sollte verwendet werden:

```text
dm_runscript lvl_rebuild
```

Kurz zusammengefasst:

- **`lvl_update_items`** – vorhandene Items auf die aktuelle Progression aktualisieren
- **`lvl_rebuild`** – Items aus den Blueprints neu erstellen und anschließend die aktuelle Progression anwenden

### Kompilierte Skripte

Neverwinter Nights führt die kompilierte `.ncs`-Datei aus. Änderungen an einer `.nss`-Datei werden daher erst wirksam, nachdem das Skript erneut kompiliert wurde.

Die Desktopanwendung kann diese Kompilierung direkt mit `nwnsc` durchführen und die erzeugten Dateien im `development`-Verzeichnis des NWN-Benutzerverzeichnisses ablegen.

## Desktopanwendung

Die Tauri-Desktopversion kann die generierten Skripte direkt mit `nwnsc` kompilieren und die erzeugten Dateien im `development`-Ordner des NWN-Benutzerverzeichnisses ablegen.

In den Einstellungen werden dafür zwei Pfade verwendet:

### NWN-Installation

Installationsverzeichnis von **Neverwinter Nights: Enhanced Edition**.

Bei einer Steam-Installation versucht die Anwendung, das Installationsverzeichnis automatisch zu erkennen.

### NWN-Benutzerverzeichnis

Das Benutzerverzeichnis enthält unter anderem Spielstände, Module und den `development`-Ordner.

Befindet sich das NWN-Benutzerverzeichnis am Standardort unter Dokumente, kann es automatisch erkannt werden.

## Installation

Die aktuelle Windows-Version befindet sich unter **Releases**.

Für die normale Installation wird der NSIS-Installer empfohlen:

`NWN Skript Generator_1.0.0_x64-setup.exe`

Nach der Installation kann der NWN Skript Generator wie eine normale Windows-Anwendung gestartet werden.

## Entwicklung

### Voraussetzungen

Für die Entwicklung werden unter anderem benötigt:

- Node.js
- Rust
- Tauri

Abhängigkeiten installieren:

```bash
npm install
```

Entwicklungsmodus starten:

```bash
npm run tauri dev
```

Release-Version erstellen:

```bash
npm run tauri build
```

Die erzeugten Windows-Installer befinden sich anschließend unter:

```text
src-tauri/target/release/bundle/
```

## Hinweise

Der NWN Skript Generator ist ein unabhängiges Fan-/Community-Projekt für **Neverwinter Nights: Enhanced Edition**.

Neverwinter Nights und zugehörige Bezeichnungen und Marken gehören ihren jeweiligen Rechteinhabern.

## Lizenz

Dieses Projekt ist unter der **GNU General Public License v3.0 (GPL-3.0-only)** lizenziert.

Siehe [LICENSE](LICENSE) für die vollständigen Lizenzbedingungen.
