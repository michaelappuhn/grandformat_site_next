import Image from "next/image";
import {Nav} from "@/components/navbar";
import Dek from "@/components/Dek";
import Logo from "@/components/Logo";
import PhotocopyBackground from "@/components/PhotocopyBackground";

export default function Home() {
    return (
        <div
            className={`font-sans grid grid-rows-[10px_1fr_auto] min-h-screen p-8 pb-20 gap-1 sm:p-20 relative overflow-hidden`}
        >
            <PhotocopyBackground />

            <main 
              className="flex flex-col gap-[10px] row-start-2 sm:items-start"
            >
            <Logo />
            <Nav />
            <Dek />

            </main>

            <section className={`
                font-sans
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
