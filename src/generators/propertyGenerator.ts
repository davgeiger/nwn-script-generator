import { itemProperties } from "@/data/itemProperties"
import type { ItemPropertyConfig } from "@/types/properties"
import { getParameterNwScriptValue } from "@/utils/propertyResolver"

export function generatePropertyExpression(
  config: ItemPropertyConfig
): string | undefined {
  const definition = itemProperties.find(
    (property) => property.id === config.propertyId
  )

  if (!definition) {
    return undefined
  }

  if (!definition.nwscript.functionName) {
    return undefined
  }

  const argumentsList = definition.parameters.map((parameter) => {
    const value = config.values[parameter.id]

    if (value === undefined) {
      return undefined
    }

    return getParameterNwScriptValue(parameter, value)
  })

  if (argumentsList.some((argument) => argument === undefined)) {
    return undefined
  }

  return `${definition.nwscript.functionName}(${argumentsList.join(", ")})`
}

export function generatePropertyStatement(
  config: ItemPropertyConfig,
  itemVariable = "oItem"
): string | undefined {
  const definition = itemProperties.find(
    (property) => property.id === config.propertyId
  )

  if (!definition) {
    return undefined
  }

  switch (config.operation) {
    case "add": {
      const expression = generatePropertyExpression(config)

      if (!expression) {
        return undefined
      }

      return `IPSafeAddItemProperty(${itemVariable}, ${expression});`
    }

    case "replace": {
      const expression = generatePropertyExpression(config)

      if (!expression) {
        return undefined
      }

      return [
        `IPRemoveMatchingItemProperties(${itemVariable}, ${definition.nwscript.propertyType}, -1);`,
        `IPSafeAddItemProperty(${itemVariable}, ${expression});`,
      ].join("\n")
    }

    case "remove":
      return `IPRemoveMatchingItemProperties(${itemVariable}, ${definition.nwscript.propertyType}, -1);`
  }
}
