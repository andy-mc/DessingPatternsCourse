class Macbook {
  price() {
    return 1000
  }
}

const addMemory = mac => {
  const new_price = mac.price() + 100
  mac.price = function() {
    return new_price
  }
}

const macbook = new Macbook()
console.log('macbook price >>', macbook.price())

addMemory(macbook)

console.log('macbook price >>', macbook.price())
