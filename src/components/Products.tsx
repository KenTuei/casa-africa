import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function Products() {
  // Show only the first 4 products as a teaser
  const teaserProducts = products.slice(0, 4);

  return (
    <section id="products" className="section-pad bg-sand">
      <div className="container-max">
        <div className="mb-12 animate-fade-in-up flex flex-col sm:flex-row justify-between items-end gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-terracotta font-medium mb-3">
              What we build
            </p>
            <h2 className="heading-section text-charcoal mb-4">
              Our products
            </h2>
            <p className="text-base text-charcoal-muted max-w-lg leading-relaxed">
              Explore our full suite of solutions built for African challenges. From healthcare to trust & safety,
              each designed with local contexts in mind.
            </p>
          </div>

          <Link
            to="/products"
            className="hidden sm:inline-flex items-center text-terracotta font-medium hover:text-terracotta-hover transition-colors group"
          >
            View all products
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid layout: 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {teaserProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <ProductCard
                product={product}
                href="/products"
                showLearnMore={true}
                showCategory={false}
              />
            </div>
          ))}
        </div>

        <div className="text-center sm:hidden animate-fade-in-up animation-delay-500">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-terracotta transition-colors duration-300 w-full justify-center group"
          >
            View all products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
