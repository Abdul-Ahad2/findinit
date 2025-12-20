"use client";

import { Google_Sans_Code, Lobster } from "next/font/google";

const googleSanCode = Google_Sans_Code({
  weight: "800",
  subsets: ["latin"],
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <div className={`${googleSanCode.className} py-16 bg-black`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <div
              className={` ${lobster.className} text-6xl font-extrabold text-blue-500 mb-4`}
            >
              Findinit.
            </div>
            <p
              className="text-3xl text-gray-400 font-light"
              style={{ fontFamily: "var(--font-google-sans-text)" }}
            >
              Find anything. Instantly.
            </p>
          </div>

          <div className="pt-8 text-center">
            <p
              className="text-2xl text-gray-500 font-light"
              style={{ fontFamily: "var(--font-google-sans-text)" }}
            >
              © | {new Date().getFullYear()} Findinit | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
