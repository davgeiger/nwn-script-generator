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
import { Info } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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
  currentProperties: ItemPropertyConfig[]
  onAddProperty: (property: ItemPropertyConfig) => void
}

export function PropertyEditor({
  item,
  currentProperties,
  onAddProperty,
}: PropertyEditorProps) {
  const [selectedPropertyId, setSelectedPropertyId] = useState("")
  const [parameterValues, setParameterValues] = useState<
    Record<string, PropertyValue>
  >({})
  const [replaceKeyValues, setReplaceKeyValues] = useState<
    Record<string, PropertyValue>
  >({})
  const [selectedOperation, setSelectedOperation] =
    useState<PropertyOperation>("add")

  const availableProperties = useMemo(() => {
    return itemProperties.filter((property) => {
      if (!property.allowedSlots.includes(item.slot)) {
        return false
      }

      if (property.excludedItemIds?.includes(item.id)) {
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
  }, [item.id, item.slot, item.weaponCategory, item.physicalDamageTypes])

  const operationAvailableProperties = useMemo(() => {
    return availableProperties.filter((property) => {
      const currentConfigs = currentProperties.filter(
        (config) => config.propertyId === property.id
      )

      const exists = currentConfigs.length > 0
      const hasKeyParameters = Boolean(property.keyParameters?.length)

      switch (selectedOperation) {
        case "add":
          // Ohne Subtypes darf eine vorhandene Property
          // nicht nochmals hinzugefügt werden.

          // Mit Subtypes kann es noch weitere Varianten geben.
          return !exists || hasKeyParameters

        case "replace":
        case "remove":
          // Nur vorhandene Property-Typen anbieten.
          return exists
      }
    })
  }, [availableProperties, currentProperties, selectedOperation])

  const sortedAvailableProperties = useMemo(() => {
    return [...operationAvailableProperties].sort((a, b) =>
      a.name.localeCompare(b.name, "de")
    )
  }, [operationAvailableProperties])

  const selectedProperty = useMemo(
    () =>
      operationAvailableProperties.find(
        (property) => property.id === selectedPropertyId
      ),
    [operationAvailableProperties, selectedPropertyId]
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

  const areReplaceKeyValuesValid =
    selectedOperation !== "replace" ||
    !selectedProperty?.keyParameters?.length ||
    selectedProperty.keyParameters.every(
      (parameterId) => replaceKeyValues[parameterId] !== undefined
    )

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
    setReplaceKeyValues({})
  }

  function handleParameterChange(parameterId: string, value: PropertyValue) {
    setParameterValues((currentValues) => ({
      ...currentValues,
      [parameterId]: value,
    }))
  }

  function getCurrentKeyOptions(parameter: PropertyParameter) {
    if (!selectedProperty) {
      return []
    }

    const currentValues = new Set(
      currentProperties
        .filter((config) => config.propertyId === selectedProperty.id)
        .map((config) => String(config.values[parameter.id]))
    )

    return (parameter.options ?? []).filter((option) =>
      currentValues.has(String(option.value))
    )
  }

  function handleAddProperty() {
    if (!selectedProperty || !isPropertyValid) {
      return
    }

    const propertyConfig: ItemPropertyConfig = {
      propertyId: selectedProperty.id,
      operation: selectedOperation,
      values: parameterValues,
      ...(selectedOperation === "replace" &&
        selectedProperty.keyParameters?.length && {
          replaceKeyValues,
        }),
    }

    onAddProperty(propertyConfig)

    setSelectedPropertyId("")
    setParameterValues({})
    setReplaceKeyValues({})
    setSelectedOperation("add")
  }

  function getFilteredParameterOptions(parameter: PropertyParameter) {
    if (
      !selectedProperty ||
      selectedProperty.keyParameters?.length !== 1 ||
      !selectedProperty.keyParameters.includes(parameter.id)
    ) {
      return parameter.options ?? []
    }

    const currentConfigs = currentProperties.filter(
      (config) => config.propertyId === selectedProperty.id
    )

    const currentValues = new Set(
      currentConfigs.map((config) => String(config.values[parameter.id]))
    )

    return (parameter.options ?? []).filter((option) => {
      const exists = currentValues.has(String(option.value))

      switch (selectedOperation) {
        case "add":
          return !exists

        case "replace":
          return true

        case "remove":
          return exists
      }
    })
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
            setSelectedPropertyId("")
            setParameterValues({})
            setReplaceKeyValues({})
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
          <SelectTrigger className="w-full">
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

            const filteredOptions = getFilteredParameterOptions(parameter)

            const currentKeyOptions = getCurrentKeyOptions(parameter)

            const isReplaceKeyParameter =
              selectedOperation === "replace" &&
              selectedProperty.keyParameters?.includes(parameter.id)

            const selectedOption = parameter.options?.find(
              (option) =>
                String(option.value) === String(parameterValues[parameter.id])
            )

            return (
              <div key={parameter.id} className="space-y-2">
                {isReplaceKeyParameter && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Vorhandener {parameter.label}
                    </label>

                    <SearchablePropertySelect
                      options={currentKeyOptions}
                      value={replaceKeyValues[parameter.id]}
                      placeholder={`${parameter.label} auswählen`}
                      searchPlaceholder={`${parameter.label} suchen...`}
                      onChange={(value) =>
                        setReplaceKeyValues((currentValues) => ({
                          ...currentValues,
                          [parameter.id]: value,
                        }))
                      }
                    />
                  </div>
                )}

                <label className="text-sm font-medium">
                  {isReplaceKeyParameter
                    ? `Neuer ${parameter.label}`
                    : parameter.label}
                </label>

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
                    <div className="flex items-center gap-2">
                      <div className="min-w-0 flex-1">
                        <SearchablePropertySelect
                          options={filteredOptions}
                          value={parameterValues[parameter.id]}
                          placeholder={`${parameter.label} auswählen`}
                          searchPlaceholder={`${parameter.label} suchen...`}
                          onChange={(value) =>
                            handleParameterChange(parameter.id, value)
                          }
                        />
                      </div>

                      {selectedOption?.description && (
                        <Popover>
                          <PopoverTrigger
                            render={
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="shrink-0"
                              >
                                <Info className="size-4" />
                              </Button>
                            }
                          />

                          <PopoverContent className="w-96">
                            <div className="space-y-2">
                              <h4 className="font-medium">
                                {selectedOption.label}
                              </h4>

                              <p className="text-sm whitespace-pre-line text-muted-foreground">
                                {selectedOption.description}
                              </p>
                            </div>
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  ) : (
                    <Select
                      items={filteredOptions.map((option) => ({
                        value: String(option.value),
                        label: option.label,
                      }))}
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
                      <SelectTrigger className="w-72">
                        <SelectValue
                          placeholder={`${parameter.label} auswählen`}
                        />
                      </SelectTrigger>

                      <SelectContent>
                        {filteredOptions.map((option) => (
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

      <Button
        disabled={!isPropertyValid || !areReplaceKeyValuesValid}
        onClick={handleAddProperty}
      >
        {selectedOperation === "add"
          ? "Eigenschaft hinzufügen"
          : selectedOperation === "replace"
            ? "Eigenschaft ersetzen"
            : "Eigenschaft entfernen"}
      </Button>
    </div>
  )
}
