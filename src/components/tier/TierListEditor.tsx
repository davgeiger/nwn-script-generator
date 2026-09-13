import { useState } from "react"

import type { TierConfig } from "@/types/tiers"
import type { LevelItem } from "@/types/items"

import { Button } from "@/components/ui/button"
import { TierEditor } from "@/components/tier/TierEditor"
import { ChevronDown, ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

type TierListEditorProps = {
  items: LevelItem[]
  tiers: TierConfig[]
  onTiersChange: (tiers: TierConfig[]) => void
}

export function TierListEditor({
  items,
  tiers,
  onTiersChange,
}: TierListEditorProps) {
  const [selectedTierId, setSelectedTierId] = useState(tiers[0]?.id ?? "")
  const [open, setOpen] = useState(true)

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

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Tier Editor</h2>
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
                {tiers.map((tier) => (
                  <Button
                    key={tier.id}
                    variant={tier.id === selectedTierId ? "default" : "outline"}
                    onClick={() => setSelectedTierId(tier.id)}
                  >
                    Tier {tier.tier}
                  </Button>
                ))}
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
