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

export async function importProject(file: File): Promise<ProjectConfig> {
  const text = await file.text()
  const parsed: unknown = JSON.parse(text)

  if (!isProjectConfig(parsed)) {
    throw new Error("Die Datei enthält keine gültige Projektkonfiguration.")
  }

  return parsed
}
