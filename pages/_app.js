import "@/styles/globals.scss";
import "@/styles/pages/index.scss";
import { instrument, spaceGrotesk } from "@/styles/font";

export default function App({ Component, pageProps }) {
  return (
    <main className={`
        ${instrument.className} 
        ${spaceGrotesk.className}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
