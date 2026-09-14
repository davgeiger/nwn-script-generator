import { useEffect, useRef, useState } from "react"
import { loadProject, saveProject } from "@/storage/projectStorage"

import { getActiveBuild, getBuildItems } from "@/resolvers/buildResolver"

import { initialItems } from "@/data/items"
import type { ProjectConfig } from "@/types/config"
import type { LevelItem } from "@/types/items"

import { TierListEditor } from "@/components/tier/TierListEditor"
import { ItemListEditor } from "@/components/item/ItemListEditor"
import { ScriptManager } from "@/components/script/ScriptManager"

import { BuildManager } from "./build/BuildManager"
import { BuildItemAssignment } from "./build/BuildItemAssignment"
import { Button } from "./ui/button"
import { importProject } from "@/storage/importProject"
import { exportProject } from "@/storage/exportProject"
import { ConfirmDialog } from "./common/ConfirmDialog"

const initialConfig: ProjectConfig = {
  items: initialItems,

  builds: [
    {
      id: "fighter",
      name: "Krieger",
      itemIds: initialItems.map((item) => item.id),

      tiers: [
        {
          id: "tier-1",
          tier: 1,
          level: 2,
          items: [],
        },
      ],
    },
  ],

  activeBuildId: "fighter",

  scripts: {
    updateItemsName: "lvl_update_items",
    updateName: "lvl_update",
    rebuildName: "lvl_rebuild",
  },
}

export function ProjectEditor() {
  const [config, setConfig] = useState<ProjectConfig>(() => {
    return loadProject() ?? initialConfig
  })
  const [pendingImport, setPendingImport] = useState<ProjectConfig | null>(null)
  const [resetDialogOpen, setResetDialogOpen] = useState(false)

  const activeBuild = getActiveBuild(config)

  useEffect(() => {
    saveProject(config)
  }, [config])

  if (!activeBuild) {
    return null
  }

  const buildItems = getBuildItems(config, activeBuild)

  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleItemChange(updatedItem: LevelItem) {
    setConfig((currentConfig) => ({
      ...currentConfig,
      items: currentConfig.items.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      ),
    }))
  }

  function handleAddItem(): string {
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

    return newItem.id
  }

  function handleDeleteItem(itemId: string) {
    setConfig((currentConfig) => ({
      ...currentConfig,

      // Item vollständig aus dem Projekt entfernen
      items: currentConfig.items.filter((item) => item.id !== itemId),

      // Referenzen aus ALLEN Builds entfernen
      builds: currentConfig.builds.map((build) => ({
        ...build,

        itemIds: build.itemIds.filter((id) => id !== itemId),

        tiers: build.tiers.map((tier) => ({
          ...tier,

          items: tier.items.filter((item) => item.itemId !== itemId),
        })),
      })),
    }))
  }

  function handleAddItemToBuild(itemId: string) {
    setConfig((currentConfig) => ({
      ...currentConfig,

      builds: currentConfig.builds.map((build) => {
        if (build.id !== currentConfig.activeBuildId) {
          return build
        }

        if (build.itemIds.includes(itemId)) {
          return build
        }

        return {
          ...build,
          itemIds: [...build.itemIds, itemId],
        }
      }),
    }))
  }

  function handleRemoveItemFromBuild(itemId: string) {
    setConfig((currentConfig) => ({
      ...currentConfig,

      builds: currentConfig.builds.map((build) => {
        if (build.id !== currentConfig.activeBuildId) {
          return build
        }

        return {
          ...build,

          itemIds: build.itemIds.filter((id) => id !== itemId),

          tiers: build.tiers.map((tier) => ({
            ...tier,

            items: tier.items.filter((item) => item.itemId !== itemId),
          })),
        }
      }),
    }))
  }

  return (
    <>
      <div className="mb-3">
        {" "}
        <h1 className="mb-1 text-xl font-bold">Item Skript Generator</h1>
        <div className="flex gap-1">
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
          >
            Importieren
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={async (event) => {
              const file = event.target.files?.[0]

              if (!file) {
                return
              }

              try {
                const importedConfig = await importProject(file)

                setPendingImport(importedConfig)
              } catch (error) {
                console.error(error)
              }

              event.target.value = ""
            }}
          />
          <Button variant="outline" onClick={() => exportProject(config)}>
            Exportieren
          </Button>
          <Button
            variant="destructive"
            onClick={() => setResetDialogOpen(true)}
          >
            Projekt zurücksetzen
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-8">
        <section className="space-y-3">
          <BuildManager
            builds={config.builds}
            activeBuildId={config.activeBuildId}
            onActiveBuildChange={(buildId) => {
              setConfig((currentConfig) => ({
                ...currentConfig,
                activeBuildId: buildId,
              }))
            }}
            onBuildsChange={(builds) => {
              setConfig((currentConfig) => ({
                ...currentConfig,
                builds,
              }))
            }}
          />
        </section>

        {activeBuild && (
          <BuildItemAssignment
            items={config.items}
            activeBuild={activeBuild}
            onAddItem={handleAddItemToBuild}
            onRemoveItem={handleRemoveItemFromBuild}
          />
        )}

        <TierListEditor
          items={buildItems}
          tiers={activeBuild.tiers}
          onTiersChange={(tiers) => {
            setConfig((currentConfig) => ({
              ...currentConfig,
              builds: currentConfig.builds.map((build) =>
                build.id === currentConfig.activeBuildId
                  ? {
                      ...build,
                      tiers,
                    }
                  : build
              ),
            }))
          }}
        />

        <ItemListEditor
          items={config.items}
          onItemChange={handleItemChange}
          onAddItem={handleAddItem}
          onRemoveItem={handleDeleteItem}
        />

        <ScriptManager config={config} />
      </div>
      <ConfirmDialog
        open={pendingImport !== null}
        onOpenChange={(open) => {
          if (!open) {
            setPendingImport(null)
          }
        }}
        title="Projekt importieren?"
        description="Der aktuelle Projektstand wird durch die importierte Konfiguration ersetzt. Nicht exportierte Änderungen können dadurch verloren gehen."
        confirmLabel="Importieren"
        onConfirm={() => {
          if (pendingImport) {
            setConfig(pendingImport)
          }
        }}
      />
      <ConfirmDialog
        open={resetDialogOpen}
        onOpenChange={setResetDialogOpen}
        title="Projekt wirklich zurücksetzen?"
        description="Alle aktuellen Änderungen werden verworfen und das Projekt wird auf die Standardkonfiguration zurückgesetzt. Nicht exportierte Änderungen können dabei verloren gehen."
        confirmLabel="Zurücksetzen"
        onConfirm={() => {
          setConfig(structuredClone(initialConfig))
        }}
      />
    </>
  )
}
