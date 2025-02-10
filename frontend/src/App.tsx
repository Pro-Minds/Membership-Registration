import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/templates/Header';
import Body from './components/templates/Body';
import Footer from './components/templates/Footer';
import RegisterAdmin from './pages/RegisterAdmin'; 
import Subscription from './components/member/SubscriptionPlans'; 

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} /> {/* Default route */}
          <Route path="/admin/register" element={<RegisterAdmin />} /> {/* Route for registration */}
          <Route path="/subscription" element={<Subscription />} /> {/* Route for registration */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
