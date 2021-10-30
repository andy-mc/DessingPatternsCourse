const mixin = {
  saludar() {
    console.log('saludar Hola')
  },
  despedirse() {
    console.log('despedirse Chao')
  }
}

class User {
  constructor(name) {
    this.name = name
  }
}

Object.assign(User.prototype, mixin)

const user = new User('estefano')
console.log('user: >', user)
console.log('user: >', user.__proto__)
console.log('user: >', user.saludar())
console.log('user: >', user.despedirse())