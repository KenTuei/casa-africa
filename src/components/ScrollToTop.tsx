import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures that the window scrolls to the top whenever the location (route) changes.
 * Especially useful in SPAs with long pages.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const resetScroll = () => {
            if ((window as any).lenis) {
                (window as any).lenis.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo(0, 0);
            }
        };

        // Execute immediately
        resetScroll();

        // Also execute after a tiny delay to ensure route transitions/DOM updates are settled
        const timer = setTimeout(resetScroll, 50);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
