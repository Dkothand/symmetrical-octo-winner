// Dependencies
const express = require('express')
const mongoose = require('mongoose')
// Dependency configurations

const app = express()
const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost:27017'

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('connected on port', PORT)
})