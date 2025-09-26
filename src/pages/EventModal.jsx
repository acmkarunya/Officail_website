import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ correct import
import { events } from "./eventsData";

const EventModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (events.length > 0) {
      setEvent(events[0]); // Pick latest event
      setShowModal(true);
    }
  }, []);

  if (!showModal || !event) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "600px", // responsive modal
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          position: "relative",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        {/* Event Banner with Close Button */}
        <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
          <img
            src={event.banner}
            alt={event.title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <button
            onClick={() => setShowModal(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              border: "none",
              background: "rgba(0,0,0,0.7)",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              transition: "0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#ff4d4d")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(0,0,0,0.7)")
            }
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "12px" }}>
          {/* View More Button */}
          <button
            style={{
              width: "100%", // full width on mobile
              maxWidth: "200px", // cap width for larger screens
              padding: "12px 20px",
              borderRadius: "10px",
              border: "2px solid #007BFF",
              background: "white",
              marginTop: "15px",
              color: "#007BFF",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "15px",
              transition: "0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#007BFF";
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "#007BFF";
            }}
            onClick={() => navigate(`/upcoming/${event.id}`)}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
