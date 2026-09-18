import type { NwnSettings as NwnSettingsType } from "@/storage/nwnSettings"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type NwnSettingsProps = {
  settings: NwnSettingsType
  onChange: (settings: NwnSettingsType) => void
}

export function NwnSettings({ settings, onChange }: NwnSettingsProps) {
  async function selectDirectory(field: keyof NwnSettingsType) {
    if (!("__TAURI_INTERNALS__" in window)) {
      return
    }

    const { open } = await import("@tauri-apps/plugin-dialog")

    const path = await open({
      directory: true,
      multiple: false,
    })

    if (!path) {
      return
    }

    onChange({
      ...settings,
      [field]: path,
    })
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">NWN-Einstellungen</h2>

      <div className="space-y-2">
        <label className="text-sm font-medium">NWN-Installation</label>

        <div className="flex gap-2">
          <Input
            value={settings.installPath}
            onChange={(event) =>
              onChange({
                ...settings,
                installPath: event.target.value,
              })
            }
            placeholder="...steamapps/common/Neverwinter Nighs"
          />

          <Button
            type="button"
            variant="outline"
            onClick={() => void selectDirectory("installPath")}
          >
            Auswählen
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">NWN-Benutzerverzeichnis</label>

        <div className="flex gap-2">
          <Input
            value={settings.homePath}
            onChange={(event) =>
              onChange({
                ...settings,
                homePath: event.target.value,
              })
            }
            placeholder="...Documents/Neverwinter Nights"
          />

          <Button
            type="button"
            variant="outline"
            onClick={() => void selectDirectory("homePath")}
          >
            Auswählen
          </Button>
        </div>
      </div>
    </section>
  )
}
