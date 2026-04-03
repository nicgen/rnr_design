import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import SectionNav from "../components/SectionNav";
import heroImg from "/resources/hero_bg_alt.jpg";

const navLinks = [
  { label: "Centre de formation - Académie", path: "/formation", exact: true },
  { label: "Pôle jeune espoirs", path: "/formation/jeunes", exact: true },
  { label: "École de rugby", path: "/formation/ecole-rugby", exact: true },
  { label: "Rugby Féminin", path: "/formation/feminines", exact: true },
  { label: "Rugby Santé & Adapté", path: "/formation/specifique", exact: true },
];

const CategoryCard = ({ title, ages, categories }) => (
  <div className="bg-slate-50 border border-slate-200 p-10 relative overflow-hidden group hover:bg-black hover:text-white transition-all duration-500 skew-x-[-2deg]">
    <div className="skew-x-[2deg] relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-2">{title}</h3>
          <p className="text-primary font-bold uppercase text-[10px] tracking-[0.3em]">{ages}</p>
        </div>
        <span className="material-symbols-outlined text-4xl text-primary/20 group-hover:text-primary transition-colors">workspace_premium</span>
      </div>
      
      <div className="space-y-4 mb-8 border-t border-slate-200 group-hover:border-white/10 pt-6">
        <p className="text-xs font-black uppercase text-slate-400 group-hover:text-white/40 tracking-widest italic">Compétitions</p>
        <p className="text-lg font-black uppercase italic tracking-tight">{categories}</p>
      </div>

      <div className="space-y-4 text-sm font-medium italic opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-4 items-center">
          <span className="material-symbols-outlined text-primary">calendar_month</span>
          <p>Lundi, Mercredi & Vendredi</p>
        </div>
        <div className="flex gap-4 items-center">
          <span className="material-symbols-outlined text-primary">location_on</span>
          <p>Stade Jean-Mermoz, Rouen</p>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
  </div>
);

export default function AcademyYouth() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full flex-shrink-0 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Pôle Jeunes" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-20">
          <Breadcrumb />
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase mt-4 leading-tight tracking-tighter font-barlow-condensed italic">
            PÔLE JEUNE ESPOIR ET PRÉ-FORMATION
          </h1>
          <p className="text-primary text-xl md:text-2xl font-bold max-w-3xl mt-4 italic uppercase tracking-widest">
            Découvrir, apprendre, et grandir avec les valeurs du rugby au Rouen Normandie Rugby.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30 pb-24">
        <SectionNav links={navLinks} />

        {/* INTRO */}
        <section className="py-24 text-center max-w-4xl mx-auto">
          <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Performance</h3>
          <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-8 text-slate-900">PÔLE COMPÉTITION JEUNES</h2>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed">
            Le Pôle Jeunes Espoirs du Rouen Normandie Rugby accompagne les talents régionaux et nationaux vers le plus haut niveau. Encadrés par des techniciens diplômés, nos jeunes Lions bénéficient d'un suivi sportif et scolaire rigoureux.
          </p>
        </section>

        {/* CATEGORIES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <CategoryCard 
            title="Cadets" 
            ages="M16 (14 à 15 ans)" 
            categories="Élite Alamercery / Gaudermen"
          />
          <CategoryCard 
            title="Juniors" 
            ages="M18 (16 à 17 ans)" 
            categories="Élite Crabos"
          />
        </div>

        {/* CONTACT / CTA */}
        <section className="relative p-12 lg:p-20 overflow-hidden bg-black text-white skew-x-[-2deg] shadow-2xl">
          <div className="skew-x-[2deg] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
                Rejoindre<br /><span className="text-primary">la meute !</span>
              </h4>
              <p className="text-lg text-white/60 font-medium italic leading-relaxed">
                Les inscriptions pour la saison 2025/2026 sont ouvertes. Dossiers d'inscription, tarifs et modalités disponibles auprès de notre secrétariat.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-start lg:items-end">
              <Link 
                to="/contact?sujet=association" 
                className="bg-primary text-white font-black uppercase px-12 py-5 hover:bg-white hover:text-primary transition-all duration-300 shadow-xl"
              >
                Contacter le Secrétariat
              </Link>
              <div className="flex items-center gap-4 text-white/40 italic font-bold">
                <span className="material-symbols-outlined">info</span>
                <p className="text-sm">Réponse moyenne sous 48h</p>
              </div>
            </div>
          </div>
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20"></div>
        </section>
      </div>
    </div>
  );
}
