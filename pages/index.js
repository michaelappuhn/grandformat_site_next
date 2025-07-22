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
            className={`${instrument.className} varCondensedBold gfLogo md:-ml-6 text-[28vw] md:text-[25vw]`}>
            Grand Format
        </div>
        <div className={`${instrument.className} flex gap-4 items-center `}>
        We design solutions to wicked problems.
        </div>
      </main>

    </div>
  );
}
