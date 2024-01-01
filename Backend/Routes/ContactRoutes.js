// routes/contactRoutes.js
const express = require('express');
const contactController = require('../Controllers/ContactControllers');

const router = express.Router();

// Define the /contact route
router.post('/', contactController.createContact);
router.get('/allFormData', contactController.isAdmin, contactController.getAllFormData);
router.delete('/delete/:id', contactController.isAdmin, contactController.deleteContact);
module.exports = router;
