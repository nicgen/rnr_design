import { Link, useLocation } from "react-router-dom";

export default function SectionNav({ links }) {
  const location = useLocation();

  return (
    <div className="flex gap-8 border-b-2 border-slate-200 mb-12 overflow-x-auto">
      {links.map((link, i) => {
        const isActive = location.pathname === link.path || (link.path !== "/actualites-medias" && location.pathname.startsWith(link.path));
        // Strict exact match for the root of the section, otherwise startsWith is fine
        const isActuallyActive = link.exact ? location.pathname === link.path : isActive;
        
        return (
          <Link
            key={i}
            to={link.path}
            className={`pb-4 uppercase font-black text-sm lg:text-base border-b-4 transition-colors whitespace-nowrap ${
              isActuallyActive
                ? "border-primary text-black"
                : "border-transparent text-slate-400 hover:text-black hover:border-black/20"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
