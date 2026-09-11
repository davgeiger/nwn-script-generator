import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import type { PropertyParameterOption, PropertyValue } from "@/types/properties"

type SearchablePropertySelectProps = {
  options: PropertyParameterOption[]
  value: PropertyValue | undefined
  placeholder: string
  searchPlaceholder?: string
  onChange: (value: PropertyValue) => void
}

export function SearchablePropertySelect({
  options,
  value,
  placeholder,
  searchPlaceholder = "Suchen...",
  onChange,
}: SearchablePropertySelectProps) {
  const selectedOption = options.find(
    (option) => String(option.value) === String(value)
  )

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between"
          />
        }
      >
        {selectedOption?.label ?? placeholder}

        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </PopoverTrigger>

      <PopoverContent className="w-[--anchor-width] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />

          <CommandList>
            <CommandEmpty>Kein Eintrag gefunden.</CommandEmpty>

            <CommandGroup>
              {options.map((option) => {
                const isSelected = String(option.value) === String(value)

                return (
                  <CommandItem
                    key={String(option.value)}
                    value={option.label}
                    onSelect={() => onChange(option.value)}
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        isSelected ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    {option.label}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
