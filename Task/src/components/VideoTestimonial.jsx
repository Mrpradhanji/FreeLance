import React, { useRef, useState } from 'react';

export default function VideoTestimonial() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 max-w-md mx-auto animate-slide-up">
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder 10s video
        className="w-full rounded-lg mb-4 shadow-md"
        loop
        autoPlay
        muted
        playsInline
        style={{ maxHeight: 220 }}
      />
      <button
        onClick={handlePlayPause}
        className="mb-2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700 transition"
        aria-label={playing ? 'Pause video' : 'Play video'}
      >
        {playing ? 'Pause' : 'Play'}
      </button>
      <div className="italic text-gray-700 text-center mb-2">“I was nervous at first, but the team made me feel at ease. My vision is perfect now!”</div>
      <span className="font-semibold text-blue-700">- Real Patient</span>
    </div>
  );
} 