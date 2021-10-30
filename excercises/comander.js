const Commander = (() => {
  const commands = {
    comprar: (x, b) => {
      console.log(`comprar ${x} ${b}`)
    },
    vender: (x) => console.log(`vender ${x}`)
  };
  
  return {
    run: (command, ...arguments) => {
      if(!commands[command]) {
        return console.log('command not exists !!')
      }

      commands[command](...arguments)
    }
  }
})()

Commander.run('no_exist', 'hello', 'b')
Commander.run('comprar', 'hello', 'b')
Commander.run('vender', 'hello', 'b')
