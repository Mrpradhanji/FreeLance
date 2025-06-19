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
        src="https://player.vimeo.com/external/3195393.sd.mp4?s=6e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e&profile_id=164&oauth2_token_id=57447761" // Real person testimonial-style video
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