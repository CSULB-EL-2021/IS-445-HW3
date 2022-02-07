const tableOf = Number(prompt('Enter a number'))

if (Number.isInteger(tableOf)) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${tableOf} x ${i} = ${tableOf * i}`)
  }
} else {
  console.error('Please enter a valid number')
}