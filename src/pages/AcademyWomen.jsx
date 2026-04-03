import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import SectionNav from "../components/SectionNav";
import heroImg from "/resources/hero_bg_alt.jpg";
import valkyriesImg from "/resources/hero_bg_alt.jpg";

const navLinks = [
  { label: "Détection", path: "https://www.rouennormandierugbyformation.fr/detections/", external: true },
  { label: "Centre de formation - Académie", path: "/formation", exact: true },
  { label: "Pôle jeune espoir et pré-formation", path: "/formation/jeunes", exact: true },
  { label: "École de rugby", path: "/formation/ecole-rugby", exact: true },
];

export default function AcademyWomen() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full flex-shrink-0 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Rugby Féminin" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-20">
          <Breadcrumb />
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase mt-4 leading-none tracking-tighter font-barlow-condensed italic">
            LES ÉQUIPES FÉMININES
          </h1>
          <p className="text-primary text-xl md:text-2xl font-bold max-w-3xl mt-4 italic uppercase tracking-widest">
            Découvrez l'effectif des Valkyries du Rouen Normandie Rugby pour la saison 2025-2026.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30 pb-24">
        <SectionNav links={navLinks} />

        {/* INTRO VALKYRIES */}
        <section className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative overflow-hidden skew-x-[3deg] shadow-2xl h-[500px]">
                <img src={valkyriesImg} alt="Valkyries" className="w-full h-full object-cover skew-x-[-3deg] scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-slate-100 skew-x-[3deg]"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">VALKYRIES NORMANDES</h3>
              <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-8 leading-none">L'élite féminine</h2>
              <p className="text-lg text-slate-500 font-medium italic leading-relaxed mb-10">
                L'équipe féminine sénior du Rouen Normandie Rugby évolue actuellement dans le championnat de Fédérale. Composée de joueuses passionnées et engagées, l'équipe vise l'excellence sportive tout en préservant une forte cohésion de groupe. Venez encourager nos Valkyries normandes lors de leurs matchs à domicile !
              </p>
              
              <div className="bg-slate-50 p-8 border-l-4 border-primary mb-10">
                <h4 className="font-black uppercase italic tracking-tight mb-4">Entraînements</h4>
                <div className="space-y-4 text-sm font-medium italic">
                  <div className="flex gap-4 items-center">
                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                    <p>Mardi & Jeudi : 19h30 - 21h00</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <p>Stade Jean-Mermoz, Rouen</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.les-valkyries-rouen.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-black text-white font-black uppercase px-10 py-5 hover:bg-primary transition-all duration-300"
              >
                Site des Valkyries <span className="material-symbols-outlined text-xl">open_in_new</span>
              </a>
            </div>
          </div>
        </section>

        {/* FORMATION SECTION */}
        <section className="mb-24">
          <div className="mb-12">
            <h3 className="text-3xl font-black uppercase italic tracking-tighter">La Formation Féminine</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-12 relative overflow-hidden group hover:bg-black hover:text-white transition-all duration-500 skew-x-[-2deg]">
              <div className="skew-x-[2deg] relative z-10">
                <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Cadettes (M18)</h4>
                <p className="text-lg opacity-60 font-medium italic mb-8">
                  L'antichambre de l'équipe sénior. Un accompagnement technique et physique pour préparer les futures Valkyries.
                </p>
                <Link to="/contact?sujet=association" className="text-primary font-black uppercase tracking-widest text-xs border-b-2 border-primary pb-1 group-hover:text-white group-hover:border-white transition-colors">
                  Nous rejoindre
                </Link>
              </div>
            </div>
            <div className="bg-slate-50 p-12 relative overflow-hidden group hover:bg-black hover:text-white transition-all duration-500 skew-x-[2deg]">
              <div className="skew-x-[-2deg] relative z-10">
                <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Minimes (M15)</h4>
                <p className="text-lg opacity-60 font-medium italic mb-8">
                  Découverte du jeu à XV et développement des fondamentaux dans un environnement 100% féminin.
                </p>
                <Link to="/contact?sujet=association" className="text-primary font-black uppercase tracking-widest text-xs border-b-2 border-primary pb-1 group-hover:text-white group-hover:border-white transition-colors">
                  Dossier d'inscription
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL GRID */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-3xl font-black uppercase italic tracking-tighter">Dans l'arène</h3>
            <p className="text-sm font-black text-primary uppercase tracking-[0.2em] italic">#ValkyriesRNR</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-square bg-slate-100 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-4xl">photo_camera</span>
                  </div>
                  <div className="w-full h-full bg-slate-200 animate-pulse"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
