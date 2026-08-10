import React, { useState } from 'react';
import SEO from '../components/SEO';

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

  return (
    <div className="flex flex-col">
      <SEO title="Hospital Gallery | Citizens Medical Centre" />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-20 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-display-lg text-on-surface mb-4">Hospital Gallery</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities, advanced equipment, and patient-centric infrastructure.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-label-bold transition-colors border ${
                activeFilter === filter 
                  ? 'bg-primary text-on-primary border-primary' 
                  : 'bg-surface text-on-surface border-outline-variant hover:bg-surface-variant'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl cursor-pointer aspect-4/3 transition-shadow"
              onClick={() => setSelectedImage(item)}
            >
              <img loading="lazy" 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 text-on-background">
                <span className="material-symbols-outlined text-4xl mb-3">image</span>
                <h4 className="text-headline-md text-lg text-white font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-[200] flex flex-col justify-center items-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-on-background hover:text-primary transition-colors bg-surface-container rounded-full p-2"
            onClick={() => setSelectedImage(null)}
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <img 
            loading="lazy"
            src={selectedImage.url} 
            alt={selectedImage.title} 
            className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <h3 className="text-white text-headline-md mt-6 text-center">{selectedImage.title}</h3>
        </div>
      )}
    </div>
  );
}
