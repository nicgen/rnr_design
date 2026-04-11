import PageHero from "../components/PageHero";
import heroImg from "/resources/hero_bg.jpg";
import appImg from "/resources/mise-en-avant-partenaires.jpeg";

const navLinks = [
  { label: "Le Business Club", path: "/partenaires", exact: true },
  { label: "Actualités B2B", path: "/partenaires/actualites", exact: true },
  { label: "Hospitalités & Loges", path: "/partenaires/hospitalites", exact: true },
  { label: "Visibilité & Sponsoring", path: "/partenaires/visibilite", exact: true },
  { label: "Devenir Partenaire", path: "/partenaires/contact", exact: true },
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Vivez le Rugby Autrement"
        subtitle="Accélérez votre business avec le premier réseau B2B de Haute-Normandie."
        bgImage={heroImg}
        subNavLinks={navLinks}
      />

      <div className="container-premium pb-24">
        {/* CHIFFRES CLÉS */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: "900", label: "Membres VIP", sub: "Par rencontre" },
            { num: "260+", label: "Entreprises", sub: "Partenaires actifs" },
            { num: "1er", label: "Réseau B2B", sub: "De Haute-Normandie" }
          ].map((stat, i) => (
            <div key={i} className="bg-black text-white p-12 relative overflow-hidden group skew-x-[-2deg] flex flex-col items-center text-center">
              <div className="skew-x-[2deg]">
                <span className="text-6xl font-black text-primary italic tracking-tighter block mb-2">{stat.num}</span>
                <span className="text-sm font-black uppercase tracking-[0.3em] block mb-1">{stat.label}</span>
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest">{stat.sub}</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </section>

        {/* RENDEZ-VOUS DU RÉSEAU */}
        <section className="mb-24">
          <div className="mb-12 border-l-4 border-primary pl-8">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Networking & Events</h3>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">Les Rendez-vous du Réseau</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { icon: "stadium", title: "Matchs au Sommet", desc: "15 rencontres à domicile au Stade Robert-Diochon. L'émotion du terrain au service de vos relations publiques.", tag: "Saison Régulière" },
              { icon: "local_cafe", title: "P'tits Déjeuners", desc: "Rencontres mensuelles matinales au sein des entreprises membres pour dynamiser vos échanges locaux.", tag: "Networking Mensuel" },
              { icon: "celebration", title: "Afterworks", desc: "Moments de détente en fin de journée pour consolider vos liens dans une ambiance décontractée.", tag: "Convivialité" },
              { icon: "handshake", title: "Speed Business", desc: "Optimisez vos prises de contacts lors de nos sessions de networking structurées et tournois sportifs.", tag: "Efficacité" }
            ].map((event, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-10 flex flex-col sm:flex-row gap-8 items-start hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-black text-primary flex items-center justify-center shrink-0 -skew-x-12 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl skew-x-12">{event.icon}</span>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-black uppercase italic tracking-tighter">{event.title}</h4>
                    <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 italic">{event.tag}</span>
                  </div>
                  <p className="text-slate-500 font-medium italic leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* L'APPLICATION BUSINESS */}
        <section className="relative bg-black text-white p-12 lg:p-24 overflow-hidden shadow-2xl skew-x-[-1deg]">
          <div className="relative z-10 skew-x-[1deg] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-12">
                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-4 italic text-center lg:text-left">Écosystème Digital</h3>
                <h2 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] text-center lg:text-left">
                  L'APPLICATION<br /><span className="text-primary italic">BUSINESS RNR</span>
                </h2>
              </div>
              <p className="text-lg text-white/60 font-medium italic mb-10 leading-relaxed text-center lg:text-left">
                Rejoindre le Rouen Normandie Rugby, c'est intégrer le premier réseau d'affaires de la région, partager les valeurs d'engagement et d'esprit d'équipe qui nous animent, et créer des moments inoubliables pour vos clients et collaborateurs.
              </p>
              <div className="space-y-6">
                {[
                  "Annuaire digital complet 24h/24",
                  "Messagerie instantanée inter-partenaires",
                  "Offres privilèges & avant-premières"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center group/item text-center lg:text-left justify-center lg:justify-start">
                    <span className="material-symbols-outlined text-primary group-hover/item:scale-125 transition-transform">verified</span>
                    <span className="text-sm font-black uppercase italic tracking-widest opacity-80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[9/18.5] bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] shadow-[0_0_50px_rgba(191,149,63,0.2)] overflow-hidden">
                <img src={appImg} alt="Application B2B" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-0 w-full text-center px-6">
                  <div className="w-12 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
                  <p className="text-xs font-black uppercase tracking-widest italic opacity-60">Le réseau au creux de votre main</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-5 rotate-12 bg-primary/20 rounded-full"></div>
        </section>
      </div>
    </div>
  );
}
