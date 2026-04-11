export default function FilterBar({ filters, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-12">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`filter-btn ${
            active === filter
              ? 'bg-primary text-white'
              : 'bg-white text-slate-400 hover:text-black border border-slate-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
