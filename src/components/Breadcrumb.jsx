import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  const location = useLocation();
  
  // If items are not provided, we can generate them from the current path
  const breadcrumbItems = items || location.pathname.split("/").filter(p => p).map((part, index, array) => {
    const to = `/${array.slice(0, index + 1).join("/")}`;
    return {
      label: part.replace(/-/g, " "),
      to: to,
      active: index === array.length - 1
    };
  });

  return (
    <nav className="flex items-center gap-2 mb-4 text-(--text-xs) font-black uppercase tracking-[0.2em] text-slate-400">
      <Link to="/" className="hover:text-primary transition-colors">ACCUEIL</Link>
      
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-slate-300 font-normal">/</span>
          {item.active ? (
            <span className="text-primary truncate max-w-[200px]">{item.label}</span>
          ) : (
            <Link to={item.to} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
