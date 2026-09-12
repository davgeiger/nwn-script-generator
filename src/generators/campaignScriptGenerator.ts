import type { ProjectConfig } from "@/types/config"
import type { GeneratedScriptFile } from "@/types/scripts"

import { m1q0LevelUpTemplate } from "@/templates/scripts/m1q0LevelUpTemplate"
import { nwO0LevelUpTemplate } from "@/templates/scripts/nwO0LevelUpTemplate"
import { x1PlayerLevelUpTemplate } from "@/templates/scripts/x1PlayerLevelUpTemplate"

function applyUpdateItemsScriptName(
  template: string,
  updateItemsScriptName: string
): string {
  return template.replaceAll("__UPDATE_ITEMS_SCRIPT__", updateItemsScriptName)
}

export function generateCampaignScripts(
  config: ProjectConfig
): GeneratedScriptFile[] {
  const updateItemsScriptName = config.scripts.updateItemsName

  return [
    {
      filename: "m1q0_levelup.nss",
      content: applyUpdateItemsScriptName(
        m1q0LevelUpTemplate,
        updateItemsScriptName
      ),
    },
    {
      filename: "nw_o0_levelup.nss",
      content: applyUpdateItemsScriptName(
        nwO0LevelUpTemplate,
        updateItemsScriptName
      ),
    },
    {
      filename: "x1_playerlevelup.nss",
      content: applyUpdateItemsScriptName(
        x1PlayerLevelUpTemplate,
        updateItemsScriptName
      ),
    },
  ]
}
