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
    { title: "CHANGEMENT DE PRÉSIDENCE.", category: "CLUB", author: "PHILIPPE MARTY PASSE LE RELAIS", img: presidentImg, size: "large", date: "22 MARS 2024" },
    { title: "MAILLOT DOMICILE 25-26", category: "BOUTIQUE", author: "NOUVELLE COLLECTION", img: jerseyImg, size: "small", date: "20 MARS 2024" },
    { title: "L'ART AU CŒUR DE NOTRE SOIRÉE DE GALA", category: "ÉVÉNEMENT", author: "SOIRÉE CARITATIVE D'EXCEPTION", img: galaImg, size: "small", date: "18 MARS 2024" },
    { title: "MISE EN AVANT DE NOS PARTENAIRES", category: "PARTENAIRES", author: "EXPÉRIENCE CLUB AFFAIRES", img: partnersImg, size: "small", date: "15 MARS 2024" }
  ];

  const secondaryNews = [
    { title: "SOÏG MINGANT PROLONGE AVEC LE RNR !", category: "PROLONGATION", subtitle: "RENOUVELLEMENT", img: player1Img },
    { title: "KILLIAN LAISNÉ PROLONGE AVEC LE RNR !", category: "PROLONGATION", subtitle: "RENOUVELLEMENT", img: player2Img },
    { title: "MARIUS BUNEL PROLONGE JUSQU'EN 2028 !", category: "PROLONGATION", subtitle: "ENGAGEMENT", img: player3Img },
    { title: "TOUS DERRIÈRE LES LIONS", category: "LIONS", subtitle: "NATIONAL 1", img: fansImg }
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
        <div className="absolute bottom-6 left-0 right-0 z-20 hidden md:block px-4">
          <div className="max-w-[1400px] mx-auto flex items-stretch h-28 bg-[#1a1a1a]/95 backdrop-blur-xl -skew-x-12 border-l-4 border-primary overflow-visible relative">
            
            {/* Countdown block with red tag */}
            <div className="flex items-center gap-10 px-12 relative border-r border-white/5 skew-x-12">
              <span className="absolute -top-3 -left-2 text-[10px] font-black uppercase bg-primary text-white px-3 py-1 tracking-[0.2em] -skew-x-12">PROCHAIN MATCH</span>
              <div className="flex gap-6 items-center">
                <div className="text-center group"><p className="text-2xl font-black text-white group-hover:text-primary transition-colors">11</p><p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Jours</p></div>
                <div className="text-center group"><p className="text-2xl font-black text-white group-hover:text-primary transition-colors">08</p><p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Hrs</p></div>
                <div className="text-center group"><p className="text-2xl font-black text-white group-hover:text-primary transition-colors">00</p><p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Min</p></div>
              </div>
            </div>
            
            {/* Main encounter block */}
            <div className="flex-1 flex items-center justify-center gap-12 px-12 skew-x-12">
              <div className="flex items-center gap-5">
                <img src={logoRNR} alt="Rouen" className="w-14 h-14 object-contain brightness-110" />
                <span className="font-black text-3xl italic uppercase text-white tracking-tight">Rouen</span>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <span className="font-black text-xl italic text-primary/80 mb-1">VS</span>
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">PRO D2 - J25</span>
              </div>

              <div className="flex items-center gap-5">
                <span className="font-black text-3xl italic uppercase text-white tracking-tight">Massy</span>
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                   <img src="/resources/logo_massy.png" alt="Massy" className="w-10 h-10 object-contain opacity-80" onError={(e) => e.target.style.display = 'none'} />
                   <span className="text-white/20 text-[8px] font-bold uppercase">MASSY</span>
                </div>
              </div>

              <button className="bg-primary text-white font-black uppercase px-10 py-4 ml-8 hover:bg-white hover:text-primary transition-all duration-300 -skew-x-12 shadow-[0_0_20px_rgba(219,39,40,0.3)] group">
                <div className="skew-x-12 flex items-center gap-3">
                  <span className="material-symbols-outlined text-base group-hover:scale-125 transition-transform">confirmation_number</span> 
                  <span className="text-lg">RÉSERVER</span>
                </div>
              </button>
            </div>

            {/* Side info blocks */}
            <div className="flex items-stretch border-l border-white/5 skew-x-12">
              <div className="px-10 flex flex-col justify-center border-r border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[12px] text-white/50 font-bold tracking-wider uppercase">28 MARS</span>
                  <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                </div>
                <p className="text-[11px] font-black text-primary/80 uppercase mb-1 leading-none tracking-widest">DÉPLACEMENT</p>
                <p className="text-lg font-black text-white uppercase leading-none tracking-tight">NIORT RC</p>
              </div>
              <div className="px-10 flex flex-col justify-center relative">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[12px] text-white/50 font-bold tracking-wider uppercase">10 AVRIL</span>
                  <span className="material-symbols-outlined text-sm text-primary">home</span>
                </div>
                <p className="text-[11px] font-black text-primary/80 uppercase mb-1 leading-none tracking-widest">RÉCEPTION</p>
                <p className="text-lg font-black text-white uppercase leading-none tracking-tight">CHAMBÉRY</p>
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
            <div key={index} className="relative group overflow-hidden aspect-[3/4] cursor-pointer">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute top-8 left-8">
                <span className="bg-primary text-white text-[10px] font-black px-3 py-1 uppercase">{item.category}</span>
              </div>
              <div className="absolute bottom-12 left-8 right-8 text-center text-white">
                <p className="text-[10px] font-bold mb-2 uppercase tracking-widest text-white/80">{item.author}</p>
                <h3 className="text-2xl font-black uppercase leading-tight tracking-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* L’ACTU DU RNR */}
      <section className="bg-white py-20 w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 mb-10 flex justify-between items-end">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">L'Actu du RNR</h2>
          <a className="text-xs font-black uppercase border-b-2 border-black hover:text-primary transition-colors cursor-pointer tracking-widest pb-1">Voir plus d'actualités</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
          {secondaryNews.map((item, index) => (
            <div key={index} className="relative aspect-[3/4] group overflow-hidden cursor-pointer">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute top-8 left-8">
                <span className="bg-primary text-white text-[8px] font-black px-2 py-1 uppercase">{item.category}</span>
              </div>
              <div className="absolute bottom-12 left-8 right-8 text-center text-white">
                <p className="text-[10px] font-bold mb-2 uppercase tracking-widest text-white/80">{item.subtitle}</p>
                <h3 className="text-xl font-black uppercase leading-tight tracking-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD SECTION: STATS & RÉSULTATS - VARIATION A (3 BLOCS) */}
      <section className="relative py-24 w-full flex-shrink-0 bg-slate-900 text-white overflow-hidden">
        {/* Background image for the section */}
        <div className="absolute inset-0 z-0">
          <img src={stadiumHero} alt="Stadium Statistics" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-12">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Dashboard v1</h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter italic">3 Blocs Séparés</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
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
            <div className="flex flex-col gap-8 bg-black/30 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40">Statistiques</h3>
                 <div className="flex items-end gap-6 mb-2">
                    <div className="flex flex-col">
                      <span className="text-4xl font-black italic italic leading-none text-white">15</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Victoires</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-4xl font-black italic leading-none text-white/40">7</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Défaites</span>
                    </div>
                    <div className="flex-1 flex justify-end gap-1">
                      {['V', 'V', 'D', 'D', 'V'].map((f, i) => (
                        <div key={i} className={`w-7 h-7 flex items-center justify-center text-[10px] font-black rounded-sm ${f === 'V' ? 'bg-green-500 text-white' : 'bg-red-500 text-white shadow-inner opacity-80'}`}>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-5 border border-white/5 rounded-xl text-center group hover:bg-white/10 transition-all">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Points Marqués</p>
                  <p className="text-4xl font-black italic leading-none text-white tracking-tighter">468</p>
                </div>
                <div className="bg-white/5 p-5 border border-white/5 rounded-xl text-center group hover:bg-white/10 transition-all">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Points Concédés</p>
                  <p className="text-4xl font-black italic leading-none text-white/40 tracking-tighter">382</p>
                </div>
              </div>

              <div className="bg-primary text-white p-6 rounded-xl flex items-center justify-between shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Différence</p>
                  <p className="text-3xl font-black italic">+86</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Points Class.</p>
                  <p className="text-3xl font-black italic text-black">56</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DASHBOARD SECTION: STATS & RÉSULTATS - VARIATION B (UNIFIED) */}
      <section className="relative py-24 w-full flex-shrink-0 bg-slate-900 text-white overflow-hidden border-t-8 border-primary">
        {/* Background image for the section */}
        <div className="absolute inset-0 z-0">
          <img src="/resources/hero_bg_alt.jpg" alt="Stadium Statistics Alt" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="mb-12">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Dashboard v2</h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter italic">Bloc Unifié (Editorial Strip)</h3>
          </div>

          <div className="bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-2xl p-2 lg:p-4 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch">
              
              {/* Position */}
              <div className="flex-1 flex flex-col items-center justify-center p-12 lg:border-r border-white/5 relative group">
                <span className="absolute top-6 left-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 italic">Position</span>
                <div className="flex items-start">
                  <span className="text-6xl font-black italic tracking-tighter text-primary mt-6 mr-1">#</span>
                  <span className="text-[14rem] font-black leading-none italic tracking-tighter text-white select-none">7</span>
                </div>
                <div className="bg-primary/20 text-primary border border-primary/30 px-4 py-1 font-black text-[10px] italic skew-x-[-15deg] mt-4">
                  <span className="inline-block skew-x-[15deg] uppercase">Classé sur 14</span>
                </div>
              </div>

              {/* Résultats */}
              <div className="flex-[1.5] p-12 lg:border-r border-white/5 flex flex-col gap-8 relative bg-white/2">
                <span className="absolute top-6 left-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 italic">Derniers Résultats</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {[
                    { j: "J 22", score: "11-33", opp: "Massy", w: true },
                    { j: "J 21", score: "20-19", opp: "Périgueux", w: true },
                    { j: "J 20", score: "40-19", opp: "Nice", w: false },
                    { j: "J 19", score: "21-25", opp: "Rennes", w: false },
                  ].map((res, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 group hover:bg-primary transition-all duration-300 cursor-default">
                      <div className="flex flex-col border-r border-white/10 pr-4">
                        <span className="text-[10px] font-black text-white/40 group-hover:text-black/40">{res.j}</span>
                        <span className={`text-[12px] font-black ${res.w ? 'text-primary group-hover:text-white' : 'text-white/20'}`}>W</span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <span className="text-xs font-black uppercase group-hover:text-black">{res.opp}</span>
                        <span className="text-lg font-black italic tracking-tight group-hover:text-black">{res.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-all group">
                   voir tous les resultats <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </div>

              {/* Statistiques */}
              <div className="flex-1 p-12 relative flex flex-col justify-center">
                <span className="absolute top-6 left-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 italic">Statistiques</span>
                
                <div className="flex flex-col gap-10 mt-6">
                  <div className="flex gap-10">
                    <div className="flex flex-col">
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Victoires</p>
                      <p className="text-6xl font-black italic leading-none">15</p>
                    </div>
                    <div className="flex flex-col border-l border-white/10 pl-10">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Défaites</p>
                      <p className="text-6xl font-black italic leading-none text-white/20">7</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                       <span className="text-[10px] font-bold uppercase text-white/40 italic">Différence</span>
                       <span className="text-3xl font-black italic text-primary">+86</span>
                    </div>
                    <div className="flex justify-between items-end">
                       <span className="text-[10px] font-bold uppercase text-white/40 italic">Points Class.</span>
                       <span className="text-3xl font-black italic">56</span>
                    </div>
                  </div>

                  <div className="flex gap-2 justify-center py-4 bg-white/5 rounded-full">
                    {['V', 'V', 'D', 'D', 'V'].map((f, i) => (
                      <div key={i} className={`w-3 h-3 rounded-full ${f === 'V' ? 'bg-primary shadow-[0_0_10px_rgba(219,39,40,0.8)]' : 'bg-white/10'}`}></div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">Le Club Affaires</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-50 border-2 border-slate-100 flex flex-col lg:flex-row items-stretch rounded-xl overflow-hidden shadow-xl">
            <PlaceholderImage className="w-full lg:w-1/2 min-h-[400px]" />
            <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center items-start gap-8 bg-white">
              <h3 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter">PLUS QU’UN MATCH,<br />UNE EXPERIENCE PARTENAIRE.</h3>
              <p className="text-lg leading-relaxed text-slate-600 font-medium">Le Club Affaires du Rouen Normandie Rugby est un réseau dynamique regroupant plus de 260 entreprises partenaires. Véritable plateforme de networking, il permet aux acteurs économiques de la région de se rencontrer et d'échanger dans un cadre convivial et prestigieux lors de chaque rencontre à domicile.</p>
              <button className="bg-primary text-white font-black uppercase px-10 py-5 hover:bg-black transition-all transform hover:translate-y-[-2px]">
                Devenir Partenaire
              </button>
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
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">Nous suivre (Instagram)</h2>
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
          <h2 className="text-3xl font-black uppercase tracking-tighter border-l-4 border-primary pl-6">Partenaires</h2>
          <a className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black">Page des partenaires</a>
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
