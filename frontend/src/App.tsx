import React from 'react';
import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import RegistrationForm from './components/member/RegistrationForm'; // Import RegistrationForm component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Render Header component */}
      <div className="logo-container">
        <img src="/logo.png" alt="" className="logo" />
      </div>
      <RegistrationForm /> {/* Render RegistrationForm component */}
      <Footer /> {/* Render Footer component */}
    </div>
  );
}

export default App;