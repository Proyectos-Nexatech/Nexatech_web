import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="./Logo Nexa.png"
        alt="Nexatech Logo"
        className={`h-20 w-auto object-contain ${light ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};

export default Logo;
