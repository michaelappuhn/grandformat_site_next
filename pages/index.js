import Image from "next/image";
import { instrument, spaceGrotesk } from "@/styles/font";
import {Nav, Navitem} from "@/components/navbar";

export default function Home() {
    return (
        <div
            className={`font-sans grid grid-rows-[10px_1fr_10px] min-h-screen p-8 pb-20 gap-16 sm:p-20`}
        >

            <Nav />
            <main 
              className="flex flex-col gap-[10px] row-start-2 sm:items-start"
            >
            <div 
                className={`
                    ${instrument.className} 
                    varCondensedBold 
                    gfLogo 
                    sm:-ml-2 
                    md:-ml-5 
                    text-[24vw] 
                    md:text-[25vw]`}>
                Grand Format
            </div>
            <h1
                className={
                    `${spaceGrotesk.className} 
                    dek 
                    sm:text-[18pt] 
                    md:text-[24pt] 
                `}
            >
                We design solutions to <a href="https://en.wikipedia.org/wiki/Wicked_problem" target="_blank">wicked problems</a>.
            </h1>

            </main>

            <section className={`
                ${instrument.className}
                approachBanner
            `}>
                <div class="">
                    <h2>Our approach</h2>
                </div>
            </section>
        </div>
  );
}
