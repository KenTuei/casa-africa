import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { products, type Product } from '../data/products';
import { ArrowLeft, X, Check, ChevronDown } from 'lucide-react';

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalClosing, setIsModalClosing] = useState(false);

    // Extract unique categories
    const categories = useMemo(() => {
        const allCategories = products.map((p) => p.category);
        return ['All', ...new Set(allCategories)];
    }, []);

    // Filter products
    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') return products;
        return products.filter((p) => p.category === selectedCategory);
    }, [selectedCategory]);

    const handleSelectProduct = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseProduct = () => {
        setIsModalClosing(true);
    };

    // Handle modal close animation completion
    useEffect(() => {
        if (isModalClosing) {
            const timer = setTimeout(() => {
                setSelectedProduct(null);
                setIsModalClosing(false);
            }, 250);
            return () => clearTimeout(timer);
        }
    }, [isModalClosing]);

    return (
        <div className="min-h-screen bg-cream flex flex-col relative">
            <Navbar onNavigate={(sectionId: string) => {
                if (sectionId === 'hero' || sectionId === 'about' || sectionId === 'contact') {
                    window.location.href = `/#${sectionId}`;
                }
            }} />

            <main className="flex-grow pt-24 pb-20">
                <div className="container-max px-4">

                    {/* Breadcrumb / Back Link */}
                    <div className="mb-6 animate-fade-in">
                        <Link to="/" className="inline-flex items-center text-sm font-medium text-charcoal-muted hover:text-terracotta transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Back to Home
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="mb-8 sm:mb-12 animate-fade-in-up">
                        <h1 className="heading-section text-charcoal mb-4">
                            Our Products
                        </h1>
                        <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
                            Explore our full suite of solutions designed to solve critical challenges across African sectors.
                        </p>
                    </div>

                    {/* Filter Controls (Mobile) */}
                    <div className="sm:hidden relative mb-8 z-20">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between bg-white border border-sand rounded-xl py-3 px-4 text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/20 elevation-sm active:bg-sand/10 transition-colors"
                        >
                            <span className="font-medium text-sm">{selectedCategory} Category</span>
                            <ChevronDown className={`w-5 h-5 text-terracotta transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <>
                                <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}></div>
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-sand rounded-xl elevation-xl z-20 overflow-hidden animate-fade-in-up origin-top max-h-60 overflow-y-auto">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-sand/30 transition-colors flex items-center justify-between border-b border-sand/30 last:border-0 ${selectedCategory === category ? 'text-terracotta bg-sand/10' : 'text-charcoal-muted'
                                                }`}
                                        >
                                            {category}
                                            {selectedCategory === category && <Check className="w-4 h-4" />}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Desktop Tabs */}
                    <div className="hidden sm:flex flex-wrap gap-2 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${selectedCategory === category
                                    ? 'bg-terracotta text-white elevation-md transform scale-105'
                                    : 'bg-white text-charcoal-muted hover:bg-sand hover:text-charcoal border border-sand hover:border-charcoal/20'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Grid layout: 2 cols mobile, 4 cols desktop */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-in-up animation-delay-300">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={() => handleSelectProduct(product)}
                                showLearnMore={true}
                                showCategory={false}
                            />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-charcoal-muted text-lg">No products found in this category.</p>
                            <button
                                onClick={() => setSelectedCategory('All')}
                                className="mt-4 text-terracotta font-medium hover:underline cursor-pointer"
                            >
                                View all products
                            </button>
                        </div>
                    )}

                </div>
            </main>
            <Footer />

            {/* Modal with CSS Animations */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className={`absolute inset-0 bg-charcoal/60 backdrop-blur-sm ${isModalClosing ? 'animate-backdrop-out' : 'animate-backdrop-in'}`}
                        onClick={handleCloseProduct}
                    />

                    {/* Modal Container */}
                    <div
                        className={`relative bg-white w-full max-w-lg sm:max-w-2xl max-h-[90vh] rounded-2xl flex flex-col elevation-2xl my-auto custom-scrollbar overflow-hidden ${isModalClosing ? 'animate-modal-out' : 'animate-modal-in'}`}
                    >
                        {/* Close X */}
                        <button
                            onClick={handleCloseProduct}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-charcoal-muted hover:text-charcoal bg-sand/50 hover:bg-sand rounded-full transition-colors cursor-pointer z-20"
                        >
                            <X className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>

                        {/* Inner Content Wrapper */}
                        <div className="flex flex-col flex-grow overflow-hidden h-full">
                            <div className="p-5 sm:p-8 flex-grow overflow-y-auto custom-scrollbar">
                                {/* Header */}
                                <div className="flex items-start gap-4 mb-4 sm:mb-6 pr-8">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-terracotta/10 flex items-center justify-center text-terracotta flex-shrink-0">
                                        <div className="scale-75 sm:scale-100 transform origin-center">
                                            {selectedProduct.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="heading-card text-charcoal mb-1 leading-tight">
                                            {selectedProduct.name}
                                        </h2>
                                        <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 bg-sand/50 rounded-full text-[10px] sm:text-xs font-medium text-terracotta tracking-wide">
                                            {selectedProduct.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4 sm:space-y-6">
                                    <div>
                                        <h3 className="text-xs sm:text-sm uppercase tracking-widest text-charcoal font-semibold mb-1 sm:mb-2">Description</h3>
                                        <p className="text-charcoal-muted leading-relaxed text-sm sm:text-base">
                                            {selectedProduct.fullDescription}
                                        </p>
                                    </div>

                                    {selectedProduct.features.length > 0 && (
                                        <div>
                                            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-charcoal font-semibold mb-2 sm:mb-3">Key Features</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                                {selectedProduct.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start text-xs sm:text-sm text-charcoal-muted bg-cream rounded-lg p-2 sm:p-3">
                                                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-terracotta mr-2 mt-0.5 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {selectedProduct.targetAudience && selectedProduct.targetAudience.length > 0 && (
                                        <div>
                                            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-charcoal font-semibold mb-2 sm:mb-3">Designed For</h3>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {selectedProduct.targetAudience.map((audience, idx) => (
                                                    <span key={idx} className="px-2 py-1 sm:px-3 sm:py-1.5 bg-sand/30 text-charcoal-muted text-[10px] sm:text-sm font-medium rounded-md border border-sand">
                                                        {audience}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 sm:p-6 sm:pt-4 border-t border-sand sticky bottom-0 bg-white z-10 elevation-sm flex-shrink-0 rounded-b-2xl">
                                <Button
                                    onClick={handleCloseProduct}
                                    fullWidth
                                    size="lg"
                                    className="elevation-lg"
                                >
                                    Close Details
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
