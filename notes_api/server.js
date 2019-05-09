const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// MIDDLEWARE
const notesController = require('./controllers/notes')
app.use('/notes', notesController)

// THIS IS A COMMENT I MADE

app.listen(PORT, () => {
    console.log('connected on port', PORT)
})