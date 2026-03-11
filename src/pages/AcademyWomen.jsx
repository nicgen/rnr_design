import PlaceholderImage from "../components/PlaceholderImage";
import { Link } from "react-router-dom";

export default function AcademyWomen() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-shrink-0">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">Les Équipes Féminines</h1>
        <p className="text-lg mb-8">Découvrez l'effectif des Valkyries du Rouen Normandie Rugby pour la saison 2025-2026.</p>
      </div>

      {/* Intro Féminines */}
      <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="wireframe-border p-4 bg-slate-50">
          <PlaceholderImage className="aspect-[4/3] w-full" />
        </div>
        <div>
           <h2 className="text-4xl font-black uppercase mb-6 leading-tight">Les Valkyries</h2>
          <p className="text-lg leading-relaxed mb-6">L'équipe féminine sénior du Rouen Normandie Rugby évolue actuellement dans le championnat de Fédérale. Composée de joueuses passionnées et engagées, l'équipe vise l'excellence sportive tout en préservant une forte cohésion de groupe. Venez encourager nos Valkyries normandes lors de leurs matchs à domicile !</p>
          <div className="bg-primary/10 border-l-4 border-primary p-4 mb-6">
            <h3 className="font-black uppercase mb-2">Entraînements Séniors</h3>
            <ul className="text-sm font-bold space-y-2">
              <li><span className="material-symbols-outlined text-sm align-middle mr-2">calendar_today</span> Mardi et Jeudi de 19h30 à 21h00</li>
              <li><span className="material-symbols-outlined text-sm align-middle mr-2">location_on</span> Stade Jean-Mermoz (Terrain synthétique)</li>
            </ul>
          </div>
          <a 
            href="https://www.les-valkyries-rouen.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white font-black uppercase px-6 py-4 wireframe-border hover:bg-primary transition-colors text-sm"
          >
            Site Officiel des Valkyries <span className="material-symbols-outlined text-lg">open_in_new</span>
          </a>
        </div>
      </div>

      {/* Cadettes / Formation */}
      <div className="mb-20">
        <h3 className="text-3xl font-black uppercase border-b-4 border-black pb-2 mb-8 inline-block">La Formation Féminine (M18, M15)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="wireframe-border p-8 bg-white hover:-translate-y-1 transition-transform relative overflow-hidden group">
            <h4 className="text-2xl font-black uppercase mb-4">Cadettes (M18)</h4>
            <p className="text-sm leading-relaxed mb-6">L'équipe Cadettes évolue en championnat Elite ou Régional, préparant les jeunes joueuses aux exigences du niveau sénior. C'est l'antichambre de notre équipe première féminine.</p>
            <Link to="/contact?sujet=association" className="text-xs font-black uppercase border-b-2 border-black hover:text-primary transition-colors inline-block">Nous rejoindre</Link>
          </div>
          <div className="wireframe-border p-8 bg-white hover:-translate-y-1 transition-transform relative overflow-hidden group">
            <h4 className="text-2xl font-black uppercase mb-4">Minimes Filles (M15)</h4>
            <p className="text-sm leading-relaxed mb-6">À partir de la catégorie M15, les filles évoluent dans un championnat exclusivement féminin. Une étape clé pour développer les compétences spécifiques au rugby à XV ou à X.</p>
            <Link to="/contact?sujet=association" className="text-xs font-black uppercase border-b-2 border-black hover:text-primary transition-colors inline-block">Nous rejoindre</Link>
          </div>
        </div>
      </div>

      {/* Photo Grid / Social */}
      <h3 className="text-2xl font-black uppercase mb-6">Dans l'arène</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <PlaceholderImage className="aspect-square" />
        <PlaceholderImage className="aspect-square" />
        <PlaceholderImage className="aspect-square" />
        <PlaceholderImage className="aspect-square" />
      </div>

    </div>
  );
}
