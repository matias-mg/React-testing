const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to NOT equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})

test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

// toEqual() test for reference objects, not primitive data like toBe()
test('Should be falsy', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'John',
    lastName: 'Doe'
  })
})

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// RegEx test
test('There is no I in Theam', () => {
  expect('team').not.toMatch(/I/);
})

// Array test
test('Admin should be in usernames', () => {
  usernames = ['John', 'Karen', 'Admin']
  expect(usernames).toContain('Admin')
})

// Working with async data (Promise)
test('Fetch user with name Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toBe('Leanne Graham')
  })
})

// Working with async data (Async await)
test('Fetch user with name Leanne Graham', async () => {
  const data = await functions.fetchUser();
  expect(data.name).toBe('Leanne Graham')
})