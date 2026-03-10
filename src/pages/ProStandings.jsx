import SectionNav from "../components/SectionNav";

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
    { pos: 4, team: "RC MASSY ESSONNE", played: 20, won: 14, draw: 0, lost: 6, diff: 130, pts: 73 },
    { pos: 6, team: "SO CHAMBÉRIEN", played: 20, won: 14, draw: 0, lost: 6, diff: 236, pts: 72 },
    { pos: 7, team: "NIORT RC", played: 20, won: 11, draw: 0, lost: 9, diff: -51, pts: 56 },
    { pos: 7, team: "ROUEN NORMANDIE RUGBY", played: 20, won: 11, draw: 0, lost: 9, diff: 69, pts: 56 },
    { pos: 9, team: "US BRESSANE", played: 21, won: 10, draw: 0, lost: 11, diff: -65, pts: 51 },
    { pos: 10, team: "RC SURESNES", played: 20, won: 8, draw: 1, lost: 11, diff: 6, pts: 46 },
    { pos: 11, team: "CS BOURGOIN JALLIEU", played: 20, won: 7, draw: 1, lost: 12, diff: -44, pts: 39 },
    { pos: 12, team: "RENNES ETUDIANTS CLUB", played: 20, won: 3, draw: 2, lost: 15, diff: -247, pts: 21 },
    { pos: 13, team: "OL MARCQUOIS RUGBY", played: 20, won: 2, draw: 0, lost: 18, diff: -334, pts: 14 },
    { pos: 14, team: "STADO TARBES", played: 20, won: 2, draw: 0, lost: 18, diff: -572, pts: 8 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Classement Nationale</h1>
        <p className="text-lg">Suivez le classement officiel du championnat de Nationale pour la saison 2025-2026.</p>
      </div>

      <SectionNav links={navLinks} />

      <div className="wireframe-border overflow-x-auto mt-8 max-w-5xl mx-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-black text-white uppercase text-xs font-bold">
            <tr>
              <th className="p-4 text-center">Pos</th>
              <th className="p-4">Club</th>
              <th className="p-4 text-center">J</th>
              <th className="p-4 text-center">G</th>
              <th className="p-4 text-center">N</th>
              <th className="p-4 text-center">P</th>
              <th className="p-4 text-center">+/-</th>
              <th className="p-4 text-center text-primary font-black">PTS</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-black">
            {standings.map((team, index) => (
              <tr 
                key={index} 
                className={`transition-colors hover:bg-slate-50 ${
                  team.team === "ROUEN NORMANDIE RUGBY" ? "bg-primary/10 border-l-4 border-l-primary font-bold" : ""
                } ${index < 6 ? "bg-slate-50/50" : ""}`}
              >
                <td className="p-4 text-center font-bold">
                  {index < 2 ? (
                    <span className="bg-primary text-white w-6 h-6 inline-flex items-center justify-center rounded-full text-xs">{team.pos}</span>
                  ) : index < 6 ? (
                    <span className="bg-black text-white w-6 h-6 inline-flex items-center justify-center rounded-full text-xs">{team.pos}</span>
                  ) : index >= 12 ? (
                    <span className="bg-red-600 text-white w-6 h-6 inline-flex items-center justify-center rounded-full text-xs">{team.pos}</span>
                  ) : (
                    team.pos
                  )}
                </td>
                <td className={`p-4 font-bold ${team.team === "ROUEN NORMANDIE RUGBY" ? "text-primary uppercase" : ""}`}>{team.team}</td>
                <td className="p-4 text-center">{team.played}</td>
                <td className="p-4 text-center text-green-600">{team.won}</td>
                <td className="p-4 text-center">{team.draw}</td>
                <td className="p-4 text-center text-red-600">{team.lost}</td>
                <td className="p-4 text-center">{team.diff > 0 ? `+${team.diff}` : team.diff}</td>
                <td className="p-4 text-center font-black text-base">{team.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Legend */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 sm:gap-8 mt-8 text-xs font-bold uppercase py-4 border-t-2 border-slate-200 max-w-5xl mx-auto">
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-primary rounded-full"></span> Qualifiés Demi-finales</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-black rounded-full"></span> Qualifiés Barrages</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-600 rounded-full"></span> Relégables</div>
      </div>
    </div>
  );
}
