import PlaceholderImage from "../components/PlaceholderImage";
import SectionNav from "../components/SectionNav";

const navLinks = [
  { label: "Histoire & Palmarès", path: "/le-club", exact: true },
  { label: "Organigramme", path: "/le-club/organigramme", exact: true },
  { label: "Le Stade", path: "/le-club/infrastructures", exact: true },
  { label: "Nos Engagements", path: "/le-club/engagements", exact: true },
];

const ProfileCard = ({ name, role }) => (
  <div className="wireframe-border p-4 bg-white flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform cursor-pointer">
    <div className="w-full aspect-square border-4 border-slate-100 bg-slate-50">
      <PlaceholderImage className="w-full h-full object-cover" />
    </div>
    <div className="w-full">
      <h4 className="font-black uppercase text-lg line-clamp-1">{name}</h4>
      <p className="font-bold mt-1 text-primary text-sm line-clamp-1">{role}</p>
    </div>
  </div>
);

export default function ClubStaff() {
  const staffAdministratif = [
    { name: "Nom Prénom", role: "Directeur Général" },
    { name: "Nom Prénom", role: "Responsable Partenariats" },
    { name: "Nom Prénom", role: "Responsable Communication" },
    { name: "Nom Prénom", role: "Responsable Billetterie" },
    { name: "Nom Prénom", role: "Comptabilité" },
    { name: "Nom Prénom", role: "Événementiel" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Le Club</h1>
        <p className="text-lg">Découvrez l'histoire, les valeurs et les ambitions du Rouen Normandie Rugby.</p>
      </div>

      <SectionNav links={navLinks} />

      <h3 className="text-3xl font-black uppercase mb-8">Présidence & Direction</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <ProfileCard name="Éric Visse" role="Président" />
        <ProfileCard name="Charles-Henri Ollivier" role="Directeur Général Délégué" />
      </div>

      <h3 className="text-3xl font-black uppercase mb-8">Équipe Administrative</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {staffAdministratif.map((staff, i) => (
          <ProfileCard key={i} name={staff.name} role={staff.role} />
        ))}
      </div>
    </div>
  );
}
