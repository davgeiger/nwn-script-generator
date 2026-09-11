import { useState } from "react"

import type { TierConfig } from "@/types/tiers"
import type { LevelItem } from "@/types/items"

import { Button } from "@/components/ui/button"
import { TierEditor } from "@/components/TierEditor"

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

  const selectedTier = tiers.find((tier) => tier.id === selectedTierId)

  function handleAddTier() {
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
      level: highestTier ? highestTier.level + 1 : 1,
      items: [],
    }

    onTiersChange([...tiers, newTier])

    setSelectedTierId(newTier.id)
  }

  function handleRemoveTier(tierId: string) {
    const remainingTiers = tiers.filter((tier) => tier.id !== tierId)

    onTiersChange(remainingTiers)

    if (selectedTierId === tierId) {
      setSelectedTierId(remainingTiers[0]?.id ?? "")
    }
  }

  function handleTierChange(updatedTier: TierConfig) {
    onTiersChange(
      tiers.map((tier) => (tier.id === updatedTier.id ? updatedTier : tier))
    )
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
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

        <Button variant="secondary" onClick={handleAddTier}>
          + Tier hinzufügen
        </Button>
      </div>

      {selectedTier && (
        <div className="space-y-4">
          <TierEditor
            tier={selectedTier}
            tiers={tiers}
            items={items}
            onChange={handleTierChange}
          />

          <div className="flex justify-end">
            <Button
              variant="destructive"
              onClick={() => handleRemoveTier(selectedTier.id)}
            >
              Tier entfernen
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
