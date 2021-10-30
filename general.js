'use strict'

import express from 'express'
import services from './services/index.js'
import axios from 'axios'
const app = express()
const port = 3000

console.log('services:', services)

app.get('/', (req, res) => res.send('Hello World !!'))

app.listen(port, () => console.log(`App listening on port ${port}`))
