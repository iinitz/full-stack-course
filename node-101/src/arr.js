const numbers = [1, 2, 3, 4, 5]
// const [val1, val2, ...otherVal] = numbers
// console.log(val1)
// console.log(val2)
// console.log(otherVal)

// const newNumbers = [...otherVal, val2, val1]
// console.log(newNumbers)

// const doubleArray = [...numbers, ...numbers]
// console.log(doubleArray)

// const printValue = (val, index) => {
//   console.log(val, index)
// }
// numbers.forEach(printValue)

// const oddNumbers = []
// for (let index = 0; index < numbers.length; index++) {
//   const num = numbers[index]
//   if (num % 2 === 1) {
//     oddNumbers.push(num)
//   }
// }
// console.log(oddNumbers)

const isOdd = num => num % 2 === 1
const oddNumbers = numbers.filter(isOdd)
console.log(oddNumbers)

const doubleValue = num => num * 2
const doubleNumbers = numbers.map(doubleValue)
console.log(doubleNumbers)

const invertValue = num => -num
const invertNumbers = numbers.map(invertValue)
console.log(invertNumbers)

console.log(numbers.slice(2, 4)) // start to end -1

const sumFunc = (prev, curr) => {
  console.log(prev, curr)
  return prev + curr
}
const sum = numbers.reduce(sumFunc, 0)
console.log(sum)

const names = ['Bob', 'Alice', 'Tony', 'Bob', 'Jane', 'Tony', 'Bob', 'Tom']
const countText = (array) => {
  const count = (prev, curr) => ({
    ...prev,
    // [curr]: (prev[curr] || 0) + 1,
    [curr]: (prev[curr] ? prev[curr] + 1 : 1),
  })
  return array.reduce(count, {})
}

const firstLetter = text => text[0]
const response = countText(names.map(firstLetter))
console.log(response)

// const countText = (array) => {
//   const res = {}
//   array.forEach((val) => {
//     if (res[val]) {
//       res[val] += 1
//     } else {
//       res[val] = 1
//     }
//   })
//   return res
// }

// {
//   Bob: 3,
//   Alice: 1,
//   Tony: 2,
//   Jane: 1,
// }

const [name, age, phone = 'No phone'] = ['Bob', 20]
