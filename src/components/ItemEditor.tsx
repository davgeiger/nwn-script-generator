import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { itemSlots } from "@/data/itemSlots"
import type { ItemSlot, LevelItem } from "@/types/items"

type ItemEditorProps = {
  item: LevelItem
  onChange: (item: LevelItem) => void
}

export function ItemEditor({ item, onChange }: ItemEditorProps) {
  function handleChange<K extends keyof LevelItem>(
    key: K,
    value: LevelItem[K]
  ) {
    onChange({
      ...item,
      [key]: value,
    })
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <label className="text-sm font-medium">Name</label>

        <Input
          value={item.name}
          onChange={(event) => handleChange("name", event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">ResRef</label>

        <Input
          value={item.resRef}
          onChange={(event) => handleChange("resRef", event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Tag</label>

        <Input
          value={item.tag}
          onChange={(event) => handleChange("tag", event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Item-Typ</label>

        <Select
          value={item.slot}
          onValueChange={(value) => {
            if (value === null) {
              return
            }

            handleChange("slot", value as ItemSlot)
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Item-Typ auswählen" />
          </SelectTrigger>

          <SelectContent>
            {itemSlots.map((slot) => (
              <SelectItem key={slot.value} value={slot.value}>
                {slot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Vergabe-Level</label>

        <Input
          type="number"
          min={1}
          max={40}
          value={item.grantLevel}
          onChange={(event) =>
            handleChange("grantLevel", Number(event.target.value))
          }
        />
      </div>
    </div>
  )
}
