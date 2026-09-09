import { indent } from "@/generators/utils"
import type { LevelItem } from "@/types/items"

export function generateItemGrantCode(
  item: LevelItem,
  itemVariable: string
): string {
  return [
    `// ${item.name}`,
    `object ${itemVariable} = GetPlayerItemByTag(oPC, "${item.tag}");`,
    "",
    `if (!GetIsObjectValid(${itemVariable}))`,
    "{",
    indent(`${itemVariable} = CreateItemOnObject("${item.resRef}", oPC);`),
    "}",
  ].join("\n")
}
