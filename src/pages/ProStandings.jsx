import PageHero from "../components/PageHero";
import heroImg from "/assets/images/ui/www_equipe_pro.webp";

const navLinks = [
  { label: "Effectif (Joueurs & Staff)", path: "/equipe-pro", exact: true },
  { label: "Calendrier & Résultats", path: "/equipe-pro/calendrier", exact: true },
  { label: "Classement", path: "/equipe-pro/classement", exact: true },
];

export default function ProStandings() {
  const standings = [
    { pos: 1, team: "SC ALBI", played: 20, won: 16, draw: 1, lost: 3, diff: 181, pts: 85 },
    { pos: 2, team: "STADE NIÇOIS", played: 20, won: 16, draw: 1, lost: 3, diff: 288, pts: 81 },
    { pos: 3, team: "RC NARBONNAIS", played: 21, won: 15, draw: 0, lost: 6, diff: 243, pts: 76 },
    { pos: 4, team: "CA PÉRIGOURDIN", played: 20, won: 14, draw: 0, lost: 6, diff: 160, pts: 73 },
    { pos: 5, team: "RC MASSY ESSONNE", played: 20, won: 14, draw: 0, lost: 6, diff: 130, pts: 73 },
    { pos: 6, team: "SO CHAMBÉRIEN", played: 20, won: 14, draw: 0, lost: 6, diff: 236, pts: 72 },
    { pos: 7, team: "NIORT RC", played: 20, won: 11, draw: 0, lost: 9, diff: -51, pts: 56 },
    { pos: 8, team: "ROUEN NORMANDIE RUGBY", played: 20, won: 11, draw: 0, lost: 9, diff: 69, pts: 56 },
    { pos: 9, team: "US BRESSANE", played: 21, won: 10, draw: 0, lost: 11, diff: -65, pts: 51 },
    { pos: 10, team: "RC SURESNES", played: 20, won: 8, draw: 1, lost: 11, diff: 6, pts: 46 },
    { pos: 11, team: "CS BOURGOIN JALLIEU", played: 20, won: 7, draw: 1, lost: 12, diff: -44, pts: 39 },
    { pos: 12, team: "RENNES ETUDIANTS CLUB", played: 20, won: 3, draw: 2, lost: 15, diff: -247, pts: 21 },
    { pos: 13, team: "OL MARCQUOIS RUGBY", played: 20, won: 2, draw: 0, lost: 18, diff: -334, pts: 14 },
    { pos: 14, team: "STADO TARBES", played: 20, won: 2, draw: 0, lost: 18, diff: -572, pts: 8 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Classement Nationale"
        subtitle="Suivez l'évolution des Lions au classement officiel de la Nationale pour la saison 2025-2026."
        bgImage={heroImg}
        subNavLinks={navLinks}
      />

      <div className="container-premium pb-24 pt-12">
        <div className="bg-white border border-slate-100 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-white italic uppercase text-xs tracking-widest font-black">
                  <th className="p-6 text-center">Pos</th>
                  <th className="p-6">Club</th>
                  <th className="p-6 text-center">J</th>
                  <th className="p-6 text-center">G</th>
                  <th className="p-6 text-center">N</th>
                  <th className="p-6 text-center">P</th>
                  <th className="p-6 text-center">+/-</th>
                  <th className="p-6 text-center text-primary">PTS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {standings.map((team, index) => (
                  <tr
                    key={index}
                    className={`group transition-all duration-300 hover:bg-slate-50 ${team.team === "ROUEN NORMANDIE RUGBY" ? "bg-primary/[0.03] relative z-10" : ""}`}
                  >
                    <td className="p-5 text-center font-black italic text-lg tracking-tighter">
                      <div className="flex items-center justify-center">
                        {index < 2 ? (
                          <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full text-xs shadow-lg">
                            {team.pos}
                          </span>
                        ) : index < 6 ? (
                          <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full text-xs">
                            {team.pos}
                          </span>
                        ) : index >= 12 ? (
                          <span className="bg-slate-200 text-slate-500 w-8 h-8 flex items-center justify-center rounded-full text-xs">
                            {team.pos}
                          </span>
                        ) : (
                          <span className="text-slate-400">{team.pos}</span>
                        )}
                      </div>
                    </td>
                    <td className={`p-5 font-black italic text-base md:text-xl tracking-tighter uppercase ${team.team === "ROUEN NORMANDIE RUGBY" ? "text-primary" : "text-black"}`}>
                      {team.team}
                      {team.team === "ROUEN NORMANDIE RUGBY" && (
                        <span className="ml-2 inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                      )}
                    </td>
                    <td className="p-5 text-center font-bold text-slate-400">{team.played}</td>
                    <td className="p-5 text-center font-bold text-green-600">{team.won}</td>
                    <td className="p-5 text-center font-bold text-slate-400">{team.draw}</td>
                    <td className="p-5 text-center font-bold text-red-600">{team.lost}</td>
                    <td className="p-5 text-center font-bold text-slate-500">{team.diff > 0 ? `+${team.diff}` : team.diff}</td>
                    <td className="p-5 text-center font-black italic text-2xl tracking-tighter text-black">{team.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-6 md:gap-12 mt-12 text-xs font-black uppercase tracking-widest text-slate-400 py-8 border-t border-slate-100 max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/30"></span>
            Qualifiés Demi-finales
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 bg-black rounded-full shadow-lg shadow-black/30"></span>
            Qualifiés Barrages
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 bg-slate-200 rounded-full"></span>
            Relégables
          </div>
        </div>
      </div>
    </div>
  );
}
