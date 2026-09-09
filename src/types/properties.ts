import type { ItemSlot } from "@/types/items"

export type PropertyParameterType = "number" | "select" | "boolean"

export type PropertyParameterOption = {
  label: string
  value: string | number
  nwscriptValue?: string
}

export type PropertyParameter = {
  id: string
  label: string
  type: PropertyParameterType

  required?: boolean

  min?: number
  max?: number

  options?: PropertyParameterOption[]
}

export type ItemPropertyDefinition = {
  id: string
  name: string
  allowedSlots: ItemSlot[]
  parameters: PropertyParameter[]
  nwscript: ItemPropertyNwScript
}

export type PropertyValue = string | number | boolean

export type ItemPropertyConfig = {
  propertyId: string
  operation: PropertyOperation
  values: Record<string, PropertyValue>
}

export type PropertyOperation = "add" | "replace" | "remove"

export type ItemPropertyNwScript = {
  propertyType: string
  functionName?: string
}
