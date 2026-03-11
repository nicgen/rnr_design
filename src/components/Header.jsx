import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ title, to, href, align = "left", disabled = false, children }) => (
  <div className="relative group py-6">
    {disabled ? (
      <span className="cursor-not-allowed text-slate-400">{title}</span>
    ) : href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{title}</a>
    ) : (
      <Link to={to} className="hover:text-primary">{title}</Link>
    )}
    {children && (
      <div className={`absolute top-full ${align === "left" ? "left-0" : "right-0"} bg-white border-2 border-black p-4 hidden group-hover:flex flex-col gap-3 min-w-[240px] shadow-lg z-50`}>
        {children}
      </div>
    )}
  </div>
);

const NavSubItem = ({ children }) => (
  <span className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">{children}</span>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Allow small buffer at top (e.g., 50px) where we always show
      if (window.scrollY > lastScrollY && window.scrollY > 84) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Reset submenu when closing
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveSubMenu(null);
  };

  return (
    <>
    <nav className={`border-b-2 border-black sticky top-0 bg-white z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative h-[84px] lg:h-auto">
        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 z-10 text-black hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>

        {/* Desktop Left Nav */}
        <div className="hidden lg:flex gap-4 lg:gap-6 text-[11px] xl:text-xs font-bold uppercase tracking-tight whitespace-nowrap z-10 items-center">
          <div className="relative group py-6 flex items-center">
            <Link to="/" className="flex items-center hover:text-primary transition-colors hover:scale-110" title="Accueil">
              <span className="material-symbols-outlined text-xl">home</span>
            </Link>
          </div>
          <NavItem title="Actualités" to="/actualites-medias">
          </NavItem>
          
          <NavItem title="Le Club" to="/le-club">
            <Link to="/le-club" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Histoire & Palmarès</Link>
            <Link to="/le-club/organigramme" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Organigramme & Direction</Link>
            <Link to="/le-club/infrastructures" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Infrastructures / Le Stade</Link>
            <Link to="/le-club/engagements" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Engagements (RSE, Projet club)</Link>
          </NavItem>

          <NavItem title="L'Équipe Pro" to="/equipe-pro">
            <Link to="/equipe-pro" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Effectif (Joueurs & Staff)</Link>
            <Link to="/equipe-pro/calendrier" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Calendrier & Résultats</Link>
            <Link to="/equipe-pro/classement" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Classement</Link>
            <hr className="my-2 border-slate-200" />
            <Link to="/equipe-pro/feminines" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Les Équipes Féminines</Link>
          </NavItem>

          <NavItem title="Formation" to="/formation">
            <a href="https://www.rouennormandierugbyformation.fr/detections/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">
              Détection <span className="material-symbols-outlined text-[10px]">open_in_new</span>
            </a>
            <Link to="/formation" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Centre de formation - Académie</Link>
            <Link to="/formation/jeunes" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Pôle jeune espoir et pré-formation</Link>
            <Link to="/formation/ecole-rugby" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">École de rugby</Link>
          </NavItem>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 z-20">
          <Link to="/" className="w-16 h-16 wireframe-border flex items-center justify-center font-black italic hover:bg-slate-50 transition-colors bg-white">
            RNR
          </Link>
        </div>

        {/* Desktop Right Nav */}
        <div className="hidden lg:flex gap-4 lg:gap-6 text-[11px] xl:text-xs font-bold uppercase tracking-tight justify-end whitespace-nowrap z-10 items-center">
          <NavItem title="Partenaires" to="/partenaires" align="left">
            <Link to="/partenaires" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Le Business Club</Link>
            <Link to="/partenaires/actualites" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Actualités B2B</Link>
            <Link to="/partenaires/hospitalites" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Hospitalités & Loges</Link>
            <Link to="/partenaires/visibilite" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Visibilité & Sponsoring</Link>
            <Link to="/partenaires/contact" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Devenir Partenaire</Link>
          </NavItem>

          <NavItem title="Billetterie" href="http://billetterie.rouen-normandie-rugby.fr/" align="right" />

          <NavItem title="Boutique" href="http://boutique.rouennormandierugby.fr/" align="right" />

          <NavItem title="Contact" to="/contact" align="right" />
        </div>
      </div>

      </nav>

      {/* Mobile Off-Canvas Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl overflow-y-auto flex flex-col border-r-2 border-black">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b-2 border-black sticky top-0 bg-white z-10">
              <Link to="/" onClick={handleCloseMenu} className="w-12 h-12 wireframe-border flex items-center justify-center font-black italic bg-white">
                RNR
              </Link>
              <button onClick={handleCloseMenu} className="p-2 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>

            {/* Links Structure */}
            <div className="flex-1 p-6 flex flex-col uppercase font-bold text-sm tracking-tight text-slate-800">
              {activeSubMenu === null ? (
                  <div className="flex flex-col gap-6">
                    <Link to="/" onClick={handleCloseMenu} className="flex items-center gap-3 hover:text-primary transition-colors border-b-2 border-slate-100 pb-4">
                      <span className="material-symbols-outlined">home</span> ACCUEIL
                    </Link>
                    <button onClick={() => setActiveSubMenu('actualites')} className="flex items-center justify-between hover:text-primary border-b-2 border-slate-100 pb-4 text-left uppercase">
                      ACTUALITÉS <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                    <button onClick={() => setActiveSubMenu('club')} className="flex items-center justify-between hover:text-primary border-b-2 border-slate-100 pb-4 text-left uppercase">
                      LE CLUB <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                    <button onClick={() => setActiveSubMenu('pro')} className="flex items-center justify-between hover:text-primary border-b-2 border-slate-100 pb-4 text-left uppercase">
                      L'ÉQUIPE PRO <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                    <button onClick={() => setActiveSubMenu('formation')} className="flex items-center justify-between hover:text-primary border-b-2 border-slate-100 pb-4 text-left uppercase">
                      FORMATION <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                    <button onClick={() => setActiveSubMenu('partenaires')} className="flex items-center justify-between hover:text-primary border-b-2 border-slate-100 pb-4 text-left uppercase">
                      PARTENAIRES <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                    
                    <div className="flex flex-col gap-4 pt-2">
                      <a href="http://billetterie.rouen-normandie-rugby.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary border-b-2 border-transparent uppercase">
                        <span className="material-symbols-outlined">local_activity</span> BILLETTERIE
                      </a>
                      <a href="http://boutique.rouennormandierugby.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary border-b-2 border-transparent uppercase">
                        <span className="material-symbols-outlined">shopping_bag</span> BOUTIQUE
                      </a>
                      <Link to="/contact" onClick={handleCloseMenu} className="flex items-center gap-2 hover:text-primary border-b-2 border-transparent uppercase">
                        <span className="material-symbols-outlined">mail</span> CONTACT
                      </Link>
                    </div>
                 </div>
              ) : (
                 <div className="flex flex-col gap-4 animation-slide-in">
                    <button onClick={() => setActiveSubMenu(null)} className="flex items-center gap-2 text-slate-500 hover:text-black border-b-2 border-slate-100 pb-4 w-full text-left">
                      <span className="material-symbols-outlined text-sm">arrow_back</span> Retour
                    </button>
                    
                    {activeSubMenu === 'actualites' && (
                      <>
                        <Link to="/actualites-medias" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Dernières Actus</Link>
                      </>
                    )}
                    {activeSubMenu === 'club' && (
                      <>
                        <Link to="/le-club" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Histoire & Palmarès</Link>
                        <Link to="/le-club/organigramme" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Organigramme & Direction</Link>
                        <Link to="/le-club/infrastructures" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Infrastructures / Le Stade</Link>
                        <Link to="/le-club/engagements" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Engagements (RSE)</Link>
                      </>
                    )}
                    {activeSubMenu === 'pro' && (
                      <>
                        <Link to="/equipe-pro" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Effectif (Joueurs & Staff)</Link>
                        <Link to="/equipe-pro/calendrier" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Calendrier & Résultats</Link>
                        <Link to="/equipe-pro/classement" onClick={handleCloseMenu} className="hover:text-primary py-4">Classement</Link>
                        <div className="border-t-2 border-slate-100 w-full my-2"></div>
                        <Link to="/equipe-pro/feminines" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100 text-primary">Les Équipes Féminines</Link>
                      </>
                    )}
                    {activeSubMenu === 'formation' && (
                      <>
                        <a href="https://www.rouennormandierugbyformation.fr/detections/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary py-4 border-b-2 border-slate-100 uppercase">
                          Détection <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                        <Link to="/formation" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Centre de formation - Académie</Link>
                        <Link to="/formation/jeunes" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Pôle jeune espoir et pré-formation</Link>
                        <Link to="/formation/ecole-rugby" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">École de rugby</Link>
                      </>
                    )}
                    {activeSubMenu === 'partenaires' && (
                      <>
                        <Link to="/partenaires" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Le Business Club</Link>
                        <Link to="/partenaires/actualites" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Actualités B2B</Link>
                        <Link to="/partenaires/hospitalites" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Hospitalités & Loges</Link>
                        <Link to="/partenaires/visibilite" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Visibilité & Sponsoring</Link>
                        <Link to="/partenaires/contact" onClick={handleCloseMenu} className="hover:text-primary py-4 border-b-2 border-slate-100">Devenir Partenaire</Link>
                      </>
                    )}
                 </div>
              )}
            </div>
            
            <div className="p-6 bg-slate-50 border-t-2 border-black flex justify-center gap-4">
              <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors rounded-full">
                <i className="fi fi-brands-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors rounded-full">
                <i className="fi fi-brands-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors rounded-full">
                <i className="fi fi-brands-twitter-alt"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
