# Ocean Lang Theme for Claude Desktop

A Claude Code mod plugin that applies the full **Ocean Dark** and **Ocean Light** UI surface palettes (`colors` via `makeColors`), animated SVG backdrops, frosted-glass tints, and color schemes in the Claude Desktop app's **Code** tab.

## Installation

Add this directory to `CLAUDE_CODE_PLUGIN_DIRS` in `~/.claude/settings.json`:

```json
{
  "env": {
    "CLAUDE_CODE_PLUGIN_DIRS": "/path/to/ocean-lang-theme/claude-desktop"
  }
}
```

Then start a new local session in Claude Desktop's **Code** tab (requires Claude Code v2.1.324+ and OS transparency enabled for backdrops).

## Usage

* `/ocean-theme` — show the current setting
* `/ocean-theme dark` — apply Ocean Dark surfaces and backdrop (default)
* `/ocean-theme light` — apply Ocean Light surfaces and backdrop
* `/ocean-theme auto` — follow Claude Desktop's light/dark appearance automatically
* `/ocean-theme off` — clear the theme

## Surface Palette Anchors

Generated at load time via Claude Code's `hooks/make-colors.js` helper:

* **Dark:** `surface-0: #081120`, `surface-1: #0c1729`, `surface-2: #101e34`, `surface-3: #14243d`, `text-primary: #e8eff9`, `text-secondary: #c2ccd6`, `text-muted: #a0aec2`
* **Light:** `surface-0: #e3ebf7`, `surface-1: #edf3fc`, `surface-2: #f5f9ff`, `surface-3: #f5f9ff`, `text-primary: #182d4d`, `text-secondary: #344b6b`, `text-muted: #526680`
