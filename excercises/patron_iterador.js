'use strict';

function* iterator(array) {
  let index = 0;

  while (index < array.length) {
    yield array[index++]
  }

  return 10
}

const iter = iterator([1,2])
console.log('iter:', iter)
console.log('iter:', iter.next())
console.log('iter:', iter.next())
console.log('iter:', iter.next())
console.log('iter:', iter.next())
console.log('iter:', iter.next())
console.log('iter:', iter.next())