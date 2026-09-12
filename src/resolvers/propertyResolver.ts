import type {
  ItemPropertyDefinition,
  PropertyOperation,
  PropertyParameter,
  PropertyValue,
} from "@/types/properties"

import { itemProperties } from "@/data/itemProperties"
import type { ItemPropertyConfig } from "@/types/properties"

export function getPropertyOperationLabel(
  operation: PropertyOperation
): string {
  switch (operation) {
    case "add":
      return "Hinzufügen"

    case "replace":
      return "Ersetzen"

    case "remove":
      return "Entfernen"
  }
}

export function getParameterLabel(
  parameter: PropertyParameter,
  value: PropertyValue
): string {
  if (parameter.type === "select") {
    const option = parameter.options?.find(
      (option) => String(option.value) === String(value)
    )

    return option?.label ?? String(value)
  }

  if (parameter.type === "boolean") {
    return value ? "Ja" : "Nein"
  }

  return String(value)
}

export function getPropertyValues(
  definition: ItemPropertyDefinition,
  values: Record<string, PropertyValue>
) {
  return definition.parameters.map((parameter) => ({
    id: parameter.id,
    label: parameter.label,
    value: getParameterLabel(parameter, values[parameter.id]),
  }))
}

export function getParameterNwScriptValue(
  parameter: PropertyParameter,
  value: PropertyValue
): string {
  if (parameter.type === "select") {
    const option = parameter.options?.find(
      (option) => String(option.value) === String(value)
    )

    return option?.nwscriptValue ?? String(value)
  }

  if (parameter.type === "boolean") {
    return value ? "TRUE" : "FALSE"
  }

  return String(value)
}

export function getPropertyKey(config: ItemPropertyConfig): string {
  const definition = itemProperties.find(
    (property) => property.id === config.propertyId
  )

  if (!definition) {
    return config.propertyId
  }

  if (!definition.keyParameters || definition.keyParameters.length === 0) {
    return config.propertyId
  }

  const keyValues = definition.keyParameters.map((parameterId) =>
    String(config.values[parameterId] ?? "")
  )

  return [config.propertyId, ...keyValues].join(":")
}

export function isParameterVisible(
  parameter: PropertyParameter,
  values: Record<string, PropertyValue>
): boolean {
  if (!parameter.condition) {
    return true
  }

  const currentValue = values[parameter.condition.parameterId]

  return parameter.condition.values.includes(currentValue)
}

export function getPropertyType(
  property: ItemPropertyDefinition,
  values: Record<string, unknown>
): string {
  const resolver = property.nwscript.propertyTypeByValue

  if (!resolver) {
    return property.nwscript.propertyType
  }

  const value = values[resolver.parameterId]

  if (value === undefined || value === null) {
    return property.nwscript.propertyType
  }

  return resolver.values[String(value)] ?? property.nwscript.propertyType
}
