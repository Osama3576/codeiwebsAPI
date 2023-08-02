/* eslint-disable no-undef */
const express = require('express');
const commentsController = require('./../controllers/commentController');
// const app = express();

const commentRouter = express.Router();

commentRouter
  .route('/')
  .get(commentsController.getAllComments)
  .post(commentsController.createComment);

module.exports = commentRouter;
