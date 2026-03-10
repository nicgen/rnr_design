import { useState } from "react";
import PlaceholderImage from "../components/PlaceholderImage";
import SectionNav from "../components/SectionNav";

const navLinks = [
  { label: "Effectif (Joueurs & Staff)", path: "/equipe-pro", exact: true },
  { label: "Calendrier & Résultats", path: "/equipe-pro/calendrier", exact: true },
  { label: "Classement", path: "/equipe-pro/classement", exact: true },
];

const PlayerCard = ({ name, position, nationality }) => (
  <div className="wireframe-border p-4 bg-white flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 transition-transform relative overflow-hidden">
    <div className="absolute top-4 left-4 z-10 font-black uppercase text-[10px] bg-black text-white px-2 py-1">
      {nationality}
    </div>
    <div className="w-full aspect-[3/4] bg-slate-100 flex items-center justify-center">
      <PlaceholderImage className="w-full h-full object-cover mix-blend-multiply opacity-50 transition-opacity group-hover:opacity-100" />
    </div>
    <div>
      <h4 className="font-black uppercase text-xl leading-none mb-1">{name}</h4>
      <p className="font-bold text-primary uppercase text-xs">{position}</p>
    </div>
  </div>
);

const PositionSection = ({ title, players }) => (
  <div className="mb-16 border-t-2 border-slate-200 pt-8">
    <h3 className="text-3xl font-black uppercase mb-8">{title}</h3>
    <div className="grid grid-cols-4 gap-6">
      {players.map((player, i) => (
        <PlayerCard key={`${title}-${i}`} {...player} />
      ))}
    </div>
  </div>
);

export default function ProTeam() {
  const [filter, setFilter] = useState("Tous");

  const positions = [
    {
      title: "Piliers",
      players: [
        { name: "Nom Prénom", position: "Pilier gauche (1)", nationality: "FRA" },
        { name: "Nom Prénom", position: "Pilier droit (3)", nationality: "FRA" },
        { name: "Nom Prénom", position: "Pilier gauche (1)", nationality: "FRA" },
      ]
    },
    {
      title: "Talonneurs",
      players: [
        { name: "Nom Prénom", position: "Talonneur (2)", nationality: "FRA" },
        { name: "Nom Prénom", position: "Talonneur (2)", nationality: "FRA" },
      ]
    },
    {
      title: "2èmes Lignes",
      players: [
        { name: "Nom Prénom", position: "Deuxième ligne (4)", nationality: "FRA" },
        { name: "Nom Prénom", position: "Deuxième ligne (5)", nationality: "FRA" },
      ]
    },
    {
      title: "3èmes Lignes",
      players: [
        { name: "Nom Prénom", position: "Troisième ligne aile (6)", nationality: "FRA" },
        { name: "Nom Prénom", position: "Troisième ligne aile (7)", nationality: "FRA" },
        { name: "Nom Prénom", position: "Troisième ligne centre (8)", nationality: "FRA" }
      ]
    },
    {
      title: "Demis de Mêlée",
      players: [
        { name: "Nom Prénom", position: "Demi de mêlée (9)", nationality: "FRA" },
      ]
    },
    {
      title: "Demis d'Ouverture",
      players: [
        { name: "Nom Prénom", position: "Demi d'ouverture (10)", nationality: "FRA" },
      ]
    },
    {
      title: "Centres",
      players: [
        { name: "Nom Prénom", position: "Trois-quarts centre (12)", nationality: "FRA" },
        { name: "Nom Prénom", position: "Trois-quarts centre (13)", nationality: "FRA" },
      ]
    },
    {
      title: "Ailiers",
      players: [
        { name: "Nom Prénom", position: "Trois-quarts aile (11)", nationality: "FRA" },
        { name: "Nom Prénom", position: "Trois-quarts aile (14)", nationality: "FRA" },
      ]
    },
    {
      title: "Arrières",
      players: [
        { name: "Nom Prénom", position: "Arrière (15)", nationality: "FRA" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">L'Équipe Première</h1>
        <p className="text-lg">Découvrez l'effectif professionnel du Rouen Normandie Rugby pour la saison 2025-2026.</p>
      </div>

      <SectionNav links={navLinks} />

      {/* Filters */}
      <div className="flex gap-4 mb-12">
        <button 
          onClick={() => setFilter("Tous")}
          className={`px-6 py-2 font-black uppercase text-xs transition-colors ${filter === "Tous" ? "bg-black text-white" : "bg-slate-200 text-black hover:bg-slate-300"}`}
        >
          Tous
        </button>
        <button 
          onClick={() => setFilter("Staff")}
          className={`px-6 py-2 font-black uppercase text-xs transition-colors ${filter === "Staff" ? "bg-black text-white" : "bg-slate-200 text-black hover:bg-slate-300"}`}
        >
          Le Staff
        </button>
        <button 
          onClick={() => setFilter("Joueurs")}
          className={`px-6 py-2 font-black uppercase text-xs transition-colors ${filter === "Joueurs" ? "bg-black text-white" : "bg-slate-200 text-black hover:bg-slate-300"}`}
        >
          Les Joueurs
        </button>
      </div>

      {/* Le Staff */}
      {(filter === "Tous" || filter === "Staff") && (
        <div className="mb-16">
          <h3 className="text-3xl font-black uppercase mb-8">Le Staff Sportif</h3>
          <div className="grid grid-cols-4 gap-6">
            <PlayerCard name="Nom Prénom" position="Manager Sportif" nationality="FRA" />
            <PlayerCard name="Nom Prénom" position="Entraîneur des Avants" nationality="FRA" />
            <PlayerCard name="Nom Prénom" position="Entraîneur des Arrières" nationality="FRA" />
            <PlayerCard name="Nom Prénom" position="Préparateur Physique" nationality="FRA" />
          </div>
        </div>
      )}

      {/* Roster Sections */}
      {(filter === "Tous" || filter === "Joueurs") && positions.map((pos) => (
        <PositionSection key={pos.title} title={pos.title} players={pos.players} />
      ))}
    </div>
  );
}
