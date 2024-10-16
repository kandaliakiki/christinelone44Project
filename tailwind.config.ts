import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--barlow)"],
        modularAmplitude: ["var(--modularAmplitude)"],
        roboto: ["var(--roboto)"],
        amaranth: ["var(--amaranth)"],
        schibstedGrotesk: ["var(--schibstedGrotesk)"],
        montserrat: ["var(--montserrat)"],
        outfit: ["var(--outfit)"],
        lufga: ["var(--lufga)"],
        inter: ["var(--inter)"],
        suezone: ["var(--suezone)"],
        sfProDisplay: ["var(--sfProDisplay)"],
        suisseIntl: ["var(--suisseIntl)"],
        overusedGrotesk: ["var(--overusedGrotesk)"],
        clemente: ["var(--clemente)"],
        geometria: ["var(--geometria)"],
        neueMachina: ["var(--neueMachina)"],
        formaDJRMicro: ["var(--formaDJRMicro)"],
        graphie: ["var(--graphie)"],
        gilroy: ["var(--gilroy)"],
        dmSans: ["var(--dmSans)"],
        nunitoSans: ["var(--nunitoSans)"],
        lato: ["var(--lato)"],
        mulish: ["var(--mulish)"],
      },
      backgroundImage: {
        "hero-a1-background-2": "url('/assets/hero-a1-background_2.png')",
        "hero-a1-background-3": "url('/assets/hero-a1-background_3.png')",
        "hero-a4-background-1": "url('/assets/hero-a4-background_1.png')",
        "hero-a4-background-2": "url('/assets/hero-a4-background_2.png')",
        "a2-background-1": "url('/assets/a2-background_1.png')",
        "a4-background-1": "url('/assets/a4-background-6.png')",
        "a2-background_2": "url('/assets/a2-background_2.jpg')",
        "cookie-background-a5": "url('/assets/cookie-background-a5.png')",
        "forest-background-a16": "url('/assets/forest-background-a16.png')",
        "a11-background-heart": "url('/assets/a11-background-heart.png')",
        "a12-background-couple": "url('/assets/a12-background-couple.png')",

        "girl1-background-dateapp":
          "url('/assets/girl1-background-dateapp.png')",
        "girl2-background-dateapp":
          "url('/assets/girl2-background-dateapp.png')",
        "glucose-measuring": "url('/assets/bg-glucose-measuring.png')",
        "profile-face": "url('/assets/profile-face.png')",
        "profile-face-nobg": "url('/assets/profile-face-nobg.png')",
      },
      colors: {
        "gray-theme-a1": "#2A2A2A",
        "light-gray-theme-a1": "#575554",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
