import SectionNav from "../components/SectionNav";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Le Business Club", path: "/partenaires", exact: true },
  { label: "Actualités B2B", path: "/partenaires/actualites", exact: true },
  { label: "Hospitalités & Loges", path: "/partenaires/hospitalites", exact: true },
  { label: "Visibilité & Sponsoring", path: "/partenaires/visibilite", exact: true },
  { label: "Devenir Partenaire", path: "/partenaires/contact", exact: true },
];

export default function PartnersVisibility() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4 text-black">Visibilité & Sponsoring</h1>
        <h2 className="text-3xl font-black uppercase text-primary mb-6">Votre Vitrine au Coeur de l'Action</h2>
        <p className="text-xl max-w-3xl leading-relaxed">
          Associez l'image de votre entreprise à celle du Rouen Normandie Rugby. 
          Bénéficiez d'une exposition premium auprès d'une audience qualifiée de décideurs, de supporters et d'entrepreneurs.
        </p>
      </div>

      <SectionNav links={navLinks} />

      {/* Tenues */}
      <div className="mb-20 mt-8">
        <h3 className="text-3xl font-black uppercase mb-8 border-b-4 border-black inline-block pb-2">Tenues Officielles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="wireframe-border p-6 text-center hover:bg-black hover:text-white transition-colors group cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">sports_rugby</span>
              <h4 className="font-black uppercase mb-2">Arrière / Manche</h4>
              <p className="text-sm font-bold text-slate-500 group-hover:text-slate-300 mb-4">Short ou Maillot</p>
              <p className="text-2xl font-black text-primary">15 000 € <span className="text-xs text-slate-400">HT</span></p>
           </div>
           
           <div className="wireframe-border p-6 text-center hover:bg-black hover:text-white transition-colors group cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">apparel</span>
              <h4 className="font-black uppercase mb-2">Échauffement</h4>
              <p className="text-sm font-bold text-slate-500 group-hover:text-slate-300 mb-4">Tee-Shirt Joueurs</p>
              <p className="text-2xl font-black text-primary">10 000 € <span className="text-xs text-slate-400">HT</span></p>
           </div>

           <div className="wireframe-border p-6 text-center hover:bg-black hover:text-white transition-colors group cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">work_history</span>
              <h4 className="font-black uppercase mb-2">Staff & Médical</h4>
              <p className="text-sm font-bold text-slate-500 group-hover:text-slate-300 mb-4">Tenues du personnel</p>
              <p className="text-2xl font-black text-primary">5 000 € <span className="text-xs text-slate-400">HT</span></p>
           </div>

           <div className="wireframe-border p-6 text-center hover:bg-black hover:text-white transition-colors group cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">groups</span>
              <h4 className="font-black uppercase mb-2">Remplaçants</h4>
              <p className="text-sm font-bold text-slate-500 group-hover:text-slate-300 mb-4">Chasubles Banc</p>
              <p className="text-2xl font-black text-primary">5 000 € <span className="text-xs text-slate-400">HT</span></p>
           </div>
        </div>
      </div>

      {/* Visibilité Terrain & Namings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
        
        {/* Terrain */}
        <div>
           <h3 className="text-3xl font-black uppercase mb-8 border-b-4 border-black inline-block pb-2">Visibilité Terrain</h3>
           <div className="flex flex-col gap-4">
              <div className="wireframe-border bg-slate-50 p-6 flex justify-between items-center">
                 <div>
                    <h4 className="font-black uppercase text-lg">Piquets de Touche</h4>
                    <p className="text-sm text-slate-500 font-bold">Autour du terrain</p>
                 </div>
                 <span className="text-2xl font-black text-primary">5 000 € <span className="text-sm text-slate-400">HT</span></span>
              </div>
              
              <div className="wireframe-border bg-slate-50 p-6 flex justify-between items-center">
                 <div>
                    <h4 className="font-black uppercase text-lg">Panneaux LED</h4>
                    <p className="text-sm text-slate-500 font-bold">Affichage dynamique</p>
                 </div>
                 <span className="text-2xl font-black text-primary">3 000 € <span className="text-sm text-slate-400">HT</span></span>
              </div>

              <div className="wireframe-border bg-slate-50 p-6 flex justify-between items-center">
                 <div>
                    <h4 className="font-black uppercase text-lg">Panneaux Fixes</h4>
                    <p className="text-sm text-slate-500 font-bold">Affichage statique permanent</p>
                 </div>
                 <span className="text-2xl font-black text-primary">2 200 € <span className="text-sm text-slate-400">HT</span></span>
              </div>
           </div>
        </div>

        {/* Namings & Animations */}
        <div>
           <h3 className="text-3xl font-black uppercase mb-8 border-b-4 border-black inline-block pb-2">Namings & Événementiel</h3>
           <div className="flex flex-col gap-4">
              <div className="wireframe-border bg-slate-50 p-6 flex justify-between items-center">
                 <div>
                    <h4 className="font-black uppercase text-lg">Naming Espaces</h4>
                    <p className="text-sm text-slate-500 font-bold">Espace Epicuriens, Banquet...</p>
                 </div>
                 <span className="text-2xl font-black text-primary">Dès 2 000 € <span className="text-sm text-slate-400">HT</span></span>
              </div>
              
              <div className="wireframe-border bg-slate-50 p-6 flex justify-between items-center">
                 <div>
                    <h4 className="font-black uppercase text-lg">La Mascotte</h4>
                    <p className="text-sm text-slate-500 font-bold">Peluche ou Mascotte Officielle</p>
                 </div>
                 <span className="text-2xl font-black text-primary">Dès 3 000 € <span className="text-sm text-slate-400">HT</span></span>
              </div>

              <div className="wireframe-border bg-slate-50 p-6 flex justify-between items-center">
                 <div>
                    <h4 className="font-black uppercase text-lg">Ramasseurs de Balle</h4>
                    <p className="text-sm text-slate-500 font-bold">Tenues des ramasseurs</p>
                 </div>
                 <span className="text-2xl font-black text-primary">2 000 € <span className="text-sm text-slate-400">HT</span></span>
              </div>
           </div>
        </div>
      </div>

      {/* Sponsoring Digital */}
      <div className="bg-black text-white p-8 lg:p-12 wireframe-border flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden mb-16">
        <div className="w-full lg:w-2/3 relative z-10 text-center lg:text-left">
          <h3 className="text-4xl font-black uppercase mb-6 leading-tight">Le Package <span className="text-primary">Digital</span></h3>
          <p className="text-lg text-slate-300 mb-8 max-w-xl">
            Sponsorisez nos contenus réseaux sociaux pour toucher une communauté engagée bien au-delà des tribunes du stade !
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-left">
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-3xl">bar_chart</span> Parrain des Stats Match</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-3xl">scoreboard</span> Sponsor Score Final</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-3xl">list_alt</span> Sponsor Composition d'Équipe</div>
             <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-3xl">cake</span> Anniversaire des Joueurs</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
           <Link to="/partenaires#contact-privilege" className="bg-primary text-white font-black uppercase px-8 py-5 wireframe-border hover:bg-white text-black hover:text-black transition-colors inline-block text-lg shadow-2xl">
              Faire une demande
           </Link>
        </div>
      </div>

    </div>
  );
}
