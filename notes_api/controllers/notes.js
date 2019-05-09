const express = require('express')
const notes = express.Router()
const Note = require('../models/notes.js')

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


module.exports = notes