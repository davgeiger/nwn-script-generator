import { itemProperties } from "@/data/itemProperties"
import type { ResolvedTierItem } from "@/resolvers/tierResolver"
import {
  getParameterLabel,
  isParameterVisible,
} from "@/resolvers/propertyResolver"

type ResolvedTierOverviewProps = {
  resolvedItem?: ResolvedTierItem
}

export function ResolvedTierOverview({
  resolvedItem,
}: ResolvedTierOverviewProps) {
  const properties = [...(resolvedItem?.properties ?? [])].sort((a, b) => {
    const definitionA = itemProperties.find(
      (definition) => definition.id === a.propertyId
    )

    const definitionB = itemProperties.find(
      (definition) => definition.id === b.propertyId
    )

    return (definitionA?.name ?? "").localeCompare(
      definitionB?.name ?? "",
      "de"
    )
  })

  return (
    <div className="space-y-2 rounded-md border bg-muted/30 p-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Aktueller Zustand</p>

        <span className="text-xs text-muted-foreground">
          {properties.length}{" "}
          {properties.length === 1 ? "Eigenschaft" : "Eigenschaften"}
        </span>
      </div>

      {properties.length === 0 ? (
        <p className="text-sm text-muted-foreground">Keine Eigenschaften</p>
      ) : (
        <div className="divide-y">
          {properties.map((property, index) => {
            const definition = itemProperties.find(
              (definition) => definition.id === property.propertyId
            )

            if (!definition) {
              return null
            }

            const displayParameters = definition.parameters.filter(
              (parameter) => isParameterVisible(parameter, property.values)
            )

            const parameterLabels = displayParameters
              .map((parameter) =>
                getParameterLabel(parameter, property.values[parameter.id])
              )
              .filter(Boolean)

            return (
              <div
                key={`${property.propertyId}-${index}`}
                className="flex items-start justify-between gap-4 py-1.5"
              >
                <span className="text-sm font-medium">{definition.name}</span>

                {parameterLabels.length > 0 && (
                  <span className="text-right text-sm text-muted-foreground">
                    {parameterLabels.join(" · ")}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
