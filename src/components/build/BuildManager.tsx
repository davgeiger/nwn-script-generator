import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import type { BuildConfig } from "@/types/builds"
import { Input } from "../ui/input"
import { ConfirmDialog } from "../common/ConfirmDialog"

type BuildManagerProps = {
  builds: BuildConfig[]
  activeBuildId: string
  onActiveBuildChange: (buildId: string) => void
  onBuildsChange: (builds: BuildConfig[]) => void
}

export function BuildManager({
  builds,
  activeBuildId,
  onActiveBuildChange,
  onBuildsChange,
}: BuildManagerProps) {
  const activeBuild = builds.find((build) => build.id === activeBuildId)

  const [isRenaming, setIsRenaming] = useState(false)
  const [buildName, setBuildName] = useState("")
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false)

  const renameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isRenaming) {
      renameInputRef.current?.focus()
      renameInputRef.current?.select()
    }
  }, [isRenaming])

  function handleAddBuild() {
    const nextNumber = builds.length + 1

    const newBuild: BuildConfig = {
      id: `build-${crypto.randomUUID()}`,
      name: `Build ${nextNumber}`,
      items: [],
      tiers: [
        {
          id: "tier-1",
          tier: 1,
          level: 2,
          items: [],
        },
      ],
    }

    onBuildsChange([...builds, newBuild])
    onActiveBuildChange(newBuild.id)
  }

  function handleDuplicateBuild() {
    if (!activeBuild) {
      return
    }

    const newBuild: BuildConfig = {
      ...structuredClone(activeBuild),
      id: `build-${crypto.randomUUID()}`,
      name: `${activeBuild.name} Kopie`,
      items: activeBuild.items.map((item) => ({
        ...item,
      })),
      tiers: activeBuild.tiers.map((tier, index) => ({
        ...tier,
        id: `tier-${index + 1}-${crypto.randomUUID()}`,
      })),
    }

    onBuildsChange([...builds, newBuild])
    onActiveBuildChange(newBuild.id)
  }

  function handleRemoveBuild() {
    if (!activeBuild || builds.length <= 1) {
      return
    }

    const remainingBuilds = builds.filter(
      (build) => build.id !== activeBuild.id
    )

    onBuildsChange(remainingBuilds)
    onActiveBuildChange(remainingBuilds[0].id)
  }

  function handleStartRename() {
    if (!activeBuild) {
      return
    }

    setBuildName(activeBuild.name)
    setIsRenaming(true)
  }

  function handleRenameBuild() {
    const name = buildName.trim()

    if (!activeBuild || !name) {
      return
    }

    onBuildsChange(
      builds.map((build) =>
        build.id === activeBuild.id
          ? {
              ...build,
              name,
            }
          : build
      )
    )

    setIsRenaming(false)
  }

  function handleCancelRename() {
    setIsRenaming(false)
    setBuildName("")
  }

  const buildOptions = builds.map((build) => ({
    value: build.id,
    label: build.name,
  }))

  return (
    <>
      <h2 className="text-lg font-semibold">Build</h2>
      <div className="grid w-fit grid-cols-[auto_auto_auto_auto] gap-2">
        {/* Zeile 1 */}
        <div className="col-span-3">
          <Select
            items={buildOptions}
            value={activeBuildId}
            onValueChange={(value) => {
              if (value === null) {
                return
              }

              setIsRenaming(false)
              onActiveBuildChange(value)
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Build auswählen" />
            </SelectTrigger>

            <SelectContent>
              {buildOptions.map((build) => (
                <SelectItem key={build.value} value={build.value}>
                  {build.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {isRenaming ? (
          <div className="space-y-1">
            <Input
              ref={renameInputRef}
              value={buildName}
              onChange={(event) => setBuildName(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleRenameBuild()
                }

                if (event.key === "Escape") {
                  handleCancelRename()
                }
              }}
            />

            <p className="text-xs text-muted-foreground">
              Enter zum Bestätigen. ESC zum Abbrechen.
            </p>
          </div>
        ) : (
          <Button
            variant="outline"
            onClick={handleStartRename}
            disabled={!activeBuild}
          >
            Umbenennen
          </Button>
        )}

        {/* Zeile 2 */}
        <Button variant="secondary" onClick={handleAddBuild}>
          + Build
        </Button>

        <Button
          variant="outline"
          onClick={handleDuplicateBuild}
          disabled={!activeBuild}
        >
          Duplizieren
        </Button>

        <Button
          variant="destructive"
          onClick={() => setRemoveDialogOpen(true)}
          disabled={builds.length <= 1}
        >
          Entfernen
        </Button>
      </div>
      <ConfirmDialog
        open={removeDialogOpen}
        onOpenChange={setRemoveDialogOpen}
        title="Build wirklich entfernen?"
        description={`Der Build „${activeBuild?.name}“ wird vollständig entfernt. Dabei werden auch alle Tier-Konfigurationen dieses Builds gelöscht. Die globalen Items bleiben erhalten.`}
        confirmLabel="Entfernen"
        onConfirm={handleRemoveBuild}
      />
    </>
  )
}
