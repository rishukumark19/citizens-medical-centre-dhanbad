import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DirectorMessagePage from './pages/DirectorMessagePage';
import MissionVisionPage from './pages/MissionVisionPage';
import GoalsPage from './pages/GoalsPage';
import DepartmentDetailPage from './pages/DepartmentDetailPage';
import DoctorsPage from './pages/DoctorsPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import InternationalPatientsPage from './pages/InternationalPatientsPage';
import GalleryPage from './pages/GalleryPage';
import HealthPackagesPage from './pages/HealthPackagesPage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import DepartmentsPage from './pages/DepartmentsPage';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const location = useLocation();
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => setAppointmentOpen(true);
  const handleCloseAppointment = () => setAppointmentOpen(false);

  return (
    <>
      <ScrollToTop />
      <div className="app-container">
        <Header onOpenAppointment={handleOpenAppointment} />

        <main>
          <div key={location.pathname} className="animate-fade-in">
            <Routes location={location}>
              <Route path="/" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/index" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />

              {/* Separate About Subpage Routes */}
              <Route path="/about-us" element={<AboutPage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/about" element={<AboutPage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/director-message" element={<DirectorMessagePage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/mission-vision" element={<MissionVisionPage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/goals" element={<GoalsPage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/packages" element={<HealthPackagesPage onOpenAppointment={handleOpenAppointment} />} />

              {/* Doctors Route */}
              <Route path="/doctor" element={<DoctorsPage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/doctor/:id" element={<DoctorProfilePage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/our-doctors" element={<DoctorsPage onOpenAppointment={handleOpenAppointment} />} />

              {/* Patient Portal & Blog Routes */}
              <Route path="/faq" element={<FAQPage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/blog" element={<BlogListPage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/blog-detail/:slug" element={<BlogDetailPage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/international" element={<InternationalPatientsPage onOpenAppointment={handleOpenAppointment} />} />

              {/* Contact Us Route */}
              <Route path="/contact-us" element={<ContactPage onOpenAppointment={handleOpenAppointment} />} />

              {/* All Departments Listing Route */}
              <Route path="/departments" element={<DepartmentsPage />} />

              {/* Department / Centers of Care Routes (Catch-all for departments) */}
              <Route path="/:slug" element={<DepartmentDetailPage onOpenAppointment={handleOpenAppointment} />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>

        <Footer onOpenAppointment={handleOpenAppointment} />

        <WhatsAppButton />
        <ScrollToTopButton />

        <AppointmentModal isOpen={appointmentOpen} onClose={handleCloseAppointment} />
      </div>
    </>
  );
}
