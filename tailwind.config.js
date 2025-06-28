/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          "Monaco",
          "Inconsolata",
          '"Roboto Mono"',
          '"Source Code Pro"',
          "Menlo",
          "Consolas",
          '"DejaVu Sans Mono"',
          "monospace",
        ],
      },
      fontSize: {
        xs: ["11px", { lineHeight: "1.45455", letterSpacing: "0.011em" }],
        sm: ["13px", { lineHeight: "1.46154", letterSpacing: "0.011em" }],
        base: ["17px", { lineHeight: "1.47059", letterSpacing: "-0.022em" }],
        lg: ["19px", { lineHeight: "1.47368", letterSpacing: "-0.022em" }],
        xl: ["21px", { lineHeight: "1.47619", letterSpacing: "-0.022em" }],
        "2xl": ["25px", { lineHeight: "1.4", letterSpacing: "-0.022em" }],
        "3xl": ["31px", { lineHeight: "1.3871", letterSpacing: "-0.022em" }],
        "4xl": ["37px", { lineHeight: "1.37838", letterSpacing: "-0.022em" }],
        "5xl": ["44px", { lineHeight: "1.36364", letterSpacing: "-0.022em" }],
        "6xl": ["52px", { lineHeight: "1.34615", letterSpacing: "-0.022em" }],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      letterSpacing: {
        tight: "-0.022em",
        normal: "-0.011em",
        wide: "0.011em",
      },
    },
  },
  plugins: [],
};
