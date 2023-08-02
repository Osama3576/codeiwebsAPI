/* eslint-disable no-undef */
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const CommentModel = mongoose.model('CommentModel', commentSchema);

module.exports = CommentModel;
