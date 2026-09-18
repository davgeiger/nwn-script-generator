export type NwnSettings = {
  installPath: string
  homePath: string
}

const STORAGE_KEY = "nwn-settings"

const defaultSettings: NwnSettings = {
  installPath: "",
  homePath: "",
}

export function loadNwnSettings(): NwnSettings {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (!stored) {
    return defaultSettings
  }

  try {
    const parsed = JSON.parse(stored) as Partial<NwnSettings>

    return {
      installPath: parsed.installPath ?? "",
      homePath: parsed.homePath ?? "",
    }
  } catch {
    return defaultSettings
  }
}

export function saveNwnSettings(settings: NwnSettings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
}
