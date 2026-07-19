import { sum } from '../App'

describe('sum tests', () => {
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3)
	})

	test('adds 4 + 5 to equal 9', () => {
		expect(sum(4, 5)).toBe(9)
	})

	test('adds 123 + 556 to equal 9', () => {
		expect(sum(123, 556)).toBe(679)
	})
})

interface User {
  name: string
  age: number
}

function createUser(name: string, age: number): User {
  return { name, age }
}

test('creates a user with the correct fields', () => {
  const user = createUser('Alice', 30)

  expect(user).toEqual({ name: 'Alice', age: 30 })
  expect(user.name).toBe('Alice')
})
