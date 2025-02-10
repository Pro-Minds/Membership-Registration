const pool = require('../config/db');

const Subscription = {
    async create(plan, price, startDate, expirationDate) {
        const query = `
            INSERT INTO subscriptions (plan, price, start_date, expiration_date)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [plan, price, startDate, expirationDate];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    async getAll() {
        const result = await pool.query('SELECT * FROM subscriptions');
        return result.rows;
    }
};

module.exports = Subscription;
