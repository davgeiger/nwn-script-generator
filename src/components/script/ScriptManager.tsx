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
import { Checkbox } from "@/components/ui/checkbox"
import type { GeneratedScriptFile } from "@/types/scripts"

type ScriptManagerProps = {
  config: ProjectConfig
}

export function ScriptManager({ config }: ScriptManagerProps) {
  const [showTestScripts, setShowTestScripts] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewScript, setPreviewScript] =
    useState<GeneratedScriptFile | null>(null)
  const scriptFiles = useMemo(() => generateScriptFiles(config), [config])

  const normalScripts = scriptFiles.filter(
    (script) =>
      !script.filename.startsWith("lvl_test_") &&
      !script.filename.startsWith("lvl_t_")
  )

  const testScripts = scriptFiles.filter(
    (script) =>
      script.filename.startsWith("lvl_test_") ||
      script.filename.startsWith("lvl_t_")
  )

  const [selectedFilename, setSelectedFilename] = useState(
    normalScripts[0]?.filename ?? ""
  )

  const [selectedTestFilename, setSelectedTestFilename] = useState(
    testScripts[0]?.filename ?? ""
  )

  const selectedScript =
    normalScripts.find((script) => script.filename === selectedFilename) ?? null

  const selectedTestScript =
    testScripts.find((script) => script.filename === selectedTestFilename) ??
    null

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Skripte</h2>
      <div className="flex flex-wrap items-center gap-2">
        <Select
          value={selectedFilename}
          onValueChange={(value) => {
            if (value !== null) {
              setSelectedFilename(value)
            }
          }}
        >
          <SelectTrigger className="w-64">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {normalScripts.map((script) => (
              <SelectItem key={script.filename} value={script.filename}>
                {script.filename}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={() => {
            if (selectedScript) {
              setPreviewScript(selectedScript)
              setPreviewOpen(true)
            }
          }}
        >
          Anzeigen
        </Button>

        <Button
          onClick={() => {
            if (selectedScript) {
              saveScript(selectedScript.filename, selectedScript.content)
            }
          }}
        >
          Speichern
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="show-test-scripts"
          checked={showTestScripts}
          onCheckedChange={(checked) => setShowTestScripts(checked === true)}
        />

        <label htmlFor="show-test-scripts" className="text-sm font-medium">
          Testskripte anzeigen
        </label>
      </div>
      {showTestScripts && (
        <div className="flex flex-wrap items-center gap-2">
          <Select
            value={selectedTestFilename}
            onValueChange={(value) => {
              if (value !== null) {
                setSelectedTestFilename(value)
              }
            }}
          >
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              {testScripts.map((script) => (
                <SelectItem key={script.filename} value={script.filename}>
                  {script.filename}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => {
              if (selectedTestScript) {
                setPreviewScript(selectedTestScript)
                setPreviewOpen(true)
              }
            }}
          >
            Anzeigen
          </Button>

          <Button
            onClick={() => {
              if (selectedTestScript) {
                saveScript(
                  selectedTestScript.filename,
                  selectedTestScript.content
                )
              }
            }}
          >
            Speichern
          </Button>
        </div>
      )}
      {previewScript && (
        <ScriptPreviewDialog
          open={previewOpen}
          onOpenChange={setPreviewOpen}
          filename={previewScript.filename}
          script={previewScript.content}
        />
      )}
      <Button
        variant="secondary"
        onClick={() => saveScriptPackage(scriptFiles)}
      >
        Alle herunterladen
      </Button>
    </div>
  )
}
