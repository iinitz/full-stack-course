// const key = 'some-key-2'
// const user = {
//   name: 'Alice',
//   age: 20,
//   isAdmin: true,
//   '0a': 'test',
//   '#': 'sharp',
//   [key]: 'val', // 'some-key-2': 'val'
// }
// console.log(user.name)
// console.log(user['0a'])
// console.log(user[key])

// // const name = user.name
// // const age = user.age
// // const isAdmin = user.isAdmin

// const {
//   name, age, isAdmin, ...other
// } = user
// other.newKey = 'new val'
// console.log(other)

// const newObj = {
//   ...other,
//   newKey: 'new val',
// }
// console.log(newObj)
// console.log(Object.values(newObj))

const alice = {
  name: 'Alice',
  age: 20,
  isAdmin: true,
}
const bob = {
  name: 'Bob',
  age: 20,
  isAdmin: true,
  phone: '12345678',
}

// const { name: aliceName } = alice
// const { name: bobName = 'default', phone = '00000000' } = bob

// console.log(phone)

const print = (name, age, isAdmin, phone, address) => {
  console.log(name, age)
  console.log(phone)
  console.log(address)
}
const {
  name, age, phone = 'No phone number', address,
} = alice
print(name, age, isAdmin, phone, address)

const printDesc = ({
  name: username, age, isAdmin, phone = 'No phone number', address,
}) => {
  console.log(name, age)
  console.log(phone)
  console.log(address)
}
printDesc(alice)

// const name = 'Test'

// const obj = {
//   name // name: 'Test'
// }
