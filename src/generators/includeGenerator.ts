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
