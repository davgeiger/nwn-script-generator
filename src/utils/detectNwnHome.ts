import { homeDir, join } from "@tauri-apps/api/path"
import { isValidNwnHome } from "@/utils/validateNwnPaths"

export async function detectNwnHome(): Promise<string | null> {
  const home = await homeDir()

  const candidate = await join(home, "Documents", "Neverwinter Nights")

  if (await isValidNwnHome(candidate)) {
    return candidate
  }

  return null
}
