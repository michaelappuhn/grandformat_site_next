import Image from "next/image";
import { firaMono, instrument, libreFranklin, spaceGrotesk } from "@/styles/font";
import {Nav} from "@/components/navbar";
import PhotocopyBackground from "@/components/PhotocopyBackground";
import { Fira_Mono } from "next/font/google";

export default function Home() {
    return (
        <div
            className={`font-sans grid grid-rows-[10px_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 relative overflow-hidden`}
        >
            <PhotocopyBackground />

            <Nav />
            <main 
              className="flex flex-col gap-[10px] row-start-2 sm:items-start"
            >
            <div 
                className={`
                    ${libreFranklin.className} 
                    varCondensedBold 
                    gfLogo 
                    sm:-ml-2 
                    md:-ml-5 
                    text-[90pt] 
                    md:text-[90pt]`}>
                Grand Format
            </div>
            <h1
                className={
                    `${firaMono.className} 
                    dek 
                    sm:text-[18pt] 
                `}
            >
                We design solutions to <a href="https://en.wikipedia.org/wiki/Wicked_problem" target="_blank" rel="noreferrer">wicked problems</a>.
            </h1>

            </main>

            <section className={`
                ${instrument.className}
                approachBanner
                ml-[-2rem] mr-[-2rem]
                sm:ml-[-5rem] sm:mr-[-5rem]
                row-start-3
            `}>
                <div className="">
                    <h2>Our approach</h2>
                </div>
            </section>
        </div>
  );
}
