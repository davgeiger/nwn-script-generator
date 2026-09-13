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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog"

type BuildItemAssignmentProps = {
  items: LevelItem[]
  activeBuild: BuildConfig

  onAddItem: (itemId: string) => void
  onRemoveItem: (itemId: string) => void
}

export function BuildItemAssignment({
  items,
  activeBuild,
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

    onRemoveItem(itemId)
  }

  return (
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
          <div className="space-y-2">
            {items.map((item) => {
              const checked = activeBuild.itemIds.includes(item.id)

              return (
                <div key={item.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`build-item-${item.id}`}
                    checked={checked}
                    onCheckedChange={(value) => {
                      if (value === true) {
                        handleCheckedChange(item.id, true)
                        return
                      }

                      setPendingItemId(item.id)
                    }}
                  />

                  <label htmlFor={`build-item-${item.id}`} className="text-sm">
                    {item.name}
                  </label>
                </div>
              )
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
      <AlertDialog
        open={pendingItemId !== null}
        onOpenChange={(open) => {
          if (!open) {
            setPendingItemId(null)
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Item aus Build entfernen?</AlertDialogTitle>

            <AlertDialogDescription>
              Das Item wird aus diesem Build entfernt. Alle Tier-Konfigurationen
              dieses Items in diesem Build werden ebenfalls gelöscht.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Abbrechen</AlertDialogCancel>

            <AlertDialogAction
              onClick={() => {
                if (pendingItemId) {
                  handleCheckedChange(pendingItemId, false)
                }

                setPendingItemId(null)
              }}
            >
              Entfernen
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
