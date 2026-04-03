import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import SectionNav from "../components/SectionNav";

const navLinks = [
  { label: "Effectif (Joueurs & Staff)", path: "/equipe-pro", exact: true },
  { label: "Calendrier & Résultats", path: "/equipe-pro/calendrier", exact: true },
  { label: "Classement", path: "/equipe-pro/classement", exact: true },
];

const PlayerCard = ({ name, position, nationality, image }) => (
  <div className="group relative flex flex-col bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
    <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
      {image ? (
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-300">
          <span className="material-symbols-outlined text-6xl">person</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-4 left-4">
        <span className="bg-black text-white text-[10px] font-black px-2 py-1 uppercase -skew-x-12 inline-block">
          <span className="inline-block skew-x-12">{nationality}</span>
        </span>
      </div>
    </div>
    <div className="p-5 text-center relative z-10 bg-white">
      <h4 className="font-black uppercase text-xl italic tracking-tighter mb-1 group-hover:text-primary transition-colors">
        {name}
      </h4>
      <p className="text-[10px] font-bold text-primary uppercase tracking-widest italic">{position}</p>
    </div>
  </div>
);

const PositionSection = ({ title, players }) => (
  <div className="mb-20">
    <div className="flex items-center gap-6 mb-10">
      <h3 className="text-3xl font-black uppercase italic tracking-tighter whitespace-nowrap">{title}</h3>
      <div className="h-[2px] w-full bg-slate-100"></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      title: "Première Ligne",
      players: [
        { name: "Nom Prénom", position: "Pilier gauche (1)", nationality: "FRA" },
        { name: "Nom Prénom", position: "Talonneur (2)", nationality: "FRA" },
        { name: "Nom Prénom", position: "Pilier droit (3)", nationality: "FRA" },
      ]
    },
    {
      title: "Deuxième Ligne",
      players: [
        { name: "Nom Prénom", position: "Deuxième ligne (4)", nationality: "FRA" },
        { name: "Nom Prénom", position: "Deuxième ligne (5)", nationality: "FRA" },
      ]
    },
    {
      title: "Troisième Ligne",
      players: [
        { name: "Soïg MINGANT", position: "Troisième ligne aile (6)", nationality: "FRA", image: "/resources/Soig_MINGANT.jpg" },
        { name: "Killian LAISNÉ", position: "Troisième ligne aile (7)", nationality: "FRA", image: "/resources/Killian_LAISNE.jpg" },
        { name: "Nom Prénom", position: "Troisième ligne centre (8)", nationality: "FRA" }
      ]
    },
    {
      title: "Charnière",
      players: [
        { name: "Nom Prénom", position: "Demi de mêlée (9)", nationality: "FRA" },
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
        { name: "Marius BUNEL", position: "Trois-quarts aile (11)", nationality: "FRA", image: "/resources/Marius_BUNEL.jpg" },
        { name: "Nom Prénom", position: "Trois-quarts aile (14)", nationality: "FRA" },
      ]
    },
    {
      title: "Arrière",
      players: [
        { name: "Nom Prénom", position: "Arrière (15)", nationality: "FRA" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <div className="bg-slate-50 border-b border-slate-200 mb-12">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
          <Breadcrumb />
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-4">Effectif Professionnel</h1>
          <p className="text-lg text-slate-500 max-w-2xl font-medium italic">
            Découvrez les Lions qui portent haut les couleurs du Rouen Normandie Rugby pour la saison 2025-2026.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <SectionNav 
          links={navLinks} 
        />

        {/* Filters */}
        <div className="flex gap-2 mb-16 flex-wrap">
          {["Tous", "Le Staff", "Les Joueurs"].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f === "Le Staff" ? "Staff" : f === "Les Joueurs" ? "Joueurs" : "Tous")}
              className={`px-8 py-3 font-black uppercase text-[10px] tracking-widest transition-all ${
                (filter === "Tous" && f === "Tous") || (filter === "Staff" && f === "Le Staff") || (filter === "Joueurs" && f === "Les Joueurs")
                ? "bg-black text-white shadow-xl -skew-x-12" 
                : "bg-slate-100 text-slate-400 hover:text-black border border-slate-200"
              }`}
            >
              <span className={((filter === "Tous" && f === "Tous") || (filter === "Staff" && f === "Le Staff") || (filter === "Joueurs" && f === "Les Joueurs")) ? "inline-block skew-x-12" : ""}>{f}</span>
            </button>
          ))}
        </div>

        {/* Le Staff */}
        {(filter === "Tous" || filter === "Staff") && (
          <div className="mb-24">
            <div className="flex items-center gap-6 mb-10">
              <h3 className="text-4xl font-black uppercase italic tracking-tighter whitespace-nowrap">Le Staff Sportif</h3>
              <div className="h-[2px] w-full bg-slate-100"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </div>
  );
}
