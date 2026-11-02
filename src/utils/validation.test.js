import { describe, it, expect } from 'vitest'
import { passwordsMatch, isValidEmail } from './validation'

describe('passwordsMatch', () => {
  it('returns true when both passwords are the same', () => {
    expect(passwordsMatch('abc123', 'abc123')).toBe(true)
  })
  it('returns false when the passwords differ', () => {
    expect(passwordsMatch('abc123', 'abc124')).toBe(false)
  })
})

describe('isValidEmail', () => {
  it('accepts a normal email', () => {
    expect(isValidEmail('abc@email.com')).toBe(true)
  })
  it('rejects an email without @', () => {
    expect(isValidEmail('abcemail.com')).toBe(false)
  })
})
