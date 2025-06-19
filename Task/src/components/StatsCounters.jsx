import React, { useEffect, useState } from 'react';

const stats = [
  { label: 'Happy Patients', value: 10000, suffix: '+', duration: 1800 },
  { label: 'Years Experience', value: 15, suffix: '+', duration: 1200 },
  { label: 'Successful Surgeries', value: 12000, suffix: '+', duration: 2000 },
];

function useCountUp(target, duration) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration]);
  return count;
}

export default function StatsCounters() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-12">
      {stats.map((stat, i) => {
        const count = useCountUp(stat.value, stat.duration);
        return (
          <div key={stat.label} className="flex flex-col items-center bg-white rounded-2xl shadow p-8 min-w-[180px] animate-fade-in">
            <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
              {count}{stat.suffix}
            </div>
            <div className="text-gray-600 text-lg font-semibold text-center">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
} 