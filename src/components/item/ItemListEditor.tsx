import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronRight } from "lucide-react"
import { ItemEditor } from "@/components/item/ItemEditor"
import type { LevelItem } from "@/types/items"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { useState } from "react"
import { ConfirmDialog } from "../common/ConfirmDialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

type ItemListEditorProps = {
  items: LevelItem[]
  onItemChange: (item: LevelItem) => void
  onAddItem: () => string
  onRemoveItem: (itemId: string) => void
}

export function ItemListEditor({
  items,
  onItemChange,
  onAddItem,
  onRemoveItem,
}: ItemListEditorProps) {
  const [isItemEditorOpen, setIsItemEditorOpen] = useState(false)
  const [pendingItemId, setPendingItemId] = useState<string | null>(null)
  const [selectedItemId, setSelectedItemId] = useState(items[0]?.id ?? "")

  const selectedItem = items.find((item) => item.id === selectedItemId) ?? null

  const itemOptions = items.map((item) => ({
    value: item.id,
    label: item.name,
  }))

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Item Editor</h2>
        <p className="text-sm text-muted-foreground">
          Hier können die global im Projekt verfügbaren Items erstellt,
          bearbeitet und entfernt werden.
        </p>
        <Collapsible open={isItemEditorOpen} onOpenChange={setIsItemEditorOpen}>
          <CollapsibleTrigger
            render={
              <Button variant="outline" className="w-full justify-between" />
            }
          >
            <span>Item-Konfiguration</span>

            {isItemEditorOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </CollapsibleTrigger>

          <CollapsibleContent className="pt-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Select
                  items={itemOptions}
                  value={selectedItemId}
                  onValueChange={(value) => {
                    if (value === null) {
                      return
                    }

                    setSelectedItemId(value)
                  }}
                >
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Item auswählen" />
                  </SelectTrigger>

                  <SelectContent>
                    {itemOptions.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  onClick={() => {
                    const newItemId = onAddItem()
                    setSelectedItemId(newItemId)
                  }}
                >
                  + Item hinzufügen
                </Button>
              </div>

              <div className="space-y-4">
                {selectedItem && (
                  <Card>
                    <CardHeader>
                      <CardTitle>{selectedItem.name}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ItemEditor item={selectedItem} onChange={onItemChange} />

                      <div className="flex justify-end">
                        <Button
                          variant="destructive"
                          onClick={() => setPendingItemId(selectedItem.id)}
                        >
                          Item entfernen
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
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
        title="Item wirklich löschen?"
        description="Das Item wird aus dem gesamten Projekt entfernt. Dabei werden auch alle Zuordnungen zu Builds und alle zugehörigen Tier-Konfigurationen gelöscht. Dieser Vorgang kann nicht rückgängig gemacht werden."
        confirmLabel="Löschen"
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
