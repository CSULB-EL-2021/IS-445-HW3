/*
 * Ex 4
 */

const maxTries = 3
const password = 'secret'

let i = 1
for (; i !== maxTries + 1; i++) {
  if (prompt('Enter the password') === password) {
    break
  }
}

if (i - 1 === maxTries) {
  console.error(`Your account is locked! You failed to enter the correct password ${maxTries} times`)
} else {
  console.log(`Your entered the correct password after ${i} attempt(s)`)
}