import { inventorySlotMap } from "@/data/itemSlots"
import type { ProjectConfig } from "@/types/config"
import type { LevelItem } from "@/types/items"

import { getActiveBuild, getBuildItems } from "@/resolvers/buildResolver"

function generateEquipmentState(item: LevelItem, index: number): string {
  if (item.slot === "ring") {
    return [
      `    int bItem${index}Left =`,
      `        GetTag(GetItemInSlot(INVENTORY_SLOT_LEFTRING, oPC)) == "${item.tag}";`,
      "",
      `    int bItem${index}Right =`,
      `        GetTag(GetItemInSlot(INVENTORY_SLOT_RIGHTRING, oPC)) == "${item.tag}";`,
    ].join("\n")
  }

  const slot = inventorySlotMap[item.slot]

  if (!slot) {
    return ""
  }

  return [
    `    int bItem${index} =`,
    `        GetTag(GetItemInSlot(${slot}, oPC)) == "${item.tag}";`,
  ].join("\n")
}

function generateRestoreParameters(item: LevelItem, index: number): string[] {
  if (item.slot === "ring") {
    return [`    int bItem${index}Left`, `    int bItem${index}Right`]
  }

  return [`    int bItem${index}`]
}

function generateRestoreCode(item: LevelItem, index: number): string {
  if (item.slot === "ring") {
    return [
      `    if (bItem${index}Left)`,
      `        EquipItemByTag(oPC, "${item.tag}", INVENTORY_SLOT_LEFTRING);`,
      "",
      `    if (bItem${index}Right)`,
      `        EquipItemByTag(oPC, "${item.tag}", INVENTORY_SLOT_RIGHTRING);`,
    ].join("\n")
  }

  const slot = inventorySlotMap[item.slot]

  if (!slot) {
    return ""
  }

  return [
    `    if (bItem${index})`,
    `        EquipItemByTag(oPC, "${item.tag}", ${slot});`,
  ].join("\n")
}

function generateRestoreArguments(item: LevelItem, index: number): string[] {
  if (item.slot === "ring") {
    return [`            bItem${index}Left`, `            bItem${index}Right`]
  }

  return [`            bItem${index}`]
}

export function generateRebuildScript(config: ProjectConfig): string {
  const activeBuild = getActiveBuild(config)

  if (!activeBuild) {
    return ""
  }

  const items = getBuildItems(config, activeBuild)

  const equipmentStates = items
    .map((item, index) => generateEquipmentState(item, index + 1))
    .filter(Boolean)
    .join("\n\n")

  const restoreParameters = items
    .flatMap((item, index) => generateRestoreParameters(item, index + 1))
    .join(",\n")

  const restoreCode = items
    .map((item, index) => generateRestoreCode(item, index + 1))
    .filter(Boolean)
    .join("\n\n")

  const restoreArguments = items
    .flatMap((item, index) => generateRestoreArguments(item, index + 1))
    .join(",\n")

  return [
    '#include "inc_lvlitems"',
    "",
    "void EquipItemByTag(object oPC, string sTag, int nSlot)",
    "{",
    "    object oItem = GetItemPossessedBy(oPC, sTag);",
    "",
    "    if (GetIsObjectValid(oItem))",
    "    {",
    "        AssignCommand(oPC, ActionEquipItem(oItem, nSlot));",
    "    }",
    "}",
    "",
    "void RestoreLevelItemEquipment(",
    "    object oPC,",
    restoreParameters,
    ")",
    "{",
    restoreCode,
    "}",
    "",
    "void main()",
    "{",
    "    object oPC = GetFirstPC();",
    "",
    "    if (!GetIsObjectValid(oPC))",
    "    {",
    "        return;",
    "    }",
    "",
    "    // Merken, welche Leveling-Items momentan ausgerüstet sind.",
    equipmentStates,
    "",
    "    // Alte Leveling-Items entfernen.",
    "    RemoveLevelItems(oPC);",
    "",
    "    // Neue Items erstellen und aktualisieren.",
    "    DelayCommand(",
    "        0.2,",
    `        ExecuteScript("${config.scripts.updateItemsName}", oPC)`,
    "    );",
    "",
    "    // Vorherige Ausrüstung wiederherstellen.",
    "    DelayCommand(",
    "        0.4,",
    "        RestoreLevelItemEquipment(",
    "            oPC,",
    restoreArguments,
    "        )",
    "    );",
    "",
    "    SendMessageToPC(",
    "        oPC,",
    '        "Leveling-Ausrüstung wird neu erstellt."',
    "    );",
    "}",
  ].join("\n")
}
