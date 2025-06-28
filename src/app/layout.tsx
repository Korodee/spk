import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

// Apple's SF Pro Display font system with fallbacks
const sfProDisplay = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sf-pro-display",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Centre Amusement SPK",
  description: "Passez une journée inoubliable au Centre Amusement SPK!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfProDisplay.variable} font-sans antialiased bg-white`}
        style={{
          fontFamily: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif`,
        }}
      >
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
