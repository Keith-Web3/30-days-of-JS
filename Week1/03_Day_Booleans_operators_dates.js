//Level 1
const firstName = "Ola"
const lastName = "Shola"
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
// const width = prompt("width", "enter width")
// const height = prompt("height", "enter height")
// console.log(`Area = ${width * height}`)
// console.log(`Perimeter = ${2 * (width + height)}`)

//4
// const r = prompt("radius", "enter radius")
// console.log(`Area = ${Math.PI * r * r}`)
// console.log(`Circumference = ${2 * Math.PI * r}`)

//5
function calculateSlope(equation) {
  const equationElements = equation.split(" ")
  const slope = equationElements[2].slice(0, -1);
  return Number(slope)
}
console.log(calculateSlope("y = 2x + 8"))
