# Ocean Lang Theme

Dark and light themes based on the [Ocean Programming Language](https://ocean-lang.dev) Helix themes from [`ocean-foundation/ocean-c`](https://github.com/ocean-foundation/ocean-c/tree/main/editors/helix/themes), converted for Zed, Rex (Ghostty), T3 Code, TextMate (`.tmTheme`), VS Code, JetBrains IDEs, OpenCode, Claude Code, Claude Desktop, and Pi.

## Included Themes

| App | Files | Installation |
| --- | --- | --- |
| **Helix** | `helix/ocean-dark.toml`, `helix/ocean-abyss.toml`, `helix/ocean-light.toml` | Copy to `~/.config/helix/themes/` and select with `:theme ocean-dark`, `:theme ocean-abyss`, or `:theme ocean-light`. |
| **Zed** | `zed/ocean.json` | Copy to `~/.config/zed/themes/` and select **Ocean Dark**, **Ocean Abyss**, or **Ocean Light** in the Theme Selector. |
| **Rex** (Ghostty format) | `rex/Ocean Dark`, `rex/Ocean Abyss`, `rex/Ocean Light` | In Rex, open **Settings → Themes → Import Theme File** and choose any file (or copy to `~/.config/ghostty/themes/` for Ghostty). `Ocean Abyss` is a high-contrast dark variant tuned for bright lighting. |
| **T3 Code** | `t3code/ocean-lang.json`, `t3code/ocean-abyss.json` | Copy to `~/.t3/userdata/themes/` (both support dark and light modes; `ocean-lang.json` avoids colliding with T3 Code's built-in `ocean` theme, and `ocean-abyss.json` provides the high-contrast dark variant). |
| **TextMate** (`.tmTheme`) | `textmate/ocean-dark.tmTheme`, `textmate/ocean-abyss.tmTheme`, `textmate/ocean-light.tmTheme` | Standard TextMate XML theme format used by **Codex CLI**, **`bat`**, **`git-delta`**, **Sublime Text**, **TextMate**, and other `syntect`-based tools.<br>• **Codex CLI:** Copy/symlink to `~/.codex/themes/` and set `theme = "ocean-dark"` (or `"ocean-abyss"` / `"ocean-light"`) under `[tui]` in `~/.codex/config.toml` (or pick via `/theme`).<br>• **`bat` / `git-delta`:** Copy to `$(bat --config-dir)/themes/`, run `bat cache --build`, and use `--theme=ocean-dark`, `--theme=ocean-abyss`, or `--theme=ocean-light`. |
| **Slack** | `slack/README.md` | Paste the theme string (**Ocean Dark**, **Ocean Abyss**, or **Ocean Light**) into **Preferences → Appearance → Custom theme → Import**. |
| **VS Code** | `vscode/` | Package/install as a `.vsix` or copy `vscode/` into VS Code extensions (also works in Antigravity IDE), then select **Ocean Dark**, **Ocean Abyss**, or **Ocean Light** (`⌘K ⌘T`). |
| **JetBrains IDEs** (GoLand, IDEA, etc.) | `jetbrains/` | Run `./jetbrains/build.sh` to build `ocean-lang-theme.jar`, then **Settings → Plugins → ⚙️ → Install Plugin from Disk...** and pick **Ocean Dark**, **Ocean Abyss**, or **Ocean Light** in **Appearance → Theme**. |
| **OpenCode** | `opencode/ocean.json`, `opencode/ocean-abyss.json` | Copy to `~/.config/opencode/themes/` and select `ocean` or `ocean-abyss` in OpenCode settings or `~/.config/opencode/cli.json`. |
| **OpenCode Desktop** | `opencode-desktop/ocean.json`, `opencode-desktop/ocean-abyss.json` | Uses the `DesktopTheme` (`https://opencode.ai/desktop-theme.json`) schema; load via the OpenCode Desktop GUI plugin (`gui.cjs`, registers both `ocean` and `ocean-abyss`). |
| **Claude Code** (CLI) | `claude-code/ocean-dark.json`, `claude-code/ocean-abyss.json`, `claude-code/ocean-light.json` | Copy/symlink to `~/.claude/themes/` and select **Ocean Dark**, **Ocean Abyss**, or **Ocean Light** via `/theme` (or set `"theme": "custom:ocean-abyss"` in `~/.claude/settings.json`). |
| **Claude Desktop** (Code tab) | `claude-desktop/` | Claude Code mod plugin (full UI surface colors + animated SVG backdrops). Add its absolute path to `CLAUDE_CODE_PLUGIN_DIRS` under `env` in `~/.claude/settings.json`, then switch variants with `/ocean-theme dark\|abyss\|light\|auto\|off`. |
| **Pi** | `pi/ocean-dark.json`, `pi/ocean-abyss.json`, `pi/ocean-light.json` | Copy/symlink to `~/.pi/agent/themes/` and select `ocean-dark`, `ocean-abyss`, or `ocean-light` via `/theme` (or set `"theme": "ocean-light/ocean-abyss"` in `~/.pi/agent/settings.json` for automatic light/dark switching). |
