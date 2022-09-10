let { log } = console

//Level 1
let dog = {}

log(dog)

dog.name = 'Rusty'
dog.legs = 4
dog.color = 'white'
dog.age = 3
dog.bark = function () {
  return 'woof woof'
}

log(dog.name, dog.legs, dog.color, dog.age, dog.bark())

dog.breed = 'Golden Retriever'
dog.getDogInfo = function () {
  return `${this.name} is a ${this.age}year old ${this.color} ${this.breed} with ${this.legs} legs`
}
log(dog.getDogInfo())

//Level 2
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
}

let length = 0
let mostSkilledUser
for (const key in users) {
  let {
    [key]: { skills },
  } = users
  if (skills.length <= length) continue
  length = skills.length
  mostSkilledUser = key
}
log(mostSkilledUser)

let loggedInUsers = []
for (const key in users) {
  let {
    [key]: { isLoggedIn },
  } = users
  if (isLoggedIn) loggedInUsers = [...loggedInUsers, key]
}
log(loggedInUsers)

let mernDevelopers = []
for (const key in users) {
  let {
    [key]: { skills },
  } = users
  let skillSet = new Set([...skills, 'MongoDB', 'Express', 'React', 'Node'])
  if (skillSet.size === skills.length) mernDevelopers = [...mernDevelopers, key]
}
log(mernDevelopers)

let newUsersObjects = {
  ...users,
  Ola: {
    email: 'olorunnisholaolamilekan@gmail.com',
    skills: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
    age: 17,
    isLoggedIn: true,
    points: 150,
  },
}
log(newUsersObjects)

log(Object.keys(users))

log(Object.values(users))

//Number 7 not attempted yet

//Level 3

const personAccount = {
  firstName: 'Ola',
  lastName: 'Olorunishola',
  incomes: {
    job: 1000000,
    allowance: 1000000,
    side_hustles: 1000000,
  },
  expenses: {
    data: 1500000,
    food: 200000,
    miscelleneous: 500000,
    savings: 500000,
  },
  totalIncome() {
    let arr = Object.values(this.incomes)
    return arr.reduce((acc, income) => acc + income, 0)
  },
  totalExpense() {
    let arr = Object.values(this.expenses)
    return arr.reduce((acc, expense) => acc + expense, 0)
  },
  accountInfo() {
    return `You have spent a total of ${this.totalExpense()}`
  },
  addIncome(incomeDesc, amount) {
    this.incomes[incomeDesc] = amount
  },
  addExpense(expenseDesc, amount) {
    this.expenses[expenseDesc] = amount
  },
  accountBalance() {
    return `You have ${
      this.totalIncome() - this.totalExpense()
    } left in your account.`
  },
}
personAccount.addIncome('Hookup', 50000000)
log(personAccount.incomes)

let anotherUsers = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

let products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

function signUp(username, email, password) {
  if (anotherUsers.some(item => item.username === username)) {
    return 'Username has been taken'
  } else if (anotherUsers.some(item => item.email === email)) {
    return 'User already exists. Please sign in'
  }
  let _id = ''
  for (let i = 0; i < 6; i++) {
    _id += Math.round(Math.random() * 100000).toString(30)
  }
  _id = _id.slice(0, 6)
  let date = new Date()
  anotherUsers = [
    ...anotherUsers,
    {
      _id,
      username,
      email,
      password,
      createdAt: date.toLocaleString('en-UK', {
        dateStyle: 'short',
        timeStyle: 'short',
        hour12: true,
      }),
      isLoggedIn: false,
    },
  ]
  log('Sign-up successful')
  log(anotherUsers)
}
signUp('Keith_Web3', 'coderKeith05@gmail.com', 'tr345')
signUp('Keith_Web4', 'coderKeith05@gmail.com', 'tr345')

let currentUser
function signIn(username, password) {
  let user = anotherUsers.find(person => person.username === username)
  if (!user) return 'User does not exist, please sign-up.'
  if (user.password !== password) return 'Incorrect password'
  user.isLoggedIn = true
  currentUser = user
  return 'Sign-in successful'
}
signIn('Keith_Web4', 'tr345')
signIn('Keith_Web3', 'tr345')

function rateProduct(productId, rating) {
  if (!currentUser || !currentUser.isLoggedIn)
    return 'Sign in to rate this product'
  products
    .find(item => item._id === productId)
    .ratings.push({ userId: currentUser._id, rate: rating })
  return products
}
log(rateProduct('aegfal', 3.2))

function averageRating(productId) {
  let { ratings } = products.find(({ _id }) => _id === productId)
  return ratings.reduce((acc, { rate }) => acc + rate, 0) / ratings.length
}
log(averageRating('eedfcf'))

function likeProduct(productId) {
  let { likes } = products.find(({ _id }) => productId === _id)
  let index = likes.indexOf(currentUser._id)
  index === -1 ? likes.push(currentUser._id) : likes.splice(index, 1)
}
likeProduct('hedfcg')
log(products)
