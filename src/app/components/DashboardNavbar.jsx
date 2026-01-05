"use client";
import { Poppins, Lobster } from "next/font/google";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  PiGear,
  PiCaretDown,
  PiBooks,
  PiMagnifyingGlass,
  PiFolders,
  PiSignOut,
  PiUser,
} from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

const googleSansDisplay = Poppins({
  subsets: ["latin"],
  weight: ["900", "400"],
});

export default function Navbar({ currentPage = "dashboard" }) {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  // Navigation items for logged-in users
  const navItems = [
    { id: "", label: "DASHBOARD", icon: RxDashboard },
    { id: "documents", label: "DOCUMENTS", icon: PiBooks },
    { id: "search", label: "SEARCH", icon: PiMagnifyingGlass },
    { id: "collections", label: "COLLECTIONS", icon: PiFolders },
  ];

  const handleLogout = async () => {
    await signOut({ redirect: false });
    setShowProfileDropdown(false);
    router.push("/auth");
  };

  // Get user initials from name
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-blue-600/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-1 py-7">
        <div className="flex items-center justify-between">
          {/* Left Nav */}
          <div className="flex items-center gap-12">
            <a
              href="/dashboard"
              className="text-5xl font-extrabold text-blue-400 hover:text-blue-400 transition"
              style={{ fontFamily: lobster.style.fontFamily }}
            >
              Findinit.
            </a>

            {/* Nav Items - Only show if logged in */}
            {currentPage !== "login" && currentPage !== "landing" && (
              <div className="hidden md:flex gap-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`/dashboard/${item.id}`}
                      className={`flex items-center gap-2 text-lg transition ${
                        isActive
                          ? "text-blue-400"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      <Icon className="text-xl" />
                      <span
                        style={{
                          fontFamily: googleSansDisplay.style.fontFamily,
                          fontWeight: 400,
                        }}
                      >
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-6">
            {/* Settings Icon - Only show if logged in */}
            {currentPage !== "login" && currentPage !== "landing" && (
              <a
                href="/dashboard/settings"
                className={`transition text-xl ${
                  currentPage === "settings"
                    ? "text-blue-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <PiGear />
              </a>
            )}

            {/* Profile Dropdown - Only show if logged in */}
            {currentPage !== "login" && currentPage !== "landing" && (
              <div className="relative">
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center gap-3 px-4 py-2 border border-blue-600/30 hover:border-blue-500 transition group"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {getInitials(session?.user?.name)}
                  </div>
                  <span
                    className="text-white text-sm hidden sm:block"
                    style={{
                      fontFamily: googleSansDisplay.style.fontFamily,
                      fontWeight: 400,
                    }}
                  >
                    {session?.user?.name || "User"}
                  </span>
                  <PiCaretDown className="text-blue-400 group-hover:text-blue-300" />
                </button>

                {showProfileDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-black border border-blue-600/50 w-48 overflow-hidden">
                    <a
                      href="/dashboard/profile"
                      className="w-full text-left px-4 py-2 text-white hover:bg-blue-600/20 border-b border-blue-600/30 flex items-center gap-2"
                      style={{
                        fontFamily: googleSansDisplay.style.fontFamily,
                        fontWeight: 400,
                      }}
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      <PiUser className="text-lg" /> MY ACCOUNT
                    </a>
                    <a
                      href="/dashboard/settings"
                      className="w-full text-left px-4 py-2 text-white hover:bg-blue-600/20 border-b border-blue-600/30"
                      style={{
                        fontFamily: googleSansDisplay.style.fontFamily,
                        fontWeight: 400,
                      }}
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      BILLING
                    </a>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-600/20 flex items-center gap-2"
                      style={{
                        fontFamily: googleSansDisplay.style.fontFamily,
                        fontWeight: 400,
                      }}
                    >
                      <PiSignOut className="text-lg" /> LOGOUT
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Login Button - Only show if not logged in */}
            {(currentPage === "login" || currentPage === "landing") && (
              <a
                href="/auth"
                className="px-6 py-2 border border-blue-500 hover:bg-blue-500/20 transition text-blue-400 font-semibold"
                style={{
                  fontFamily: googleSansDisplay.style.fontFamily,
                  fontWeight: 600,
                }}
              >
                LOGIN
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
