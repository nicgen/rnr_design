import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import PlaceholderImage from './PlaceholderImage';

const QuickLink = ({ to, children }) => (
  <Link to={to} className="hover:text-primary transition-all duration-300 text-[11px] font-black uppercase tracking-widest">
    {children}
  </Link>
);

const ConversionLink = ({ href, children, isExternal = true }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-primary hover:bg-white hover:text-black text-white px-5 py-2 rounded-full transition-all duration-300 text-[11px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2"
  >
    {children}
    {isExternal && <span className="material-symbols-outlined text-[14px]">arrow_outward</span>}
  </a>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 40);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Default to first category
      setActiveCategory('club');
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const menuSections = [
    {
      id: 'club',
      title: 'LE CLUB',
      image: '/resources/visuel_stade.jpeg',
      links: [
        { label: 'Histoire & Palmarès', to: '/le-club' },
        { label: 'Direction & Organigramme', to: '/le-club/organigramme' },
        { label: 'Infrastructures & Stade', to: '/le-club/infrastructures' },
        { label: 'Engagements RSE', to: '/le-club/engagements' },
        { label: 'Contact', to: '/contact' }
      ]
    },
    {
      id: 'pro',
      title: "L'ÉQUIPE PRO",
      isPlaceholder: true,
      links: [
        { label: 'Effectif Pro 23/24', to: '/equipe-pro' },
        { label: 'Staff Technique', to: '/equipe-pro' },
        { label: 'Calendrier & Résultats', to: '/equipe-pro/calendrier' },
        { label: 'Classement', to: '/equipe-pro/classement' }
      ]
    },
    {
      id: 'feminines',
      title: "L'ÉQUIPE FÉMININE",
      isExternal: true,
      href: 'https://www.les-valkyries-rouen.com/',
      isPlaceholder: true,
      links: []
    },
    {
      id: 'formation',
      title: 'FORMATION',
      isPlaceholder: true,
      links: [
        { label: 'Centre de Formation', to: '/formation' },
        { label: 'Pôle Espoirs (U18/U21)', to: '/formation/jeunes' },
        { label: 'École de Rugby', to: '/formation/ecole-rugby' },
        { label: 'Filières Spécialisées', to: '/formation/specialisees' }
      ]
    },
    {
      id: 'partenaires',
      title: 'PARTENAIRES',
      isPlaceholder: true,
      links: [
        { label: 'Le Business Club', to: '/partenaires' },
        { label: 'Hospitalités & Loges', to: '/partenaires/hospitalites' },
        { label: 'Visibilité & Sponsoring', to: '/partenaires/visibilite' },
        { label: 'Actualités Partenaires', to: '/partenaires/actualites' },
        { label: 'Devenir Partenaire', to: '/partenaires/contact' }
      ]
    },
    {
      id: 'actus',
      title: 'ACTUALITÉS',
      isPlaceholder: true,
      links: [
        { label: "Toute l'actualité", to: '/actualites-medias' },
        { label: 'Galeries Photos', to: '/actualites-medias/photos' },
        { label: 'Vidéos & Replay', to: '/actualites-medias/videos' }
      ]
    },
    {
      id: 'boutique',
      title: 'BOUTIQUE',
      isExternal: true,
      href: 'http://boutique.rouennormandierugby.fr/',
      isPlaceholder: true,
      links: []
    },
    {
      id: 'billetterie',
      title: 'BILLETTERIE',
      isExternal: true,
      href: 'http://billetterie.rouen-normandie-rugby.fr/',
      isPlaceholder: true,
      links: []
    }
  ];

  return (
    <>
      <nav className={`fixed w-full top-0 z-[100] text-white transition-all duration-500 ${isVisible && !isMenuOpen ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-black/90 shadow-2xl backdrop-blur-md' : 'bg-gradient-to-b from-black to-transparent py-2'}`}>
        <div className="w-full px-6 lg:px-12 flex justify-between items-center h-[70px] lg:h-[80px]">
          
          {/* LEFT: Burger + Quick Links */}
          <div className="flex items-center gap-8">
            <button 
              onClick={toggleMenu} 
              className="flex items-center group transition-all"
            >
              <div className="flex flex-col gap-1.5 w-8 py-2">
                <span className="h-0.5 w-full bg-white transition-all duration-300" />
                <span className="h-0.5 w-full bg-white transition-all duration-300" />
                <span className="h-0.5 w-full bg-white transition-all duration-300" />
              </div>
            </button>

            <div className="hidden xl:flex items-center gap-6 h-5 border-l border-white/20 pl-8">
              <QuickLink to="/actualites-medias">Actualités</QuickLink>
              <QuickLink to="/billetterie">Billetterie</QuickLink>
              <QuickLink to="/boutique">Boutique</QuickLink>
            </div>
          </div>

          {/* CENTER: Logo RNR */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <Logo isScrolled={isScrolled} />
            </Link>
          </div>

          {/* RIGHT: Partenaires / Contact */}
          <div className="hidden lg:flex items-center gap-8">
            <QuickLink to="/partenaires">Partenaires</QuickLink>
            <QuickLink to="/contact">Contact</QuickLink>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MENU OVERLAY */}
      <div className={`fixed inset-0 z-[110] bg-black transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* CLOSE BUTTON */}
        <button 
          onClick={toggleMenu}
          className="absolute top-8 left-8 lg:left-12 z-[120] text-white hover:text-primary transition-all flex items-center gap-3 group"
        >
          <span className="material-symbols-outlined text-4xl lg:text-5xl font-light">close</span>
          <span className="text-[12px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">Fermer</span>
        </button>

        <div className="w-full h-full flex flex-col lg:flex-row relative">
          
          {/* Main List (1 Column) */}
          <div className="w-full lg:w-[45%] h-full flex flex-col justify-center px-8 lg:px-24 py-24 overflow-y-auto no-scrollbar z-10">
            <div className="flex flex-col gap-4 lg:gap-6">
              {menuSections.map((section) => (
                <div key={section.id} className="relative group flex items-center">
                  {/* Vertical Sporty Line */}
                  <div className={`absolute -left-6 lg:-left-10 w-[2px] bg-primary transition-all pointer-events-none ${activeCategory === section.id ? 'h-[70%] top-[15%]' : 'h-0 top-1/2 group-hover:h-[60%] group-hover:top-[20%] group-hover:animate-stretch-v'}`} />
                  
                  {section.isExternal ? (
                    <a 
                      href={section.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-3xl lg:text-5xl font-display font-black uppercase italic italic-outfit tracking-tighter text-white/40 hover:text-white transition-all hover:translate-x-2"
                    >
                      {section.title}
                      <span className="material-symbols-outlined text-2xl lg:text-3xl text-primary">arrow_outward</span>
                    </a>
                  ) : (
                    <button 
                      onClick={() => setActiveCategory(section.id)}
                      className={`text-left text-3xl lg:text-5xl font-display font-black uppercase italic italic-outfit tracking-tighter transition-all hover:translate-x-2 ${activeCategory === section.id ? 'text-white' : 'text-white/40 hover:text-white'}`}
                    >
                      {section.title}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* BACKGROUND IMAGE + SUB LINKS */}
          <div className="absolute right-0 top-0 w-full lg:w-[65%] h-full overflow-hidden">
            {/* Full Height Background Image */}
            <div className="absolute inset-0 z-0">
               {menuSections.find(s => s.id === activeCategory)?.isPlaceholder ? (
                 <PlaceholderImage className="w-full h-full bg-slate-900 opacity-60" />
               ) : (
                 <img 
                   src={menuSections.find(s => s.id === activeCategory)?.image} 
                   alt="Category Background" 
                   className="w-full h-full object-cover animate-ken-burns opacity-70"
                 />
               )}
               {/* Deep Radial/Linear Gradient for readability - Lighter 50% opacity */}
               <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/50 to-black z-10" />
            </div>

            {/* Sub Links (Overlayed on gradient) */}
            <div className="relative z-20 h-full flex flex-col justify-center px-12 lg:px-24">
               {activeCategory && !menuSections.find(s => s.id === activeCategory)?.isExternal ? (
                 <div className="animate-slide-up max-w-lg">
                    <div 
                      key={activeCategory}
                      className="flex flex-col gap-6"
                    >
                      {menuSections.find(s => s.id === activeCategory)?.links.map((link, idx) => (
                        <Link 
                          key={idx}
                          to={link.to}
                          onClick={toggleMenu}
                          className="group flex flex-col animate-fade-in-right opacity-0"
                          style={{ animationDelay: `${idx * 0.08}s` }}
                        >
                          <span className="text-3xl lg:text-5xl font-display font-black italic italic-outfit tracking-tighter text-white group-hover:text-primary transition-all duration-300 uppercase leading-tight transform hover:translate-x-4">
                            {link.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                 </div>
               ) : (
                 <div className="flex flex-col gap-4 opacity-10 select-none">
                    <span className="text-[12vw] font-display font-black italic tracking-tighter text-white leading-none">RNR</span>
                    <span className="text-[6vw] font-display font-black italic tracking-tighter text-white leading-none leading-none opacity-50">NORMANDIE</span>
                 </div>
               )}
            </div>
          </div>
        </div>

        {/* BOTTOM DECOR / LOGO */}
        <div className="absolute bottom-12 right-12 z-[120] hidden lg:block opacity-20">
           <Logo isScrolled={false} />
        </div>
      </div>
    </>
  );
}
