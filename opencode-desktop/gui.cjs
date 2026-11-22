"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { Plugin, Theme } = require("@opencode/plugin/gui");

const oceanTheme = {
  $schema: "https://opencode.ai/desktop-theme.json",
  name: "Ocean",
  id: "ocean",
  light: {
    palette: {
      neutral: "#edf3fc",
      ink: "#182d4d",
      primary: "#245fbb",
      accent: "#0033b3",
      interactive: "#245fbb",
      success: "#067d17",
      warning: "#9a5b13",
      error: "#b3261e",
      info: "#2f4f86",
      diffAdd: "#067d17",
      diffDelete: "#b3261e",
    },
    overrides: {
      "syntax-comment": "#788496",
      "syntax-keyword": "#0033b3",
      "syntax-primitive": "#1c5a9e",
      "syntax-property": "#871094",
      "syntax-constant": "#1750eb",
      "syntax-string": "#067d17",
      "syntax-type": "#1f4e79",
      "syntax-variable": "#1f2d3d",
      "syntax-operator": "#1f2d3d",
      "syntax-punctuation": "#1f2d3d",
    },
  },
  dark: {
    palette: {
      neutral: "#081120",
      ink: "#e8eff9",
      primary: "#79b8ff",
      accent: "#d58d52",
      interactive: "#79b8ff",
      success: "#83a271",
      warning: "#d58d52",
      error: "#d8736b",
      info: "#a3bad8",
      diffAdd: "#83a271",
      diffDelete: "#d8736b",
    },
    overrides: {
      "syntax-comment": "#6e7885",
      "syntax-keyword": "#d58d52",
      "syntax-primitive": "#7db0e6",
      "syntax-property": "#ab8fba",
      "syntax-constant": "#84aac8",
      "syntax-string": "#83a271",
      "syntax-type": "#8bbfca",
      "syntax-variable": "#c2ccd6",
      "syntax-operator": "#c2ccd6",
      "syntax-punctuation": "#c2ccd6",
    },
  },
};

const oceanAbyssTheme = {
  $schema: "https://opencode.ai/desktop-theme.json",
  name: "Ocean Abyss",
  id: "ocean-abyss",
  light: oceanTheme.light,
  dark: {
    palette: {
      neutral: "#050b16",
      ink: "#f5f9ff",
      primary: "#8ec4ff",
      accent: "#f0ac6e",
      interactive: "#8ec4ff",
      success: "#9ec788",
      warning: "#f0ac6e",
      error: "#f08a82",
      info: "#bdd5f2",
      diffAdd: "#9ec788",
      diffDelete: "#f08a82",
    },
    overrides: {
      "syntax-comment": "#8a9db8",
      "syntax-keyword": "#f0ac6e",
      "syntax-primitive": "#8ec4ff",
      "syntax-property": "#c8aad9",
      "syntax-constant": "#9bc7ea",
      "syntax-string": "#9ec788",
      "syntax-type": "#9fe0ec",
      "syntax-variable": "#e6eef8",
      "syntax-operator": "#e6eef8",
      "syntax-punctuation": "#e6eef8",
    },
  },
};

exports.default = Plugin.define({
  setup(ctx) {
    ctx.add(Theme, oceanTheme);
    ctx.add(Theme, oceanAbyssTheme);
  },
});
