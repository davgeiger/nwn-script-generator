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
  PropertyParameter,
  PropertyValue,
} from "@/types/properties"
import { isParameterVisible } from "@/resolvers/propertyResolver"
import { SearchablePropertySelect } from "./SearchablePropertySelect"

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
    return itemProperties.filter((property) => {
      if (!property.allowedSlots.includes(item.slot)) {
        return false
      }

      if (property.allowedWeaponCategories) {
        if (!item.weaponCategory) {
          return false
        }

        if (!property.allowedWeaponCategories.includes(item.weaponCategory)) {
          return false
        }
      }

      if (property.allowedPhysicalDamageTypes) {
        if (!item.physicalDamageTypes) {
          return false
        }

        const hasMatchingDamageType = item.physicalDamageTypes.some(
          (damageType) =>
            property.allowedPhysicalDamageTypes?.includes(damageType)
        )

        if (!hasMatchingDamageType) {
          return false
        }
      }

      return true
    })
  }, [item.slot, item.weaponCategory, item.physicalDamageTypes])

  const sortedAvailableProperties = useMemo(() => {
    return [...availableProperties].sort((a, b) =>
      a.name.localeCompare(b.name, "de")
    )
  }, [availableProperties])

  const selectedProperty = useMemo(
    () =>
      availableProperties.find(
        (property) => property.id === selectedPropertyId
      ),
    [availableProperties, selectedPropertyId]
  )

  const visibleParameters = selectedProperty
    ? selectedProperty.parameters.filter((parameter) => {
        if (
          selectedOperation === "remove" &&
          !selectedProperty.keyParameters?.includes(parameter.id)
        ) {
          return false
        }

        return isParameterVisible(parameter, parameterValues)
      })
    : []

  const isPropertyValid =
    selectedProperty !== undefined &&
    visibleParameters.every((parameter) => {
      const value = parameterValues[parameter.id]

      if (parameter.required && (value === undefined || value === "")) {
        return false
      }

      if (parameter.type === "number" && value !== undefined && value !== "") {
        const numberValue = Number(value)

        if (Number.isNaN(numberValue)) {
          return false
        }

        if (parameter.min !== undefined && numberValue < parameter.min) {
          return false
        }

        if (parameter.max !== undefined && numberValue > parameter.max) {
          return false
        }
      }

      return true
    })

  function isNumberParameterInvalid(
    parameter: PropertyParameter,
    value: PropertyValue | undefined
  ): boolean {
    if (parameter.type !== "number" || value === undefined || value === "") {
      return false
    }

    const numberValue = Number(value)

    if (Number.isNaN(numberValue)) {
      return true
    }

    if (parameter.min !== undefined && numberValue < parameter.min) {
      return true
    }

    if (parameter.max !== undefined && numberValue > parameter.max) {
      return true
    }

    return false
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
          items={propertyOperations}
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

        <Select
          items={sortedAvailableProperties.map((property) => ({
            value: property.id,
            label: property.name,
          }))}
          value={selectedPropertyId}
          onValueChange={handlePropertyChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Eigenschaft auswählen" />
          </SelectTrigger>

          <SelectContent>
            {sortedAvailableProperties.map((property) => (
              <SelectItem key={property.id} value={property.id}>
                {property.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedProperty && (
        <div className="space-y-4">
          {visibleParameters.map((parameter) => {
            const isInvalid = isNumberParameterInvalid(
              parameter,
              parameterValues[parameter.id]
            )

            return (
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
                    className={isInvalid ? "text-red-500" : undefined}
                  />
                )}

                {parameter.type === "number" &&
                  (parameter.min !== undefined ||
                    parameter.max !== undefined) && (
                    <p
                      className={`text-xs ${
                        isInvalid ? "text-red-500" : "text-muted-foreground"
                      }`}
                    >
                      Gültiger Bereich: {parameter.min ?? "–"}–
                      {parameter.max ?? "–"}
                    </p>
                  )}

                {parameter.type === "select" &&
                  (parameter.searchable ? (
                    <SearchablePropertySelect
                      options={parameter.options ?? []}
                      value={parameterValues[parameter.id]}
                      placeholder={`${parameter.label} auswählen`}
                      searchPlaceholder={`${parameter.label} suchen...`}
                      onChange={(value) =>
                        handleParameterChange(parameter.id, value)
                      }
                    />
                  ) : (
                    <Select
                      items={
                        parameter.options?.map((option) => ({
                          value: String(option.value),
                          label: option.label,
                        })) ?? []
                      }
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
                  ))}
              </div>
            )
          })}
        </div>
      )}

      <Button disabled={!isPropertyValid} onClick={handleAddProperty}>
        Eigenschaft hinzufügen
      </Button>
    </div>
  )
}
