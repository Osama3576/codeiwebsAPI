/* eslint-disable no-undef */
const express = require('express');
const contactUsController = require('../controllers/contactUsController');
// const app = express();

const contactRouter = express.Router();

contactRouter
  .route('/')
  .get(contactUsController.getAllContacts)
  .post(contactUsController.createContact);

module.exports = contactRouter;
