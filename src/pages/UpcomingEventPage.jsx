import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { events as upcomingEvents } from "./eventsData";
import "./UpcomingEventPage.css";

const UpcomingEventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = upcomingEvents.find((e) => e.id === parseInt(id));

  if (!event) return <div className="not-found">Upcoming Event not found</div>;

  return (
    <section className="upcoming-event-page">
      {/* ===== Hero Section ===== */}
      <div className="hero">
        <img src={event.banner} alt={event.title} className="hero-img" />
        <div className="hero-overlay">
          <h1>{event.title}</h1>
          <p>{event.date}</p>
          <div className="hero-btns">
            <button onClick={() => navigate(-1)} className="back-btn">
              ← Back
            </button>
            {event.link && (
              <button
                className="register-btn"
                onClick={() => window.open(event.link, "_blank")}
              >
                Register Now
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ===== Event Content Section ===== */}
      <div className="content">
        <h2>{event.title}</h2>
        <p>{event.description || "More details coming soon!"}</p>

        {/* Stats (Optional - only if data exists) */}
        {(event.location || event.participants || event.duration) && (
          <div className="stats">
            {event.location && (
              <div className="stat-box">
                <h3>📍 Location</h3>
                <p>{event.location}</p>
              </div>
            )}
            {event.participants && (
              <div className="stat-box">
                <h3>👥 Participants</h3>
                <p>{event.participants}</p>
              </div>
            )}
            {event.duration && (
              <div className="stat-box">
                <h3>⏳ Duration</h3>
                <p>{event.duration}</p>
              </div>
            )}
          </div>
        )}

        {/* Highlights */}
        {event.highlights && event.highlights.length > 0 && (
          <div className="highlights">
            <h3>Event Highlights</h3>
            <ul>
              {event.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Quote / Note */}
        {event.note && <div className="quote">“{event.note}”</div>}
      </div>
    </section>
  );
};

export default UpcomingEventPage;
