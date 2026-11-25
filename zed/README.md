# Ocean for Zed & Gram

Full [Zed](https://zed.dev) and [Gram](https://gram-editor.com) extension for the [Ocean Programming Language](https://ocean-lang.dev), providing:

- **Tree-sitter grammar** for `.oc` files (highlighting, bracket matching, auto-indentation) from [`ocean-foundation/ocean-c`](https://github.com/ocean-foundation/ocean-c/tree/main/editors/helix/grammar)
- **Language server support** via `ocean check --lsp`
- **Themes**: Ocean Dark, Ocean Abyss, and Ocean Light (`themes/ocean.json`)

## Prerequisites

- The `ocean` CLI installed on your `PATH` (or configured via `lsp.ocean-lsp.binary.path` below)
- Rust installed via `rustup` with the `wasm32-wasip2` target (`rustup target add wasm32-wasip2`) — required by Zed/Gram to build dev extensions locally

## Installation

### Zed

1. Open the Command Palette (`⌘⇧P` / `Ctrl+Shift+P`).
2. Run **zed: install dev extension**.
3. Select this `zed/` directory.

### Gram

1. Open the Command Palette (`⌘⇧P` / `Ctrl+Shift+P`).
2. Run **gram: install dev extension** (or **Extensions → Install Dev Extension**).
3. Select this `zed/` directory.

### Themes Only

If you only want the color themes without the language extension, copy `themes/ocean.json` into `~/.config/zed/themes/` (Zed) or `~/.config/gram/themes/` (Gram) and select **Ocean Dark**, **Ocean Abyss**, or **Ocean Light** in the Theme Selector.

## Language Server Configuration

By default, the extension runs `ocean check --lsp` using the `ocean` executable found on your `PATH`.

To override the binary path, arguments, or environment variables (for example, `OCEAN_SRC` when using a compiler built from a development checkout), add an `lsp` block to your Zed `settings.json` or Gram `settings.jsonc`:

```json
{
  "lsp": {
    "ocean-lsp": {
      "binary": {
        "path": "/path/to/ocean",
        "arguments": ["check", "--lsp"],
        "env": {
          "OCEAN_SRC": "/absolute/path/to/ocean-src"
        }
      }
    }
  }
}
```
