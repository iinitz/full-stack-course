import libName, { isOdd as customName, sum } from './liba'

console.log(libName)

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.filter(customName))
console.log(sum(numbers))
