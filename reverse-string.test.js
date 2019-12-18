const reverseString = require('./reverse-string');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
})

test('String is reversed with reverseString function', () => {
  expect(reverseString('hello')).toBe('olleh');
})

test('String is reversed with uppercase with reverseString function', () => {
  expect(reverseString('hello')).toBe('olleh');
})