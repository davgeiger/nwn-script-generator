import type { ProjectConfig } from "@/types/config"

export async function exportProject(
  config: ProjectConfig,
  filename = "nwn-script-generator-project.json"
) {
  const json = JSON.stringify(config, null, 2)

  if ("__TAURI_INTERNALS__" in window) {
    await exportProjectDesktop(json, filename)
    return
  }

  exportProjectWeb(json, filename)
}

async function exportProjectDesktop(json: string, filename: string) {
  const { save } = await import("@tauri-apps/plugin-dialog")
  const { writeTextFile } = await import("@tauri-apps/plugin-fs")

  const path = await save({
    defaultPath: filename,
    filters: [
      {
        name: "Projektkonfiguration",
        extensions: ["json"],
      },
    ],
  })

  if (!path) {
    return
  }

  await writeTextFile(path, json)
}

function exportProjectWeb(json: string, filename: string) {
  const blob = new Blob([json], {
    type: "application/json",
  })

  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = filename

  document.body.appendChild(link)
  link.click()
  link.remove()

  URL.revokeObjectURL(url)
}
