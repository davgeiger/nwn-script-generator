import { useMemo, useState } from "react"

import { items } from "@/data/items"
import { itemProperties } from "@/data/itemProperties"
import type { ItemPropertyConfig, PropertyValue } from "@/types/properties"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getPropertyValues } from "@/utils/propertyResolver"

export function PropertyEditor() {
  const [selectedItemId, setSelectedItemId] = useState("")
  const [selectedPropertyId, setSelectedPropertyId] = useState("")

  const [parameterValues, setParameterValues] = useState<
    Record<string, PropertyValue>
  >({})

  const [properties, setProperties] = useState<ItemPropertyConfig[]>([])

  const selectedItem = useMemo(
    () => items.find((item) => item.id === selectedItemId),
    [selectedItemId]
  )

  const availableProperties = useMemo(() => {
    if (!selectedItem) {
      return []
    }

    return itemProperties.filter((property) =>
      property.allowedSlots.includes(selectedItem.slot)
    )
  }, [selectedItem])

  const selectedProperty = useMemo(
    () =>
      availableProperties.find(
        (property) => property.id === selectedPropertyId
      ),
    [availableProperties, selectedPropertyId]
  )

  const isPropertyValid = useMemo(() => {
    if (!selectedProperty) {
      return false
    }

    return selectedProperty.parameters.every((parameter) => {
      if (!parameter.required) {
        return true
      }

      const value = parameterValues[parameter.id]

      return value !== undefined && value !== ""
    })
  }, [selectedProperty, parameterValues])

  function handleItemChange(itemId: string | null) {
    setSelectedItemId(itemId ?? "")
    setSelectedPropertyId("")
    setParameterValues({})
  }

  function handlePropertyChange(propertyId: string | null) {
    setSelectedPropertyId(propertyId ?? "")
    setParameterValues({})
  }

  function handleParameterChange(parameterId: string, value: PropertyValue) {
    setParameterValues((currentValues) => ({
      ...currentValues,
      [parameterId]: value,
    }))
  }

  function handleAddProperty() {
    if (!selectedItem || !selectedProperty) {
      return
    }

    const propertyConfig: ItemPropertyConfig = {
      itemId: selectedItem.id,
      propertyId: selectedProperty.id,
      values: parameterValues,
    }

    setProperties((currentProperties) => [...currentProperties, propertyConfig])

    setSelectedPropertyId("")
    setParameterValues({})
  }

  function handleRemoveProperty(index: number) {
    setProperties((currentProperties) =>
      currentProperties.filter((_, currentIndex) => currentIndex !== index)
    )
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>Item Property Editor</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Gegenstand</label>

          <Select value={selectedItemId} onValueChange={handleItemChange}>
            <SelectTrigger>
              <SelectValue placeholder="Gegenstand auswählen" />
            </SelectTrigger>

            <SelectContent>
              {items.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Eigenschaft</label>

          <Select
            value={selectedPropertyId}
            onValueChange={handlePropertyChange}
            disabled={!selectedItem}
          >
            <SelectTrigger>
              <SelectValue placeholder="Eigenschaft auswählen" />
            </SelectTrigger>

            <SelectContent>
              {availableProperties.map((property) => (
                <SelectItem key={property.id} value={property.id}>
                  {property.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedProperty && (
          <div className="space-y-4">
            {selectedProperty.parameters.map((parameter) => (
              <div key={parameter.id} className="space-y-2">
                <label className="text-sm font-medium">{parameter.label}</label>

                {parameter.type === "number" && (
                  <Input
                    type="number"
                    min={parameter.min}
                    max={parameter.max}
                    value={
                      parameterValues[parameter.id] !== undefined
                        ? String(parameterValues[parameter.id])
                        : ""
                    }
                    onChange={(event) => {
                      const value = event.target.value

                      if (value === "") {
                        setParameterValues((currentValues) => {
                          const nextValues = { ...currentValues }

                          delete nextValues[parameter.id]

                          return nextValues
                        })

                        return
                      }

                      handleParameterChange(parameter.id, Number(value))
                    }}
                  />
                )}

                {parameter.type === "select" && (
                  <Select
                    value={
                      parameterValues[parameter.id] !== undefined
                        ? String(parameterValues[parameter.id])
                        : ""
                    }
                    onValueChange={(value) => {
                      if (value === null) {
                        return
                      }

                      handleParameterChange(parameter.id, value)
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={`${parameter.label} auswählen`}
                      />
                    </SelectTrigger>

                    <SelectContent>
                      {parameter.options?.map((option) => (
                        <SelectItem
                          key={String(option.value)}
                          value={String(option.value)}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            ))}
          </div>
        )}

        <Button
          disabled={!selectedItem || !selectedProperty || !isPropertyValid}
          onClick={handleAddProperty}
        >
          Eigenschaft hinzufügen
        </Button>

        {properties.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-medium">Hinzugefügte Eigenschaften</h3>

            {properties.map((property, index) => {
              const item = items.find((item) => item.id === property.itemId)

              const definition = itemProperties.find(
                (definition) => definition.id === property.propertyId
              )

              return (
                <div
                  key={`${property.itemId}-${property.propertyId}-${index}`}
                  className="flex items-start justify-between rounded-md border p-4"
                >
                  <div>
                    <div className="font-medium">
                      {item?.name} – {definition?.name}
                    </div>

                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {definition &&
                        getPropertyValues(definition, property.values).map(
                          (parameter) => (
                            <div key={parameter.id}>
                              {parameter.label}: {parameter.value}
                            </div>
                          )
                        )}
                    </div>
                  </div>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveProperty(index)}
                  >
                    Entfernen
                  </Button>
                </div>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
