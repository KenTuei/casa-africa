export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-cream">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium text-charcoal mb-3">
              Let&apos;s work together
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mb-6 leading-relaxed max-w-sm">
              Whether you need a custom solution, want to use our products, or just
              want to explore what&apos;s possible—get in touch.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-charcoal-muted mb-1 uppercase tracking-wide">Email</p>
                <a href="mailto:hello@casaafrica.com" className="text-sm font-medium text-terracotta hover:text-terracotta-hover transition-colors">
                  hello@casaafrica.com
                </a>
              </div>
              <div>
                <p className="text-xs text-charcoal-muted mb-1 uppercase tracking-wide">Phone</p>
                <p className="text-sm text-charcoal">+254 (0) XXX XXX XXX</p>
              </div>
              <div>
                <p className="text-xs text-charcoal-muted mb-1 uppercase tracking-wide">Location</p>
                <p className="text-sm text-charcoal">East Africa, with pan-African expansion</p>
              </div>
            </div>
          </div>

          <div className="card">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-charcoal-muted mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="input-field"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-charcoal-muted mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="input-field"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-charcoal-muted mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-charcoal-muted mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
