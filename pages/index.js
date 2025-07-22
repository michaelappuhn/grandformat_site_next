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
                md:-ml-6 
                text-[24vw] 
                md:text-[25vw]`}>
            Grand Format
        </div>
        <div 
            className={`${spaceGrotesk.className} dek `}
        >
            We design solutions to <a href="https://en.wikipedia.org/wiki/Wicked_problem" target="_blank">wicked problems</a>.
        </div>
      </main>

    </div>
  );
}
