import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = "918802248261"; // With country code, no +
  const message = "Hello, I would like to inquire about hospital services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      {/* Assuming Material Symbols doesn't have the exact WhatsApp logo, but let's use a forum/chat icon. 
          Actually WhatsApp logo isn't in Material Symbols. We can use 'chat' as a fallback if no svg is available, 
          or just an inline SVG. I will use 'chat'. */}
      <span className="material-symbols-outlined text-3xl">chat</span>
    </a>
  );
}
