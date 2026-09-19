import { useState } from "react"

import type { TierConfig } from "@/types/tiers"
import type { ResolvedBuildItem } from "@/resolvers/buildResolver"

import { Button } from "@/components/ui/button"
import { TierEditor } from "@/components/tier/TierEditor"
import { ChevronDown, ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

type TierListEditorProps = {
  items: ResolvedBuildItem[]
  tiers: TierConfig[]
  onTiersChange: (tiers: TierConfig[]) => void
}

export function TierListEditor({
  items,
  tiers,
  onTiersChange,
}: TierListEditorProps) {
  const [selectedTierId, setSelectedTierId] = useState(tiers[0]?.id ?? "")
  const [open, setOpen] = useState(false)

  const selectedTier = tiers.find((tier) => tier.id === selectedTierId)

  const highestLevel =
    tiers.length > 0 ? Math.max(...tiers.map((tier) => tier.level)) : 1

  const canAddTier = tiers.length < 39 && highestLevel < 40

  const canRemoveTier = tiers.length > 1

  const lastTier =
    tiers.length > 0
      ? tiers.reduce((highest, tier) =>
          tier.tier > highest.tier ? tier : highest
        )
      : undefined

  function handleAddTier() {
    if (!canAddTier) {
      return
    }

    const highestTier =
      tiers.length > 0
        ? tiers.reduce((highest, tier) =>
            tier.tier > highest.tier ? tier : highest
          )
        : undefined

    const nextTierNumber = highestTier ? highestTier.tier + 1 : 1

    const newTier: TierConfig = {
      id: `tier-${nextTierNumber}`,
      tier: nextTierNumber,
      level: highestLevel + 1,
      items: [],
    }

    onTiersChange([...tiers, newTier])
    setSelectedTierId(newTier.id)
  }

  function handleRemoveLastTier() {
    if (!lastTier || tiers.length <= 1) {
      return
    }

    const remainingTiers = tiers.filter((tier) => tier.id !== lastTier.id)

    onTiersChange(remainingTiers)

    if (selectedTierId === lastTier.id) {
      setSelectedTierId(remainingTiers.at(-1)?.id ?? "")
    }
  }

  function handleTierChange(updatedTier: TierConfig) {
    onTiersChange(
      tiers.map((tier) => (tier.id === updatedTier.id ? updatedTier : tier))
    )
  }

  function hasTierChanges(tier: TierConfig): boolean {
    return tier.items.some((item) => item.properties.length > 0)
  }

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Tier Editor</h2>
      <p className="text-sm text-muted-foreground">
        Hier wird die Progression der Items für den ausgewählten Build
        festgelegt. Jedes Tier ist dabei an ein Charakterlevel gebunden.
      </p>
      <Collapsible open={open} onOpenChange={setOpen} className="space-y-3">
        <CollapsibleTrigger
          render={
            <Button variant="outline" className="w-full justify-between" />
          }
        >
          <span>Tier-Konfiguration</span>

          {open ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  onClick={handleAddTier}
                  disabled={!canAddTier}
                >
                  + Tier hinzufügen
                </Button>

                <Button
                  variant="destructive"
                  onClick={handleRemoveLastTier}
                  disabled={!canRemoveTier}
                >
                  {lastTier
                    ? `Tier ${lastTier.tier} entfernen`
                    : "Tier entfernen"}
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {tiers.map((tier) => {
                  const hasChanges = hasTierChanges(tier)
                  const isSelected = tier.id === selectedTierId

                  return (
                    <Button
                      key={tier.id}
                      variant="outline"
                      className={
                        hasChanges
                          ? isSelected
                            ? "border-green-700 bg-green-600 text-white hover:bg-green-700 dark:bg-green-700"
                            : "border-green-600 bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-950 dark:text-green-300"
                          : isSelected
                            ? "border-red-700 bg-red-600 text-white hover:bg-red-700 dark:bg-red-700"
                            : "border-red-600 bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-950 dark:text-red-300"
                      }
                      onClick={() => setSelectedTierId(tier.id)}
                    >
                      Tier {tier.tier}
                    </Button>
                  )
                })}
              </div>
            </div>

            {selectedTier && (
              <TierEditor
                tier={selectedTier}
                tiers={tiers}
                items={items}
                onChange={handleTierChange}
              />
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
