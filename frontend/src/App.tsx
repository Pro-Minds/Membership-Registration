import React from 'react';
import Header from './components/templates/Header';
import Body from './components/templates/Body';
import Footer from './components/templates/Footer';
import './App.css';    

// import logo from './logo.sv';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Render Header component */}
      <Body />   {/* Render Body component */}
      <Footer /> {/* Render Footer component */}
    </div>
  );
}

export default App;
