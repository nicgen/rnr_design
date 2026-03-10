import SectionNav from "../components/SectionNav";
import PlaceholderImage from "../components/PlaceholderImage";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Le Business Club", path: "/partenaires", exact: true },
  { label: "Actualités B2B", path: "/partenaires/actualites", exact: true },
  { label: "Hospitalités & Loges", path: "/partenaires/hospitalites", exact: true },
  { label: "Visibilité & Sponsoring", path: "/partenaires/visibilite", exact: true },
  { label: "Devenir Partenaire", path: "/partenaires/contact", exact: true },
];

export default function PartnersHospitality() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4 text-black">Offres Hospitalités</h1>
        <h2 className="text-3xl font-black uppercase text-primary mb-6">Plus qu'un match, une expérience</h2>
        <p className="text-xl max-w-3xl leading-relaxed">
          C'est ici, au coeur de l'action, que les relations se nouent et que les opportunités naissent.
          Découvrez nos espaces réceptifs pour partager une expérience premium avec vos invités les plus importants.
        </p>
      </div>

      <SectionNav links={navLinks} />

      {/* Epicuriens & Salon 1920 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 mt-8">
        
        {/* Espace Epicuriens */}
        <div className="wireframe-border p-8 flex flex-col h-full relative group hover:border-black transition-colors">
          <div className="absolute top-0 right-0 bg-primary text-white font-black uppercase px-4 py-1 text-sm translate-x-4 -translate-y-4">Premium</div>
          <h3 className="text-3xl font-black uppercase mb-2">Espace Épicuriens</h3>
          <p className="text-primary font-bold text-lg mb-6">Au Coeur du Cercle d'Influence</p>
          <div className="w-full h-48 bg-slate-200 mb-6 flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl text-slate-400">restaurant</span>
          </div>
          <p className="text-sm text-slate-600 mb-6 flex-grow">
            Le point de rencontre des décideurs locaux, actionnaires et élus. Dans une ambiance feutrée et prestigieuse,
            développez votre réseau au plus haut niveau.
          </p>
          <ul className="text-sm space-y-2 mb-8 flex-grow">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Prestation traiteur complète (avant, mi-temps, après)</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Boissons à discrétion & Bar à champagne</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Animations culinaires & Présence de joueurs</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Places centrales en tribune Honneur</li>
          </ul>
          <div className="border-t-2 border-slate-100 pt-6 mt-auto">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Abonnement Annuel</p>
            <p className="text-3xl font-black">3 900 € <span className="text-lg text-slate-400 font-bold">HT</span></p>
          </div>
        </div>

        {/* Salon 1920 */}
        <div className="wireframe-border p-8 flex flex-col h-full relative group hover:border-black transition-colors">
          <h3 className="text-3xl font-black uppercase mb-2">Salon 1920</h3>
          <p className="text-primary font-bold text-lg mb-6">Élégance et Convivialité</p>
          <div className="w-full h-48 bg-slate-200 mb-6 flex items-center justify-center">
             <span className="material-symbols-outlined text-5xl text-slate-400">wine_bar</span>
          </div>
          <p className="text-sm text-slate-600 mb-6 flex-grow">
            Un espace raffiné alliant prestations premium et ambiance chaleureuse by Crédit Agricole.
          </p>
          <ul className="text-sm space-y-2 mb-8 flex-grow">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Prestation traiteur complète</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Boissons à discrétion & Dégustation de spiritueux</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> <strong>Le Vestiaire</strong> : causerie d'avant-match avec les joueurs</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Places centrales en tribune Honneur</li>
          </ul>
          <div className="border-t-2 border-slate-100 pt-6 mt-auto">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Abonnement Annuel</p>
            <p className="text-3xl font-black">3 300 € <span className="text-lg text-slate-400 font-bold">HT</span></p>
          </div>
        </div>

      </div>

      {/* Bodega & Loges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        
        {/* La Bodega */}
        <div className="wireframe-border p-8 flex flex-col h-full relative group hover:border-black transition-colors">
          <h3 className="text-3xl font-black uppercase mb-2">La Bodega</h3>
          <p className="text-primary font-bold text-lg mb-6">Le Poumon du Réseau Partenaires</p>
          <div className="w-full h-48 bg-slate-200 mb-6 flex items-center justify-center">
             <span className="material-symbols-outlined text-5xl text-slate-400">sports_bar</span>
          </div>
          <p className="text-sm text-slate-600 mb-6 flex-grow">
            Le lieu idéal pour des moments d'échanges privilégiés dans une ambiance chaleureuse et dynamique. Format buffet pour multiplier les rencontres.
          </p>
          <ul className="text-sm space-y-2 mb-8 flex-grow">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Prestation en format buffet (avant, mi-temps, après)</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Boissons à discrétion</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Intervention du staff et des joueurs</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Places centrales en tribune Honneur</li>
          </ul>
          <div className="border-t-2 border-slate-100 pt-6 mt-auto">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Abonnement Annuel</p>
            <p className="text-3xl font-black">2 700 € <span className="text-lg text-slate-400 font-bold">HT</span></p>
          </div>
        </div>

        {/* Loges Privatives */}
        <div className="wireframe-border p-8 bg-black text-white flex flex-col h-full relative group">
          <div className="absolute top-0 right-0 bg-white text-black font-black uppercase px-4 py-1 text-sm translate-x-4 -translate-y-4">Exclusivité</div>
          <h3 className="text-3xl font-black uppercase mb-2">La Loge Privative</h3>
          <p className="text-slate-400 font-bold text-lg mb-6">Confidentialité & Haut de Gamme</p>
          <p className="text-sm text-slate-300 mb-6">
            Offrez à vos invités un moment d'exception dans un espace entièrement privatisé avec une vue imprenable sur le terrain. 
            Idéale pour vos relations d'affaires les plus stratégiques.
          </p>
          <ul className="text-sm space-y-2 mb-8 flex-grow">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Prestation traiteur complète avec hôtesse dédiée</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Champagne et Spiritueux</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Passage privé du staff et des joueurs</li>
          </ul>
          <div className="border-t-2 border-slate-800 pt-6 mt-auto">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Tarifs par match</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               <div>
                  <span className="block text-sm font-bold text-slate-300">10 pers.</span>
                  <span className="text-lg font-black text-white">2 850 € <span className="text-xs">HT</span></span>
               </div>
               <div>
                  <span className="block text-sm font-bold text-slate-300">15 pers.</span>
                  <span className="text-lg font-black text-white">3 990 € <span className="text-xs">HT</span></span>
               </div>
               <div>
                  <span className="block text-sm font-bold text-slate-300">22 pers.</span>
                  <span className="text-lg font-black text-white">5 790 € <span className="text-xs">HT</span></span>
               </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 italic">Options : Inside RNR (visite vestiaires), Goodies, Dégustations sur demande.</p>
          </div>
        </div>
      </div>

      {/* L'Offre Privilège */}
      <div className="mb-24 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center wireframe-border p-8 lg:p-12 bg-slate-50">
         <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h3 className="text-4xl font-black uppercase mb-4 leading-tight">L'Offre<br className="hidden lg:block"/>Privilège</h3>
            <p className="text-lg mb-6">Votre Porte d'Entrée dans le Réseau.</p>
            <p className="text-sm text-slate-600 mb-8">
              Découvrez l'ambiance du stade et intégrez le réseau avec une formule souple. Invitez vos clients
              et profitez d'un accès dédié (2 places par match, mange-debout dédié, accès buvette prioritaire).
            </p>
            <Link to="/partenaires#contact-privilege" className="bg-primary text-white font-black uppercase px-6 py-3 wireframe-border hover:bg-black transition-colors inline-block text-sm mx-auto lg:mx-0">
                Être recontacté
            </Link>
         </div>
         <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-white p-6 wireframe-border">
                <p className="text-2xl font-black text-primary mb-2">500 € <span className="text-sm text-slate-400">HT</span></p>
                <p className="text-sm font-bold">Places sèches</p>
             </div>
             <div className="bg-white p-6 wireframe-border">
                <p className="text-2xl font-black text-primary mb-2">1 000 € <span className="text-sm text-slate-400">HT</span></p>
                <p className="text-sm font-bold">+ Invitations aux 3 événements majeurs</p>
             </div>
             <div className="bg-white p-6 wireframe-border">
                <p className="text-2xl font-black text-primary mb-2">1 500 € <span className="text-sm text-slate-400">HT</span></p>
                <p className="text-sm font-bold">+ Présence sur l'application B2B</p>
             </div>
             <div className="bg-white p-6 wireframe-border">
                <p className="text-2xl font-black text-primary mb-2">2 000 € <span className="text-sm text-slate-400">HT</span></p>
                <p className="text-sm font-bold max-w-[200px] leading-snug">+ 10 P'tits Dej & Présence annuaire digital</p>
             </div>
         </div>
      </div>

    </div>
  );
}
