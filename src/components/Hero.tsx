import { ChevronDown } from 'lucide-react';
import Button from './Button';

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
          <h1 className="heading-hero text-charcoal leading-[1.1] mb-6 animate-fade-in-up animation-delay-100">
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
            <Button
              onClick={() => onNavigate('products')}
              size="lg"
              className="elevation-lg"
            >
              Explore our work
              <ChevronDown className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="secondary"
              size="lg"
            >
              Start a project
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 animate-fade-in-up animation-delay-400">
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
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => onNavigate('products')}>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-charcoal/20 rounded-full flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-1.5 sm:h-2 bg-charcoal/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
