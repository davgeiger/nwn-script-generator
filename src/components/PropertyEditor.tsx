import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { itemProperties } from "@/data/itemProperties"
import type { LevelItem } from "@/types/items"
import { propertyOperations } from "@/data/propertyOperations"
import type {
  ItemPropertyConfig,
  PropertyOperation,
  PropertyValue,
} from "@/types/properties"

type PropertyEditorProps = {
  item: LevelItem
  onAddProperty: (property: ItemPropertyConfig) => void
}

export function PropertyEditor({ item, onAddProperty }: PropertyEditorProps) {
  const [selectedPropertyId, setSelectedPropertyId] = useState("")
  const [parameterValues, setParameterValues] = useState<
    Record<string, PropertyValue>
  >({})
  const [selectedOperation, setSelectedOperation] =
    useState<PropertyOperation>("add")

  const availableProperties = useMemo(() => {
    return itemProperties.filter((property) =>
      property.allowedSlots.includes(item.slot)
    )
  }, [item.slot])

  const selectedProperty = useMemo(
    () =>
      availableProperties.find(
        (property) => property.id === selectedPropertyId
      ),
    [availableProperties, selectedPropertyId]
  )

  const visibleParameters = selectedProperty
    ? selectedOperation === "remove"
      ? selectedProperty.parameters.filter((parameter) =>
          selectedProperty.keyParameters?.includes(parameter.id)
        )
      : selectedProperty.parameters
    : []

  const isPropertyValid = useMemo(() => {
    if (!selectedProperty) {
      return false
    }

    const parametersToValidate =
      selectedOperation === "remove"
        ? selectedProperty.parameters.filter((parameter) =>
            selectedProperty.keyParameters?.includes(parameter.id)
          )
        : selectedProperty.parameters

    return parametersToValidate.every((parameter) => {
      if (!parameter.required) {
        return true
      }

      const value = parameterValues[parameter.id]

      return value !== undefined && value !== ""
    })
  }, [selectedProperty, selectedOperation, parameterValues])

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
    if (!selectedProperty || !isPropertyValid) {
      return
    }

    const propertyConfig: ItemPropertyConfig = {
      propertyId: selectedProperty.id,
      operation: selectedOperation,
      values: parameterValues,
    }

    onAddProperty(propertyConfig)

    setSelectedPropertyId("")
    setParameterValues({})
    setSelectedOperation("add")
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Aktion</label>

        <Select
          value={selectedOperation}
          onValueChange={(value) => {
            if (value === null) {
              return
            }

            setSelectedOperation(value as PropertyOperation)
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {propertyOperations.map((operation) => (
              <SelectItem key={operation.value} value={operation.value}>
                {operation.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Eigenschaft</label>

        <Select value={selectedPropertyId} onValueChange={handlePropertyChange}>
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
          {visibleParameters.map((parameter) => (
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
                    <SelectValue placeholder={`${parameter.label} auswählen`} />
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

      <Button disabled={!isPropertyValid} onClick={handleAddProperty}>
        Eigenschaft hinzufügen
      </Button>
    </div>
  )
}
