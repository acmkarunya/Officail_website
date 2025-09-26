import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // ✅ Preload logo image
  useEffect(() => {
    const img = new Image();
    img.src = "/logo.png";
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_hy4ud9w",
        "template_slxiyxh",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "aMfKBCp9rnK2HlkUX"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
          console.error("Email failed:", error);
        }
      );
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "1200px",
          width: "100%",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 6px 24px rgba(0, 0, 0, 0.2)",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: "0 0 40%",
            padding: "50px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            borderRight: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: "80px",
              marginBottom: "40px",
              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))",
            }}
          />

          {/* Contact Info */}
          <div
            style={{
              width: "100%",
              lineHeight: "1.9",
              fontSize: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaEnvelope /> acmkarunya@gmail.com
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaPhoneAlt /> Rajhavel (President) – 9043000313
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaPhoneAlt /> Michael (Executive Director) – 8660758665
            </p>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <FaMapMarkerAlt style={{ marginTop: "4px" }} />
              <p style={{ margin: 0, lineHeight: "1.6" }}>
                Karunya Institute of Technology and Sciences <br />
                Coimbatore, Tamil Nadu <br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: "0 0 60%",
            padding: "50px 50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{ fontSize: "28px", marginBottom: "20px", textAlign: "center" }}
          >
            Contact Us
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px", width: "100%" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "14px",
              }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "14px",
              }}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "14px",
                resize: "none",
              }}
              required
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: loading ? "#6c757d" : "#007BFF",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "0.3s",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 900px) {
            div[style*="flex-direction: row"] {
              flex-direction: column !important;
            }
            div[style*="border-right"] {
              border-right: none !important;
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }
          }
        `}
      </style>

      <ToastContainer />
    </section>
  );
};

export default Contact;
