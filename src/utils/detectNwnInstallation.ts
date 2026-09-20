import { invoke } from "@tauri-apps/api/core"

export async function isValidNwnInstall(path: string) {
  if (!path) {
    return false
  }

  return invoke<boolean>("validate_nwn_installation", { path })
}

export async function detectNwnInstallation(): Promise<string | null> {
  return invoke<string | null>("detect_nwn_installation")
}
