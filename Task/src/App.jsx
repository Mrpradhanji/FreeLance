import './index.css';
import logo from './assets/Trikaay_logo.png';
import NewsletterSignup from './components/NewsletterSignup';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, Suspense } from 'react';
import StatsCounters from './components/StatsCounters';
import MapSection from './components/MapSection';
const HeroSection = React.lazy(() => import('./components/HeroSection'));

// Floating SVG Blob component
function FloatingBlob({ className = '', style = {}, color = '#3b82f6', opacity = 0.15 }) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} fill="none">
      <path fill={color} fillOpacity={opacity} d="M44.8,-67.2C56.6,-59.2,63.7,-44.2,68.2,-29.2C72.7,-14.2,74.6,0.8,70.2,14.2C65.8,27.6,55.1,39.3,42.2,48.2C29.3,57.1,14.7,63.2,-0.7,64.1C-16.1,65,-32.2,60.7,-44.2,51.2C-56.2,41.7,-64.1,27,-67.2,11.2C-70.3,-4.6,-68.6,-21.5,-60.7,-33.7C-52.8,-45.9,-38.7,-53.4,-24.1,-60.2C-9.5,-67,5.6,-73.1,20.7,-73.2C35.8,-73.3,59.2,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
    </svg>
  );
}

const doctors = [
  {
    name: 'Dr. Anjali Mehra',
    specialty: 'Cornea & Refractive Surgery',
    bio: '15+ years experience in LASIK and SMILE procedures.',
    img: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=facearea&w=400&h=400&q=80',
  },
  {
    name: 'Dr. Rajeev Kumar',
    specialty: 'Pediatric Ophthalmology',
    bio: "Expert in children's eye care and early intervention.",
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=facearea&w=400&h=400&q=80',
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Cataract & Glaucoma',
    bio: 'Specialist in advanced cataract and glaucoma surgery.',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=400&h=400&q=80',
  },
  {
    name: 'Dr. Amit Sethi',
    specialty: 'Retina & Vitreous',
    bio: 'Retinal disease and diabetic eye care expert.',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&q=80',
  },
  {
    name: 'Dr. Meera Kapoor',
    specialty: 'Oculoplasty',
    bio: 'Cosmetic and reconstructive eye surgery specialist.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&q=80',
  },
  {
    name: 'Dr. Sanjay Verma',
    specialty: 'General Ophthalmology',
    bio: 'Comprehensive eye exams and primary care.',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&q=80',
  },
];

const surgeryPhotos = [
  'https://plus.unsplash.com/premium_photo-1682145288913-979906a9ebc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpbmljJTIwaW1hZ2VzfGVufDB8fDB8fHww',
  'https://plus.unsplash.com/premium_photo-1677333508494-261f60bdec60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXllJTIwY2xpbmljJTIwcGhvdG9zfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1662837775283-16e2f4bdff85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9ycyUyMGluJTIwY2xpbmljJTIwcGhvdG9zfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1676155081561-865fab11da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZ2VyeSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
];

// Custom animation classes (add to index.css or App.css if needed)
// .animate-fade-in { animation: fadeIn 1s ease-in; }
// .animate-slide-up { animation: slideUp 1s cubic-bezier(0.4,0,0.2,1); }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

export default function App() {
  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.18 } },
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };
  const navStagger = {
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const navItem = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Sticky header scroll state
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // FAQ data
  const faqs = [
    {
      q: 'Is laser eye surgery safe?',
      a: 'Yes, laser eye surgery is a safe and effective procedure for most patients. Our experienced surgeons use the latest technology to ensure the best outcomes.',
    },
    {
      q: 'How long is the recovery?',
      a: 'Most patients experience improved vision within 24 hours and can return to normal activities within a few days.',
    },
    {
      q: 'Do you offer pediatric eye care?',
      a: 'Yes, we provide specialized eye care for children, including exams and early intervention for vision issues.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept cash, credit/debit cards, UPI, and most major insurance plans.',
    },
    {
      q: 'Do you provide aftercare?',
      a: 'Yes, comprehensive aftercare is included with all surgical procedures to ensure the best recovery.',
    },
    {
      q: 'Can I book an appointment online?',
      a: 'Absolutely! Use our online form or call us to schedule your visit at your convenience.',
    },
  ];
  const [openFaq, setOpenFaq] = useState(null);

  // Persist form data in localStorage
  const initialForm = () => {
    try {
      const saved = localStorage.getItem('trikaayForm');
      return saved ? JSON.parse(saved) : { name: '', email: '', phone: '', service: '', message: '' };
    } catch {
      return { name: '', email: '', phone: '', service: '', message: '' };
    }
  };
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    localStorage.setItem('trikaayForm', JSON.stringify(form));
  }, [form]);
  const handleFormChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  // Validation state
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const validate = (f = form) => {
    const errs = {};
    if (!f.name.trim()) errs.name = 'Please enter your name.';
    if (!f.email.trim() || !/^\S+@\S+\.\S+$/.test(f.email)) errs.email = 'Enter a valid email address.';
    if (!f.phone.trim() || !/^\d{10}$/.test(f.phone.replace(/\D/g, ''))) errs.phone = 'Enter a valid 10-digit phone number.';
    if (!f.service) errs.service = 'Please select a service.';
    if (!f.message.trim() || f.message.length < 10) errs.message = 'Message should be at least 10 characters.';
    return errs;
  };
  useEffect(() => {
    setErrors(validate());
  }, [form]);
  const handleBlur = e => setTouched({ ...touched, [e.target.name]: true });

  // Clear form handler
  const handleClearForm = () => {
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
    setTouched({});
    setErrors({});
    localStorage.removeItem('trikaayForm');
  };

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // --- Smooth Scroll CSS (add to global styles, but for demo, inject here) ---
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = ''; };
  }, []);

  // --- Doctor Modal State ---
  const [modalDoctor, setModalDoctor] = useState(null);

  // --- Testimonials Carousel State ---
  const testimonials = [
    {
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
      text: '"The doctors at Trikaay Eye Clinic changed my life. I can see clearly without glasses for the first time in 20 years!"',
      name: 'Amit S.',
      rating: 5
    },
    {
      img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=100&q=80',
      text: '"The staff made me feel comfortable and cared for. The results are amazing!"',
      name: 'Priya M.',
      rating: 5
    },
    {
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=100&q=80',
      text: '"Highly recommend Trikaay for anyone considering laser eye surgery!"',
      name: 'Rahul D.',
      rating: 4
    },
    // Extra testimonials for carousel
    {
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: '"Professional, friendly, and highly skilled team. My vision is perfect now!"',
      name: 'Suresh K.',
      rating: 5
    },
    {
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: '"State-of-the-art facilities and caring staff. 10/10 experience!"',
      name: 'Meena R.',
      rating: 5
    }
  ];
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const nextTestimonial = () => setTestimonialIdx((testimonialIdx + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length);

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 6000);
    return () => clearTimeout(timer);
  }, [testimonialIdx]);

  // Parallax state for hero image
  const [parallaxY, setParallaxY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setParallaxY(window.scrollY * 0.2);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative bg-white min-h-screen flex flex-col font-sans overflow-hidden">
      {/* --- Sticky Book Appointment Button (Mobile Only) --- */}
      <button
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg md:hidden block hover:bg-blue-700 transition"
        style={{ minWidth: 220 }}
        onClick={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Book Appointment"
      >
        Book Appointment
      </button>
      {/* Faded clinic background image */}
      <img
        src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80"
        alt="Clinic background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none select-none z-0"
        style={{ minHeight: '100vh' }}
      />
      {/* HEADER */}
      <motion.header className="fixed top-0 left-0 w-full z-50" initial="hidden" animate="visible" variants={sectionVariant}>
        {/* Faded header background image */}
        <img
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
          alt="Clinic header background"
          className="absolute inset-0 w-full h-full object-cover opacity-15 blur-sm pointer-events-none select-none z-0"
          style={{ minHeight: '100%' }}
        />
        {/* Full-width animated background */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
          animate={{
            background: scrolled
              ? 'rgba(255,255,255,0.96)'
              : 'rgba(255,255,255,0)',
            boxShadow: scrolled ? '0 4px 24px rgba(30,64,175,0.08)' : '0 0px 0px rgba(0,0,0,0)',
            backdropFilter: scrolled ? 'blur(8px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
        {/* Content container */}
        <motion.div
          className="relative flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full transition-all duration-300"
          style={{ zIndex: 2 }}
        >
          <div className="flex flex-col items-center">
            <motion.img
              src={logo}
              alt="Trikaay Eye Clinic Logo"
              className="h-10 w-auto"
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: scrolled ? 0.85 : 1,
                filter: scrolled ? 'brightness(0.92)' : 'brightness(1)',
              }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            />
            <div className="text-xs text-gray-500 font-medium tracking-wide mt-1 ml-1">Eye care</div>
          </div>
          {/* Desktop nav */}
          <motion.nav
            className="space-x-8 text-gray-700 font-medium hidden md:block"
            variants={navStagger}
            initial="hidden"
            animate="visible"
            aria-label="Main navigation"
          >
            <motion.a href="#services" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400" variants={navItem} tabIndex={0}>Services</motion.a>
            <motion.a href="#about" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400" variants={navItem} tabIndex={0}>About</motion.a>
            <motion.a href="#testimonials" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400" variants={navItem} tabIndex={0}>Testimonials</motion.a>
            <motion.a href="#contact" className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400" variants={navItem} tabIndex={0}>Contact</motion.a>
          </motion.nav>
          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
          {/* Desktop buttons */}
          <motion.div
            className="space-x-4 flex items-center hidden md:flex"
            variants={navStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className="px-4 py-2 rounded-full font-semibold text-gray-700 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              variants={navItem}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Login"
            >
              Login
            </motion.button>
            <motion.button
              className="px-4 py-2 rounded-full font-semibold bg-blue-600 text-white shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              variants={navItem}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Book Appointment"
            >
              Book Appointment
            </motion.button>
          </motion.div>
        </motion.div>
        {/* Mobile menu overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 z-50"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col py-4 px-8 space-y-2">
                <li><a href="#services" className="block py-2 text-blue-900 font-semibold hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a href="#about" className="block py-2 text-blue-900 font-semibold hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#testimonials" className="block py-2 text-blue-900 font-semibold hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} onClick={() => setMenuOpen(false)}>Testimonials</a></li>
                <li><a href="#contact" className="block py-2 text-blue-900 font-semibold hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" tabIndex={0} onClick={() => setMenuOpen(false)}>Contact</a></li>
                <li><button className="w-full mt-4 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="Book Appointment" onClick={() => setMenuOpen(false)}>Book Appointment</button></li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="pt-20 md:pt-24"> {/* Push content below fixed header */}
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading...</div>}>
          <HeroSection
            parallaxY={parallaxY}
            scrolled={scrolled}
            sectionVariant={sectionVariant}
          />
        </Suspense>

        {/* Animated SVG Divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 0 0 30V0z" fill="#f5f6fa" />
          </svg>
        </div>

        {/* SERVICES/FEATURES SECTION */}
        <motion.section
          id="services"
          className="max-w-7xl mx-auto py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariant}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Laser Eye Surgery */}
            <motion.div
              className="flex flex-col items-center text-center p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer"
              variants={cardVariant}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(59,130,246,0.15)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src="https://images.unsplash.com/photo-1551601651-09492b5468b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXllJTIwc3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Laser Eye Surgery" className="w-24 h-24 object-cover rounded-full mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Laser Eye Surgery</h3>
              <p className="text-gray-600">State-of-the-art LASIK and SMILE procedures for crystal-clear vision with minimal downtime.</p>
            </motion.div>
            {/* Comprehensive Eye Exams */}
            <motion.div
              className="flex flex-col items-center text-center p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer"
              variants={cardVariant}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(59,130,246,0.15)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Eye Exams" className="w-24 h-24 object-cover rounded-full mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Comprehensive Eye Exams</h3>
              <p className="text-gray-600">Thorough check-ups using the latest diagnostic technology for all ages.</p>
            </motion.div>
            {/* Pediatric Eye Care */}
            <motion.div
              className="flex flex-col items-center text-center p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer"
              variants={cardVariant}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(59,130,246,0.15)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80" alt="Pediatric Eye Care" className="w-24 h-24 object-cover rounded-full mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Pediatric Eye Care</h3>
              <p className="text-gray-600">Gentle, expert care for children's vision, from routine exams to early intervention.</p>
            </motion.div>
          </motion.div>
        </motion.section>
        {/* Animated SVG Divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 30c240-40 480-40 720 0s480 40 720 0v30H0V30z" fill="#fff" />
          </svg>
        </div>

        {/* ABOUT US SECTION */}
        <motion.section
          id="about"
          className="bg-blue-50 py-20 px-4 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariant}
        >
          {/* Animated SVG Blob in About section */}
          <FloatingBlob className="absolute left-[-100px] bottom-[-100px] w-80 h-80 animate-float-slow" color="#2563eb" opacity={0.13} />
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=500&q=80" alt="Our Team" className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover mb-8 md:mb-0" />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">About Trikaay Eye Clinic</h2>
              <p className="text-gray-700 mb-4">Trikaay Eye Clinic is dedicated to providing world-class eye care with a personal touch. Our team of experienced ophthalmologists and caring staff use the latest technology to ensure the best outcomes for every patient.</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Over 10,000 successful laser procedures</li>
                <li>Modern, comfortable facilities</li>
                <li>Patient-centered approach</li>
              </ul>
              <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Meet Our Doctors</button>
            </div>
          </div>
        </motion.section>
        {/* STATS COUNTERS SECTION */}
        <section className="bg-white">
          <h2 className="text-3xl font-bold text-center mb-2 text-blue-900">Our Impact</h2>
          <StatsCounters />
        </section>
        {/* Animated SVG Divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 0 0 30V0z" fill="#f5f6fa" />
          </svg>
        </div>

        {/* DOCTORS GALLERY SECTION */}
        <motion.section
          className="max-w-7xl mx-auto py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariant}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Meet Our Doctors</h2>
          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {doctors.map((doc, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-8 hover:shadow-xl transition group cursor-pointer"
                variants={cardVariant}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(59,130,246,0.15)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setModalDoctor(doc)}
                tabIndex={0}
                aria-label={`More about ${doc.name}`}
              >
                <img src={doc.img} alt={doc.name} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:scale-105 group-hover:border-blue-400 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-blue-800 mb-1">{doc.name}</h3>
                <span className="text-blue-500 font-medium mb-2">{doc.specialty}</span>
                <p className="text-gray-600 text-center text-sm">{doc.bio}</p>
              </motion.div>
            ))}
          </motion.div>
          {/* Doctor Modal Popup */}
          {modalDoctor && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-2xl font-bold"
                  onClick={() => setModalDoctor(null)}
                  aria-label="Close doctor details"
                >
                  ×
                </button>
                <img src={modalDoctor.img} alt={modalDoctor.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100" />
                <h3 className="text-2xl font-bold text-blue-800 mb-1 text-center">{modalDoctor.name}</h3>
                <div className="text-blue-500 font-medium mb-2 text-center">{modalDoctor.specialty}</div>
                <p className="text-gray-700 text-center mb-4">{modalDoctor.bio}</p>
                <div className="text-gray-600 text-sm text-center">Experience: 10+ years<br/>Languages: English, Hindi<br/>Education: AIIMS, Delhi</div>
              </div>
            </div>
          )}
        </motion.section>
        {/* Animated SVG Divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 0 0 30V0z" fill="#fff" />
          </svg>
        </div>

        {/* SURGERY/CLINIC PHOTOS SECTION */}
        <motion.section
          className="max-w-7xl mx-auto py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariant}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Inside Our Clinic</h2>
          <motion.div
            className="grid md:grid-cols-4 sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {surgeryPhotos.map((url, i) => (
              <motion.div
                key={i}
                className="overflow-hidden rounded-2xl bg-white/60 backdrop-blur-lg shadow-lg group cursor-pointer"
                variants={cardVariant}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(59,130,246,0.15)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={url} alt={`Clinic or Surgery ${i + 1}`} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        {/* Animated SVG Divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 0 0 30V0z" fill="#f5f6fa" />
          </svg>
        </div>

        {/* HOW IT WORKS SECTION */}
        <motion.section
          className="max-w-7xl mx-auto py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariant}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">How It Works</h2>
          <motion.div
            className="relative flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Progress Line */}
            <div className="absolute md:top-1/2 md:left-0 md:right-0 md:h-1 md:w-full md:bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 hidden md:block z-0" style={{transform: 'translateY(-50%)'}}></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 md:hidden z-0" style={{transform: 'translateX(-50%)'}}></div>

            {/* Steps */}
            {[
              {
                title: 'Book Appointment',
                desc: 'Schedule your visit online or by phone.',
                img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
                icon: (
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2"/></svg>
                ),
              },
              {
                title: 'Comprehensive Exam',
                desc: 'Get a thorough eye check-up with our experts.',
                img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&q=80',
                icon: (
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/></svg>
                ),
              },
              {
                title: 'Personalized Treatment',
                desc: 'Receive a custom care plan for your needs.',
                img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80',
                icon: (
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6M12 14c-4 0-7-2-7-6s3-6 7-6 7 2 7 6-3 6-7 6z" stroke="currentColor" strokeWidth="2"/></svg>
                ),
              },
              {
                title: 'Enjoy Clear Vision',
                desc: 'Experience life with improved sight and confidence.',
                img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
                icon: (
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>
                ),
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className={`relative z-10 flex flex-col items-center bg-white rounded-2xl shadow-lg px-6 py-10 w-80 group transition-transform duration-300 animate-slide-up`}
                style={{ animationDelay: `${i * 0.15 + 0.1}s` }}
                variants={cardVariant}
              >
                {/* Step Image */}
                <img src={step.img} alt={step.title} className="w-24 h-24 object-cover rounded-xl mb-4 shadow-md border-4 border-blue-50 group-hover:border-blue-200 transition" />
                {/* Animated Badge & Icon */}
                <div className="mb-4 relative">
                  <span className="absolute -top-2 -right-2 bg-gradient-to-tr from-blue-400 to-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm shadow-lg animate-bounce-slow">{i + 1}</span>
                  <div className="w-16 h-16 bg-gradient-to-tr from-blue-100 via-blue-200 to-blue-50 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <h4 className="font-semibold mb-2 text-lg text-blue-900 group-hover:text-blue-600 transition-colors">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        {/* Animated SVG Divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 0 0 30V0z" fill="#fff" />
          </svg>
        </div>

        {/* TESTIMONIALS SECTION (Carousel) */}
        <motion.section
          id="testimonials"
          className="bg-blue-50 py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariant}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">What Our Patients Say</h2>
          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Patient Story (Wide Video)</h3>
            {/* Remove the import and usage of WideVideoTestimonial */}
          </div>
          <motion.div
            className="flex flex-col items-center gap-8 max-w-2xl mx-auto relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div
              key={testimonialIdx}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-full animate-slide-up"
              variants={cardVariant}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img src={testimonials[testimonialIdx].img} alt={`Patient ${testimonials[testimonialIdx].name}`} className="w-16 h-16 rounded-full mb-4 object-cover" />
              {/* Animated star rating */}
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[testimonialIdx].rating ? 'text-yellow-400' : 'text-gray-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 * i, type: 'spring', stiffness: 300 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </motion.svg>
                ))}
              </div>
              <p className="italic text-gray-700 mb-4">{testimonials[testimonialIdx].text}</p>
              <span className="font-semibold text-blue-700">{testimonials[testimonialIdx].name}</span>
            </motion.div>
            <div className="flex gap-4 mt-2">
              <button onClick={prevTestimonial} aria-label="Previous testimonial" className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg></button>
              <button onClick={nextTestimonial} aria-label="Next testimonial" className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 6 15 12 9 18" /></svg></button>
            </div>
            <div className="flex gap-1 mt-2">
              {testimonials.map((_, idx) => (
                <span key={idx} className={`w-2 h-2 rounded-full ${idx === testimonialIdx ? 'bg-blue-600' : 'bg-blue-200'}`}></span>
              ))}
            </div>
          </motion.div>
        </motion.section>
        {/* Animated SVG Divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 0 0 30V0z" fill="#f5f6fa" />
          </svg>
        </div>

        {/* PRICING SECTION */}
        <motion.section
          className="max-w-4xl mx-auto py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariant}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Transparent Pricing</h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center animate-slide-up" variants={cardVariant}>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <div className="text-4xl font-bold mb-4">₹500</div>
              <p className="mb-4 text-gray-600">Comprehensive eye exam and personalized advice.</p>
              <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Book Now</button>
            </motion.div>
            <motion.div className="bg-blue-600/90 backdrop-blur-lg text-white rounded-2xl shadow-lg p-8 flex flex-col items-center animate-slide-up" variants={cardVariant}>
              <h3 className="text-xl font-semibold mb-2">Laser Surgery</h3>
              <div className="text-4xl font-bold mb-4">₹25,000</div>
              <p className="mb-4">Advanced LASIK/SMILE procedure with aftercare.</p>
              <button className="px-6 py-3 rounded-full bg-white text-blue-600 font-semibold shadow hover:bg-blue-100 transition">Book Now</button>
            </motion.div>
            <motion.div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center animate-slide-up" variants={cardVariant}>
              <h3 className="text-xl font-semibold mb-2">Family Package</h3>
              <div className="text-4xl font-bold mb-4">₹40,000</div>
              <p className="mb-4 text-gray-600">Special rates for families and group bookings.</p>
              <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Book Now</button>
            </motion.div>
          </motion.div>
        </motion.section>
        {/* Animated SVG Divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 0 0 30V0z" fill="#fff" />
          </svg>
        </div>

        {/* FAQ SECTION */}
        <motion.section
          className="bg-blue-50 py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariant}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Frequently Asked Questions</h2>
          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl shadow-lg bg-white/80 backdrop-blur p-6 group cursor-pointer transition-all duration-300 border border-transparent ${openFaq === i ? 'border-blue-400 shadow-xl' : 'hover:border-blue-200 hover:shadow-xl'}`}
                variants={cardVariant}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg text-blue-700">{faq.q}</span>
                  <motion.span
                    initial={false}
                    animate={{ rotate: openFaq === i ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 text-blue-400"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 text-gray-700 text-base leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        {/* Animated SVG Divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 0 0 30V0z" fill="#f5f6fa" />
          </svg>
        </div>

        {/* CONTACT SECTION (Book an Appointment) */}
        <motion.section
          id="contact"
          className="max-w-4xl mx-auto py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariant}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Book an Appointment</h2>
          <motion.form
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6 max-w-2xl mx-auto flex flex-col"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Name */}
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4z"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  onBlur={handleBlur}
                  className={`pl-10 pr-3 py-3 w-full rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition ${form.name ? '' : 'text-gray-400'}`}
                  required
                  autoComplete="off"
                  placeholder=" "
                  aria-label="Full Name"
                />
                <label className={`absolute left-10 transition-all duration-200 bg-white px-1 pointer-events-none ${form.name ? '-top-3.5 text-xs text-blue-600' : 'top-2 text-base text-gray-400'}`}
                >
                  Full Name
                </label>
                {touched.name && errors.name && (
                  <div className="flex items-center gap-2 mt-1 text-red-600 animate-pulse">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1"/></svg>
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>
              {/* Email */}
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="none"/><path d="M22 6l-10 7L2 6"/></svg>
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  onBlur={handleBlur}
                  className={`pl-10 pr-3 py-3 w-full rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition ${form.email ? '' : 'text-gray-400'}`}
                  required
                  autoComplete="off"
                  placeholder=" "
                  aria-label="Email Address"
                />
                <label className={`absolute left-10 transition-all duration-200 bg-white px-1 pointer-events-none ${form.email ? '-top-3.5 text-xs text-blue-600' : 'top-2 text-base text-gray-400'}`}
                >
                  Email Address
                </label>
                {touched.email && errors.email && (
                  <div className="flex items-center gap-2 mt-1 text-red-600 animate-pulse">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1"/></svg>
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Phone */}
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2A19.72 19.72 0 0 1 3 5a2 2 0 0 1 2-2h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 19 16.91z"/></svg>
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleFormChange}
                  onBlur={handleBlur}
                  className={`pl-10 pr-3 py-3 w-full rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition ${form.phone ? '' : 'text-gray-400'}`}
                  required
                  autoComplete="off"
                  placeholder=" "
                  aria-label="Phone Number"
                />
                <label className={`absolute left-10 transition-all duration-200 bg-white px-1 pointer-events-none ${form.phone ? '-top-3.5 text-xs text-blue-600' : 'top-2 text-base text-gray-400'}`}
                >
                  Phone Number
                </label>
                {touched.phone && errors.phone && (
                  <div className="flex items-center gap-2 mt-1 text-red-600 animate-pulse">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1"/></svg>
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>
              {/* Service */}
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                </span>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleFormChange}
                  onBlur={handleBlur}
                  className={`pl-10 pr-3 py-3 w-full rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition ${form.service ? '' : 'text-gray-400'}`}
                  required
                  aria-label="Select Services"
                >
                  <option value="">None</option>
                  <option>Laser Eye Surgery</option>
                  <option>Eye Exam</option>
                  <option>Pediatric Eye Care</option>
                  <option>Cataract & Glaucoma</option>
                  <option>Retina & Vitreous</option>
                  <option>Oculoplasty</option>
                  <option>General Ophthalmology</option>
                </select>
                {/* Label floats above if no value, shrinks if value is selected */}
                <label className={`absolute left-10 transition-all duration-200 bg-white px-1 pointer-events-none ${form.service ? '-top-3.5 text-xs text-blue-600' : 'top-2 text-base text-gray-400'}`}
                >
                  Services
                </label>
                {touched.service && errors.service && (
                  <div className="flex items-center gap-2 mt-1 text-red-600 animate-pulse">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1"/></svg>
                    <span>{errors.service}</span>
                  </div>
                )}
              </div>
            </div>
            {/* Message */}
            <div className="relative">
              <span className="absolute left-3 top-4 text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleFormChange}
                onBlur={handleBlur}
                className={`pl-10 pr-3 py-3 w-full rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition ${form.message ? '' : 'text-gray-400'}`}
                rows={4}
                placeholder=" "
                aria-label="Your Message"
              ></textarea>
              <label className={`absolute left-10 transition-all duration-200 bg-white px-1 pointer-events-none ${form.message ? '-top-3.5 text-xs text-blue-600' : 'top-4 text-base text-gray-400'}`}
              >
                Your Message
              </label>
              {touched.message && errors.message && (
                <div className="flex items-center gap-2 mt-1 text-red-600 animate-bounce">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1"/></svg>
                  <span>{errors.message}</span>
                </div>
              )}
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Submit
            </motion.button>
            <button
              type="button"
              onClick={handleClearForm}
              className="w-full mt-2 px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 font-bold text-lg shadow hover:bg-blue-50 transition"
            >
              Clear
            </button>
          </motion.form>
          <MapSection />
        </motion.section>
        {/* Animated SVG Divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 0 0 30V0z" fill="#f5f6fa" />
          </svg>
        </div>

        {/* COMMUNITY/SPOTLIGHT SECTION (with Google Rating Badge) */}
        <motion.section
          className="bg-white py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariant}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Our Community & Partners</h2>
          <motion.div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
            {/* Award */}
            <motion.div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-2">
                {/* Award icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <span className="font-semibold">Best Eye Clinic 2024</span>
              <span className="text-gray-500 text-sm">Health Awards</span>
            </motion.div>
            {/* Partner hospital */}
            <motion.div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-2">
                {/* Partner hospital icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2M5 10h14M5 6h14M5 14h14" /></svg>
              </div>
              <span className="font-semibold">Partnered with City Hospital</span>
              <span className="text-gray-500 text-sm">Since 2018</span>
            </motion.div>
            {/* Social */}
            <motion.div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-2">
                {/* Social icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11.64c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 6.09 4.07 4.13 1.64 1.16c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 6.1v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.56 1.74 2.17 3.01 4.09 3.05A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" /></svg>
              </div>
              <span className="font-semibold">10k+ Happy Patients</span>
              <span className="text-gray-500 text-sm">Join our community</span>
            </motion.div>
          </motion.div>
        </motion.section>
        {/* Animated SVG Divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
            <path d="M0 0h1440v30c-240 40-480 40-720 0S240 0 0 30V0z" fill="#fff" />
          </svg>
        </div>

        {/* FOOTER */}
        <motion.footer
          className="bg-[#f5f6fa] border-t border-gray-200 py-10 px-4 mt-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariant}
        >
          {/* Newsletter Signup */}
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">Stay Updated!</h3>
            <p className="text-gray-600 text-center mb-4">Subscribe to our newsletter for the latest news, offers, and eye care tips.</p>
            <NewsletterSignup />
          </div>
          <motion.div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-gray-600 text-sm gap-8 md:gap-4">
            {/* Logo and copyright */}
            <div className="flex flex-col gap-2 md:gap-4 md:flex-row items-start md:items-center">
              <img src={logo} alt="Trikaay Eye Clinic Logo" className="h-8 w-auto mb-2 md:mb-0" />
              <div className="text-xs text-gray-500 font-medium tracking-wide mt-1 ml-1">Eye care</div>
              <span>© 2025 Trikaay Eye Clinic. All rights reserved.</span>
            </div>
            {/* Address */}
            <div className="min-w-[180px]">
              <div className="font-semibold text-blue-900 mb-1">Address</div>
              <div>123 Vision Avenue<br />Sector 21, New Delhi, India<br />Pin 110021</div>
            </div>
            {/* Contact Info */}
            <div className="min-w-[180px]">
              <div className="font-semibold text-blue-900 mb-1">Contact</div>
              <div>
                <span className="block">Phone: <a href="tel:+911234567890" className="hover:text-blue-600 transition">+91 12345 67890</a></span>
                <span className="block">Email: <a href="mailto:trikaayclinic@gmail.com" className="hover:text-blue-600 transition">trikaayclinic@gmail.com</a></span>
              </div>
            </div>
            {/* Services */}
            <div className="min-w-[180px]">
              <div className="font-semibold text-blue-900 mb-1">Services</div>
              <ul className="space-y-1">
                <li><a href="#services" className="hover:text-blue-600 transition">Laser Eye Surgery</a></li>
                <li><a href="#services" className="hover:text-blue-600 transition">Eye Exams</a></li>
                <li><a href="#services" className="hover:text-blue-600 transition">Pediatric Eye Care</a></li>
                <li><a href="#services" className="hover:text-blue-600 transition">Cataract & Glaucoma</a></li>
                <li><a href="#services" className="hover:text-blue-600 transition">Retina & Vitreous</a></li>
              </ul>
            </div>
            {/* Social Links */}
            <div className="min-w-[180px]">
              <div className="font-semibold text-blue-900 mb-1">Connect</div>
              <div className="flex gap-4 mt-1">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11.64c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 6.09 4.07 4.13 1.64 1.16c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 6.1v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.56 1.74 2.17 3.01 4.09 3.05A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" /></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-700 transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-800 transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><rect x="8" y="9" width="8" height="12"/><path d="M16 9v-2a4 4 0 0 1 8 0v2"/></svg>
                </a>
              </div>
            </div>
            {/* Google Rating Badge (moved to footer right) */}
            <div className="min-w-[180px] flex flex-col items-center md:items-end">
              <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full mb-2 shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                <span className="font-bold text-yellow-700 text-lg">4.9</span>
                <span className="text-gray-600 text-sm">on Google</span>
              </div>
              <span className="font-semibold">Rated by 2,000+ patients</span>
              <span className="text-gray-500 text-sm mb-2">Google Reviews</span>
              {/* Find us on Google Maps badge/button */}
              <a
                href="https://www.google.com/maps?q=123+Vision+Avenue+Sector+21+New+Delhi+India+Pin+110021"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold shadow hover:bg-blue-100 transition mt-2"
                style={{ minWidth: '170px', justifyContent: 'center' }}
                aria-label="Find us on Google Maps"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Find us on Google Maps
              </a>
            </div>
          </motion.div>
        </motion.footer>
      </div>
    </div>
  );
}
