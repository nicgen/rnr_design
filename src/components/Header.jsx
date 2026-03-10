import { useState } from 'react';
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

  return (
    <nav className="border-b-2 border-black sticky top-0 bg-white z-50">
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
            <Link to="/actualites-medias" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Dernières Actus</Link>
            <Link to="/actualites-medias/photos" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Galerie Photos</Link>
            <Link to="/actualites-medias/videos" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Vidéos / Web TV</Link>
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
          </NavItem>

          <NavItem title="Formation" to="/formation">
            <Link to="/formation" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Centre de Formation / Espoirs</Link>
            <Link to="/formation/jeunes" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Pôle Jeunes & École de Rugby</Link>
            <Link to="/formation/feminines" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Section Féminine</Link>
            <Link to="/formation/specialisees" className="block hover:text-primary cursor-pointer text-xs font-bold uppercase whitespace-nowrap text-slate-800 hover:translate-x-1 transition-transform">Sections Spécialisées</Link>
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
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 wireframe-border flex items-center justify-center font-black italic bg-white">
                RNR
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>

            {/* Links Structure */}
            <div className="flex-1 p-6 flex flex-col gap-6 uppercase font-bold text-sm tracking-tight text-slate-800">
              <div className="border-b-2 border-slate-100 pb-4">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">home</span> Accueil
                </Link>
              </div>

              <div className="flex flex-col gap-3 border-b-2 border-slate-100 pb-4">
                <Link to="/actualites-medias" onClick={() => setIsMobileMenuOpen(false)} className="text-black hover:text-primary">Actualités</Link>
                <div className="pl-4 flex flex-col gap-2 text-xs font-semibold text-slate-600 normal-case">
                  <Link to="/actualites-medias" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Dernières Actus</Link>
                  <Link to="/actualites-medias/photos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Galerie Photos</Link>
                  <Link to="/actualites-medias/videos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Vidéos / Web TV</Link>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-b-2 border-slate-100 pb-4">
                <Link to="/le-club" onClick={() => setIsMobileMenuOpen(false)} className="text-black hover:text-primary">Le Club</Link>
                <div className="pl-4 flex flex-col gap-2 text-xs font-semibold text-slate-600 normal-case">
                  <Link to="/le-club" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Histoire & Palmarès</Link>
                  <Link to="/le-club/organigramme" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Organigramme & Direction</Link>
                  <Link to="/le-club/infrastructures" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Infrastructures / Le Stade</Link>
                  <Link to="/le-club/engagements" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Engagements (RSE)</Link>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-b-2 border-slate-100 pb-4">
                <Link to="/equipe-pro" onClick={() => setIsMobileMenuOpen(false)} className="text-black hover:text-primary">L'Équipe Pro</Link>
                <div className="pl-4 flex flex-col gap-2 text-xs font-semibold text-slate-600 normal-case">
                  <Link to="/equipe-pro" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Effectif (Joueurs & Staff)</Link>
                  <Link to="/equipe-pro/calendrier" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Calendrier & Résultats</Link>
                  <Link to="/equipe-pro/classement" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Classement</Link>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-b-2 border-slate-100 pb-4">
                <Link to="/formation" onClick={() => setIsMobileMenuOpen(false)} className="text-black hover:text-primary">Formation</Link>
                <div className="pl-4 flex flex-col gap-2 text-xs font-semibold text-slate-600 normal-case">
                  <Link to="/formation" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Centre de Formation / Espoirs</Link>
                  <Link to="/formation/jeunes" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Pôle Jeunes & École de Rugby</Link>
                  <Link to="/formation/feminines" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Section Féminine</Link>
                  <Link to="/formation/specialisees" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Sections Spécialisées</Link>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-b-2 border-slate-100 pb-4">
                <Link to="/partenaires" onClick={() => setIsMobileMenuOpen(false)} className="text-black hover:text-primary">Partenaires</Link>
                <div className="pl-4 flex flex-col gap-2 text-xs font-semibold text-slate-600 normal-case">
                  <Link to="/partenaires" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Le Business Club</Link>
                  <Link to="/partenaires/actualites" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Actualités B2B</Link>
                  <Link to="/partenaires/hospitalites" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Hospitalités & Loges</Link>
                  <Link to="/partenaires/visibilite" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Visibilité & Sponsoring</Link>
                  <Link to="/partenaires/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Devenir Partenaire</Link>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <a href="http://billetterie.rouen-normandie-rugby.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                  <span className="material-symbols-outlined">local_activity</span> Billetterie
                </a>
                <a href="http://boutique.rouennormandierugby.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                  <span className="material-symbols-outlined">shopping_bag</span> Boutique
                </a>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 hover:text-primary">
                  <span className="material-symbols-outlined">mail</span> Contact
                </Link>
              </div>
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
    </nav>
  );
}
