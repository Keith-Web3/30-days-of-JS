let { log } = console

//Level 1
function fullName() {
  return "Olorunnishola Olamilekan"
}
log(fullName())

function fullNameParams(firstName, lastName) {
  return lastName + firstName
}
log(fullNameParams("Olamilekan", "Olorunnishola"))

function addNumbers(num1, num2) {
  return num1 + num2
}
log(addNumbers(1, 2))

function calculateRectangleArea(width, height) {
  return width * height
}
log(calculateRectangleArea(10, 20))

function calculateRectanglePerimeter(width, height) {
  return 2 * (width + height)
}
log(calculateRectanglePerimeter(10, 20))

function calculateRectPrismVolume(length, width, height) {
  return length * width * height
}
log(calculateRectPrismVolume(10, 20, 30))

let calculateCircleArea = function(radius) {
  return Math.PI * (radius ** 2)
}
log(calculateCircleArea(10))

let calcCircleCircumference = radius => 2 * Math.PI * radius
log(calcCircleCircumference(10))

let calcDensity = function(mass, volume) {
  return mass / volume
}
log(calcDensity(10, 50))

let calcObjectSpeed = (distance, time) => distance / time
log(calcObjectSpeed(10, 15))

function calcWeight(mass) {
  return mass * 9.8
}
log(calcWeight(10))

function convertCelsiusToFahrenhiet(temp) {
  return (temp * 9 / 5) + 32
}
log(convertCelsiusToFahrenhiet(100))

function checkBMI(weight, height) {
  let bmi = weight / (height ** 2)
  switch (true) {
    case bmi < 18.5:
      return "You are underweight"
    case bmi >= 18.5 && bmi <= 24.9:
      return "You have a normal weight"
    case bmi >= 25 && bmi <= 29.9:
      return "You are overweight"
    default:
      return "You are obese"
  }
}
log(checkBMI(200, 3))

function checkSeason(month) {
  switch (month.toLowerCase()) {
    case "september":
    case "october":
    case "november":
      log("Autumn")
      break
    case "december":
    case "january":
    case "febuary":
      log("Winter")
      break
    case "march":
    case "april":
    case "may":
      log("Spring")
      break
    case "june":
    case "july":
    case "august":
      log("Summer")
  }
}
checkSeason("August")

function findMax(arg1, arg2, arg3) {
  return [...arguments].sort((a, b) => b - a)[0]
}
log(findMax(0, 10, 15))
log(findMax(0, -10, -2))

//Level 2

// Number 1 not yet answered

const solveQuadratic = function(a = 0, b = 0, c = 0) {
  let values = new Set([(-b + Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a), (-b - Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a)])
  log(values)
}
solveQuadratic(1, 4, 4)
solveQuadratic(1, -1, -2)
solveQuadratic(1, 7, 12)
solveQuadratic(1, -1, 0)

const printArray = function(arr) {
  arr.forEach(val => log(val))
}
printArray(["I", "am", "Ola"])

const showDateTime = function() {
  let date = new Date()
  log(`${date.getDate()}`.padStart(2, "0") + "/" + `${date.getMonth() + 1}`.padStart(2, "0") + "/" + `${date.getFullYear()}` + " " + `${date.getHours()}`.padStart(2, "0") + ":" + `${date.getMinutes()}`.padStart(2, "0"))
}
showDateTime()

const swapValues = function(a, b) {
  return `(${b}, ${a})`
}
log(swapValues(3, 4))

const reverseArray = function(arr) {
  newArr = []
  for (const element of arr) {
    newArr = [element, ...newArr]
  }
  return newArr
}
log(reverseArray([1, 2, 3, 4, 5]))
log(reverseArray(['A', 'B', 'C']))

const capitalizeArray = function(arr) {
  let newArr = []
  for (const element of arr) {
    newArr = [...newArr, element.toUpperCase()]
  }
  return newArr
}
log(capitalizeArray(["you", "are", "awesome"]))

const addItem = function(item, array) {
  return [...array, item]
}
log(addItem("JS", ["HTML", "CSS"]))

const removeItem = function(index, array) {
  let newArr = []
  for (const item of array) {
    if (array.indexOf(item) === index) return
    newArr = [...newArr, item]
  }
  return newArr
}
log(removeItem(2, ["HTML", "CSS", "JS", "SCSS"]))

const sumOfNumbers = function(num = 0) {
  let sum = 0
  for(let i = 0; i <= num; i++) {
    sum += i
  }
  return sum
}
log(sumOfNumbers(4))

const sumOfOdd = function(num = 0) {
  let sum = 0
  for(let i = 0; i <= num; i++) {
    if (i % 2 === 0) continue
    sum += i
  }
  return sum
}
log(sumOfOdd(10))

const sumOfEven = function(num = 0) {
  let sum = 0
  for(let i = 0; i <= num; i++) {
    if (i % 2 !== 0) continue
    sum += i
  }
  return sum
}
log(sumOfEven(10))

const evenAndOdds = function(num = 0) {
  let odd = 0
  let even = 0
  for (let i = 0; i <= num; i++) {
    i % 2 === 0 ? even++ : odd++
  }
  return `The number of odds are ${odd}.\nThe number of evens are ${even}.` 
}
log(evenAndOdds(6))

const sumOfArgs = function(...args) {
  let sum = 0
  for (const item of args) {
    sum += item
  }
  return sum
}
log(sumOfArgs(1, 2, 3, 4))

const generateRandomIp = function() {
  const generateOctet = () => Math.round(Math.random() * 255)

  return `${generateOctet()}.${generateOctet()}.${generateOctet()}.${generateOctet()}`
}
log(generateRandomIp())

const generateRandomMacAddress = function() {
 const generateHex = () => Math.round(Math.random() * 255).toString(16).padStart(2, "0")

 return `${generateHex()}:${generateHex()}:${generateHex()}:${generateHex()}:${generateHex()}:${generateHex()}`
}
log(generateRandomMacAddress())

const generateRandomHexaNumber = function() {
  return `#${Math.round(Math.random() * parseInt("ffffff", 16)).toString(16)}`.padStart(6, "0")
}
log(generateRandomHexaNumber())

const generateUserId = function() {
  let randomCharCode = () => { 
    let code = Math.floor(Math.random() * 74) + 48
    if (code >= 58 && code <= 64) code -= 7
    if (code >= 91 && code <= 96) code -= 6
    return String.fromCharCode(code)
  }
  return `${randomCharCode()}${randomCharCode()}${randomCharCode()}${randomCharCode()}${randomCharCode()}${randomCharCode()}`
}
log(generateUserId())

//Level 3

const userIdGeneratedByUser = (length, numOfIds) => {
  let randomCharCode = () => { 
    let code = Math.floor(Math.random() * 74) + 48
    if (code >= 58 && code <= 64) code -= 7
    if (code >= 91 && code <= 96) code -= 6
    return String.fromCharCode(code)
  }
  const id = () => {
    let str = ""
    for (let i = 1; i <= length; i++) {
      str += randomCharCode()
    }
    return str
  }
  const final = () => {
    let finalStr = ""
    for (let i = 1; i <= numOfIds; i++) {
      finalStr += `\n${id()}`
    }
    return finalStr
  }
  return final()
}
log(userIdGeneratedByUser(5 , 3))

const rgbColorGenerator = () => {
  let color = () => Math.floor(Math.random() * 256)
  return `rgb(${color()}, ${color()}, ${color()})`
}
log(rgbColorGenerator())

const returnArrayOfHexaColors = length => {
  let arr = []
  for (let i = 0; i <= length; i++) {
    arr = [...arr, generateRandomHexaNumber()]
  }
  return arr
}
log(returnArrayOfHexaColors())

const returnArrayOfRgbColors = length => {
  let arr = []
  for (let i = 0; i <= length; i++) {
    arr = [...arr, rgbColorGenerator()]
  }
  return arr
}
log(returnArrayOfRgbColors())

const convertHexaToRgb = hexa => {
  if (hexa.length === 4) hexa = hexa[1].repeat(2) + hexa[2].repeat(2) + hexa[3].repeat(2)
  return `rgb(${parseInt(hexa.slice(1, 3), 16)}, ${parseInt(hexa.slice(3, 5), 16)}, ${parseInt(hexa.slice(5), 16)})`
}
log(convertHexaToRgb("#fff"))

const convertRgbToHexa = rgb => {
  let colors = rgb.match(/\d+/g)
  return `#${(+colors[0]).toString(16)}${(+colors[1]).toString(16)}${(+colors[2]).toString(16)}`
}
log(convertRgbToHexa("rgb(242, 58, 92)"))

const generateColors = (colorType, numOfColors) => {
  if (colorType.toLowerCase() !== "hexa" && colorType.toLowerCase() !== "rgb") return "Invalid color type"
  const func = colorType.toLowerCase() === "hexa" ? generateRandomHexaNumber : rgbColorGenerator
  arr = []
  for (let i = 0; i < numOfColors; i++) {
    arr = [...arr, func()]
  }
  return arr
}
log(generateColors("rgb", 4))

const shuffleArray = arr => {
  let copiedArr = [...arr]
  let newArr = []
  while (copiedArr.length) {
    let index = Math.floor(Math.random() * copiedArr.length)
    newArr = [...newArr, copiedArr[index]]
    copiedArr.splice(index, 1)
  }
  return newArr
}
log(shuffleArray(["one", "two", "three", "four", "five"]))

const factorial = num => {
  let ans = 1
  for (let i = 1; i <= num; i++) {
    ans *= i
  }
  return ans
}
log(factorial(5))

const isEmpty = arr => {
  return !(0 in arr)
}
log(isEmpty([1, 2]))

const sum = (...args) => {
  let ans = 0
  for (const num of args) {
    ans += num
  }
  return ans
}
log(sum(1, 2, 3, 4))

const sumOfArrayItems = arr => {
  let ans = 0
  for (const num of arr) {
    if (typeof num !== "number") return `${num} is not a number type`
    ans += num
  }
  return ans
}
log(sumOfArrayItems([2, 3, 4]))

const average = arr => {
  return typeof sumOfArrayItems(arr) === "number" ? sumOfArrayItems(arr) / arr.length : sumOfArrayItems()
}
log(average([1, 2, 3, 4, 5]))

const modifyArray = arr => {
  if (arr.length < 5) return "item not found"
  let newArr = []
  for (const item of arr) {
    if (arr.indexOf(item) === 4) {
      newArr = [...newArr, item.toUpperCase()]
      continue
    }
    newArr = [...newArr, item]
  }
  return newArr
}
log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))
log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))

const isPrime = num => {
  if (num === 1) return false
  if (num === 2) return true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}
log(isPrime(4))
log(isPrime(5))

const isUniqueArray = arr => arr.length === new Set(arr).size
log(isUniqueArray([1, 2, 3, 4, 4]))
log(isUniqueArray([1, 2, 3, 4]))

const checkItemsDataType = arr => arr.every(item => typeof arr[0] === typeof item)
log(checkItemsDataType([1, 2, 3, 4, "str"]))
log(checkItemsDataType([1, 2, 3, 4, 5]))

const isValidVariable = varName => {
  const validVariableRegEx = /^[a-z]+[$_\w]*/gi
  return validVariableRegEx.test(varName)
}
log(isValidVariable("is$Valid_Variable"))
log(isValidVariable("is&Valid-Variable"))

const returnSevenRandomNumbers = () => {
  let arr = new Set()
  while (arr.size < 7) {
    arr.add(Math.floor(Math.random() * 10))
  }
  return [...arr]
}
log(returnSevenRandomNumbers())

const reverseCountries = countriesArr => {
  let arr = [...countriesArr]
  let newArr = []
  for (const item of arr) {
    newArr.unshift(item)
  }
  return newArr
}
log(reverseCountries(['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']))