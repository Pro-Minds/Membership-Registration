import React, { useState } from 'react';

const UserForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (consent) {
            // Collect and store user data
            console.log("User data collected:", { name, email });
        } else {
            alert("Consent is required.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>
                I consent to data collection:
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;