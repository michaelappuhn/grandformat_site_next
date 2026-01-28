import styles from "./Logo.module.scss"

export default function Logo() {
    return (
        <div 
            className={`
                ${styles.gfLogo}
                font-sans 
                text-primary
                sm:-ml-2 
                md:-ml-5 
                text-[50pt] 
                md:text-[90pt]
                top-0
                sticky
            `}>
            Grand<br /> Format
        </div> 
    );
}
