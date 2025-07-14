// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';

export default function Navbar({ onToggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="site-name">ACM Karunya</span>
      </div>
      <button className="toggle-button" onClick={onToggleSidebar}>
        ☰
      </button>
    </nav>
  );
}
