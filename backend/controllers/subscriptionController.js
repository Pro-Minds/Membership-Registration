const Payment = require('../models/Payment');

const createPayment = async (req, res) => {
    const { member_id, amount, transaction_id, payment_date, status } = req.body;

    if (!member_id || !amount || !transaction_id || !payment_date || !status) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const payment = await Payment.create(member_id, amount, transaction_id, payment_date, status);
        res.status(201).json({ message: 'Payment created successfully', payment });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred while processing the payment.' });
    }
};

const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.getAll();
        res.status(200).json(payments);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred while fetching payments.' });
    }
};

const getPaymentById = async (req, res) => {
    const { payment_id } = req.params;

    try {
        const payment = await Payment.getById(payment_id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred while fetching the payment.' });
    }
};

const updatePayment = async (req, res) => {
    const { payment_id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).json({ message: 'Status is required' });
    }

    try {
        const payment = await Payment.update(payment_id, status);
        res.status(200).json({ message: 'Payment updated successfully', payment });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred while updating the payment.' });
    }
};

const deletePayment = async (req, res) => {
    const { payment_id } = req.params;

    try {
        const payment = await Payment.delete(payment_id);
        res.status(200).json({ message: 'Payment deleted successfully', payment });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred while deleting the payment.' });
    }
};

module.exports = { createPayment, getAllPayments, getPaymentById, updatePayment, deletePayment };
