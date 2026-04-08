import React, { useRef, useState } from 'react';

export default function MagneticWrapper({ children, className = "", force = 0.5, innerForce = 0.2 }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * force;
    const y = (clientY - (top + height / 2)) * force;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform ease-out ${isHovered ? 'duration-75' : 'duration-700'} ${className}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <div 
        className={`transition-transform ease-out w-full h-full flex flex-col justify-center items-center ${isHovered ? 'duration-75' : 'duration-700'}`}
        style={{ transform: `translate3d(${position.x * innerForce}px, ${position.y * innerForce}px, 0)` }}
      >
        {children}
      </div>
    </div>
  );
}
