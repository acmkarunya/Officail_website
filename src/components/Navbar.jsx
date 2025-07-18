// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar({ onToggleSidebar }) {
  return (
    <div className='boo'>
    <nav className="navbar">
      {/* Logo + Title */}
      <Link to="/" className="logo">
      <img src="/kits.png" alt="Logo" />
        <img src="/logo.png" alt="Logo" />
        ACM Karunya
      </Link>

      {/* Desktop nav links */}
      <div className="navbar-links desktop-only">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* Mobile menu button */}
      <button className="toggle-button mobile-only" onClick={onToggleSidebar}>
        ☰
      </button>
    </nav>
    </div>
  );
}
