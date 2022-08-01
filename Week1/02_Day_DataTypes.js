const cl = console.log
// Level 1
const challenge = "30 Days of JavaScript"
cl(challenge)
cl(challenge.length)
challenge.toUpperCase()
challenge.toLowerCase()
let firstWord = challenge.substr(0, 2)
firstWord = challenge.substring(0, 2)
cl(challenge.slice(3))
cl(challenge.includes("Script"))
cl(challenge.split(""))
cl(challenge.split(" "))
cl('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(","))
cl(challenge.replace("JavaScript", "Python"))
cl(challenge.charAt(15))
cl(challenge.charCodeAt(11))
cl(challenge.indexOf("a"))
cl(challenge.lastIndexOf("a"))
cl('You cannot end a sentence with because because because is a conjunction'.indexOf("because"))
cl('You cannot end a sentence with because because because is a conjunction'.lastIndexOf("because"))
cl('You cannot end a sentence with because because because is a conjunction'.search("because"))
cl(challenge.trim())
cl(challenge.startsWith("30"))
cl(challenge.endsWith("Script"))
cl(challenge.match(/a/g))
cl("30 Days of".concat(" JavaScript"))
cl(challenge.repeat(2))

//Level 2
cl(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)
cl("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
cl(typeof "10" === typeof 10) //check for equality
cl(typeof Number("10") === typeof 10) //make equal
cl(parseFloat("9.8")) // check for equality with 10
cl(Math.round(parseFloat("9.8")))// make equal to 10
cl("python".includes("on") && "jargon".includes("on"))
cl("I hope this course is not full of jargon.".includes("jargon"))
cl(Math.round(Math.random() * 100))
cl(Math.round(Math.random() * 50) + 50)
cl(Math.round(Math.random() * 255))
cl("JavaScript"[Math.floor(Math.random() * 10)])
cl("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125")
cl('You cannot end a sentence with because because because is a conjunction'.substr(31, 23))

//Level 3
cl('Love is the best thing in this world. Some found their love and some are still looking for their love.'.toLowerCase().match(/love/g).length)
cl('You cannot end a sentence with because because because is a conjunction'.match(/because/g).length)