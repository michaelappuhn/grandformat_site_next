import Image from "next/image";
import {Nav, Navitem} from "@/components/navbar";
import PhotocopyBackground from "@/components/PhotocopyBackground";

export default function About() {
  return (
    <div
      className={`font-sans grid grid-rows-[10px_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >

      <Nav />
      <main 
          className="flex flex-col gap-[10px] row-start-2 sm:items-start"
      >
        <PhotocopyBackground />
        <div 
            className={`
            `}>
            <h1
                className={`
                    font-sans 
                    page_head
                    varCondensedBold 
                    md:text-[60pt]
                    text-[60pt]
                `}>
                    About
            </h1>
        </div>
        <div 
            className={`
                font-sans 
                dek 
                text-[24pt]
                md:text-[40pt]
            `}
        >
            <span class={`name`}>Grand Format</span> is a product development and design agency that brings the tech-industry's innovation techniques to small and mid-sized businesses. 
        </div>
      </main>

    </div>
  );
}
