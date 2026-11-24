use zed_extension_api::{self as zed, settings::LspSettings, LanguageServerId, Result, Worktree};

struct OceanExtension;

impl zed::Extension for OceanExtension {
    fn new() -> Self {
        Self
    }

    fn language_server_command(
        &mut self,
        language_server_id: &LanguageServerId,
        worktree: &Worktree,
    ) -> Result<zed::Command> {
        let lsp_settings = LspSettings::for_worktree(language_server_id.as_ref(), worktree).ok();
        let binary_settings = lsp_settings
            .as_ref()
            .and_then(|settings| settings.binary.as_ref());

        let command = match binary_settings.and_then(|binary| binary.path.clone()) {
            Some(path) => path,
            None => worktree.which("ocean").ok_or_else(|| {
                "Unable to find the 'ocean' binary on PATH. Install Ocean or set lsp.ocean-lsp.binary.path in your settings."
                    .to_string()
            })?,
        };

        let args = binary_settings
            .and_then(|binary| binary.arguments.clone())
            .unwrap_or_else(|| vec!["check".to_string(), "--lsp".to_string()]);

        let mut env = worktree.shell_env();
        if let Some(binary_env) = binary_settings.and_then(|binary| binary.env.as_ref()) {
            for (key, value) in binary_env {
                if let Some((_, existing)) = env.iter_mut().find(|(k, _)| k == key) {
                    *existing = value.clone();
                } else {
                    env.push((key.clone(), value.clone()));
                }
            }
        }

        Ok(zed::Command { command, args, env })
    }
}

zed::register_extension!(OceanExtension);
