import type { ItemPropertyConfig } from "@/types/properties"
import type { TierConfig } from "@/types/tiers"
import { itemProperties } from "@/data/itemProperties"
import { getPropertyValues } from "@/utils/propertyResolver"
import type { LevelItem } from "@/types/items"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PropertyEditor } from "@/components/PropertyEditor"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type TierEditorProps = {
  tier: TierConfig
  items: LevelItem[]
  onChange: (tier: TierConfig) => void
}

export function TierEditor({ tier, items, onChange }: TierEditorProps) {
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

          return (
            <div key={item.id} className="space-y-4 rounded-md border p-4">
              <h2 className="font-semibold">{item.name}</h2>

              {itemConfig && itemConfig.properties.length > 0 && (
                <div className="space-y-2">
                  {itemConfig.properties.map((property, index) => {
                    const definition = itemProperties.find(
                      (definition) => definition.id === property.propertyId
                    )

                    if (!definition) {
                      return null
                    }

                    const values = getPropertyValues(
                      definition,
                      property.values
                    )

                    return (
                      <div
                        key={`${property.propertyId}-${index}`}
                        className="flex items-start justify-between rounded-md bg-muted p-3"
                      >
                        <div>
                          <div className="font-medium">{definition.name}</div>

                          <div className="mt-1 text-sm text-muted-foreground">
                            {values.map((parameter) => (
                              <div key={parameter.id}>
                                {parameter.label}: {parameter.value}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleRemoveProperty(item.id, index)}
                        >
                          Entfernen
                        </Button>
                      </div>
                    )
                  })}
                </div>
              )}

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
