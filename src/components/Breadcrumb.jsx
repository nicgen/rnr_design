import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ items, isDark = false }) => {
  const location = useLocation();

  const breadcrumbItems = items || location.pathname.split("/").filter(p => p).map((part, index, array) => {
    const to = `/${array.slice(0, index + 1).join("/")}`;
    return {
      label: part.replace(/-/g, " "),
      to,
      active: index === array.length - 1
    };
  });

  const base = isDark ? "text-white/50" : "text-slate-400";
  const hover = isDark ? "hover:text-white" : "hover:text-primary";
  const active = isDark ? "text-white" : "text-primary";
  const sep = isDark ? "text-white/20" : "text-slate-300";

  return (
    <nav className={`breadcrumb-nav flex items-center gap-2 flex-wrap ${base}`}>
      <Link to="/" className={`transition-colors ${hover}`}>Accueil</Link>
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className={`${sep} font-normal`}>/</span>
          {item.active ? (
            <span className={`${active} truncate max-w-[200px]`}>{item.label}</span>
          ) : (
            <Link to={item.to} className={`transition-colors ${hover}`}>{item.label}</Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
