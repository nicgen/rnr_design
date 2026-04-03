import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import SectionNav from "../components/SectionNav";
import heroImg from "/resources/hero_bg.jpg";

const navLinks = [
  { label: "Le Business Club", path: "/partenaires", exact: true },
  { label: "Actualités B2B", path: "/partenaires/actualites", exact: true },
  { label: "Hospitalités & Loges", path: "/partenaires/hospitalites", exact: true },
  { label: "Visibilité & Sponsoring", path: "/partenaires/visibilite", exact: true },
  { label: "Devenir Partenaire", path: "/partenaires/contact", exact: true },
];

export default function PartnersHospitality() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full flex-shrink-0 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Hospitalités & Loges" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-20">
          <Breadcrumb />
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase mt-4 leading-none tracking-tighter font-barlow-condensed italic text-center">
            HOSPITALITÉS<br />& LOGES
          </h1>
          <p className="text-primary text-xl md:text-2xl font-bold max-w-3xl mt-4 italic uppercase tracking-widest">
            Plus qu'un match, une expérience premium
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30 pb-24">
        <SectionNav links={navLinks} />

        {/* INTRODUCTION */}
        <section className="py-24 text-center max-w-4xl mx-auto">
          <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Exclusivité & Network</h3>
          <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-8">Au cœur de l'émotion business</h2>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed">
            C'est ici, au plus proche du terrain et dans un confort absolu, que les relations se nouent. Découvrez nos espaces réceptifs conçus pour valoriser votre image de marque auprès de vos invités.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Espace Epicuriens */}
          <div className="bg-slate-50 border-t-8 border-primary p-12 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-8 right-8 bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest italic -skew-x-12">Le plus Prisé</div>
            <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-2">Espace Épicuriens</h3>
            <p className="text-primary font-bold italic mb-8 tracking-widest uppercase text-sm">Le cercle des décideurs</p>
            <div className="mb-10 text-slate-500 font-medium italic leading-relaxed">
              Le point de rencontre des actionnaires et élus. Dans une ambiance feutrée, développez votre réseau au plus haut niveau de la région.
            </div>
            <ul className="space-y-4 mb-12">
              {["Prestation traiteur gastronomique", "Bar à champagne & Spiritueux", "Intervention staff & joueurs", "Places centrales Tribune Honneur"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-black uppercase italic tracking-wider opacity-80 decoration-primary decoration-2 underline-offset-4">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-slate-200">
               <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 italic">Investissement Annuel</span>
               <div className="text-4xl font-black italic tracking-tighter">3 900 € <span className="text-sm text-slate-400">HT / pers.</span></div>
            </div>
          </div>

          {/* Salon 1920 */}
          <div className="bg-black text-white p-12 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
            <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-2">Salon 1920</h3>
            <p className="text-primary font-bold italic mb-8 tracking-widest uppercase text-sm">Élégance & Tradition</p>
            <div className="mb-10 text-white/50 font-medium italic leading-relaxed">
              Un espace raffiné by Crédit Agricole Normandie-Seine, alliant confort moderne et respect des traditions rugbystiques.
            </div>
            <ul className="space-y-4 mb-12">
              {["Cocktail dînatoire raffiné", "Dégustation de spiritueux", "Causerie d'avant-match exclusive", "Sièges VIP numérotés"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-black uppercase italic tracking-wider opacity-80 decoration-primary decoration-2 underline-offset-4">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-white/10">
               <span className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-1 italic">Investissement Annuel</span>
               <div className="text-4xl font-black italic tracking-tighter text-primary">3 300 € <span className="text-sm text-white/30 italic">HT / pers.</span></div>
            </div>
          </div>
        </div>

        {/* LOGE PRIVATIVE - FULL WIDTH HIGHLIGHT */}
        <section className="bg-black text-white relative overflow-hidden mb-24 skew-x-[-1deg]">
          <div className="absolute inset-0 bg-[url('/resources/hero_bg.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          
          <div className="relative z-10 skew-x-[1deg] p-12 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-sm font-black uppercase tracking-[0.4em] text-primary italic">Ultra-Premium</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
                LA LOGE<br />PRIVATIVE
              </h2>
              <p className="text-xl text-white/60 font-medium italic leading-relaxed mb-12 max-w-xl">
                Confidentialité absolue et service sur-mesure. Le summum de l'expérience RNR pour vos relations stratégiques les plus importantes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div>
                   <span className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 italic">10 Personnes</span>
                   <span className="text-2xl font-black italic tracking-tighter">2 850 € <span className="text-xs">HT</span></span>
                </div>
                <div>
                   <span className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 italic">15 Personnes</span>
                   <span className="text-2xl font-black italic tracking-tighter">3 990 € <span className="text-xs">HT</span></span>
                </div>
                <div>
                   <span className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 italic">22 Personnes</span>
                   <span className="text-2xl font-black italic tracking-tighter">5 790 € <span className="text-xs">HT</span></span>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 backdrop-blur-md p-10 -skew-y-2">
               <h4 className="text-xl font-black uppercase italic mb-6 text-primary tracking-widest">Inclus dans l'offre :</h4>
               <ul className="space-y-6">
                 {[
                   "Hôtesse dédiée durant toute la rencontre",
                   "Passage privé du staff et des joueurs",
                   "Vue panoramique imprenable sur le terrain",
                   "Catering sur-mesure (froid ou chaud)",
                   "Accès parking VIP réservé"
                 ].map((feat, i) => (
                   <li key={i} className="flex items-center gap-4 group">
                      <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">star</span>
                      <span className="text-sm font-black uppercase italic tracking-widest opacity-80">{feat}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </section>

        {/* CTA - CONTACT */}
        <section className="text-center py-12">
           <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-8">Besoin d'une offre personnalisée ?</h3>
           <Link to="/partenaires/contact" className="inline-block bg-black text-white hover:bg-primary transition-all duration-300 font-black uppercase px-12 py-6 italic tracking-widest skew-x-[-12deg]">
              <span className="inline-block skew-x-[12deg]">Contacter le service commercial</span>
           </Link>
        </section>

      </div>
    </div>
  );
}
