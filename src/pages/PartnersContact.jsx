import SectionNav from "../components/SectionNav";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Le Business Club", path: "/partenaires", exact: true },
  { label: "Actualités B2B", path: "/partenaires/actualites", exact: true },
  { label: "Hospitalités & Loges", path: "/partenaires/hospitalites", exact: true },
  { label: "Visibilité & Sponsoring", path: "/partenaires/visibilite", exact: true },
  { label: "Devenir Partenaire", path: "/partenaires/contact", exact: true },
];

export default function PartnersContact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4 text-black">Devenir Partenaire</h1>
        <h2 className="text-3xl font-black uppercase text-primary mb-6">Rejoignez le 1er réseau de Normandie</h2>
        <p className="text-xl max-w-3xl leading-relaxed">
          Vous souhaitez associer l'image de votre entreprise au Rouen Normandie Rugby, inviter vos clients ou développer votre réseau ? 
          Laissez-nous vos coordonnées, notre équipe commerciale vous recontactera dans les plus brefs délais pour une étude personnalisée.
        </p>
      </div>

      <SectionNav links={navLinks} />

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 mt-16 mb-20">
         {/* VIP Contact Form */}
         <div className="wireframe-border p-12 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-3xl font-black uppercase mb-8">Formulaire Privilège B2B</h3>

            <form className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase" htmlFor="vip-nom">Nom Complet *</label>
                  <input type="text" id="vip-nom" className="wireframe-border p-4 focus:ring-primary outline-none" placeholder="Jean Dupont" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase" htmlFor="vip-societe">Société *</label>
                  <input type="text" id="vip-societe" className="wireframe-border p-4 focus:ring-primary outline-none border-primary bg-primary/5" placeholder="Nom de votre entreprise" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase" htmlFor="vip-email">Adresse Email *</label>
                  <input type="email" id="vip-email" className="wireframe-border p-4 focus:ring-primary outline-none" placeholder="jean@societe.com" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase" htmlFor="vip-tel">Téléphone Direct *</label>
                  <input type="tel" id="vip-tel" className="wireframe-border p-4 focus:ring-primary outline-none" placeholder="06 12 34 56 78" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase" htmlFor="vip-interet">Vous êtes intéressé(e) par : *</label>
                <select id="vip-interet" className="wireframe-border p-4 focus:ring-primary outline-none bg-white cursor-pointer" required defaultValue="">
                  <option value="" disabled>Sélectionnez une offre</option>
                  <option value="club">Adhésion au Business Club (Offre Privilège)</option>
                  <option value="epicuriens">Hospitalité : Espace Épicuriens</option>
                  <option value="salon1920">Hospitalité : Salon 1920</option>
                  <option value="bodega">Hospitalité : La Bodega</option>
                  <option value="loge">Privatisation : Loge Privative</option>
                  <option value="visibilite">Sponsoring & Visibilité globale</option>
                  <option value="autre">Étude personnalisée</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase" htmlFor="vip-message">Précisions ou Message (Optionnel)</label>
                <textarea id="vip-message" rows="5" className="wireframe-border p-4 focus:ring-primary outline-none resize-none" placeholder="Comment pouvons-nous vous accompagner au mieux dans votre projet ?"></textarea>
              </div>

              <div className="mt-4">
                <button type="button" className="bg-primary text-white font-black uppercase px-12 py-5 wireframe-border hover:bg-black transition-colors w-full sm:w-auto text-lg">
                  Être recontacté par l'équipe
                </button>
              </div>
              <p className="text-xs text-slate-500 italic mt-2">* Champs obligatoires dédiés à un usage exclusivement commercial (B2B).</p>
            </form>
         </div>

         {/* Equipe Commerciale */}
         <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-black uppercase mb-0">L'Équipe Commerciale</h3>
            
            <div className="flex flex-col gap-6">
                {/* Contact 1 */}
                <div className="wireframe-border p-6 bg-white hover:-translate-y-1 transition-transform">
                   <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 flex items-center justify-center overflow-hidden border-2 border-slate-300">
                      <span className="material-symbols-outlined text-3xl text-slate-400">person</span>
                   </div>
                   <h4 className="font-black text-lg">Prénom Nom</h4>
                   <p className="text-xs font-bold text-primary uppercase mb-4">Directeur Commercial</p>
                   <div className="flex flex-col gap-2 text-sm text-slate-600 mb-4">
                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">call</span> 06 00 00 00 01</span>
                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">mail</span> email@rouen-rugby.fr</span>
                   </div>
                   <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-[#0077b5] hover:underline">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      Profil LinkedIn
                   </a>
                </div>

                {/* Contact 2 */}
                <div className="wireframe-border p-6 bg-white hover:-translate-y-1 transition-transform">
                   <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 flex items-center justify-center overflow-hidden border-2 border-slate-300">
                      <span className="material-symbols-outlined text-3xl text-slate-400">person</span>
                   </div>
                   <h4 className="font-black text-lg">Prénom Nom</h4>
                   <p className="text-xs font-bold text-primary uppercase mb-4">Responsable Partenariats</p>
                   <div className="flex flex-col gap-2 text-sm text-slate-600 mb-4">
                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">call</span> 06 00 00 00 02</span>
                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">mail</span> email2@rouen-rugby.fr</span>
                   </div>
                   <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-[#0077b5] hover:underline">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      Profil LinkedIn
                   </a>
                </div>
            </div>
         </div>
      </div>

    </div>
  );
}
