// Level 1
// const myAge = prompt("Enter your age", "")
// console.log(`${Number(myAge) >= 18 ? "You are old enough to drive" : "You are left with " + 18 - Number(myAge) + " years to drive."}`)

// const yourAge = prompt("Enter your age", "")
// if (myAge > yourAge) {
//   console.log(`You are ${myAge - yourAge} years younger than me`)
// } else {
//   console.log(`You are ${yourAge - myAge} years older than me`)
// }

const a = 4
const b = 3
if (a > b) {
  console.log(`${a} is greater than ${b}`)
} else {
  console.log(`${b} is greater than ${a}`)
}
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)

function isNumberEven(number) {
  if (number % 2 === 0) {
    console.log(`${number} is an even number`)
  } else {
    console.log(`${number} is an odd number`)
  }
}
isNumberEven(2)
isNumberEven(9)

//Level 2
const testScore = 80
switch (true) {
  case (testScore >= 80 && testScore <= 100):
    console.log("A")
    break
  case (testScore >= 70 && testScore <= 79):
    console.log("B")
    break
  case (testScore >= 60 && testScore <= 69):
    console.log("C")
    break
  case (testScore >= 50 && testScore <= 59):
    console.log("D")
    break
  default:
    console.log("F")
}

const currentMonth = new Date().getMonth() + 1
switch (currentMonth) {
  case 9:
  case 10:
  case 11:
    console.log("Autumn")
    break
  case 12:
  case 1:
  case 2:
    console.log("Winter")
    break
  case 3:
  case 4:
  case 5:
    console.log("Spring")
    break
  case 6:
  case 7:
  case 8:
    console.log("Summer")
}

function capitalizeString(str) {
  str = str.toLowerCase()
  return str[0].toUpperCase() + str.slice(1)
}
const day = "saTUrDay"
// switch (day.toLowerCase()) {
//   case "monday":
//     console.log("Monday is a working day.")
//     break
//   case "tuesday":
//     console.log("Tuesday is a working day.")
//     break
//   case "wednesday":
//     console.log("Wednesday is a working day.")
//     break
//   case "thursday":
//     console.log("Thursday is a working day.")
//     break
//   case "friday":
//     console.log("Friday is a working day.")
//     break
//   case "saturday":
//     console.log("Saturday is a weekend.")
//     break
//   case "sunday":
//     console.log("Sunday is a weekend")
//     break
//   default:
//     console.log("check your spelling and try again. Symbols and numbers are not allowed")
// }
switch (day.toLowerCase()) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log(`${capitalizeString(day)} is a working day`)
    break
  case "saturday":
  case "sunday":
    console.log(`${capitalizeString(day)} is a weekend`)
    break
  default:
    console.log("check your spelling and try again. Symbols and numbers are not allowed")
}

const month = "februaRy"
switch (month.toLowerCase()) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${capitalizeString(month)} has 31 days`)
    break
  case "september":
  case "april":
  case "june":
  case "november":
    console.log(`${capitalizeString(month)} has 30 days`)
    break
  case "february":
    console.log("February has 28 days")
    break
  default:
    console.log("check your spelling and try again")
}