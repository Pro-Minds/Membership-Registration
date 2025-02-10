import React, { useState } from 'react';
import './RegistrationForm.css';

interface RegistrationFormProps {
  onSubmit: (data: { email: string; password: string; name?: string; phone?: string; username?: string }) => void;
  isLogin: boolean;
  toggleMode: () => void;
  requiredFields: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit, isLogin, toggleMode, requiredFields }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      onSubmit({ email: formData.email, password: formData.password });
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>{isLogin ? 'Admin Login' : 'Admin Registration'}</h2>
      {requiredFields && ( // Use requiredFields prop to conditionally render fields
        <>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="cta-button">
        {isLogin ? 'Login' : 'Register'}
      </button>
      <p className="toggle-mode">
        {isLogin ? 'Don’t have an account? ' : 'Already have an account? '}
        <button type="button" onClick={toggleMode} className="toggle-button">
          {isLogin ? 'Register here' : 'Login here'}
        </button>
      </p>
      <div className="oauth-section">
        <p>Or sign up with:</p>
        <button
          type="button"
          className="oauth-button google"
          onClick={() => window.location.href = 'http://localhost:5000/admin/auth/google'}
        >
          <i className="fab fa-google"></i> Google
        </button>
      </div>

    </form>
  );
};

export default RegistrationForm;
