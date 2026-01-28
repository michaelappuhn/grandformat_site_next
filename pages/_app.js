import "@/styles/globals.scss";
import "@/styles/pages/index.scss";
import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect } from 'react';
import anime from 'animejs';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClick = (e) => {
      // Ignore modifier clicks (open in new tab, etc.)
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      // Find closest anchor link with hash href
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href === '#') return;
      const id = href.slice(1);
      const targetEl = document.getElementById(id);
      if (!targetEl) return;
      e.preventDefault();
      const header = document.querySelector('header');
      const offset = header ? header.offsetHeight : 0;
      const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
      const scrollObj = { y: window.scrollY };
      anime({
        targets: scrollObj,
        y: targetTop,
        duration: 400,
        easing: 'easeOutQuad',
        update: () => {
          window.scrollTo(0, scrollObj.y);
        },
        complete: () => {
          // Update URL hash without scrolling
          window.history.pushState(null, null, href);
        },
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <main className="font-sans">
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-T2KW340RY4" />
    </main>
  );
}
