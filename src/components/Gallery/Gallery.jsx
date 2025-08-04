import React from 'react';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';
import { events } from './eventData';
import { FiEye } from 'react-icons/fi'; // 👈 import Feather eye icon

const Gallery = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <section className="gallery-wrapper">
      <div className="gallery-heading">
        <h1>Our Past Events</h1>
        <p>Explore highlights from our previous ACM KITS events.</p>
      </div>

      <div className="gallery-grid">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => handleClick(event.id)}
          >
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-overlay">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
            <div className="event-hover-mask">
<span className="eye-icon"><FiEye /></span>
              <span>View Event</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
