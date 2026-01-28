import styles from './Dek.module.scss'
import { firaMono, libreFranklin } from "@/styles/font";


export default function Dek() {
    return (
        <div
         >
        <h3
            className={`
            `}
        
        >
            An innovation studio, focused on solving hard business problems.
        </h3>
        <h1
            className={`
                ${libreFranklin.className} 
                ${styles.page_head}
                dek 
                text-[22pt] 
                md:text-[34pt] 
                leading-[1.23]
                mt-[25pt]
            `}
        >
            We help small teams work like tech companies.
        </h1></div
        >
    );
}
