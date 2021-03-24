const mongoose = require('mongoose')

const {Schema} = mongoose

const bookModel = new Schema(
  {
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean},
  },
  {
    collection: 'books'
  }
)

module.exports = mongoose.model('book', bookModel)