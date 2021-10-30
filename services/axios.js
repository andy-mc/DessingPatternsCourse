import axios from 'axios'

const instance = axios.create({
  baseUrl: 'https://swapi.dev'
})

export default instance;
