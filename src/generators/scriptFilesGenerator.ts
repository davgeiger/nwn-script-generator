import { generateCampaignScripts } from "@/generators/campaignScriptGenerator"
import { generateLevelItemsInclude } from "@/generators/includeGenerator"
import { generateRebuildScript } from "@/generators/rebuildScriptGenerator"
import { generateLevelScript } from "@/generators/scriptGenerator"
import { generateUpdateScript } from "@/generators/updateScriptGenerator"

import type { ProjectConfig } from "@/types/config"
import type { GeneratedScriptFile } from "@/types/scripts"
import { generatePropertyTestScripts } from "./test/propertyTestGenerator"

export function generateScriptFiles(
  config: ProjectConfig
): GeneratedScriptFile[] {
  const testScripts = generatePropertyTestScripts(config)

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

    ...generateCampaignScripts(config),

    ...testScripts,
  ]
}
