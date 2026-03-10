import { useState } from "react";
import { useLocation } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";

export default function Contact() {
  const [wantsCallback, setWantsCallback] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultSujet = searchParams.get("sujet") || "secretariat";

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Nous Contacter</h1>
        <p className="text-lg">Une question, une demande de partenariat ou d'information ? Utilisez le formulaire ci-dessous pour nous écrire.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        {/* Formulaire Intelligent */}
        <div>
          <h2 className="text-2xl font-black uppercase mb-8">Envoyer un message</h2>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase" htmlFor="nom">Nom Complet *</label>
              <input type="text" id="nom" className="wireframe-border p-3 focus:ring-primary focus:border-primary outline-none" placeholder="Jean Dupont" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase" htmlFor="email">Adresse Email *</label>
              <input type="email" id="email" className="wireframe-border p-3 focus:ring-primary focus:border-primary outline-none" placeholder="jean@exemple.com" required />
            </div>

            <div className="flex items-center gap-3 bg-slate-50 p-4 wireframe-border">
              <input 
                type="checkbox" 
                id="rappel" 
                className="w-5 h-5 accent-primary cursor-pointer" 
                checked={wantsCallback}
                onChange={(e) => setWantsCallback(e.target.checked)}
              />
              <label className="text-sm font-bold cursor-pointer select-none" htmlFor="rappel">
                Je souhaite être rappelé(e) par téléphone
              </label>
            </div>

            {wantsCallback && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase" htmlFor="tel">Téléphone *</label>
                <input type="tel" id="tel" className="wireframe-border p-3 focus:ring-primary focus:border-primary outline-none" placeholder="06 12 34 56 78" required />
              </div>
            )}
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase" htmlFor="sujet">Sujet de votre demande *</label>
              <select id="sujet" className="wireframe-border p-3 focus:ring-primary focus:border-primary outline-none bg-white cursor-pointer appearance-none" required defaultValue={defaultSujet}>
                <option value="secretariat">Secrétariat / Administration (Général)</option>
                <option value="billetterie">Billetterie & Boutique</option>
                <option value="communication">Communication & Presse</option>
                <option value="partenariats">Partenariats & Sponsoring</option>
                <option value="association">Association & Formation</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase" htmlFor="message">Votre Message *</label>
              <textarea id="message" rows="6" className="wireframe-border p-3 focus:ring-primary focus:border-primary outline-none resize-none" placeholder="Comment pouvons-nous vous aider ?" required></textarea>
            </div>

            <button type="button" className="bg-primary text-white font-black uppercase px-8 py-4 wireframe-border hover:bg-black transition-colors w-full sm:w-auto self-start mt-2">
              Envoyer le message
            </button>
            <p className="text-xs text-slate-500 italic mt-2">* Champs obligatoires. Vos données ne seront utilisées que pour répondre à votre demande.</p>
          </form>
        </div>

        {/* Informations de Contact & Carte */}
        <div className="flex flex-col gap-8">
           <h2 className="text-2xl font-black uppercase mb-0">Informations Pratiques</h2>
           
           <div className="flex flex-col">
              {/* Carte Interactive (séparée, sans bordure externe) */}
              <div className="bg-slate-200 relative h-64 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 placeholder-x opacity-10"></div>
                <span className="material-symbols-outlined text-5xl text-slate-400 relative z-10 mb-4">map</span>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <span className="material-symbols-outlined text-primary text-4xl mb-2 drop-shadow-md">location_pin</span>
                    <div className="bg-white text-black px-3 py-1 font-black uppercase text-[10px] shadow-lg">Jean-Mermoz</div>
                </div>
              </div>

              {/* Coordonnées, collées sous la carte */}
              <div className="wireframe-border border-t-0 p-8 bg-black text-white flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary">location_on</span>
                  <div>
                    <h3 className="font-black uppercase text-xl mb-1">Siège Administratif</h3>
                    <p className="font-bold text-slate-300">Stade Jean-Mermoz</p>
                    <p className="text-sm text-slate-400 mt-1">13 rue de la Motte,<br/>76100 Rouen</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary">call</span>
                  <div>
                    <h3 className="font-black uppercase text-xl mb-1">Téléphone</h3>
                    <p className="font-bold text-slate-300">02 35 70 24 72</p>
                    <p className="text-xs text-slate-400 mt-1">Du lundi au vendredi, de 9h à 17h</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
