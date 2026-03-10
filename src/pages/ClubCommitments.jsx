import PlaceholderImage from "../components/PlaceholderImage";
import SectionNav from "../components/SectionNav";

const navLinks = [
  { label: "Histoire & Palmarès", path: "/le-club", exact: true },
  { label: "Organigramme", path: "/le-club/organigramme", exact: true },
  { label: "Le Stade", path: "/le-club/infrastructures", exact: true },
  { label: "Nos Engagements", path: "/le-club/engagements", exact: true },
];

export default function ClubCommitments() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Le Club</h1>
        <p className="text-lg">Découvrez l'histoire, les valeurs et les ambitions du Rouen Normandie Rugby.</p>
      </div>

      <SectionNav links={navLinks} />

      <div className="grid grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h3 className="text-4xl font-black uppercase leading-tight mb-6">Le Rugby Comme Moteur de Lien Social</h3>
          <p className="text-lg leading-relaxed text-slate-600 mb-6">
            Au-delà des performances sportives, le Rouen Normandie Rugby s'engage activement sur son territoire. Via son dispositif d'actions sociétales et environnementales (RSE), le club défend des valeurs de solidarité, de partage et de respect.
          </p>
          <ul className="flex flex-col gap-4 font-bold uppercase text-sm">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">eco</span>
              <span className="border-b-2 border-black pb-1">Responsabilité Environnementale</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">diversity_3</span>
              <span className="border-b-2 border-black pb-1">Inclusion & Cohésion Sociale</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">school</span>
              <span className="border-b-2 border-black pb-1">Éducation par le Sport</span>
            </li>
          </ul>
        </div>
        <div className="wireframe-border p-4 bg-slate-50 relative">
          <PlaceholderImage className="aspect-square w-full" />
        </div>
      </div>

      <h3 className="text-2xl font-black uppercase mb-8 border-t-2 border-black pt-8">Focus sur nos actions</h3>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="wireframe-border p-6 bg-white flex flex-col gap-4">
          <span className="material-symbols-outlined text-4xl text-slate-400">volunteer_activism</span>
          <h4 className="font-black uppercase text-xl">Visites à l'hôpital</h4>
          <p className="text-sm text-slate-600 leading-relaxed">Les joueurs du RNR se rendent régulièrement au CHU de Rouen pour apporter du réconfort et partager un moment privilégié avec les enfants hospitalisés.</p>
        </div>
        <div className="wireframe-border p-6 bg-white flex flex-col gap-4">
          <span className="material-symbols-outlined text-4xl text-slate-400">recycling</span>
          <h4 className="font-black uppercase text-xl">Stade Zéro Déchet</h4>
          <p className="text-sm text-slate-600 leading-relaxed">Mise en place de gobelets réutilisables, tri systématique et diminution drastique du plastique à usage unique les soirs de match à Robert-Diochon.</p>
        </div>
        <div className="wireframe-border p-6 bg-white flex flex-col gap-4">
          <span className="material-symbols-outlined text-4xl text-slate-400">sports_handicap</span>
          <h4 className="font-black uppercase text-xl">Rugby Santé & Adapté</h4>
          <p className="text-sm text-slate-600 leading-relaxed">Le club développe activement ses sections spécialisées pour permettre la pratique du rugby à tous, quels que soient l'âge ou les capacités physiques.</p>
        </div>
      </div>
    </div>
  );
}
