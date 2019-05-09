const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
  title: {type: String, required: true},
  note: {type: String, required: true},
  priority: {type: Boolean, default: false}
})

module.exports = mongoose.model('Notes', notesSchema)