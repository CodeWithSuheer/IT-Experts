// controllers/authController.js
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;
const adminCredentials = {
   username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
};

const generateToken = (req, res) => {
  const { username, password } = req.body;

  if (username === adminCredentials.username && password === adminCredentials.password) {
    const token = jwt.sign({ user: username, role: 'admin' }, secretKey, { expiresIn: '5d' });
    res.json({ token });
  } else {
    console.log('Invalid credentials'); // Log invalid credentials
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = {
  generateToken,
};
