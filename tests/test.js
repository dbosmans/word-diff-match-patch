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
    expect(diff[2][1]).toBe('efx')
  })

  test('word diff add', () => {
    const diff = wordDiff("abc", "abc efx")
    expect(diff.length).toBe(2)
    expect(diff[1][1]).toBe(' efx')
  })

  test('word diff add same', () => {
    const diff = wordDiff("abc", "abc abc")
    expect(diff.length).toBe(2)
    expect(diff[1][1]).toBe(' abc')
  })

  test('word diff add in the middle', () => {
    const diff = wordDiff("abc ghi", "abc def ghi")
    expect(diff.length).toBe(3)
    expect(diff[1][1]).toBe('def ')
  })

})