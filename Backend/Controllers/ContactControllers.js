// controllers/contactController.js
const { sendMail } = require('../assets/nodemailer');
const Contact = require('../models/contact'); // Adjust the path accordingly
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;


const isAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], secretKey);
    console.log('Decoded Role:', decoded.role);
    if (decoded.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

const getAllFormData = async (req, res) => {
  try {
    const allFormData = await Contact.find()
    .sort({createdAt: -1})
    res.json(allFormData);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createContact = async (req, res) => {
  try {
    const { name, email, company, phone, message , refNumber  } = req.body;
    
    // Validate that all fields are non-empty
    if (!name || !email || !company || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = new Contact({ name, email, company, phone, message , refNumber});
    const savedContact = await newContact.save();
    
    await sendMail({name, email, refNumber });

    res.status(201).json({ message: 'Successfully sent', data: savedContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteContact = async (req, res) => {
  let contactId = req.params.id;

  // Trim whitespace, including newline character
  contactId = contactId.trim();

  try {
    const deletedContact = await Contact.findOneAndDelete({ _id: contactId });

    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    return res.json({ message: 'Contact deleted successfully', data: deletedContact });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  createContact,
  isAdmin,
  getAllFormData,
  deleteContact,
};
