const express = require('express')
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator()

const bodySchema = Joi.object({
  title: Joi.string().required(),
  author:Joi.string().required(),
  genre: Joi.string().required(),
  read:Joi.boolean().required(),
})

const booksController = require('../controllers/booksController.js')
const routes = (Book) => {

  const bookRouter = express.Router()
  const controller = booksController(Book)

  bookRouter.route('/books')
    .get(controller.getBooks)
    .post(validator.body(bodySchema), controller.postBook)

  bookRouter.route('/books/:bookId')
    .get(controller.getBookById)
    .put(controller.updateBook)
    .delete(controller.deleteBook)
  return bookRouter
}

module.exports = routes