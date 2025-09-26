import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { events } from "../components/Gallery/eventData";
import LazyImage from "../components/LazyImage";
import "../styles/Events.css";

const EventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === parseInt(id));
  const [visibleCount, setVisibleCount] = useState(6); // show 6 images initially
  const [preloadedImages, setPreloadedImages] = useState([]);

  if (!event) return <div className="not-found">Event not found</div>;

  const loadMore = () => setVisibleCount((prev) => prev + 6);

  // ✅ Preload all event images (hero + gallery) for faster display
  useEffect(() => {
    if (event.images) {
      const imgs = [];
      event.images.forEach((src) => {
        const img = new Image();
        img.src = src;
        imgs.push(img);
      });
      setPreloadedImages(imgs);
    }

    // Preload hero/banner image too
    [event.banner, event.image].forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [event]);

  return (
    <section className="event-blog">
      {/* Hero Section */}
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
            📅 {event.date || "March 2024"} • 🏷️ {event.tags?.join(", ")}
          </p>
          <p className="event-subtitle fade-in-delay">{event.subtitle}</p>
        </div>
        <div className="event-back-button">
          <button onClick={() => navigate(-1)}>← Back</button>
        </div>
      </div>

      {/* Content Section */}
      <div className="event-content">
        <div className="blog-container">
          <div className="blog-main">
            <h2>{event.title}</h2>
            <p className="event-paragraph">{event.blog}</p>
            <blockquote className="event-quote">
              “{event.quote ||
                "Inspiration and innovation drive every event we host at ACM KITS."}”
            </blockquote>
          </div>

          <div className="blog-side">
            <div className="event-stats">
              <div className="stat-card">
                📍 {event.stats?.location || "Campus Auditorium"}
              </div>
              <div className="stat-card">
                👥 {event.stats?.participants || "150+ Attendees"}
              </div>
              <div className="stat-card">
                📆 {event.stats?.days || 3} Days
              </div>
            </div>

            <ul className="highlight-list">
              {event.highlights?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="event-gallery">
        {event.images?.slice(0, visibleCount).map((img, i) => (
          <LazyImage
            key={i}
            src={img}
            alt={`event-img-${i}`}
            className="gallery-img zoom-in"
            // ✅ Use the preloaded image if ready
            onLoad={(e) => e.target.classList.add("loaded")}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < event.images?.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default EventPage;
