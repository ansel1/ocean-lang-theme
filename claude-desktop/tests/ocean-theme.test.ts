import { expect, test } from 'claude-code/testing'
import { checkColors } from '../hooks/make-colors.js'

test('/ocean-theme switches modes, sends valid surface colors, persists state, and rejects invalid args', async ($, on) => {
  const store = new Map<string, unknown>()
  const themeCalls: Array<Record<string, any>> = []
  let cleared = 0

  on('store.get', (_, e) => ({ value: store.get(e.key) }))
  on('store.set', (_, e) => {
    store.set(e.key, e.value)
    return { value: undefined }
  })
  on('theme.set', (_, e) => {
    themeCalls.push(e as Record<string, any>)
    return { value: { isDrawn: true } }
  })
  on('theme.clear', () => {
    cleared += 1
    return { value: { reason: 'cleared' } }
  })

  const initial = await $.command.run({ command: 'ocean-theme', args: '' })
  expect(initial.text).toContain('dark')

  const light = await $.command.run({ command: 'ocean-theme', args: 'light' })
  expect(light.text).toContain('Ocean Light applied')
  expect(themeCalls.length).toBe(1)
  expect(themeCalls[0].overrideColorScheme).toBe('light')
  expect(themeCalls[0].colors?.v).toBe(1)
  expect(Object.keys(themeCalls[0].colors?.inputs?.light ?? {}).length).toBeGreaterThan(50)
  expect(Object.keys(themeCalls[0].colors?.inputs?.dark ?? {}).length).toBeGreaterThan(50)

  const fatalProblems = checkColors(themeCalls[0].colors).filter((line) =>
    line.startsWith("Desktop won't paint"),
  )
  expect(fatalProblems).toEqual([])

  const abyss = await $.command.run({ command: 'ocean-theme', args: 'abyss' })
  expect(abyss.text).toContain('Ocean Abyss applied')
  expect(themeCalls.length).toBe(2)
  expect(themeCalls[1].overrideColorScheme).toBe('dark')
  expect(themeCalls[1].colors?.id).toBe('ocean-abyss')
  const abyssFatal = checkColors(themeCalls[1].colors).filter((line) =>
    line.startsWith("Desktop won't paint"),
  )
  expect(abyssFatal).toEqual([])

  const auto = await $.command.run({ command: 'ocean-theme', args: 'auto' })
  expect(auto.text).toContain('Ocean (Auto) applied')
  expect(themeCalls.length).toBe(3)
  expect(themeCalls[2].overrideColorScheme).toBeUndefined()

  const status = await $.command.run({ command: 'ocean-theme', args: '' })
  expect(status.text).toContain('auto')

  const off = await $.command.run({ command: 'ocean-theme', args: 'off' })
  expect(off.text).toContain('cleared')
  expect(cleared).toBe(1)

  const invalid = await $.command.run({ command: 'ocean-theme', args: 'purple' })
  expect(invalid.text).toContain('Unknown option')
})
