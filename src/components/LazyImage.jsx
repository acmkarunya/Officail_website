// src/components/LazyImage.jsx
import React, { useRef, useState, useEffect } from "react";
import "../styles/Events.css"
const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef();
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="lazy-image-wrapper">
      {visible && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${loaded ? "loaded" : ""}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
};

export default React.memo(LazyImage);
