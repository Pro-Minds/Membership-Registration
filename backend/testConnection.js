const pool = require('./config/db');

(async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Database connected successfully:', res.rows[0].now);
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
})();
