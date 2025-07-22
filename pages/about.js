import Image from "next/image";
import { instrument, spaceGrotesk } from "@/styles/font";
import {Nav, Navitem} from "@/components/navbar";

export default function About() {
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
                text-[40pt]
            `}>
            About
        </div>
        <div 
            className={`
                ${spaceGrotesk.className} 
                dek 
                text-[24pt]
                md:text-[40pt]
            `}
        >
            <span class={`${instrument.className}`}>Grand Format</span> is a human-centered product development and design agency that brings enterprise-level innovation methods to small and mid-sized businesses. 
        </div>
      </main>

    </div>
  );
}
