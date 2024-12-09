'use client';

import { useState } from 'react';

export default function VolumeControl() {
  const [volume, setVolume] = useState(50); // Initial volume is set to 50%

  // Define the event type explicitly
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value)); // Convert the value to a number
  };

  return (
    <div>
      <div className="flex justify-between">
        <span>Low</span> <span>High</span>
      </div>
      <input
        type="range"
        min="700"
        max="1000"
        value={volume}
        onChange={handleSliderChange}
        className="w-full" // Tailwind CSS for full-width slider
      />
      <div>
       Max: {volume}$
      </div>
    </div>
  );
}
