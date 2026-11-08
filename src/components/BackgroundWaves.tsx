import React from 'react';

export const BackgroundWaves: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Ambient Radial Top Glow */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-600/10 dark:bg-blue-500/10 blur-[130px]" />
      
      {/* Secondary Ambient Accent Glow */}
      <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 dark:bg-purple-500/8 blur-[120px]" />
      
      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] rounded-full bg-sky-600/10 dark:bg-blue-600/8 blur-[140px]" />

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
