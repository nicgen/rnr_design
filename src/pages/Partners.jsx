import SectionNav from "../components/SectionNav";
import PlaceholderImage from "../components/PlaceholderImage";

const navLinks = [
  { label: "Le Business Club", path: "/partenaires", exact: true },
  { label: "Actualités B2B", path: "/partenaires/actualites", exact: true },
  { label: "Hospitalités & Loges", path: "/partenaires/hospitalites", exact: true },
  { label: "Visibilité & Sponsoring", path: "/partenaires/visibilite", exact: true },
  { label: "Devenir Partenaire", path: "/partenaires/contact", exact: true },
];

export default function Partners() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      
      {/* Hero Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4 text-black">Vivez le Rugby Autrement</h1>
        <h2 className="text-3xl font-black uppercase text-primary mb-6">Accélérez Votre Business</h2>
        <p className="text-xl max-w-3xl leading-relaxed">
          Rejoindre le Rouen Normandie Rugby, c'est intégrer le premier réseau d'affaires de la région,
          partager les valeurs d'engagement et d'esprit d'équipe qui nous animent, et créer des moments
          inoubliables pour vos clients et collaborateurs.
        </p>
      </div>

      <SectionNav links={navLinks} />

      {/* Chiffres Clés */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 mt-8">
        <div className="bg-black text-white p-8 wireframe-border flex flex-col items-center justify-center text-center">
          <span className="text-6xl font-black text-primary mb-2">900</span>
          <span className="font-bold uppercase tracking-wider text-sm">Membres VIP</span>
        </div>
        <div className="bg-black text-white p-8 wireframe-border flex flex-col items-center justify-center text-center">
          <span className="text-6xl font-black text-primary mb-2">35</span>
          <span className="font-bold uppercase tracking-wider text-sm">Événements par an</span>
        </div>
        <div className="bg-black text-white p-8 wireframe-border flex flex-col items-center justify-center text-center">
          <span className="text-6xl font-black text-primary mb-2">1er</span>
          <span className="font-bold uppercase tracking-wider text-sm">Réseau Business Normand</span>
        </div>
      </div>

      {/* Les Événements du Club */}
      <div className="mb-20">
        <h3 className="text-3xl font-black uppercase mb-8 border-b-4 border-black inline-block pb-2">Les Rendez-vous du Réseau</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Matchs */}
          <div className="wireframe-border p-6 bg-slate-50 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left hover:-translate-y-1 transition-transform group">
             <div className="w-24 h-24 bg-primary text-white flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-black transition-colors">
                 <span className="material-symbols-outlined text-4xl">stadium</span>
             </div>
             <div>
                <h4 className="text-xl font-black uppercase mb-2">Matchs RNR (Diochon)</h4>
                <p className="text-sm font-bold text-primary mb-2">15 matchs à domicile (Vendredi soir)</p>
                <p className="text-sm text-slate-600">Le rendez-vous incontournable pour vibrer et encourager votre équipe tout en profitant d'un réseau prestigieux. Ambiance festive et partage.</p>
             </div>
          </div>

          {/* Loges & P'tits Dej */}
          <div className="wireframe-border p-6 bg-slate-50 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left hover:-translate-y-1 transition-transform group">
             <div className="w-24 h-24 bg-primary text-white flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-black transition-colors">
                 <span className="material-symbols-outlined text-4xl">local_cafe</span>
             </div>
             <div>
                <h4 className="text-xl font-black uppercase mb-2">P'tits Déjeuners</h4>
                <p className="text-sm font-bold text-primary mb-2">10 événements (Jeudi matin)</p>
                <p className="text-sm text-slate-600">Le rendez-vous mensuel au sein des entreprises partenaires. Un moment privilégié pour animer et développer vos contacts business.</p>
             </div>
          </div>

          {/* Afterwork */}
          <div className="wireframe-border p-6 bg-slate-50 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left hover:-translate-y-1 transition-transform group">
             <div className="w-24 h-24 bg-primary text-white flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-black transition-colors">
                 <span className="material-symbols-outlined text-4xl">celebration</span>
             </div>
             <div>
                <h4 className="text-xl font-black uppercase mb-2">Afterworks</h4>
                <p className="text-sm font-bold text-primary mb-2">5 événements par saison</p>
                <p className="text-sm text-slate-600">Dans un cadre détendu en fin de journée. L'occasion parfaite pour consolider vos relations professionnelles dans une ambiance chaleureuse.</p>
             </div>
          </div>

          {/* Speed Meeting / Tournois */}
          <div className="wireframe-border p-6 bg-slate-50 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left hover:-translate-y-1 transition-transform group">
             <div className="w-24 h-24 bg-primary text-white flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-black transition-colors">
                 <span className="material-symbols-outlined text-4xl">handshake</span>
             </div>
             <div>
                <h4 className="text-xl font-black uppercase mb-2">Speed Meetings & Sport</h4>
                <p className="text-sm font-bold text-primary mb-2">Contacts Rapides & Tournois Padel</p>
                <p className="text-sm text-slate-600">Optimisez vos prises de contacts rapides ou affrontez-vous lors de nos tournois sportifs en présence des joueurs et du staff !</p>
             </div>
          </div>
        </div>
      </div>

      {/* L'Application */}
      <div className="mb-24 bg-black text-white p-12 wireframe-border flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 rounded-l-full blur-3xl -z-0"></div>
        <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
          <h3 className="text-4xl font-black uppercase mb-6 leading-tight">L'Application<br/><span className="text-primary">Business RNR</span></h3>
          <p className="text-lg text-slate-300 mb-8 max-w-lg">
            Une plateforme conçue pour renforcer les liens, faciliter les échanges et dynamiser votre réseau, 100% réservée aux membres.
          </p>
          <ul className="space-y-4">
             <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Accessible 24h/24 et sécurisée</li>
             <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Annuaire digital du réseau 360°</li>
             <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Accès aux offres privilégiées exclusives</li>
          </ul>
        </div>
        <div className="w-full sm:w-2/3 lg:w-1/3 relative z-10">
           <PlaceholderImage className="w-full aspect-[9/16] rounded-[2rem] border-8 border-slate-800 bg-slate-900 shadow-2xl" />
        </div>
      </div>

    </div>
  );
}
