import { invoke } from "@tauri-apps/api/core"
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

  return invoke<boolean>("validate_nwn_installation", { path })
}
