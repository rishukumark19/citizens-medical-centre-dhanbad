import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DirectorMessagePage from "./pages/DirectorMessagePage";
import MissionVisionPage from "./pages/MissionVisionPage";
import GoalsPage from "./pages/GoalsPage";
import DepartmentDetailPage from "./pages/DepartmentDetailPage";
import DoctorsPage from "./pages/DoctorsPage";
import BlogListPage from "./pages/BlogListPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import InternationalPatientsPage from "./pages/InternationalPatientsPage";
import GalleryPage from "./pages/GalleryPage";
import HealthPackagesPage from "./pages/HealthPackagesPage";
import DoctorProfilePage from "./pages/DoctorProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <div className="app-container">
        <Header />

        <main>
          <div key={location.pathname} className="animate-fade-in">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/index" element={<HomePage />} />

              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/director-message" element={<DirectorMessagePage />} />
              <Route path="/mission-vision" element={<MissionVisionPage />} />
              <Route path="/goals" element={<GoalsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/packages" element={<HealthPackagesPage />} />

              <Route path="/doctor" element={<DoctorsPage />} />
              <Route path="/doctor/:id" element={<DoctorProfilePage />} />
              <Route path="/our-doctors" element={<DoctorsPage />} />

              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog-detail/:slug" element={<BlogDetailPage />} />
              <Route path="/international" element={<InternationalPatientsPage />} />

              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/departments" element={<DepartmentsPage />} />

              <Route path="/:slug" element={<DepartmentDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </>
  );
}
