import type { ProjectConfig } from "@/types/config"

export function exportProject(
  config: ProjectConfig,
  filename = "nwn-script-generator-project.json"
) {
  const json = JSON.stringify(config, null, 2)

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
