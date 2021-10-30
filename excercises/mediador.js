const Emitter = (() => {
  const event_handler = {};
  
  return {
    on: (event, action) => {
      if (!event_handler[event]) event_handler[event] = []
      event_handler[event].push(action)
    },
    emit: (event, data) => {
      if (!event_handler[event]) return
      event_handler[event].forEach((action) => {
      
      if (data === undefined) {
        return action()
      }
      
      return action(data)
      })
    }
  }
})()

Emitter.on('click', x => console.log(x))
Emitter.on('click', x => console.log(x))
Emitter.on('click', x => console.log(x))

Emitter.emit('click', {a: 'hola mundo'})
Emitter.emit('click', 'chao mundo')