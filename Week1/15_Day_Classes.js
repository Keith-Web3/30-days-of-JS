//Level 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }
  describeAnimal() {
    return `A ${this.color} ${this.age}yeard old ${this.name} with ${this.legs} legs`
  }
}
console.log(new Animal('dog', 3, 'brown', 4))

class Dog extends Animal {
  constructor(specie, name, age, color, legs) {
    super(name, age, color, legs)
    this.specie = specie
  }
}
console.log(new Dog('German Sherpard', 'Dog', 2, 'green', 4))

class Cat extends Animal {
  constructor(specie, name, age, color, legs) {
    super(name, age, color, legs)
    this.specie = specie
  }
}
console.log(new Cat('Mountain Lion', 'Dog', 2, 'green', 4))
//Level 2

class Human extends Animal {
  constructor(race, name, age) {
    super(name, age)
    this.race = race
  }
  describeAnimal() {
    return `${this.name} is a ${this.age}year old homo sapien from the ${this.race} race`
  }
}
console.log(new Human('African', 'Ola', 17).describeAnimal())

//Level 3
class Statistics {
  constructor(...data) {
    this.data = data
  }
  get count() {
    return this.data.length
  }
  get sum() {
    return this.data.reduce((acc, num) => acc + num, 0)
  }
  get min() {
    return Math.min(...this.data)
  }
  get max() {
    return Math.max(...this.data)
  }
  get range() {
    return this.max - this.min
  }
  get mean() {
    return this.sum / this.count
  }
  get median() {
    if (this.data.length % 2 !== 0) {
      return this.data[(this.data.length + 1) / 2]
    }
    return (
      (this.data[this.data.length / 2] + this.data[this.data.length / 2 + 1]) /
      2
    )
  }
  get mode() {
    let obj = { mode: 0, count: 0 }
    for (const item of this.data) {
      let count = this.data.filter(el => el === item).length
      obj = count > obj.count ? { mode: item, count } : obj
    }
    return obj
  }
  get var() {
    let arr = this.data.map(item => (item - this.mean) ** 2)
    return arr.reduce((acc, num) => acc + num, 0) / (arr.length - 1)
  }
  get std() {
    return Math.sqrt(this.var)
  }
  get freqDist() {
    let finalVal = []
    for (const item of [...new Set(this.data)]) {
      finalVal = [
        ...finalVal,
        [item, this.data.filter(el => item === el).length],
      ]
    }
    return finalVal
  }
  get discribe() {
    return {
      Count: this.count,
      Sum: this.sum,
      Min: this.min,
      Max: this.max,
      Range: this.range,
      Mean: this.mean,
      Median: this.median,
      Mode: this.mode,
      Variance: this.var,
      'Standard Deviation': this.std,
      'Frequency Distribution': this.freqDist,
    }
  }
}
let stat = new Statistics(1, 2, 3, 3, 4, 5)
console.log(stat.discribe)

class PersonAccount {
  constructor(firstname, lastname, incomes = {}, expenses = {}) {
    this.firstname = firstname
    this.lastname = lastname
    this.incomes = incomes
    this.expenses = expenses
  }
  get totalIncome() {
    let arr = Object.values(this.incomes)
    return arr.reduce((acc, income) => acc + income, 0)
  }
  get totalExpense() {
    let arr = Object.values(this.expenses)
    return arr.reduce((acc, expense) => acc + expense, 0)
  }
  get accountInfo() {
    return `You have spent a total of ${this.totalExpense}`
  }
  addIncome(incomeDesc, amount) {
    this.incomes[incomeDesc] = amount
  }
  addExpense(expenseDesc, amount) {
    this.expenses[expenseDesc] = amount
  }
  get accountBalance() {
    return `You have ${
      this.totalIncome - this.totalExpense
    } left in your account.`
  }
}
let myAccount = new PersonAccount(
  'Ola',
  'Olorunnishola',
  { job: 15000000 },
  { food: 12000 }
)
console.log(myAccount.accountInfo)
