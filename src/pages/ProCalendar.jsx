import Breadcrumb from "../components/Breadcrumb";
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
    <div className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <div className="bg-slate-50 border-b border-slate-200 mb-12">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
          <Breadcrumb />
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-4">Calendrier & Résultats</h1>
          <p className="text-lg text-slate-500 max-w-2xl font-medium italic">
            Suivez le parcours des Lions en Nationale. Résultats, prochaines rencontres et billetterie.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <SectionNav 
          links={navLinks} 
        />


        <div className="flex flex-col max-w-5xl mx-auto">
          {matches.map((match, i) => (
            <div 
              key={i} 
              className={`group flex flex-col md:flex-row items-center justify-between py-8 border-b border-slate-100 transition-all duration-300 hover:bg-slate-50/50 px-6 ${match.isNext ? 'bg-primary/[0.02] border-l-4 border-l-primary' : ''}`}
            >
              {/* Date & Day */}
              <div className="flex flex-col items-center md:items-start w-full md:w-32 mb-4 md:mb-0">
                <span className="text-primary font-black italic text-xl tracking-tighter leading-none">{match.day}</span>
                <span className="text-(--text-xs) font-bold text-slate-400 uppercase tracking-widest mt-1">{match.date}</span>
              </div>
              
              {/* Teams & Score */}
              <div className="flex-1 flex justify-center items-center gap-4 md:gap-12 w-full mb-6 md:mb-0">
                {/* Home Team */}
                <div className="flex flex-col items-end flex-1 w-0">
                  <span className={`uppercase text-right font-black italic text-sm md:text-2xl tracking-tighter truncate w-full ${match.home === "Rouen" ? 'text-black' : 'text-slate-400'}`}>
                    {match.home}
                  </span>
                </div>
                
                {/* Result / Time */}
                <div className="flex items-center justify-center min-w-[100px] md:min-w-[160px]">
                  {match.score ? (
                    <div className="bg-black group-hover:bg-primary transition-colors text-white px-4 py-2 md:px-8 md:py-3 text-xl md:text-3xl font-black italic tracking-tighter -skew-x-12 flex items-center justify-center">
                      <span className="inline-block skew-x-12">{match.score}</span>
                    </div>
                  ) : (
                    <div className="bg-slate-100 text-slate-900 border border-slate-200 px-4 py-2 md:px-8 md:py-3 text-lg md:text-2xl font-black italic tracking-tighter -skew-x-12 flex items-center justify-center">
                      <span className="inline-block skew-x-12">{match.time}</span>
                    </div>
                  )}
                </div>

                {/* Away Team */}
                <div className="flex flex-col items-start flex-1 w-0">
                  <span className={`uppercase text-left font-black italic text-sm md:text-2xl tracking-tighter truncate w-full ${match.away === "Rouen" ? 'text-black' : 'text-slate-400'}`}>
                    {match.away}
                  </span>
                </div>
              </div>

              {/* Status / Action */}
              <div className="w-full md:w-40 flex justify-center md:justify-end">
                {match.score ? (
                  <span className="text-(--text-xs) font-black uppercase tracking-[0.2em] text-slate-300">Match Terminé</span>
                ) : match.home === "Rouen" ? (
                  <button className="bg-black text-white px-6 py-2 text-(--text-xs) font-black uppercase tracking-widest hover:bg-primary transition-all -skew-x-12">
                    <span className="inline-block skew-x-12">Billetterie</span>
                  </button>
                ) : (
                  <span className="text-(--text-xs) font-black uppercase tracking-[0.2em] text-slate-300 italic">Extérieur</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
