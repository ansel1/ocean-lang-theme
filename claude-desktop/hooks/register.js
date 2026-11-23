import { makeColors } from './make-colors.js'

const STORE_KEY = 'ocean-theme:mode'
const COMMAND = 'ocean-theme'

const { theme: OCEAN_COLORS } = makeColors({
  id: 'ocean-lang',
  label: 'Ocean',
  roles: {
    accent: '#245fbb',
    danger: '#b3261e',
    success: '#067d17',
    warning: '#9a5b13',
    pro: '#871094',
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#081120',
        'surface-1': '#0c1729',
        'surface-2': '#101e34',
        'surface-3': '#14243d',
        'text-primary': '#e8eff9',
        'text-secondary': '#c2ccd6',
        'text-muted': '#a0aec2',
      },
    },
    roles: {
      accent: '#79b8ff',
      danger: '#d8736b',
      success: '#83a271',
      warning: '#d58d52',
      pro: '#ab8fba',
    },
    git: {
      added: '#83a271',
      removed: '#d8736b',
      modified: '#d58d52',
      merged: '#ab8fba',
      closed: '#d8736b',
      conflicting: '#ab8fba',
      draft: '#a0aec2',
    },
  },
  light: {
    gray: {
      anchors: {
        'surface-0': '#e3ebf7',
        'surface-1': '#edf3fc',
        'surface-2': '#f5f9ff',
        'surface-3': '#f5f9ff',
        'text-primary': '#182d4d',
        'text-secondary': '#344b6b',
        'text-muted': '#526680',
      },
    },
    git: {
      added: '#067d17',
      removed: '#b3261e',
      modified: '#9a5b13',
      merged: '#871094',
      closed: '#b3261e',
      conflicting: '#871094',
      draft: '#526680',
    },
  },
})

const { theme: OCEAN_ABYSS_COLORS } = makeColors({
  id: 'ocean-abyss',
  label: 'Ocean Abyss',
  roles: {
    accent: '#245fbb',
    danger: '#b3261e',
    success: '#067d17',
    warning: '#9a5b13',
    pro: '#871094',
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#050b16',
        'surface-1': '#0a1426',
        'surface-2': '#0e1b30',
        'surface-3': '#142540',
        'text-primary': '#f5f9ff',
        'text-secondary': '#e6eef8',
        'text-muted': '#b8c7dc',
      },
    },
    roles: {
      accent: '#8ec4ff',
      danger: '#f08a82',
      success: '#9ec788',
      warning: '#f0ac6e',
      pro: '#c8aad9',
    },
    git: {
      added: '#9ec788',
      removed: '#f08a82',
      modified: '#f0ac6e',
      merged: '#c8aad9',
      closed: '#f08a82',
      conflicting: '#c8aad9',
      draft: '#b8c7dc',
    },
  },
  light: {
    gray: {
      anchors: {
        'surface-0': '#e3ebf7',
        'surface-1': '#edf3fc',
        'surface-2': '#f5f9ff',
        'surface-3': '#f5f9ff',
        'text-primary': '#182d4d',
        'text-secondary': '#344b6b',
        'text-muted': '#526680',
      },
    },
    git: {
      added: '#067d17',
      removed: '#b3261e',
      modified: '#9a5b13',
      merged: '#871094',
      closed: '#b3261e',
      conflicting: '#871094',
      draft: '#526680',
    },
  },
})

const THEMES = {
  dark: {
    scene: 'ocean-dark',
    title: 'Ocean Dark',
    window: 'dark',
    colors: OCEAN_COLORS,
    glass: { blur: 14, tint: '#0d182b', opacity: 0.55 },
  },
  abyss: {
    scene: 'ocean-abyss',
    title: 'Ocean Abyss',
    window: 'dark',
    colors: OCEAN_ABYSS_COLORS,
    glass: { blur: 14, tint: '#0e1b30', opacity: 0.55 },
  },
  light: {
    scene: 'ocean-light',
    title: 'Ocean Light',
    window: 'light',
    colors: OCEAN_COLORS,
    glass: { blur: 14, tint: '#e3ebf7', opacity: 0.55 },
  },
  auto: {
    scene: 'ocean-auto',
    title: 'Ocean (Auto)',
    window: undefined,
    colors: OCEAN_COLORS,
    glass: { blur: 14, opacity: 0.55 },
  },
}

const STILL = '@media (prefers-reduced-motion: reduce) { * { animation: none !important } }'

function oceanDarkSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <style>
    .swell { animation: drift 48s ease-in-out infinite alternate; }
    .swell.b { animation-duration: 64s; animation-direction: alternate-reverse; }
    @keyframes drift { from { transform: translateX(-50px); } to { transform: translateX(50px); } }
    ${STILL}
  </style>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d182b"/>
      <stop offset="0.5" stop-color="#081120"/>
      <stop offset="1" stop-color="#060d18"/>
    </linearGradient>
    <radialGradient id="accentGlow">
      <stop offset="0" stop-color="#79b8ff" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#79b8ff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="tealGlow">
      <stop offset="0" stop-color="#27babf" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#27babf" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="calm" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="#081120" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#081120" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)"/>
  <g class="swell">
    <ellipse cx="220" cy="120" rx="560" ry="260" fill="url(#accentGlow)"/>
    <ellipse cx="1420" cy="880" rx="580" ry="280" fill="url(#tealGlow)"/>
  </g>
  <g class="swell b">
    <ellipse cx="1400" cy="140" rx="500" ry="240" fill="url(#tealGlow)"/>
    <ellipse cx="200" cy="900" rx="520" ry="240" fill="url(#accentGlow)"/>
  </g>
  <rect width="1600" height="1000" fill="url(#calm)"/>
</svg>`
}

function oceanAbyssSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <style>
    .swell { animation: drift 48s ease-in-out infinite alternate; }
    .swell.b { animation-duration: 64s; animation-direction: alternate-reverse; }
    @keyframes drift { from { transform: translateX(-50px); } to { transform: translateX(50px); } }
    ${STILL}
  </style>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0e1b30"/>
      <stop offset="0.5" stop-color="#050b16"/>
      <stop offset="1" stop-color="#030810"/>
    </linearGradient>
    <radialGradient id="accentGlow">
      <stop offset="0" stop-color="#8ec4ff" stop-opacity="0.14"/>
      <stop offset="1" stop-color="#8ec4ff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="tealGlow">
      <stop offset="0" stop-color="#48dbe0" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#48dbe0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="calm" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="#050b16" stop-opacity="0.40"/>
      <stop offset="1" stop-color="#050b16" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)"/>
  <g class="swell">
    <ellipse cx="220" cy="120" rx="560" ry="260" fill="url(#accentGlow)"/>
    <ellipse cx="1420" cy="880" rx="580" ry="280" fill="url(#tealGlow)"/>
  </g>
  <g class="swell b">
    <ellipse cx="1400" cy="140" rx="500" ry="240" fill="url(#tealGlow)"/>
    <ellipse cx="200" cy="900" rx="520" ry="240" fill="url(#accentGlow)"/>
  </g>
  <rect width="1600" height="1000" fill="url(#calm)"/>
</svg>`
}

function oceanLightSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <style>
    .swell { animation: drift 48s ease-in-out infinite alternate; }
    .swell.b { animation-duration: 64s; animation-direction: alternate-reverse; }
    @keyframes drift { from { transform: translateX(-50px); } to { transform: translateX(50px); } }
    ${STILL}
  </style>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#edf3fc"/>
      <stop offset="0.55" stop-color="#e3ebf7"/>
      <stop offset="1" stop-color="#d4e2f5"/>
    </linearGradient>
    <radialGradient id="accentGlow">
      <stop offset="0" stop-color="#245fbb" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#245fbb" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="tealGlow">
      <stop offset="0" stop-color="#00707b" stop-opacity="0.09"/>
      <stop offset="1" stop-color="#00707b" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="calm" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="#edf3fc" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#edf3fc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)"/>
  <g class="swell">
    <ellipse cx="220" cy="120" rx="560" ry="260" fill="url(#accentGlow)"/>
    <ellipse cx="1420" cy="880" rx="580" ry="280" fill="url(#tealGlow)"/>
  </g>
  <g class="swell b">
    <ellipse cx="1400" cy="140" rx="500" ry="240" fill="url(#tealGlow)"/>
    <ellipse cx="200" cy="900" rx="520" ry="240" fill="url(#accentGlow)"/>
  </g>
  <rect width="1600" height="1000" fill="url(#calm)"/>
</svg>`
}

function oceanAutoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <style>
    .swell { animation: drift 48s ease-in-out infinite alternate; }
    .swell.b { animation-duration: 64s; animation-direction: alternate-reverse; }
    @keyframes drift { from { transform: translateX(-50px); } to { transform: translateX(50px); } }
    .mode-light { display: none; }
    @media (prefers-color-scheme: light) {
      .mode-dark { display: none; }
      .mode-light { display: inline; }
    }
    ${STILL}
  </style>
  <defs>
    <linearGradient id="bg-dark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d182b"/>
      <stop offset="0.5" stop-color="#081120"/>
      <stop offset="1" stop-color="#060d18"/>
    </linearGradient>
    <radialGradient id="accentGlow-dark">
      <stop offset="0" stop-color="#79b8ff" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#79b8ff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="tealGlow-dark">
      <stop offset="0" stop-color="#27babf" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#27babf" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="calm-dark" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="#081120" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#081120" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bg-light" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#edf3fc"/>
      <stop offset="0.55" stop-color="#e3ebf7"/>
      <stop offset="1" stop-color="#d4e2f5"/>
    </linearGradient>
    <radialGradient id="accentGlow-light">
      <stop offset="0" stop-color="#245fbb" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#245fbb" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="tealGlow-light">
      <stop offset="0" stop-color="#00707b" stop-opacity="0.09"/>
      <stop offset="1" stop-color="#00707b" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="calm-light" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="#edf3fc" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#edf3fc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <g class="mode-dark">
    <rect width="1600" height="1000" fill="url(#bg-dark)"/>
    <g class="swell">
      <ellipse cx="220" cy="120" rx="560" ry="260" fill="url(#accentGlow-dark)"/>
      <ellipse cx="1420" cy="880" rx="580" ry="280" fill="url(#tealGlow-dark)"/>
    </g>
    <g class="swell b">
      <ellipse cx="1400" cy="140" rx="500" ry="240" fill="url(#tealGlow-dark)"/>
      <ellipse cx="200" cy="900" rx="520" ry="240" fill="url(#accentGlow-dark)"/>
    </g>
    <rect width="1600" height="1000" fill="url(#calm-dark)"/>
  </g>
  <g class="mode-light">
    <rect width="1600" height="1000" fill="url(#bg-light)"/>
    <g class="swell">
      <ellipse cx="220" cy="120" rx="560" ry="260" fill="url(#accentGlow-light)"/>
      <ellipse cx="1420" cy="880" rx="580" ry="280" fill="url(#tealGlow-light)"/>
    </g>
    <g class="swell b">
      <ellipse cx="1400" cy="140" rx="500" ry="240" fill="url(#tealGlow-light)"/>
      <ellipse cx="200" cy="900" rx="520" ry="240" fill="url(#accentGlow-light)"/>
    </g>
    <rect width="1600" height="1000" fill="url(#calm-light)"/>
  </g>
</svg>`
}

async function applyMode($, mode) {
  if (mode === 'off') {
    await $.theme.clear()
    return { isDrawn: true }
  }
  const theme = THEMES[mode] ?? THEMES.dark
  const args = {
    colors: theme.colors,
    backdrop: { scene: theme.scene, id: theme.scene, glass: theme.glass },
  }
  if (theme.window) {
    args.overrideColorScheme = theme.window
  }
  return $.theme.set(args)
}

function normalizeMode(value) {
  if (value === 'abyss' || value === 'light' || value === 'auto' || value === 'off') {
    return value
  }
  return 'dark'
}

export function register(on) {
  on('session.start', async ($, e, next) => {
    try {
      await $.command.register({
        name: COMMAND,
        description: 'Switch Ocean Desktop theme: dark, abyss, light, auto, or off.',
      })
    } catch {
      // Command registration can fail if another plugin claimed the name.
    }

    try {
      const saved = await $.store.get(STORE_KEY)
      const mode = normalizeMode(saved)
      if (mode !== 'off') {
        await applyMode($, mode)
      }
    } catch {
      // Ignore if surface does not support $.theme.set (e.g., terminal-only).
    }

    return next(e)
  })

  on('command.run', { command: COMMAND }, async ($, e) => {
    const arg = (e.args ?? '').trim().toLowerCase()

    if (arg === '') {
      const saved = await $.store.get(STORE_KEY)
      const current = normalizeMode(saved)
      return {
        text: `Ocean Desktop theme is currently "${current}". Use /${COMMAND} dark, /${COMMAND} abyss, /${COMMAND} light, /${COMMAND} auto, or /${COMMAND} off.`,
      }
    }

    if (arg !== 'dark' && arg !== 'abyss' && arg !== 'light' && arg !== 'auto' && arg !== 'off') {
      return {
        text: `Unknown option "${arg}". Use /${COMMAND} dark, /${COMMAND} abyss, /${COMMAND} light, /${COMMAND} auto, or /${COMMAND} off.`,
      }
    }

    await $.store.set(STORE_KEY, arg)
    try {
      const res = await applyMode($, arg)
      if (arg === 'off') {
        return { text: 'Ocean Desktop theme cleared.' }
      }
      const note = res?.isDrawn === false ? ' (Saved; only Claude Desktop draws themes.)' : ''
      return { text: `${THEMES[arg].title} applied.${note}` }
    } catch (err) {
      return { text: `Saved "${arg}", but could not apply theme here: ${err?.message ?? String(err)}` }
    }
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.props.plugin !== $.plugin.name || e.surface !== 'desktop') {
      return next(e)
    }

    const scene = e.props.scene ?? e.props.id
    if (
      scene !== 'ocean-dark' &&
      scene !== 'ocean-abyss' &&
      scene !== 'ocean-light' &&
      scene !== 'ocean-auto'
    ) {
      return next(e)
    }

    const { Svg } = $.ui.resolve(e)
    if (scene === 'ocean-dark') {
      return Svg({ isInteractive: false, alt: 'Ocean Dark backdrop', source: oceanDarkSvg() })
    }
    if (scene === 'ocean-abyss') {
      return Svg({ isInteractive: false, alt: 'Ocean Abyss backdrop', source: oceanAbyssSvg() })
    }
    if (scene === 'ocean-light') {
      return Svg({ isInteractive: false, alt: 'Ocean Light backdrop', source: oceanLightSvg() })
    }
    return Svg({ isInteractive: false, alt: 'Ocean adaptive backdrop', source: oceanAutoSvg() })
  })
}
