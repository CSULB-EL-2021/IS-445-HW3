const time = prompt('Enter time (hours, minutes, seconds)')

const [hours, minutes, seconds] = time.split(', ')

if (Number.isInteger(Number(hours)) &&
    Number.isInteger(Number(minutes)) &&
    Number.isInteger(Number(seconds))
) {
  const date = new Date()
  date.setHours(Number(hours), Number(minutes), Number(seconds))
  console.log(`Time input: ${date.getHours()}h${date.getMinutes()}m${date.getSeconds()}s`)

  date.setSeconds(date.getSeconds() + 1)
  console.log(`One second later: ${date.getHours()}h${date.getMinutes()}m${date.getSeconds()}s`)
} else {
  console.error('Invalid input')
}