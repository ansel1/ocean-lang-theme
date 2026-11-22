# Ocean Lang Theme

Dark and light themes based on the [Ocean Programming Language](https://ocean-lang.dev) Helix themes from [`ocean-foundation/ocean-c`](https://github.com/ocean-foundation/ocean-c/tree/main/editors/helix/themes), converted for Zed, Rex (Ghostty), T3 Code, TextMate (`.tmTheme`), VS Code, OpenCode, Claude Code, Claude Desktop, and Pi.

## Included Themes

| App | Files | Installation |
| --- | --- | --- |
| **Helix** | `helix/ocean-dark.toml`, `helix/ocean-light.toml` | Copy to `~/.config/helix/themes/` and select with `:theme ocean-dark` or `:theme ocean-light`. |
| **Zed** | `zed/ocean.json` | Copy to `~/.config/zed/themes/` and select **Ocean Dark** or **Ocean Light** in the Theme Selector. |
| **Rex** (Ghostty format) | `rex/Ocean Dark`, `rex/Ocean Light` | In Rex, open **Settings → Themes → Import Theme File** and choose either file (or copy to `~/.config/ghostty/themes/` for Ghostty). |
| **T3 Code** | `t3code/ocean-lang.json` | Copy to `~/.t3/userdata/themes/` (supports both dark and light modes; named `ocean-lang.json` to avoid colliding with T3 Code's built-in `ocean` theme). |
| **TextMate** (`.tmTheme`) | `textmate/ocean-dark.tmTheme`, `textmate/ocean-light.tmTheme` | Standard TextMate XML theme format used by **Codex CLI**, **`bat`**, **`git-delta`**, **Sublime Text**, **TextMate**, and other `syntect`-based tools.<br>• **Codex CLI:** Copy/symlink to `~/.codex/themes/` and set `theme = "ocean-dark"` (or `"ocean-light"`) under `[tui]` in `~/.codex/config.toml` (or pick via `/theme`).<br>• **`bat` / `git-delta`:** Copy to `$(bat --config-dir)/themes/`, run `bat cache --build`, and use `--theme=ocean-dark` or `--theme=ocean-light`. |
| **Slack** | `slack/README.md` | Paste the theme string into **Preferences → Appearance → Custom theme → Import**. |
| **VS Code** | `vscode/` | Package/install as a `.vsix` or copy `vscode/` into VS Code extensions (also works in Antigravity IDE), then select **Ocean Dark** or **Ocean Light** (`⌘K ⌘T`). |
| **OpenCode** | `opencode/ocean.json` | Copy to `~/.config/opencode/themes/ocean.json` and select `ocean` in OpenCode settings or `~/.config/opencode/cli.json`. |
| **OpenCode Desktop** | `opencode-desktop/ocean.json` | Uses the `DesktopTheme` (`https://opencode.ai/desktop-theme.json`) schema; load via an OpenCode Desktop GUI plugin (`ctx.add(Theme, theme)`). |
| **Claude Code** (CLI) | `claude-code/ocean-dark.json`, `claude-code/ocean-light.json` | Copy/symlink to `~/.claude/themes/` and select **Ocean Dark** or **Ocean Light** via `/theme` (or set `"theme": "custom:ocean-dark"` in `~/.claude/settings.json`). |
| **Claude Desktop** (Code tab) | `claude-desktop/` | Claude Code mod plugin. Add its absolute path to `CLAUDE_CODE_PLUGIN_DIRS` under `env` in `~/.claude/settings.json`, then switch variants with `/ocean-theme dark\|light\|off`. |
| **Pi** | `pi/ocean-dark.json`, `pi/ocean-light.json` | Copy/symlink to `~/.pi/agent/themes/` and select `ocean-dark` or `ocean-light` via `/theme` (or set `"theme": "ocean-light/ocean-dark"` in `~/.pi/agent/settings.json` for automatic light/dark switching). |
