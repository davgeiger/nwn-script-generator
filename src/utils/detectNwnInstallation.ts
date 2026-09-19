import { invoke } from "@tauri-apps/api/core"

export async function detectNwnInstallation(): Promise<string | null> {
  return invoke<string | null>("detect_nwn_installation")
}
