# Ocean Lang Theme

Dark and light themes based on the [Ocean Programming Language](https://ocean-lang.dev) Helix themes from [`ocean-foundation/ocean-c`](https://github.com/ocean-foundation/ocean-c/tree/main/editors/helix/themes), converted for Zed, Rex (Ghostty), T3 Code, and `bat`.

## Included Themes

| App | Files | Installation |
| --- | --- | --- |
| **Helix** | `helix/ocean-dark.toml`, `helix/ocean-light.toml` | Copy to `~/.config/helix/themes/` and select with `:theme ocean-dark` or `:theme ocean-light`. |
| **Zed** | `zed/ocean.json` | Copy to `~/.config/zed/themes/` and select **Ocean Dark** or **Ocean Light** in the Theme Selector. |
| **Rex** (Ghostty format) | `rex/Ocean Dark`, `rex/Ocean Light` | In Rex, open **Settings → Themes → Import Theme File** and choose either file (or copy to `~/.config/ghostty/themes/` for Ghostty). |
| **T3 Code** | `t3code/ocean-lang.json` | Copy to `~/.t3/userdata/themes/` (supports both dark and light modes; named `ocean-lang.json` to avoid colliding with T3 Code's built-in `ocean` theme). |
| **bat** | `bat/ocean-dark.tmTheme`, `bat/ocean-light.tmTheme` | Copy to `$(bat --config-dir)/themes/`, run `bat cache --build`, and use `--theme=ocean-dark` or `--theme=ocean-light`. |
| **Slack** | `slack/README.md` | Paste the theme string into **Preferences → Appearance → Custom theme → Import**. |
| **VS Code** | `vscode/` | Copy or symlink `vscode/` to `~/.vscode/extensions/ocean-lang-theme` and select **Ocean Dark** or **Ocean Light** in Color Theme (`⌘K ⌘T`). |
