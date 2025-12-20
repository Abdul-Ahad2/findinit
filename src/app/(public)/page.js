"use client";
import { Google_Sans_Code, Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { PiLightbulbFill } from "react-icons/pi";
import { AiFillRobot } from "react-icons/ai";
import { BiLineChart } from "react-icons/bi";
import { GiLightningHelix } from "react-icons/gi";
import { BsGlobe } from "react-icons/bs";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoLockClosedSharp } from "react-icons/io5";
import { IoShield } from "react-icons/io5";
import { ImRocket } from "react-icons/im";
import { FaArrowRight, FaFile, FaPlay } from "react-icons/fa";

const googleSansText = Google_Sans_Code({
  subsets: ["latin"],
  weight: ["400"],
});

const googleSansDisplay = Poppins({
  subsets: ["latin"],
  weight: ["900"],
});

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${googleSansDisplay.className}  w-full   text-white overflow-hidden`}
    >
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-black via-blue-950/20 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-200 h-200 bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-200 h-200 bg-blue-600/10 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-4 h-4 bg-blue-500 animate-pulse"></div>
            <span
              className="text-sm md:text-xs text-blue-400 uppercase tracking-widest font-light"
              style={{ fontFamily: "var(--font-google-sans-code)" }}
            >
              FINDINIT • DIG DEEP
            </span>
          </div>

          {/* Main Hero Content */}
          <div className="mb-16">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[220px] font-extrabold tracking-tighter mb-8 leading-none">
              <span className="block">
                <span
                  className="text-transparent p-2 bg-clip-text bg-linear-to-r from-blue-400 to-blue-600"
                  style={{ fontFamily: "var(--font-google-sans-display)" }}
                >
                  FIND
                </span>
              </span>
              <span className="block mt-2">
                <span
                  className="text-transparent  p-3 bg-clip-text bg-linear-to-r from-blue-300 via-blue-500 to-blue-600"
                  style={{ fontFamily: "var(--font-google-sans-display)" }}
                >
                  ANYTHING
                </span>
              </span>
            </h1>

            <p
              className={`${googleSansText.className} text-4xl sm:text-5xl md:text-3xl font-light mb-10 tracking-tight`}
            >
              Ask questions.
              <span className="text-blue-400"> Get answers.</span>
              <br />
              No keywords needed.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mb-20 justify-center items-center">
              <button className="group relative px-16 py-8 text-3xl font-extralight overflow-hidden transition-all duration-300 hover:scale-105 border-10 border-blue-500 bg-black min-w-100">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-blue-600 to-blue-600 animate-gradient-x"></div>
                <div className="absolute inset-0.5 bg-black"></div>
                <span className="relative flex items-center justify-center gap-2 text-white">
                  {/* <ImRocket className="text-4xl text-blue-300" /> */}
                  <span
                    style={{ fontFamily: "var(--font-google-sans-text)" }}
                    className="font-light"
                  >
                    START FREE TRIAL
                  </span>
                  <FaArrowRight className="text-3xl group-hover:translate-x-4 transition-transform" />
                </span>
              </button>

              <button className="group relative px-16 py-8 text-3xl font-extralight overflow-hidden transition-all duration-300 hover:scale-105 border-10 border-blue-600 hover:border-blue-500 bg-black min-w-100">
                <div className="absolute inset-0.5 bg-black"></div>
                <span className="relative flex items-center justify-center gap-2 text-white">
                  {/* <FaPlay className="text-3xl text-blue-300" /> */}
                  <span
                    style={{ fontFamily: "var(--font-google-sans-text)" }}
                    className="font-light"
                  >
                    WATCH DEMO
                  </span>
                  <span className="text-blue-500 text-4xl group-hover:text-blue-300 group-hover:translate-x-4 transition-all">
                    <FaArrowRight className="text-3xl group-hover:translate-x-4 transition-transform" />
                  </span>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12 px-48">
              <div className="border-10 flex items-center justify-center h-[25vh] border-blue-600 bg-black/50 p-8">
                <div>
                  <div
                    className="text-5xl md:text-6xl font-extralight text-blue-500 mb-4"
                    style={{ fontFamily: "var(--font-google-sans-display)" }}
                  >
                    50K+
                  </div>
                  <div
                    className="text-2xl text-blue-400 font-light"
                    style={{ fontFamily: "var(--font-google-sans-text)" }}
                  >
                    USERS
                  </div>
                </div>
              </div>
              <div className="border-10 flex items-center justify-center border-blue-600 bg-black/50 p-8">
                <div>
                  <div
                    className="text-5xl md:text-6xl font-extralight text-blue-500 mb-4"
                    style={{ fontFamily: "var(--font-google-sans-display)" }}
                  >
                    99%
                  </div>
                  <div
                    className="text-2xl text-blue-400 font-light"
                    style={{ fontFamily: "var(--font-google-sans-text)" }}
                  >
                    ACCURACY
                  </div>
                </div>
              </div>
              <div className="border-10 flex items-center justify-center border-blue-600 bg-black/50 p-8">
                <div>
                  <div
                    className="text-5xl md:text-6xl font-extralight text-blue-500 mb-4"
                    style={{ fontFamily: "var(--font-google-sans-display)" }}
                  >
                    &lt;2S
                  </div>
                  <div
                    className="text-2xl text-blue-400 font-light"
                    style={{ fontFamily: "var(--font-google-sans-text)" }}
                  >
                    RESPONSE
                  </div>
                </div>
              </div>
              <div className="border-10 flex items-center justify-center border-blue-600 bg-black/50 p-8">
                <div>
                  <div
                    className="text-5xl md:text-6xl font-extralight text-blue-500 mb-4"
                    style={{ fontFamily: "var(--font-google-sans-display)" }}
                  >
                    0
                  </div>
                  <div
                    className="text-2xl text-blue-400 font-light"
                    style={{ fontFamily: "var(--font-google-sans-text)" }}
                  >
                    SETUP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className=" py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-20">
            <h2
              className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter mb-8"
              style={{ fontFamily: "var(--font-google-sans-display)" }}
            >
              <span className="text-white">HOW IT</span>
              <span className="block text-blue-500">WORKS</span>
            </h2>
            <p
              className="text-4xl sm:text-5xl text-blue-400 max-w-4xl mx-auto font-light"
              style={{ fontFamily: "var(--font-google-sans-code)" }}
            >
              Four steps.
              <br />
              <span className="text-blue-400">Zero complexity.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="border-10 text-center border-blue-500 p-8 bg-black">
              <div
                className="text-8xl font-extralight text-blue-500 mb-6"
                style={{ fontFamily: "var(--font-google-sans-display)" }}
              >
                01
              </div>
              <FaFile className="text-6xl text-blue-500 mx-auto mb-6" />
              <h3
                className="text-4xl font-extralight text-white mb-4"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                UPLOAD
              </h3>
              <p
                className="text-2xl text-blue-400 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                Drag & drop files
              </p>
            </div>

            <div className="border-10 text-center border-blue-600 p-8 bg-black">
              <div
                className="text-8xl font-extralight text-blue-600 mb-6"
                style={{ fontFamily: "var(--font-google-sans-display)" }}
              >
                02
              </div>
              <PiLightbulbFill className="text-6xl text-blue-600 mx-auto mb-6" />
              <h3
                className="text-4xl font-extralight text-white mb-4"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                ASK
              </h3>
              <p
                className="text-2xl text-blue-400 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                In plain English
              </p>
            </div>

            <div className="border-10 text-center border-blue-600 p-8 bg-black">
              <div
                className="text-8xl font-extralight text-blue-600 mb-6"
                style={{ fontFamily: "var(--font-google-sans-display)" }}
              >
                03
              </div>
              <AiFillRobot className="text-6xl text-blue-600 mx-auto mb-6" />
              <h3
                className="text-4xl font-extralight text-white mb-4"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                ANSWER
              </h3>
              <p
                className="text-2xl text-blue-400 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                Get instant results
              </p>
            </div>

            <div className="border-10 text-center border-blue-600 p-8 bg-black">
              <div
                className="text-8xl font-extralight text-blue-600 mb-6"
                style={{ fontFamily: "var(--font-google-sans-display)" }}
              >
                04
              </div>
              <BiLineChart className="text-6xl text-blue-600 mx-auto mb-6" />
              <h3
                className="text-4xl font-extralight text-white mb-4"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                DISCOVER
              </h3>
              <p
                className="text-2xl text-blue-400 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                See connections
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className=" py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-20">
            <h2
              className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter mb-8"
              style={{ fontFamily: "var(--font-google-sans-display)" }}
            >
              <span className="text-white">WHY</span>
              <span className="block text-blue-500">FINDINIT</span>
            </h2>
            <p
              className="text-4xl sm:text-5xl text-blue-400 max-w-4xl mx-auto font-light"
              style={{ fontFamily: "var(--font-google-sans-text)" }}
            >
              Power.
              <br />
              <span className="text-blue-400">Simplicity.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="border-10 text-center border-blue-500 p-10 bg-black">
              <GiLightningHelix className="text-8xl text-blue-500 mx-auto mb-8" />
              <h3
                className="text-5xl font-extralight text-white mb-6"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                LIGHTNING FAST
              </h3>
              <p
                className="text-3xl text-blue-400 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                Instant answers
              </p>
            </div>

            <div className="border-10 text-center border-blue-600 p-10 bg-black">
              <BsGlobe className="text-8xl text-blue-600 mx-auto mb-8" />
              <h3
                className="text-5xl font-extralight text-white mb-6"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                ALL FORMATS
              </h3>
              <p
                className="text-3xl text-blue-400 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                PDF, Word, Excel, PPT
              </p>
            </div>

            <div className="border-10 text-center border-blue-600 p-10 bg-black">
              <LiaUserFriendsSolid className="text-8xl text-blue-600 mx-auto mb-8" />
              <h3
                className="text-5xl font-extralight text-white mb-6"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                TEAM <br /> READY
              </h3>
              <p
                className="text-3xl text-blue-400 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                Collaborate easily
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-20">
            <h2
              className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter mb-8"
              style={{ fontFamily: "var(--font-google-sans-display)" }}
            >
              <span className="text-white">SECURE</span>
              <span className="block text-blue-500">BY DESIGN</span>
            </h2>
            <p
              className="text-4xl sm:text-5xl text-blue-400 max-w-4xl mx-auto font-light"
              style={{ fontFamily: "var(--font-google-sans-text)" }}
            >
              Your data.
              <br />
              <span className="text-blue-400">Your control.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div className="border-10 text-center border-blue-500 p-10 bg-black">
              <IoLockClosedSharp className="text-8xl text-blue-500 mx-auto mb-8" />
              <h3
                className="text-5xl font-extralight text-white mb-6"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                YOUR <br /> DATA
              </h3>
              <p
                className="text-3xl text-blue-400 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                Never shablue
              </p>
            </div>

            <div className="border-10 text-center border-blue-600 p-10 bg-black">
              <IoShield className="text-8xl text-blue-600 mx-auto mb-8" />
              <h3
                className="text-5xl font-extralight text-white mb-6"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                BANK SECURITY
              </h3>
              <p
                className="text-3xl text-blue-400 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                Military grade
              </p>
            </div>

            <div className="border-10 text-center border-blue-600 p-10 bg-black">
              <BsGlobe className="text-8xl text-blue-600 mx-auto mb-8" />
              <h3
                className="text-5xl font-extralight text-white mb-6"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                NO <br /> MINING
              </h3>
              <p
                className="text-3xl text-blue-400 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                Transparent
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="border-10 text-center border-blue-500 p-12 bg-black">
            <h3
              className="text-5xl sm:text-6xl font-extralight text-white mb-8"
              style={{ fontFamily: "var(--font-google-sans-text)" }}
            >
              READY TO START?
            </h3>
            <p
              className="text-3xl text-blue-400 mb-12 font-light"
              style={{ fontFamily: "var(--font-google-sans-text)" }}
            >
              Join thousands today.
            </p>
            <button className="group relative px-20 py-10 text-4xl font-extralight overflow-hidden transition-all duration-300 hover:scale-105 border-10 border-blue-500 bg-black inline-block">
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-blue-600 to-blue-600 animate-gradient-x"></div>
              <div className="absolute inset-0.5 bg-black"></div>
              <span className="relative flex items-center  justify-center gap-2 text-white">
                {/* <ImRocket className="text-5xl text-blue-300" /> */}
                <span
                  style={{ fontFamily: "var(--font-google-sans-text)" }}
                  className="font-light"
                >
                  START FREE TRIAL
                </span>
                <FaArrowRight className="text-4xl group-hover:translate-x-4 transition-transform" />
              </span>
            </button>
            <p
              className="text-2xl text-blue-500 mt-8 font-light"
              style={{ fontFamily: "var(--font-google-sans-text)" }}
            >
              No credit card • 14-day trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        * {
          border-radius: 0 !important;
        }
      `}</style>
    </div>
  );
}
