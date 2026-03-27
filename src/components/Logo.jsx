import { useState, useEffect } from 'react';

const Logo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex items-center justify-center transition-all duration-500 overflow-hidden" 
         style={{ 
           height: isScrolled ? '38px' : '72px', 
           width: isScrolled ? '120px' : '150px'
         }}>
      <img 
        src="/resources/logo_RNR_white.svg" 
        alt="RNR Logo"
        className="h-auto transition-all duration-500 ease-in-out"
        style={{
          width: isScrolled ? '100px' : '110px',
          transform: isScrolled ? 'translateY(-14%) scale(2.0)' : 'translateY(0) scale(1)',
          filter: isScrolled ? 'none' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))'
        }}
      />
    </div>
  );
};

export default Logo;
