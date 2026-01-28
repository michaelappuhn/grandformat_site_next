import useScrollAnimation from '@/hooks/useScrollAnimation';

/**
 * A wrapper component that animates its children when they enter the viewport.
 * It fades in and slides from the left using anime.js.
 */
export default function AnimateOnScroll({ 
    children, 
    once = true, 
    offset = 0, 
    threshold = 0.5,
    ...rest 
}) {
    const ref = useScrollAnimation({ once, offset, threshold });
    return (
        <div 
            ref={ref} 
            style={{ 
                opacity: 0,   // Start invisible; the animation will make it visible
            }} 
            {...rest}
        >
            {children}
        </div>
    );
}
