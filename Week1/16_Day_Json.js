// const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
// let age = 250
// let isMarried = true
// const student = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayehe',
//   age: 250,
//   isMarried: true,
//   skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
// }
// const txt = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `

// //Level 1
// let skillsJson = JSON.stringify(skills)
// console.log(skillsJson)

// let ageJson = JSON.stringify(age)
// console.log(ageJson)

// let isMarriedJson = JSON.stringify(isMarried)
// console.log(isMarriedJson)

// let studentJson = JSON.stringify(student)
// console.log(studentJson)

// //Level 2
// let studentsObj = JSON.stringify(student, ['firstName', 'lastName', 'skills'])
// console.log(studentsObj)

// //Level 3
// let txtJson = JSON.parse(txt)
// console.log(3)
// let maxUsers = JSON.parse(txt, function (key, value) {
//   // let val = JSON.stringify(value)
//   // if (Object.hasOwn(JSON.parse(val), 'skills')) {
//   //   return value
//   // } else {
//   //   return 'a'
//   //

//   return 'a'
//   // console.log('\n' + key + '--->' + JSON.stringify(value))
// })
// console.log(maxUsers)

// let pow = 5
// let num = 16 ** pow
// while (`${num}`.match(/[1248]/)?.length) {
//   num = +`${num}`.split('e')[0] * 16
//   console.log(num)
//   pow++
// }
console.log(BigInt(16 ** 255))
