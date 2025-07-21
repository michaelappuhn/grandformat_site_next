import Image from "next/image";
import { Inter, Inter_Tight, Space_Grotesk } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  weight: '600',
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  weight: '600',
  subsets: ["latin"],
});


export default function Home() {
  return (
    <div
      className={`${inter.className} ${interTight.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
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
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">Test</div>
      </main>
    </div>
  );
}
