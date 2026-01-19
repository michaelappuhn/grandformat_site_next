import styles from './Dek.module.scss'
import { firaMono, libreFranklin } from "@/styles/font";


export default function Dek() {
    return (
        <div>
        <p>
            A design and development studio focused on solving <a href="https://en.wikipedia.org/wiki/Wicked_problem" target="_blank" rel="noreferrer">wicked problems</a>.
        </p>
        <h1
            className={
                `${libreFranklin.className} 
                ${styles.page_head}
                dek 
                sm:text-[18pt] 
                styles.page_head
            `}
        >
            We build tools and services around the needs of our clients’ customers and teams.
        </h1></div
        >
    );
}
