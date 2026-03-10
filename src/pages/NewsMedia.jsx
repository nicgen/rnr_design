import PlaceholderImage from "../components/PlaceholderImage";
import SectionNav from "../components/SectionNav";

const navLinks = [
  { label: "Dernières Actus", path: "/actualites-medias", exact: true },
  { label: "Galeries Photos", path: "/actualites-medias/photos", exact: true },
  { label: "Vidéos / Web TV", path: "/actualites-medias/videos", exact: true },
];

const ArticleCard = ({ category, title, date, excerpt }) => (
  <div className="wireframe-border p-4 flex flex-col gap-4 bg-white relative hover:-translate-y-1 transition-transform cursor-pointer">
    <span className="absolute top-6 left-6 bg-primary text-white text-[10px] font-black uppercase px-2 py-1 z-10">#{category}</span>
    <PlaceholderImage className="aspect-video" />
    <div>
      <h3 className="font-black uppercase text-lg leading-tight">{title}</h3>
      <p className="text-xs font-bold mt-1 text-slate-500">{date}</p>
    </div>
    <p className="text-sm text-slate-600 line-clamp-3">{excerpt}</p>
  </div>
);

export default function NewsMedia() {
  const articles = Array(9).fill({
    category: "Club",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "12 Mars 2026",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget elementum nisl, non tempus ex."
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Actualités & Médias</h1>
        <p className="text-lg">Retrouvez toutes les dernières informations sur le Rouen Normandie Rugby.</p>
      </div>

      <SectionNav links={navLinks} />

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        <button className="bg-black text-white px-6 py-2 font-black uppercase text-xs hover:bg-black/80 whitespace-nowrap">Toutes</button>
        <button className="bg-slate-200 text-black px-6 py-2 font-black uppercase text-xs hover:bg-slate-300 whitespace-nowrap">L'Équipe Pro</button>
        <button className="bg-slate-200 text-black px-6 py-2 font-black uppercase text-xs hover:bg-slate-300 whitespace-nowrap">Formation</button>
        <button className="bg-slate-200 text-black px-6 py-2 font-black uppercase text-xs hover:bg-slate-300 whitespace-nowrap">Club</button>
        <button className="bg-slate-200 text-black px-6 py-2 font-black uppercase text-xs hover:bg-slate-300 whitespace-nowrap">Revue de Presse</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {articles.map((article, i) => (
          <ArticleCard key={i} {...article} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
        <button className="w-10 h-10 flex border-2 border-black items-center justify-center font-bold hover:bg-slate-100 disabled:opacity-50 material-symbols-outlined rounded-none">chevron_left</button>
        <button className="w-10 h-10 flex bg-black text-white items-center justify-center font-bold">1</button>
        <button className="w-10 h-10 flex border-2 border-black items-center justify-center font-bold hover:bg-slate-100">2</button>
        <button className="w-10 h-10 flex border-2 border-black items-center justify-center font-bold hover:bg-slate-100">3</button>
        <span className="px-2 font-bold">...</span>
        <button className="w-10 h-10 flex border-2 border-black items-center justify-center font-bold hover:bg-slate-100">8</button>
        <button className="w-10 h-10 flex border-2 border-black items-center justify-center font-bold hover:bg-slate-100 material-symbols-outlined rounded-none">chevron_right</button>
      </div>
    </div>
  );
}
