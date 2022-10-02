//Level 1
function closureOne() {
  let x = 5
  return () => x ** 2
}
let innerOne = closureOne()
console.log(innerOne())

//Level 2
function closureTwo() {
  let y = 3
  return [() => y ** 2, () => y ** 3, () => y ** 4]
}
let innerTwo = closureTwo()[0]
let innerThree = closureTwo()[1]
let innerFour = closureTwo()[2]
console.log(innerTwo(), innerThree(), innerFour())

//Level 3
function personAccount() {
  let firstName = 'Ola'
  let lastName = 'Olorunnishola'
  let incomes = {
    income1: 10000,
    income2: 20000,
    income3: 28758,
    income4: 5000,
  }
  let expenses = {
    expense1: 10000,
    expense2: 6748,
    expense3: 6468,
  }
  function totalIncomes() {
    return Object.values(incomes).reduce((acc, item) => acc + item, 0)
  }
  function totalExpenses() {
    return Object.values(expenses).reduce((acc, item) => acc + item, 0)
  }
  function accountInfo() {
    return `${lastName} ${firstName} have a total of ${totalIncomes()} in your account`
  }
  function addIncome(income, desc) {
    incomes = { ...incomes, [desc]: income }
    return `You now have a total of ${incomes}`
  }
  function addExpense(expense, desc) {
    expenses = { ...expenses, [desc]: expense }
    return `You now have a total of ${expenses}`
  }
  function accountBalance() {
    return totalIncomes()
  }
  return [
    totalIncomes,
    totalExpenses,
    accountInfo,
    addIncome,
    addExpense,
    accountBalance,
  ]
}

let arr = personAccount()
arr.forEach(item => console.log(item()))
