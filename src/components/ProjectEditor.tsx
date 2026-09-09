import { useState } from "react"

import { initialItems } from "@/data/items"
import type { ProjectConfig } from "@/types/config"
import type { LevelItem } from "@/types/items"

import { TierListEditor } from "@/components/TierListEditor"
import { ItemListEditor } from "@/components/ItemListEditor"

import { generateLevelScript } from "@/generators/scriptGenerator"

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

  console.log(generateLevelScript(config))

  function handleItemChange(updatedItem: LevelItem) {
    setConfig((currentConfig) => ({
      ...currentConfig,
      items: currentConfig.items.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      ),
    }))
  }

  function handleAddItem() {
    const newItem: LevelItem = {
      id: crypto.randomUUID(),
      name: "Neues Item",
      resRef: "",
      tag: "",
      slot: "weapon",
      grantLevel: 1,
    }

    setConfig((currentConfig) => ({
      ...currentConfig,
      items: [...currentConfig.items, newItem],
    }))
  }

  function handleRemoveItem(itemId: string) {
    setConfig((currentConfig) => ({
      ...currentConfig,

      items: currentConfig.items.filter((item) => item.id !== itemId),

      tiers: currentConfig.tiers.map((tier) => ({
        ...tier,
        items: tier.items.filter((item) => item.itemId !== itemId),
      })),
    }))
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <ItemListEditor
        items={config.items}
        onItemChange={handleItemChange}
        onAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
      />

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
