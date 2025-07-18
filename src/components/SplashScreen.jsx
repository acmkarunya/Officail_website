import React, { useEffect, useState } from "react";
import "../styles/SplashScreen.css";

const SplashScreen = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-container">
      <div className="arrow-frame">
        <div className="arrow-segment top" />
        <div className="arrow-segment middle" />
        <div className="arrow-segment bottom" />
      </div>

      <svg className="circuit-svg top-circuit" viewBox="0 0 100 100">
        <path d="M100 0 L80 20 L60 20 L40 40" />
        <circle cx="80" cy="20" r="1.5" />
        <circle cx="60" cy="20" r="1.5" />
      </svg>

      <svg className="circuit-svg bottom-circuit" viewBox="0 0 100 100">
        <path d="M100 100 L80 80 L60 80 L40 60" />
        <circle cx="80" cy="80" r="1.5" />
        <circle cx="60" cy="80" r="1.5" />
      </svg>

      {showText && (
        <div className="splash-text">
          <h1>ACM <span>KITS</span></h1>
          <h2>STUDENT CHAPTER</h2>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
