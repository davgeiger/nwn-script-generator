import JSZip from "jszip"

import type { GeneratedScriptFile } from "@/types/scripts"
import { isTauri } from "./isTauri"

export async function saveScriptPackage(
  scripts: GeneratedScriptFile[],
  filename = "nwn-level-items.zip"
) {
  const zip = new JSZip()

  for (const script of scripts) {
    zip.file(script.filename, script.content)
  }

  if (isTauri()) {
    await saveScriptPackageDesktop(zip, filename)
    return
  }

  await saveScriptPackageWeb(zip, filename)
}

async function saveScriptPackageDesktop(zip: JSZip, filename: string) {
  const { save } = await import("@tauri-apps/plugin-dialog")
  const { writeFile } = await import("@tauri-apps/plugin-fs")

  const path = await save({
    defaultPath: filename,
    filters: [
      {
        name: "ZIP-Archiv",
        extensions: ["zip"],
      },
    ],
  })

  if (!path) {
    return
  }

  const data = await zip.generateAsync({
    type: "uint8array",
  })

  await writeFile(path, data)
}

async function saveScriptPackageWeb(zip: JSZip, filename: string) {
  const blob = await zip.generateAsync({
    type: "blob",
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
