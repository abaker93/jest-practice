import capitalize from '../module/capitalize';

test('capitalize first letter of "hello"', () => {
    expect(capitalize('hello')).toBe('Hello');
})