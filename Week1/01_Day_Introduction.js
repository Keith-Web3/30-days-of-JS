const num = [{a: 1, b: 5}, {a: 3, b: 8}]

// const sorted = num.sort((a, c) => c.b - a.b)
console.log(num.sort((a, c) => a.b - c.b))
