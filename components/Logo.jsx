import styles from "./Logo.module.scss"

export default function Logo() {
    return (
        <div 
            className={`
                ${styles.gfLogo}
                gf_logo
                font-sans 
                text-primary
                text-[50pt] 
                md:text-[90pt]
                top-0
                sticky
            `}>
            Grand<br /> Format
        </div> 
    );
}
