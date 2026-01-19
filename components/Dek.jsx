import styles from './Dek.module.scss'
import { firaMono, libreFranklin } from "@/styles/font";


export default function Dek() {
    return (
        <div
         >
        <p
            className={`
                text-[14pt]
                ${styles.lede}
            `}
        
        >
            A design and development studio focused on solving <a href="https://en.wikipedia.org/wiki/Wicked_problem" target="_blank" rel="noreferrer">wicked problems</a>.
        </p>
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
            We build tools and services around the needs of our clients’ customers and teams.
        </h1></div
        >
    );
}
