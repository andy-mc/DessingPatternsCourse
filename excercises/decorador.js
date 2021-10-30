class Macbook {
  constructor() {
    this.price = 1000;
    this.screen = 12;
  }
}

const macbook = new Macbook()
console.log('macbook price >>', macbook.price)

macbook.addMemory = function() {
  this.price += 100
}
macbook.addMemory()

console.log('macbook price >>', macbook.price)