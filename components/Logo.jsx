import { libreFranklin } from "@/styles/font";

export default function Logo() {
    return (
        <div 
            className={`
                ${libreFranklin.className} 
                gfLogo 
                sm:-ml-2 
                md:-ml-5 
                text-[50pt] 
                md:text-[90pt]`}>
            Grand<br /> Format
        </div> 
    );
}
