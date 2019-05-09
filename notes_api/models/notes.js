const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
  title: {type: String, required: false},
  note: {type: String, required: false},
  priority: {type: Boolean, default: false}
})

module.exports = mongoose.model('Notes', notesSchema)