import Image from "next/image";
import {Nav} from "@/components/navbar";
import Dek from "@/components/Dek";
import Logo from "@/components/Logo";
import PhotocopyBackground from "@/components/PhotocopyBackground";
import OurTake from "@/components/homepage/ourtake.mdx";
import WhatWeOffer from "@/components/homepage/what_we_offer.mdx";
import HowWeWork from "@/components/homepage/how_we_work.mdx";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StickyWrapper from "@/components/StickyWrapper";

export default function Home() {
    return (
        <div
            className={`font-sans grid grid-rows-[10px_1fr_auto] min-h-screen p-8 pb-20 gap-1 sm:p-20 relative overflow-x-hidden`}
        >
            <PhotocopyBackground />

            <a id="home"></a>
            <main 
              className="flex flex-col gap-[10px] row-start-2 sm:items-start max-w-[665px] mx-auto w-full"
            >
            <StickyWrapper>
                <Logo />
                <Nav />
            </StickyWrapper>


            <div className="mt-20 mb-30 md-mb-50 dek">
                <AnimateOnScroll>
                    <Dek />
                </AnimateOnScroll>
            </div>

            <a id="our_take"></a>
            <div className="mb-50 take">
                <AnimateOnScroll>
                    <OurTake />
                </AnimateOnScroll>
            </div>

            <a id="what_we_offer"></a>
            <div className="mb-50 offer">
                <AnimateOnScroll>
                    <WhatWeOffer/>
                </AnimateOnScroll>
            </div>
            <div className="mb-50 how">
                <a id="how_we_work"></a>
                <AnimateOnScroll>
                    <HowWeWork />
                </AnimateOnScroll>
            </div>
            <a name="contact"></a>
            <div className="mb-60 md-mb-1000 contact">
                <AnimateOnScroll>
                    <h2>Contact us</h2>
                    <p>To connect, reach us at <a href="mailto:info@grandformat.xyz">info@grandformat.xyz</a>.</p>
                    <p>We're happy to discuss new projects, problems you're facing, and how we can help.</p>
                </AnimateOnScroll>
            </div>

            </main>

        </div>
  );
}
