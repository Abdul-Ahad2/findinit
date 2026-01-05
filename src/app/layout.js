"use client";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { AnimatedGrid } from "./components/AnimateGrid";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-black antialiased`}>
        <SessionProvider>
          <AnimatedGrid>{children}</AnimatedGrid>
        </SessionProvider>
      </body>
    </html>
  );
}
