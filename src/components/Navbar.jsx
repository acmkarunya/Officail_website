// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar({ onToggleSidebar }) {
  // ✅ Preload navbar images
  useEffect(() => {
    const images = ['/kits.png', '/logo.png'];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className='boo'>
      <nav className="navbar">
        {/* Logo + Title */}
        <Link to="/" className="logo">
          <img src="/kits.png" alt="Logo" />
          <img src="/logo.png" alt="Logo" />
          <span className="logo-text">ACM Karunya</span>
        </Link>

        {/* Desktop nav links */}
        <div className="navbar-links desktop-only">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/members">Team</Link>
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
