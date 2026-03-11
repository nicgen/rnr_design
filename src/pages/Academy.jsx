import PlaceholderImage from "../components/PlaceholderImage";
import SectionNav from "../components/SectionNav";

const navLinks = [
  { label: "Détection", path: "https://www.rouennormandierugbyformation.fr/detections/", external: true },
  { label: "Centre de formation - Académie", path: "/formation", exact: true },
  { label: "Pôle jeune espoir et pré-formation", path: "/formation/jeunes", exact: true },
  { label: "École de rugby", path: "/formation/ecole-rugby", exact: true },
];

export default function Academy() {
  const espoirs = [
    { name: "Nom du Joueur", position: "Pilier gauche (1)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Talonneur (2)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Pilier droit (3)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Deuxième ligne (4)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Deuxième ligne (5)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Troisième ligne aile (6)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Troisième ligne aile (7)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Troisième ligne centre (8)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Demi de mêlée (9)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Demi d'ouverture (10)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Trois-quarts centre (12)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Trois-quarts centre (13)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Trois-quarts aile (11)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Trois-quarts aile (14)", nationality: "FRA" },
    { name: "Nom du Joueur", position: "Arrière (15)", nationality: "FRA" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Centre de Formation & Espoirs</h1>
        <p className="text-lg mb-8">La pépinière des Lions : Former les talents de demain pour repousser nos limites.</p>
      </div>

      <SectionNav links={navLinks} />

      <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="text-3xl font-black uppercase mb-6 leading-tight">L'Excellence Normande</h2>
          <p className="text-lg leading-relaxed mb-6">Le Centre de Formation du Rouen Normandie Rugby est au cœur de notre projet sportif. Agréé par la FFR, il vise la double excellence : sportive et scolaire/professionnelle. Notre mission est d'accompagner chaque joueur dans son développement pour atteindre le haut niveau tout en préparant son avenir personnel.</p>
          <ul className="flex flex-col gap-4 text-sm font-bold uppercase">
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">school</span> Suivi scolaire et universitaire personnalisé</li>
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">fitness_center</span> Préparation physique de haut niveau</li>
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">medical_services</span> Suivi médical quotidien</li>
          </ul>
        </div>
        <div className="wireframe-border p-4 bg-slate-50 relative">
           <PlaceholderImage className="aspect-video w-full" />
           <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 font-black uppercase text-xl">
            Label FFR / LNR
           </div>
        </div>
      </div>

      {/* NEW: Modalités & Détections */}
      <div className="mb-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-stretch">
        
        {/* Détections & CTA */}
        <div className="bg-primary text-white p-10 wireframe-border flex flex-col justify-center">
          <h3 className="text-3xl font-black uppercase mb-4">Détections</h3>
          <p className="font-bold text-lg mb-2">Préformation & Espoirs Élites</p>
          <p className="text-sm mb-8 opacity-90">
            Rejoignez la meute ! Découvrez les dates des prochaines sessions de recrutement et postulez en ligne sur la plateforme de l'Association.
          </p>
          <a href="https://www.rouennormandierugbyformation.fr/detections/" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-black uppercase px-6 py-4 wireframe-border text-center hover:bg-black hover:text-white transition-colors">
            Voir les dates & S'inscrire
          </a>
        </div>

        {/* Modalités d'inscription */}
        <div className="wireframe-border p-10 bg-white">
          <h3 className="text-2xl font-black uppercase mb-8 border-b-2 border-slate-100 pb-4">Modalités d'inscription</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-black text-xl mb-4 group-hover:bg-primary transition-colors">1</div>
              <h4 className="font-black uppercase mb-2">Évaluation</h4>
              <p className="text-sm text-slate-600">Observation sur le terrain lors de matchs, rassemblements académiques ou régionales de la Ligue.</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-black text-xl mb-4 group-hover:bg-primary transition-colors">2</div>
              <h4 className="font-black uppercase mb-2">Étude</h4>
              <p className="text-sm text-slate-600">Analyse du dossier sportif et scolaire des profils ciblés avec les éducateurs techniques locaux.</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-black text-xl mb-4 group-hover:bg-primary transition-colors">3</div>
              <h4 className="font-black uppercase mb-2">Entretien</h4>
              <p className="text-sm text-slate-600">Rencontre avec le joueur et sa famille, définition d'un projet de formation sur-mesure (scolaire & sportif).</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
