const key = 'some-key-2'
const user = {
  name: 'Alice',
  age: 20,
  isAdmin: true,
  '0a': 'test',
  '#': 'sharp',
  [key]: 'val', // 'some-key-2': 'val'
}
console.log(user.name)
console.log(user['0a'])
console.log(user[key])

// const name = user.name
// const age = user.age
// const isAdmin = user.isAdmin

const {
  name, age, isAdmin, ...other
} = user
other.newKey = 'new val'
console.log(other)

const newObj = {
  ...other,
  newKey: 'new val',
}
console.log(newObj)
console.log(Object.values(newObj))
