import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const barlow = localFont({
  src: [
    {
      path: "../public/fonts/Barlow/Barlow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Barlow/Barlow-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Barlow/Barlow-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    // Add more weights/styles as needed
  ],
  variable: "--barlow",
});

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/Roboto/Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },

    // Add more weights/styles as needed
  ],
  variable: "--roboto",
});

const schibstedGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/SchibstedGrotesk/SchibstedGrotesk-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--schibsted-grotesk",
});

const amaranth = localFont({
  src: [
    {
      path: "../public/fonts/Amaranth/Amaranth-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Amaranth/Amaranth-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    // Add more weights/styles as needed
  ],
  variable: "--amaranth",
});

const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat/Montserrat-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    // Add more weights/styles as needed
  ],
  variable: "--montserrat",
});

const modular_amplitude = localFont({
  src: [
    {
      path: "../public/fonts/ModularAmplitude/Modular_Amplitude.otf",
      weight: "400",
      style: "normal",
    },

    // Add more weights/styles as needed
  ],
  variable: "--modularAmplitude",
});

const outfit = localFont({
  src: [
    {
      path: "../public/fonts/Outfit/Outfit-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Outfit/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--outfit",
});
const lufga = localFont({
  src: [
    {
      path: "../public/fonts/Lufga/LufgaThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Lufga/LufgaLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Lufga/LufgaRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Lufga/LufgaSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Lufga/LufgaBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--lufga",
});
const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter/Inter_18pt-Italic.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/Inter_18pt-MediumItalic.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/Inter_18pt-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Inter/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--inter",
});

const suezone = localFont({
  src: [
    {
      path: "../public/fonts/SuezOne/SuezOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--suezone",
});

const sfProDisplay = localFont({
  src: [
    {
      path: "../public/fonts/SFProDisplay/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SFProDisplay/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SFProDisplay/SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--sfProDisplay",
});

const suisseIntl = localFont({
  src: [
    {
      path: "../public/fonts/SuisseIntl/Suisse_Intl_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl/Suisse_Intl_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl/Suisse_Intl_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl/SuisseIntl-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--suisseIntl",
});

const clemente = localFont({
  src: [
    {
      path: "../public/fonts/Clemente/ClementePDae-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Clemente/ClementePDai-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Clemente/ClementePDak-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Clemente/ClementePDam-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--clemente",
});

const overusedGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/OverusedGrotesk/OverusedGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/OverusedGrotesk/OverusedGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/OverusedGrotesk/OverusedGrotesk-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/OverusedGrotesk/OverusedGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/OverusedGrotesk/OverusedGrotesk-Roman.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--overusedGrotesk",
});

const geometria = localFont({
  src: [
    {
      path: "../public/fonts/Geometria/Geometria-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Geometria/Geometria-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Geometria/Geometria.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Geometria/Geometria-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Geometria/Geometria-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--geometria",
});

const neueMachina = localFont({
  src: [
    {
      path: "../public/fonts/NeueMachina/NeueMachina-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMachina/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMachina/NeueMachina-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMachina/NeueMachina-Ultrabold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--neueMachina",
});

const formaDJRMicro = localFont({
  src: [
    {
      path: "../public/fonts/FormaDJRMicro/FormaDJRMicro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/FormaDJRMicro/FormaDJRMicro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FormaDJRMicro/FormaDJRMicro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/FormaDJRMicro/FormaDJRMicro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--formaDJRMicro",
});
const graphie = localFont({
  src: [
    {
      path: "../public/fonts/Graphie/Graphie-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphie/Graphie-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphie/Graphie-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphie/Graphie-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--graphie",
});

const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy/Gilroy-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--gilroy",
});

const dmSans = localFont({
  src: [
    {
      path: "../public/fonts/DMSans/DMSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--dmSans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${geistMono.variable} ${barlow.variable}  ${modular_amplitude.variable} ${roboto.variable} ${amaranth.variable} ${schibstedGrotesk.variable} ${montserrat.variable} ${outfit.variable} ${lufga.variable} ${suezone.variable} ${sfProDisplay.variable} ${suisseIntl.variable} ${overusedGrotesk.variable} ${clemente.variable} ${geometria.variable} ${neueMachina.variable} ${formaDJRMicro.variable} ${graphie.variable} ${gilroy.variable} ${dmSans.variable}  antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
