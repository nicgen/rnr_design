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



// --- COMPOSANTS INTERNES D'UNIFICATION ---

const SectionHeader = ({ title, linkTo, linkLabel, isDark = false }) => (
  <div className="container-premium w-full mx-auto px-6 xl:px-12 mb-12 flex justify-between items-end gap-6">
    <h2 className={`section-title-block ${isDark ? 'text-white border-white' : 'text-slate-900 border-primary'}`}>{title}</h2>
    {linkTo && (
      <Link to={linkTo} className={`btn-link ${isDark ? 'text-white/60 hover:text-white hover:border-white' : ''}`}>
        {linkLabel}
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    )}
  </div>
);

const UnifiedCard = ({ image, title, subtitle, link, isDark = false }) => (
  <Link to={link} className="group rnr-card-premium relative h-[600px] rounded-2xl overflow-hidden border-none shadow-xl flex flex-col bg-white">
    <div className="relative flex-[0_0_55%] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
    </div>
    <div className={`p-8 pb-10 flex flex-col flex-1 ${isDark ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-md relative -mt-4 rounded-t-3xl z-10`}>
      <div className="flex flex-col gap-3">
        <h3 className={`text-2xl md:text-3xl leading-tight line-clamp-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        {subtitle && <p className={`text-sm md:text-base italic opacity-70 line-clamp-2 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{subtitle}</p>}
      </div>
      <div className="mt-auto pt-6 flex items-center gap-2 text-base md:text-lg font-black uppercase tracking-widest text-primary group-hover:translate-x-2 transition-transform">
        <span>Lire la suite</span>
        <span className="material-symbols-outlined font-bold text-xl">arrow_forward</span>
      </div>
    </div>
  </Link>
);

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
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <div className="container-premium w-full">
            <h1 className="mt-12 drop-shadow-lg text-white">
              TOUS NORMANDS,<br />TOUS RNR!
            </h1>
            <h2 className="text-white text-[clamp(1rem,1.5vw,1.4rem)] font-medium max-w-2xl mx-auto italic opacity-90 drop-shadow-md mt-6 leading-relaxed">
              Persévérance, force brute et passion : le Rouen Normandie Rugby avance, porté par tout un peuple.
            </h2>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <MagneticWrapper force={0.3}>
                <Link to="/billetterie" className="btn-cta-hero inline-flex items-center gap-4">
                  <span>PRENDRE MES PLACES</span>
                  <span className="material-symbols-outlined">local_activity</span>
                </Link>
              </MagneticWrapper>
            </div>
          </div>
        </div>

        {/* Matchbar sticky at bottom of hero */}
        <div className={`absolute bottom-6 left-0 right-0 z-20 hidden md:block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${showBanner ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <div className="container-premium">
            <div className="flex items-stretch h-[clamp(80px,10vh,112px)] bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] -skew-x-12 border-l-4 border-primary overflow-visible relative">
              
              {/* 1. Countdown block */}
              <div className="flex items-center flex-col justify-center gap-2 px-8 lg:px-12 bg-primary relative skew-x-12 h-full">
                <span className="text-sm lg:text-base font-black uppercase text-white tracking-widest leading-none -skew-x-12 text-center">
                  PROCHAIN<br/>MATCH
                </span>
                
                <div className="flex gap-4 -skew-x-12">
                  {[
                    { val: "11", label: "JOURS" },
                    { val: "08", label: "HRS" },
                  ].map((unit, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-base lg:text-lg font-black text-white italic leading-none">{unit.val}</span>
                      <span className="text-[8px] font-black text-white/70 tracking-[0.2em] mt-[2px]">{unit.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 2. Main encounter block */}
              <div className="flex-1 flex items-center justify-center gap-8 lg:gap-16 skew-x-12 relative border-r border-white/10">
                <div className="absolute top-2 left-6 hidden xl:flex items-center gap-6 -skew-x-12">
                  <span className="text-[10px] xl:text-(--text-xs) font-black text-white/50 uppercase tracking-[0.4em]">20 MARS</span>
                </div>
                
                <div className="flex items-center gap-4 lg:gap-8 -skew-x-12">
                  <img src={logoRNR} alt="Rouen" className="w-12 h-12 lg:w-20 lg:h-20 object-contain drop-shadow-md brightness-110" />
                  <span className="font-black text-2xl lg:text-5xl italic uppercase text-white tracking-tight font-barlow">ROUEN</span>
                </div>
                
                <div className="flex flex-col items-center justify-center mx-2 lg:mx-4 -skew-x-12">
                  <span className="font-black text-xl lg:text-3xl italic text-primary drop-shadow-[0_0_15px_rgba(219,39,40,0.4)]">VS</span>
                </div>

                <div className="flex items-center gap-4 lg:gap-8 -skew-x-12">
                  <span className="font-black text-2xl lg:text-5xl italic uppercase text-white tracking-tight font-barlow">MASSY</span>
                  <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-white border-2 border-[#1a1a1a] flex items-center justify-center overflow-hidden shadow-lg p-1">
                    <img src="/resources/logo_MASSY.webp" alt="Massy" className="w-8 h-8 lg:w-12 lg:h-12 object-contain" onError={(e) => e.target.style.display = 'none'} />
                  </div>
                </div>

                <a href="#" className="bg-primary text-white font-black uppercase px-4 lg:px-6 py-2.5 lg:py-3 ml-4 lg:ml-6 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg group transform -skew-x-12 mt-2 hidden lg:block">
                  <div className="skew-x-12 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm font-bold">confirmation_number</span> 
                    <span className="text-xs lg:text-sm font-barlow leading-none">BILLETTERIE</span>
                  </div>
                </a>
              </div>

              {/* 3. Side info blocks */}
              <div className="hidden xl:flex items-stretch border-l border-white/10 skew-x-12 bg-black/40 backdrop-blur-md">
                <div className="px-8 flex flex-col justify-center border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
                  <p className="text-(--text-xs) font-black text-white/50 uppercase mb-1 tracking-widest group-hover:text-white transition-colors">DÉPLACEMENT</p>
                  <p className="text-lg font-black text-white uppercase leading-none font-barlow group-hover:text-primary transition-colors">NIORT RC</p>
                </div>
                <div className="px-8 flex flex-col justify-center hover:bg-white/5 transition-colors cursor-pointer group">
                  <p className="text-(--text-xs) font-black text-white/50 uppercase mb-1 tracking-widest group-hover:text-white transition-colors">RÉCEPTION</p>
                  <p className="text-lg font-black text-white uppercase leading-none font-barlow group-hover:text-primary transition-colors">CHAMBÉRY</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* À NE PAS MANQUER */}
      <section className="bg-white py-(--space-xl) w-full flex-shrink-0 border-t border-slate-100">
        <SectionHeader title="À NE PAS MANQUER" linkTo="/actualites-medias" linkLabel="Voir tout" />
        
        <div className="container-premium w-full mx-auto px-6 xl:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UnifiedCard 
            image={partnersImg} 
            title="Soutenez votre club de coeur" 
            subtitle="Devenez partenaire et rejoignez la famille du RNR pour une saison mémorable." 
            link="/partenaires" 
          />
          <UnifiedCard 
            image={delphineImg} 
            title="Interview exclusive de Delphine Bunel" 
            subtitle="Découvrez le parcours et les ambitions de la capitaine pour cette nouvelle saison." 
            link="/actualites-medias" 
          />
          <UnifiedCard 
            image={galaImg} 
            title="Soirée de Gala 2026" 
            subtitle="Revivez les meilleurs moments de notre soirée annuelle au Kindarena." 
            link="/actualites-medias" 
          />
          <UnifiedCard 
            image={presidentImg} 
            title="Mot du Président" 
            subtitle="Jean-Louis Louvel revient sur les objectifs de la mi-saison." 
            link="/actualites-medias" 
          />
        </div>
      </section>

      {/* L’ACTU DU RNR */}
      <section className="bg-slate-50 py-(--space-xl) w-full flex-shrink-0 border-t border-slate-100">
        <SectionHeader title="L'ACTU DU RNR" linkTo="/actualites-medias" linkLabel="Toutes les actualités" />
        
        <div className="container-premium w-full mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[700px]">
            {secondaryNews.map((item, index) => {
              let gridClass = "";
              if (index === 0) gridClass = "md:col-span-2 md:row-span-2";
              else if (index === 1) gridClass = "md:col-span-2 md:row-span-1";
              else gridClass = "md:col-span-1 md:row-span-1";

              return (
                <div key={index} className={`${gridClass}`}>
                  <UnifiedCard 
                    image={item.img} 
                    title={item.title} 
                    subtitle={item.subtitle} 
                    link={`/actualites-medias/${item.id}`} 
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* DASHBOARD SECTION: LES CHIFFRES CLÉS */}
      <section className="relative py-(--space-xl) w-full flex-shrink-0 bg-slate-900 text-white overflow-hidden">
        {/* Background image for the section */}
        <div className="absolute inset-0 z-0">
          <img src={stadiumHero} alt="Stadium Statistics" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container-premium w-full mx-auto px-6 xl:px-12 relative z-10">
          <SectionHeader title="LES CHIFFRES CLÉS" />
          
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr_0.9fr] gap-6">
            
            {/* Colonne Gauche: POSITION AU CLASSEMENT */}
            <Link to="/equipe-pro/classement" className="flex flex-col items-center justify-center p-8 bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl group hover:border-primary/50 hover:bg-black/50 cursor-pointer transition-all duration-500">
              <h3 className="text-sm text-white/40 mb-4 group-hover:text-primary transition-colors">POSITION</h3>
              <div className="relative pointer-events-none">
                <div className="flex items-start">
                  <span className="text-h1 font-black italic tracking-tighter text-primary mt-6 mr-1">#</span>
                  <span className="text-[clamp(8rem,15vw,16rem)] font-black leading-none italic tracking-tighter text-white select-none">7</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 transform -skew-x-12 shadow-lg">
                  <span className="inline-block skew-x-12 font-black italic">SAISON 25/26</span>
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
                      <span className="text-(--text-xs) font-bold text-white/40">{res.date}</span>
                    </div>
                    <div className="flex-1 flex justify-center items-center gap-3 text-sm font-black italic">
                      <span className={`uppercase w-16 text-right truncate ${res.home === 'ROUEN' ? 'text-primary' : 'text-white'}`}>{res.home}</span>
                      <span className={`${res.win ? 'bg-primary text-white' : 'bg-white/10 text-white/40'} px-2 py-1 text-(--text-xs) min-w-[50px] text-center transform -skew-x-12`}>
                        <span className="inline-block skew-x-12">{res.score}</span>
                      </span>
                      <span className={`uppercase w-16 text-left truncate ${res.away === 'ROUEN' ? 'text-primary' : 'text-white'}`}>{res.away}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/equipe-pro/calendrier" className="mt-4 text-(--text-xs) font-black uppercase self-center tracking-widest text-primary hover:text-white transition-colors cursor-pointer border-b border-primary italic">
                Voir tous les résultats
              </Link>
            </div>

            {/* Colonne Droite: STATISTIQUES */}
            <div className="flex flex-col justify-between bg-black/30 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-(--text-xs) text-white/20 mb-8">Statistiques</h3>
                
                <div className="flex flex-col gap-8">
                  {/* Victoires | Defaites */}
                  <div className="flex gap-8">
                    <div className="flex flex-col">
                      <p className="text-(--text-xs) font-black uppercase tracking-widest text-primary mb-1">Victoires</p>
                      <p className="text-stat font-black italic leading-none">15</p>
                    </div>
                    <div className="flex flex-col border-l border-white/10 pl-8">
                      <p className="text-(--text-xs) font-black uppercase tracking-widest text-white/20 mb-1">Défaites</p>
                      <p className="text-stat font-black italic leading-none text-white/20">7</p>
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
                      <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-(--text-xs) font-black transition-all duration-300 ${f.w ? 'bg-primary text-white' : f.n ? 'bg-white/20 text-white' : 'bg-white/5 text-white/30 border border-white/5'}`}>
                        {f.l}
                      </div>
                    ))}
                  </div>

                  {/* Points Marqués | Concédés */}
                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                    <div>
                      <p className="text-(--text-xs) font-black uppercase tracking-widest text-white/20 mb-1">Points Marqués</p>
                      <p className="text-h3 font-black italic tracking-tighter">468</p>
                    </div>
                    <div className="text-right">
                      <p className="text-(--text-xs) font-black uppercase tracking-widest text-white/20 mb-1">Points Concédés</p>
                      <p className="text-h3 font-black italic tracking-tighter text-white/40">382</p>
                    </div>
                  </div>

                  {/* Différence | Points Class. */}
                  <div className="flex flex-col gap-3 pt-2">
                    <div className="flex justify-between items-end border-b border-white/5 pb-2">
                       <span className="text-(--text-xs) font-bold uppercase text-white/40 italic">Différence</span>
                       <span className="text-h3 font-black italic text-primary">+86</span>
                    </div>
                    <div className="flex justify-between items-end">
                       <span className="text-(--text-xs) font-bold uppercase text-white/40 italic">Points Class.</span>
                       <span className="text-h3 font-black italic text-white">56</span>
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

      {/* LA BOUTIQUE OFFICIELLE */}
      <section className="bg-black py-(--space-xl) w-full flex-shrink-0 relative overflow-hidden">
        {/* Typographie Géante en Arrière-plan */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full flex justify-center opacity-[0.03]">
          <span className="text-[clamp(8rem,25vw,30rem)] heading-bold leading-none whitespace-nowrap text-white">SHOP</span>
        </div>

        <SectionHeader title="BOUTIQUE OFFICIELLE" linkTo="http://boutique.rouennormandierugby.fr/" linkLabel="Visiter le shop" isDark />

        <div className="container-premium w-full mx-auto px-6 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 flex flex-col justify-center gap-6">
              <h2 className="text-white drop-shadow-2xl">PORTONS HAUT <br />NOS COULEURS.</h2>
              <p className="text-white/60 font-medium leading-relaxed text-sm">Découvrez la nouvelle collection 25-26. Maillots officiels et accessoires pour soutenir les Lions.</p>
            </div>
            <UnifiedCard image={jerseyImg} title="Maillot Domicile 25-26" subtitle="Le maillot officiel des Lions de Rouen." link="http://boutique.rouennormandierugby.fr/" isDark />
            <UnifiedCard image={player3Img} title="Collection Training" subtitle="Équipez-vous comme les pros au quotidien." link="http://boutique.rouennormandierugby.fr/" isDark />
            <UnifiedCard image={fansImg} title="Accessoires Supporter" subtitle="Affichez vos couleurs partout en Normandie." link="http://boutique.rouennormandierugby.fr/" isDark />
          </div>
        </div>
      </section>



      <section className="bg-white py-(--space-xl) w-full flex-shrink-0">
        <SectionHeader title="LE CLUB AFFAIRES" />
        
        <div className="container-premium w-full mx-auto px-6 xl:px-12">
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
                <p className="text-(--text-xs) font-black uppercase tracking-[0.5em] text-white/40 leading-tight">
                  EXPÉRIENCE<br />EXCLUSIVE
                </p>
              </div>

              <h3 className="text-h2 font-black uppercase leading-[1.1] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ffd700] via-[#bf953f] to-[#fcf6ba] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-barlow italic">
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

      {/* CHIFFRES DU CLUB */}
      <section className="bg-slate-900 text-white py-(--space-xl) w-full flex-shrink-0 border-t border-white/5">
        <div className="container-premium w-full mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "2", label: "titres de champions de France" },
              { val: "400", label: "licenciés au club" },
              { val: "260", label: "partenaires officiels" },
              { val: "120", label: "bénévoles engagés" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-[clamp(3.5rem,8vw,5rem)] font-black mb-4 italic leading-none text-white group-hover:text-primary transition-colors">{stat.val}</p>
                <div className="w-10 h-1 bg-primary mx-auto mb-4"></div>
                <p className="text-(--text-xs) uppercase font-black tracking-[0.2em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉSEAUX SOCIAUX */}
      <section className="bg-slate-50 py-(--space-xl) w-full flex-shrink-0 border-t border-slate-200">
        <SectionHeader title="NOUS SUIVRE" />
        
        <div className="container-premium w-full mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "INSTAGRAM", url: "https://instagram.com/rouennormandierugby", icon: "photo_camera" },
              { name: "FACEBOOK", url: "https://facebook.com/rouennormandierugby", icon: "thumb_up" },
              { name: "YOUTUBE", url: "https://youtube.com/rouennormandierugby", icon: "play_circle" },
              { name: "LINKEDIN", url: "https://linkedin.com/company/rouennormandierugby", icon: "work" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200 hover:bg-primary transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-primary">
                    {social.icon}
                  </span>
                </div>
                <span className="text-sm font-black italic tracking-widest text-slate-400 group-hover:text-white transition-colors">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="bg-white py-(--space-xl) w-full flex-shrink-0 overflow-hidden">
        <SectionHeader title="PARTENAIRES" linkTo="/partenaires" linkLabel="Voir tous les partenaires" />

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
