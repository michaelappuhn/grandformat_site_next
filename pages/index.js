import Image from "next/image";
import {Nav} from "@/components/navbar";
import Dek from "@/components/Dek";
import Logo from "@/components/Logo";
import PhotocopyBackground from "@/components/PhotocopyBackground";
import OurTake from "@/components/homepage/ourtake.mdx";
import WhatWeOffer from "@/components/homepage/what_we_offer.mdx";
import HowWeWork from "@/components/homepage/how_we_work.mdx";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useState, useEffect, useRef } from 'react';

export default function Home() {
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
            className={`font-sans grid grid-rows-[10px_1fr_auto] min-h-screen p-8 pb-20 gap-1 sm:p-20 relative overflow-y-auto`}
        >
            <PhotocopyBackground />

            <main 
              className="flex flex-col gap-[10px] row-start-2 sm:items-start max-w-[665px] mx-auto w-full"
            >
            <a id="home"></a>
            <div ref={wrapperRef} className={`sticky-wrapper ${isSticky ? 'sticky top-0 z-50 bg-white shadow-md' : 'relative'} transition-all duration-300`}>
                <Logo />
                <Nav />
            </div>


            <div className="mt-20 mb-25 dek">
                <AnimateOnScroll>
                    <Dek />
                </AnimateOnScroll>
            </div>

            <div className="mb-50 take">
                <a id="our_take"></a>
                <AnimateOnScroll>
                    <OurTake />
                </AnimateOnScroll>
            </div>

            <div className="mb-50 offer">
                <a id="what_we_offer"></a>
                <AnimateOnScroll>
                    <WhatWeOffer/>
                </AnimateOnScroll>
            </div>
            <div className="mb-70 how">
                <a id="how_we_work"></a>
                <AnimateOnScroll>
                    <HowWeWork />
                </AnimateOnScroll>
            </div>

            </main>

        </div>
  );
}
