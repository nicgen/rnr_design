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

export default function PartnersNews() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full flex-shrink-0 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Actualités B2B" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-20">
          <Breadcrumb />
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase mt-4 leading-none tracking-tighter font-barlow-condensed italic text-center">
            ACTUALITÉS<br />B2B
          </h1>
          <p className="text-primary text-xl md:text-2xl font-bold max-w-3xl mt-4 italic uppercase tracking-widest">
            La vie du premier réseau business de Normandie
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30 pb-24">
        <SectionNav links={navLinks} />

        {/* LINKEDIN CONNECT */}
        <section className="mt-20 mb-24">
          <div className="bg-[#0077b5] text-white p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group skew-x-[-1deg]">
            <div className="relative z-10 skew-x-[1deg] flex items-center gap-8">
               <div className="w-20 h-20 bg-white/10 flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
               </div>
               <div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">Suivez-nous sur LinkedIn</h3>
                  <p className="text-white/80 font-medium italic">Ne manquez aucun événement de la Meute des Partenaires.</p>
               </div>
            </div>
            <a href="#" className="relative z-10 skew-x-[1deg] bg-white text-[#0077b5] hover:bg-black hover:text-white transition-all duration-300 font-black uppercase px-8 py-4 italic tracking-widest text-sm">
                Accéder à la page
            </a>
            {/* BG pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </section>

        {/* FEED B2B */}
        <section className="max-w-4xl mx-auto space-y-12">
          {[
            { 
              date: "Il y a 2 jours", 
              title: "P'TITS DEJ PARTENAIRES : IMMERSION CHEZ [NOM]", 
              content: "Un immense merci à nos amis de [Nom de l'entreprise] pour leur accueil hier matin. Plus de 60 décideurs réunis autour d'un café pour échanger sur les enjeux de [Secteur]. Un moment de partage et de business comme on les aime !",
              tags: ["#Networking", "#Rouen", "#BusinessRNR"]
            },
            { 
              date: "Il y a 1 semaine", 
              title: "BIENVENUE DANS LA MÊLÉE !", 
              content: "Nous sommes fiers d'annoncer l'arrivée de [Entreprise] en tant que Partenaire Officiel du Rouen Normandie Rugby. Une collaboration basée sur des valeurs fortes d'engagement et de solidarité.",
              tags: ["#Sponsoring", "#NouveauPartenaire", "#RNR"]
            }
          ].map((post, i) => (
            <article key={i} className="bg-slate-50 border border-slate-200 overflow-hidden group">
               <div className="p-10">
                  <div className="flex justify-between items-center mb-6">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-black text-primary font-black italic flex items-center justify-center text-[10px] -skew-x-12">RNR</div>
                        <div>
                           <div className="text-sm font-black uppercase tracking-tight italic">Rouen Normandie Rugby - Business Club</div>
                           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</div>
                        </div>
                     </div>
                     <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">more_horiz</span>
                  </div>
                  <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{post.title}</h4>
                  <p className="text-slate-600 font-medium italic leading-relaxed mb-6">
                    {post.content}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-black uppercase tracking-widest text-[#0077b5]">{tag}</span>
                    ))}
                  </div>
                  <div className="aspect-video bg-slate-200 relative overflow-hidden">
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700 scale-110 group-hover:scale-100"></div>
                  </div>
               </div>
               <div className="border-t border-slate-200 px-10 py-6 flex justify-between items-center bg-white/50">
                  <div className="flex gap-8">
                    <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest">
                       <span className="material-symbols-outlined text-lg">thumb_up</span> J'aime
                    </button>
                    <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest">
                       <span className="material-symbols-outlined text-lg">chat_bubble</span> Commenter
                    </button>
                  </div>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest">
                     <span className="material-symbols-outlined text-lg">share</span> Partager
                  </button>
               </div>
            </article>
          ))}
        </section>

        <section className="text-center mt-20 p-12 bg-slate-50 border border-slate-100 italic text-slate-400 font-medium">
          Note d'intégration : Ce flux sera automatiquement synchronisé avec la page LinkedIn RNR Business.
        </section>
      </div>
    </div>
  );
}
