import PageHero from "../components/PageHero";
import ArticleCard from "../components/ArticleCard";
import heroImg from "/assets/images/ui/www_leclub.webp";

const navLinks = [
  { label: "Histoire & Palmarès", path: "/le-club", exact: true },
  { label: "Organigramme", path: "/le-club/organigramme", exact: true },
  { label: "Le Stade", path: "/le-club/infrastructures", exact: true },
  { label: "Nos Engagements", path: "/le-club/engagements", exact: true },
];

const rseArticles = [
  {
    id: "visites-hopital",
    title: "Visites à l'hôpital Charles-Nicolle",
    date: "12 Mars 2026",
    img: "/assets/images/content/Tous-derriere-les-Lions.webp",
    excerpt: "Chaque mois, nos joueurs se rendent au CHU de Rouen pour apporter du réconfort et partager un moment privilégié avec les enfants hospitalisés."
  },
  {
    id: "stade-zero-dechet",
    title: "Stade Zéro Déchet : notre démarche environnementale",
    date: "05 Mars 2026",
    img: "/assets/images/content/Matinee-conviviale-avec-le-RNR.webp",
    excerpt: "Gobelets réutilisables, tri systématique et suppression du plastique à usage unique les soirs de match à Robert-Diochon."
  },
  {
    id: "rugby-sante-adapte",
    title: "Rugby Santé & Adapté, le sport pour tous",
    date: "20 Février 2026",
    img: "/assets/images/ui/www_leclub.webp",
    excerpt: "Le club développe activement ses sections spécialisées pour permettre la pratique du rugby à tous, quels que soient l'âge ou les capacités physiques."
  },
  {
    id: "ecole-rugby",
    title: "École & Rugby : éduquer par le sport",
    date: "10 Février 2026",
    img: "/assets/images/ui/hero_bg.webp",
    excerpt: "En partenariat avec les établissements scolaires normands, le RNR intervient pour sensibiliser les jeunes aux valeurs du rugby et du vivre-ensemble."
  }
];

export default function ClubCommitments() {

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        title="Nos Engagements"
        subtitle="Plus qu'un club, un acteur du territoire"
        bgImage={heroImg}
        subNavLinks={navLinks}
      />

      <div className="container-premium pb-24">
        <div className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-8">
              <div className="mb-8">
                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Responsabilité Sociétale</h3>
                <h4 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
                  Le Rugby Comme Moteur de Lien Social
                </h4>
              </div>

              <p className="text-xl text-slate-600 font-medium italic leading-relaxed">
                Au-delà des performances sportives, le Rouen Normandie Rugby s'engage activement sur son territoire. Via son dispositif d'actions sociétales et environnementales (RSE), le club défend des valeurs de solidarité, de partage et de respect.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: "eco", title: "Responsabilité Environnementale" },
                  { icon: "diversity_3", title: "Inclusion & Cohésion Sociale" },
                  { icon: "school", title: "Éducation par le Sport" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-md group-hover:bg-primary transition-colors duration-300">
                      <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300">{item.icon}</span>
                    </div>
                    <span className="text-lg font-black uppercase tracking-tight italic group-hover:translate-x-2 transition-transform duration-300">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 scale-95 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative border-8 border-white shadow-2xl overflow-hidden -rotate-2 group-hover:rotate-0 transition-transform duration-700">
                <img src={heroImg} alt="Engagements" className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-24">
            <h4 className="text-4xl font-black uppercase tracking-tighter italic mb-16 text-center">Focus sur nos actions</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
              {rseArticles.map(article => (
                <ArticleCard key={article.id} article={article} basePath="/le-club/engagements" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
