const express = require('express');
const bodyParser = require('body-parser');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/api', subscriptionRoutes);
app.use('/api', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
const cors = require('cors');
const session = require('express-session'); // Import express-session
const crypto = require('crypto'); // Import crypto module
const authRoutes = require('./routes/authRoutes');
const pool = require('./config/db'); // Import the database pool
const bcrypt = require('bcrypt'); // Import bcrypt
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Generate a random session secret
const generateSessionSecret = () => {
  return crypto.randomBytes(32).toString('hex'); // Generate a 32-byte random hex string
};

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || generateSessionSecret(), // Use generated secret if not set
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Initialize Passport
const passport = require('./config/oauth'); // Import OAuth configuration
app.use(passport.initialize());
app.use(passport.session()); // Enable session support for Passport

// Routes
app.use('/admin', authRoutes);

// Initialize database and create dummy admin if necessary
const initializeDatabase = async () => {
  try {
    const result = await pool.query('SELECT COUNT(*) FROM admins');
    const count = parseInt(result.rows[0].count, 10);

    if (count === 0) {
      const dummyAdmin = {
        name: 'Dummy Admin',
        email: 'dummy@example.com',
        phone: '1234567890',
        username: 'dummyadmin',
        password: await bcrypt.hash('dummyPassword', 10), // Hash the password
      };
      await Admin.create(dummyAdmin);
      console.log('Dummy admin created.');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

initializeDatabase();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
