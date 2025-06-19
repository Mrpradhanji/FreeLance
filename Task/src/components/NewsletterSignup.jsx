import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    // Here you would send the email to your backend or service
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center animate-fade-in">
        <div className="text-green-700 font-semibold mb-1">Thank you for subscribing!</div>
        <div className="text-green-600 text-sm">You'll receive updates and offers in your inbox.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 bg-white rounded-xl shadow p-4 border border-gray-100">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition"
        placeholder="Your email address"
        aria-label="Email address"
        required
      />
      <button
        type="submit"
        className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
      >
        Subscribe
      </button>
      {error && <div className="text-red-600 text-sm mt-1 w-full animate-pulse">{error}</div>}
    </form>
  );
} 