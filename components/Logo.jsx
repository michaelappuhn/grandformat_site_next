import styles from "./Logo.module.scss"

export default function Logo() {
    return (
        <div 
            className={`
                font-sans 
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
