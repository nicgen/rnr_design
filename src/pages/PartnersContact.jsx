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

export default function PartnersContact() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full flex-shrink-0 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Devenir Partenaire" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-20">
          <Breadcrumb />
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase mt-4 leading-none tracking-tighter font-barlow-condensed italic text-center">
            DEVENIR<br />PARTENAIRE
          </h1>
          <p className="text-primary text-xl md:text-2xl font-bold max-w-3xl mt-4 italic uppercase tracking-widest">
            Rejoignez le premier réseau de Normandie
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30 pb-24">
        <SectionNav links={navLinks} />

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 mt-20">
          {/* FORM SECTION */}
          <section>
            <div className="mb-12">
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Contact Privilège</h3>
              <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-6">Parlons de votre projet</h2>
              <p className="text-lg text-slate-500 font-medium italic">
                Vous souhaitez associer votre marque au RNR ou découvrir nos offres d'hospitalité ? Remplissez ce formulaire, notre équipe commerciale vous recontactera sous 24h.
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest italic text-slate-400" htmlFor="name">Nom Complet</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:border-primary outline-none font-black uppercase italic transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest italic text-slate-400" htmlFor="company">Société</label>
                  <input 
                    type="text" 
                    id="company"
                    placeholder="Nom de l'entreprise"
                    className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:border-primary outline-none font-black uppercase italic transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest italic text-slate-400" htmlFor="email">Email Professionnel</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@company.com"
                    className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:border-primary outline-none font-black uppercase italic transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest italic text-slate-400" htmlFor="phone">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="06 XX XX XX XX"
                    className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:border-primary outline-none font-black uppercase italic transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest italic text-slate-400" htmlFor="subject">Votre Intérêt</label>
                <select 
                  id="subject"
                  className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:border-primary outline-none font-black uppercase italic transition-colors appearance-none"
                >
                  <option>Business Club & Networking</option>
                  <option>Hospitalités & Loges</option>
                  <option>Sponsoring & Visibilité</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest italic text-slate-400" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  rows="4"
                  placeholder="Décrivez votre besoin..."
                  className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:border-primary outline-none font-black uppercase italic transition-colors resize-none"
                ></textarea>
              </div>

              <button className="bg-black hover:bg-primary text-white transition-all duration-300 font-black uppercase px-12 py-6 italic tracking-widest skew-x-[-12deg] shadow-xl group">
                <span className="inline-block skew-x-[12deg] group-hover:scale-105 transition-transform">Envoyer la demande</span>
              </button>
            </form>
          </section>

          {/* TEAM SECTION */}
          <aside className="space-y-12">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-8 border-b-2 border-black pb-4">Direction Commerciale</h3>
              <div className="space-y-6">
                {[
                  { name: "Prénom Nom", role: "Directeur Commercial", email: "p.nom@rnr.fr" },
                  { name: "Prénom Nom", role: "Responsable Partenariats", email: "p.nom2@rnr.fr" }
                ].map((member, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-pointer bg-slate-50 p-6 hover:bg-black hover:text-white transition-all duration-500">
                    <div className="w-16 h-16 bg-white shadow-lg overflow-hidden -skew-x-6 shrink-0 group-hover:bg-primary">
                      <div className="w-full h-full flex items-center justify-center skew-x-6">
                        <span className="material-symbols-outlined text-slate-300 group-hover:text-white">person</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-black uppercase italic tracking-tight">{member.name}</h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary italic mb-1">{member.role}</p>
                      <p className="text-[10px] font-bold opacity-60 tracking-widest">{member.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary p-10 text-white skew-x-[-1deg]">
              <div className="skew-x-[1deg]">
                <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4">Besoin d'un devis express ?</h4>
                <p className="text-sm font-medium italic opacity-90 mb-6 font-barlow-condensed leading-relaxed">
                  Notre catalogue d'offres 2025/2026 est disponible en téléchargement direct pour nos membres pré-inscrits.
                </p>
                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] hover:underline underline-offset-4">
                  Version digitale (PDF) <span className="material-symbols-outlined text-lg">download</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
