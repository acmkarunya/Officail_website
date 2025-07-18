import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/events.json';
import Gallery from 'react-photo-gallery';

const GalleryPage = () => {
  const { id } = useParams();
  const event = data.pastEvents.find(e => e.id === id);

  if (!event) return <p>Event not found</p>;

  const photos = event.gallery.map(url => ({
    src: url,
    width: 4,
    height: 3
  }));

  return (
    <div style={{ padding: '40px 20px' }}>
      <Link to="/">← Back</Link>
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.summary}</p>
      <Gallery photos={photos} />
    </div>
  );
};

export default GalleryPage;
