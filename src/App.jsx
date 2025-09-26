// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import EventBlog from './pages/Events';
import Layout from './components/Layout';
import Gallery from './components/Gallery/Gallery';
import ContactPage from './pages/Contact';
import UpcomingEventPage from "./pages/UpcomingEventPage";
import Members from './components/Members';

// Helper to preload images
function preloadImages(imagePaths = []) {
  imagePaths.forEach((src) => {
    if (src) {
      const img = new Image();
      img.src = src;
    }
  });
}

export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // or 'smooth' if you want
  }, [location.pathname]);

  // Preload images (currently empty, ready for dynamic arrays from components)
  useEffect(() => {
    const allImages = [];
    preloadImages(allImages);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Gallery />} />
        <Route path="/events/:id" element={<EventBlog />} />
        <Route path="/members" element={<Members />} />
        <Route path="/upcoming/:id" element={<UpcomingEventPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}
