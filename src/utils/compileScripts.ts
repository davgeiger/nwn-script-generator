import type { GeneratedScriptFile } from "@/types/scripts"

export async function compileScripts(
  scripts: GeneratedScriptFile[],
  nwnInstallPath: string
) {
  const { Command } = await import("@tauri-apps/plugin-shell")
  const { BaseDirectory, mkdir, writeTextFile } =
    await import("@tauri-apps/plugin-fs")

  const workingDirectory = "compiler"

  await mkdir(workingDirectory, {
    baseDir: BaseDirectory.AppLocalData,
    recursive: true,
  })

  for (const script of scripts) {
    await writeTextFile(
      `${workingDirectory}/${script.filename}`,
      script.content,
      {
        baseDir: BaseDirectory.AppLocalData,
      }
    )
  }

  console.log("Skripte für Compiler vorbereitet:", scripts)
  console.log("NWN Installation:", nwnInstallPath)

  const { appLocalDataDir, join } = await import("@tauri-apps/api/path")

  const appDataPath = await appLocalDataDir()
  const sourcePath = await join(appDataPath, workingDirectory)

  console.log("Compiler-Arbeitsverzeichnis:", sourcePath)

  const compilableScripts = scripts.filter(
    (script) => !script.filename.startsWith("inc_")
  )

  for (const script of compilableScripts) {
    const scriptPath = await join(sourcePath, script.filename)

    const command = Command.sidecar("../binaries/nwnsc", [
      "-n",
      nwnInstallPath,
      "-i",
      sourcePath,
      "-b",
      sourcePath,
      scriptPath,
    ])

    const output = await command.execute()

    console.log(`Compiler: ${script.filename}`)
    console.log("Exit Code:", output.code)
    console.log("stdout:", output.stdout)
    console.log("stderr:", output.stderr)
  }
}
