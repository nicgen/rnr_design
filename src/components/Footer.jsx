import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-100 mt-auto border-t border-slate-200">
      <div className="container-premium">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <h4 className="text-(--text-xs) font-black uppercase mb-4 opacity-70">Actualités</h4>
            <ul className="flex flex-col gap-1.5 text-[11px] font-bold uppercase text-slate-500 pl-4">
              <li><Link to="/actualites-medias" className="hover:text-primary transition-colors">Dernières Actus</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-(--text-xs) font-black uppercase mb-4 opacity-70">Le Club</h4>
            <ul className="flex flex-col gap-1.5 text-[11px] font-bold uppercase text-slate-500 pl-4">
              <li><Link to="/le-club" className="hover:text-primary transition-colors">Histoire & Palmarès</Link></li>
              <li><Link to="/le-club/organigramme" className="hover:text-primary transition-colors">Organigramme</Link></li>
              <li><Link to="/le-club/infrastructures" className="hover:text-primary transition-colors">Infrastructures</Link></li>
              <li><Link to="/le-club/engagements" className="hover:text-primary transition-colors">Engagements RSE</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-(--text-xs) font-black uppercase mb-4 opacity-70">L'Équipe Pro</h4>
            <ul className="flex flex-col gap-1.5 text-[11px] font-bold uppercase text-slate-500 pl-4">
              <li><Link to="/equipe-pro" className="hover:text-primary transition-colors">Effectif</Link></li>
              <li><Link to="/equipe-pro/calendrier" className="hover:text-primary transition-colors">Calendrier</Link></li>
              <li><Link to="/equipe-pro/classement" className="hover:text-primary transition-colors">Classement</Link></li>
              <li><Link to="/equipe-pro/feminines" className="hover:text-primary transition-colors">Féminines</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-(--text-xs) font-black uppercase mb-4 opacity-70">Formation</h4>
            <ul className="flex flex-col gap-1.5 text-[11px] font-bold uppercase text-slate-500 pl-4">
              <li><a href="https://www.rouennormandierugbyformation.fr/detections/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Détection</a></li>
              <li><Link to="/formation" className="hover:text-primary transition-colors">Académie</Link></li>
              <li><Link to="/formation/jeunes" className="hover:text-primary transition-colors">Pôle Jeunes</Link></li>
              <li><Link to="/formation/ecole-rugby" className="hover:text-primary transition-colors">École de Rugby</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-(--text-xs) font-black uppercase mb-4 opacity-70">Partenaires</h4>
            <ul className="flex flex-col gap-1.5 text-[11px] font-bold uppercase text-slate-500 pl-4">
              <li><Link to="/partenaires" className="hover:text-primary transition-colors">Business Club</Link></li>
              <li><Link to="/partenaires/hospitalites" className="hover:text-primary transition-colors">Hospitalités</Link></li>
              <li><Link to="/partenaires/visibilite" className="hover:text-primary transition-colors">Visibilité</Link></li>
              <li><Link to="/partenaires/contact" className="hover:text-primary transition-colors">Devenir Partenaire</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-(--text-xs) font-black uppercase mb-4 opacity-70">Pratique</h4>
            <ul className="flex flex-col gap-1.5 text-[11px] font-bold uppercase text-slate-500 pl-4">
              <li><a href="http://billetterie.rouen-normandie-rugby.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Billetterie</a></li>
              <li><a href="http://boutique.rouennormandierugby.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Boutique</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><span className="cursor-pointer hover:text-primary transition-colors">Mentions Légales</span></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center pt-8 border-t border-slate-200 text-[11px] font-black uppercase text-slate-400">
          <p>© 2026 ROUEN NORMANDIE RUGBY. TOUS DROITS RÉSERVÉS.</p>
        </div>
      </div>
    </footer>
  );
}
