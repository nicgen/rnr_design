import { useState } from "react";
import PageHero from "../components/PageHero";
import actuImg from "/assets/images/ui/www_actualite.webp";
import ArticleCard from "../components/ArticleCard";
import FilterBar from "../components/FilterBar";

const articles = [
  {
    id: "changement-presidence",
    category: "CLUB",
    title: "Changement à la tête de la présidence du RNR",
    date: "22 Mars 2024",
    img: "/assets/images/content/Delphine_Bunel.webp",
    excerpt: "Le Rouen Normandie Rugby annonce aujourd'hui un changement à la tête de sa gouvernance. Philippe Marty a décidé de passer le relais..."
  },
  {
    id: "prolongation-soig-mingant",
    category: "PRO",
    title: "Soïg MINGANT prolonge avec le RNR !",
    date: "12 Mars 2026",
    img: "/assets/images/content/Soig_MINGANT.webp",
    excerpt: "C'est au tour de Soïg de poursuivre l'aventure avec le Rouen Normandie Rugby. Notre 3ème ligne est désormais lié au club jusqu'en 2028."
  },
  {
    id: "prolongation-killian-laisne",
    category: "PRO",
    title: "Killian LAISNÉ prolonge avec le RNR !",
    date: "10 Mars 2026",
    img: "/assets/images/content/Killian_LAISNE.webp",
    excerpt: "Issu du Centre de Formation du RNR, notre troisième ligne de 19 ans prolonge son aventure jusqu'en 2028 avec nos Lions !"
  },
  {
    id: "prolongation-marius-bunel",
    category: "PRO",
    title: "Marius BUNEL prolonge jusqu'en 2028 !",
    date: "08 Mars 2026",
    img: "/assets/images/content/Marius_BUNEL.webp",
    excerpt: "Arrivé au Rouen Normandie Rugby en 2019, Marius BUNEL continue son ascension et prolonge son engagement."
  },
  {
    id: "tous-derriere-les-lions",
    category: "MATCH",
    title: "Tous derrière les Lions pour la réception de Massy !",
    date: "05 Mars 2026",
    img: "/assets/images/content/Tous-derriere-les-Lions.webp",
    excerpt: "Après deux victoires consécutives, nos Lions veulent enchaîner à domicile. Rendez-vous vendredi 20 mars à 20h !"
  },
  {
    id: "soiree-de-gala-art",
    category: "ÉVÉNEMENT",
    title: "L'art au cœur de notre soirée de gala",
    date: "01 Mars 2026",
    img: "/assets/images/ui/gala.webp",
    excerpt: "À l'occasion de notre soirée de gala, nous aurons le plaisir de proposer une vente aux enchères exclusive mettant à l'honneur des œuvres uniques."
  },
  {
    id: "matinee-conviviale-partenaires",
    category: "BUSINESS",
    title: "Matinée conviviale : Petit-déjeuner mensuel",
    date: "25 Février 2026",
    img: "/assets/images/content/Matinee-conviviale-avec-le-RNR.webp",
    excerpt: "Le RNR et son réseau de partenaires se sont retrouvés pour leur petit-déjeuner mensuel, organisé par Mercedes-Benz Groupe MET."
  },
  {
    id: "mise-en-avant-partenaires",
    category: "BUSINESS",
    title: "Mise en avant de nos partenaires locaux",
    date: "20 Février 2026",
    img: "/assets/images/ui/mise-en-avant-partenaires.webp",
    excerpt: "À l'occasion de notre dernière rencontre à domicile, nous avons souhaité proposer une expérience différente à nos partenaires."
  },
  {
    id: "maillot-domicile-25-26",
    category: "BOUTIQUE",
    title: "Maillot Domicile Replica 25-26 disponible",
    date: "15 Février 2026",
    img: "/assets/images/ui/Maillot-Domicile-25-26.webp",
    excerpt: "Montrez votre soutien aux Lions avec le maillot domicile replica du Rouen Normandie Rugby ! Conçu pour les passionnés."
  }
];

const categories = ["TOUTES", "CLUB", "PRO", "MATCH", "ÉVÉNEMENT", "BUSINESS", "BOUTIQUE"];

export default function NewsMedia() {
  const [filter, setFilter] = useState("TOUTES");

  const filteredArticles = filter === "TOUTES"
    ? articles
    : articles.filter(a => a.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <PageHero
        title="Actualités & Médias"
        subtitle="Suivez au quotidien la vie du Rouen Normandie Rugby : coulisses, résultats, vie du club et événements partenaires."
        bgImage={actuImg}
      />

      <div className="container-premium py-16">
        <FilterBar filters={categories} active={filter} onChange={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-2">
          <button className="w-12 h-12 flex border border-slate-200 items-center justify-center font-bold hover:bg-white hover:shadow-md transition-all material-symbols-outlined rounded-none bg-slate-100 text-slate-400">chevron_left</button>
          <button className="w-12 h-12 flex bg-primary text-white items-center justify-center font-black italic shadow-lg">1</button>
          <button className="w-12 h-12 flex border border-slate-200 bg-white items-center justify-center font-black italic hover:shadow-md transition-all">2</button>
          <button className="w-12 h-12 flex border border-slate-200 bg-white items-center justify-center font-black italic hover:shadow-md transition-all">3</button>
          <span className="px-4 font-black text-slate-300">...</span>
          <button className="w-12 h-12 flex border border-slate-200 bg-white items-center justify-center font-black italic hover:shadow-md transition-all material-symbols-outlined rounded-none">chevron_right</button>
        </div>
      </div>
    </div>
  );
}
