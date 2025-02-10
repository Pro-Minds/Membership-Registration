import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/templates/Home';
import RegistrationForm from './components/member/RegistrationForm';
import SignIn from './components/member/SignIn';
import Header from './components/templates/Header';
import Body from './components/templates/Body';
import Footer from './components/templates/Footer';
import RegisterAdmin from './pages/RegisterAdmin'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} /> {/* Default route */}
          <Route path="/admin/register" element={<RegisterAdmin />} /> {/* Route for registration */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
