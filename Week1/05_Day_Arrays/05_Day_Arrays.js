import { countries } from './05_Day_Arrays_Countries.js'
import { webTechs } from './05_Day_Arrays_web_techs.js'
// Level 1
const firstArray = Array() //[]
const secondArray = Array(6).fill("Ola") // ["Ola", "Ola", "Ola", "Ola", "Ola", "Ola"]
console.log(firstArray, secondArray, secondArray.length)
const mixedDataTypes = [1, "Ola", true, null, ["anArray"], {}]
console.log(mixedDataTypes.length)
let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(companies)
console.log(companies.length)
console.log(companies[0], companies[3], companies[6])
companies.forEach(company => console.log(company))

companies[0] = companies[0].toUpperCase()
companies[1] = companies[1].toUpperCase()
companies[2] = companies[2].toUpperCase()
companies[3] = companies[3].toUpperCase()
companies[4] = companies[4].toUpperCase()
companies[5] = companies[5].toUpperCase()
companies[6] = companies[6].toUpperCase()
companies.forEach(company => console.log(company))

console.log(`${companies.join(", ")} are big IT companies.`)
console.log(`${companies.includes("IBM") ? "IBM" : "IBM not found"}`)
console.log(companies.filter(company => company.includes("O") && company.indexOf("O") !== company.lastIndexOf("O")))
console.log(companies.sort())
console.log(companies.reverse())
console.log(companies.slice(0, 3))
console.log(companies.slice(-3))
console.log(companies.slice(4, 5))
console.log(companies.shift())
console.log(companies.splice(4, 1))
console.log(companies.pop())
console.log(companies.unshift())

//Level 2
console.log(countries, webTechs)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let word = text.split(" ")
console.log(word, word.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.includes("Meat") ? "" : shoppingCart.unshift("Meat")
shoppingCart.includes("Sugar") ? "" : shoppingCart.push("Sugar")
shoppingCart.splice(4, 1)
shoppingCart.splice(3, 1, "Green Tea")
console.log(shoppingCart)

countries.includes("Ethiopia") ? console.log("ETHIOPIA") : countries.push("Ethiopia")

webTechs.includes("Sass") ? console.log('Sass is a CSS preprocess') : function() {
  webTechs.push("Sass")
  console.log(webTechs)
}()

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortedAges = ages.sort((a, b) => a - b)
const minAge = sortedAges[0]
const maxAge = sortedAges[sortedAges.length - 1]
const averageAge = ages.reduce((acc, num) => acc + num) / ages.length
const ageRange = maxAge - minAge
const compareMax = Math.abs((maxAge - averageAge))
const compareMin = Math.abs((minAge - averageAge))
console.log({ages, sortedAges, minAge, maxAge, averageAge, ageRange, compareMax, compareMin})

console.log(countries.slice(0, 11))

function getMiddleArrayItem(array) {
  const arr = [...array]
  if (arr.length === 1) {
    return arr[0]
  } else if (arr.length === 2) {
    return arr
  }
  arr.pop()
  arr.shift()
  return getMiddleArrayItem(arr)
}
console.log(getMiddleArrayItem(countries))

const length = countries.length % 2 === 0 ? countries.length : countries.length + 1
const dividedArrays =[countries.slice(0, length / 2), countries.slice(length / 2)]
console.log(dividedArrays)