import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
    product: Product;
    /** For ProductsPage - click to open modal */
    onClick?: () => void;
    /** For Home page - navigate to products page */
    href?: string;
    /** Show "Learn more" button (for home page teaser) */
    showLearnMore?: boolean;
    /** Show category badge */
    showCategory?: boolean;
    /** Additional classes for container */
    className?: string;
}

/**
 * Reusable ProductCard component
 * - Used on Home page (Products.tsx) with href to navigate
 * - Used on Products page (ProductsPage.tsx) with onClick to open modal
 */
export default function ProductCard({
    product,
    onClick,
    href,
    showLearnMore = false,
    showCategory = true,
    className = ''
}: ProductCardProps) {
    const content = (
        <>
            <div className="flex flex-col sm:flex-row items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-sand/70 flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {product.icon}
                </div>

                {showCategory && (
                    <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 bg-cream rounded-full text-[10px] sm:text-xs font-medium text-terracotta tracking-wide border border-sand/50 max-w-full truncate">
                        {product.category}
                    </span>
                )}
            </div>

            <h3 className="text-base sm:text-xl font-semibold text-charcoal mb-2 group-hover:text-terracotta transition-colors duration-300 line-clamp-1">
                {product.name}
            </h3>

            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-4 flex-grow line-clamp-3 sm:line-clamp-4">
                {product.shortDescription}
            </p>

            {showLearnMore && (
                <div className="mt-auto pt-3 sm:pt-6 border-t border-sand/50">
                    <span className="inline-flex items-center text-xs sm:text-sm font-medium text-terracotta transition-colors group/btn">
                        Learn more
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                </div>
            )}
        </>
    );

    const baseClasses = `
        group relative bg-white rounded-xl p-4 sm:p-6 
        border border-transparent hover:border-sand 
        transition-all duration-300 flex flex-col h-full 
        elevation-sm hover:elevation-md cursor-pointer hover-lift
        ${className}
    `;

    // If href is provided, render as Link
    if (href) {
        return (
            <Link to={href} className={baseClasses}>
                {content}
            </Link>
        );
    }

    // If onClick is provided, render as div with click handler
    if (onClick) {
        return (
            <div onClick={onClick} className={baseClasses}>
                {content}
            </div>
        );
    }

    // Default: just render the content
    return (
        <div className={baseClasses}>
            {content}
        </div>
    );
}
