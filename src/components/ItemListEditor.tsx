import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ItemEditor } from "@/components/ItemEditor"
import type { LevelItem } from "@/types/items"

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
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Items</h2>

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
                  onClick={() => onRemoveItem(item.id)}
                >
                  Item entfernen
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
