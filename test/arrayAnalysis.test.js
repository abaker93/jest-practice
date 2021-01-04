import { expect, test } from '@jest/globals';
import { average, min, max, length } from '../module/arrayAnalysis'

test('finds average of array', () => {
    expect(average([1,8,3,4,2,6])).toBe(4)
})

test('finds smallest number in array', () => {
    expect(min([1,8,3,4,2,6])).toBe(1)
})

test('finds largest number in array', () => {
    expect(max([1,8,3,4,2,6])).toBe(8)
})

test('finds length of array', () => {
    expect(length([1,8,3,4,2,6])).toBe(6)
})