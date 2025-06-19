import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ parallaxY, scrolled, sectionVariant }) {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center text-center py-24 px-4 overflow-hidden bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariant}
    >
      {/* Animated SVG Eye Icon */}
      <svg className="mx-auto mb-4 w-16 h-16 animate-pulse" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="32" cy="32" rx="28" ry="16" fill="#3b82f6" fillOpacity="0.12" />
        <ellipse cx="32" cy="32" rx="12" ry="12" fill="#fff" />
        <circle cx="32" cy="32" r="6" fill="#3b82f6" />
        <circle cx="32" cy="32" r="2" fill="#fff" />
      </svg>
      {/* Gradient background layer */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-100 via-white to-white z-0" aria-hidden="true"></div>
      {/* Animated SVG blob for hero background */}
      <motion.svg
        className="absolute left-[-80px] top-[-80px] w-72 h-72"
        viewBox="0 0 200 200"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, type: 'spring' }}
        aria-hidden="true"
      >
        <path fill="#3b82f6" fillOpacity="1" d="M44.8,-67.2C56.6,-59.2,63.7,-44.2,68.2,-29.2C72.7,-14.2,74.6,0.8,70.2,14.2C65.8,27.6,55.1,39.3,42.2,48.2C29.3,57.1,14.7,63.2,-0.7,64.1C-16.1,65,-32.2,60.7,-44.2,51.2C-56.2,41.7,-64.1,27,-67.2,11.2C-70.3,-4.6,-68.6,-21.5,-60.7,-33.7C-52.8,-45.9,-38.7,-53.4,-24.1,-60.2C-9.5,-67,5.6,-73.1,20.7,-73.2C35.8,-73.3,59.2,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
      </motion.svg>
      {/* Parallax effect for hero image */}
      <motion.img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        alt="Eye Care Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        style={{ transform: `translateY(${parallaxY}px)` }}
        initial={{ scale: 1.05, y: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-2xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900 leading-tight">See the World Clearly with Trikaay Eye Clinic</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8">Advanced laser treatments, compassionate care, and a brighter vision for your future.</p>
        <motion.button
          className="px-8 py-4 rounded-full font-semibold bg-blue-600 text-white text-lg shadow-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300 }}
          aria-label="Book Your Consultation"
        >
          Book Your Consultation
        </motion.button>
      </div>
      {/* Scroll Down Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="animate-bounce text-blue-600">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </span>
        <span className="text-xs text-blue-600 mt-1">Scroll Down</span>
      </div>
    </motion.section>
  );
} 