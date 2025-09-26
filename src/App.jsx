// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import EventBlog from './pages/Events';
import Layout from './components/Layout';
import Gallery from './components/Gallery/Gallery';
import ContactPage from './pages/Contact';
import UpcomingEventPage from "./pages/UpcomingEventPage";


export default function App() {
  const location = useLocation();

  // ✅ This effect runs on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // or 'smooth' if you want
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Gallery />} />
        <Route path="/events/:id" element={<EventBlog />} />
        <Route path="/upcoming/:id" element={<UpcomingEventPage />} />

        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}
