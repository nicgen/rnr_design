import PageHero from "../components/PageHero";
import heroImg from "/assets/images/ui/www_entreprise.webp";
import logosPGS from "/assets/images/content/partenaires/PGS.webp";
import photoLouvel from "/assets/images/content/partenaires/Jean-Louis_LOUVEL.webp";

const navLinks = [
  { label: "Actualités B2B", path: "/partenaires/actualites", exact: true },
  { label: "Le Business Club", path: "/partenaires", exact: true },
  { label: "Hospitalités & Loges", path: "/partenaires/hospitalites", exact: true },
  { label: "Visibilité & Sponsoring", path: "/partenaires/visibilite", exact: true },
  { label: "Nos Partenaires", path: "/partenaires/entreprises", exact: true },
  { label: "Devenir Partenaire", path: "/partenaires/contact", exact: true },
];

/* ─── DONNÉES ────────────────────────────────────────────────── */

const masterPartners = [
  {
    company: "PGS",
    logo: logosPGS,
    executive: { name: "Jean-Louis", surname: "LOUVEL", role: "Président Directeur Général", photo: photoLouvel },
    quote: "S'associer au Rouen Normandie Rugby, c'est partager des valeurs d'ambition et de dépassement de soi qui résonnent profondément avec notre vision d'entreprise.",
  },
  {
    company: "Entreprise Master B",
    logo: null,
    executive: { name: "Marie", surname: "Laurent", role: "Directrice Générale", photo: null },
    quote: "Un partenariat qui va bien au-delà du sponsoring : une vraie communauté d'entrepreneurs unis par la passion du rugby et l'envie de faire rayonner notre territoire.",
  },
];

const officialPartners = [
  {
    company: "Partenaire Officiel 1", logo: null,
    executive: { name: "Thomas", surname: "Bernard", role: "Directeur Général", photo: null },
    quote: "Le RNR incarne les valeurs que nous défendons au quotidien : engagement, collectif et excellence.",
  },
  {
    company: "Partenaire Officiel 2", logo: null,
    executive: { name: "Sophie", surname: "Martin", role: "PDG", photo: null },
    quote: "Une fierté d'accompagner un club aussi emblématique de notre région depuis plusieurs saisons.",
  },
  {
    company: "Partenaire Officiel 3", logo: null,
    executive: { name: "Nicolas", surname: "Robert", role: "Président", photo: null },
    quote: "Le réseau B2B du RNR est un accélérateur de business unique en Normandie.",
  },
  {
    company: "Partenaire Officiel 4", logo: null,
    executive: { name: "Isabelle", surname: "Moreau", role: "Directrice", photo: null },
    quote: "Être partenaire officiel, c'est s'inscrire dans une aventure sportive et humaine extraordinaire.",
  },
  {
    company: "Partenaire Officiel 5", logo: null,
    executive: { name: "Pierre", surname: "Leroy", role: "Gérant", photo: null },
    quote: "Nos équipes vibrent à chaque match. Ce partenariat a transformé notre culture d'entreprise.",
  },
  {
    company: "Partenaire Officiel 6", logo: null,
    executive: { name: "Claire", surname: "Petit", role: "CEO", photo: null },
    quote: "Le RNR nous a ouvert des portes business insoupçonnées. Bien plus qu'un sponsor, un vrai partenaire.",
  },
];

const majorPartners = [
  "Partenaire Majeur 1", "Partenaire Majeur 2", "Partenaire Majeur 3",
  "Partenaire Majeur 4", "Partenaire Majeur 5", "Partenaire Majeur 6",
  "Partenaire Majeur 7", "Partenaire Majeur 8",
];

const institutionalPartners = [
  "Partenaire Institutionnel 1", "Partenaire Institutionnel 2",
  "Partenaire Institutionnel 3", "Partenaire Institutionnel 4",
];

const equipmentPartners = ["Équipementier Officiel"];

/* ─── COMPOSANTS ─────────────────────────────────────────────── */

/* Carte unifiée Master + Officiel */
const PartnerCard = ({ partner }) => (
  <div className="group bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">

    {/* Logo 16/9, aligné à gauche */}
    <div className="p-4 pb-3">
      <div className="w-50 aspect-[16/9] bg-slate-50 border border-slate-100 flex items-center justify-center p-3">
        {partner.logo ? (
          <img src={partner.logo} alt={partner.company} className="w-full h-full object-contain" />
        ) : (
          <span className="text-xs font-black uppercase italic tracking-tight text-slate-400 text-center leading-tight">
            {partner.company}
          </span>
        )}
      </div>
    </div>

    {/* Photo */}
    <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
      {partner.executive.photo ? (
        <img
          src={partner.executive.photo}
          alt={`${partner.executive.name} ${partner.executive.surname}`}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
          <span className="material-symbols-outlined text-5xl text-slate-300">person</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    {/* Bulle citation — flèche pointant vers la photo */}
    <div className="relative mx-4 mt-4">
      <div className="absolute -top-[6px] left-6 w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45"></div>
      <div className="border border-slate-200 px-4 pt-5 pb-4">
        <span className="block text-3xl font-black text-primary/50 italic leading-none -mb-1">"</span>
        <p className="text-sm italic text-slate-500 leading-snug">{partner.quote}</p>
      </div>
    </div>

    {/* Infos — comme organigramme, texte plus grand */}
    <div className="py-6 px-4 text-center">
      <h4 className="font-black uppercase text-2xl leading-none italic tracking-tighter mb-1 group-hover:text-primary transition-colors">
        {partner.executive.name} {partner.executive.surname}
      </h4>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">{partner.executive.role}</p>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary/60 mt-1">{partner.company}</p>
    </div>
  </div>
);

/* Grille de logos simples — même taille et ratio que PartnerCard */
const LogoGrid = ({ partners }) => (
  <div className="flex flex-wrap gap-4">
    {partners.map((name, i) => (
      <div
        key={i}
        className="w-50 aspect-[16/9] bg-white border border-slate-200 flex items-center justify-center p-3 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
      >
        <span className="text-xs font-black uppercase italic tracking-tight text-slate-400 group-hover:text-slate-700 transition-colors text-center leading-tight">
          {name}
        </span>
      </div>
    ))}
  </div>
);

const SectionHeader = ({ title }) => (
  <div className="mb-12 border-l-4 border-primary pl-8">
    <h2 className="text-4xl font-black uppercase tracking-tighter italic">{title}</h2>
  </div>
);

/* ─── PAGE ───────────────────────────────────────────────────── */

export default function PartnersCompanies() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Nos Partenaires"
        subtitle="Ils font confiance au Rouen Normandie Rugby"
        bgImage={heroImg}
        subNavLinks={navLinks}
      />

      <div className="container-premium pb-24">

        {/* ─── MASTER ─── */}
        <section className="py-20">
          <SectionHeader title="Partenaires Master" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {masterPartners.map((partner, i) => (
              <PartnerCard key={i} partner={partner} />
            ))}
          </div>
        </section>

        {/* ─── OFFICIELS ─── */}
        <section className="py-12 border-t border-slate-100">
          <SectionHeader title="Partenaires Officiels" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {officialPartners.map((partner, i) => (
              <PartnerCard key={i} partner={partner} />
            ))}
          </div>
        </section>

        {/* ─── MAJEURS ─── */}
        <section className="py-12 border-t border-slate-100">
          <SectionHeader title="Partenaires Majeurs" />
          <LogoGrid partners={majorPartners} />
        </section>

        {/* ─── INSTITUTIONNELS ─── */}
        <section className="py-12 border-t border-slate-100">
          <SectionHeader title="Partenaires Institutionnels" />
          <LogoGrid partners={institutionalPartners} />
        </section>

        {/* ─── ÉQUIPEMENTIER ─── */}
        <section className="py-12 border-t border-slate-100">
          <SectionHeader title="Équipementier" />
          <LogoGrid partners={equipmentPartners} />
        </section>

        {/* ─── CTA ─── */}
        <section className="mt-12 bg-black text-white p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-3 italic">Rejoignez-nous</h3>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none">
              Devenez<br /><span className="text-primary">Partenaire</span>
            </h2>
          </div>
          <a
            href="/partenaires/contact"
            className="bg-primary hover:bg-white text-white hover:text-black transition-all duration-300 font-black uppercase px-10 py-5 italic tracking-widest whitespace-nowrap shadow-[0_0_40px_rgba(226,30,38,0.3)]"
          >
            Nous contacter
          </a>
        </section>

      </div>
    </div>
  );
}
