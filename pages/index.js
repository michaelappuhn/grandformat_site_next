import Image from "next/image";
import { instrument, spaceGrotesk } from "@/styles/font";

export default function Home() {
  return (
    <div
      className={`font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <header className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          rel="noopener noreferrer"
        >
          Home
        </a>
      </header>


      <main 
          className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"
      >
        <div 
            className="flex gap-4 items-center flex-col sm:flex-row">
            Test
        </div>
        <div className={`${instrument.className} flex gap-4 items-center flex-col sm:flex-row`}>This is font time</div>
      </main>

    </div>
  );
}
