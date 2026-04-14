import { Link } from 'react-router-dom';

export default function ArticleCard({ article, basePath = '/actualites-medias' }) {
  return (
    <Link
      to={`${basePath}/${article.id}`}
      className="group relative flex flex-col overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        {article.category && (
          <div className="absolute top-4 left-4">
            <span className="tag-pill bg-primary text-white">{article.category}</span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{article.date}</p>
        <h3 className="font-black uppercase text-xl leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2 italic tracking-tighter">
          {article.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-3 mb-6 font-medium leading-relaxed">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-widest text-primary italic">Lire l'article</span>
          <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
      </div>
    </Link>
  );
}
