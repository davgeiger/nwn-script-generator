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

import { compileScripts, type CompileResult } from "@/utils/compileScripts"

import type { NwnSettings } from "@/storage/nwnSettings"

import { isTauri } from "@/utils/isTauri"

type ScriptManagerProps = {
  config: ProjectConfig
  nwnSettings: NwnSettings
}

export function ScriptManager({ config, nwnSettings }: ScriptManagerProps) {
  const [showTestScripts, setShowTestScripts] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewScript, setPreviewScript] =
    useState<GeneratedScriptFile | null>(null)
  const [compileResults, setCompileResults] = useState<CompileResult[]>([])
  const [isCompiling, setIsCompiling] = useState(false)

  const scriptFiles = useMemo(() => generateScriptFiles(config), [config])

  async function handleCompile() {
    setIsCompiling(true)
    setCompileResults([])

    try {
      const results = await compileScripts(
        normalScripts,
        nwnSettings.installPath,
        nwnSettings.homePath
      )

      setCompileResults(results)
    } finally {
      setIsCompiling(false)
    }
  }

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

  const successfulCompiles = compileResults.filter(
    (result) => result.success && result.installed
  ).length

  const warningCount = compileResults.reduce(
    (count, result) => count + result.warnings.length,
    0
  )

  const failedCompiles = compileResults.filter((result) => !result.success)

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
          Herunterladen
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
            Herunterladen
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
      <div className="flex flex-wrap gap-2">
        <Button
          variant="secondary"
          onClick={() =>
            saveScriptPackage(normalScripts, "nwn-level-items.zip")
          }
        >
          Skripte herunterladen
        </Button>

        <Button
          variant="secondary"
          onClick={() =>
            saveScriptPackage(testScripts, "nwn-level-items-tests.zip")
          }
        >
          Testskripte herunterladen
        </Button>
        {isTauri() && (
          <Button
            variant="outline"
            disabled={
              isCompiling || !nwnSettings.installPath || !nwnSettings.homePath
            }
            onClick={() => void handleCompile()}
          >
            {isCompiling ? "Kompiliere..." : "Kompilieren und installieren"}
          </Button>
        )}

        {isTauri() && compileResults.length > 0 && (
          <div className="space-y-2 text-sm">
            <p>
              {successfulCompiles} von {compileResults.length} Skripten
              erfolgreich kompiliert und installiert.
            </p>

            {warningCount > 0 && (
              <p className="text-muted-foreground">
                {warningCount} Compiler-Warnung
                {warningCount !== 1 ? "en" : ""}.
              </p>
            )}

            {failedCompiles.map((result) => (
              <div key={result.filename}>
                <p className="font-medium">{result.filename}</p>

                {result.error && (
                  <p className="whitespace-pre-wrap text-destructive">
                    {result.error}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
