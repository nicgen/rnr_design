import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import PlaceholderImage from './PlaceholderImage';

const QuickLink = ({ to, children }) => (
  <Link to={to} className="hover:text-primary transition-all duration-300 text-(--text-nav) font-black uppercase tracking-widest">
    {children}
  </Link>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileView, setMobileView] = useState('menu');
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
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
      setActiveCategory('club');
      setMobileView('menu');
    } else {
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  const menuSections = [
    {
      id: 'actus',
      title: 'ACTUALITÉS',
      isDirect: true,
      to: '/actualites-medias',
      links: []
    },
    {
      id: 'club',
      title: 'LE CLUB',
      image: '/assets/images/ui/www_leclub.webp',
      links: [
        { label: 'Histoire & Palmarès', to: '/le-club' },
        { label: 'Direction & Organigramme', to: '/le-club/organigramme' },
        { label: 'Infrastructures & Stade', to: '/le-club/infrastructures' },
        { label: 'Engagements RSE', to: '/le-club/engagements' }
      ]
    },
    {
      id: 'pro',
      title: "L'ÉQUIPE PRO",
      image: '/assets/images/ui/www_equipe_pro.webp',
      links: [
        { label: 'Effectif Pro 25/26', to: '/equipe-pro' },
        { label: 'Calendrier & Résultats', to: '/equipe-pro/calendrier' },
        { label: 'Classement', to: '/equipe-pro/classement' }
      ]
    },
    {
      id: 'feminines',
      title: 'LES VALKYRIES',
      isExternal: true,
      href: 'https://www.les-valkyries-rouen.com/',
      isPlaceholder: true,
      links: []
    },
    {
      id: 'formation',
      title: 'FORMATION',
      image: '/assets/images/ui/www_formation.webp',
      links: [
        { label: 'Détection', to: 'https://www.rouennormandierugbyformation.fr/detections/', isExternal: true },
        { label: 'Centre de formation - Académie', to: '/formation' },
        { label: 'Pôle jeune espoir et pré-formation', to: '/formation/jeunes' },
        { label: 'École de rugby', to: '/formation/ecole-rugby' }
      ]
    },
    {
      id: 'partenaires',
      title: 'PARTENAIRES',
      image: '/assets/images/ui/www_entreprise.webp',
      links: [
        { label: 'Le Business Club', to: '/partenaires' },
        { label: 'Hospitalités & Loges', to: '/partenaires/hospitalites' },
        { label: 'Visibilité & Sponsoring', to: '/partenaires/visibilite' },
        { label: 'Actualités Partenaires', to: '/partenaires/actualites' },
        { label: 'Devenir Partenaire', to: '/partenaires/contact' }
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
    },
    {
      id: 'contact',
      title: 'CONTACT',
      isDirect: true,
      to: '/contact',
      links: []
    }
  ];

  const activeSection = menuSections.find(s => s.id === activeCategory);

  return (
    <>
      <nav className={`fixed w-full top-0 z-[100] text-white transition-all duration-500 ${isVisible && !isMenuOpen ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-black/90 shadow-2xl backdrop-blur-md' : 'bg-gradient-to-b from-black to-transparent py-2'}`}>
        <div className="container-premium flex justify-between items-center h-(--nav-height)">

          {/* LEFT: Burger + Actualités */}
          <div className="flex items-center gap-4 lg:gap-8">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="flex items-center group transition-all"
            >
              <div className="flex flex-col gap-1.5 w-6 lg:w-8 py-2">
                <span className="h-0.5 w-full bg-white transition-all duration-300" />
                <span className="h-0.5 w-full bg-white transition-all duration-300" />
                <span className="h-0.5 w-full bg-white transition-all duration-300" />
              </div>
            </button>

            <div className="hidden xl:flex items-center gap-6 h-5 border-l border-white/20 pl-8">
              <QuickLink to="/actualites-medias">Actualités</QuickLink>
              <div className="border-l border-white/20 h-5" />
              <QuickLink to="/equipe-pro">L'équipe pro</QuickLink>
            </div>
          </div>

          {/* CENTER: Logo RNR */}
          <div className="absolute left-1/2 -translate-x-1/2 scale-90 lg:scale-100 transition-transform">
            <Link to="/">
              <Logo isScrolled={isScrolled} />
            </Link>
          </div>

          {/* RIGHT: Boutique / Billetterie */}
          <div className="hidden lg:flex items-center gap-6">
            <QuickLink to="/boutique">Boutique</QuickLink>
            <div className="border-l border-white/20 h-5" />
            <QuickLink to="/billetterie">Billetterie</QuickLink>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MENU OVERLAY */}
      <div className={`fixed inset-0 z-[110] bg-black transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

        {/* CLOSE BUTTON */}
        <button
          onClick={toggleMenu}
          className="absolute top-8 left-8 lg:left-12 z-[130] text-white hover:text-primary transition-all flex items-center gap-3 group"
        >
          <span className="material-symbols-outlined text-4xl lg:text-5xl font-light">close</span>
          <span className="text-(--text-sm) font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">Fermer</span>
        </button>

        {/* BACKGROUND IMAGE — right panel only on desktop, full on mobile */}
        <div className="absolute inset-0 z-0 lg:left-[38%] h-full overflow-hidden pointer-events-none">
          {activeSection?.isPlaceholder ? (
            <PlaceholderImage className="w-full h-full bg-slate-900 opacity-60" />
          ) : (
            <img
              src={activeSection?.image}
              alt="Category Background"
              className="w-full h-full object-cover animate-ken-burns opacity-50"
              style={{ filter: 'blur(3px)' }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black via-black/75 to-black/60 lg:to-transparent" />
        </div>

        {/* Vertical separator — desktop only */}
        <div className="hidden lg:block absolute left-[38%] top-0 bottom-0 w-px bg-white/10 z-20" />

        {/* LEFT PANEL — menu list */}
        <div className={`absolute inset-0 lg:inset-auto lg:left-0 lg:top-0 lg:bottom-0 lg:w-[38%] z-10 bg-black flex flex-col justify-between px-10 lg:px-16 pt-28 pb-10 lg:pb-12 lg:pt-24 transition-transform duration-300 ease-in-out ${mobileView === 'menu' ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="flex flex-col gap-1 lg:gap-1.5 flex-1 justify-start lg:justify-center">
            {menuSections.map((section) => (
              <div key={section.id} className="relative group flex items-center">
                {/* Active indicator line */}
                <div className={`absolute -left-4 w-[2px] bg-primary transition-all duration-300 pointer-events-none ${activeCategory === section.id ? 'h-[70%] top-[15%]' : 'h-0 top-1/2 group-hover:h-[60%] group-hover:top-[20%]'}`} />

                {section.isExternal ? (
                  <a
                    href={section.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[clamp(1.8rem,3.5vw,3rem)] heading-bold text-white/35 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    {section.title}
                    <span className="material-symbols-outlined text-xl text-primary shrink-0">arrow_outward</span>
                  </a>
                ) : section.isDirect ? (
                  <Link
                    to={section.to}
                    onClick={toggleMenu}
                    className="text-[clamp(1.8rem,3.5vw,3rem)] heading-bold text-white/35 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    {section.title}
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      setActiveCategory(section.id);
                      setMobileView('submenu');
                    }}
                    className={`text-left text-[clamp(1.8rem,3.5vw,3rem)] heading-bold transition-all duration-300 hover:translate-x-2 flex items-center justify-between w-full pr-2 ${activeCategory === section.id ? 'text-white' : 'text-white/35 hover:text-white'}`}
                  >
                    {section.title}
                    <span className="text-primary text-2xl leading-none font-normal not-italic normal-case tracking-normal lg:hidden shrink-0">›</span>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Social networks — bottom of left panel */}
          <div className="flex items-center gap-6 pt-8 mt-auto border-t border-white/10">
            {[
              { url: 'https://instagram.com/rouennormandierugby', logo: '/assets/svg/logo_instagram.svg', label: 'Instagram' },
              { url: 'https://facebook.com/rouennormandierugby', logo: '/assets/svg/logo_facebook.svg', label: 'Facebook' },
              { url: 'https://youtube.com/rouennormandierugby', logo: '/assets/svg/logo_youtube.svg', label: 'YouTube' },
              { url: 'https://linkedin.com/company/rouennormandierugby', logo: '/assets/svg/logo_linkedIn.svg', label: 'LinkedIn' },
            ].map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="opacity-30 hover:opacity-100 transition-opacity duration-300">
                <img src={s.logo} alt={s.label} className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL — sub links */}
        <div className={`absolute inset-0 lg:inset-auto lg:left-[38%] lg:top-0 lg:bottom-0 lg:right-0 z-20 flex flex-col justify-start lg:justify-center px-10 lg:px-16 lg:py-24 transition-transform duration-300 ease-in-out ${mobileView === 'submenu' ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>

          {/* Back button — mobile only */}
          <button
            className="lg:hidden flex items-center gap-2 text-white/60 hover:text-white transition-colors mt-20 mb-10 group"
            onClick={() => setMobileView('menu')}
          >
            <span className="material-symbols-outlined text-2xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="text-(--text-xs) font-black uppercase tracking-widest">Retour</span>
          </button>

          {activeCategory && !activeSection?.isExternal && !activeSection?.isDirect ? (
            <div className="animate-slide-up w-full">
              <div key={activeCategory} className="flex flex-col gap-2 lg:gap-3">
                {activeSection?.links.map((link, idx) => (
                  link.isExternal ? (
                    <a
                      key={idx}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group animate-fade-in-right opacity-0"
                      style={{ animationDelay: `${idx * 0.07}s` }}
                    >
                      <span className="text-[clamp(1.8rem,3.5vw,3rem)] heading-bold text-white group-hover:text-primary transition-all duration-300 uppercase leading-tight flex items-center gap-3 hover:translate-x-4">
                        {link.label}
                        <span className="material-symbols-outlined text-xl text-primary shrink-0">arrow_outward</span>
                      </span>
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      to={link.to}
                      onClick={toggleMenu}
                      className="group animate-fade-in-right opacity-0"
                      style={{ animationDelay: `${idx * 0.07}s` }}
                    >
                      <span className="text-[clamp(1.8rem,3.5vw,3rem)] heading-bold text-white group-hover:text-primary transition-all duration-300 uppercase leading-tight block hover:translate-x-4">
                        {link.label}
                      </span>
                    </Link>
                  )
                ))}
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex flex-col gap-2 opacity-10 select-none">
              <span className="text-h1 heading-bold text-white leading-none">RNR</span>
              <span className="text-h3 heading-bold text-white leading-none opacity-50">NORMANDIE</span>
            </div>
          )}
        </div>

        {/* BOTTOM DECOR / LOGO */}
        <div className="absolute bottom-12 right-12 z-[120] hidden lg:block opacity-20">
          <Logo isScrolled={false} />
        </div>
      </div>
    </>
  );
}
