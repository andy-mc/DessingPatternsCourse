'use strict';

Object.prototype.log = function() {
  console.log(this)
}

if (String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/, '') + 'mio'
  }
}

const foo = '    hola mundo   '.trim()
foo.log()