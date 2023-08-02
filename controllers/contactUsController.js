/* eslint-disable no-undef */
const ContactUsModel = require('../models/ContactUsModel');

exports.createContact = async (req, res) => {
  try {
    const contact = await ContactUsModel.create(req.body);
    res.status(201).json({
      status: 'sucess',
      data: {
        contactUs: contact,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
exports.getAllContacts = async (req, res) => {
  try {
    const getContact = await ContactUsModel.find();
    res.status(200).json({
      status: 'sucess',
      results: getContact.length,
      data: {
        getContact,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
