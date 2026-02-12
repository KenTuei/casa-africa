import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = ` inquiry from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    window.location.href = `mailto:hello@casaafrica.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

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
                <p className="text-xs text-charcoal-muted mb-1 uppercase tracking-wide">Location</p>
                <p className="text-sm text-charcoal">East Africa, with pan-African expansion</p>
              </div>
            </div>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-charcoal-muted mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-charcoal-muted mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Last name"
                    required
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
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-charcoal-muted mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Tell us about your needs..."
                  required
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
