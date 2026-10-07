import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AppointmentModal from "./AppointmentModal";

export default function DoctorCard({ doctor, index = 0 }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="group rounded-3xl overflow-hidden flex flex-col bg-white border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500"
      >
        {/* Photo area */}
        <div
          className="relative overflow-hidden h-64 sm:h-[290px]"
          style={{ background: "linear-gradient(135deg, #0d57a0 0%, #05aba4 100%)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {doctor.image ? (
            <img
              loading="lazy"
              src={doctor.image}
              alt={doctor.name}
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
              <div className="w-36 h-36 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-7xl text-white/80" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
              </div>
              <p className="text-white/60 text-xs mt-2 font-medium">Photo Coming Soon</p>
            </div>
          )}

          {/* Specialty badge */}
          <div className="absolute top-3 left-3 glass-card text-primary px-3 py-1.5 rounded-full text-[11px] font-bold z-20">
            {doctor.specialty}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-3 px-5 py-5 flex-1">
          <div>
            <h4 className="font-bold text-on-surface text-base leading-tight group-hover:text-primary transition-colors duration-300">{doctor.name}</h4>
            {doctor.experience && (
              <p className="text-xs text-on-surface-variant mt-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[13px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                {doctor.experience}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-auto pt-3 border-t border-outline-variant/40">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group/btn"
            >
              <span className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-colors duration-300"></span>
              <span className="material-symbols-outlined text-[14px] leading-none relative z-10" style={{ verticalAlign: 'middle' }}>calendar_month</span>
              <span className="relative z-10">Book</span>
            </button>
            <Link
              to={`/doctor/${doctor.id}`}
              className="flex-1 py-2.5 rounded-xl border-2 border-primary/20 text-primary text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-primary hover:text-on-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[14px] leading-none" style={{ verticalAlign: 'middle' }}>person</span> Profile
            </Link>
          </div>
        </div>
      </motion.div>

      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
