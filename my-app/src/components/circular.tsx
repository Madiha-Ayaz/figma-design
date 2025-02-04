import React from 'react';

interface CircularPollProps {
  percent: number;
}

const circular: React.FC<CircularPollProps> = ({ percent }) => {
  return (
    <div className="relative w-40 h-40 rounded-full">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#FF8F9C ${percent}%, #e5e7eb ${percent}%)`,
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white">
        <span className="text-2xl font-bold text-gray-800">{percent}%</span>
      </div>
    </div>
  );
};

export default circular;
