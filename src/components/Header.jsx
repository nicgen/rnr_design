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
  return (
    <nav className="border-b-2 border-black sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative">
        <div className="flex gap-4 lg:gap-6 text-[11px] xl:text-xs font-bold uppercase tracking-tight whitespace-nowrap z-10 items-center">
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

        <div className="flex gap-4 lg:gap-6 text-[11px] xl:text-xs font-bold uppercase tracking-tight justify-end whitespace-nowrap z-10 items-center">
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
  );
}
