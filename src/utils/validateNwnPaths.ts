import { exists } from "@tauri-apps/plugin-fs"
import { join } from "@tauri-apps/api/path"

export async function isValidNwnHome(path: string) {
  if (!path) {
    return false
  }

  const nwnIni = await join(path, "nwn.ini")
  const nwnPlayerIni = await join(path, "nwnplayer.ini")

  return (await exists(nwnIni)) && (await exists(nwnPlayerIni))
}

export async function isValidNwnInstall(path: string) {
  if (!path) {
    return false
  }

  const nwmain = await join(path, "bin", "win32", "nwmain.exe")
  const data = await join(path, "data")

  return (await exists(nwmain)) && (await exists(data))
}
