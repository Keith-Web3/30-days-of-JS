//Level 1
const firstName = "Olamilekan"
const lastName = "Olorunnishola"
const country = "Nigeria"
const city = "Lagos"
const age = 17
const isMarried = false
const year = new Date().getFullYear()
console.log("10" === 10) //2
console.log(parseInt("9.8") === 10) //3
//4
Boolean(10)
Boolean("Truthy!!!")
Boolean(true)

Boolean(0)
Boolean("")
Boolean(null)

//5
4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != "4" //false
4 == "4" //true
4 === "4" //false
"python".length > "jargon".length

//6
4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 //true
4 > 3 || 10 > 12 //true
!(4 > 3) //false
!(4 < 3) //true
!(false) //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === "4") //true
!("dragon".includes("on") && "jargon".includes("on")) // false

//7
console.log(new Date().getFullYear())
console.log(new Date().getMonth() + 1)
console.log(new Date().getDate())
console.log(new Date().getDay() + 1)
console.log(new Date().getHours())
console.log(new Date().getMinutes())
console.log(new Date().getTime())

// Level 2
function calculateTriangleArea(base, height) {
  return 0.5 * base * height
} //1

function calculateTrianglePerimeter(a, b, c) {
  return a + b + c
} //2

//3
const width = prompt("width", "enter width")
const height = prompt("height", "enter height")
console.log(`Area = ${width * height}`)
console.log(`Perimeter = ${2 * (width + height)}`)

// 4
const r = prompt("radius", "enter radius")
console.log(`Area = ${Math.PI * r * r}`)
console.log(`Circumference = ${2 * Math.PI * r}`)

//5
class Equation {
  constructor(equation) {
    this.equation = equation
    this.equationElements = this.equation.split(" ")
  }
  get slope() {
    const slope = this.equationElements[2].slice(0, -1);
    return Number(slope)
  }
  get c() {
    const length = this.equationElements.length
    return this.equationElements[length - 2] + this.equationElements[length - 1]
  }
  get xIntercept() {
    return 0 - this.c / this.slope
  }
  get yIntercept() {
    return this.c
  }
}
const equation = new Equation("y = 2x - 2")
console.log(equation.slope, equation.xIntercept, equation.yIntercept)

const slope = (10 - 2) / (6 - 2)
console.log(slope === equation.slope)

function calculateRoots(a, b, c) {
  const x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
  const x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
  return `x = ${x1} or x = ${x2}`
}
console.log(calculateRoots(1, 6, 9))

const hours = prompt("Enter hours", "")
const rate = prompt("Enter rate", "")
console.log(`Your weekly earning is ${Number(hours) * Number(rate)}`)

function analyseNameLength(name) {
  return `Your name is ${name.length > 7 ? "long" : "short"}`
}
console.log(analyseNameLength("Ola"))

console.log(`Your firstname, ${firstName} is ${firstName.length > lastName.length ? "longer" : "shorter"} than your family name, ${lastName}`)

const myAge = 17
const yourAge = 25
console.log(`1 am ${yourAge - myAge} years younger than you`)

const birthYear = prompt("Enter birth year", "")
const currentAge = new Date().getFullYear() - birthYear
console.log(`You are ${currentAge}. You ${currentAge >= 18 ? "are old enough to drive" : "will be allowed to drive after " + (18 - currentAge) + " year(s)"}`)

const years = prompt("Enter number of years", "")
console.log(Number(years) * 365 * 24 * 60 * 60)

const thisYear = new Date().getFullYear()
const thisMonth = new Date().getMonth() + 1
const thisDay = new Date().getDate()
const thisHour = new Date().getHours()
const thisMinute = new Date().getMinutes()
console.log(`${thisYear}-${thisMonth}-${thisDay} ${thisHour}:${thisMinute}`)
console.log(`${thisDay}-${thisMonth}-${thisYear} ${thisHour}:${thisMinute}`)
console.log(`${thisDay}/${thisMonth}/${thisYear} ${thisHour}:${thisMinute}`)

//Level 3
const minutes = `${thisMinute}`.padStart(2, "0")
const doubleHours = `${thisHour}`.padStart(2, "0")
console.log(`${thisYear}-${thisMonth}-${thisDay} ${doubleHours}:${minutes}`)

