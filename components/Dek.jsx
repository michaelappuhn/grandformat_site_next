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
            A design and development studio, that solves hard business problems.
        </h3>
        <h1
            className={`
                ${libreFranklin.className} 
                ${styles.page_head}
                dek 
                text-[22pt] 
                md:text-[34pt] 
                font-weight-[700]
                leading-[1.23]
                mt-[10pt]
            `}
        >
            We help small teams work like tech companies.
        </h1></div
        >
    );
}
