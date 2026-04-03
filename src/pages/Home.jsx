import { Link } from 'react-router-dom';
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
          <h1 className="text-7xl md:text-[120px] font-black text-white uppercase mt-12 leading-[0.9] mb-6 tracking-tighter font-barlow-condensed italic drop-shadow-lg">
            TOUS NORMANDS,<br />TOUS RNR!
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium max-w-3xl italic opacity-90 drop-shadow-md">
            Persévérance, et force brute, le RNR avance !
          </p>
        </div>

        {/* Matchbar sticky at bottom of hero */}
        <div className="absolute bottom-10 left-0 right-0 z-20 hidden md:block px-4">
          <div className="max-w-[1400px] mx-auto flex items-stretch h-32 -skew-x-12 overflow-visible relative border-l-4 border-primary shadow-2xl">
            
            {/* 1. Countdown block */}
            <div className="flex items-center gap-8 px-10 relative bg-[#1a1a1a] border-r border-white/10">
              {/* Aligned Badge: Top Left flush with red border */}
              <span className="absolute top-0 left-0 text-[10px] font-black uppercase bg-primary text-white px-3 py-1.5 tracking-[0.2em] shadow-lg z-30">
                PROCHAIN MATCH
              </span>
              
              <div className="skew-x-12 flex gap-6 items-center mt-4 relative">
                <div className="text-center group flex flex-col items-center"><p className="text-3xl font-black text-white group-hover:text-primary transition-colors leading-none mb-1 font-barlow-condensed">11</p><p className="text-[10px] uppercase font-bold text-white/40 tracking-widest leading-none">Jours</p></div>
                <div className="text-center group flex flex-col items-center"><p className="text-3xl font-black text-white group-hover:text-primary transition-colors leading-none mb-1 font-barlow-condensed">08</p><p className="text-[10px] uppercase font-bold text-white/40 tracking-widest leading-none">Hrs</p></div>
                <div className="text-center group flex flex-col items-center"><p className="text-3xl font-black text-white group-hover:text-primary transition-colors leading-none mb-1 font-barlow-condensed">00</p><p className="text-[10px] uppercase font-bold text-white/40 tracking-widest leading-none">Min</p></div>
              </div>
            </div>
            
            {/* 2. Main encounter block */}
            <div className="flex-grow flex items-center justify-center bg-[#1a1a1a] relative border-r border-white/10 shadow-lg min-w-[500px]">
              <div className="skew-x-12 flex items-center justify-center gap-10 px-8 w-full h-full relative">
                <div className="absolute top-2 left-6 flex items-center gap-8">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] opacity-80">JOURNÉE 25</span>
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em]">20 MARS</span>
                </div>

                <div className="flex items-center justify-center w-full mt-4">
                  {/* Team 1: Rouen */}
                  <div className="flex items-center gap-4">
                    <img src={logoRNR} alt="Rouen" className="w-14 h-14 object-contain brightness-110 drop-shadow-md" />
                    <span className="font-black text-3xl italic uppercase text-white tracking-tight font-barlow-condensed leading-none">Rouen</span>
                  </div>
                  
                  {/* VS Connector: Tightened spacing */}
                  <div className="flex items-center justify-center px-4">
                    <span className="font-black text-3xl italic text-primary drop-shadow-[0_0_15px_rgba(219,39,40,0.4)] leading-none transform translate-y-[1px]">VS</span>
                  </div>

                  {/* Team 2: Massy */}
                  <div className="flex items-center gap-4">
                    <span className="font-black text-3xl italic uppercase text-white tracking-tight font-barlow-condensed leading-none">Massy</span>
                    <img src="/resources/logo_MASSY.webp" alt="Massy" className="w-14 h-14 object-contain brightness-110 drop-shadow-md" />
                  </div>
                </div>

                <button className="bg-primary text-white font-black uppercase px-10 py-4 ml-10 hover:bg-white hover:text-primary transition-all duration-300 -skew-x-12 shadow-[0_0_30px_rgba(219,39,40,0.4)] group mt-4">
                  <div className="skew-x-12 flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg group-hover:scale-125 transition-transform font-bold leading-none">confirmation_number</span> 
                    <span className="text-lg font-barlow-condensed leading-none">RÉSERVER</span>
                  </div>
                </button>
              </div>
            </div>

            {/* 3. Niort block (Transparent) */}
            <div className="flex items-stretch bg-black/40 backdrop-blur-md border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group px-8 min-w-[200px]">
              <div className="skew-x-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-[12px] text-white font-bold tracking-wider uppercase">28 MARS</span>
                  <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                </div>
                <p className="text-[11px] font-black text-primary uppercase mb-1 leading-none tracking-widest">DÉPLACEMENT</p>
                <p className="text-xl font-black text-white uppercase leading-none tracking-tight font-barlow-condensed">NIORT RC</p>
              </div>
            </div>

            {/* 4. Chambéry block (Transparent) */}
            <div className="flex items-stretch bg-black/40 backdrop-blur-md hover:bg-white/5 transition-colors cursor-pointer group px-8 min-w-[200px]">
              <div className="skew-x-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-[12px] text-white font-bold tracking-wider uppercase">10 AVRIL</span>
                  <span className="material-symbols-outlined text-sm text-primary">home</span>
                </div>
                <p className="text-[11px] font-black text-primary uppercase mb-1 leading-none tracking-widest">RÉCEPTION</p>
                <p className="text-xl font-black text-white uppercase leading-none tracking-tight font-barlow-condensed">CHAMBÉRY</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* À NE PAS MANQUER */}
      <section className="bg-white py-20 w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">À ne pas manquer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full px-0 gap-0">
          {news.map((item, index) => (
            <Link 
              key={index} 
              to={`/actualites-medias/${item.id}`}
              className="relative group overflow-hidden aspect-[3/4] cursor-pointer"
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

      {/* L’ACTU DU RNR */}
      <section className="bg-white py-20 w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 mb-10 flex justify-between items-end">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">L'Actu du RNR</h2>
          <Link to="/actualites-medias" className="text-xs font-black uppercase border-b-2 border-black hover:text-primary transition-colors cursor-pointer tracking-widest pb-1">Voir plus d'actualités</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
          {secondaryNews.map((item, index) => (
            <Link 
              key={index} 
              to={`/actualites-medias/${item.id}`}
              className="relative aspect-[3/4] group overflow-hidden cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Category Tag */}
              <div className="absolute top-6 left-6">
                <div className="bg-primary text-white text-[8px] font-black px-2 py-1 uppercase -skew-x-12 inline-block">
                  <span className="inline-block skew-x-12">{item.category}</span>
                </div>
              </div>
              
              {/* Content Panel */}
              <div className="absolute bottom-8 left-6 right-6 text-left text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[9px] font-bold mb-1.5 uppercase tracking-[0.2em] text-white/50">{item.subtitle}</p>
                <h3 className="text-lg font-black uppercase leading-[1.1] tracking-tighter drop-shadow-xl">
                  {item.title}
                </h3>
                <div className="w-6 h-[1.5px] bg-primary mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DASHBOARD SECTION: LES CHIFFRES CLÉS */}
      <section className="relative py-24 w-full flex-shrink-0 bg-slate-900 text-white overflow-hidden">
        {/* Background image for the section */}
        <div className="absolute inset-0 z-0">
          <img src={stadiumHero} alt="Stadium Statistics" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-12">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Dashboard</h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter italic">Les Chiffres Clés</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr_0.9fr] gap-6">
            
            {/* Colonne Gauche: POSITION AU CLASSEMENT */}
            <div className="flex flex-col items-center justify-center p-8 bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl group hover:border-primary/50 transition-all duration-500">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-4">Position</h3>
              <div className="relative">
                <div className="flex items-start">
                  <span className="text-6xl font-black italic tracking-tighter text-primary mt-6 mr-1">#</span>
                  <span className="text-[14rem] font-black leading-none italic tracking-tighter text-white select-none">7</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 font-black italic transform -skew-x-12 shadow-lg">
                  <span className="inline-block skew-x-12">SAISON 25/26</span>
                </div>
              </div>
              <p className="mt-12 text-xs font-bold uppercase tracking-widest text-white/50">Classé sur 14 équipes</p>
            </div>

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
              <a className="mt-4 text-[10px] font-black uppercase self-center tracking-widest text-primary hover:text-white transition-colors cursor-pointer border-b border-primary italic">
                Voir tous les résultats
              </a>
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
                      <p className="text-6xl font-black italic leading-none">15</p>
                    </div>
                    <div className="flex flex-col border-l border-white/10 pl-8">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Défaites</p>
                      <p className="text-6xl font-black italic leading-none text-white/20">7</p>
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
                      <p className="text-2xl font-black italic tracking-tighter">468</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Points Concédés</p>
                      <p className="text-2xl font-black italic tracking-tighter text-white/40">382</p>
                    </div>
                  </div>

                  {/* Différence | Points Class. */}
                  <div className="flex flex-col gap-3 pt-2">
                    <div className="flex justify-between items-end border-b border-white/5 pb-2">
                       <span className="text-[10px] font-bold uppercase text-white/40 italic">Différence</span>
                       <span className="text-3xl font-black italic text-primary">+86</span>
                    </div>
                    <div className="flex justify-between items-end">
                       <span className="text-[10px] font-bold uppercase text-white/40 italic">Points Class.</span>
                       <span className="text-3xl font-black italic text-white">56</span>
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



      <section className="bg-white py-24 w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Réseau Business</h2>
          <h3 className="text-4xl font-black uppercase tracking-tighter italic">Le Club Affaires</h3>
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
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
        <div className="max-w-7xl mx-auto px-4">
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

      {/* Nous suivre (Instagram) */}
      <section className="bg-slate-50 py-24 w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 mb-16 flex justify-between items-end">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">Nous suivre</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <PlaceholderImage key={i} className="aspect-square bg-white shadow-lg border-white border-4" />
          ))}
        </div>
      </section>

      {/* Partenaires */}
      <section className="bg-white py-24 w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">Partenaires</h2>
          <a className="text-xs font-black uppercase border-b-2 border-black hover:text-primary transition-colors cursor-pointer tracking-widest pb-1">Page des partenaires</a>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 md:grid-cols-6 gap-8">
          {[1,2,3,4,5,6].map(i => (
            <PlaceholderImage key={i} className="aspect-square grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          ))}
        </div>
      </section>
    </div>
  );
}
