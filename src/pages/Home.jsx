import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';
import MagneticWrapper from '../components/MagneticWrapper';
import logoRNR from '/resources/logo_RNR_alpha.png';
import stadiumHero from '/resources/hero_bg.jpg';
import presidentImg from '/resources/Matinee-conviviale-avec-le-RNR.jpeg';
import jerseyImg from '/resources/Maillot-Domicile-25-26.webp';
import galaImg from '/resources/gala.jpeg';
import partnersImg from '/resources/mise-en-avant-partenaires.jpeg';
import player1Img from '/resources/Soig_MINGANT.jpg';
import player2Img from '/resources/Killian_LAISNE.jpg';
import player3Img from '/resources/Marius_BUNEL.jpg';
import fansImg from '/resources/Tous-derriere-les-Lions.jpeg';
import delphineImg from '/resources/Delphine_Bunel.jpg';
import vipBg from '/resources/vip_bg.png';



const PlaceholderImage = ({ className }) => (
  <div className={`bg-slate-200 border border-slate-300 flex items-center justify-center ${className}`}>
    <span className="material-symbols-outlined text-slate-400">image</span>
  </div>
);

export default function Home() {
  const marqueeRef = useRef(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Show the Match banner after a short delay
    const bannerTimer = setTimeout(() => setShowBanner(true), 500);
    return () => clearTimeout(bannerTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (marqueeRef.current) {
        // Le décalage est proportionnel au scroll (0.3 = vitesse)
        const offset = window.scrollY * 0.3;
        marqueeRef.current.style.transform = `translate3d(calc(-10% - ${offset}px), 0, 0)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextMatch = {
    date: "20 MARS 2026 - 20:00",
    stadium: "STADE ROBERT DIOCHON",
    home: { name: "ROUEN", logo: logoRNR },
    away: { name: "MASSY", logo: null },
    competition: "PRO D2 - JOURNÉE 25"
  };

  const news = [
    { id: "changement-presidence", title: "CHANGEMENT DE PRÉSIDENCE.", category: "CLUB", author: "PHILIPPE MARTY PASSE LE RELAIS", img: delphineImg, size: "large", date: "22 MARS 2024" },
    { id: "maillot-domicile-25-26", title: "MAILLOT DOMICILE 25-26", category: "BOUTIQUE", author: "NOUVELLE COLLECTION", img: jerseyImg, size: "small", date: "20 MARS 2026" },
    { id: "soiree-de-gala-art", title: "L'ART AU CŒUR DE NOTRE SOIRÉE DE GALA", category: "ÉVÉNEMENT", author: "SOIRÉE CARITATIVE D'EXCEPTION", img: galaImg, size: "small", date: "18 MARS 2026" },
    { id: "mise-en-avant-partenaires", title: "MISE EN AVANT DE NOS PARTENAIRES", category: "PARTENAIRES", author: "EXPÉRIENCE CLUB AFFAIRES", img: partnersImg, size: "small", date: "15 MARS 2026" }
  ];

  const secondaryNews = [
    { id: "prolongation-soig-mingant", title: "SOÏG MINGANT PROLONGE AVEC LE RNR !", category: "PROLONGATION", subtitle: "RENOUVELLEMENT", img: player1Img },
    { id: "prolongation-killian-laisne", title: "KILLIAN LAISNÉ PROLONGE AVEC LE RNR !", category: "PROLONGATION", subtitle: "RENOUVELLEMENT", img: player2Img },
    { id: "prolongation-marius-bunel", title: "MARIUS BUNEL PROLONGE JUSQU'EN 2028 !", category: "PROLONGATION", subtitle: "ENGAGEMENT", img: player3Img },
    { id: "tous-derriere-les-lions", title: "TOUS DERRIÈRE LES LIONS", category: "LIONS", subtitle: "NATIONAL 1", img: fansImg }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] w-full flex-shrink-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={stadiumHero} alt="Stadium" className="absolute inset-0 w-full h-full object-cover" />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/resources/video_bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[clamp(4rem,9vw,12rem)] font-black text-white uppercase mt-12 leading-[0.9] mb-6 tracking-tighter font-barlow-condensed italic drop-shadow-lg">
            TOUS NORMANDS,<br />TOUS RNR!
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium max-w-3xl italic opacity-90 drop-shadow-md">
            Persévérance, et force brute, le RNR avance !
          </p>
        </div>

        {/* Matchbar sticky at bottom of hero */}
        <div className={`absolute bottom-6 left-0 right-0 z-20 hidden md:block px-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${showBanner ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <div className="max-w-[1400px] mx-auto flex items-stretch h-28 bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] -skew-x-12 border-l-4 border-primary overflow-visible relative">
            
            {/* 1. Countdown block */}
            <div className="flex items-center gap-10 px-12 relative border-r border-white/10 skew-x-12">
              <span className="absolute -top-3 -left-2 text-[10px] font-black uppercase bg-primary text-white px-3 py-1 tracking-[0.2em] -skew-x-12 shadow-lg">
                PROCHAIN MATCH
              </span>
              
              <div className="flex gap-6 items-center">
                <div className="text-center group flex flex-col items-center"><p className="text-3xl font-black text-white group-hover:text-primary transition-colors leading-none font-barlow-condensed">11</p><p className="text-[10px] uppercase font-bold text-white/40 tracking-widest mt-1">Jours</p></div>
                <div className="text-center group flex flex-col items-center"><p className="text-3xl font-black text-white group-hover:text-primary transition-colors leading-none font-barlow-condensed">08</p><p className="text-[10px] uppercase font-bold text-white/40 tracking-widest mt-1">Hrs</p></div>
                <div className="text-center group flex flex-col items-center"><p className="text-3xl font-black text-white group-hover:text-primary transition-colors leading-none font-barlow-condensed">00</p><p className="text-[10px] uppercase font-bold text-white/40 tracking-widest mt-1">Min</p></div>
              </div>
            </div>
            
            {/* 2. Main encounter block */}
            <div className="flex-1 flex items-center justify-center gap-12 px-12 skew-x-12 relative border-r border-white/10">
              <div className="absolute top-2 left-6 flex items-center gap-6">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] opacity-80">PRO D2 - J25</span>
                <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em]">20 MARS</span>
              </div>
              
              <div className="flex items-center gap-5 mt-2">
                <img src={logoRNR} alt="Rouen" className="w-16 h-16 object-contain drop-shadow-md brightness-110" />
                <span className="font-black text-4xl italic uppercase text-white tracking-tight drop-shadow-sm font-barlow-condensed">Rouen</span>
              </div>
              
              <div className="flex flex-col items-center justify-center mx-4 mt-2">
                <span className="font-black text-2xl italic text-primary drop-shadow-[0_0_15px_rgba(219,39,40,0.4)] leading-none transform translate-y-[1px]">VS</span>
              </div>

              <div className="flex items-center gap-5 mt-2">
                <span className="font-black text-4xl italic uppercase text-white tracking-tight drop-shadow-sm font-barlow-condensed">Massy</span>
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#1a1a1a] flex items-center justify-center overflow-hidden shadow-lg p-1">
                  <img src="/resources/logo_MASSY.webp" alt="Massy" className="w-12 h-12 object-contain" onError={(e) => e.target.style.display = 'none'} />
                  <span className="text-black/30 text-[9px] font-black uppercase tracking-tighter absolute">MASSY</span>
                </div>
              </div>

              {/* Réservation Button Re-added */}
              <a href="#" className="bg-primary text-white font-black uppercase px-6 py-3 ml-6 hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(219,39,40,0.3)] group transform -skew-x-12 mt-2">
                <div className="skew-x-12 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm group-hover:scale-125 transition-transform font-bold">confirmation_number</span> 
                  <span className="text-sm font-barlow-condensed leading-none">RÉSERVER</span>
                </div>
              </a>
            </div>

            {/* 3. Side info blocks */}
            <div className="flex items-stretch border-l border-white/10 skew-x-12 bg-black/40 backdrop-blur-md">
              <div className="px-10 flex flex-col justify-center border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-white font-bold tracking-widest uppercase">28 MARS</span>
                  <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                </div>
                <p className="text-[11px] font-black text-white/50 uppercase mb-1 leading-none tracking-[0.2em] group-hover:text-white/80 transition-colors">DÉPLACEMENT</p>
                <p className="text-xl font-black text-white uppercase leading-none tracking-tight font-barlow-condensed group-hover:text-primary transition-colors">NIORT RC</p>
              </div>
              <div className="px-10 flex flex-col justify-center relative hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-white font-bold tracking-widest uppercase">10 AVRIL</span>
                  <span className="material-symbols-outlined text-sm text-primary">home</span>
                </div>
                <p className="text-[11px] font-black text-white/50 uppercase mb-1 leading-none tracking-[0.2em] group-hover:text-white/80 transition-colors">RÉCEPTION</p>
                <p className="text-xl font-black text-white uppercase leading-none tracking-tight font-barlow-condensed group-hover:text-primary transition-colors">CHAMBÉRY</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* À NE PAS MANQUER */}
      <section className="bg-white py-20 w-full flex-shrink-0 overflow-hidden">
        <div className="w-full mb-10 overflow-hidden flex whitespace-nowrap">
          <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
            {[...Array(12)].map((_, i) => (
              <h2 key={i} className="text-[clamp(2.5rem,5vw,6rem)] font-black uppercase tracking-tighter italic pr-8 text-black opacity-90 drop-shadow-sm font-barlow-condensed group-hover:text-primary transition-colors cursor-default whitespace-nowrap shrink-0">
                À NE PAS MANQUER <span className="text-primary mx-4 md:mx-8">/</span>
              </h2>
            ))}
          </div>
        </div>
        <div className="max-w-[1800px] w-full mx-auto px-6 xl:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 pb-12">
          {news.map((item, index) => (
            <Link 
              key={index} 
              to={`/actualites-medias/${item.id}`}
              className="relative group overflow-hidden rounded-[24px] h-[400px] md:h-[600px] lg:h-[700px] cursor-pointer border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${item.size === 'large' ? 'scale-110 group-hover:scale-125' : 'group-hover:scale-105'}`} 
              />
              
              {/* Overlay Gradient for better readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Category Tag */}
              <div className="absolute top-8 left-8">
                <div className="bg-primary text-white text-[10px] font-black px-3 py-1.5 uppercase -skew-x-12 inline-block shadow-lg">
                  <span className="inline-block skew-x-12">{item.category}</span>
                </div>
              </div>
              
              {/* Content Panel */}
              <div className="absolute bottom-10 left-8 right-8 text-left text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] font-bold mb-2 uppercase tracking-[0.2em] text-white/60">{item.author}</p>
                <h3 className="text-2xl font-black uppercase leading-tight tracking-tighter drop-shadow-2xl">
                  {item.title}
                </h3>
                <div className="w-8 h-[2px] bg-primary mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* L’ACTU DU RNR - BENTO GRID */}
      <section className="bg-white py-24 w-full flex-shrink-0">
        <div className="max-w-[1800px] w-full mx-auto px-6 xl:px-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-black uppercase tracking-tighter italic border-l-4 border-primary pl-4 md:pl-6 leading-none">L'Actu du RNR</h2>
          <MagneticWrapper force={0.4} innerForce={0.2}>
            <Link to="/actualites-medias" className="text-[10px] md:text-xs font-black uppercase text-slate-500 hover:text-primary cursor-pointer tracking-widest flex items-center gap-2 group transition-colors">
              Toutes les actualités
              <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">east</span>
            </Link>
          </MagneticWrapper>
        </div>

        <div className="max-w-[1800px] w-full mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 md:h-[600px] lg:h-[700px] w-full">
            {secondaryNews.map((item, index) => {
              // Configuration de la mosaïque Bento
              let gridClass = "";
              let titleClass = "";

              if (index === 0) {
                // Grand module à gauche (Span 2 col, Span 2 rows)
                gridClass = "md:col-span-2 md:row-span-2";
                titleClass = "text-[clamp(1.875rem,4vw,5rem)]";
              } else if (index === 1) {
                // Module horizontal en haut à droite (Span 2 col, Span 1 row)
                gridClass = "md:col-span-2 md:row-span-1";
                titleClass = "text-[clamp(1.5rem,3vw,3rem)]";
              } else {
                // Petits modules carrés en bas à droite (Span 1 col, Span 1 row)
                gridClass = "md:col-span-1 md:row-span-1";
                titleClass = "text-[clamp(1.25rem,2vw,2rem)]";
              }

              return (
                <Link key={index} to={`/actualites-medias/${item.id}`} className={`relative group overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 ${gridClass} min-h-[350px] md:min-h-0 block`}>
                  {/* Image de fond avec effet de zoom */}
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />

                  {/* Dégradé sombre pour la lisibilité */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                  {/* Badge Catégorie haut de page */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-white text-[10px] font-black px-3 py-1.5 uppercase rounded-sm shadow-lg tracking-widest block transform group-hover:-translate-y-1 transition-transform">{item.category}</span>
                  </div>

                  {/* Contenu Textuel en bas à gauche */}
                  <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col items-start text-left">
                    <p className="text-[9px] md:text-[10px] font-black mb-3 uppercase tracking-[0.3em] text-white/70 border border-white/20 backdrop-blur-md px-3 py-1 rounded-full">{item.subtitle}</p>
                    <h3 className={`font-black uppercase leading-[0.95] tracking-tighter ${titleClass} group-hover:text-primary transition-colors duration-300 drop-shadow-lg`}>
                      {item.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>



      {/* DASHBOARD SECTION: LES CHIFFRES CLÉS */}
      <section className="relative py-24 w-full flex-shrink-0 bg-slate-900 text-white overflow-hidden">
        {/* Background image for the section */}
        <div className="absolute inset-0 z-0">
          <img src={stadiumHero} alt="Stadium Statistics" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-[1800px] w-full mx-auto px-6 xl:px-12 relative z-10">
          <div className="mb-12">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Dashboard</h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter italic">Les Chiffres Clés</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr_0.9fr] gap-6">
            
            {/* Colonne Gauche: POSITION AU CLASSEMENT */}
            <Link to="/equipe-pro/classement" className="flex flex-col items-center justify-center p-8 bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl group hover:border-primary/50 hover:bg-black/50 cursor-pointer transition-all duration-500">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-4 group-hover:text-primary transition-colors">Position</h3>
              <div className="relative pointer-events-none">
                <div className="flex items-start">
                  <span className="text-[clamp(3rem,6vw,6rem)] font-black italic tracking-tighter text-primary mt-6 mr-1">#</span>
                  <span className="text-[clamp(8rem,15vw,16rem)] font-black leading-none italic tracking-tighter text-white select-none group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"><AnimatedCounter value={7} duration={1500} /></span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 font-black italic transform -skew-x-12 shadow-lg">
                  <span className="inline-block skew-x-12">SAISON 25/26</span>
                </div>
              </div>
              <p className="mt-12 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Classé sur 14 équipes</p>
            </Link>

            {/* Colonne Centre: DERNIERS RÉSULTATS */}
            <div className="flex flex-col gap-4 bg-black/30 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-2">Derniers Résultats</h3>
              <div className="flex flex-col gap-3">
                {[
                  { j: "J 22", date: "07/03/26", home: "BOURGOIN", away: "ROUEN", score: "11 - 33", win: true },
                  { j: "J 21", date: "27/02/26", home: "ROUEN", away: "PÉRIGUEUX", score: "20 - 19", win: true },
                  { j: "J 20", date: "21/02/26", home: "NICE", away: "ROUEN", score: "40 - 19", win: false },
                  { j: "J 19", date: "13/02/26", home: "ROUEN", away: "RENNES", score: "21 - 25", win: false },
                ].map((res, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 p-4 flex items-center justify-between group hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-white leading-none mb-1">{res.j}</span>
                      <span className="text-[10px] font-bold text-white/40">{res.date}</span>
                    </div>
                    <div className="flex-1 flex justify-center items-center gap-3 text-sm font-black italic">
                      <span className={`uppercase w-16 text-right truncate ${res.home === 'ROUEN' ? 'text-primary' : 'text-white'}`}>{res.home}</span>
                      <span className={`${res.win ? 'bg-primary text-white' : 'bg-white/10 text-white/40'} px-2 py-1 text-[10px] min-w-[50px] text-center transform -skew-x-12`}>
                        <span className="inline-block skew-x-12">{res.score}</span>
                      </span>
                      <span className={`uppercase w-16 text-left truncate ${res.away === 'ROUEN' ? 'text-primary' : 'text-white'}`}>{res.away}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/equipe-pro/calendrier" className="mt-4 text-[10px] font-black uppercase self-center tracking-widest text-primary hover:text-white transition-colors cursor-pointer border-b border-primary italic">
                Voir tous les résultats
              </Link>
            </div>

            {/* Colonne Droite: STATISTIQUES */}
            <div className="flex flex-col justify-between bg-black/30 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-8 italic">Statistiques</h3>
                
                <div className="flex flex-col gap-8">
                  {/* Victoires | Defaites */}
                  <div className="flex gap-8">
                    <div className="flex flex-col">
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Victoires</p>
                      <p className="text-[clamp(3.75rem,6vw,6rem)] font-black italic leading-none"><AnimatedCounter value={15} duration={1500} /></p>
                    </div>
                    <div className="flex flex-col border-l border-white/10 pl-8">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Défaites</p>
                      <p className="text-[clamp(3.75rem,6vw,6rem)] font-black italic leading-none text-white/20"><AnimatedCounter value={7} duration={1000} /></p>
                    </div>
                  </div>

                  {/* Recap Forme (Circles with letters) */}
                  <div className="flex gap-2 py-4">
                    {[
                      { l: 'V', w: true }, 
                      { l: 'V', w: true }, 
                      { l: 'D', w: false }, 
                      { l: 'N', w: false, n: true }, 
                      { l: 'V', w: true }
                    ].map((f, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300 ${f.w ? 'bg-primary text-white shadow-[0_0_15px_rgba(219,39,40,0.4)]' : f.n ? 'bg-white/20 text-white' : 'bg-white/5 text-white/30 border border-white/5'}`}>
                        {f.l}
                      </div>
                    ))}
                  </div>

                  {/* Points Marqués | Concédés */}
                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Points Marqués</p>
                      <p className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-black italic tracking-tighter"><AnimatedCounter value={468} duration={2500} /></p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Points Concédés</p>
                      <p className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-black italic tracking-tighter text-white/40"><AnimatedCounter value={382} duration={2500} /></p>
                    </div>
                  </div>

                  {/* Différence | Points Class. */}
                  <div className="flex flex-col gap-3 pt-2">
                    <div className="flex justify-between items-end border-b border-white/5 pb-2">
                       <span className="text-[10px] font-bold uppercase text-white/40 italic">Différence</span>
                       <span className="text-[clamp(1.875rem,3vw,3rem)] font-black italic text-primary"><AnimatedCounter value={86} prefix="+" duration={2000} /></span>
                    </div>
                    <div className="flex justify-between items-end">
                       <span className="text-[10px] font-bold uppercase text-white/40 italic">Points Class.</span>
                       <span className="text-[clamp(1.875rem,3vw,3rem)] font-black italic text-white"><AnimatedCounter value={56} duration={1500} /></span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle background glow */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700"></div>
            </div>

          </div>
        </div>
      </section>

      {/* LA BOUTIQUE OFFICIELLE - L'Écrin Découpé / Néon */}
      <section className="bg-black py-32 w-full flex-shrink-0 relative overflow-hidden">
        {/* Typographie Géante en Arrière-plan (Effet Filigrane) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full flex justify-center opacity-[0.03]">
          <h2 className="text-[clamp(8rem,25vw,30rem)] font-black uppercase italic leading-none whitespace-nowrap text-white">SHOP</h2>
        </div>

        <div className="max-w-[1800px] w-full mx-auto px-6 xl:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          {/* Colonne de gauche : Texte et Bouton */}
          <div className="w-full lg:w-1/3 flex flex-col items-start gap-6">
            <span className="text-[#FFCC00] font-black tracking-[0.3em] text-[10px] uppercase border border-[#FFCC00]/30 px-3 py-1 rounded-sm">Boutique Officielle</span>
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase text-white leading-[0.9] tracking-tighter">PORTONS HAUT <br />NOS COULEURS.</h2>
            <p className="text-white/60 font-medium leading-relaxed text-sm">Découvrez la nouvelle collection 25-26. Maillots officiels, vêtements d'entraînement et accessoires pour soutenir les Lions de Rouen à Diochon comme ailleurs.</p>
            <a href="http://boutique.rouennormandierugby.fr/" target="_blank" rel="noopener noreferrer" className="mt-4 bg-[#FFCC00] text-black font-black uppercase text-sm tracking-widest px-8 py-4 hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(255,204,0,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 inline-flex items-center gap-3">
              <span>VISITER LE SHOP</span>
              <span className="material-symbols-outlined text-lg">shopping_cart</span>
            </a>
          </div>

          {/* Colonne de droite : Grille de produits "suspendus" */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: "MAILLOT DOMICILE", cat: "MATCH", img: jerseyImg },
              { name: "MAILLOT EXT.", cat: "MATCH", img: jerseyImg }, // Identique en placeholder
              { name: "SWEAT TRAINING", cat: "LIFESTYLE", img: player3Img } // Placeholder
            ].map((prod, i) => (
              <a href="http://boutique.rouennormandierugby.fr/" target="_blank" rel="noopener noreferrer" key={i} className="group relative bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-between min-h-[350px] md:min-h-[400px] shadow-2xl hover:bg-[#1a1a1a] hover:border-white/30 transition-all duration-500 cursor-pointer overflow-hidden block">

                {/* Lueur Néon (s'allume au survol) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FFCC00]/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full"></div>

                <div className="w-full flex justify-between items-start mb-6 relative z-10">
                  <span className="text-white/40 font-bold text-[9px] tracking-[0.2em]">{prod.cat}</span>
                </div>

                {/* L'image détourée flottante */}
                <div className="flex-1 w-full relative flex items-center justify-center mb-6">
                  <img src={prod.img} alt={prod.name} className="h-40 md:h-48 w-auto object-contain transform group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500 relative z-10 drop-shadow-2xl brightness-90 group-hover:brightness-110 mix-blend-screen" />
                </div>

                <div className="w-full text-center relative z-10">
                  <h3 className="text-white font-black uppercase tracking-tight text-lg mb-2">{prod.name}</h3>
                  <span className="text-[10px] font-black text-[#FFCC00] uppercase tracking-widest border-b border-[#FFCC00]/30 pb-1 group-hover:border-[#FFCC00] transition-colors inline-block">VOIR LA BOUTIQUE</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>



      <section className="bg-white py-24 w-full flex-shrink-0">
        <div className="max-w-[1800px] w-full mx-auto px-6 xl:px-12 mb-12">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Réseau Business</h2>
          <h3 className="text-4xl font-black uppercase tracking-tighter italic">Le Club Affaires</h3>
        </div>
        
        <div className="max-w-[1800px] w-full mx-auto px-6 xl:px-12">
          <div className="relative min-h-[500px] flex flex-col lg:flex-row items-stretch shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-black group rounded-2xl">
            {/* VIP Background Visual */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
              <img src={vipBg} alt="VIP Club Affaires" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full lg:w-3/5 p-12 lg:p-20 flex flex-col justify-center items-start gap-8">
              <div className="flex items-center gap-6 mb-4">
                <img src={logoRNR} alt="RNR Logo" className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] animate-pulse-slow" />
                <div className="h-16 w-[1px] bg-white/20"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 leading-tight">
                  EXPÉRIENCE<br />EXCLUSIVE
                </p>
              </div>

              <h3 className="text-4xl md:text-6xl font-black uppercase leading-[1.1] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ffd700] via-[#bf953f] to-[#fcf6ba] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-barlow-condensed italic">
                PLUS QU’UN MATCH,<br />UNE EXPERIENCE PARTENAIRE.
              </h3>

              <p className="text-lg leading-relaxed text-white/70 font-medium italic max-w-2xl">
                Le Club Affaires du Rouen Normandie Rugby est un réseau dynamique regroupant plus de 260 entreprises partenaires. Véritable plateforme de networking, il permet aux acteurs économiques de la région de se rencontrer et d'échanger dans un cadre convivial et prestigieux lors de chaque rencontre à domicile. Rejoignez une communauté passionnée pour développer votre visibilité et vos opportunités d'affaires tout en soutenant l'excellence du rugby normand.
              </p>

              <button className="relative overflow-hidden bg-gradient-to-r from-[#bf953f] to-[#fcf6ba] text-black font-black uppercase px-12 py-5 hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.3)] group/btn">
                <span className="relative z-10">Devenir Partenaire</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
              </button>
            </div>

            {/* Decorative Gold Badge */}
            <div className="hidden lg:flex absolute top-12 right-12 w-32 h-32 border border-white/10 rounded-full items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                    <p className="text-3xl font-black text-[#ffd700] italic leading-none">260+</p>
                    <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest mt-1">Membres</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres Importants */}
      <section className="bg-black text-white py-24 w-full flex-shrink-0">
        <div className="max-w-[1800px] w-full mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "2", label: "titres de champions de France" },
              { val: "400", label: "licenciés au club" },
              { val: "260", label: "partenaires officiels" },
              { val: "120", label: "bénévoles engagés" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-6xl font-black mb-4 italic leading-none">{stat.val}</p>
                <div className="w-10 h-1 bg-primary mx-auto mb-4"></div>
                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉSEAUX SOCIAUX - Premium Typography */}
      <section className="bg-[#1a1a1a] py-16 w-full flex-shrink-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/resources/hero_bg.jpg')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="max-w-[1800px] w-full mx-auto px-6 xl:px-12 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <h2 className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-primary italic">Rejoignez-nous</h2>
        </div>

        <div className="w-full border-t border-white/10 flex flex-col">
          {[
            { name: "INSTAGRAM", url: "https://instagram.com/rouennormandierugby", color: "hover:text-pink-500", icon: "photo_camera" },
            { name: "FACEBOOK", url: "https://facebook.com/rouennormandierugby", color: "hover:text-blue-500", icon: "thumb_up" },
            { name: "LINKEDIN", url: "https://linkedin.com/company/rouennormandierugby", color: "hover:text-blue-400", icon: "work" },
            { name: "YOUTUBE", url: "https://youtube.com/rouennormandierugby", color: "hover:text-red-500", icon: "play_circle" }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-between px-4 md:px-12 py-4 md:py-6 border-b border-white/5 transition-all duration-500 hover:bg-white/5 overflow-hidden ${social.color}`}
            >
              {/* Animated Background Color Glow */}
              <div className="absolute left-0 top-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>

              <div className="flex items-center gap-6 md:gap-12 relative z-10">
                <span className="text-white/20 font-black text-xl md:text-3xl italic group-hover:text-primary transition-colors">
                  0{i + 1}
                </span>
                <span className="text-[clamp(2.5rem,6vw,6rem)] font-black uppercase tracking-tighter text-white/50 transition-all duration-500 group-hover:-translate-y-1 font-barlow-condensed group-hover:text-inherit">
                  {social.name}
                </span>
              </div>

              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center transform group-hover:-rotate-45 group-hover:bg-white transition-all duration-500">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-white/50 group-hover:text-black transition-colors">
                  arrow_forward
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Partenaires — Marquee Infini */}
      <section className="bg-white py-24 w-full flex-shrink-0 overflow-hidden">
        <div className="max-w-[1800px] w-full mx-auto px-6 xl:px-12 mb-14 flex justify-between items-end">
          <h2 className="text-[clamp(1.875rem,3vw,3rem)] font-black uppercase tracking-tighter border-l-4 border-primary pl-6">Partenaires</h2>
          <a href="/partenaires" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black hover:border-primary hover:text-primary transition-colors cursor-pointer">Page des partenaires</a>
        </div>

        {/* Rangée 1 — défile vers la gauche */}
        <div className="relative mb-6 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{background: 'linear-gradient(to right, white, transparent)'}}></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{background: 'linear-gradient(to left, white, transparent)'}}></div>
          <div className="animate-marquee-left flex items-center gap-12" style={{width: 'max-content'}}>
            {[...Array(2)].map((_, set) =>
              [1,2,3,4,5,6,7,8].map(i => (
                <div key={`a-${set}-${i}`} className="flex-shrink-0 w-48 h-28 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <PlaceholderImage className="w-full h-full" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Rangée 2 — défile vers la droite */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{background: 'linear-gradient(to right, white, transparent)'}}></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{background: 'linear-gradient(to left, white, transparent)'}}></div>
          <div className="animate-marquee-right flex items-center gap-12" style={{width: 'max-content'}}>
            {[...Array(2)].map((_, set) =>
              [9,10,11,12,13,14,15,16].map(i => (
                <div key={`b-${set}-${i}`} className="flex-shrink-0 w-48 h-28 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <PlaceholderImage className="w-full h-full" />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
