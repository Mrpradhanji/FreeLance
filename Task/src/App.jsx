import './index.css';
import logo from './assets/Trikaay_logo.png';

// Custom animation classes (add to index.css or App.css if needed)
// .animate-fade-in { animation: fadeIn 1s ease-in; }
// .animate-slide-up { animation: slideUp 1s cubic-bezier(0.4,0,0.2,1); }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#f5f6fa] to-[#e9eaf3] min-h-screen flex flex-col font-sans">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full animate-fade-in">
        <img src={logo} alt="Trikaay Eye Clinic Logo" className="h-10 w-auto" />
        <nav className="space-x-8 text-gray-700 font-medium hidden md:block">
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
        <div className="space-x-4 flex items-center">
          <button className="px-4 py-2 rounded-full font-semibold text-gray-700 hover:bg-gray-100 transition">Login</button>
          <button className="px-4 py-2 rounded-full font-semibold bg-blue-600 text-white shadow hover:bg-blue-700 transition">Book Appointment</button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 overflow-hidden bg-white">
        {/* Background image (replace with your own if desired) */}
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Eye Care Hero" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900 leading-tight">See the World Clearly with Trikaay Eye Clinic</h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8">Advanced laser treatments, compassionate care, and a brighter vision for your future.</p>
          <button className="px-8 py-4 rounded-full font-semibold bg-blue-600 text-white text-lg shadow-lg hover:bg-blue-700 transition">Book Your Consultation</button>
        </div>
      </section>

      {/* SERVICES/FEATURES SECTION */}
      <section id="services" className="max-w-7xl mx-auto py-20 px-4 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Laser Eye Surgery */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition animate-slide-up">
            <img src="https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=400&q=80" alt="Laser Eye Surgery" className="w-24 h-24 object-cover rounded-full mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Laser Eye Surgery</h3>
            <p className="text-gray-600">State-of-the-art LASIK and SMILE procedures for crystal-clear vision with minimal downtime.</p>
          </div>
          {/* Comprehensive Eye Exams */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition animate-slide-up">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Eye Exams" className="w-24 h-24 object-cover rounded-full mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Comprehensive Eye Exams</h3>
            <p className="text-gray-600">Thorough check-ups using the latest diagnostic technology for all ages.</p>
          </div>
          {/* Pediatric Eye Care */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition animate-slide-up">
            <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80" alt="Pediatric Eye Care" className="w-24 h-24 object-cover rounded-full mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Pediatric Eye Care</h3>
            <p className="text-gray-600">Gentle, expert care for children's vision, from routine exams to early intervention.</p>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="bg-blue-50 py-20 px-4 animate-fade-in">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
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
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="max-w-7xl mx-auto py-20 px-4 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">1</div>
            <h4 className="font-semibold mb-2">Book Appointment</h4>
            <p className="text-gray-600">Schedule your visit online or by phone.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">2</div>
            <h4 className="font-semibold mb-2">Comprehensive Exam</h4>
            <p className="text-gray-600">Get a thorough eye check-up with our experts.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">3</div>
            <h4 className="font-semibold mb-2">Personalized Treatment</h4>
            <p className="text-gray-600">Receive a custom care plan for your needs.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">4</div>
            <h4 className="font-semibold mb-2">Enjoy Clear Vision</h4>
            <p className="text-gray-600">Experience life with improved sight and confidence.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="bg-blue-50 py-20 px-4 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">What Our Patients Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center max-w-md mx-auto animate-slide-up">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Patient 1" className="w-16 h-16 rounded-full mb-4 object-cover" />
            <p className="italic text-gray-700 mb-4">“The doctors at Trikaay Eye Clinic changed my life. I can see clearly without glasses for the first time in 20 years!”</p>
            <span className="font-semibold text-blue-700">Amit S.</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center max-w-md mx-auto animate-slide-up">
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=100&q=80" alt="Patient 2" className="w-16 h-16 rounded-full mb-4 object-cover" />
            <p className="italic text-gray-700 mb-4">“The staff made me feel comfortable and cared for. The results are amazing!”</p>
            <span className="font-semibold text-blue-700">Priya M.</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center max-w-md mx-auto animate-slide-up">
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=100&q=80" alt="Patient 3" className="w-16 h-16 rounded-full mb-4 object-cover" />
            <p className="italic text-gray-700 mb-4">“Highly recommend Trikaay for anyone considering laser eye surgery!”</p>
            <span className="font-semibold text-blue-700">Rahul D.</span>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="max-w-4xl mx-auto py-20 px-4 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center animate-slide-up">
            <h3 className="text-xl font-semibold mb-2">Consultation</h3>
            <div className="text-4xl font-bold mb-4">₹500</div>
            <p className="mb-4 text-gray-600">Comprehensive eye exam and personalized advice.</p>
            <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Book Now</button>
          </div>
          <div className="bg-blue-600 text-white rounded-2xl shadow p-8 flex flex-col items-center animate-slide-up">
            <h3 className="text-xl font-semibold mb-2">Laser Surgery</h3>
            <div className="text-4xl font-bold mb-4">₹25,000</div>
            <p className="mb-4">Advanced LASIK/SMILE procedure with aftercare.</p>
            <button className="px-6 py-3 rounded-full bg-white text-blue-600 font-semibold shadow hover:bg-blue-100 transition">Book Now</button>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center animate-slide-up">
            <h3 className="text-xl font-semibold mb-2">Family Package</h3>
            <div className="text-4xl font-bold mb-4">₹40,000</div>
            <p className="mb-4 text-gray-600">Special rates for families and group bookings.</p>
            <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Book Now</button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-blue-50 py-20 px-4 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <details className="bg-white rounded-xl shadow p-6 group">
            <summary className="font-semibold cursor-pointer text-blue-700 group-open:text-blue-900">Is laser eye surgery safe?</summary>
            <p className="mt-2 text-gray-600">Yes, laser eye surgery is a safe and effective procedure for most patients. Our experienced surgeons use the latest technology to ensure the best outcomes.</p>
          </details>
          <details className="bg-white rounded-xl shadow p-6 group">
            <summary className="font-semibold cursor-pointer text-blue-700 group-open:text-blue-900">How long is the recovery?</summary>
            <p className="mt-2 text-gray-600">Most patients experience improved vision within 24 hours and can return to normal activities within a few days.</p>
          </details>
          <details className="bg-white rounded-xl shadow p-6 group">
            <summary className="font-semibold cursor-pointer text-blue-700 group-open:text-blue-900">Do you offer pediatric eye care?</summary>
            <p className="mt-2 text-gray-600">Yes, we provide specialized eye care for children, including exams and early intervention for vision issues.</p>
          </details>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-4xl mx-auto py-20 px-4 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Book an Appointment</h2>
        <form className="bg-white rounded-2xl shadow p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input type="text" placeholder="Full Name" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <input type="email" placeholder="Email Address" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <input type="tel" placeholder="Phone Number" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <select className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" required>
              <option value="">Select Service</option>
              <option>Laser Eye Surgery</option>
              <option>Eye Exam</option>
              <option>Pediatric Eye Care</option>
            </select>
          </div>
          <textarea placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4}></textarea>
          <button type="submit" className="w-full px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Submit</button>
        </form>
      </section>

      {/* COMMUNITY/SPOTLIGHT SECTION */}
      <section className="bg-white py-20 px-4 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Our Community & Partners</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-2">
              {/* Award icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <span className="font-semibold">Best Eye Clinic 2024</span>
            <span className="text-gray-500 text-sm">Health Awards</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-2">
              {/* Partner hospital icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2M5 10h14M5 6h14M5 14h14" /></svg>
            </div>
            <span className="font-semibold">Partnered with City Hospital</span>
            <span className="text-gray-500 text-sm">Since 2018</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-2">
              {/* Social icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1.64a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11.64c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 6.09 4.07 4.13 1.64 1.16c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6.1v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.56 1.74 2.17 3.01 4.09 3.05A9.05 9.05 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" /></svg>
            </div>
            <span className="font-semibold">10k+ Happy Patients</span>
            <span className="text-gray-500 text-sm">Join our community</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f5f6fa] border-t border-gray-200 py-10 px-4 mt-auto animate-fade-in">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Trikaay Eye Clinic Logo" className="h-8 w-auto" />
            <span>© 2025 Trikaay Eye Clinic. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
