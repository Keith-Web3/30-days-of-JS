//Level 1
localStorage.setItem('firstName', JSON.stringify('Ola'))
localStorage.setItem('lastName', JSON.stringify('Olorunnishola'))
localStorage.setItem('age', JSON.stringify(17))
localStorage.setItem('city', JSON.stringify('Lagos'))

//Level 2
localStorage.setItem(
  'myObj',
  JSON.stringify({
    firstName: 'Ola',
    lastName: 'Olorunnishola',
    age: 17,
    skills: 'Coding',
    enrolled: true,
  })
)

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
