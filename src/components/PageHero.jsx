import Breadcrumb from './Breadcrumb';
import SectionNav from './SectionNav';

export default function PageHero({ title, subtitle, bgImage, subNavLinks }) {
  return (
    <div className="page-hero bg-black text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage || '/assets/images/ui/rnr_hero-bg-image-placeholder.png'}
          alt=""
          className="w-full h-full object-cover opacity-50 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 container-premium flex flex-col flex-1 pb-8"
        style={{ paddingTop: 'calc(var(--nav-height) + 1.5rem)' }}
      >
        <Breadcrumb isDark />
        <div className="flex-1 flex flex-col justify-end pt-6">
          <h1 className="text-white leading-none">{title}</h1>
          {subtitle && (
            <p className="text-white/70 font-medium mt-3 max-w-2xl" style={{ fontSize: 'var(--text-h4)', fontFamily: 'var(--font-body)', fontWeight: 400, textTransform: 'none', fontStyle: 'normal', letterSpacing: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Sub-navigation — bottom of hero */}
      {subNavLinks && (
        <div className="relative z-10 w-full bg-black/80 backdrop-blur-sm">
          <div className="container-premium py-1">
            <SectionNav links={subNavLinks} isDark />
          </div>
        </div>
      )}
    </div>
  );
}
