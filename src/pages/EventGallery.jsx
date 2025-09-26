import React, { useRef, useState, useEffect } from "react";
import "../styles/Events.css"
const LazyImage = ({ src, alt }) => {
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
      { threshold: 0.2 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lazy-image-wrapper" ref={imgRef}>
      {/* Blurred background while loading */}
      {!loaded && <div className="blur-placeholder" />}

      {visible && (
        <img
          src={src}
          alt={alt}
          className={`gallery-img zoom-in ${loaded ? "loaded" : ""}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
};

const EventGallery = ({ images }) => {
  const [visibleCount, setVisibleCount] = useState(6); // show first 6

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6); // load 6 more
  };

  if (!images.length) return null;

  return (
    <div className="event-gallery">
  {images.slice(0, visibleCount).map((img, i) => (
    <LazyImage key={i} src={img} alt={`event-img-${i}`} />
  ))}

  {visibleCount < images.length && (
    <div className="load-more-container">
      <button onClick={loadMore} className="load-more-btn">
        Load More
      </button>
    </div>
  )}
</div>

  );
};

export default React.memo(EventGallery);
