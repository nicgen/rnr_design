import SectionNav from "../components/SectionNav";
import PlaceholderImage from "../components/PlaceholderImage";

const navLinks = [
  { label: "Centre de Formation / Espoirs", path: "/formation", exact: true },
  { label: "Pôle Jeunes & École de Rugby", path: "/formation/jeunes", exact: true },
  { label: "Section Féminine", path: "/formation/feminines", exact: true },
  { label: "Sections Spécialisées", path: "/formation/specialisees", exact: true },
];

export default function AcademySpecial() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Sections Spécialisées</h1>
        <p className="text-lg mb-8">Rugby pour tous : Sport Adapté, Rugby Fauteuil, Loisirs et Rugby à 5.</p>
      </div>

      <SectionNav links={navLinks} />

      <div className="space-y-16">
        
        {/* Rugby Fauteuil */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 wireframe-border p-6 sm:p-8 bg-slate-50 relative overflow-hidden group items-center">
           <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-wider z-10">
              Pratique Handicap Physique
           </div>
           <div className="col-span-1">
             <PlaceholderImage className="aspect-square w-full rounded-full border-8 border-white shadow-xl" />
           </div>
           <div className="col-span-1 lg:col-span-2 flex flex-col justify-center">
             <h2 className="text-4xl font-black uppercase mb-4">Rugby Fauteuil</h2>
             <p className="text-lg leading-relaxed mb-6">Sport paralympique spectaculaire et intense, le rugby fauteuil se pratique en gymnase avec des fauteuils spécifiques conçus pour le contact. Cette section s'adresse aux personnes en situation de handicap physique (tétraplégie ou assimilé). Le RNR est très fier de compter cette section dans ses rangs, alliant compétition pugnace et dépassement de soi.</p>
             <button className="bg-primary hover:bg-black text-white transition-colors font-black uppercase px-6 py-3 text-sm w-fit">
               Rejoindre la section "Rugby Fauteuil"
             </button>
           </div>
        </div>

        {/* Sport Adapté */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 wireframe-border p-6 sm:p-8 bg-slate-50 relative overflow-hidden group items-center">
           <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-wider z-10">
              Pratique Handicap Mental/Psychique
           </div>
           <div className="col-span-1 lg:col-span-2 flex flex-col justify-center text-center lg:text-left">
             <h2 className="text-4xl font-black uppercase mb-4">Sport Adapté</h2>
             <p className="text-lg leading-relaxed mb-6">Fidèle à ses valeurs d'inclusion, le Rouen Normandie Rugby propose une pratique adaptée aux personnes en situation de handicap mental ou psychique. Les séances sont encadrées par des éducateurs spécialisés, insistant sur la motricité, les règles de vie de groupe et bien sûr, le plaisir du jeu avec ou sans contact modéré (selon les profils).</p>
             <button className="bg-primary hover:bg-black text-white transition-colors font-black uppercase px-6 py-3 text-sm w-fit">
               Me renseigner sur le Sport Adapté
             </button>
           </div>
           <div className="col-span-1">
             <PlaceholderImage className="aspect-square w-full rounded-full border-8 border-white shadow-xl" />
           </div>
        </div>

        {/* Rugby à 5 / Touch */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 wireframe-border p-6 sm:p-8 bg-slate-50 relative overflow-hidden group items-center">
           <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-wider z-10">
              Pratique Loisir / Sans contact
           </div>
           <div className="col-span-1">
             <PlaceholderImage className="aspect-square w-full rounded-full border-8 border-white shadow-xl" />
           </div>
           <div className="col-span-1 lg:col-span-2 flex flex-col justify-center">
             <h2 className="text-4xl font-black uppercase mb-4">Rugby à 5 (Touch Rugby)</h2>
             <p className="text-lg leading-relaxed mb-6">Vous aimez le ballon ovale mais vous ne souhaitez pas les contacts ? Le Rugby à 5 est fait pour vous ! Pratique mixte, ludique et très dynamique (cardio assuré), le plaquage est remplacé par un simple touché à deux mains. Idéal pour les anciens joueurs, les novices, ou les collègues d'entreprise (rugby santé / wellness).</p>
             <button className="bg-primary hover:bg-black text-white transition-colors font-black uppercase px-6 py-3 text-sm w-fit">
               Découvrir le Rugby Sans Contact
             </button>
           </div>
        </div>

      </div>
    </div>
  );
}
