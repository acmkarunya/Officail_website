import React from 'react';
import '../styles/Events.css'; // Create this file if you want to style separately

function Events() {
  return (
    <div className="events-page">
      <div className="events-container">
        <h2>Our Events</h2>
        <p>Explore the exciting range of workshops, competitions, and tech talks hosted by ACM Karunya.</p>

        <ul className="events-list">
          <li>
            <h3>AI & ML Workshop</h3>
            <p>Hands-on session on building models using Python.</p>
          </li>
          <li>
            <h3>Hackathon 2025</h3>
            <p>A 24-hour coding sprint — team up and solve real-world challenges!</p>
          </li>
          <li>
            <h3>Web Development Bootcamp</h3>
            <p>Beginner to Pro in MERN stack — intensive weekend training.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Events;
