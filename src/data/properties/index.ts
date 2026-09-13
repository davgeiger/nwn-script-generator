import type { ItemPropertyDefinition } from "@/types/properties"

import { defensiveProperties } from "./defensiveProperties"
import { miscProperties } from "./miscProperties"
import { onHitProperties } from "./onHitProperties"
import { spellProperties } from "./spellProperties"
import { weaponProperties } from "./weaponProperties"

export {
  weaponProperties,
  defensiveProperties,
  spellProperties,
  onHitProperties,
  miscProperties,
}

export const itemProperties: ItemPropertyDefinition[] = [
  ...weaponProperties,
  ...defensiveProperties,
  ...spellProperties,
  ...onHitProperties,
  ...miscProperties,
]
