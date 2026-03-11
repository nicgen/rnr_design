import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function SectionNav({ links, rightElement }) {
  const location = useLocation();
  const activeLinkRef = useRef(null);

  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4 border-b-2 border-slate-200 mb-12">
      <div className="flex gap-8 overflow-x-auto scrollbar-hide w-full lg:w-auto -mb-[2px]">
      {links.map((link, i) => {
        const isActive = location.pathname === link.path || (link.path !== "/actualites-medias" && location.pathname.startsWith(link.path));
        // Strict exact match for the root of the section, otherwise startsWith is fine
        const isActuallyActive = link.exact ? location.pathname === link.path : isActive;
        
        if (link.external) {
          return (
            <a
              key={i}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="pb-4 uppercase font-black text-sm lg:text-base border-b-4 border-transparent transition-colors whitespace-nowrap text-slate-400 hover:text-black hover:border-black/20 flex items-center gap-1"
            >
              {link.label} <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          );
        }

        return (
          <Link
            key={i}
            to={link.path}
            ref={isActuallyActive ? activeLinkRef : null}
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
      {rightElement && (
        <div className="mb-4 lg:mb-0 lg:ml-4 flex-shrink-0 hidden lg:block">
          {rightElement}
        </div>
      )}
    </div>
  );
}
