import SectionNav from "../components/SectionNav";
import PlaceholderImage from "../components/PlaceholderImage";

const navLinks = [
  { label: "Le Business Club", path: "/partenaires", exact: true },
  { label: "Actualités B2B", path: "/partenaires/actualites", exact: true },
  { label: "Hospitalités & Loges", path: "/partenaires/hospitalites", exact: true },
  { label: "Visibilité & Sponsoring", path: "/partenaires/visibilite", exact: true },
  { label: "Devenir Partenaire", path: "/partenaires/contact", exact: true },
];

export default function PartnersNews() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4 text-black">Actualités B2B</h1>
        <h2 className="text-3xl font-black uppercase text-primary mb-6">La Vie du Réseau</h2>
        <p className="text-xl max-w-3xl leading-relaxed">
          Revivez les moments forts de nos événements, découvrez nos nouveaux partenaires 
          et suivez toute l'actualité business du Rouen Normandie Rugby.
        </p>
      </div>

      <SectionNav links={navLinks} />

      <div className="mt-12 mb-20 flex flex-col gap-12">
          
          {/* Bannière LinkedIn */}
          <div className="bg-[#0077b5] text-white p-8 wireframe-border flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <svg viewBox="0 0 24 24" className="w-16 h-16 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <div>
                    <h3 className="text-2xl font-black uppercase mb-1">Rejoignez-nous sur LinkedIn</h3>
                    <p className="text-sm font-bold opacity-90">Pour ne rien manquer de l'actualité en temps réel de notre Business Club.</p>
                </div>
             </div>
             <a href="#" className="bg-white text-[#0077b5] font-black uppercase px-6 py-3 wireframe-border hover:bg-black hover:text-white transition-colors text-sm">
                 Suivre la page
             </a>
          </div>

          {/* Grille de Posts LinkedIn Simulée */}
          <div className="flex flex-col items-center">
             <div className="w-full max-w-3xl flex flex-col gap-8">
                 
                 {/* Placeholder Post 1 */}
                 <div className="wireframe-border bg-white flex flex-col">
                    <div className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 bg-black rounded-full text-white font-black italic flex justify-center items-center text-xs">RNR</div>
                        <div>
                            <p className="font-bold text-sm">Rouen Normandie Rugby - Business Club</p>
                            <p className="text-xs text-slate-500">Il y a 2 jours</p>
                        </div>
                    </div>
                    <div className="px-4 pb-4">
                        <p className="text-sm mb-4">
                            Retour en images sur notre superbe <strong>P'tit Dej Partenaires</strong> de jeudi dernier ! 🥐☕<br/><br/>
                            Merci à l'entreprise <strong>[Nom du Partenaire]</strong> pour son accueil chaleureux et cette présentation inspirante de ses activités. Plus de 50 décideurs présents pour ce moment d'échange convivial.<br/><br/>
                            #RouenNormandieRugby #BusinessClub #Réseau #Normandie
                        </p>
                        <PlaceholderImage className="w-full h-64 bg-slate-100 object-cover" />
                    </div>
                    <div className="border-t-[1px] border-slate-200 p-2 flex justify-between text-slate-500 text-sm px-8">
                        <span className="flex items-center gap-1 hover:text-[#0077b5] cursor-pointer"><span className="material-symbols-outlined text-lg">thumb_up</span> J'aime</span>
                        <span className="flex items-center gap-1 hover:text-[#0077b5] cursor-pointer"><span className="material-symbols-outlined text-lg">chat_bubble_outline</span> Commenter</span>
                        <span className="flex items-center gap-1 hover:text-[#0077b5] cursor-pointer"><span className="material-symbols-outlined text-lg">share</span> Partager</span>
                    </div>
                 </div>

                 {/* Placeholder Post 2 */}
                 <div className="wireframe-border bg-white flex flex-col">
                    <div className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 bg-black rounded-full text-white font-black italic flex justify-center items-center text-xs">RNR</div>
                        <div>
                            <p className="font-bold text-sm">Rouen Normandie Rugby - Business Club</p>
                            <p className="text-xs text-slate-500">Il y a 1 semaine</p>
                        </div>
                    </div>
                    <div className="px-4 pb-4">
                        <p className="text-sm mb-4">
                            🤝 <strong>BIENVENUE DANS LA MÊLÉE !</strong><br/><br/>
                            Nous sommes ravis d'accueillir <strong>[Nom de l'Entreprise]</strong> en tant que nouveau partenaire officiel pour cette saison 2025-2026.<br/><br/>
                            Une belle aventure commence. Au plaisir de vous retrouver à l'Espace Épicuriens !<br/><br/>
                            #Sponsoring #Rouen #Rugby
                        </p>
                        <PlaceholderImage className="w-full h-64 bg-slate-100 object-cover" />
                    </div>
                    <div className="border-t-[1px] border-slate-200 p-2 flex justify-between text-slate-500 text-sm px-8">
                        <span className="flex items-center gap-1 hover:text-[#0077b5] cursor-pointer"><span className="material-symbols-outlined text-lg">thumb_up</span> J'aime</span>
                        <span className="flex items-center gap-1 hover:text-[#0077b5] cursor-pointer"><span className="material-symbols-outlined text-lg">chat_bubble_outline</span> Commenter</span>
                        <span className="flex items-center gap-1 hover:text-[#0077b5] cursor-pointer"><span className="material-symbols-outlined text-lg">share</span> Partager</span>
                    </div>
                 </div>

                 <div className="text-center mt-4">
                     <p className="text-sm text-slate-500 italic">
                         Note d'intégration : Dans la version finale (WordPress), ce bloc sera remplacé par un widget dynamique remontant automatiquement les posts LinkedIn du compte du club.
                     </p>
                 </div>

             </div>
          </div>
      </div>
    </div>
  );
}
