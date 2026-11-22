# Ocean Lang Theme for Claude Desktop

A Claude Code mod plugin that applies the **Ocean Dark** and **Ocean Light** backdrops, frosted-glass tints, and color schemes in the Claude Desktop app's **Code** tab.

## Installation

Add this directory to `CLAUDE_CODE_PLUGIN_DIRS` in `~/.claude/settings.json`:

```json
{
  "env": {
    "CLAUDE_CODE_PLUGIN_DIRS": "/path/to/ocean-lang-theme/claude-desktop"
  }
}
```

Then start a new local session in Claude Desktop's **Code** tab (requires Claude Code v2.1.323+ and OS transparency enabled).

## Usage

* `/ocean-theme` — show the current setting
* `/ocean-theme dark` — apply Ocean Dark (default)
* `/ocean-theme light` — apply Ocean Light
* `/ocean-theme off` — clear the backdrop

## Optional: Full UI surface colors (`makeColors`)

Claude Desktop v2.1.324+ also supports overriding UI surface/text colors via `$.theme.set({ colors })` using the `make-colors.js` helper bundled in Claude Code's built-in `plugin-authoring` skill. To add full surface color overrides using your Ocean anchors:

1. In a local Claude Desktop Code session, ask Claude:
   `copy make-colors.js and make-colors.d.ts from your plugin-authoring skill into claude-desktop/hooks/`
2. Pass `colors` from `makeColors` into `$.theme.set` using the Ocean anchors:
   * **Dark:** `surface-0: #081120`, `text-primary: #e8eff9`, `text-muted: #a0aec2`
   * **Light:** `surface-0: #edf3fc`, `text-primary: #182d4d`, `text-muted: #526680`
