import { Instrument_Sans, Space_Grotesk } from "next/font/google";
export const instrument = Instrument_Sans({
  variable: "--font-instrument",
  axes: ['wght', 'wdth'],
  subsets: ["latin"],
});

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  //weight: '600',
  subsets: ["latin"],
});

