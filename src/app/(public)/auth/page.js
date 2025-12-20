"use client";
import { Google_Sans_Code, Poppins } from "next/font/google";
import { useState } from "react";
import { ImRocket } from "react-icons/im";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";

const googleSansText = Google_Sans_Code({
  subsets: ["latin"],
  weight: ["400"],
});

const googleSansDisplay = Poppins({
  subsets: ["latin"],
  weight: ["900"],
});

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Registering...", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`${googleSansDisplay.className}  w-full min-h-screen  text-white overflow-hidden flex items-center justify-center`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-black via-blue-950/20 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-200 h-200 bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-200 h-200 bg-blue-600/10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6"></div>

          <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter mb-8 leading-none">
            <span className="block">
              <span
                className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600"
                style={{ fontFamily: "var(--font-google-sans-display)" }}
              >
                {isLogin ? "WELCOME" : "JOIN"}
              </span>
            </span>
            <span className="block mt-2">
              <span
                className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 via-blue-500 to-blue-700 p-2"
                style={{ fontFamily: "var(--font-google-sans-display)" }}
              >
                {isLogin ? "BACK" : "US"}
              </span>
            </span>
          </h1>

          <p
            className={`${googleSansText.className} text-3xl sm:text-4xl font-light mb-8 tracking-tight`}
          >
            {isLogin ? "Sign in to continue" : "Create your free account"}
          </p>
        </div>

        {/* Auth Container */}
        <div className="max-w-2xl mx-auto">
          {/* Toggle Switch */}
          <div className="flex border-10 border-blue-500 mb-12">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-6 text-3xl font-extralight transition-all duration-300 ${
                isLogin
                  ? "bg-blue-500 text-white"
                  : "bg-black text-blue-400 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-google-sans-text)" }}
            >
              LOGIN
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-6 text-3xl font-extralight transition-all duration-300 ${
                !isLogin
                  ? "bg-blue-500 text-white"
                  : "bg-black text-blue-400 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-google-sans-text)" }}
            >
              REGISTER
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {!isLogin && (
              <div>
                <label
                  className="block text-2xl text-blue-400 mb-4 font-light"
                  style={{ fontFamily: "var(--font-google-sans-text)" }}
                >
                  FULL NAME
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-0 py-5 text-2xl bg-transparent border-0 border-b-2 border-blue-800 focus:border-b-blue-500 focus:outline-none transition-colors font-light placeholder-blue-600"
                    placeholder="Enter your full name"
                    requiblue={!isLogin}
                    style={{ fontFamily: "var(--font-google-sans-text)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300"></div>
                </div>
              </div>
            )}

            <div>
              <label
                className="block text-2xl text-blue-400 mb-4 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-5 text-2xl bg-transparent border-0 border-b-2 border-blue-800 focus:border-b-blue-500 focus:outline-none transition-colors font-light placeholder-blue-600"
                  placeholder="you@example.com"
                  requiblue
                  style={{ fontFamily: "var(--font-google-sans-text)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300"></div>
              </div>
            </div>

            <div>
              <label
                className="block text-2xl text-blue-400 mb-4 font-light"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-0 py-5 text-2xl bg-transparent border-0 border-b-2 border-blue-800 focus:border-b-blue-500 focus:outline-none transition-colors font-light placeholder-blue-600 pr-16"
                  placeholder="••••••••"
                  requiblue
                  style={{ fontFamily: "var(--font-google-sans-text)" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-500 text-2xl hover:text-blue-400 transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300"></div>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label
                  className="block text-2xl text-blue-400 mb-4 font-light"
                  style={{ fontFamily: "var(--font-google-sans-text)" }}
                >
                  CONFIRM PASSWORD
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-0 py-5 text-2xl bg-transparent border-0 border-b-2 border-blue-800 focus:border-b-blue-500 focus:outline-none transition-colors font-light placeholder-blue-600"
                    placeholder="••••••••"
                    requiblue={!isLogin}
                    style={{ fontFamily: "var(--font-google-sans-text)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300"></div>
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex justify-between items-center mt-8">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-6 h-6 bg-transparent border-5 border-blue-500 checked:bg-blue-500"
                  />
                  <label
                    htmlFor="remember"
                    className="text-xl text-blue-400 font-light"
                    style={{ fontFamily: "var(--font-google-sans-text)" }}
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-xl text-blue-400 hover:text-blue-300 transition-colors font-light"
                  style={{ fontFamily: "var(--font-google-sans-text)" }}
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="group relative w-full py-8 text-4xl font-extralight overflow-hidden transition-all duration-300 hover:scale-[1.02] border-10 border-blue-500 bg-black mt-12"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-blue-800 to-blue-600 animate-gradient-x"></div>
              <div className="absolute inset-0.75 bg-black"></div>
              <span className="relative flex items-center justify-center gap-6 text-white">
                {/* <ImRocket className="text-5xl text-blue-300" /> */}
                <span
                  style={{ fontFamily: "var(--font-google-sans-text)" }}
                  className="font-light"
                >
                  {isLogin ? "SIGN IN" : "CREATE ACCOUNT"}
                </span>
                {/* <FaArrowRight className="text-4xl group-hover:translate-x-4 transition-transform" /> */}
              </span>
            </button>
            <button
              type="submit"
              className="group relative w-full py-8 text-4xl font-extralight overflow-hidden transition-all duration-300 hover:scale-[1.02] border-10 border-blue-500 bg-black"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-blue-800 to-blue-600 animate-gradient-x"></div>
              <div className="absolute inset-0.75 bg-black"></div>
              <span className="relative flex items-center justify-center gap-6 text-white">
                {/* <ImRocket className="text-5xl text-blue-300" /> */}
                <span
                  style={{ fontFamily: "var(--font-google-sans-text)" }}
                  className="font-light"
                >
                  {isLogin ? "SIGN IN WITH GOOGLE" : "SIGN UP WITH GOOGLE"}
                </span>
                {/* <FaArrowRight className="text-4xl group-hover:translate-x-4 transition-transform" /> */}
              </span>
            </button>
          </form>

          {/* Switch Prompt */}
          <div className="mt-16 text-center">
            <p
              className="text-2xl text-blue-400 font-light"
              style={{ fontFamily: "var(--font-google-sans-text)" }}
            >
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-3 text-blue-400 hover:text-blue-300 transition-colors underline"
                style={{ fontFamily: "var(--font-google-sans-text)" }}
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
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

        input::placeholder {
          color: gray;
          font-weight: 300;
        }

        input:focus {
          outline: none;
          box-shadow: none;
        }

        /* Custom checkbox styling */
        input[type="checkbox"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          cursor: pointer;
        }

        input[type="checkbox"]:checked {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E");
          background-size: 16px 16px;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}
