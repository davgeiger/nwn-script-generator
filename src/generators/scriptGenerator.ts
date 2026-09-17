import { generateResolvedTierCode } from "@/generators/tierGenerator"
import { indent } from "@/generators/utils"
import { resolveLevelState, resolveTierState } from "@/resolvers/tierResolver"
import type { ProjectConfig } from "@/types/config"
import { generateItemGrantCode } from "./itemGenerator"

import {
  getActiveBuild,
  getBuildItems,
  type ResolvedBuildItem,
} from "@/resolvers/buildResolver"

const getPlayerItemByTagFunction = [
  "object GetPlayerItemByTag(object oPC, string sTag)",
  "{",
  indent("object oItem = GetFirstItemInInventory(oPC);"),
  "",
  indent("while (GetIsObjectValid(oItem))"),
  indent("{"),
  indent("if (GetTag(oItem) == sTag)", 8),
  indent("{", 8),
  indent("return oItem;", 12),
  indent("}", 8),
  "",
  indent("oItem = GetNextItemInInventory(oPC);", 8),
  indent("}"),
  "",
  indent("int nSlot;"),
  "",
  indent("for (nSlot = 0; nSlot < NUM_INVENTORY_SLOTS; nSlot++)"),
  indent("{"),
  indent("oItem = GetItemInSlot(nSlot, oPC);", 8),
  "",
  indent("if (GetIsObjectValid(oItem) && GetTag(oItem) == sTag)", 8),
  indent("{", 8),
  indent("return oItem;", 12),
  indent("}", 8),
  indent("}"),
  "",
  indent("return OBJECT_INVALID;"),
  "}",
].join("\n")

export function generateResolvedScript(
  config: ProjectConfig,
  tierNumber: number
): string {
  const activeBuild = getActiveBuild(config)

  if (!activeBuild) {
    return ""
  }

  const items = getBuildItems(config, activeBuild)

  const tiers = activeBuild.tiers

  const targetTier = tiers.find((tier) => tier.tier === tierNumber)

  if (!targetTier) {
    return ""
  }

  const resolvedTier = resolveTierState(tiers, targetTier)

  const tierCode = generateResolvedTierCode(resolvedTier, items, tiers)

  return [
    "void UpdateLevelItems(object oPC)",
    "{",
    indent("int nLevel = GetHitDice(oPC);"),
    "",
    indent(tierCode),
    "}",
  ].join("\n")
}

export function generateLevelScript(config: ProjectConfig): string {
  const activeBuild = getActiveBuild(config)

  if (!activeBuild) {
    return ""
  }

  const items = getBuildItems(config, activeBuild)

  const tiers = activeBuild.tiers

  const itemGrantBlocks = generateItemGrantBlocks(items)
  const levels = Array.from(new Set(tiers.map((tier) => tier.level))).sort(
    (a, b) => b - a
  )

  const resolvedLevelBlocks = levels
    .map((level) => {
      const resolvedState = resolveLevelState(tiers, level)

      const code = generateResolvedTierCode(resolvedState, items, tiers)

      if (!code) {
        return undefined
      }

      return {
        level,
        code,
      }
    })
    .filter(
      (
        block
      ): block is {
        level: number
        code: string
      } => block !== undefined
    )

  const levelBlocks = resolvedLevelBlocks.map((block, index) => {
    const condition =
      index === 0
        ? `if (nLevel >= ${block.level})`
        : `else if (nLevel >= ${block.level})`

    return [condition, "{", indent(block.code), "}"].join("\n")
  })

  return [
    '#include "x2_inc_itemprop"',
    '#include "inc_lvlitems"',
    "",
    getPlayerItemByTagFunction,
    "",
    "void UpdateLevelItems(object oPC)",
    "{",
    indent("int nLevel = GetHitDice(oPC);"),
    "",
    indent(itemGrantBlocks),
    "",
    indent(levelBlocks.join("\n\n")),
    "}",
    "",
    "void main()",
    "{",
    indent("object oPC = OBJECT_SELF;"),
    "",
    indent("if (!GetIsObjectValid(oPC))"),
    indent("{"),
    indent("return;", 8),
    indent("}"),
    "",
    indent("UpdateLevelItems(oPC);"),
    "}",
  ].join("\n")
}

function generateItemGrantBlocks(items: ResolvedBuildItem[]): string {
  const grantLevels = Array.from(
    new Set(items.map((item) => item.grantLevel))
  ).sort((a, b) => a - b)

  return grantLevels
    .map((grantLevel) => {
      const itemsForLevel = items.filter(
        (item) => item.grantLevel === grantLevel
      )

      const itemCode = itemsForLevel
        .map((item, index) =>
          generateItemGrantCode(item, `oGrantItem${index + 1}`)
        )
        .join("\n\n")

      return [`if (nLevel >= ${grantLevel})`, "{", indent(itemCode), "}"].join(
        "\n"
      )
    })
    .join("\n\n")
}
