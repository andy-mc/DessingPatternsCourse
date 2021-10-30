'use strict';

module.exports = ({axios}) => ({
  get: async (req, res) => {
    const {data} = await axios.get('/people')
    return res.send(data)
  }
})
