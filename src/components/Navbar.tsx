import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export function Navbar(props: NavbarProps) {
  const { onNavigate } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { id: 'products', label: 'Products', isLink: true, path: '/products' },
    { id: 'about', label: 'About', isLink: false },
    { id: 'contact', label: 'Contact', isLink: false },
  ];

  const handleNavClick = (item: { id: string; isLink?: boolean; path?: string }) => {
    setIsMenuOpen(false);

    if (item.isLink && item.path) {
      return;
    }

    if (!isHomePage) {
      window.location.href = `/#${item.id}`;
    } else {
      onNavigate(item.id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sand/50">
      <div className="container-max">
        <div className="flex items-center justify-between h-12 sm:h-16 px-4 sm:px-0">
          <Link to="/" className="flex items-center cursor-pointer" onClick={() => isHomePage && onNavigate('hero')}>
            <img src="/mberi.jpeg" alt="Mberi LTD" className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply" />
          </Link>

          <div className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.id}
                  to={item.path!}
                  className="text-sm font-medium text-charcoal-muted hover:text-terracotta transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="text-sm font-medium text-charcoal-muted hover:text-terracotta transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              )
            ))}
            <button
              onClick={() => handleNavClick({ id: 'contact' })}
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
            {isMenuOpen ? (
              <X className="w-5 h-5 text-charcoal" />
            ) : (
              <Menu className="w-5 h-5 text-charcoal" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden py-4 border-t border-sand/50 px-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.id}
                    to={item.path!}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-left text-sm font-medium text-charcoal-muted hover:text-terracotta py-2 transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="text-left text-sm font-medium text-charcoal-muted hover:text-terracotta py-2 transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <button
                onClick={() => handleNavClick({ id: 'contact' })}
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

export default Navbar;
