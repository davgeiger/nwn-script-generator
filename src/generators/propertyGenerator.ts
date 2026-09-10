import { itemProperties } from "@/data/itemProperties"
import type { ItemPropertyConfig } from "@/types/properties"
import {
  getParameterNwScriptValue,
  isParameterVisible,
} from "@/utils/propertyResolver"

export function generatePropertyExpression(
  config: ItemPropertyConfig
): string | undefined {
  const definition = itemProperties.find(
    (property) => property.id === config.propertyId
  )

  if (!definition) {
    return undefined
  }

  let functionName = definition.nwscript.functionName

  const functionByValue = definition.nwscript.functionByValue

  if (functionByValue) {
    const parameterValue = config.values[functionByValue.parameterId]

    if (parameterValue !== undefined) {
      functionName = functionByValue.values[String(parameterValue)]
    }
  }

  if (!functionName) {
    return undefined
  }

  const visibleParameters = definition.parameters.filter((parameter) =>
    isParameterVisible(parameter, config.values)
  )

  const orderedParameters = definition.nwscript.parameterOrder
    ? [...visibleParameters].sort((a, b) => {
        const order = definition.nwscript.parameterOrder!

        const indexA = order.indexOf(a.id)
        const indexB = order.indexOf(b.id)

        const orderA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA

        const orderB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB

        return orderA - orderB
      })
    : visibleParameters

  const argumentsList = orderedParameters.map((parameter) => {
    const value = config.values[parameter.id]

    if (value === undefined) {
      return undefined
    }

    return getParameterNwScriptValue(parameter, value)
  })

  if (argumentsList.some((argument) => argument === undefined)) {
    return undefined
  }

  return `${functionName}(${argumentsList.join(", ")})`
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

export function generateResolvedPropertyStatement(
  config: ItemPropertyConfig,
  itemVariable = "oItem"
): string | undefined {
  const expression = generatePropertyExpression(config)

  if (!expression) {
    return undefined
  }

  return `IPSafeAddItemProperty(${itemVariable}, ${expression});`
}
