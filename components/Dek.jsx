import styles from './Dek.module.scss'

import { firaMono } from "@/styles/font";

export default function Dek() {
    return (
        <h1
            className={
                `${firaMono.className} 
                dek 
                sm:text-[18pt] 
                styles.page_head
            `}
        >
            We design solutions to <a href="https://en.wikipedia.org/wiki/Wicked_problem" target="_blank" rel="noreferrer">wicked problems</a>.
        </h1>
    );
}
