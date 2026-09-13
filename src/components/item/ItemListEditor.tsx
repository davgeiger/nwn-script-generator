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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useState } from "react"

type ItemListEditorProps = {
  items: LevelItem[]
  onItemChange: (item: LevelItem) => void
  onAddItem: () => void
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

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Item Editor</h2>
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
            <div className="flex items-center">
              <Button onClick={onAddItem}>+ Item hinzufügen</Button>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ItemEditor item={item} onChange={onItemChange} />

                    <div className="flex justify-end">
                      <Button
                        variant="destructive"
                        onClick={() => setPendingItemId(item.id)}
                      >
                        Item entfernen
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
            <AlertDialogTitle>Item wirklich löschen?</AlertDialogTitle>

            <AlertDialogDescription>
              Das Item wird aus dem gesamten Projekt entfernt. Dabei werden auch
              alle Zuordnungen zu Builds und alle zugehörigen
              Tier-Konfigurationen gelöscht. Dieser Vorgang kann nicht
              rückgängig gemacht werden.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Abbrechen</AlertDialogCancel>

            <AlertDialogAction
              onClick={() => {
                if (pendingItemId) {
                  onRemoveItem(pendingItemId)
                }

                setPendingItemId(null)
              }}
            >
              Löschen
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
