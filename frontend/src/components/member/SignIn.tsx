import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Here you would typically send the data to your backend for authentication
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h1 className="organization-name">MOUNTAIN TECH</h1>
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="submit-button">
            Sign In
          </button>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;