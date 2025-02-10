import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from '../member/UserForm';
import PaymentForm from '../member/PaymentForm';
import PrivacyPolicyTemplate from '../templates/PrivacyPolicyTemplate';
import TermsOfServiceTemplate from '../templates/TermsOfServiceTemplate';
import UserManagement from '../admin/UserManagement';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import NotFound from './NotFound';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/member/user-form" element={<UserForm />} />
                    <Route path="/member/payment-form" element={<PaymentForm />} />
                    <Route path="/templates/privacy-policy" element={<PrivacyPolicyTemplate />} />
                    <Route path="/templates/terms-of-service" element={<TermsOfServiceTemplate />} />
                    <Route path="/admin/user-management" element={<UserManagement />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App; // Ensure this line is present