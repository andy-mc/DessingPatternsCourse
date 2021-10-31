'use strict'

const express = require('express')
const services = require('./services/index.js')
const handlify = require('./handlers.js')
const parser = require('body-parser')
const app = express()
const port = 3000

const peopleHanlder = handlify('people')
const planetsHanlder = handlify('planets')

app.use(parser.urlencoded({extended: false}))
app.use(parser.json())

app.get('/', peopleHanlder(services).get)
app.post('/', peopleHanlder(services).post)
app.put('/:id', peopleHanlder(services).put)
app.delete('/:id', peopleHanlder(services).delete)

app.get('/planets', planetsHanlder(services).get)

app.listen(port, () => console.log(`App listening on port ${port}`))
