/* eslint-disable no-undef */
const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  mainHeading: {
    type: String,
    required: [true, 'A Blog must have a Title'],
    unique: true,
  },
  imageUrl: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  sections: [
    {
      subHeading: String,
      paragraph: String,
    },
  ],
});

const BlogModel = mongoose.model('Blog', blogSchema); //Model

module.exports = BlogModel;

// const blogSchema = new mongoose.Schema({
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },
//   mainHeading: {
//     type: String,
//     require: [true, 'A Blog must have Title'],
//     unique: true,
//   },
//   imageUrl: String,
//   subHeading_One: String,
//   paragraph_One: String,
//   subHeading_Two: String,
//   paragraph_Two: String,
//   subHeading_Three: String,
//   paragraph_Three: String,
//   subHeading_four: String,
//   paragraph_four: String,
//   subHeading_five: String,
//   paragraph_five: String,
//   subHeading_Six: String,
//   paragraph_Six: String,
//   subHeading_Seven: String,
//   paragraph_Seven: String,
//   subHeading_Eight: String,
//   paragraph_Eight: String,
//   subHeading_Nine: String,
//   paragraph_Nine: String,
//   subHeading_Ten: String,
//   paragraph_Ten: String,
//   subHeading_Eleven: String,
//   paragraph_Eleven: String,
//   subHeading_Twelve: String,
//   paragraph_Twelve: String,
//   subHeading_Thirteen: String,
//   paragraph_Thirteen: String,
// });
