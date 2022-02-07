/*
 * Ex 2
 */

const day = prompt('Please enter enter a day of the week')

let fullNameDay;
let fullNameNextDay;

switch (day.toLowerCase()) {
  case 'mon':
    fullNameDay = 'Monday'
    fullNameNextDay = 'Tuesday'
    break
  case 'tue':
    fullNameDay = 'Tuesday'
    fullNameNextDay = 'Wednesday'
    break
  case 'wed':
    fullNameDay = 'Wednesday'
    fullNameNextDay = 'Thursday'
    break
  case 'thu':
    fullNameDay = 'Thursday'
    fullNameNextDay = 'Friday'
    break
  case 'fri':
    fullNameDay = 'Friday'
    fullNameNextDay = 'Saturday'
    break
  case 'sat':
    fullNameDay = 'Saturday'
    fullNameNextDay = 'Sunday'
    break
  case 'sun':
    fullNameDay = 'Sunday'
    fullNameNextDay = 'Monday'
    break
  default:
    fullNameDay = 'Error'
    fullNameNextDay = 'Error'
    break
}

console.log(`You entered: ${fullNameDay}`)
console.log(`The following day is: ${fullNameNextDay}`)