import { useState } from "react";
import PageHero from "../components/PageHero";
import ArticleCard from "../components/ArticleCard";
import heroImg from "/assets/images/ui/www_entreprise.webp";

const navLinks = [
  { label: "Actualités B2B", path: "/partenaires/actualites", exact: true },
  { label: "Le Business Club", path: "/partenaires", exact: true },
  { label: "Hospitalités & Loges", path: "/partenaires/hospitalites", exact: true },
  { label: "Visibilité & Sponsoring", path: "/partenaires/visibilite", exact: true },
  { label: "Nos Partenaires", path: "/partenaires/entreprises", exact: true },
  { label: "Devenir Partenaire", path: "/partenaires/contact", exact: true },
];

const articles = [
  {
    id: "ptits-dej-partenaires-mars",
    title: "P'tits dej partenaires : immersion chez [Entreprise]",
    date: "12 Avril 2026",
    img: "/assets/images/content/Matinee-conviviale-avec-le-RNR.webp",
    excerpt: "Plus de 60 décideurs réunis autour d'un café pour échanger sur les enjeux du secteur. Un moment de partage et de business comme on les aime !"
  },
  {
    id: "nouveau-partenaire-officiel",
    title: "Bienvenue dans la mêlée, [Entreprise] !",
    date: "05 Avril 2026",
    img: "/assets/images/ui/mise-en-avant-partenaires.webp",
    excerpt: "Nous sommes fiers d'annoncer l'arrivée de [Entreprise] en tant que Partenaire Officiel du Rouen Normandie Rugby."
  },
  {
    id: "soiree-gala-partenaires",
    title: "Soirée de gala : une nuit inoubliable avec nos partenaires",
    date: "28 Mars 2026",
    img: "/assets/images/ui/gala.webp",
    excerpt: "Vente aux enchères, dîner gastronomique et rencontres exclusives : notre soirée de gala a réuni plus de 200 membres du Club Affaires."
  },
  {
    id: "hospitalite-loge-vip",
    title: "Expérience loge VIP : vivre le match autrement",
    date: "20 Mars 2026",
    img: "/assets/images/ui/vip_bg.webp",
    excerpt: "Nos partenaires loges ont vécu une expérience exclusive lors de la réception de Massy : accueil premium, rencontres joueurs et vue imprenable."
  },
  {
    id: "rencontre-reseau-normandie",
    title: "Rencontre réseau : les acteurs économiques normands se mobilisent",
    date: "14 Mars 2026",
    img: "/assets/images/ui/www_entreprise.webp",
    excerpt: "Le Club Affaires RNR a réuni ses 260 membres lors d'une soirée networking au Stade Robert-Diochon. Une plateforme unique pour développer vos affaires."
  },
  {
    id: "ptits-dej-partenaires-fevrier",
    title: "P'tits dej partenaires : retour sur l'édition de février",
    date: "26 Février 2026",
    img: "/assets/images/content/Matinee-conviviale-avec-le-RNR.webp",
    excerpt: "L'édition de février du petit-déjeuner mensuel a rassemblé dirigeants et décideurs autour des valeurs partagées du rugby et du monde des affaires."
  },
  {
    id: "visibilite-maillot-nouveau-partenaire",
    title: "Nouveau logo sur le maillot : visibilité maximale pour [Marque]",
    date: "15 Février 2026",
    img: "/assets/images/ui/Maillot-Domicile-25-26.webp",
    excerpt: "Avec plus de 5 000 spectateurs par match et une large couverture médiatique, le maillot du RNR est un vecteur de visibilité incomparable pour vos couleurs."
  },
  {
    id: "partenariat-ffr-distinction-rse",
    title: "RNR distingué par la FFR pour son engagement RSE",
    date: "01 Février 2026",
    img: "/assets/images/content/Tous-derriere-les-Lions.webp",
    excerpt: "La Fédération Française de Rugby a récompensé le Rouen Normandie Rugby pour ses actions exemplaires en matière de responsabilité sociétale."
  },
  {
    id: "club-affaires-bilan-saison",
    title: "Bilan mi-saison du Club Affaires : 260 partenaires, 12 événements",
    date: "20 Janvier 2026",
    img: "/assets/images/ui/www_entreprise.webp",
    excerpt: "À mi-parcours de la saison 25-26, le Club Affaires du RNR dresse un bilan positif : 12 événements organisés, 260 entreprises mobilisées, une dynamique unique en Normandie."
  }
];

export default function PartnersNews() {
  const [page, setPage] = useState(1);
  const totalPages = 3;

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <PageHero
        title="Actualités B2B"
        subtitle="La vie du réseau"
        bgImage={heroImg}
        subNavLinks={navLinks}
      />

      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

          {/* Articles grid */}
          <div className="md:col-span-3 min-w-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} basePath="/partenaires/actualites" />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                className="w-12 h-12 flex border border-slate-200 items-center justify-center font-bold hover:bg-white hover:shadow-md transition-all material-symbols-outlined rounded-none bg-slate-100 text-slate-400"
              >chevron_left</button>
              {[1, 2, 3].map(n => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-12 h-12 flex items-center justify-center font-black italic transition-all ${page === n ? 'bg-primary text-white shadow-lg' : 'border border-slate-200 bg-white hover:shadow-md'}`}
                >{n}</button>
              ))}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                className="w-12 h-12 flex border border-slate-200 items-center justify-center font-bold hover:bg-white hover:shadow-md transition-all material-symbols-outlined rounded-none bg-slate-100 text-slate-400"
              >chevron_right</button>
            </div>
          </div>

          {/* Aside LinkedIn */}
          <aside className="hidden md:flex flex-col col-span-1 sticky top-8">
            <div className="bg-[#0077b5] text-white p-8 flex flex-col gap-6 relative overflow-hidden group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform duration-500 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase italic tracking-tighter leading-tight">Suivez-nous sur LinkedIn</h3>
                  <p className="text-white/70 text-xs font-medium italic mt-1">Ne manquez aucun événement de la Meute des Partenaires.</p>
                </div>
              </div>
              <a
                href="#"
                className="bg-white text-[#0077b5] hover:bg-black hover:text-white transition-all duration-300 font-black uppercase px-6 py-3 italic tracking-widest text-xs text-center"
              >
                Accéder à la page
              </a>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
