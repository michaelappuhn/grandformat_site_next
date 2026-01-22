import "@/styles/globals.scss";
import "@/styles/pages/index.scss";
import { GoogleAnalytics } from '@next/third-parties/google'


export default function App({ Component, pageProps }) {
  return (
    <main className="font-sans">
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-T2KW340RY4" />
    </main>
  );
}
