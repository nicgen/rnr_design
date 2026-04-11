import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import edrImg from "/resources/formation_enfants.jpg";

const navLinks = [
  { label: "Détection", path: "https://www.rouennormandierugbyformation.fr/detections/", external: true },
  { label: "Centre de formation - Académie", path: "/formation", exact: true },
  { label: "Pôle jeune espoir et pré-formation", path: "/formation/jeunes", exact: true },
  { label: "École de rugby", path: "/formation/ecole-rugby", exact: true },
];

const CategoryCard = ({ title, ages, schedule }) => (
  <div className="bg-white border border-slate-200 p-8 relative overflow-hidden group hover:bg-black hover:text-white transition-all duration-500 skew-x-[-2deg] shadow-sm hover:shadow-xl">
    <div className="skew-x-[2deg] relative z-10">
      <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-none mb-2">{title}</h3>
      <p className="text-primary font-bold uppercase text-xs tracking-[0.3em] mb-6">{ages}</p>

      <div className="space-y-3 text-sm font-medium italic opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-3 items-start">
          <span className="material-symbols-outlined text-primary text-lg">calendar_month</span>
          <p>{schedule}</p>
        </div>
        <div className="flex gap-3 items-center">
          <span className="material-symbols-outlined text-primary text-lg">location_on</span>
          <p>Stade Jean-Mermoz</p>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-700"></div>
  </div>
);

export default function AcademyEdr() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="École de Rugby (EDR)"
        subtitle="Le plaisir, le respect et la solidarité."
        bgImage={edrImg}
        subNavLinks={navLinks}
      />

      <div className="container-premium pb-24">
        <section className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">L'EXCELLENCE NORMANDE</h3>
              <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-8 leading-none">École de rugby (EDR)</h2>
              <p className="text-lg text-slate-500 font-medium italic leading-relaxed mb-10">
                L'École de Rugby est le socle de notre association. Elle accueille les enfants dès 3 ans pour leur faire découvrir les joies du ballon ovale. L'apprentissage se fait par le jeu, dans un cadre sécurisant et convivial, avec pour mots d'ordre : Plaisir, Respect et Solidarité.
              </p>

              <div className="flex gap-8">
                <div className="relative group">
                  <p className="text-6xl font-black text-slate-900 italic tracking-tighter group-hover:text-primary transition-colors">3★</p>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">Label FFR</p>
                </div>
                <div className="w-[1px] h-16 bg-slate-100"></div>
                <div className="relative group">
                  <p className="text-6xl font-black text-slate-900 italic tracking-tighter group-hover:text-primary transition-colors">300+</p>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">Licenciés</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden skew-x-[-3deg] shadow-2xl h-[500px]">
                <img src={edrImg} alt="EDR Action" className="w-full h-full object-cover skew-x-[3deg] scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-slate-100 skew-x-[-3deg]"></div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-12">
            <h3 className="text-3xl font-black uppercase italic tracking-tighter">Nos Catégories</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard title="Baby Rugby" ages="M6 (3 à 5 ans)" schedule="Samedi: 10h30 - 11h30" />
            <CategoryCard title="Premiers Pas" ages="M8 (6 à 7 ans)" schedule="Mercredi: 14h00 - 16h00" />
            <CategoryCard title="Poussins" ages="M10 (8 à 9 ans)" schedule="Mercredi: 14h00 - 16h00" />
            <CategoryCard title="Benjamins" ages="M12 (10 à 11 ans)" schedule="Mercredi: 14h00 - 16h30" />
            <CategoryCard title="Minimes" ages="M14 (12 à 13 ans)" schedule="Lun, Mer, Ven: 18h00" />
          </div>
        </section>

        <section className="bg-black text-white p-12 lg:p-20 text-center relative overflow-hidden skew-x-[-2deg] shadow-2xl">
          <div className="relative z-10 skew-x-[2deg]">
            <h2 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tighter mb-6">Rejoignez l'aventure !</h2>
            <p className="text-lg text-white/60 font-medium italic max-w-2xl mx-auto mb-10">
              Les inscriptions sont ouvertes toute l'année. Venez faire un essai gratuit et découvrez l'esprit Rugby au RNR.
            </p>
            <Link
              to="/contact?sujet=association"
              className="inline-block bg-primary text-white font-black uppercase px-12 py-5 hover:bg-white hover:text-primary transition-all duration-300"
            >
              Plus d'informations
            </Link>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        </section>
      </div>
    </div>
  );
}
