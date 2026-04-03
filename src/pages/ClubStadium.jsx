import Breadcrumb from "../components/Breadcrumb";
import SectionNav from "../components/SectionNav";
import diochonImg from "/resources/stade_diochon.jpeg";
import heroImg from "/resources/hero_bg.jpg";

const navLinks = [
  { label: "Histoire & Palmarès", path: "/le-club", exact: true },
  { label: "Organigramme", path: "/le-club/organigramme", exact: true },
  { label: "Le Stade", path: "/le-club/infrastructures", exact: true },
  { label: "Nos Engagements", path: "/le-club/engagements", exact: true },
];

export default function ClubStadium() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full flex-shrink-0 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={diochonImg} 
            alt="Stade Robert Diochon" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-20">
          <Breadcrumb />
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase mt-4 leading-none tracking-tighter font-barlow-condensed italic">
            NOS INFRASTRUCTURES
          </h1>
          <p className="text-primary text-xl md:text-2xl font-bold max-w-3xl mt-4 italic uppercase tracking-widest">
            Le cœur battant du RNR
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30">
        <SectionNav links={navLinks} />

        {/* STADE ROBERT DIOCHON */}
        <section className="py-24">
          <div className="mb-12">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">L'Arène des Lions</h3>
            <h4 className="text-5xl font-black uppercase tracking-tighter italic">Stade Robert-Diochon</h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group overflow-hidden shadow-2xl skew-x-[-2deg]">
              <img 
                src={diochonImg} 
                alt="Stade Robert Diochon" 
                className="w-full h-full object-cover skew-x-[2deg] scale-110 group-hover:scale-100 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-2xl font-black italic uppercase leading-tight tracking-tight text-slate-800">
                L'ANTRE HISTORIQUE DES GRANDS RENDEZ-VOUS DU ROUEN NORMANDIE RUGBY.
              </p>
              <p className="text-lg text-slate-500 font-medium italic leading-relaxed">
                Partagé avec les autres clubs professionnels de la métropole, le Stade Robert-Diochon offre une capacité et des infrastructures adaptées au plus haut niveau du rugby hexagonal.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 border-l-4 border-primary group hover:bg-black hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl text-primary mb-2">groups</span>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Capacité</p>
                  <p className="text-2xl font-black italic uppercase tracking-tighter">12 000 places</p>
                </div>
                <div className="bg-slate-50 p-6 border-l-4 border-slate-200 group hover:bg-black hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl text-primary mb-2">location_on</span>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Localisation</p>
                  <p className="text-lg font-black italic uppercase tracking-tighter leading-tight">Canadiens, Petit-Quevilly</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-black text-white font-black uppercase px-8 py-4 hover:bg-primary transition-all duration-300 -skew-x-12">
                  <span className="inline-block skew-x-12">Venir au stade</span>
                </button>
                <button className="border-2 border-slate-200 text-slate-800 font-black uppercase px-8 py-4 hover:bg-slate-100 transition-all duration-300 -skew-x-12">
                  <span className="inline-block skew-x-12">Réserver</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* STADE JEAN-MERMOZ */}
        <section className="py-24 border-t border-slate-100">
          <div className="mb-12 text-right">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Le Centre d'Entraînement</h3>
            <h4 className="text-5xl font-black uppercase tracking-tighter italic">Stade Jean-Mermoz</h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <p className="text-2xl font-black italic uppercase leading-tight tracking-tight text-slate-800">
                LE CŒUR BATTANT DE LA FORMATION ET DES LIONS.
              </p>
              <p className="text-lg text-slate-500 font-medium italic leading-relaxed">
                Le Stade Jean-Mermoz accueille les entraînements de l’équipe professionnelle, les matchs de l’association et regroupe l'ensemble des services administratifs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 border-r-4 border-slate-200 group hover:bg-black hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl text-primary mb-2">fitness_center</span>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Usage</p>
                  <p className="text-xl font-black italic uppercase tracking-tighter">Entraînement & Admin</p>
                </div>
                <div className="bg-slate-50 p-6 border-r-4 border-primary group hover:bg-black hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl text-primary mb-2">directions_car</span>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Accès</p>
                  <p className="text-lg font-black italic uppercase tracking-tighter leading-tight">Rue de la Motte, Rouen</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden shadow-2xl skew-x-[2deg] order-1 lg:order-2 h-[450px]">
              <img 
                src={heroImg} 
                alt="Stade Jean Mermoz" 
                className="w-full h-full object-cover skew-x-[-2deg] scale-110 group-hover:scale-100 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
