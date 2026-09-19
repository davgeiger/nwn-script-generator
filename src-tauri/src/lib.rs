#[cfg(target_os = "windows")]
#[tauri::command]
fn detect_nwn_installation() -> Result<Option<String>, String> {
    use std::fs;
    use std::path::PathBuf;
    use winreg::enums::HKEY_CURRENT_USER;
    use winreg::RegKey;

    // Steam-Installationsverzeichnis aus der Registry lesen
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);

    let steam = hkcu
        .open_subkey("Software\\Valve\\Steam")
        .map_err(|error| error.to_string())?;

    let steam_path: String = steam
        .get_value("SteamPath")
        .map_err(|error| error.to_string())?;

    let steam_path = steam_path.replace('/', "\\");

    // Steam selbst ist immer ebenfalls eine mögliche Library.
    let mut library_paths = vec![PathBuf::from(&steam_path)];

    // Zusätzliche Steam-Libraries aus libraryfolders.vdf lesen.
    let library_file = PathBuf::from(&steam_path)
        .join("steamapps")
        .join("libraryfolders.vdf");

    if let Ok(contents) = fs::read_to_string(library_file) {
        for line in contents.lines() {
            let trimmed = line.trim();

            if !trimmed.starts_with("\"path\"") {
                continue;
            }

            // Beispiel:
            // "path"    "D:\\SteamLibrary"
            let parts: Vec<&str> = trimmed
                .split('"')
                .collect();

            if parts.len() < 4 {
                continue;
            }

            let path = parts[3].replace("\\\\", "\\");

            if !path.is_empty() {
                library_paths.push(PathBuf::from(path));
            }
        }
    }

    // In allen gefundenen Steam-Libraries nach NWN suchen.
    for library_path in library_paths {
        let nwn_path = library_path
            .join("steamapps")
            .join("common")
            .join("Neverwinter Nights");

        if is_nwn_installation(&nwn_path) {
            return Ok(Some(
                nwn_path.to_string_lossy().into_owned()
            ));
        }
    }

    Ok(None)
}
#[cfg(target_os = "windows")]
fn is_nwn_installation(path: &std::path::Path) -> bool {
    path.join("bin")
        .join("win32")
        .join("nwmain.exe")
        .is_file()
        && path.join("data").is_dir()
}
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_persisted_scope::init())
        .plugin(tauri_plugin_dialog::init())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![        
        detect_nwn_installation
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
