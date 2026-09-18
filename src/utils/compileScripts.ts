import type { GeneratedScriptFile } from "@/types/scripts"

export async function compileScripts(
  scripts: GeneratedScriptFile[],
  nwnInstallPath: string,
  nwnHomePath: string
) {
  const { Command } = await import("@tauri-apps/plugin-shell")
  const { BaseDirectory, exists, mkdir, readFile, writeFile, writeTextFile } =
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

  const developmentPath = await join(nwnHomePath, "development")

  console.log("NWN Development:", developmentPath)

  await mkdir(developmentPath, {
    recursive: true,
  })

  const compilableScripts = scripts.filter(
    (script) => !script.filename.startsWith("inc_")
  )

  for (const script of compilableScripts) {
    const scriptPath = await join(sourcePath, script.filename)

    const command = Command.sidecar("../binaries/nwnsc", [
      "-h",
      nwnHomePath,
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

    const ncsFilename = script.filename.replace(/\.nss$/i, ".ncs")
    const compiledPath = await join(sourcePath, ncsFilename)

    if (output.code !== 0) {
      console.error(`Kompilierung fehlgeschlagen: ${script.filename}`)
      continue
    }

    if (!(await exists(compiledPath))) {
      console.error(`Keine NCS erzeugt: ${ncsFilename}`)
      continue
    }

    const compiledData = await readFile(compiledPath)

    const targetPath = await join(developmentPath, ncsFilename)

    await writeFile(targetPath, compiledData)

    console.log(`Installiert: ${targetPath}`)
  }
}
