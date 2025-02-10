import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body: React.FC = () => {
  return (
    <main className="body">
      <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Discover the best services tailored for you.</p>
        <button className="cta-button">Get Started</button>
      </section>
      <section className="features">
        <div className="feature">
          <h2>Feature One</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature">
          <h2>Feature Two</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature">
          <h2>Feature Three</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
    </main>
  );
};

export default Body;
