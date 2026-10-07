import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['All', 'Facilities', 'OT & ICU', 'Patient Rooms', 'Events'];

  const galleryItems = [
    { type: 'Facilities', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'Main Hospital Reception' },
    { type: 'OT & ICU', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', title: 'Modular Operation Theatre' },
    { type: 'OT & ICU', url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80', title: 'Level III Intensive Care Unit (ICU)' },
    { type: 'Patient Rooms', url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80', title: 'Premium Suite Room' },
    { type: 'Patient Rooms', url: 'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&w=800&q=80', title: 'Deluxe Twin Sharing Room' },
    { type: 'Facilities', url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', title: 'Advanced Diagnostic Center' },
    { type: 'Events', url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', title: 'Medical Camp 2026' },
    { type: 'Facilities', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', title: '24/7 In-house Pharmacy' },
    { type: 'OT & ICU', url: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&q=80', title: 'NICU & Child Care' }
  ];

  const filteredItems = activeFilter === 'All' ? galleryItems : galleryItems.filter(item => item.type === activeFilter);

  const handleKeyDown = useCallback((e) => {
    if (!selectedImage) return;
    if (e.key === 'Escape') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowLeft') {
      const currentIndex = filteredItems.findIndex(img => img.url === selectedImage.url);
      const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
      setSelectedImage(filteredItems[prevIndex]);
    } else if (e.key === 'ArrowRight') {
      const currentIndex = filteredItems.findIndex(img => img.url === selectedImage.url);
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextIndex]);
    }
  }, [selectedImage, filteredItems]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedImage, handleKeyDown]);

  return (
    <div className="flex flex-col bg-surface">
      <SEO title="Hospital Gallery | Citizens Medical Centre" description="Take a virtual tour of our state-of-the-art facilities, advanced equipment, and patient-centric infrastructure." />
      
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-primary via-[#0a6bbf] to-secondary py-20 md:py-24 px-margin-mobile md:px-gutter text-center overflow-hidden">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-white/20 blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/30 blur-2xl pointer-events-none" 
        />

        <motion.div 
          className="relative z-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[13px] font-bold mb-4 border border-white/25 shadow-sm">
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>photo_library</span>
            Photo &amp; Facility Tour
          </span>
          <h1 className="text-display-lg text-white mb-4 drop-shadow-sm font-bold">Hospital Gallery</h1>
          <p className="text-white/85 text-body-lg max-w-xl mx-auto leading-relaxed">
            Take a virtual tour of our state-of-the-art facilities, advanced equipment, and patient-centric infrastructure.
          </p>
        </motion.div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        
        {/* Filters */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {filters.map(filter => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 sm:px-6 py-2.5 rounded-full font-label-bold text-sm transition-all shadow-sm cursor-pointer border ${
                activeFilter === filter 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md' 
                  : 'bg-white text-on-surface-variant border-outline-variant/60 hover:border-primary/40 hover:text-primary'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </ScrollReveal>

        {/* Animated Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div 
                layout
                key={item.url} 
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl cursor-pointer aspect-[4/3] bg-surface-container border border-outline-variant/50 transition-all"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  loading="lazy" 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
                />
                
                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white/90 text-xs px-3 py-1 rounded-full border border-white/20 font-bold z-10">
                  {item.type}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center text-center p-6 text-white z-10">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 scale-75 group-hover:scale-100 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl text-white">zoom_in</span>
                  </div>
                  <h4 className="text-white text-base md:text-lg font-bold leading-snug drop-shadow-sm">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal rendered via Portal */}
      {selectedImage && createPortal(
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex flex-col justify-center items-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            {/* Close button */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 z-20 text-white bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-full p-2.5 transition-all cursor-pointer border border-white/20"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </motion.button>
            
            {/* Prev button */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 text-white bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-full p-3 transition-all cursor-pointer border border-white/20"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredItems.findIndex(img => img.url === selectedImage.url);
                const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
                setSelectedImage(filteredItems[prevIndex]);
              }}
            >
              <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </motion.button>

            {/* Modal image */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center max-w-4xl max-h-[85vh] p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                loading="lazy"
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[75vh] rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center">
                <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-1 font-semibold">{selectedImage.type}</span>
                <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>

            {/* Next button */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 text-white bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-full p-3 transition-all cursor-pointer border border-white/20"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredItems.findIndex(img => img.url === selectedImage.url);
                const nextIndex = (currentIndex + 1) % filteredItems.length;
                setSelectedImage(filteredItems[nextIndex]);
              }}
            >
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </motion.button>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
