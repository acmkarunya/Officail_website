// src/components/Layout.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/Layout.css';
import { useEffect } from 'react';
import Footer from './Footer';


export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
useEffect(() => {
  document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
}, [isSidebarOpen]);
  return (
    <>
      <Navbar onToggleSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="main-content">
        {children}
      </main>
      <Footer/>
    </>
  );
}
