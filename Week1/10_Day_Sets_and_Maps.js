// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']

// let emptySet = new Set()
// console.log(emptySet)

// let zeroToTenSet = new Set()
// for (let i = 0; i <= 10; i++) {
//   zeroToTenSet.add(i)
// }
// console.log(zeroToTenSet)

// zeroToTenSet.delete(3)
// console.log(zeroToTenSet)

// zeroToTenSet.clear()
// console.log(zeroToTenSet)

// zeroToTenSet = new Set(['ab', 'cd', 'ef', 'gh', 'ij'])
// console.log(zeroToTenSet)

// let countriesMap = new Map()
// for (const country of countries) {
//   countriesMap.set(country, country.length)
// }
// console.log(countriesMap)
let arr = [{one: "aba"}, {one: "aaa"}, {one: "benue"}, {one: "benua"}]
function sortCallBack(a, b, num = 0) {
  let sorter = a.one.charCodeAt(num) - b.one.charCodeAt(num)
  return (sorter ||= sortCallBack(a, b, ++num))
}
arr = arr.sort((a, b) => sortCallBack(a, b))
console.log(arr)