/* eslint-disable no-undef */
const express = require('express');
const blogController = require('./../controllers/blogController');
// const app = express();

const blogRouter = express.Router();

blogRouter
  .route('/')
  .get(blogController.getAllBlog)
  .post(blogController.createBlog);
blogRouter.route('/:mainHeading').get(blogController.getOneBlog);

module.exports = blogRouter;
