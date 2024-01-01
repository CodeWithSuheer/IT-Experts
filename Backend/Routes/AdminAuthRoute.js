// routes/authRoutes.js
const express = require('express');
const authController = require('../Controllers/AdminAuthController');

const router = express.Router();

// Define the /api/generateToken route
router.post('/', authController.generateToken);

module.exports = router;
