import styles from "./navbar.module.scss";

const nav_items = [
    {text: 'Home', url: '/'},
    {text: 'About', url: '/about'},

];

export function Nav () {
    return (
          <header className=" navbar sticky top-0 flex gap-[12px] flex-wrap items-center justify-center">

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

          className={
              ` ${styles.navbar__item}
              flex 
              gap-2 
          `}
          href={url}
        >
         {text} 
        </a>

    );
}
