import React from 'react';

const PaymentForm: React.FC = () => {
    return (
        <div className="container">
            <h1>Payment Form</h1>
            <form>
                <div className="form-group">
                    <label className="label">Amount</label>
                    <input type="text" placeholder="Enter amount" />
                </div>
                <div className="form-group">
                    <label className="label">Payment Method</label>
                    <select>
                        <option value="">Select Payment Method</option>

                        <option value="credit-card">Credit Card</option>

                        <option value="paypal">PayPal</option>

                        <option value="bank-transfer">Bank Transfer</option>
                        
                    </select>
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default PaymentForm;