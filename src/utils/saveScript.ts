import { isTauri } from "./isTauri"

function downloadScript(filename: string, content: string) {
  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8",
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

async function saveScriptDesktop(filename: string, content: string) {
  const { save } = await import("@tauri-apps/plugin-dialog")
  const { writeTextFile } = await import("@tauri-apps/plugin-fs")

  const path = await save({
    defaultPath: filename,
    filters: [
      {
        name: "NWScript",
        extensions: ["nss"],
      },
    ],
  })

  if (!path) {
    return
  }

  await writeTextFile(path, content)
}

export async function saveScript(filename: string, content: string) {
  if (isTauri()) {
    await saveScriptDesktop(filename, content)
    return
  }

  downloadScript(filename, content)
}
