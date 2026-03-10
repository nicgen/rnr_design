import PlaceholderImage from "../components/PlaceholderImage";
import SectionNav from "../components/SectionNav";

const navLinks = [
  { label: "Dernières Actus", path: "/actualites-medias", exact: true },
  { label: "Galeries Photos", path: "/actualites-medias/photos", exact: true },
  { label: "Vidéos / Web TV", path: "/actualites-medias/videos", exact: true },
];

const VideoCard = ({ title, duration, date }) => (
  <div className="wireframe-border p-4 flex flex-col gap-4 bg-white hover:-translate-y-1 transition-transform cursor-pointer group">
    <div className="relative overflow-hidden aspect-video">
      <PlaceholderImage className="w-full h-full" />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <span className="material-symbols-outlined text-4xl text-white">play_circle</span>
      </div>
      <span className="absolute bottom-2 right-2 bg-black text-white text-[10px] font-black px-2 py-1">{duration}</span>
    </div>
    <div>
      <h3 className="font-black uppercase text-[15px] leading-tight line-clamp-2">{title}</h3>
      <p className="text-xs font-bold mt-1 text-slate-500">{date}</p>
    </div>
  </div>
);

export default function Videos() {
  const videos = Array(6).fill({
    title: "Résumé complet : RNR vs. Stade Niçois (J18)",
    duration: "4:32",
    date: "Aujourd'hui"
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Actualités & Médias</h1>
        <p className="text-lg">Résumés de matchs, interviews et immersion dans la vie du club.</p>
      </div>

      <SectionNav links={navLinks} />

      {/* Featured Video */}
      <div className="mb-16 wireframe-border p-1">
        <div className="relative aspect-video w-full bg-slate-100 flex items-center justify-center cursor-pointer group">
          <PlaceholderImage className="absolute inset-0 w-full h-full opacity-50" />
          <span className="material-symbols-outlined text-8xl text-black relative z-10 group-hover:scale-110 transition-transform">play_circle</span>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
            <span className="bg-primary text-white text-[10px] font-black uppercase px-2 py-1 mb-2 inline-block">Inside RNR</span>
            <h2 className="text-3xl font-black uppercase">Dans les vestiaires après la victoire (Episode 4)</h2>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <h3 className="text-2xl font-black uppercase mb-6">Dernières Vidéos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {videos.map((vid, i) => (
          <VideoCard key={i} {...vid} />
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
