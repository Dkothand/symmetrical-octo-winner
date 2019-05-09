const express = require('express')
const notes = express.Router()

notes.get('/', (req, res) => {
    res.send('Hello from the notes index!')
})

module.exports = notes