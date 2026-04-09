import { useParams, Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const articlesData = {
  "changement-presidence": {
    category: "CLUB",
    title: "Le Rouen Normandie Rugby annonce un changement de présidence.",
    date: "22 MARS 2024",
    img: "/resources/Delphine_Bunel.jpg",
    content: `Le Rouen Normandie Rugby annonce aujourd’hui un changement à la tête de sa gouvernance. Philippe Marty a décidé de passer le relais. Cette décision, mûrement réfléchie, s’inscrit dans une volonté de continuité et de pérennité du projet du RNR.

    Le Conseil d’administration a désigné Delphine Bunel pour lui succéder à la présidence du club. Déjà fortement impliquée dans la vie rugbystique locale et régionale, elle aura pour mission de poursuivre le développement sportif, économique et institutionnel du club, dans le respect de ses valeurs.

    Le RNR ouvre ainsi une nouvelle étape de son histoire, avec ambition, stabilité et confiance en l’avenir.

    Le Rouen Normandie Rugby`
  },
  "prolongation-soig-mingant": {
    category: "PRO",
    title: "Soïg MINGANT prolonge avec le RNR !",
    date: "12 MARS 2026",
    img: "/resources/Soig_MINGANT.jpg",
    content: `C’est au tour de Soïg de poursuivre l’aventure avec le Rouen Normandie Rugby. À 21 ans, notre 3ème ligne issu du centre de formation a déjà pris part à 13 rencontres avec l’équipe professionnelle 🔥

    Soïg MINGANT est désormais lié au RNR jusqu’en 2028 🔴⚫

    Un seul blason, toute une région #TousNormandsTousRNR #fierdetrenormands #nationale1`
  },
  "prolongation-marius-bunel": {
    category: "PRO",
    title: "Marius BUNEL prolonge jusqu’en 2028 !",
    date: "08 MARS 2026",
    img: "/resources/Marius_BUNEL.jpg",
    content: `Marius BUNEL prolonge l’aventure ! Arrivé au Rouen Normandie Rugby en 2019, Marius BUNEL continue son ascension. Formé à Rouen, notre ailier poursuit l’aventure et prolonge son engagement avec le RNR jusqu’en 2028.

    Une belle récompense pour son travail, sa progression et son engagement sous les couleurs rouennaises.

    Félicitations Marius ! Un seul blason, toute une région`
  }
  // Data for other articles can be added here
};

export default function NewsDetail() {
  const { id } = useParams();
  const article = articlesData[id] || articlesData["changement-presidence"];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* ARTICLE HEADER / HERO */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={article.img} 
          alt={article.title} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        
        <div className="absolute inset-x-0 bottom-0 max-w-5xl mx-auto px-4 pb-16">
          <Breadcrumb 
            items={[
              { label: "ACTUALITÉS", to: "/actualites-medias" },
              { label: article.category, to: "/actualites-medias" }
            ]} 
          />
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white leading-none italic tracking-tighter drop-shadow-2xl mb-4">
            {article.title}
          </h1>
          <p className="text-primary font-black uppercase tracking-widest italic">{article.date}</p>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="flex flex-col gap-8 text-xl leading-relaxed text-slate-700 font-medium">
          {article.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
        </div>

        {/* SOCIAL SHARE & TAGS */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4">
            <span className="text-(--text-xs) font-black uppercase tracking-widest text-slate-400">Partager :</span>
            <div className="flex gap-6">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">facebook</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">share</span>
            </div>
          </div>
          <Link 
            to="/actualites-medias" 
            className="flex items-center gap-3 text-xs font-black uppercase tracking-widest group border-b-2 border-black pb-1 hover:border-primary hover:text-primary transition-all"
          >
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Retour aux actualités
          </Link>
        </div>
      </div>

      {/* READ MORE / RELATED SECTION */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-12">Articles Similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(articlesData)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, item]) => (
                <Link key={key} to={`/actualites-medias/${key}`} className="group bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden">
                     <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="p-6">
                    <p className="text-(--text-xs) font-bold text-slate-400 mb-2">{item.date}</p>
                    <h3 className="font-black uppercase text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2 italic tracking-tighter">
                      {item.title}
                    </h3>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
