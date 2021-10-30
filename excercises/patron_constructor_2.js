'use strict';

class MiClass {
  constructor(arg1, arg2) {
    this.propiedad = [arg1, arg2]
    this.metodo = () => {}  
  }
  propiedad2 = 2
  metodo2 = () => {}
  metodo3() {}
}
const instancia = new MiClass()
console.log('1 >>', instancia)


function MiClass2(arg1, arg2) {
  this.propiedad = [arg1, arg2]
  this.metodo = () => {}
  this.propiedad2 = 2
  this.metodo2 = () => {}
}
MiClass2.prototype.propiedad3 = 2
MiClass2.prototype.metodo3 = () => {}
const instancia2 = new MiClass2()
console.log('2 >>', instancia2)