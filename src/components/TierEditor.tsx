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
import { PropertyEditor } from "@/components/PropertyEditor"
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
  const resolvedTier = resolveTierState(tiers, tier)

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
              min={1}
              max={40}
              value={tier.level}
              onChange={(event) => {
                const level = Number(event.target.value)

                onChange({
                  ...tier,
                  level,
                })
              }}
              className="w-20"
            />
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
              <h2 className="font-semibold">{item.name}</h2>

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
                  <div key={propertyIndex} className="rounded-md border p-3">
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

              <div className="space-y-2 rounded-md bg-muted/50 p-3">
                <p className="text-sm font-semibold">Aktueller Zustand</p>

                {!resolvedItem || resolvedItem.properties.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Keine Eigenschaften
                  </p>
                ) : (
                  resolvedItem.properties.map((property, index) => {
                    const definition = itemProperties.find(
                      (definition) => definition.id === property.propertyId
                    )

                    if (!definition) {
                      return null
                    }

                    const displayParameters = definition.parameters.filter(
                      (parameter) =>
                        isParameterVisible(parameter, property.values)
                    )

                    return (
                      <div
                        key={`${property.propertyId}-${index}`}
                        className="text-sm"
                      >
                        <span className="font-medium">{definition.name}</span>

                        {displayParameters.length > 0 && (
                          <span className="text-muted-foreground">
                            {": "}
                            {displayParameters
                              .map((parameter) =>
                                getParameterLabel(
                                  parameter,
                                  property.values[parameter.id]
                                )
                              )
                              .join(", ")}
                          </span>
                        )}
                      </div>
                    )
                  })
                )}
              </div>

              <PropertyEditor
                item={item}
                onAddProperty={(property) =>
                  handleAddProperty(item.id, property)
                }
              />
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
