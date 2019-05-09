const express = require('express')
const notes = express.Router()
<<<<<<< HEAD
const Note = require('../models/notes.js')
=======
const Note = require('../models/notes')
>>>>>>> 0e0288a9cea597e3696412fe51aa9560b141be76

notes.post('/', async (req, res) => {
    Note.create(req.body, (error, createdNote) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdNote) //  .json() will send proper headers in response so client knows it's json coming back
    })
  })

  notes.get('/', (req, res) => {
    res.send('Hello from the notes index!')
})

<<<<<<< HEAD
=======
notes.post('/', (req, res) => {
    Note.create(req.body, (err, createdNote) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        console.log(createdNote)
        res.status(200).send(createdNote)
    })
})
>>>>>>> 0e0288a9cea597e3696412fe51aa9560b141be76

module.exports = notes