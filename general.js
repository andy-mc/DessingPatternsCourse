'use strict'

const express = require('express')
const services = require('./services/index.js')
const handlers = require ('./handlers.js')
const app = express()
const port = 3000

app.get('/', handlers(services).get)

app.listen(port, () => console.log(`App listening on port ${port}`))
