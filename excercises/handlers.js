'use strict';
// const axios = require('axios')

const get_luke_data = axios => async (req, res) => {
  const {data} = await axios.get('https://swapi.dev/api/people/1')
  res.send(data)
}

module.exports = {
  get_luke_data
}