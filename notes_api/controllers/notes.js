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
    Note.find({}, (err, foundNote) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundNote)
    })
  })

  notes.delete('/:id', (req, res) => {
    Note.findByIdAndRemove(req.params.id, (err, deletedNote) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(deletedNote)
    })
  })

  notes.put('/:id', (req, res) => {
    Note.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedNote) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedNote)
    })
  })

module.exports = notes