#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_JAR="${1:-$SCRIPT_DIR/ocean-lang-theme.jar}"

rm -f "$OUT_JAR"
(cd "$SCRIPT_DIR/resources" && zip -qr "$OUT_JAR" META-INF themes)
echo "Built $OUT_JAR"
