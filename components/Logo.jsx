import { libreFranklin } from "@/styles/font";

export default function Logo() {
    return (
        <div 
            className={`
                ${libreFranklin.className} 
                varCondensedBold 
                gfLogo 
                sm:-ml-2 
                md:-ml-5 
                text-[90pt] 
                md:text-[90pt]`}>
            Grand<br /> Format
        </div> 
    );
}
