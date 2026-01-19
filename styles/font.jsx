import { Instrument_Sans, Space_Grotesk, Libre_Franklin, Fira_Mono } from "next/font/google";

export const instrument = Instrument_Sans({
  variable: "--font-instrument",
  //axes: ['wght', 'wdth'],
  axes: ['wdth'],
  subsets: ["latin"],
});

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  //weight: '600',
  subsets: ["latin"],
});

export const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

export const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  weight: '400',
  subsets: ["latin"],
});

