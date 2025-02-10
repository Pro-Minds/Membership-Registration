// authRoute.js
const express = require('express');
const { registerAdmin, loginAdmin } = require('../controllers/authController');
const passport = require('../config/oauth'); // Import OAuth configuration

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// Google OAuth route
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback route
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  async (req, res) => {
    // Successful authentication, redirect or send response
    res.redirect('/'); // Redirect to your frontend or dashboard
  }
);

module.exports = router;
