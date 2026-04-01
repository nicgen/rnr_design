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
    <div className={`relative flex items-center justify-center transition-all duration-500 ${isScrolled ? 'h-[40px] lg:h-[50px]' : 'h-[60px] lg:h-[80px]'}`}>
      <img 
        src="/resources/logo_RNR_white.svg" 
        alt="RNR Logo"
        className={`h-full w-auto transition-all duration-500 ease-in-out ${isScrolled ? 'drop-shadow-none' : 'drop-shadow-lg'}`}
      />
    </div>
  );
};

export default Logo;
