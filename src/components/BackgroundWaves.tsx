import React from 'react';

export const BackgroundWaves: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* 100% Zero-Lag Hardware-Accelerated Ambient Radial Ellipses */}
      <div
        className="absolute top-[-10%] left-[20%] w-[650px] h-[650px] rounded-full pointer-events-none transform-gpu"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.14) 0%, rgba(59, 130, 246, 0.04) 45%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      
      {/* Secondary Ambient Accent Glow */}
      <div
        className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] rounded-full pointer-events-none transform-gpu"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(99, 102, 241, 0.03) 45%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      
      {/* Subtle Bottom Ambient Glow */}
      <div
        className="absolute bottom-[-10%] left-[5%] w-[650px] h-[650px] rounded-full pointer-events-none transform-gpu"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0.03) 45%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
};
