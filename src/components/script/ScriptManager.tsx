import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { ScriptPreviewDialog } from "@/components/script/ScriptPreviewDialog"

import { generateScriptFiles } from "@/generators/scriptFilesGenerator"
import { saveScript } from "@/utils/saveScript"
import { saveScriptPackage } from "@/utils/saveScriptPackage"

import type { ProjectConfig } from "@/types/config"

type ScriptManagerProps = {
  config: ProjectConfig
}

export function ScriptManager({ config }: ScriptManagerProps) {
  const [selectedFilename, setSelectedFilename] = useState<string | null>(null)

  const scriptFiles = useMemo(() => generateScriptFiles(config), [config])

  const selectedScript =
    scriptFiles.find((script) => script.filename === selectedFilename) ?? null

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Skripte</h2>

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Skripte</h2>

          <Button onClick={() => saveScriptPackage(scriptFiles)}>
            Alle herunterladen
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {scriptFiles.map((script) => (
            <div
              key={script.filename}
              className="flex items-center gap-2 rounded-md border p-2"
            >
              <span className="font-mono text-sm">{script.filename}</span>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedFilename(script.filename)}
              >
                Anzeigen
              </Button>

              <Button
                size="sm"
                onClick={() => saveScript(script.filename, script.content)}
              >
                Speichern
              </Button>
            </div>
          ))}
        </div>
      </div>

      {selectedScript && (
        <ScriptPreviewDialog
          open={true}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedFilename(null)
            }
          }}
          filename={selectedScript.filename}
          script={selectedScript.content}
        />
      )}
    </>
  )
}
