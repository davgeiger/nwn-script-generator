import { getActiveBuild, getBuildItems } from "@/resolvers/buildResolver"
import type { ProjectConfig } from "@/types/config"

export function generateLevelItemsInclude(config: ProjectConfig): string {
  const activeBuild = getActiveBuild(config)

  if (!activeBuild) {
    return ""
  }

  const items = getBuildItems(config, activeBuild)

  const removeItems = items
    .map((item) => `    RemoveLevelItem(oPC, "${item.tag}");`)
    .join("\n")

  return [
    "// inc_lvlitems.nss",
    "",
    "int LVL_CountItemProperties(object oItem, int nPropertyType)",
    "{",
    "    int nCount = 0;",
    "    itemproperty ip = GetFirstItemProperty(oItem);",
    "",
    "    while (GetIsItemPropertyValid(ip))",
    "    {",
    "        if (GetItemPropertyType(ip) == nPropertyType)",
    "        {",
    "            nCount++;",
    "        }",
    "",
    "        ip = GetNextItemProperty(oItem);",
    "    }",
    "",
    "    return nCount;",
    "}",
    "",
    "void LVL_PropertyWarning(",
    "    object oPC,",
    "    object oItem,",
    "    string sProperty",
    ")",
    "{",
    "    SendMessageToPC(",
    "        oPC,",
    '        "LVL ITEMS WARNUNG: "',
    "        + GetTag(oItem)",
    '        + " - "',
    "        + sProperty",
    '        + " konnte nicht gesetzt werden."',
    "    );",
    "}",
    "",
    "void LVL_ValidateItemProperty(",
    "    object oPC,",
    "    object oItem,",
    "    int nPropertyType,",
    "    string sProperty",
    ")",
    "{",
    "    int nCount = LVL_CountItemProperties(oItem, nPropertyType);",
    "",
    "    if (nCount == 0)",
    "    {",
    "        LVL_PropertyWarning(oPC, oItem, sProperty);",
    "    }",
    "}",
    "",
    "void RemoveLevelItem(object oPC, string sTag)",
    "{",
    "    object oItem = GetItemPossessedBy(oPC, sTag);",
    "",
    "    if (GetIsObjectValid(oItem))",
    "    {",
    "        DestroyObject(oItem);",
    "    }",
    "}",
    "",
    "void RemoveLevelItems(object oPC)",
    "{",
    removeItems,
    "}",
  ].join("\n")
}
