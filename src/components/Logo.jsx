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
    <div className={`relative flex items-center justify-center gap-2 transition-all duration-500 ${isScrolled ? 'h-[40px]' : 'h-[50px] lg:h-[60px]'}`}>
      <img 
        src="/assets/svg/logo_RNR_white.svg" 
        alt="RNR Logo"
        className="h-full w-auto transition-all duration-500 ease-in-out"
      />
      <span className={`font-heading font-black italic tracking-tighter transition-all duration-500 ${isScrolled ? 'text-lg lg:text-xl' : 'text-2xl lg:text-3xl'} text-white`}>
        RNR
      </span>
    </div>
  );
};

export default Logo;
