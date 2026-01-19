import { libreFranklin,firaMono } from "@/styles/font";
import styles from "./navbar.module.scss";

const nav_items = [
    {text: 'Home', url: '/'},
    {text: 'About', url: '/about'},
    {text: 'Services', url: '/services'},
    {text: 'Contact', url: '/contact'},

];

export function Nav () {
    return (
          <header className="
            {styles.navbar}
            ${firaMono.className}
            sticky top-0 flex gap-[40px] flex-wrap 
        ">

      {nav_items.map((item, index) => (
       <Navitem
          text={item.text}
          url={item.url}
      />
      ))}

      </header>
    );
}

function Navitem ({text, url}) {
    return (
        <a
          className={`
              ${firaMono.className}
              ${styles.navbar__item}
              flex 
              gap-2 
          `}
          href={url}
        >
         {text} 
        </a>

    );
}
