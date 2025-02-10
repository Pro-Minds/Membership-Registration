import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>My Application</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/member/user-form">User Form</a>
                <a href="/member/payment-form">Payment Form</a>
                <a href="/templates/privacy-policy">Privacy Policy</a>
                <a href="/templates/terms-of-service">Terms of Service</a>
                <a href="/admin/user-management">User Management</a>
            </nav>
        </header>
    );
};

export default Header;