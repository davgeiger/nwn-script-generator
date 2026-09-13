import { useEffect, useState } from "react"
import type { ItemPropertyConfig } from "@/types/properties"
import type { TierConfig } from "@/types/tiers"
import { itemProperties } from "@/data/itemProperties"
import {
  getParameterLabel,
  getPropertyOperationLabel,
  isParameterVisible,
} from "@/resolvers/propertyResolver"
import type { LevelItem } from "@/types/items"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { ResolvedTierOverview } from "@/components/tier/ResolvedTierOverview"
import { PropertyEditor } from "@/components/properties/PropertyEditor"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { resolveTierState } from "@/resolvers/tierResolver"

type TierEditorProps = {
  tier: TierConfig
  tiers: TierConfig[]
  items: LevelItem[]
  onChange: (tier: TierConfig) => void
}

export function TierEditor({ tier, tiers, items, onChange }: TierEditorProps) {
  const [levelInput, setLevelInput] = useState(String(tier.level))

  useEffect(() => {
    setLevelInput(String(tier.level))
  }, [tier.level])

  const previousTier = [...tiers]
    .filter((otherTier) => otherTier.tier < tier.tier)
    .sort((a, b) => b.tier - a.tier)[0]

  const nextTier = [...tiers]
    .filter((otherTier) => otherTier.tier > tier.tier)
    .sort((a, b) => a.tier - b.tier)[0]

  const minLevel = previousTier ? previousTier.level + 1 : 2

  const calculatedMaxLevel = nextTier ? nextTier.level - 1 : 40

  const maxLevel = Math.max(minLevel, calculatedMaxLevel)

  const resolvedTier = resolveTierState(tiers, tier)

  function commitLevel() {
    const level = Number(levelInput)

    if (Number.isNaN(level) || level < minLevel || level > maxLevel) {
      setLevelInput(String(tier.level))
      return
    }

    onChange({
      ...tier,
      level,
    })
  }

  function handleAddProperty(itemId: string, property: ItemPropertyConfig) {
    const existingItem = tier.items.find((item) => item.itemId === itemId)

    if (existingItem) {
      onChange({
        ...tier,
        items: tier.items.map((item) => {
          if (item.itemId !== itemId) {
            return item
          }

          return {
            ...item,
            properties: [...item.properties, property],
          }
        }),
      })

      return
    }

    onChange({
      ...tier,
      items: [
        ...tier.items,
        {
          itemId,
          properties: [property],
        },
      ],
    })
  }

  function handleRemoveProperty(itemId: string, propertyIndex: number) {
    onChange({
      ...tier,
      items: tier.items
        .map((item) => {
          if (item.itemId !== itemId) {
            return item
          }

          return {
            ...item,
            properties: item.properties.filter(
              (_, index) => index !== propertyIndex
            ),
          }
        })
        .filter((item) => item.properties.length > 0),
    })
  }

  return (
    <Card className="mx-auto max-w-3xl">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle>Tier {tier.tier}</CardTitle>

          <div className="flex items-center gap-2">
            <label
              htmlFor={`tier-level-${tier.id}`}
              className="text-sm font-medium"
            >
              Level
            </label>

            <Input
              id={`tier-level-${tier.id}`}
              type="number"
              min={minLevel}
              max={maxLevel}
              value={levelInput}
              onChange={(event) => setLevelInput(event.target.value)}
              onBlur={commitLevel}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  commitLevel()
                  event.currentTarget.blur()
                }
              }}
              className="w-20"
            />
            <p className="text-xs text-muted-foreground">
              Gültiger Bereich: {minLevel}–{maxLevel}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {items.map((item) => {
          const itemConfig = tier.items.find(
            (tierItem) => tierItem.itemId === item.id
          )

          const resolvedItem = resolvedTier.items.find(
            (resolvedItem) => resolvedItem.itemId === item.id
          )

          return (
            <div key={item.id} className="space-y-4 rounded-md border p-4">
              <h3 className="font-semibold">{item.name}</h3>

              <ResolvedTierOverview resolvedItem={resolvedItem} />

              <PropertyEditor
                item={item}
                onAddProperty={(property) =>
                  handleAddProperty(item.id, property)
                }
              />

              {itemConfig?.properties.length ? (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold">
                    Änderungen in diesem Tier
                  </h3>

                  {itemConfig?.properties.map((property, propertyIndex) => {
                    const definition = itemProperties.find(
                      (definition) => definition.id === property.propertyId
                    )

                    if (!definition) {
                      return null
                    }

                    const operationLabel = getPropertyOperationLabel(
                      property.operation
                    )

                    const displayParameters = definition.parameters.filter(
                      (parameter) => {
                        if (
                          property.operation === "remove" &&
                          !definition.keyParameters?.includes(parameter.id)
                        ) {
                          return false
                        }

                        return isParameterVisible(parameter, property.values)
                      }
                    )

                    return (
                      <div
                        key={propertyIndex}
                        className="rounded-md border p-3"
                      >
                        <p className="font-medium">
                          {operationLabel}: {definition.name}
                        </p>

                        {displayParameters.map((parameter) => (
                          <p
                            key={parameter.id}
                            className="text-sm text-muted-foreground"
                          >
                            {parameter.label}:{" "}
                            {getParameterLabel(
                              parameter,
                              property.values[parameter.id]
                            )}
                          </p>
                        ))}

                        <Button
                          variant="destructive"
                          onClick={() =>
                            handleRemoveProperty(item.id, propertyIndex)
                          }
                        >
                          Eintrag löschen
                        </Button>
                      </div>
                    )
                  })}
                </div>
              ) : null}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
