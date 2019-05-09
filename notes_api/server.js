// Dependencies
const express = require('express')
const mongoose = require('mongoose')
// Dependency configurations


const app = express()
const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost:27017/notes'


// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))



// Database connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...')
})


// MIDDLEWARE
app.use(express.json())
const notesController = require('./controllers/notes')
app.use('/notes', notesController)

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(PORT, () => {
    console.log('connected on port', PORT)
})