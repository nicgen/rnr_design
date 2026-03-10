import PlaceholderImage from "../components/PlaceholderImage";
import SectionNav from "../components/SectionNav";

const navLinks = [
  { label: "Histoire & Palmarès", path: "/le-club", exact: true },
  { label: "Organigramme", path: "/le-club/organigramme", exact: true },
  { label: "Le Stade", path: "/le-club/infrastructures", exact: true },
  { label: "Nos Engagements", path: "/le-club/engagements", exact: true },
];

export default function Club() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Le Club</h1>
        <p className="text-lg">Découvrez l'histoire, les valeurs et les ambitions du Rouen Normandie Rugby.</p>
      </div>

      <SectionNav links={navLinks} />

      {/* Palmarès / Trophées */}
      <div className="bg-black text-white p-12 mb-16 wireframe-border flex flex-col sm:flex-row justify-around gap-8 sm:gap-0">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-primary mb-4">emoji_events</span>
          <p className="text-4xl font-black mb-2">2</p>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Titres de Champion de France</p>
          <p className="text-xs mt-2 text-slate-500">(2017 - Fédérale 1 / 2019 - Fédérale 1)</p>
        </div>
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-primary mb-4">military_tech</span>
          <p className="text-4xl font-black mb-2">2019</p>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Montée Historique en Pro D2</p>
        </div>
      </div>

      {/* Histoire - Timeline Alternate */}
      <h3 className="text-3xl font-black uppercase mb-8">Notre Histoire</h3>
      
      <div className="flex flex-col gap-12">
        {/* 2009 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h4 className="text-6xl font-black text-slate-200 mb-2">2009</h4>
            <h5 className="text-2xl font-black uppercase mb-4">Création du Stade Rouennais</h5>
            <p className="text-slate-600 leading-relaxed text-lg">Le club naît sous sa forme moderne, marquant le début d'une nouvelle ère pour le rugby normand avec des ambitions renouvelées et une volonté de s'imposer sur la scène nationale amateur.</p>
          </div>
          <div className="w-full md:w-1/2 p-4 wireframe-border bg-slate-50">
            <PlaceholderImage className="aspect-video w-full" />
          </div>
        </div>

        {/* 2016-2017 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-left md:text-right">
            <h4 className="text-6xl font-black text-slate-200 mb-2">2017</h4>
            <h5 className="text-2xl font-black uppercase mb-4">Premier Titre de Champion de France</h5>
            <p className="text-slate-600 leading-relaxed text-lg">L'équipe s'impose comme le champion du plus haut niveau amateur, posant les jalons du professionnalisme et fédérant tout un territoire autour de ses succès sportifs.</p>
          </div>
          <div className="w-full md:w-1/2 p-4 wireframe-border bg-slate-50">
            <PlaceholderImage className="aspect-video w-full" />
          </div>
        </div>

        {/* 2018-2019 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h4 className="text-6xl font-black text-slate-200 mb-2">2019</h4>
            <h5 className="text-2xl font-black uppercase mb-4">Le Sacre et la Pro D2</h5>
            <p className="text-slate-600 leading-relaxed text-lg">Une saison exceptionnelle couronnée par un deuxième titre de Fédérale 1 et l'accession historique en Pro D2. C'est le début d'une aventure professionnelle remarquable pour les Lions.</p>
          </div>
          <div className="w-full md:w-1/2 p-4 wireframe-border bg-slate-50">
            <PlaceholderImage className="aspect-video w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
