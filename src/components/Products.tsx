import type { ReactNode } from 'react';

interface Product {
  name: string;
  category: string;
  description: string;
  icon: ReactNode;
}

const products: Product[] = [
  {
    name: 'Immuno',
    category: 'Healthcare',
    description: 'Digital health and immunization management platform.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: 'AI Disprover',
    category: 'Productivity',
    description: 'Browser extension detecting AI-generated content.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'SeamlessHR',
    category: 'HR Management',
    description: 'Workforce management with records and payroll.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Debt Collection',
    category: 'Finance',
    description: 'Digital debt management for SACCOs and lenders.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Robes',
    category: 'E-commerce',
    description: 'Smart fashion commerce with accurate sizing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    name: 'Trot',
    category: 'Mobility',
    description: 'Car rental platform with image recognition.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    name: 'Blockchain Banking',
    category: 'Fintech',
    description: 'Secure cross-branch banking with audit trails.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: 'AI Chatbot',
    category: 'Customer Service',
    description: '24/7 AI-powered customer support.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

interface ProductsProps {
  onNavigate: (sectionId: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  return (
    <section id="products" className="section-pad bg-sand">
      <div className="container-max">
        <div className="mb-12 animate-fade-in-up">
          <p className="text-xs uppercase tracking-widest text-terracotta font-medium mb-3">
            What we build
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-charcoal mb-4">
            Our products
          </h2>
          <p className="text-base text-charcoal-muted max-w-lg leading-relaxed">
            Eight solutions built for African challenges. From healthcare to finance,
            each designed with local contexts in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group relative bg-white rounded-2xl p-6 hover-lift transition-all duration-300 cursor-pointer animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-sand/70 flex items-center justify-center text-terracotta mb-5 group-hover:bg-terracotta group-hover:text-white transition-all duration-300">
                {product.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-charcoal mb-1 group-hover:text-terracotta transition-colors duration-300">
                {product.name}
              </h3>

              <p className="text-xs text-terracotta/80 font-medium uppercase tracking-wide mb-3">
                {product.category}
              </p>

              <p className="text-sm text-charcoal-muted leading-relaxed">
                {product.description}
              </p>


            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up animation-delay-500">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-terracotta transition-colors duration-300 cursor-pointer"
          >
            Let's build something together
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
