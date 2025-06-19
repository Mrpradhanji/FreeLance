import React, { useRef, useState } from 'react';

export default function WideVideoTestimonial() {
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
    <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6 max-w-3xl mx-auto animate-slide-up">
      <video
        ref={videoRef}
        src="https://cdn.pixabay.com/video/2020/05/20/08/36/8567-426993993_large.mp4" // Real person testimonial-style video, Pixabay
        className="w-full rounded-xl mb-4 shadow-md pointer-events-none"
        loop
        autoPlay
        muted
        playsInline
        controls={false}
        onContextMenu={e => e.preventDefault()}
        style={{ aspectRatio: '16/9', maxHeight: 320 }}
      />
      <div className="italic text-gray-700 text-center mb-2">“The doctors explained everything clearly. The process was smooth and the results are amazing!”</div>
      <span className="font-semibold text-blue-700">- Satisfied Patient</span>
    </div>
  );
} 