import { libreFranklin } from "@/styles/font";
import styles from "./Logo.module.scss"

export default function Logo() {
    return (
        <div 
            className={`
                ${libreFranklin.className} 
                ${styles.gfLogo}
                text-primary
                sm:-ml-2 
                md:-ml-5 
                text-[50pt] 
                md:text-[90pt]`}>
            Grand<br /> Format
        </div> 
    );
}
