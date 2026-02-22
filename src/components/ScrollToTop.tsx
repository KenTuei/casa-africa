import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures that the window scrolls to the top whenever the location (route) changes.
 * Especially useful in SPAs with long pages.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
