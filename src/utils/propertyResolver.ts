import type {
  ItemPropertyDefinition,
  PropertyParameter,
  PropertyValue,
} from "@/types/properties"

export function getParameterLabel(
  parameter: PropertyParameter,
  value: PropertyValue
): string {
  if (parameter.type === "select") {
    const option = parameter.options?.find((option) => option.value === value)

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
