// src/storage/projectStorage.ts

import type { ProjectConfig } from "@/types/config"

const STORAGE_KEY = "nwn-script-generator-project"
const STORAGE_VERSION = 1

type StoredProject = {
  version: number
  config: ProjectConfig
}

export function saveProject(config: ProjectConfig) {
  const data: StoredProject = {
    version: STORAGE_VERSION,
    config,
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function loadProject(): ProjectConfig | null {
  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return null
  }

  try {
    const data = JSON.parse(raw) as StoredProject

    if (data.version !== STORAGE_VERSION) {
      return null
    }

    return data.config
  } catch {
    return null
  }
}
