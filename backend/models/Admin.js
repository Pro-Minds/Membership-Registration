// models/Admin.js
const pool = require('../config/db');

class Admin {
  static async create(adminData) {
    const { name, email, phone, username, password } = adminData;
    const result = await pool.query(
      'INSERT INTO admins (name, email, phone, username, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, username, password]
    );
    return result.rows[0];
  }

  static async findByEmail(email) {
    const result = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);
    return result.rows[0];
  }
}

module.exports = Admin;