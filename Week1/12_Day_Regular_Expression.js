// Level 1
const incomeText = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let [ salary, bonus, courses ] = incomeText.match(/\d+/g)
let annualIncome = 12 * (Number(salary) + Number(courses)) + Number(bonus)
console.log (annualIncome)

const particleAxis = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction."
let points = particleAxis.match(/-?\d+/g)
let sortedPoints = points.sort((a, b) => Number(a) - Number(b))
console.log(sortedPoints[sortedPoints.length - 1] - sortedPoints[0])

const validVariableRegEx = /^[a-z]+[$_\w]*/gi
let testCases = ["first_name", "first-name", "1first_name", "firstname"]
testCases.forEach(testCase => console.log(validVariableRegEx.test(testCase)))

//Level 2

function tenMostFrequentWords(str) {
  str = str.replace(/[.]/g, "")
  let strWords = new Set(str.split(" "))
  let arr = [...strWords].reduce((acc, word) => {
    let regExp = new RegExp(`\\b${word}\\b`, "g")
    let matches = str.match(regExp)
    return [...acc, { word, count: matches.length }]
  }, [])
  return arr.sort((a, b) => b.count - a.count).slice(0, 10)
}
let str = "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love."
console.log(tenMostFrequentWords(str))

//Level 3
function cleanText(str) {
  return str.replace(/[^a-z\s]/ig, "")
}
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log(cleanText(sentence))

function mostFrequentWords(str) {
  return tenMostFrequentWords(str).slice(0, 3)
}
console.log(mostFrequentWords(cleanText(sentence)))
