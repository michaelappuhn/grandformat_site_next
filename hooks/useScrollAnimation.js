import { useEffect, useRef } from 'react';
import { animate as anime } from 'animejs';

/**
 * Custom hook that triggers an anime.js animation when the referenced element enters the viewport.
 * @param {Object} options - Configuration options.
 * @param {boolean} [options.once=true] - Whether the animation should run only once.
 * @param {number} [options.offset=0] - Root margin offset in pixels for the Intersection Observer.
 * @param {number} [options.threshold=0.1] - Threshold for the Intersection Observer.
 * @returns {React.RefObject} A ref that must be attached to the element to be animated.
 */
export default function useScrollAnimation(options = {}) {
    const ref = useRef(null);
    const hasAnimated = useRef(false);
    const { once = true, offset = 0, threshold = 0.1 } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && (!once || !hasAnimated.current)) {
                    hasAnimated.current = true;
                    // Animation: fade in + slide from left
                    anime(element, {
                        opacity: [0, 1],
                        x: ['-0.5em', '0'],
                        duration: 400,
                        ease: 'easeOutQuad',
                    });
                    if (once) observer.unobserve(element);
                }
            });
        }, {
            root: null,
            rootMargin: `${offset}px`,
            threshold,
        });

        observer.observe(element);
        return () => observer.disconnect();
    }, [once, offset, threshold]);

    return ref;
}
