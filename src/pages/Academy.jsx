import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import SectionNav from "../components/SectionNav";
import formationImg from "/resources/formation.jpg";

const navLinks = [
  { label: "Centre de formation - Académie", path: "/formation", exact: true },
  { label: "Pôle jeune espoirs", path: "/formation/jeunes", exact: true },
  { label: "École de rugby", path: "/formation/ecole-rugby", exact: true },
  { label: "Rugby Féminin", path: "/formation/feminines", exact: true },
  { label: "Rugby Santé & Adapté", path: "/formation/specifique", exact: true },
];

export default function Academy() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full flex-shrink-0 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={formationImg} 
            alt="Academy" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-20">
          <Breadcrumb />
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase mt-4 leading-none tracking-tighter font-barlow-condensed italic">
            CENTRE DE FORMATION & ESPOIRS
          </h1>
          <p className="text-primary text-xl md:text-2xl font-bold max-w-3xl mt-4 italic uppercase tracking-widest">
            La pépinière des Lions : Former les talents de demain pour repousser nos limites.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30 pb-24">
        <SectionNav links={navLinks} />

        {/* INTRODUCTION SECTION */}
        <section className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="mb-8">
                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">L'EXCELLENCE NORMANDE</h3>
                <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none">Centre de formation - Académie</h2>
              </div>
              <p className="text-xl text-slate-800 font-bold italic mb-8 leading-tight">
                LE CENTRE DE FORMATION DU ROUEN NORMANDIE RUGBY EST AU CŒUR DE NOTRE PROJET SPORTIF.
              </p>
              <p className="text-lg text-slate-500 font-medium italic leading-relaxed mb-10">
                Agréé par la FFR, il vise la double excellence : sportive et scolaire/professionnelle. Notre mission est d'accompagner chaque joueur dans son développement pour atteindre le haut niveau tout en préparant son avenir personnel.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  { icon: "school", title: "Double Projet", desc: "Suivi scolaire et universitaire personnalisé pour chaque athlète." },
                  { icon: "fitness_center", title: "Haute Performance", desc: "Préparation physique et technique de niveau professionnel." },
                  { icon: "medical_services", title: "Suivi Médical", desc: "Accompagnement quotidien par notre staff médical dédié." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <span className="material-symbols-outlined text-primary group-hover:text-white">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-black uppercase italic tracking-tight text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               <div className="relative overflow-hidden skew-x-[-3deg] shadow-2xl h-[600px]">
                  <img src={formationImg} alt="Formation" className="w-full h-full object-cover skew-x-[3deg] scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-12 left-12 bg-primary text-white p-8 -skew-x-12 shadow-2xl">
                    <div className="skew-x-12">
                      <p className="text-5xl font-black italic leading-none">Agréé</p>
                      <p className="text-xl font-black uppercase italic tracking-widest mt-2">FFR</p>
                    </div>
                  </div>
               </div>
               <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-slate-100 skew-x-[-3deg]"></div>
            </div>
          </div>
        </section>

        {/* DETECTIONS & PROCESS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-12">
          {/* CTA Block */}
          <div className="lg:col-span-1 bg-black text-white p-12 relative overflow-hidden flex flex-col justify-between group skew-x-[-2deg]">
            <div className="skew-x-[2deg] relative z-10">
              <span className="material-symbols-outlined text-6xl text-primary mb-8 opacity-40">person_search</span>
              <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-4 leading-none">Devenez un Lion</h3>
              <p className="text-slate-400 font-medium italic text-lg mb-8">
                Vous avez le talent et l'ambition ? Rejoignez nos sessions de détection pour intégrer notre pépinière.
              </p>
              <a 
                href="https://www.rouennormandierugbyformation.fr/detections/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white font-black uppercase px-8 py-4 hover:bg-white hover:text-primary transition-all duration-300"
              >
                Postuler en ligne
              </a>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
          </div>

          {/* Modalités */}
          <div className="lg:col-span-2 bg-slate-50 p-12 skew-x-[2deg] border border-slate-200">
            <div className="skew-x-[-2deg]">
              <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-12">Le Processus de Recrutement</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { num: "01", title: "Détection", desc: "Observation terrain lors de matchs ou ralliements académiques." },
                  { num: "02", title: "Analyse", desc: "Étude approfondie du dossier sportif et scolaire par nos experts." },
                  { num: "03", title: "Entretien", desc: "Validation du projet de vie avec le joueur et sa famille." }
                ].map((step, i) => (
                  <div key={i} className="relative group">
                    <span className="text-6xl font-black italic text-slate-200 group-hover:text-primary/20 transition-colors duration-500 leading-none block mb-4">{step.num}</span>
                    <h4 className="text-lg font-black uppercase italic tracking-tight text-slate-900 group-hover:text-primary transition-colors">{step.title}</h4>
                    <p className="text-sm text-slate-500 font-medium italic mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
