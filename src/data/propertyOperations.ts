import type { PropertyOperation } from "@/types/properties"

export type PropertyOperationOption = {
  value: PropertyOperation
  label: string
}

export const propertyOperations: PropertyOperationOption[] = [
  {
    value: "add",
    label: "Hinzufügen",
  },
  {
    value: "replace",
    label: "Ersetzen",
  },
  {
    value: "remove",
    label: "Entfernen",
  },
]
