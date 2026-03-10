import PlaceholderImage from "../components/PlaceholderImage";
import SectionNav from "../components/SectionNav";

const navLinks = [
  { label: "Dernières Actus", path: "/actualites-medias", exact: true },
  { label: "Galeries Photos", path: "/actualites-medias/photos", exact: true },
  { label: "Vidéos / Web TV", path: "/actualites-medias/videos", exact: true },
];

const AlbumCard = ({ title, count }) => (
  <div className="wireframe-border p-4 flex flex-col gap-4 bg-white hover:-translate-y-1 transition-transform cursor-pointer group">
    <div className="relative overflow-hidden">
      <PlaceholderImage className="aspect-square w-full" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
        <span className="material-symbols-outlined text-4xl">photo_library</span>
      </div>
    </div>
    <div className="text-center">
      <h3 className="font-black uppercase text-lg leading-tight truncate">{title}</h3>
      <p className="text-xs font-bold mt-1 text-slate-500">{count} photos</p>
    </div>
  </div>
);

export default function Photos() {
  const albums = Array(8).fill({
    title: "Galerie exemple",
    count: 42
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Actualités & Médias</h1>
        <p className="text-lg">Revivez en images les meilleurs moments de la saison.</p>
      </div>

      <SectionNav links={navLinks} />

      <div className="flex justify-between items-center mb-8">
        <select className="wireframe-border p-2 font-bold text-sm uppercase outline-none">
          <option>Saison Actuelle (25/26)</option>
          <option>Saison 24/25</option>
          <option>Saison 23/24</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {albums.map((album, i) => (
          <AlbumCard key={i} title={`Album RNR ${i + 1}`} count={album.count} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 flex-wrap">
        <button className="w-10 h-10 flex border-2 border-black items-center justify-center font-bold hover:bg-slate-100 disabled:opacity-50 material-symbols-outlined rounded-none">chevron_left</button>
        <button className="w-10 h-10 flex bg-black text-white items-center justify-center font-bold">1</button>
        <button className="w-10 h-10 flex border-2 border-black items-center justify-center font-bold hover:bg-slate-100">2</button>
        <button className="w-10 h-10 flex border-2 border-black items-center justify-center font-bold hover:bg-slate-100 material-symbols-outlined rounded-none">chevron_right</button>
      </div>
    </div>
  );
}
