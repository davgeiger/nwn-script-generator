import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { ScriptPreviewDialog } from "@/components/script/ScriptPreviewDialog"

import { generateScriptFiles } from "@/generators/scriptFilesGenerator"
import { saveScript } from "@/utils/saveScript"
import { saveScriptPackage } from "@/utils/saveScriptPackage"

import type { ProjectConfig } from "@/types/config"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type ScriptManagerProps = {
  config: ProjectConfig
}

export function ScriptManager({ config }: ScriptManagerProps) {
  const scriptFiles = useMemo(() => generateScriptFiles(config), [config])

  const [selectedFilename, setSelectedFilename] = useState(
    scriptFiles[0]?.filename ?? ""
  )

  const [previewOpen, setPreviewOpen] = useState(false)

  const selectedScript =
    scriptFiles.find((script) => script.filename === selectedFilename) ?? null

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-semibold">Skripte</h1>
      <div className="flex gap-1">
        <Select
          value={selectedFilename}
          onValueChange={(value) => {
            if (value !== null) {
              setSelectedFilename(value)
            }
          }}
        >
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Skript auswählen" />
          </SelectTrigger>

          <SelectContent>
            {scriptFiles.map((script) => (
              <SelectItem key={script.filename} value={script.filename}>
                {script.filename}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          disabled={!selectedScript}
          onClick={() => setPreviewOpen(true)}
        >
          Anzeigen
        </Button>

        <Button
          disabled={!selectedScript}
          onClick={() => {
            if (selectedScript) {
              saveScript(selectedScript.filename, selectedScript.content)
            }
          }}
        >
          Speichern
        </Button>

        <Button
          variant="secondary"
          onClick={() => saveScriptPackage(scriptFiles)}
        >
          Alle herunterladen
        </Button>
      </div>
      {selectedScript && (
        <ScriptPreviewDialog
          open={previewOpen}
          onOpenChange={setPreviewOpen}
          filename={selectedScript.filename}
          script={selectedScript.content}
        />
      )}
    </div>
  )
}
