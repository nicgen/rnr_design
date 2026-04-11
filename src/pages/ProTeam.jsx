import { useState } from "react";
import PageHero from "../components/PageHero";
import FilterBar from "../components/FilterBar";
import heroImg from "/resources/hero_bg.jpg";

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
        <span className="tag-pill bg-black text-white">{nationality}</span>
      </div>
    </div>
    <div className="p-5 text-center relative z-10 bg-white">
      <h4 className="font-black uppercase text-xl italic tracking-tighter mb-1 group-hover:text-primary transition-colors">{name}</h4>
      <p className="text-xs font-bold text-primary uppercase tracking-widest italic">{position}</p>
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
      <PageHero
        title="Effectif Professionnel"
        subtitle="Découvrez les Lions qui portent haut les couleurs du Rouen Normandie Rugby pour la saison 2025-2026."
        bgImage={heroImg}
        subNavLinks={navLinks}
      />

      <div className="container-premium pb-24">
        <div className="pt-16">
          <FilterBar filters={["Tous", "Le Staff", "Les Joueurs"]} active={filter} onChange={setFilter} />
        </div>

        {(filter === "Tous" || filter === "Le Staff") && (
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

        {(filter === "Tous" || filter === "Les Joueurs") && positions.map((pos) => (
          <PositionSection key={pos.title} title={pos.title} players={pos.players} />
        ))}
      </div>
    </div>
  );
}
