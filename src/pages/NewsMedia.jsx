import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const articles = [
  { 
    id: "changement-presidence",
    category: "CLUB", 
    title: "Changement à la tête de la présidence du RNR", 
    date: "22 Mars 2024", 
    img: "/resources/Delphine_Bunel.jpg",
    excerpt: "Le Rouen Normandie Rugby annonce aujourd’hui un changement à la tête de sa gouvernance. Philippe Marty a décidé de passer le relais..."
  },
  { 
    id: "prolongation-soig-mingant",
    category: "PRO", 
    title: "Soïg MINGANT prolonge avec le RNR !", 
    date: "12 Mars 2026", 
    img: "/resources/Soig_MINGANT.jpg",
    excerpt: "C’est au tour de Soïg de poursuivre l’aventure avec le Rouen Normandie Rugby. Notre 3ème ligne est désormais lié au club jusqu'en 2028."
  },
  { 
    id: "prolongation-killian-laisne",
    category: "PRO", 
    title: "Killian LAISNÉ prolonge avec le RNR !", 
    date: "10 Mars 2026", 
    img: "/resources/Killian_LAISNE.jpg",
    excerpt: "Issu du Centre de Formation du RNR, notre troisième ligne de 19 ans prolonge son aventure jusqu’en 2028 avec nos Lions !"
  },
  { 
    id: "prolongation-marius-bunel",
    category: "PRO", 
    title: "Marius BUNEL prolonge jusqu’en 2028 !", 
    date: "08 Mars 2026", 
    img: "/resources/Marius_BUNEL.jpg",
    excerpt: "Arrivé au Rouen Normandie Rugby en 2019, Marius BUNEL continue son ascension et prolonge son engagement."
  },
  { 
    id: "tous-derriere-les-lions",
    category: "MATCH", 
    title: "Tous derrière les Lions pour la réception de Massy !", 
    date: "05 Mars 2026", 
    img: "/resources/Tous-derriere-les-Lions.jpeg",
    excerpt: "Après deux victoires consécutives, nos Lions veulent enchaîner à domicile. Rendez-vous vendredi 20 mars à 20h !"
  },
  { 
    id: "soiree-de-gala-art",
    category: "ÉVÉNEMENT", 
    title: "L’art au cœur de notre soirée de gala", 
    date: "01 Mars 2026", 
    img: "/resources/gala.jpeg",
    excerpt: "À l’occasion de notre soirée de gala, nous aurons le plaisir de proposer une vente aux enchères exclusive mettant à l’honneur des œuvres uniques."
  },
  { 
    id: "matinee-conviviale-partenaires",
    category: "BUSINESS", 
    title: "Matinée conviviale : Petit-déjeuner mensuel", 
    date: "25 Février 2026", 
    img: "/resources/Matinee-conviviale-avec-le-RNR.jpeg",
    excerpt: "Le RNR et son réseau de partenaires se sont retrouvés pour leur petit-déjeuner mensuel, organisé par Mercedes-Benz Groupe MET."
  },
  { 
    id: "mise-en-avant-partenaires",
    category: "BUSINESS", 
    title: "Mise en avant de nos partenaires locaux", 
    date: "20 Février 2026", 
    img: "/resources/mise-en-avant-partenaires.jpeg",
    excerpt: "À l’occasion de notre dernière rencontre à domicile, nous avons souhaité proposer une expérience différente à nos partenaires."
  },
  { 
    id: "maillot-domicile-25-26",
    category: "BOUTIQUE", 
    title: "Maillot Domicile Replica 25-26 disponible", 
    date: "15 Février 2026", 
    img: "/resources/Maillot-Domicile-25-26.webp",
    excerpt: "Montrez votre soutien aux Lions avec le maillot domicile replica du Rouen Normandie Rugby ! Conçu pour les passionnés."
  }
];

const ArticleCard = ({ article }) => (
  <Link to={`/actualites-medias/${article.id}`} className="group relative flex flex-col overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
    <div className="relative aspect-[16/10] overflow-hidden">
      <img 
        src={article.img} 
        alt={article.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
      <div className="absolute top-4 left-4">
        <span className="bg-primary text-white text-[10px] font-black px-2 py-1 uppercase -skew-x-12 inline-block">
          <span className="inline-block skew-x-12">{article.category}</span>
        </span>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{article.date}</p>
      <h3 className="font-black uppercase text-xl leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2 italic tracking-tighter">
        {article.title}
      </h3>
      <p className="text-sm text-slate-500 line-clamp-3 mb-6 font-medium leading-relaxed">
        {article.excerpt}
      </p>
      <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">Lire l'article</span>
        <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
    </div>
  </Link>
);

export default function NewsMedia() {
  const [filter, setFilter] = useState("TOUTES");
  const categories = ["TOUTES", "CLUB", "PRO", "ÉVÉNEMENT", "BUSINESS", "BOUTIQUE"];

  const filteredArticles = filter === "TOUTES" 
    ? articles 
    : articles.filter(a => a.category === (filter === "BUSINESS" ? "BUSINESS" : filter === "PRO" ? "PRO" : filter));

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* HEADER SECTION */}
      <div className="bg-white border-b border-slate-200 mb-12">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
          <Breadcrumb />
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-4">Actualités & Médias</h1>
          <p className="text-lg text-slate-500 max-w-2xl font-medium italic">
            Suivez au quotidien la vie du Rouen Normandie Rugby : coulisses, résultats, vie du club et événements partenaires.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* FILTERS */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === cat 
                ? "bg-primary text-white shadow-lg -skew-x-12" 
                : "bg-white text-slate-400 hover:text-black border border-slate-200"
              }`}
            >
              <span className={filter === cat ? "inline-block skew-x-12" : ""}>{cat}</span>
            </button>
          ))}
        </div>

        {/* LISTING */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article, i) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* PAGINATION (Static for now) */}
        <div className="flex justify-center items-center gap-2">
          <button className="w-12 h-12 flex border border-slate-200 items-center justify-center font-bold hover:bg-white hover:shadow-md transition-all material-symbols-outlined rounded-none bg-slate-100 text-slate-400">chevron_left</button>
          <button className="w-12 h-12 flex bg-primary text-white items-center justify-center font-black italic shadow-lg -skew-x-12"><span className="skew-x-12">1</span></button>
          <button className="w-12 h-12 flex border border-slate-200 bg-white items-center justify-center font-black italic hover:shadow-md transition-all">2</button>
          <button className="w-12 h-12 flex border border-slate-200 bg-white items-center justify-center font-black italic hover:shadow-md transition-all">3</button>
          <span className="px-4 font-black text-slate-300">...</span>
          <button className="w-12 h-12 flex border border-slate-200 bg-white items-center justify-center font-black italic hover:shadow-md transition-all material-symbols-outlined rounded-none">chevron_right</button>
        </div>
      </div>
    </div>
  );
}
