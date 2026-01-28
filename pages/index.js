import Image from "next/image";
import {Nav} from "@/components/navbar";
import Dek from "@/components/Dek";
import Logo from "@/components/Logo";
import PhotocopyBackground from "@/components/PhotocopyBackground";
import OurTake from "@/components/homepage/ourtake.mdx";
import WhatWeOffer from "@/components/homepage/what_we_offer.mdx";
import HowWeWork from "@/components/homepage/how_we_work.mdx";

export default function Home() {
    return (
        <div
            className={`font-sans grid grid-rows-[10px_1fr_auto] min-h-screen p-8 pb-20 gap-1 sm:p-20 relative overflow-y-auto`}
        >
            <PhotocopyBackground />

            <main 
              className="flex flex-col gap-[10px] row-start-2 sm:items-start max-w-[665px] mx-auto w-full"
            >
            <a id="home"></a>
            <Logo />
            <Nav />


            <div class="mt-20 mb-25 dek">
                <Dek />
            </div>

            <div class="mb-50 take">
                <a id="our_take"></a>
                <OurTake />
            </div>

            <div class="mb-50 offer">
                <a id="what_we_offer"></a>
                <WhatWeOffer/>
            </div>
            <div class="mb-70 how">
                <a id="how_we_work"></a>
                <HowWeWork />
            </div>

            </main>

        </div>
  );
}
