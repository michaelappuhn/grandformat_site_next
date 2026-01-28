import { useState, useEffect, useRef } from 'react';

export default function StickyWrapper({ children }) {
    const [isSticky, setIsSticky] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!wrapperRef.current) return;
            const wrapperHeight = wrapperRef.current.offsetHeight;
            const scrolledPast = window.scrollY > wrapperHeight;
            setIsSticky(scrolledPast);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initial
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={wrapperRef}
            className={`sticky-wrapper ${
                isSticky
                    ? 'sticky top-0 z-50'
                    : 'relative'
            } transition-all duration-300 w-full`}
        >
            {children}
        </div>
    );
}
