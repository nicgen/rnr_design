import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-16 bg-[#e6e6e6] mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <h4 className="font-black uppercase mb-6 text-sm">Actualités & Médias</h4>
            <ul className="flex flex-col gap-2 text-xs font-bold uppercase">
              <li><Link to="/actualites-medias" className="hover:text-primary">Dernières Actus</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase mb-6 text-sm">Le Club</h4>
            <ul className="flex flex-col gap-2 text-xs font-bold uppercase">
              <li><Link to="/le-club" className="hover:text-primary">Histoire & Palmarès</Link></li>
              <li><Link to="/le-club/organigramme" className="hover:text-primary">Organigramme & Direction</Link></li>
              <li><Link to="/le-club/infrastructures" className="hover:text-primary">Stades & Infrastructures</Link></li>
              <li><Link to="/le-club/engagements" className="hover:text-primary">Engagements RSE</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase mb-6 text-sm">L'Équipe Pro</h4>
            <ul className="flex flex-col gap-2 text-xs font-bold uppercase">
              <li><Link to="/equipe-pro" className="hover:text-primary">Effectif (Joueurs, Staff)</Link></li>
              <li><Link to="/equipe-pro/calendrier" className="hover:text-primary">Calendrier & Résultats</Link></li>
              <li><Link to="/equipe-pro/classement" className="hover:text-primary">Classement</Link></li>
              <li><Link to="/equipe-pro/feminines" className="hover:text-primary">Les Équipes Féminines</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase mb-6 text-sm">Formation</h4>
            <ul className="flex flex-col gap-2 text-xs font-bold uppercase">
              <li><a href="https://www.rouennormandierugbyformation.fr/detections/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Détection</a></li>
              <li><Link to="/formation" className="hover:text-primary">Centre de formation - Académie</Link></li>
              <li><Link to="/formation/jeunes" className="hover:text-primary">Pôle jeune espoir et pré-formation</Link></li>
              <li><Link to="/formation/ecole-rugby" className="hover:text-primary">École de rugby</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase mb-6 text-sm">Partenaires</h4>
            <ul className="flex flex-col gap-2 text-xs font-bold uppercase">
              <li><Link to="/partenaires" className="hover:text-primary">Le Business Club</Link></li>
              <li><Link to="/partenaires/actualites" className="hover:text-primary">Actualités B2B</Link></li>
              <li><Link to="/partenaires/hospitalites" className="hover:text-primary">Hospitalités & Loges</Link></li>
              <li><Link to="/partenaires/visibilite" className="hover:text-primary">Visibilité & Sponsoring</Link></li>
              <li><Link to="/partenaires/contact" className="hover:text-primary">Contact / Devenir Partenaire</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase mb-6 text-sm">Liens Pratiques</h4>
            <ul className="flex flex-col gap-2 text-xs font-bold uppercase">
              <li><a href="http://billetterie.rouen-normandie-rugby.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Billetterie</a></li>
              <li><a href="http://boutique.rouennormandierugby.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Boutique</a></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><span className="cursor-pointer hover:text-primary">Mentions légales</span></li>
              <li><span className="cursor-pointer hover:text-primary">Politique RGPD</span></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center pt-8 text-[10px] font-black uppercase text-slate-500">
          <p>© 2026 ROUEN NORMANDIE RUGBY. TOUS DROITS RÉSERVÉS.</p>
        </div>
      </div>
    </footer>
  );
}
