import PlaceholderImage from "../components/PlaceholderImage";
import SectionNav from "../components/SectionNav";

const navLinks = [
  { label: "Histoire & Palmarès", path: "/le-club", exact: true },
  { label: "Organigramme", path: "/le-club/organigramme", exact: true },
  { label: "Le Stade", path: "/le-club/infrastructures", exact: true },
  { label: "Nos Engagements", path: "/le-club/engagements", exact: true },
];

export default function ClubStadium() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Le Club</h1>
        <p className="text-lg">Découvrez l'histoire, les valeurs et les ambitions du Rouen Normandie Rugby.</p>
      </div>

      <SectionNav links={navLinks} />

      {/* Stade Robert-Diochon */}
      <h3 className="text-3xl font-black uppercase mb-8">Stade Robert-Diochon</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 items-center">
        <div className="wireframe-border p-2 bg-slate-50">
          <PlaceholderImage className="aspect-video w-full" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-lg leading-relaxed">
            Le Stade Robert-Diochon est l'antre historique des grands rendez-vous du Rouen Normandie Rugby. Partagé avec les autres clubs professionnels de la métropole, il offre une capacité et des infrastructures adaptées au plus haut niveau.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="wireframe-border border-l-4 border-l-primary p-4 bg-white">
              <span className="material-symbols-outlined text-slate-400 mb-2">groups</span>
              <p className="font-bold uppercase text-xs">Capacité</p>
              <p className="font-black text-xl">12 000 places</p>
            </div>
            <div className="wireframe-border p-4 bg-white">
              <span className="material-symbols-outlined text-slate-400 mb-2">location_on</span>
              <p className="font-bold uppercase text-xs">Adresse</p>
              <p className="font-black text-sm mt-1">48 avenue des Canadiens,<br/>76140 Le Petit-Quevilly</p>
            </div>
          </div>
          <button className="bg-black text-white font-black uppercase px-6 py-3 w-fit hover:bg-primary transition-colors mt-4">Venir au stade</button>
        </div>
      </div>

      {/* Stade Jean-Mermoz */}
      <h3 className="text-3xl font-black uppercase mb-8">Stade Jean-Mermoz</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <p className="text-lg leading-relaxed">
            Véritable cœur battant du club, le Stade Jean-Mermoz accueille les entraînements de l'équipe professionnelle, les matchs de l'association, des Espoirs à l'École de Rugby, et regroupe les locaux administratifs du Rouen Normandie Rugby.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="wireframe-border p-4 bg-white">
              <span className="material-symbols-outlined text-slate-400 mb-2">location_on</span>
              <p className="font-bold uppercase text-xs">Adresse</p>
              <p className="font-black text-sm mt-1">13 rue de la Motte,<br/>76100 Rouen</p>
            </div>
            <div className="wireframe-border p-4 bg-white">
              <span className="material-symbols-outlined text-slate-400 mb-2">directions_car</span>
              <p className="font-bold uppercase text-xs">Accès</p>
              <p className="font-black text-sm mt-1">Parking gratuit à proximité</p>
            </div>
          </div>
        </div>
        <div className="wireframe-border p-2 bg-slate-50 order-1 lg:order-2">
          <PlaceholderImage className="aspect-video w-full" />
        </div>
      </div>
    </div>
  );
}
