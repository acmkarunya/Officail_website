// src/components/Sidebar.jsx
import React from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`overlay ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <button className="close-button" onClick={onClose}>×</button>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={onClose}>Home</Link></li>
          <li><Link to="/events" onClick={onClose}>Events</Link></li>
          <li><Link to="/members" onClick={onClose}>Team</Link></li>
          <li><Link to="/contact" onClick={onClose}>Contact</Link></li>

        </ul>
      </div>
    </div>
  );
}
