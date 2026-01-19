import { Html, Head, Main, NextScript } from "next/document";
import { libreFranklin, firaMono } from "@/styles/font";

export default function Document() {
  return (
    <Html lang="en" className={`${libreFranklin.variable} ${firaMono.variable}`}>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
