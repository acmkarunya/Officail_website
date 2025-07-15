// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Layout from './components/Layout';
import SmoothScrollWrapper from "./SmoothScrollWrapper";

export default function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Layout>

  );
}
