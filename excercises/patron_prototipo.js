const pockemon = {
  name: 'pikachu',
  name2: undefined,
  attack: function() {
    console.log(this.name + ' attack')
  },
  move: function() {
    console.log(this.name + ' move')
  }
}


const pockemon_prototype = Object.create(pockemon);
console.log('pockemon:', pockemon.__proto__)
console.log('pockemon:', pockemon.name)
console.log('pockemon_prototype:', pockemon_prototype.__proto__)
console.log('pockemon_prototype:', pockemon_prototype.name)