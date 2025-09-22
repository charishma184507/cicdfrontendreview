import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We will create this CSS file later

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">🏨 Hotel Booker</Link>
      <div className="nav-links">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link nav-link-button">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;