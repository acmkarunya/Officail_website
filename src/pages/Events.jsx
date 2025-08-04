import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../components/Gallery/eventData';
import '../styles/Events.css';



const EventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === parseInt(id));


  if (!event) return <div className="not-found">Event not found</div>;

  return (
    <section className="event-blog">
      <div className="event-hero">
        <img
          src={event.banner || event.image}
          alt="banner"
          className="hero-image"
          loading="lazy"
        />
        <div className="hero-overlay">
          <h1 className="fade-in">{event.title}</h1>
          <p className="event-date fade-in-delay">
            📅 {event.date || 'March 2024'} • 🏷️ {event.tags?.join(', ')}
          </p>
          <p className="event-subtitle fade-in-delay">{event.subtitle}</p>
        </div>

        <div className="event-back-button">
          <button onClick={() => navigate(-1)}>←</button>
        </div>
      </div>

      <div className="event-content">
        <div className="blog-container">
          <div className="blog-main">
            <h2>{event.title}</h2>
            <p className="event-paragraph">{event.blog}</p>
            <blockquote className="event-quote">
              “{event.quote || 'Inspiration and innovation drive every event we host at ACM KITS.'}”
            </blockquote>
          </div>

          <div className="blog-side">
            <div className="event-stats">
              <div className="stat-card">📍 {event.location || 'Campus Auditorium'}</div>
              <div className="stat-card">👥 {event.stats?.participants || '150+ Attendees'}</div>
              <div className="stat-card">📆 {event.stats?.days || 3} Days</div>
            </div>

            <ul className="highlight-list">
              {event.highlights?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="event-gallery">
        {event.images?.map((img, i) => (
          <img key={i} src={img} alt={`event-img-${i}`} className="gallery-img zoom-in" loading="lazy" />
        ))}
      </div>
    </section>
  );
};

export default EventPage;
