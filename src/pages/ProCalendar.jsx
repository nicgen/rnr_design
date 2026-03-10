import PlaceholderImage from "../components/PlaceholderImage";
import SectionNav from "../components/SectionNav";

const navLinks = [
  { label: "Effectif (Joueurs & Staff)", path: "/equipe-pro", exact: true },
  { label: "Calendrier & Résultats", path: "/equipe-pro/calendrier", exact: true },
  { label: "Classement", path: "/equipe-pro/classement", exact: true },
];

export default function ProCalendar() {
  const matches = [
    { day: "J19", date: "13/02/2026", home: "Rouen", away: "Rennes EC", score: "21 - 25", homeWin: false },
    { day: "J20", date: "21/02/2026", home: "Stade Niçois", away: "Rouen", score: "40 - 19", homeWin: true },
    { day: "J21", date: "27/02/2026", home: "Rouen", away: "Périgourdin", score: "20 - 19", homeWin: true },
    { day: "J22", date: "07/03/2026", home: "CS Bourgoin", away: "Rouen", score: "11 - 33", homeWin: false },
    { day: "J23", date: "20/03/2026", home: "Rouen", away: "Massy", time: "20:00", isNext: true },
    { day: "J24", date: "28/03/2026", home: "Niort RC", away: "Rouen", time: "18:00" },
    { day: "J25", date: "10/04/2026", home: "Rouen", away: "Chambéry", time: "19:30" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Calendrier & Résultats</h1>
        <p className="text-lg">Suivez les performances du RNR tout au long du championnat de Nationale.</p>
      </div>

      <SectionNav links={navLinks} />

      <div className="flex gap-4 mb-8 flex-wrap">
        <button className="bg-black text-white px-6 py-2 font-black uppercase text-xs">Tous les matchs</button>
        <button className="bg-slate-200 text-black px-6 py-2 font-black uppercase text-xs hover:bg-slate-300">Phase Aller</button>
        <button className="bg-slate-200 text-black px-6 py-2 font-black uppercase text-xs hover:bg-slate-300">Phase Retour</button>
      </div>

      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {matches.map((match, i) => (
          <div key={i} className={`wireframe-border p-4 flex flex-col md:flex-row items-center justify-between font-bold w-full gap-4 md:gap-0 transition-colors ${match.isNext ? 'bg-primary/5 border-l-4 border-l-primary' : 'bg-white hover:bg-slate-50'}`}>
            <div className="flex justify-between w-full md:w-auto px-4 md:px-0">
              <div className="w-16 text-center text-sm">{match.day}</div>
              <div className="w-32 text-center text-xs text-slate-500">{match.date}</div>
            </div>
            
            <div className="flex-1 flex justify-center items-center gap-2 md:gap-6 text-xl md:text-2xl font-black italic w-full">
              <span className={`uppercase text-right flex-1 truncate ${match.home === "Rouen" ? 'text-primary' : ''}`}>{match.home}</span>
              
              <div className="flex items-center gap-2">
                <PlaceholderImage className="w-8 h-8 rounded-full border border-slate-200" />
                
                {match.score ? (
                  <span className="bg-black text-white px-4 py-1 text-xl flex-shrink-0 min-w-[100px] text-center">{match.score}</span>
                ) : (
                  <span className="bg-slate-200 text-slate-600 px-4 py-1 text-lg flex-shrink-0 min-w-[100px] text-center">{match.time}</span>
                )}
                
                <PlaceholderImage className="w-8 h-8 rounded-full border border-slate-200" />
              </div>

              <span className={`uppercase text-left flex-1 truncate ${match.away === "Rouen" ? 'text-primary' : ''}`}>{match.away}</span>
            </div>

            <div className="w-full md:w-32 text-center md:text-right">
              {match.score ? (
                <span className="text-xs font-black uppercase text-slate-400">Terminé</span>
              ) : match.home === "Rouen" ? (
                <button className="text-[10px] bg-black text-white font-black uppercase px-4 py-2 hover:bg-primary transition-colors">
                  Billetterie
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
