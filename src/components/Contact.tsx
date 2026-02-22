import { useState } from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import Button from './Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry from ${formData.firstName} ${formData.lastName}`;
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
    <section id="contact" className="section-pad bg-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/20 rounded-l-full blur-3xl -z-10 transform translate-x-1/2"></div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column: Text & Info */}
          <div className="animate-fade-in-up">
            <h2 className="heading-section text-charcoal mb-6">
              Let&apos;s build the future together.
            </h2>
            <p className="text-lg text-charcoal-muted mb-8 leading-relaxed max-w-md">
              Whether you need a custom solution, want to implement our products, or just
              want to explore what&apos;s possible—we're ready to listen.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-white/60 rounded-2xl border border-sand/30 backdrop-blur-sm max-w-sm group hover:border-terracotta/30 transition-all duration-300">
                <div className="bg-terracotta/10 p-3 rounded-xl text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wide mb-1">Our Base</h3>
                  <p className="text-charcoal-muted">East Africa, with operations across the continent.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white/60 rounded-2xl border border-sand/30 backdrop-blur-sm max-w-sm group hover:border-terracotta/30 transition-all duration-300">
                <div className="bg-terracotta/10 p-3 rounded-xl text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wide mb-1">Email Us</h3>
                  <a href="mailto:hello@casaafrica.com" className="text-terracotta font-medium">hello@casaafrica.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white/60 rounded-2xl p-8 border border-sand/30 backdrop-blur-sm shadow-xl animate-fade-in-up animation-delay-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-charcoal-muted mb-1">First name</label>
                  <input
                    type="text" id="firstName" value={formData.firstName} onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-sand bg-white/50 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all"
                    placeholder="Jane" required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-charcoal-muted mb-1">Last name</label>
                  <input
                    type="text" id="lastName" value={formData.lastName} onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-sand bg-white/50 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all"
                    placeholder="Doe" required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal-muted mb-1">Email</label>
                <input
                  type="email" id="email" value={formData.email} onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-sand bg-white/50 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all"
                  placeholder="jane@company.com" required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-muted mb-1">Message</label>
                <textarea
                  id="message" value={formData.message} onChange={handleChange} rows={4}
                  className="w-full p-3 rounded-xl border border-sand bg-white/50 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all resize-none"
                  placeholder="Tell us about your project..." required
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-terracotta hover:bg-terracotta-hover text-white font-semibold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}