import "@/styles/globals.scss";
import "@/styles/pages/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <main className="font-sans">
      <Component {...pageProps} />
    </main>
  );
}
