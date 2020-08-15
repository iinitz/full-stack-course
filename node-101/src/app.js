const name = 'Bob'
const num = 1234n
const bool = true
const empty = null
const undef = undefined

let a
const test = null
console.log(a) // undefined

// let age
// if (name === 'Bob') {
//   age = 20
// } else {
//   age = 30
// }
// name = 'Cat'
console.log(name)

const checkAge = (username) => {
  if (username === 'Bob') {
    return 20
  }
  return 30
}
const age = checkAge(name)

console.log(age)

console.log(Number.MAX_SAFE_INTEGER)
