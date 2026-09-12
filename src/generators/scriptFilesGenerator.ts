import { generateCampaignScripts } from "@/generators/campaignScriptGenerator"
import { generateLevelItemsInclude } from "@/generators/includeGenerator"
import { generateRebuildScript } from "@/generators/rebuildScriptGenerator"
import { generateLevelScript } from "@/generators/scriptGenerator"
import { generateUpdateScript } from "@/generators/updateScriptGenerator"

import type { ProjectConfig } from "@/types/config"
import type { GeneratedScriptFile } from "@/types/scripts"

export function generateScriptFiles(
  config: ProjectConfig
): GeneratedScriptFile[] {
  const campaignScripts = generateCampaignScripts(config)

  return [
    {
      filename: `${config.scripts.updateItemsName}.nss`,
      content: generateLevelScript(config),
    },
    {
      filename: `${config.scripts.updateName}.nss`,
      content: generateUpdateScript(config.scripts.updateItemsName),
    },
    {
      filename: `${config.scripts.rebuildName}.nss`,
      content: generateRebuildScript(config),
    },
    {
      filename: "inc_lvlitems.nss",
      content: generateLevelItemsInclude(config),
    },

    ...campaignScripts,
  ]
}
