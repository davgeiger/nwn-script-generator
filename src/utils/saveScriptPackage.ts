import JSZip from "jszip"

import type { GeneratedScriptFile } from "@/types/scripts"

export async function saveScriptPackage(
  scripts: GeneratedScriptFile[],
  filename = "nwn-level-items.zip"
) {
  const zip = new JSZip()

  for (const script of scripts) {
    zip.file(script.filename, script.content)
  }

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
