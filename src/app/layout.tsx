import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { MotionConfig } from "framer-motion";

// Apple's SF Pro Display font system with fallbacks
const sfProDisplay = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sf-pro-display",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amusementspk.ca"),
  title: {
    default: "Centre Amusement SPK",
    template: "%s | SPK",
  },
  description: "Passez une journée inoubliable au Centre Amusement SPK!",
  openGraph: {
    title: "Centre Amusement SPK",
    description: "Passez une journée inoubliable au Centre Amusement SPK!",
    url: "/",
    siteName: "SPK",
    type: "website",
    images: [{ url: "/hero-img.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centre Amusement SPK",
    description: "Passez une journée inoubliable au Centre Amusement SPK!",
    images: ["/hero-img.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
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
        <MotionConfig reducedMotion="user">
          <Navigation />
          <main>{children}</main>
        </MotionConfig>
      </body>
    </html>
  );
}
