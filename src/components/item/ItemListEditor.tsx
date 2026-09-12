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

  return (
    <Collapsible open={isItemEditorOpen} onOpenChange={setIsItemEditorOpen}>
      <CollapsibleTrigger
        render={<Button variant="outline" className="w-full justify-between" />}
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
      </CollapsibleContent>
    </Collapsible>
  )
}
