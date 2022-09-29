const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//Level 1
// fetch(countriesAPI)
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(state => {
//       let { name, capital, languages, population, area } = state
//       console.log(name, capital, languages, population, area)
//     })
//   })

//Level 2
fetch(catsAPI)
  .then(res => res.json())
  .then(data => {
    let catName = []
    data.forEach(cat => (catName = [...catName, cat.name]))
    console.log(catName)
  })
