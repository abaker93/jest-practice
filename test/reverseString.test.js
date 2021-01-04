import reverseString from '../module/reverseString'

test('reverse single word', () => {
    expect(reverseString('hello')).toBe('olleh');
})

test('reverse multiple words', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
})

test('works with numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toBe('!cba !321');
})

test('works with blank strings', () => {
    expect(reverseString('')).toBe('');
})