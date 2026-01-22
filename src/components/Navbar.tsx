import { useState } from 'react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sand/50">
      <div className="container-max">
        <div className="flex items-center justify-between h-12 sm:h-16 px-4 sm:px-0">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('hero')}>
            <img src="/name_logo.jpeg" alt="Casa Africa" className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply" />
          </div>

          <div className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-sm font-medium text-charcoal-muted hover:text-terracotta transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="text-sm font-medium text-terracotta hover:text-terracotta-hover transition-colors duration-200 cursor-pointer"
            >
              Get in touch
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden py-4 border-t border-sand/50 px-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-sm font-medium text-charcoal-muted hover:text-terracotta py-2 transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className="text-left text-sm font-medium text-terracotta py-2 transition-colors duration-200 cursor-pointer"
              >
                Get in touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
