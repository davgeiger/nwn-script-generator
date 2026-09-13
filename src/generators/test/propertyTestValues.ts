import type {
  ItemPropertyConfig,
  ItemPropertyDefinition,
  PropertyValue,
} from "@/types/properties"

function getDefaultParameterValue(
  parameter: ItemPropertyDefinition["parameters"][number]
): PropertyValue | undefined {
  switch (parameter.type) {
    case "select":
      return parameter.options?.[0]?.value

    case "number":
      return parameter.min ?? 1

    default:
      return undefined
  }
}

function createDefaultValues(
  definition: ItemPropertyDefinition
): Record<string, PropertyValue> {
  const values: Record<string, PropertyValue> = {}

  for (const parameter of definition.parameters) {
    const value = getDefaultParameterValue(parameter)

    if (value !== undefined) {
      values[parameter.id] = value
    }
  }

  return values
}

export function createTestPropertyConfigs(
  definition: ItemPropertyDefinition
): ItemPropertyConfig[] {
  const defaultValues = createDefaultValues(definition)

  const keyParameters = definition.keyParameters ?? []

  if (keyParameters.length === 0) {
    return [
      {
        propertyId: definition.id,
        operation: "add",
        values: defaultValues,
      },
    ]
  }

  // Vorerst gezielt den ersten Key-Parameter testen.
  const keyParameterId = keyParameters[0]

  const keyParameter = definition.parameters.find(
    (parameter) => parameter.id === keyParameterId
  )

  if (
    !keyParameter ||
    keyParameter.type !== "select" ||
    !keyParameter.options
  ) {
    return [
      {
        propertyId: definition.id,
        operation: "add",
        values: defaultValues,
      },
    ]
  }

  return keyParameter.options.map((option) => ({
    propertyId: definition.id,
    operation: "add",
    values: {
      ...defaultValues,
      [keyParameter.id]: option.value,
    },
  }))
}
