import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body: React.FC = () => {
  return (
    <main className="body">
      <div className="home">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </div>
  
      <section className="hero">
        <h1>Welcome to Membership Registration</h1>
        <p>Join our community and unlock exclusive benefits.</p>
        <Link to="/register" className="cta-button">Register Now</Link>
      </section>
      
      <section className="features">
        <div className="feature">
          <h2>Easy Registration</h2>
          <p>Simple and quick process to become a member in minutes.</p>
        </div>
        <div className="feature">
          <h2>Exclusive Benefits</h2>
          <p>Access to special events, discounts, and networking opportunities.</p>
        </div>
        <div className="feature">
          <h2>Community Support</h2>
          <p>Join a thriving community of like-minded individuals.</p>
        </div>
      </section>
      
      <section className="about">
        <h2>About Us</h2>
        <p>We are dedicated to fostering a vibrant community of professionals and enthusiasts. Our membership program offers valuable resources, networking opportunities, and exclusive events to help you grow and succeed.</p>
      </section>
    </main>
  );
};

export default Body;