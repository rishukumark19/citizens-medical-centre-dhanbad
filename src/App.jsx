import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DepartmentDetailPage from './pages/DepartmentDetailPage';
import DoctorsPage from './pages/DoctorsPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => setAppointmentOpen(true);
  const handleCloseAppointment = () => setAppointmentOpen(false);

  return (
    <div className="app-container">
      <Header onOpenAppointment={handleOpenAppointment} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/index" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />

          {/* About Routes */}
          <Route path="/about-us" element={<AboutPage onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/about" element={<AboutPage onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/director-message" element={<AboutPage onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/mission-vision" element={<AboutPage onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/goals" element={<AboutPage onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/international" element={<AboutPage onOpenAppointment={handleOpenAppointment} />} />

          {/* Doctors Route */}
          <Route path="/doctor" element={<DoctorsPage onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/our-doctors" element={<DoctorsPage onOpenAppointment={handleOpenAppointment} />} />

          {/* Department / Centers of Care Routes */}
          <Route path="/:slug" element={<DepartmentDetailPage onOpenAppointment={handleOpenAppointment} />} />

          {/* Patient Portal & Blog Routes */}
          <Route path="/faq" element={<FAQPage onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog-detail/:slug" element={<BlogDetailPage onOpenAppointment={handleOpenAppointment} />} />

          {/* Contact Us Route */}
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer onOpenAppointment={handleOpenAppointment} />

      <AppointmentModal isOpen={appointmentOpen} onClose={handleCloseAppointment} />
    </div>
  );
}
