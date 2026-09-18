import type { GeneratedScriptFile } from "@/types/scripts"

export type CompileResult = {
  filename: string
  success: boolean
  installed: boolean
  warnings: string[]
  error?: string
}

export async function compileScripts(
  scripts: GeneratedScriptFile[],
  nwnInstallPath: string,
  nwnHomePath: string
): Promise<CompileResult[]> {
  const { Command } = await import("@tauri-apps/plugin-shell")
  const { BaseDirectory, copyFile, exists, mkdir, remove, writeTextFile } =
    await import("@tauri-apps/plugin-fs")

  const workingDirectory = "compiler"

  const results: CompileResult[] = []

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

  const { appLocalDataDir, join } = await import("@tauri-apps/api/path")

  const appDataPath = await appLocalDataDir()
  const sourcePath = await join(appDataPath, workingDirectory)

  const developmentPath = await join(nwnHomePath, "development")

  await mkdir(developmentPath, {
    recursive: true,
  })

  const compilableScripts = scripts.filter(
    (script) => !script.filename.startsWith("inc_")
  )

  for (const script of compilableScripts) {
    try {
      const scriptPath = await join(sourcePath, script.filename)
      const ncsFilename = script.filename.replace(/\.nss$/i, ".ncs")
      const compiledPath = await join(sourcePath, ncsFilename)

      if (await exists(compiledPath)) {
        await remove(compiledPath)
      }

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

      const compilerOutput = `${output.stdout}\n${output.stderr}`

      const warnings = compilerOutput
        .split(/\r?\n/)
        .filter((line) => line.includes("Warning:"))
        .map((line) => line.trim())

      if (output.code !== 0) {
        results.push({
          filename: script.filename,
          success: false,
          installed: false,
          warnings,
          error:
            output.stderr.trim() ||
            output.stdout.trim() ||
            `Compiler wurde mit Exit-Code ${output.code} beendet.`,
        })

        continue
      }

      if (!(await exists(compiledPath))) {
        results.push({
          filename: script.filename,
          success: false,
          installed: false,
          warnings,
          error: `Keine NCS erzeugt: ${ncsFilename}`,
        })

        continue
      }

      const targetPath = await join(developmentPath, ncsFilename)

      await copyFile(compiledPath, targetPath)

      results.push({
        filename: script.filename,
        success: true,
        installed: true,
        warnings,
      })
    } catch (error) {
      results.push({
        filename: script.filename,
        success: false,
        installed: false,
        warnings: [],
        error: error instanceof Error ? error.message : String(error),
      })
    }
  }

  return results
}
