import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { ChevronDown, ChevronRight } from "lucide-react"

import type { BuildConfig } from "@/types/builds"
import type { LevelItem } from "@/types/items"

import { ConfirmDialog } from "../common/ConfirmDialog"
import { Input } from "../ui/input"

type BuildItemAssignmentProps = {
  items: LevelItem[]
  activeBuild: BuildConfig
  onGrantLevelChange: (itemId: string, grantLevel: number) => void

  onAddItem: (itemId: string) => void
  onRemoveItem: (itemId: string) => void
}

export function BuildItemAssignment({
  items,
  activeBuild,
  onGrantLevelChange,
  onAddItem,
  onRemoveItem,
}: BuildItemAssignmentProps) {
  const [open, setOpen] = useState(false)
  const [pendingItemId, setPendingItemId] = useState<string | null>(null)

  function handleCheckedChange(itemId: string, checked: boolean) {
    if (checked) {
      onAddItem(itemId)
      return
    }

    setPendingItemId(itemId)
  }

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Item Zuordnung</h2>
        <Collapsible open={open} onOpenChange={setOpen} className="space-y-3">
          <CollapsibleTrigger
            render={
              <Button variant="outline" className="w-full justify-between" />
            }
          >
            <span>Item-Zuordnung</span>

            {open ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="flex-1">Item</span>

              <span className="w-20">Level</span>
            </div>
            <div className="space-y-2">
              {items.map((item) => {
                const buildItem = activeBuild.items.find(
                  (buildItem) => buildItem.itemId === item.id
                )

                const checked = buildItem !== undefined

                return (
                  <div key={item.id} className="flex items-center gap-3">
                    <Checkbox
                      id={`build-item-${item.id}`}
                      checked={checked}
                      onCheckedChange={(value) =>
                        handleCheckedChange(item.id, value === true)
                      }
                    />

                    <label
                      htmlFor={`build-item-${item.id}`}
                      className="flex-1 text-sm"
                    >
                      {item.name}
                    </label>

                    {buildItem && (
                      <Input
                        type="number"
                        min={1}
                        max={40}
                        value={buildItem.grantLevel}
                        onChange={(event) =>
                          onGrantLevelChange(
                            item.id,
                            Number(event.target.value)
                          )
                        }
                        className="w-20"
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <ConfirmDialog
        open={pendingItemId !== null}
        onOpenChange={(open) => {
          if (!open) {
            setPendingItemId(null)
          }
        }}
        title="Item aus Build entfernen?"
        description="Das Item wird aus diesem Build entfernt. Alle Tier-Konfigurationen dieses Items in diesem Build werden ebenfalls gelöscht."
        confirmLabel="Entfernen"
        onConfirm={() => {
          if (pendingItemId) {
            onRemoveItem(pendingItemId)
            setPendingItemId(null)
          }
        }}
      />
    </>
  )
}
