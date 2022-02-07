const a = Number(prompt('Enter a number'))
const b = Number(prompt('Enter a second number'))

if (Number.isInteger(a) && Number.isInteger(b)) {
  console.log(`${a} + ${b} = ${a + b}`)
  console.log(`${a} - ${b} = ${a - b}`)
  console.log(`${a} * ${b} = ${a + b}`)
  console.log(`${a} / ${b} = ${a / b}`)
  console.log(`${a} % ${b} = ${a % b}`)
} else {
  console.error(`${a} or ${b} is not a integer.`)
}