// RegistrationForm.tsx
import React, { useState } from 'react';
import './RegistrationForm.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log({ name, email, password });
  };

  return (
    <div className="registration-container">
          <div className="RegistrationForm"></div>
      <div className="registration-form">
        <h1 className="organization-name">MOUNTAIN TECH</h1>
        <h2>Glad to see you!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <div className="input-icon">
              <FaUser className="icon" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-icon">
              <FaEnvelope className="icon" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-icon">
              <FaLock className="icon" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-icon">
              <FaLock className="icon" />
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" required /> I read and agree to <a href="#">Terms & Conditions</a>
          </div>
          <button type="submit" className="submit-button">Create Account</button>
          <p>Already have an account? <a href="#">Sign in</a></p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
