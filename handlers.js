'use strict';

module.exports = (services) => {
  const getHandler = (req, res) => {
    res.send('Hello World !! @@@111')
  }

  return {
    get: getHandler
  }
}
