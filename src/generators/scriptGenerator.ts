import { generateTierCode } from "@/generators/tierGenerator"
import { indent } from "@/generators/utils"
import type { ProjectConfig } from "@/types/config"

export function generateScript(config: ProjectConfig): string {
  const tierBlocks = config.tiers
    .map((tier) => generateTierCode(tier, config.items))
    .filter((code) => code.length > 0)

  const tiersCode = tierBlocks.join("\n\n")

  return [
    "void UpdateLevelItems(object oPC)",
    "{",
    indent("int nLevel = GetHitDice(oPC);"),
    "",
    indent(tiersCode),
    "}",
  ].join("\n")
}
