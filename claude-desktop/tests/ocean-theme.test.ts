import { expect, test } from 'claude-code/testing'

test('/ocean-theme switches modes, persists state, and rejects invalid args', async ($, on) => {
  const store = new Map<string, unknown>()
  const themeCalls: unknown[] = []
  let cleared = 0

  on('store.get', (_, e) => ({ value: store.get(e.key) }))
  on('store.set', (_, e) => {
    store.set(e.key, e.value)
    return { value: undefined }
  })
  on('theme.set', (_, e) => {
    themeCalls.push(e)
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

  const status = await $.command.run({ command: 'ocean-theme', args: '' })
  expect(status.text).toContain('light')

  const off = await $.command.run({ command: 'ocean-theme', args: 'off' })
  expect(off.text).toContain('cleared')
  expect(cleared).toBe(1)

  const invalid = await $.command.run({ command: 'ocean-theme', args: 'purple' })
  expect(invalid.text).toContain('Unknown option')
})
