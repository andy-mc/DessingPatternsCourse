'use strict';

class Math {
  constructor(init_value = 0) {
    this.value = init_value
  }

  sum(new_value) {
    this.value += new_value
    return this
  }
}

const math = new Math(1);

const total = math.sum(1)
.sum(2)
.sum(3)
.value

console.log('total:', total)

