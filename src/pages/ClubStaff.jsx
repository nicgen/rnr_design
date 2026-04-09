import Breadcrumb from "../components/Breadcrumb";
import SectionNav from "../components/SectionNav";
import heroImg from "/resources/hero_bg_alt.jpg";
import presidentImg from "/resources/Delphine_Bunel.jpg";

const navLinks = [
  { label: "Histoire & Palmarès", path: "/le-club", exact: true },
  { label: "Organigramme", path: "/le-club/organigramme", exact: true },
  { label: "Le Stade", path: "/le-club/infrastructures", exact: true },
  { label: "Nos Engagements", path: "/le-club/engagements", exact: true },
];

const ProfileCard = ({ name, role, photo }) => (
  <div className="group relative bg-white border border-slate-100 p-2 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
    <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
      <img 
        src={photo || "/resources/logo_RNR_alpha.png"} 
        alt={name} 
        className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${!photo ? 'opacity-10 p-12' : ''}`} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    <div className="py-6 px-4 text-center">
      <h4 className="font-black uppercase text-xl leading-none italic tracking-tighter mb-2 group-hover:text-primary transition-colors">{name}</h4>
      <p className="text-(--text-xs) font-bold uppercase tracking-[0.2em] text-slate-400">{role}</p>
    </div>
  </div>
);

export default function ClubStaff() {
  const staffAdministratif = [
    { name: "JEAN-MICHEL NOM", role: "DIRECTEUR GÉNÉRAL" },
    { name: "SOPHIE NOM", role: "RESPONSABLE PARTENARIATS" },
    { name: "LUCAS NOM", role: "RESPONSABLE COMMUNICATION" },
    { name: "EMMA NOM", role: "RESPONSABLE BILLETTERIE" },
    { name: "MARC NOM", role: "COMPTABILITÉ" },
    { name: "CLAIRE NOM", role: "ÉVÉNEMENTIEL" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full flex-shrink-0 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Club Staff" 
            className="absolute inset-0 w-full h-full object-cover opacity-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-20">
          <Breadcrumb />
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase mt-4 leading-none tracking-tighter font-barlow-condensed italic">
            L'ORGANIGRAMME
          </h1>
          <p className="text-primary text-xl md:text-2xl font-bold max-w-3xl mt-4 italic uppercase tracking-widest">
            Les forces vives du club
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30 pb-24">
        <SectionNav links={navLinks} />

        <div className="py-20">
          <div className="mb-12">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Gouvernance</h3>
            <h4 className="text-5xl font-black uppercase tracking-tighter italic">La Présidence</h4>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProfileCard name="ÉRIC VISSE" role="PRÉSIDENT" />
            <ProfileCard name="DELPHINE BUNEL" role="PRÉSIDENTE RNR ASSOCIATION" photo={presidentImg} />
          </div>

          <div className="mt-32 mb-12">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Administration</h3>
            <h4 className="text-5xl font-black uppercase tracking-tighter italic">Équipe Opérationnelle</h4>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffAdministratif.map((staff, i) => (
              <ProfileCard key={i} name={staff.name} role={staff.role} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
