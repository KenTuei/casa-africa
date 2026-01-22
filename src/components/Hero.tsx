interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-sand/30 to-cream" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-ochre/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-max px-5 sm:px-8 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}


          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-charcoal leading-[1.1] mb-6 animate-fade-in-up animation-delay-100">
            We build software
            <br />
            <span className="text-terracotta">that works</span> for Africa
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-charcoal-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            Practical, production-ready solutions designed with African realities in mind.
            From healthcare to finance, we solve real problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-300">
            <button
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-white rounded-full text-base font-medium hover:bg-terracotta-hover hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-lg shadow-terracotta/20"
            >
              Explore our work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-charcoal rounded-full text-base font-medium border border-sand hover:bg-white hover:border-charcoal/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Start a project
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 animate-fade-in-up animation-delay-400">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-semibold text-charcoal mb-1">8</div>
              <div className="text-sm text-charcoal-muted">Products Built</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-sand"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-semibold text-charcoal mb-1">50+</div>
              <div className="text-sm text-charcoal-muted">Happy Clients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-sand"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-semibold text-charcoal mb-1">5</div>
              <div className="text-sm text-charcoal-muted">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-charcoal/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-charcoal/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
