import { Mail, MessageCircle, MapPin } from 'lucide-react';
import Button from './Button';

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-cream relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/20 rounded-l-full blur-3xl -z-10 transform translate-x-1/2"></div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text */}
          <div className="animate-fade-in-up">
            <h2 className="heading-section text-charcoal mb-6">
              Let&apos;s build the future together.
            </h2>
            <p className="text-lg text-charcoal-muted mb-8 leading-relaxed max-w-md">
              Whether you need a custom solution, want to implement our products, or just
              want to explore what&apos;s possible—we're ready to listen.
            </p>

            <div className="flex items-start gap-4 p-5 bg-white/60 rounded-2xl border border-sand/30 backdrop-blur-sm max-w-sm hover:border-terracotta/30 hover:elevation-lg hover:-translate-y-1 transition-all duration-300 cursor-default group">
              <div className="bg-terracotta/10 p-3 rounded-xl text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wide mb-1 group-hover:text-terracotta transition-colors">Our Base</h3>
                <p className="text-charcoal-muted">East Africa, with operations across the continent.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Card */}
          <div className="relative animate-fade-in-up animation-delay-200">
            {/* Updated style to match 'Our Base' card: glassmorphism, border, unified icon style */}
            <div className="bg-white/60 rounded-2xl p-8 sm:p-10 border border-sand/30 backdrop-blur-sm relative overflow-hidden group hover:border-terracotta/30 hover:elevation-xl transition-all duration-500 hover:-translate-y-1">

              <div className="relative z-10 text-center">
                {/* Icon with tilt animation, but unified styling (terracotta/10 bg) */}
                <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-terracotta rotate-3 group-hover:rotate-0 transition-all duration-500 group-hover:bg-terracotta group-hover:text-white">
                  <Mail className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-semibold text-charcoal mb-2">Get in touch</h3>
                <p className="text-charcoal-muted mb-8">
                  Our team is ready to assist you directly.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:hello@mberiltd.com"
                    className="block"
                  >
                    <Button fullWidth size="lg" className="elevation-md hover:elevation-lg">
                      <Mail className="w-5 h-5" />
                      Email Us Directly
                    </Button>
                  </a>

                  <a
                    href="https://wa.me/254700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="secondary" fullWidth size="lg">
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
