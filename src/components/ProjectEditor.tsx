import { useState } from "react"

import { initialItems } from "@/data/items"
import type { ProjectConfig } from "@/types/config"

import { TierListEditor } from "@/components/TierListEditor"

const initialConfig: ProjectConfig = {
  items: initialItems,
  tiers: [
    {
      id: "tier-1",
      tier: 1,
      level: 1,
      items: [],
    },
  ],
}

export function ProjectEditor() {
  const [config, setConfig] = useState<ProjectConfig>(initialConfig)

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <TierListEditor
        items={config.items}
        tiers={config.tiers}
        onTiersChange={(tiers) =>
          setConfig((currentConfig) => ({
            ...currentConfig,
            tiers,
          }))
        }
      />
    </div>
  )
}
