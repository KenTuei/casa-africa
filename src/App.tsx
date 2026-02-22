import { useEffect } from 'react';
import Lenis from 'lenis';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

function HomePage() {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // With Lenis, we should use lenis.scrollTo or just native scroll if Lenis observes it?
      // Lenis observes native smooth scroll usually, or hooks into scroll events.
      // But for anchor links, Lenis usually handles it if configured.
      // Here just using native scrollIntoView.
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <Products />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose lenis for other components to control (e.g. stop/start)
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
