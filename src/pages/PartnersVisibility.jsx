import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import heroImg from "/resources/hero_bg.jpg";

const navLinks = [
  { label: "Le Business Club", path: "/partenaires", exact: true },
  { label: "Actualités B2B", path: "/partenaires/actualites", exact: true },
  { label: "Hospitalités & Loges", path: "/partenaires/hospitalites", exact: true },
  { label: "Visibilité & Sponsoring", path: "/partenaires/visibilite", exact: true },
  { label: "Devenir Partenaire", path: "/partenaires/contact", exact: true },
];

export default function PartnersVisibility() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Visibilité & Sponsoring"
        subtitle="Votre vitrine au cœur de l'action"
        bgImage={heroImg}
        subNavLinks={navLinks}
      />

      <div className="container-premium pb-24">
        <section className="py-24 text-center max-w-4xl mx-auto">
          <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Exposition & Influence</h3>
          <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-8">Boostez votre notoriété</h2>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed">
            Associez l'image de votre entreprise à celle du Rouen Normandie Rugby. Bénéficiez d'une exposition premium auprès d'une audience qualifiée de décideurs, de supporters et d'entrepreneurs.
          </p>
        </section>

        <section className="mb-24">
          <div className="mb-12 border-l-4 border-primary pl-8">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Equipements</h3>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">Tenues Officielles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Arrière / Manche", sub: "Maillot & Short", icon: "apparel" },
              { title: "Échauffement", sub: "Textile training", icon: "fitness_center" },
              { title: "Staff & Médical", sub: "Bord de terrain", icon: "medical_services" },
              { title: "Remplaçants", sub: "Chasubles banc", icon: "groups" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 flex flex-col items-center text-center group hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
                <div className="w-16 h-16 bg-white shadow-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-black group-hover:text-white text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-xl font-black uppercase italic tracking-tighter mb-2 leading-none">{item.title}</h4>
                <p className="text-xs font-black uppercase tracking-widest text-primary italic opacity-70">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div className="border-b-2 border-black pb-4">
              <h3 className="text-3xl font-black uppercase italic tracking-tighter">Visibilité Terrain</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-100 p-6 flex flex-col gap-4 group">
                <div className="aspect-video bg-slate-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-lg leading-none mb-1">Panneaux LED</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest italic">Affichage dynamique</p>
                </div>
              </div>
              <div className="bg-slate-100 p-6 flex flex-col gap-4 group">
                <div className="aspect-video bg-slate-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-lg leading-none mb-1">Piquets de touche</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest italic">Visibilité fixe stratégique</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-b-2 border-black pb-4">
              <h3 className="text-3xl font-black uppercase italic tracking-tighter">Namings & Événements</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-100 p-6 flex flex-col gap-4 group">
                <div className="aspect-video bg-slate-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-lg leading-none mb-1">Naming d'espaces</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest italic">Salons & Loges</p>
                </div>
              </div>
              <div className="bg-slate-100 p-6 flex flex-col gap-4 group">
                <div className="aspect-video bg-slate-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-lg leading-none mb-1">Animations Match</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest italic">Coup d'envoi & Mascotte</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-black text-white p-12 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-4 italic">Social Media</h3>
              <h2 className="text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none mb-8">
                LE PACKAGE <span className="text-primary italic">DIGITAL</span>
              </h2>
              <p className="text-lg text-white/60 font-medium italic mb-10 max-w-xl mx-auto lg:mx-0">
                Touchez une communauté de plus de 40 000 followers engagés. Sponsorisez nos rubriques phares sur Instagram, Facebook et LinkedIn.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                {["Sponsor Score Final", "Composition d'Équipe", "Stats de la Rencontre", "Anniversaire Joueurs"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                    <span className="material-symbols-outlined text-primary">online_prediction</span>
                    <span className="font-black uppercase italic tracking-widest opacity-80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <Link to="/partenaires/contact" className="bg-primary hover:bg-white text-white hover:text-black transition-all duration-300 font-black uppercase px-10 py-6 italic tracking-widest shadow-[0_0_50px_rgba(191,149,63,0.3)]">
                Demander le catalogue
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
