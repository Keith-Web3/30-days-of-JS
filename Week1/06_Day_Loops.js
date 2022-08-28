// Level 1
for (let i = 0; i <= 10; i++) console.log(i)
let i = 0
while (i < 10) {
  if (i === 0) console.log(i)
  i++
  console.log(i)
}
i = 0
do {
  if (i === 0) console.log(i)
  i++
  console.log(i)
} while (i < 10)


for (let i = 10; i >= 0; i--) {
  console.log(i)
}
i = 10
while (i > 0) {
  if (i === 10) console.log(i)
  i--
  console.log(i)
}
i = 10
do {
  if (i === 10) console.log(i)
  i--
  console.log(i)
} while (i > 0)


let n = 8
for (i = 0; i <= n; i++) {
  console.log(i)
}

let str = "#"
for (i = 1; i <= 7; i++) {
  console.log(str.repeat(i))
}

i = 0
while(i < 11) {
  console.log(`${i} x ${i} = ${i * i}`)
  i++
}

i = 0
console.log("i   i^2   i^3")
do {
  console.log(`${i}   ${i ** 2}   ${i ** 3}`)
  i++
} while (i < 11)

i = 0
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) continue
  console.log(i)
}

i = 0
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) continue
  console.log(i)
}

console.log("start")
i = 0
loop1: for (let i = 2; i <= 100; i++) {
  for (let a = 2; a < i; a++) {
    if (i % a === 0) {
      continue loop1
    }
  }
  console.log(i)
}

let sum = 0
for (i = 0; i <= 100; i++) {
  sum += i
}
console.log(sum)

let even = 0
let odd = 0
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? even += i : odd += i
}
console.log(even, odd)

console.log([even, odd])

let randomNumbers = []
for (i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 3))
}
console.log(randomNumbers)

function getUniqueRandomNumbers(length) {
  let uniqueRandomNumbers = new Set([])
  while(uniqueRandomNumbers.size < length) {
    uniqueRandomNumbers.add(Math.floor(Math.random() * length * 2))
  }
  return [...uniqueRandomNumbers]
}
console.log("unique")
console.log(getUniqueRandomNumbers(5))

function generateRandomId() {
  let length = Math.floor(Math.random() * 14) + 1
  let randomId = ""
  while (randomId.length < length) {
    const randomNumber = Math.floor(Math.random() * 20)
    const randomLetter = String.fromCharCode(Math.floor(Math.random() * 24) + 97)
    randomId += randomNumber % 3 === 0 ? randomNumber : randomLetter
  }
  return randomId
}
console.log(generateRandomId())


//Level 2
function generateRandomLengthedId(length) {
  let randomId = ""
  while (randomId.length < length) {
    const randomNumber = Math.floor(Math.random() * 20)
    const randomLetter = String.fromCharCode(Math.floor(Math.random() * 24) + 97)
    randomId += randomNumber % 3 === 0 ? randomNumber : randomLetter
  }
  return randomId
}

function getRandomHex() {
  let num = Math.floor((Math.random() * 5) + 1) * 16777215
  return `#${num.toString(16)}`
}
console.log(getRandomHex())

function generateRandomRgb() {
  let generateNum = () => Math.floor(Math.random() * 255)
  return `rgb(${generateNum()}, ${generateNum()}, ${generateNum()})`
}
console.log(generateRandomRgb())

const countriesArray = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const arranged = countriesArray.sort()
console.log(arranged.map(country => country.toUpperCase()))

console.log(arranged.map(country => country.length))

console.log(arranged.map(country => [country, country.slice(0, 3).toUpperCase(), country.length]))

console.log(arranged.some(country => country.includes("land")) ? arranged.filter(country => country.includes("land")) : 'All these countries are without land.')

console.log(arranged.some(country => country.endsWith("ia")) ? arranged.filter(country => country.endsWith("ia")) : 'These are countries ends without ia.')

console.log(arranged.sort((a, b) => b.length - a.length)[0])

console.log(arranged.filter(country => country.length === 5))

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
console.log(webTechs.sort((a, b) => b.length - a.length)[0])

console.log(webTechs.map(tech => [tech, tech.length]))

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
console.log(mernStack.map(tech => tech[0]).join(""))

for (const tech of webTechs) {
  console.log(tech)
}

const fruits = ['banana', 'orange', 'mango', 'lemon']
const newArr = []
for (let i = 0; i < fruits.length; i++) {
  newArr.unshift(fruits[i])
}
console.log(newArr)

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for (const tech of fullStack.flat()) {
  console.log(tech.toUpperCase())
}

//Level 3
const newCountries = [...countriesArray]

const sortedCountries = [...countriesArray].sort()

const sortedWebTech = webTechs.sort()
const sortedMernStack = mernStack.sort()

let arr = []
for (const country of countriesArray) {
  if (country.includes("land")) arr.push(country)
}
console.log(arr)

let length, mostCharacters
length = 0
for (const country of countriesArray) {
  country.length > length ? (length = country.length, mostCharacters = country) : ""
}
console.log(mostCharacters)

// 6 same with 4

arr = []
for (const country of countriesArray) {
  if (country.length === 4) arr.push(country)
}
console.log(arr)