import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import heroStadium from "/assets/images/ui/www_leclub.webp";
import imgHeroBg from "/assets/images/ui/hero_bg.webp";
import imgDiochon from "/assets/images/ui/visuel_stade.webp";

const navLinks = [
  { label: "Histoire & Palmarès", path: "/le-club", exact: true },
  { label: "Organigramme", path: "/le-club/organigramme", exact: true },
  { label: "Le Stade", path: "/le-club/infrastructures", exact: true },
  { label: "Nos Engagements", path: "/le-club/engagements", exact: true },
];

const timeline = [
  {
    year: "1920",
    title: "Fondation",
    body: "Le Racing Club de Rouen voit le jour — premier club de rugby de la ville. Pendant plus de 80 ans, il évolue à travers les divisions fédérales, posant les premières pierres d'une culture rugby en Normandie.",
    img: imgHeroBg,
    imgType: "photo",
  },
  {
    year: "2009",
    title: "Création du Stade Rouennais",
    body: "Une équipe de passionnés fonde un nouveau club avec l'ambition de structurer durablement le rugby rouennais autour de valeurs fortes. L'objectif : hisser le rugby normand sur la scène nationale.",
    img: "https://rouennormandierugby.fr/wp-content/uploads/2019/01/LOGO_SR.png",
    imgType: "logo",
  },
  {
    year: "2013",
    title: "L'arrivée de Richard Hill",
    body: "L'ancien capitaine de l'Angleterre et finaliste de la Coupe du Monde 1991 prend les rênes du club en tant que Directeur Général. Son expertise haut niveau propulse le club de la Fédérale 2 vers la Fédérale 1 dès 2014-2015.",
    img: null,
    imgType: null,
  },
  {
    year: "2017",
    title: "Le Premier Titre",
    body: "Sous la présidence de Jean-Louis Louvel et Eric Leroy, le club se professionnalise et devient le Rouen Normandie Rugby. Richard Hill mène l'équipe au titre du Challenge Jean Prat — premier titre normand au plus haut niveau amateur.",
    img: "https://rouennormandierugby.fr/wp-content/uploads/2019/01/TJP_5.jpg",
    imgType: "photo",
  },
  {
    year: "2019",
    title: "Montée Historique en Pro D2",
    body: "Le 1er juin 2019, le RNR remporte la finale de Fédérale 1 Elite face à Valence-Romans (28-25), avec un essai décisif de Corentin Brutus. Le 24 mai, la demi-finale au Stade Diochon contre Albi ouvre les portes du monde professionnel. Premier club normand en Pro D2.",
    img: imgDiochon,
    imgType: "photo",
  },
];

export default function Club() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="L'Âme des Lions"
        subtitle="Histoire & Palmarès du RNR"
        bgImage={heroStadium}
        subNavLinks={navLinks}
      />

      <div className="container-premium pb-24">
        {/* PALMARÈS */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-black text-white p-12 relative overflow-hidden group border-l-8 border-primary shadow-2xl">
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <span className="material-symbols-outlined text-7xl text-primary drop-shadow-[0_0_15px_rgba(219,39,40,0.5)]">emoji_events</span>
                  <div>
                    <h2 className="text-4xl font-black italic tracking-tighter uppercase leading-none">2 Titres</h2>
                    <p className="text-primary font-bold uppercase text-(--text-xs) tracking-[0.3em] mt-1">Champion de France</p>
                  </div>
                </div>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center group/item hover:translate-x-2 transition-transform duration-300">
                    <span className="text-3xl font-black italic text-white/20 group-hover/item:text-primary transition-colors">2017</span>
                    <span className="text-lg font-black uppercase italic tracking-tighter">Challenge Jean Prat</span>
                  </div>
                  <div className="flex justify-between items-center group/item hover:translate-x-2 transition-transform duration-300 border-t border-white/5 pt-4">
                    <span className="text-3xl font-black italic text-white/20 group-hover/item:text-primary transition-colors">2019</span>
                    <span className="text-lg font-black uppercase italic tracking-tighter">Fédérale 1 Elite</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
            </div>

            <div className="bg-slate-900 text-white p-12 relative overflow-hidden group border-r-8 border-white/20 shadow-2xl">
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <span className="material-symbols-outlined text-7xl text-white/40 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">military_tech</span>
                  <div>
                    <h2 className="text-4xl font-black italic tracking-tighter uppercase leading-none">Accession</h2>
                    <p className="text-white/40 font-bold uppercase text-(--text-xs) tracking-[0.3em] mt-1">Niveau Professionnel</p>
                  </div>
                </div>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex flex-col">
                    <span className="text-6xl font-black italic text-white leading-none">2019</span>
                    <p className="text-lg font-bold italic text-primary uppercase mt-2 tracking-tighter">Montée Historique en Pro D2</p>
                    <p className="text-sm text-white/50 mt-4 leading-relaxed font-medium">
                      24 mai 2019 — Le Rouen Normandie Rugby devient le premier club normand à atteindre le monde professionnel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-20 relative overflow-hidden">
          <div className="mb-16">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Notre Parcours</h3>
            <h4 className="text-5xl font-black uppercase tracking-tighter italic">L'odyssée du RNR</h4>
          </div>

          <div className="relative space-y-32">
            <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-slate-200 hidden lg:block"></div>

            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const hasImage = item.img !== null;
              return (
                <div key={item.year} className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
                  {/* Text block */}
                  <div className={`${hasImage ? (isEven ? 'order-2 lg:order-1 lg:text-right' : 'order-2') : 'lg:col-span-2'}`}>
                    <span className={`text-8xl font-black italic text-slate-100 group-hover:text-primary/10 transition-colors duration-700 leading-none mb-4 absolute top-0 -z-10 ${isEven ? 'lg:-right-4 left-0 lg:left-auto' : 'left-0'}`}>{item.year}</span>
                    <h5 className="text-3xl font-black uppercase italic mb-4 tracking-tighter group-hover:text-primary transition-colors">{item.title}</h5>
                    <p className={`text-slate-500 leading-relaxed text-lg font-medium italic ${hasImage ? (isEven ? 'lg:pl-12' : 'lg:pr-12') : 'max-w-2xl'}`}>{item.body}</p>
                  </div>

                  {/* Image block */}
                  {hasImage && (
                    <div className={`${isEven ? 'order-1 lg:order-2' : 'order-1'} relative aspect-video overflow-hidden shadow-2xl ${item.imgType === 'logo' ? 'flex items-center justify-center' : ''}`}>
                      {item.imgType === 'logo' ? (
                        <img src={item.img} alt={item.title} className="w-1/2 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                      ) : (
                        <>
                          <img src={item.img} alt={item.year} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </>
                      )}
                    </div>
                  )}

                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10 shadow-[0_0_15px_rgba(219,39,40,0.5)]"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* DEVISE */}
        <section className="py-24 bg-slate-50 border-y border-slate-200 mt-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] select-none pointer-events-none flex flex-col justify-around">
            <p className="text-[200px] font-black italic whitespace-nowrap -translate-x-20">PASSION • ENGAGEMENT • SOLIDARITÉ</p>
            <p className="text-[200px] font-black italic whitespace-nowrap translate-x-20">HUMILITÉ • FORCE • TERRITOIRE</p>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <span className="material-symbols-outlined text-6xl text-primary mb-8 opacity-40">format_quote</span>
            <blockquote className="text-4xl font-black italic uppercase tracking-tighter leading-tight mb-8">
              "Ensemble, plus vite plus loin."
            </blockquote>
            <p className="text-sm font-black uppercase tracking-widest text-slate-400">— Devise du Rouen Normandie Rugby</p>
          </div>
        </section>
      </div>
    </div>
  );
}
