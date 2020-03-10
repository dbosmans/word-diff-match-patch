import { characterDiff, wordDiff } from '../src'

describe('diff-match-patch tests', () => {

  test('character diff', () => {
    const diff = characterDiff("abc efg hij", "abc efx hij")
    expect(diff.length).toBe(4)
    expect(diff[2][1]).toBe('x')
  })

  test('word diff', () => {
    const diff = wordDiff("abc efg hij", "abc efx hij")
    expect(diff.length).toBe(4)
    expect(diff[2][1]).toBe('efx ')
  })

})