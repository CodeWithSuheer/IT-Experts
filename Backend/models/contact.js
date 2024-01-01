const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  refNumber: {
    type: String,
  },
}, {
  timestamps: true, 
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
