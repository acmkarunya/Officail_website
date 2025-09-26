// src/components/Footer.jsx
import React, { useRef, useState } from "react";
import "../styles/Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_hy4ud9w", // 🔹 replace with your Service ID
        "template_fasqhxg", // 🔹 replace with your Template ID
        formRef.current,
        "aMfKBCp9rnK2HlkUX" // 🔹 replace with your Public Key
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Subscribed successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          toast.error("Subscription failed. Try again!", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Map */}
        <div className="footer-section footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.203470441912!2d76.743!3d10.936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa61fa7c13f4f3%3A0x15b3d4c8!2sKarunya%20Institute%20of%20Technology%20and%20Sciences!5e0!3m2!1sen!2sin!4v1234567890"
            loading="lazy"
            title="Karunya Map"
          ></iframe>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="map-link"
          >
            View on Google Maps
          </a>
        </div>

        {/* Center - Newsletter */}
        <div className="footer-section center-col">
          <h4>Subscribe to our Newsletter</h4>
          <p>Get the latest updates directly to your inbox</p>

          <form
            ref={formRef}
            onSubmit={handleSubscribe}
            className="newsletter-form"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
            />
            <input type="hidden" name="date" value={new Date().toLocaleString()} />

            <button type="submit" className="subscribe-btn" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Subscribe"}
            </button>
          </form>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right - Nav */}
        <div className="footer-section footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} KITS ACM Student Chapter. All Rights
          Reserved.
        </p>
      </div>

      {/* Toast Notifications */}
      <ToastContainer theme="dark" position="top-right" autoClose={3000} />

      {/* Spinner Style */}
      <style>
        {`
          .spinner {
            width: 18px;
            height: 18px;
            border: 3px solid white;
            border-top: 3px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: auto;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
