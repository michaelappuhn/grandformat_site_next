import Image from "next/image";
import { instrument, spaceGrotesk } from "@/styles/font";
import {Nav, Navitem} from "@/components/navbar";

export default function Home() {
  return (
    <div
      className={`font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >

      <Nav />
      <main 
          className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"
      >
        <div 
            className={`${instrument.className} varCondensedBold gfLogo text-[20vw]`}>
            Grand Format
        </div>
        <div className={`${instrument.className} flex gap-4 items-center flex-col sm:flex-row`}>This is font time</div>
      </main>

    </div>
  );
}
