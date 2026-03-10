import PlaceholderImage from "../components/PlaceholderImage";

export default function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-8 w-full flex-shrink-0">
        <div className="relative min-h-[750px] sm:min-h-0 sm:h-[650px] wireframe-border bg-slate-50 overflow-hidden flex flex-col">
          <div className="absolute inset-0 placeholder-x opacity-10"></div>
          <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-12 lg:py-0">
            <h1 className="text-4xl sm:text-6xl font-black uppercase mb-4">Tous Normands, Tous RNR!</h1>
            <p className="text-xl font-medium max-w-2xl">Persévérance, et force brute, le RNR avance !</p>
          </div>
          <div className="relative mt-auto bg-white border-t-2 border-black flex flex-col lg:flex-row h-auto lg:h-32">
            <div className="w-full lg:w-[60%] flex flex-col md:flex-row py-6 lg:py-0 items-center px-4 md:px-6 border-b-2 lg:border-b-0 lg:border-r-2 border-black relative">
              <span className="absolute top-2 left-6 text-[10px] font-black uppercase bg-accent px-2 py-0.5">PROCHAIN MATCH</span>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-0 w-full justify-center md:justify-start">
                <div className="flex flex-col flex-shrink-0">
                  <span className="text-[10px] font-black uppercase mb-2">20 Mars 2026 - 20:00</span>
                  <div className="flex gap-3 text-center">
                    <div><p className="text-xl font-black">11</p><p className="text-[8px] uppercase font-bold">Jours</p></div>
                    <div><p className="text-xl font-black">08</p><p className="text-[8px] uppercase font-bold">Heures</p></div>
                    <div><p className="text-xl font-black">00</p><p className="text-[8px] uppercase font-bold">Min</p></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <PlaceholderImage className="w-10 h-10" />
                  <span className="font-black text-xl italic uppercase">Rouen</span>
                  <span className="font-black text-xl italic text-slate-400">VS</span>
                  <span className="font-black text-xl italic uppercase">Massy</span>
                  <PlaceholderImage className="w-10 h-10" />
                </div>
                <button className="bg-accent text-black font-black uppercase px-6 py-4 md:px-4 md:py-3 wireframe-border md:ml-auto text-sm md:text-xs hover:bg-yellow-300 transition-colors flex-shrink-0 whitespace-nowrap w-full md:w-auto mt-4 md:mt-0">
                  Billets
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[40%] flex min-h-[128px]">
              {/* 28 Mars - Niort vs Rouen */}
              <div className="flex-1 border-r-2 border-black p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold uppercase">28 Mars</span>
                  <span className="material-symbols-outlined text-sm">location_on</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <PlaceholderImage className="w-6 h-6 flex-shrink-0" />
                  <span className="font-black text-sm italic uppercase truncate">Niort RC</span>
                </div>
                <button className="text-[10px] font-black uppercase border-b-2 border-black w-fit hover:text-primary transition-colors mt-auto">J'y vais</button>
              </div>
              {/* 10 Avril - Rouen vs Chambéry */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold uppercase">10 Avril</span>
                  <span className="material-symbols-outlined text-sm">home</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <PlaceholderImage className="w-6 h-6 flex-shrink-0" />
                  <span className="font-black text-sm italic uppercase truncate">Chambéry</span>
                </div>
                <button className="text-[10px] font-black uppercase border-b-2 border-black w-fit hover:text-primary transition-colors mt-auto">Billetterie</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
        <h2 className="text-3xl font-black uppercase mb-8 text-center md:text-left">Mise en avant</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="wireframe-border p-4 flex flex-col gap-4 relative">
            <span className="absolute top-6 left-6 bg-primary text-white text-[10px] font-black uppercase px-2 py-1 z-10">#ACTUALITÉ</span>
            <PlaceholderImage className="aspect-video" />
            <div>
              <h3 className="font-black uppercase text-lg leading-tight">Report du match Rouen-Bourg-En-Bresse</h3>
              <p className="text-xs font-bold mt-1 text-slate-500">06 Janvier 2026</p>
            </div>
            <p className="text-sm text-slate-600">Suite aux récentes conditions, le match est officiellement reporté à une date ultérieure.</p>
          </div>
          <div className="wireframe-border p-4 flex flex-col gap-4 relative">
            <span className="absolute top-6 left-6 bg-primary text-white text-[10px] font-black uppercase px-2 py-1 z-10">#PROMO</span>
            <PlaceholderImage className="aspect-video" />
            <div>
              <h3 className="font-black uppercase text-lg leading-tight">Maillot Domicile Replica 24-25</h3>
              <p className="text-xs font-bold mt-1 text-slate-500">Boutique Officielle</p>
            </div>
            <p className="text-sm text-slate-600">Montrez votre soutien aux Lions avec le maillot domicile replica du Rouen Normandie Rugby !</p>
          </div>
          <div className="wireframe-border p-4 flex flex-col gap-4 relative">
            <span className="absolute top-6 left-6 bg-primary text-white text-[10px] font-black uppercase px-2 py-1 z-10">#CLUB</span>
            <PlaceholderImage className="aspect-video" />
            <div>
              <h3 className="font-black uppercase text-lg leading-tight">Rejoins l'équipe des bénévoles du RNR !</h3>
              <p className="text-xs font-bold mt-1 text-slate-500">12 Décembre 2025</p>
            </div>
            <p className="text-sm text-slate-600">La campagne de recrutement des bénévoles est ouverte. Venez participer à l'aventure !</p>
          </div>
          <div className="wireframe-border p-4 flex flex-col gap-4 relative">
            <span className="absolute top-6 left-6 bg-primary text-white text-[10px] font-black uppercase px-2 py-1 z-10">#BOUTIQUE</span>
            <PlaceholderImage className="aspect-video" />
            <div>
              <h3 className="font-black uppercase text-lg leading-tight">Maillot Officiel — Saison 2025/2026</h3>
              <p className="text-xs font-bold mt-1 text-slate-500">22 Août 2025</p>
            </div>
            <p className="text-sm text-slate-600">Les Lions entrent en scène avec la nouvelle tenue Home, empreinte de la fierté normande.</p>
          </div>
        </div>
      </section>

      {/* Actualités Section */}
      <section className="bg-slate-50 py-16 w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2 mb-8">
            <h2 className="text-3xl font-black uppercase text-center sm:text-left">Actualités</h2>
            <a className="text-xs font-black uppercase border-b-2 border-black hover:text-primary transition-colors cursor-pointer self-center sm:self-auto text-center">Voir toutes les actualités</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="wireframe-border p-4 flex flex-col gap-4 bg-white relative hover:-translate-y-1 transition-transform cursor-pointer">
              <PlaceholderImage className="aspect-video" />
              <div>
                <h3 className="font-black uppercase text-lg leading-tight">Recrutement : Trois nouvelles recrues rejoignent l'effectif</h3>
                <p className="text-xs font-bold mt-1 text-primary">02 Septembre 2024</p>
              </div>
              <p className="text-sm text-slate-600 line-clamp-3">L'équipe professionnelle se renforce avec l'arrivée de joueurs d'expérience pour la saison à venir.</p>
            </div>
            <div className="wireframe-border p-4 flex flex-col gap-4 bg-white relative hover:-translate-y-1 transition-transform cursor-pointer">
              <PlaceholderImage className="aspect-video" />
              <div>
                <h3 className="font-black uppercase text-lg leading-tight">Préparation : Bilan positif du stage de pré-saison</h3>
                <p className="text-xs font-bold mt-1 text-primary">01 Septembre 2024</p>
              </div>
              <p className="text-sm text-slate-600 line-clamp-3">Le staff technique exprime sa satisfaction après deux semaines d'entraînement intensif.</p>
            </div>
            <div className="wireframe-border p-4 flex flex-col gap-4 bg-white relative hover:-translate-y-1 transition-transform cursor-pointer">
              <PlaceholderImage className="aspect-video" />
              <div>
                <h3 className="font-black uppercase text-lg leading-tight">Billetterie : Ouverture de la campagne d'abonnement</h3>
                <p className="text-xs font-bold mt-1 text-primary">30 Août 2024</p>
              </div>
              <p className="text-sm text-slate-600 line-clamp-3">Rejoignez la famille RNR pour cette nouvelle saison de Nationale au Stade Jean-Mermoz.</p>
            </div>
            <div className="wireframe-border p-4 flex flex-col gap-4 bg-white relative hover:-translate-y-1 transition-transform cursor-pointer">
              <PlaceholderImage className="aspect-video" />
              <div>
                <h3 className="font-black uppercase text-lg leading-tight">Formation : Résultats des tests physiques espoirs</h3>
                <p className="text-xs font-bold mt-1 text-primary">28 Août 2024</p>
              </div>
              <p className="text-sm text-slate-600 line-clamp-3">Les jeunes du centre de formation ont passé les premiers tests de la saison avec succès.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats et Classement */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full flex-shrink-0">
        <div>
          <h2 className="text-3xl font-black uppercase mb-8">Résultats</h2>
          <div className="flex flex-col gap-4">
            <div className="wireframe-border p-4 flex items-center justify-between text-xs font-bold w-full">
              <div className="w-12 hidden md:block">J 19</div>
              <div className="w-24 text-center hidden md:block">13/02/2026</div>
              <div className="flex-1 flex justify-center items-center gap-2 md:gap-4 text-sm md:text-xl font-black italic">
                <div className="flex flex-col items-center flex-1 w-0">
                  <PlaceholderImage className="w-8 h-8 rounded-full mb-1 border border-slate-200" />
                  <span className="uppercase text-center truncate w-full text-[10px] sm:text-xs md:text-lg text-primary">Rouen</span>
                </div>
                <span className="bg-black text-white px-2 py-1 md:px-3 md:py-1 flex-shrink-0 min-w-[60px] md:min-w-[80px] text-center text-sm md:text-xl">21 - 25</span>
                <div className="flex flex-col items-center flex-1 w-0">
                  <PlaceholderImage className="w-8 h-8 rounded-full mb-1 border border-slate-200" />
                  <span className="uppercase text-center truncate w-full text-[10px] sm:text-xs md:text-lg">Rennes EC</span>
                </div>
              </div>
            </div>
            <div className="wireframe-border p-4 flex items-center justify-between text-xs font-bold w-full">
              <div className="w-12 hidden md:block">J 20</div>
              <div className="w-24 text-center hidden md:block">21/02/2026</div>
              <div className="flex-1 flex justify-center items-center gap-2 md:gap-4 text-sm md:text-xl font-black italic">
                <div className="flex flex-col items-center flex-1 w-0">
                  <PlaceholderImage className="w-8 h-8 rounded-full mb-1 border border-slate-200" />
                  <span className="uppercase text-center truncate w-full text-[10px] sm:text-xs md:text-lg">Stade Niçois</span>
                </div>
                <span className="bg-black text-white px-2 py-1 md:px-3 md:py-1 flex-shrink-0 min-w-[60px] md:min-w-[80px] text-center text-sm md:text-xl">40 - 19</span>
                <div className="flex flex-col items-center flex-1 w-0">
                  <PlaceholderImage className="w-8 h-8 rounded-full mb-1 border border-slate-200" />
                  <span className="uppercase text-center truncate w-full text-[10px] sm:text-xs md:text-lg text-primary">Rouen</span>
                </div>
              </div>
            </div>
            <div className="wireframe-border p-4 flex items-center justify-between text-xs font-bold w-full">
              <div className="w-12 hidden md:block">J 21</div>
              <div className="w-24 text-center hidden md:block">27/02/2026</div>
              <div className="flex-1 flex justify-center items-center gap-2 md:gap-4 text-sm md:text-xl font-black italic">
                <div className="flex flex-col items-center flex-1 w-0">
                  <PlaceholderImage className="w-8 h-8 rounded-full mb-1 border border-slate-200" />
                  <span className="uppercase text-center truncate w-full text-[10px] sm:text-xs md:text-lg text-primary">Rouen</span>
                </div>
                <span className="bg-black text-white px-2 py-1 md:px-3 md:py-1 flex-shrink-0 min-w-[60px] md:min-w-[80px] text-center text-sm md:text-xl">20 - 19</span>
                <div className="flex flex-col items-center flex-1 w-0">
                  <PlaceholderImage className="w-8 h-8 rounded-full mb-1 border border-slate-200" />
                  <span className="uppercase text-center truncate w-full text-[10px] sm:text-xs md:text-lg">Périgourdin</span>
                </div>
              </div>
            </div>
            <div className="wireframe-border p-4 flex items-center justify-between text-xs font-bold w-full">
              <div className="w-12 hidden md:block">J 22</div>
              <div className="w-24 text-center hidden md:block">07/03/2026</div>
              <div className="flex-1 flex justify-center items-center gap-2 md:gap-4 text-sm md:text-xl font-black italic">
                <div className="flex flex-col items-center flex-1 w-0">
                  <PlaceholderImage className="w-8 h-8 rounded-full mb-1 border border-slate-200" />
                  <span className="uppercase text-center truncate w-full text-[10px] sm:text-xs md:text-lg">CS Bourgoin</span>
                </div>
                <span className="bg-black text-white px-2 py-1 md:px-3 md:py-1 flex-shrink-0 min-w-[60px] md:min-w-[80px] text-center text-sm md:text-xl">11 - 33</span>
                <div className="flex flex-col items-center flex-1 w-0">
                  <PlaceholderImage className="w-8 h-8 rounded-full mb-1 border border-slate-200" />
                  <span className="uppercase text-center truncate w-full text-[10px] sm:text-xs md:text-lg text-primary">Rouen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black uppercase mb-8">Classement</h2>
          <div className="wireframe-border overflow-x-auto">
            <table className="w-full text-left text-xs font-bold">
              <thead className="bg-black text-white uppercase">
                <tr>
                  <th className="p-3">Pos</th>
                  <th className="p-3">Club</th>
                  <th className="p-3 text-center">J</th>
                  <th className="p-3 text-center">PTS</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black">
                <tr><td className="p-3">1</td><td className="p-3">SC ALBI</td><td className="p-3 text-center">-</td><td className="p-3 text-center font-black">85</td></tr>
                <tr><td className="p-3">2</td><td className="p-3">STADE NIÇOIS</td><td className="p-3 text-center">-</td><td className="p-3 text-center font-black">81</td></tr>
                <tr><td className="p-3">3</td><td className="p-3">RC NARBONNAIS</td><td className="p-3 text-center">-</td><td className="p-3 text-center font-black">76</td></tr>
                <tr><td className="p-3">4</td><td className="p-3">CA PÉRIGOURDIN</td><td className="p-3 text-center">-</td><td className="p-3 text-center font-black">73</td></tr>
                <tr><td className="p-3">4</td><td className="p-3">RC MASSY ESSONNE</td><td className="p-3 text-center">-</td><td className="p-3 text-center font-black">73</td></tr>
                <tr><td className="p-3">6</td><td className="p-3">SO CHAMBÉRIEN</td><td className="p-3 text-center">-</td><td className="p-3 text-center font-black">72</td></tr>
                <tr><td className="p-3">7</td><td className="p-3">NIORT RC</td><td className="p-3 text-center">-</td><td className="p-3 text-center font-black">56</td></tr>
                <tr className="bg-primary/10 border-l-4 border-l-primary"><td className="p-3">7</td><td className="p-3">ROUEN NORMANDIE RUGBY</td><td className="p-3 text-center">-</td><td className="p-3 text-center font-black">56</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="bg-white py-16 w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2 mb-8">
            <h2 className="text-3xl font-black uppercase text-center sm:text-left">Partenaires</h2>
            <a className="text-xs font-black uppercase border-b-2 border-black hover:text-primary transition-colors cursor-pointer self-center sm:self-auto text-center">Page des partenaires</a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
            <PlaceholderImage className="flex-1 aspect-square" />
            <PlaceholderImage className="flex-1 aspect-square" />
            <PlaceholderImage className="flex-1 aspect-square" />
            <PlaceholderImage className="flex-1 aspect-square" />
            <PlaceholderImage className="flex-1 aspect-square" />
            <PlaceholderImage className="flex-1 aspect-square" />
          </div>
          <div className="wireframe-border flex flex-col lg:flex-row items-stretch">
            <PlaceholderImage className="w-full lg:w-1/2 aspect-video lg:aspect-auto" />
            <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center items-start gap-6">
              <h3 className="text-4xl font-black uppercase leading-tight">PLUS QU’UN MATCH, UNE EXPERIENCE PARTENAIRE.</h3>
              <p className="text-lg leading-relaxed">Le Club Affaires du Rouen Normandie Rugby est un réseau dynamique regroupant plus de 260 entreprises partenaires. Véritable plateforme de networking, il permet aux acteurs économiques de la région de se rencontrer et d'échanger dans un cadre convivial et prestigieux lors de chaque rencontre à domicile. Rejoignez une communauté passionnée pour développer votre visibilité et vos opportunités d'affaires tout en soutenant l'excellence du rugby normand.</p>
              <button className="bg-primary text-white font-black uppercase px-8 py-4 wireframe-border hover:bg-black transition-colors">
                Devenir Partenaire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres & Newsletter */}
      <section className="bg-black text-white py-20 w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black uppercase mb-12 text-center">Chiffres importants</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-black mb-2">2</p>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-400">titres de champions de France</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-black mb-2">400</p>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-400">licenciés au club</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-black mb-2">260</p>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-400">partenaires officiels</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-black mb-2">120</p>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-400">bénévoles engagés</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
        <h2 className="text-3xl font-black uppercase mb-8 text-center md:text-left">Nous suivre</h2>
        <div className="flex flex-col lg:flex-row gap-8 mb-8 items-stretch lg:h-[450px]">
          <div className="w-full lg:w-1/2 h-[300px] lg:h-auto wireframe-border flex flex-col items-center justify-center bg-slate-50 relative">
            <div className="absolute inset-0 placeholder-x opacity-10"></div>
            <span className="material-symbols-outlined text-6xl relative z-10">play_circle</span>
            <p className="font-black uppercase mt-4 relative z-10">Dernière vidéo YouTube</p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 grid-rows-none sm:grid-rows-2 gap-4">
            <PlaceholderImage className="h-48 sm:h-auto object-cover" />
            <PlaceholderImage className="h-48 sm:h-auto object-cover" />
            <PlaceholderImage className="h-48 sm:h-auto object-cover" />
            <PlaceholderImage className="h-48 sm:h-auto object-cover" />
            <PlaceholderImage className="h-48 sm:h-auto object-cover" />
            <PlaceholderImage className="h-48 sm:h-auto object-cover" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <input className="flex-1 wireframe-border p-4 font-bold uppercase text-sm border-black border-2 focus:ring-primary focus:border-primary outline-none" placeholder="VOTRE ADRESSE EMAIL" type="email" />
          <button className="bg-primary text-white font-black uppercase px-8 py-4 wireframe-border hover:bg-black transition-colors whitespace-nowrap">
            Inscription à la newsletter
          </button>
        </div>
      </section>
    </>
  );
}
