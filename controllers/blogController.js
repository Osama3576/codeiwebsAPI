/* eslint-disable no-undef */
const BlogModel = require('../models/BlogModel');

exports.createBlog = async (req, res) => {
  try {
    const newBlog = await BlogModel.create(req.body);
    res.status(201).json({
      status: 'sucess',
      data: {
        blog: newBlog,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
exports.getAllBlog = async (req, res) => {
  try {
    const getBlogs = await BlogModel.find();
    res.status(200).json({
      status: 'sucess',
      results: getBlogs.length,
      data: {
        getBlogs,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
exports.getOneBlog = async (req, res) => {
  try {
    const getOneBlog = await BlogModel.findOne(req.params);
    res.status(200).json({
      status: 'sucess',

      data: {
        getOneBlog,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
