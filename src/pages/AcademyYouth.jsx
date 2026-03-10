import SectionNav from "../components/SectionNav";
import PlaceholderImage from "../components/PlaceholderImage";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Centre de Formation / Espoirs", path: "/formation", exact: true },
  { label: "Pôle Jeunes & École de Rugby", path: "/formation/jeunes", exact: true },
  { label: "Section Féminine", path: "/formation/feminines", exact: true },
  { label: "Sections Spécialisées", path: "/formation/specialisees", exact: true },
];

const CategoryCard = ({ title, ages }) => (
  <div className="wireframe-border p-6 bg-white hover:bg-slate-50 transition-colors cursor-pointer group flex flex-col h-full relative overflow-hidden">
    <h3 className="text-2xl font-black uppercase mb-2 relative z-10">{title}</h3>
    <p className="text-sm font-bold text-primary mb-6 relative z-10">{ages}</p>
    <div className="mt-auto space-y-4 relative z-10">
      <div className="flex gap-3 items-start text-sm">
        <span className="material-symbols-outlined text-slate-400 mt-0.5 text-lg">calendar_month</span>
        <p><span className="font-bold">Mercredi:</span> 14h00 - 15h30<br/><span className="font-bold">Samedi:</span> 10h00 - 11h30</p>
      </div>
      <div className="flex gap-3 items-center text-sm">
        <span className="material-symbols-outlined text-slate-400 text-lg">location_on</span>
        <p className="font-bold uppercase text-xs">Stade Jean-Mermoz</p>
      </div>
    </div>
  </div>
);

export default function AcademyYouth() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Pôle Jeunes & École de Rugby</h1>
        <p className="text-lg mb-8">Découvrir, apprendre, et grandir avec les valeurs du rugby au Rouen Normandie Rugby.</p>
      </div>

      <SectionNav links={navLinks} />

      {/* Intro École de Rugby */}
      <div className="mb-16 grid grid-cols-5 gap-8 bg-slate-50 p-8 wireframe-border">
          <div className="col-span-3">
              <h2 className="text-3xl font-black uppercase mb-6">L'École de Rugby (EDR)</h2>
              <p className="text-lg leading-relaxed mb-6">L'École de Rugby est le socle de notre association. Elle accueille les enfants dès 3 ans pour leur faire découvrir les joies du ballon ovale. L'apprentissage se fait par le jeu, dans un cadre sécurisant et convivial, avec pour mots d'ordre : Plaisir, Respect et Solidarité.</p>
              <div className="flex gap-4">
                  <div className="bg-white wireframe-border p-4 text-center w-32">
                      <p className="text-3xl font-black text-primary">3</p>
                      <p className="text-[10px] uppercase font-bold text-slate-500">Étoiles FFR</p>
                  </div>
                   <div className="bg-white wireframe-border p-4 text-center w-32">
                      <p className="text-3xl font-black text-primary">300+</p>
                      <p className="text-[10px] uppercase font-bold text-slate-500">Enfants Licenciés</p>
                  </div>
              </div>
          </div>
          <div className="col-span-2">
              <PlaceholderImage className="w-full h-full object-cover" />
          </div>
      </div>

      {/* Categories EDR */}
      <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 mb-8 inline-block">Catégories École de Rugby</h3>
      <div className="grid grid-cols-3 gap-6 mb-16">
        <CategoryCard title="Baby Rugby" ages="M6 (3 à 5 ans)" />
        <CategoryCard title="Premiers Pas" ages="M8 (6 à 7 ans)" />
        <CategoryCard title="Poussins" ages="M10 (8 à 9 ans)" />
        <CategoryCard title="Benjamins" ages="M12 (10 à 11 ans)" />
        <CategoryCard title="Minimes" ages="M14 (12 à 13 ans)" />
      </div>

      {/* Pôle Jeunes Compétition */}
      <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 mb-8 inline-block">Pôle Compétition Jeunes</h3>
      <div className="grid grid-cols-2 gap-6 mb-16">
        <CategoryCard title="Cadets (Alamercery / Gaudermen)" ages="M16 (14 à 15 ans)" />
        <CategoryCard title="Juniors (Crabos)" ages="M18 (16 à 17 ans)" />
      </div>

      {/* Inscriptions */}
      <div className="bg-black text-white p-12 text-center wireframe-border relative overflow-hidden group">
         <div className="absolute inset-0 placeholder-x opacity-10"></div>
         <h2 className="text-4xl font-black uppercase mb-6 relative z-10">Rejoindre le RNR !</h2>
         <p className="text-lg max-w-2xl mx-auto mb-8 relative z-10">Les inscriptions pour la saison 2025/2026 sont ouvertes ! Retrouvez toutes les informations concernant les tarifs, les documents médicaux obligatoires et les dossiers d'inscription auprès de notre secrétariat.</p>
         <Link to="/contact?sujet=association" className="bg-primary hover:bg-white hover:text-black transition-colors font-black uppercase px-8 py-4 text-sm relative z-10 flex items-center justify-center gap-2 mx-auto w-fit">
             Contacter le Secrétariat <span className="material-symbols-outlined">mail</span>
         </Link>
      </div>

    </div>
  );
}
