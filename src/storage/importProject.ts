import type { ProjectConfig } from "@/types/config"

function isProjectConfig(value: unknown): value is ProjectConfig {
  if (typeof value !== "object" || value === null) {
    return false
  }

  const project = value as Partial<ProjectConfig>

  return (
    Array.isArray(project.items) &&
    Array.isArray(project.builds) &&
    typeof project.activeBuildId === "string" &&
    typeof project.scripts === "object" &&
    project.scripts !== null
  )
}

function parseProject(text: string): ProjectConfig {
  const parsed: unknown = JSON.parse(text)

  if (!isProjectConfig(parsed)) {
    throw new Error("Die Datei enthält keine gültige Projektkonfiguration.")
  }

  return parsed
}

export async function importProject(file: File): Promise<ProjectConfig> {
  const text = await file.text()

  return parseProject(text)
}

export async function importProjectDesktop(): Promise<ProjectConfig | null> {
  const { open } = await import("@tauri-apps/plugin-dialog")
  const { readTextFile } = await import("@tauri-apps/plugin-fs")

  const path = await open({
    multiple: false,
    directory: false,
    filters: [
      {
        name: "Projektkonfiguration",
        extensions: ["json"],
      },
    ],
  })

  if (!path) {
    return null
  }

  const text = await readTextFile(path)

  return parseProject(text)
}
