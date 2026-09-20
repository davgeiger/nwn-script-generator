import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { isTauri } from "@/utils/isTauri"

type AboutDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AboutDialog({ open, onOpenChange }: AboutDialogProps) {
  const [licenseText, setLicenseText] = useState<string | null>(null)
  const [licenseError, setLicenseError] = useState<string | null>(null)
  const [showLicense, setShowLicense] = useState(false)
  const [version, setVersion] = useState<string | null>(null)

  useEffect(() => {
    if (!isTauri()) {
      return
    }

    async function loadVersion() {
      const { getVersion } = await import("@tauri-apps/api/app")
      const appVersion = await getVersion()

      setVersion(appVersion)
    }

    void loadVersion()
  }, [])

  async function handleShowLicense() {
    if (showLicense) {
      setShowLicense(false)
      return
    }

    if (!licenseText) {
      try {
        setLicenseError(null)

        let text: string

        if (isTauri()) {
          const { resolveResource } = await import("@tauri-apps/api/path")
          const { readTextFile } = await import("@tauri-apps/plugin-fs")

          const licensePath = await resolveResource(
            "THIRD_PARTY_LICENSES/nwnsc.txt"
          )

          text = await readTextFile(licensePath)
        } else {
          const response = await fetch(
            `${import.meta.env.BASE_URL}THIRD_PARTY_LICENSES/nwnsc.txt`
          )

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`)
          }

          text = await response.text()
        }

        setLicenseText(text)
      } catch (error) {
        setLicenseError(error instanceof Error ? error.message : String(error))
      }
    }

    setShowLicense(true)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>NWN Skript Generator</DialogTitle>

          <DialogDescription>
            {version ? `Version ${version}` : "NWN Skript Generator"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 text-sm">
          <p>
            Generator für skalierende Gegenstände und NWScript-Skripte für
            Neverwinter Nights 1: Enhanced Edition.
          </p>

          <div className="space-y-1">
            <h3 className="font-semibold">Drittanbieter-Komponenten</h3>

            <p>nwnsc – NWScript Compiler</p>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => void handleShowLicense()}
            >
              {showLicense ? "Lizenz ausblenden" : "Lizenz anzeigen"}
            </Button>

            {showLicense && licenseText && (
              <pre className="max-h-80 overflow-auto rounded-md border p-3 text-xs whitespace-pre-wrap">
                {licenseText}
              </pre>
            )}

            {licenseError && (
              <p className="text-sm text-destructive">
                Lizenzdatei konnte nicht geladen werden: {licenseError}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
