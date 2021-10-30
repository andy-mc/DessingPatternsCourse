'use strict';

Object.prototype.log = function() {
  console.log('Object >', this)
}

String.prototype.log = function() {
  console.log('String >', typeof this)
  console.log('String >', this)
}

Number.prototype.log = function() {
  console.log('Number >', typeof this)
  console.log('Number >', this)
}

'hola'.log()
parseInt('1').log()
