export function passwordsMatch(password, confirmPassword) {
  return password === confirmPassword
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
