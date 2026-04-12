import PageHero from "../components/PageHero";
import heroImg from "/assets/images/ui/hero_bg.webp";

const navLinks = [
  { label: "Centre de formation - Académie", path: "/formation", exact: true },
  { label: "Pôle jeune espoirs", path: "/formation/jeunes", exact: true },
  { label: "École de rugby", path: "/formation/ecole-rugby", exact: true },
  { label: "Rugby Féminin", path: "/formation/feminines", exact: true },
  { label: "Rugby Santé & Adapté", path: "/formation/specifique", exact: true },
];

export default function AcademySpecial() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Rugby Santé & Adapté"
        subtitle="Le rugby pour tous, sans exception"
        bgImage={heroImg}
        subNavLinks={navLinks}
      />

      <div className="container-premium pb-24">
        <section className="py-24 text-center max-w-4xl mx-auto">
          <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Inclusion & Solidarité</h3>
          <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-8">Un club, toutes les énergies</h2>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed">
            Le Rouen Normandie Rugby s'engage au-delà de la compétition. Nos sections spécialisées offrent à chacun la possibilité de pratiquer le rugby dans un cadre adapté, sécurisé et valorisant.
          </p>
        </section>

        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-slate-50 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="lg:col-span-4 relative h-[400px] lg:h-auto">
              <div className="w-full h-full bg-slate-200 animate-pulse"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-8 left-8 tag-pill bg-black text-white">
                Handisport
              </div>
            </div>
            <div className="lg:col-span-8 p-12 lg:p-20 flex flex-col justify-center items-start">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-6 leading-none">Rugby Fauteuil</h2>
              <p className="text-lg text-slate-600 font-medium italic leading-relaxed mb-8">
                Sport paralympique spectaculaire et intense, le rugby fauteuil se pratique en gymnase. Cette section s'adresse aux personnes en situation de handicap physique (tétraplégie ou assimilé). Le RNR est fier de promouvoir cette discipline alliant pugnacité et dépassement de soi.
              </p>
              <button className="bg-primary text-white font-black uppercase px-10 py-5 hover:bg-black transition-all duration-300 shadow-lg">
                Rejoindre la section
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-black text-white overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="lg:col-span-8 p-12 lg:p-20 flex flex-col justify-center items-start order-2 lg:order-1">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-6 leading-none">Sport Adapté</h2>
              <p className="text-lg text-white/60 font-medium italic leading-relaxed mb-8">
                Proposée aux personnes en situation de handicap mental ou psychique, cette section met l'accent sur la motricité et l'inclusion. Nos éducateurs spécialisés accompagnent chaque licencié pour que le rugby soit avant tout un vecteur de plaisir et de lien social.
              </p>
              <button className="bg-primary text-white font-black uppercase px-10 py-5 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg">
                S'informer sur l'inscription
              </button>
            </div>
            <div className="lg:col-span-4 relative h-[400px] lg:h-auto order-1 lg:order-2">
              <div className="w-full h-full bg-slate-800 animate-pulse"></div>
              <div className="absolute inset-0 bg-primary/10"></div>
              <div className="absolute top-8 right-8 tag-pill bg-primary text-white">
                Inclusion
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-slate-50 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="lg:col-span-4 relative h-[400px] lg:h-auto">
              <div className="w-full h-full bg-slate-200 animate-pulse"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-8 left-8 tag-pill bg-black text-white">
                Loisir & Santé
              </div>
            </div>
            <div className="lg:col-span-8 p-12 lg:p-20 flex flex-col justify-center items-start">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-6 leading-none">Rugby à 5 (Touch)</h2>
              <p className="text-lg text-slate-600 font-medium italic leading-relaxed mb-8">
                Pratique mixte et sans contact, le Rugby à 5 est idéal pour tous ceux qui souhaitent découvrir le ballon ovale en douceur. Cardio, convivialité et esprit d'équipe sont au rendez-vous. Parfait pour le rugby bien-être ou la reprise sportive.
              </p>
              <button className="bg-primary text-white font-black uppercase px-10 py-5 hover:bg-black transition-all duration-300 shadow-lg">
                Essai gratuit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
