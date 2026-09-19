import type {
  ItemSlot,
  PhysicalDamageType,
  WeaponCategory,
} from "@/types/items"

export type PropertyValue = string | number | boolean

export type PropertyParameterType = "number" | "select" | "boolean"

export type PropertyParameterOption = {
  label: string
  value: string | number
  nwscriptValue?: string
  description?: string
}

export type PropertyParameterCondition = {
  parameterId: string
  values: PropertyValue[]
}

export type PropertyParameter = {
  id: string
  label: string
  type: PropertyParameterType
  required?: boolean
  min?: number
  max?: number
  options?: PropertyParameterOption[]
  condition?: PropertyParameterCondition

  searchable?: boolean
}

export type ItemPropertyNwScript = {
  propertyType: string
  functionName?: string
  parameterOrder?: string[]
  functionByValue?: {
    parameterId: string
    values: Record<string, string>
  }
  propertyTypeByValue?: {
    parameterId: string
    values: Record<string, string>
  }
}

export type ItemPropertyDefinition = {
  id: string
  name: string
  allowedSlots: ItemSlot[]
  allowedWeaponCategories?: WeaponCategory[]
  allowedPhysicalDamageTypes?: PhysicalDamageType[]

  excludedItemIds?: string[]

  parameters: PropertyParameter[]
  keyParameters?: string[]
  nwscript: ItemPropertyNwScript
}

export type PropertyOperation = "add" | "replace" | "remove"

export type ItemPropertyConfig = {
  propertyId: string
  operation: PropertyOperation
  values: Record<string, PropertyValue>
  replaceKeyValues?: Record<string, PropertyValue>
}
