/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blogRoutes');
const commentRouter = require('./routes/commentsRoute');
const contactRouter = require('./routes/contactUsRoutes');
const cors = require('cors');
const compression = require('compression');
// const dotenv = require('dotenv');
const app = express();
app.use(express.json());
app.use(cors());
app.use(compression());
////////////////////////////////mongoose setup
mongoose.set('strictQuery', true);

mongoose.connect(
  'mongodb+srv://oshahbaz74:5VDgxbZjQroAVOZg@natourcluster.wk9acd2.mongodb.net/posts?retryWrites=true',
  e => {
    if (e) {
      console.log(e);
    } else {
      console.log('conection sucess to dB');
    }
  }
);

/////////////////roters
app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/commments', commentRouter);
app.use('/api/v1/contactus', contactRouter);

// testBlog.save(); //save

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
