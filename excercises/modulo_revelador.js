'use strict';

const print = console.log
// modulo revelador
// es un objecto que se contruye con una IIFE donde devuele 
// objeto que tiene un getter que me da el estado de funcion un objecto interno de la funcion
// y setter donde puedo modificar este objeto 
// lo elegante es que no se puede alterar este objeto de la funcion directamente

const resultado_revelador = (() => {
  const state = {}

  return {
    get_state: () => state,
    set_state: (key, val) => {
      state[key] = val      
    },
    remove_state: (key) => {
      delete state[key]
    }
  }
})()

const foo = resultado_revelador

print(foo)
print(foo.get_state())
foo.set_state('bar', 'bar_data')
print(foo.get_state())
foo.remove_state('bar')
print(foo.get_state())

