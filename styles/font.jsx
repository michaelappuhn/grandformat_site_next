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
  // Ensure the font‑face is loaded when the variable is used
  display: 'swap',
});

export const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  weight: '400',
  subsets: ["latin"],
  display: 'swap',
});

