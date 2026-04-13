import PageHero from "../components/PageHero";
import heroImg from "/assets/images/ui/www_leclub.webp";
import presidentImg from "/assets/images/content/Delphine_Bunel.webp";

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
        src={photo || "/assets/images/content/logo_RNR_alpha.png"}
        alt={name}
        className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${!photo ? 'opacity-10 p-12' : ''}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    <div className="py-6 px-4 text-center">
      <h4 className="font-black uppercase text-xl leading-none italic tracking-tighter mb-2 group-hover:text-primary transition-colors">{name}</h4>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{role}</p>
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
      <PageHero
        title="L'Organigramme"
        subtitle="Les forces vives du club"
        bgImage={heroImg}
        subNavLinks={navLinks}
      />

      <div className="container-premium pb-24">
        <div className="py-20">
          <div className="mb-12">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-2 italic">Gouvernance</h3>
            <h4 className="text-5xl font-black uppercase tracking-tighter italic">La Présidence</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProfileCard name="DELPHINE BUNEL" role="Présidente du Rouen Normandie Rugby" photo={presidentImg} />
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
