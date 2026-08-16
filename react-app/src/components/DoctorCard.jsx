import React from "react";
import { Link } from "react-router-dom";

const SOCIAL_ICONS = {
  facebook: (
    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
    </svg>
  ),
  instagram: (
    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  linkedin: (
    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
    </svg>
  ),
  twitter: (
    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
    </svg>
  ),
};

export default function DoctorCard({ doctor }) {
  return (
    <div className="group rounded-[20px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col bg-surface-container-lowest border border-outline-variant/30">

      {/* Top: Primary-colour photo area */}
      <div
        className="relative overflow-hidden h-64 sm:h-[320px]"
        style={{ background: "linear-gradient(135deg, #0d57a0 0%, #05aba4 100%)" }}
      >

        {doctor.image ? (
          <img
            loading="lazy"
            src={doctor.image}
            alt={doctor.name}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-end justify-center pb-6">
            <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-white/70" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
            </div>
          </div>
        )}

        {/* Social icons column */}
        <div className="absolute top-5 right-4 flex flex-col gap-2.5 z-10">
          {Object.entries(SOCIAL_ICONS).map(([name, icon]) => (
            <a
              key={name}
              href="#"
              onClick={e => e.preventDefault()}
              aria-label={name}
              className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center shadow-md hover:scale-110 hover:bg-white transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom: Name + Arrow */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-on-surface text-[16px] leading-tight truncate">{doctor.name}</h4>
          <p className="text-[12.5px] text-on-surface-variant font-medium mt-0.5 truncate">{doctor.specialty || doctor.qualification}</p>
        </div>

        <Link
          to={`/doctor/${doctor.id}`}
          className="ml-3 w-8 h-8 rounded-full flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity duration-200 shadow-md"
          style={{ background: "linear-gradient(135deg, #0d57a0 0%, #05aba4 100%)" }}
          aria-label={`View profile`}
        >
          <span className="material-symbols-outlined text-white text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
