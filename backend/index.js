const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const app = require('./app');
require('dotenv').config();


app.use(bodyParser.json());

app.post('/subscribe', (req, res) => {
    const { plan, price, startDate, expirationDate } = req.body;

    // Here you would store the subscription data in your database
    console.log('Subscription Data:', { plan, price, startDate, expirationDate });

    // Simulate database storage
    const subscription = {
        plan,
        price,
        startDate,
        expirationDate,
    };

    res.json({ success: true, message: 'Subscription created successfully.', subscription });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
