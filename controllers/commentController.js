/* eslint-disable no-undef */
const CommentModel = require('../models/CommentsModel');

exports.createComment = async (req, res) => {
  try {
    const newComment = await CommentModel.create(req.body);
    res.status(201).json({
      status: 'sucess',
      data: {
        comment: newComment,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
exports.getAllComments = async (req, res) => {
  try {
    const getComments = await CommentModel.find();
    res.status(200).json({
      status: 'sucess',
      results: getComments.length,
      data: {
        getComments,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
