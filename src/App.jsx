// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import EventBlog from './pages/Events';
import Team from './pages/Team';
import Layout from './components/Layout';
import Gallery from './components/Gallery/Gallery';

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
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Gallery />} />
        <Route path="/events/:id" element={<EventBlog />} />
      </Routes>
    </Layout>
  );
}
