import React, { useState } from 'react';
import RegistrationForm from '../components/admin/RegistrationForm';
import { registerAdmin, loginAdmin } from '../helpers/api';

const RegisterAdmin: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = async (data: {
    email: string;
    password: string;
    name?: string;
    phone?: string;
    username?: string;
  }) => {
    try {
      if (isLogin) {
        const response = await loginAdmin(data.email, data.password);
        console.log('Login successful:', response);
        // Redirect to admin dashboard
      } else {
        const registrationData = {
          name: data.name || '',
          email: data.email,
          phone: data.phone || '',
          username: data.username || '',
          password: data.password,
        };
        const response = await registerAdmin(registrationData);
        console.log('Registration successful:', response);
        // Redirect to admin dashboard
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-admin-page">
      <RegistrationForm
        onSubmit={handleSubmit}
        isLogin={isLogin}
        toggleMode={() => setIsLogin(!isLogin)}
        requiredFields={!isLogin}
      />
    </div>
  );
};

export default RegisterAdmin;
