import { test } from '@jest/globals';
import { add, subtract, multiply, divide } from '../module/calculator';

test('adds 1 + 2 to equal 3', () => {
    expect(add(1,2)).toBe(3);
})

test('subtract 456 - 123 to equal 333', () => {
    expect(subtract(456,123)).toBe(333);
})

test('multiply 50 * 55 to equal 2750', () => {
    expect(multiply(50,55)).toBe(2750);
})

test('subtract 642 / 3 to equal 214', () => {
    expect(divide(642,3)).toBe(214);
})