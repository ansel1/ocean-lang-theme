# Ocean Lang Theme for JetBrains IDEs

Dark and light UI themes and editor color schemes (**Ocean Dark** and **Ocean Light**) for all JetBrains IDEs (GoLand, IntelliJ IDEA, PyCharm, WebStorm, RustRover, CLion, Rider, DataGrip, etc.).

Built on the modern JetBrains **Islands** UI (`Islands Dark` / `Islands Light`) with full editor syntax highlighting, Go-specific token mappings, diffs, diagnostics, and terminal ANSI colors.

## Build

```bash
./build.sh
```

This creates `ocean-lang-theme.jar` (pure resource plugin — no Gradle or JDK build required).

## Install

### Option 1: Install Plugin from Disk (any JetBrains IDE)
1. Open **Settings → Plugins → ⚙️ → Install Plugin from Disk...**
2. Select `jetbrains/ocean-lang-theme.jar` and restart the IDE.
3. Open **Settings → Appearance & Behavior → Appearance → Theme** and choose **Ocean Dark** or **Ocean Light** (supports **Sync with OS** too).

### Option 2: Direct install into a JetBrains plugins directory (macOS)
```bash
mkdir -p "$HOME/Library/Application Support/JetBrains/GoLand2026.3/plugins/ocean-lang-theme/lib"
./build.sh "$HOME/Library/Application Support/JetBrains/GoLand2026.3/plugins/ocean-lang-theme/lib/ocean-lang-theme.jar"
```
Then restart GoLand and select **Ocean Dark** or **Ocean Light** under **Settings → Appearance & Behavior → Appearance → Theme**.
