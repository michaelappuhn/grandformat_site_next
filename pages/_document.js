import { Html, Head, Main, NextScript } from "next/document";
import { libreFranklin, firaMono } from "@/styles/font";

export default function Document() {
  return (
    <Html lang="en" className={`${libreFranklin.variable} ${firaMono.variable}`}>
      <Head>
        {/* Preload the font faces by using the className on a hidden element */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .__font-loader {
                position: absolute;
                width: 0;
                height: 0;
                overflow: hidden;
                font-family: ${libreFranklin.style.fontFamily}, ${firaMono.style.fontFamily};
              }
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <div className="__font-loader" style={{ fontFamily: `${libreFranklin.style.fontFamily}, ${firaMono.style.fontFamily}` }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
