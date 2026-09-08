import type { ItemSlot } from "@/types/items"

export type PropertyParameterType = "number" | "select" | "boolean"

export type PropertyParameterOption = {
  label: string
  value: string | number
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
}

export type PropertyValue = string | number | boolean

export type ItemPropertyConfig = {
  itemId: string
  propertyId: string
  values: Record<string, PropertyValue>
}
