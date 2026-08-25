import React from 'react';

interface CurvedSectionSeparatorProps {
  type: 'top-to-bottom' | 'bottom-to-top' | 'dark-to-light' | 'light-to-dark';
  className?: string;
  fillColor?: string;
}

export function CurvedSectionSeparator({
  type,
  className = '',
  fillColor = '#FAF7F2'
}: CurvedSectionSeparatorProps) {
  // Return calm waves / organic arches
  if (type === 'light-to-dark') {
    return (
      <div className={`relative w-full overflow-hidden leading-[0] ${className}`}>
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[60px] md:h-[120px]"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C320,80 720,120 1440,0 L1440,120 L0,120 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  if (type === 'dark-to-light') {
    return (
      <div className={`relative w-full overflow-hidden leading-[0] ${className}`}>
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[60px] md:h-[120px]"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 C320,40 720,0 1440,120 L1440,0 L0,0 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  // Smooth standard arc curve
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        className="relative block w-full h-[60px] md:h-[120px]"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C240,100 720,120 1440,60 L1440,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export function LotusLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Delicate botanical clinical lotus petals */}
      <path d="M12 2C12 2 9 8 9 12C9 16 12 22 12 22M12 2C12 2 15 8 15 12C15 16 12 22 12 22" />
      <path d="M12 7C9.5 8.5 7 11 7 14C7 17 9.5 19.5 12 20M12 7C14.5 8.5 17 11 17 14C17 17 14.5 19.5 12 20" />
      <path d="M12 11C7 11.5 5 13.5 5 16C5 18.5 7 19 12 19M12 11C17 11.5 19 13.5 19 16C19 18.5 17 19 12 19" />
    </svg>
  );
}
