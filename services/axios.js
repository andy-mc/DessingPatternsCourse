const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/'
})

const adapter = {
  get: url => {
    console.log('using axios adapter')
    return instance.get(url)
  }
    
}

module.exports = adapter
