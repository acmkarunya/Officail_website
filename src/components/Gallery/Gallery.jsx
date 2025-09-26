import React from 'react';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';
import { events as pastEvents } from './eventData';
import { events as upcomingEvents } from './upcomingdata';
import { FiEye } from 'react-icons/fi';

const Gallery = () => {
  const navigate = useNavigate();

  const handleClick = (id, isUpcoming = false) => {
    if (isUpcoming) {
      navigate(`/upcoming/${id}`);
    } else {
      navigate(`/events/${id}`);
    }
  };

  return (
    <section className="gallery-wrapper">
      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <div className="upcoming-section">
          <div className="upcoming-heading">
            <h1>Upcoming Events</h1>
            <p>Don’t miss out on what’s happening soon!</p>
          </div>

          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="upcoming-card"
              onClick={() => handleClick(event.id, true)}
            >
              <div className="upcoming-aspect">
                <img
                  src={event.banner}
                  alt={event.title}
                  className="upcoming-image"
                />
                <div className="upcoming-overlay">
                  <h2>{event.title}</h2>
                  <p>{event.date}</p>
                </div>
                <div className="upcoming-mask">
                  <span className="upcoming-eye"><FiEye /></span>
                  <span>Click to View More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Past Events */}
      <div className="gallery-section">
        <div className="gallery-heading">
          <h1>Our Past Events</h1>
          <p>Explore highlights from our previous ACM KITS events.</p>
        </div>

        <div className="gallery-grid">
          {pastEvents.map((event) => (
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
      </div>
    </section>
  );
};

export default Gallery;
