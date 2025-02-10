const express = require('express');
const { createPayment, getAllPayments, getPaymentById, updatePayment, deletePayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/payments', createPayment);
router.get('/payments', getAllPayments);
router.get('/payments/:payment_id', getPaymentById);
router.put('/payments/:payment_id', updatePayment);
router.delete('/payments/:payment_id', deletePayment);

module.exports = router;
