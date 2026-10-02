import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentModal from "./AppointmentModal";

export default function DoctorCard({ doctor }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col bg-surface-container-lowest border border-outline-variant/30">

        {/* Photo area */}
        <div
          className="relative overflow-hidden h-64 sm:h-[300px]"
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

          {/* Specialty badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-[11px] font-bold shadow-sm">
            {doctor.specialty}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-3 px-5 py-4 flex-1">
          <div>
            <h4 className="font-bold text-on-surface text-base leading-tight">{doctor.name}</h4>
            {doctor.experience && (
              <p className="text-xs text-on-surface-variant mt-0.5">{doctor.experience}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-auto pt-2 border-t border-outline-variant/40">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity shadow-sm"
            >
              <span className="material-symbols-outlined text-[14px]">calendar_month</span> Book
            </button>
            <Link
              to={`/doctor/${doctor.id}`}
              className="flex-1 py-2 rounded-xl border border-primary text-primary text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-primary hover:text-on-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">person</span> Profile
            </Link>
          </div>
        </div>
      </div>

      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
