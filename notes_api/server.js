// Dependencies
const express = require('express')
const mongoose = require('mongoose')
// Dependency configurations


const app = express()
const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost:27017'


//DATABASE
// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/notes', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})


// MIDDLEWARE
app.use(express.json()) // uses json over urlencoded
const notesController = require('./controllers/notes')
app.use('/notes', notesController)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// THIS IS A COMMENT I MADE

app.listen(PORT, () => {
    console.log('connected on port', PORT)
})