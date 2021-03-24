const express = require('express')
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator()

const usersController = require('../controllers/usersController.js')
const routes = (User) => {

  const userRouter = express.Router()
  const controller = usersController(User)

  userRouter.route('/users')
    .get(controller.getUsers)
    .post(controller.postUser)

  userRouter.route('/users/:userId')
    .get(controller.getUserById)
    .put(controller.updateUser)
    .delete(controller.deleteUser)

  userRouter.route('/userslog')
    .post(controller.userLogIn)
  return userRouter
}

module.exports = routes