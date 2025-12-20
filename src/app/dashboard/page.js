"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";
import {
  PiGear,
  PiCaretDown,
  PiBooks,
  PiMagnifyingGlass,
  PiFolders,
  PiSignOut,
  PiUser,
} from "react-icons/pi";
import { FaFile } from "react-icons/fa";

const googleSansDisplay = Poppins({
  subsets: ["latin"],
  weight: ["900", "400"],
});

export default function Dashboard() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Mock data
  const mockDocuments = [
    {
      id: 1,
      name: "Q3 Financial Report.pdf",
      pages: 47,
      uploaded: "2 days ago",
      chunks: 234,
    },
    {
      id: 2,
      name: "Product Roadmap 2025.docx",
      pages: 23,
      uploaded: "1 week ago",
      chunks: 112,
    },
    {
      id: 3,
      name: "Company Handbook.pdf",
      pages: 89,
      uploaded: "3 weeks ago",
      chunks: 445,
    },
    {
      id: 4,
      name: "Company Handbook.pdf",
      pages: 89,
      uploaded: "3 weeks ago",
      chunks: 445,
    },
  ];

  return (
    <div className="w-full text-white mt-20 overflow-hidden  min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-200 h-200 bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-200 h-200 bg-blue-600/10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-20">
            <h1
              className="text-6xl sm:text-8xl tracking-tighter font-extrabold mb-4"
              style={{ fontFamily: googleSansDisplay.style.fontFamily }}
            >
              <span className="text-white">WELCOME</span>
              <span className="block text-blue-500">BACK</span>
            </h1>
            <p
              className="text-2xl text-blue-400"
              style={{
                fontFamily: googleSansDisplay.style.fontFamily,
                fontWeight: 400,
              }}
            >
              You have <span className="text-white font-extrabold">4</span>{" "}
              documents ready to search.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 h-[27vh] gap-2 mb-20 px-32">
            <div className="border-10 flex items-center justify-center border-blue-600 p-8 bg-black/50">
              <div className="text-center">
                <div
                  className="text-5xl font-extrabold text-blue-500 mb-2"
                  style={{ fontFamily: googleSansDisplay.style.fontFamily }}
                >
                  4
                </div>
                <div
                  className="text-lg text-gray-200"
                  style={{
                    fontFamily: googleSansDisplay.style.fontFamily,
                    fontWeight: 600,
                  }}
                >
                  DOCUMENTS
                </div>
              </div>
            </div>
            <div className="border-10 border-blue-600 p-8 flex items-center justify-center bg-black/50">
              <div className="text-center">
                <div
                  className="text-5xl font-extrabold text-blue-500 mb-2"
                  style={{ fontFamily: googleSansDisplay.style.fontFamily }}
                >
                  869
                </div>
                <div
                  className="text-lg text-gray-200"
                  style={{
                    fontFamily: googleSansDisplay.style.fontFamily,
                    fontWeight: 600,
                  }}
                >
                  CHUNKS
                </div>
              </div>
            </div>
            <div className="border-10 flex items-center justify-center border-blue-600 p-8 bg-black/50">
              <div className="text-center">
                <div
                  className="text-5xl font-extrabold text-blue-500 mb-2"
                  style={{ fontFamily: googleSansDisplay.style.fontFamily }}
                >
                  2.4MB
                </div>
                <div
                  className="text-lg text-gray-200"
                  style={{
                    fontFamily: googleSansDisplay.style.fontFamily,
                    fontWeight: 600,
                  }}
                >
                  STORAGE USED
                </div>
              </div>
            </div>
            <div className="border-10 border-blue-600 p-8 flex items-center justify-center bg-black/50">
              <div className="text-center">
                <div
                  className="text-5xl font-extrabold text-blue-500 mb-2"
                  style={{ fontFamily: googleSansDisplay.style.fontFamily }}
                >
                  47
                </div>
                <div
                  className="text-lg text-gray-200"
                  style={{
                    fontFamily: googleSansDisplay.style.fontFamily,
                    fontWeight: 600,
                  }}
                >
                  QUERIES
                </div>
              </div>
            </div>
          </div>

          {/* Recent Documents */}
          <div>
            <h2
              className="text-6xl px-32 tracking-tighter font-extrabold text-white mb-8"
              style={{ fontFamily: googleSansDisplay.style.fontFamily }}
            >
              RECENT &nbsp; DOCUMENTS
            </h2>
            <div className="space-y-2 px-32">
              {mockDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="border-10 border-blue-600 p-6 bg-black/50 hover:bg-black/70 transition flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <FaFile className="text-2xl text-blue-500" />
                    <div>
                      <div className="text-xl text-white font-extrabold">
                        {doc.name}
                      </div>
                      <div
                        className="text-sm text-blue-400"
                        style={{
                          fontFamily: googleSansDisplay.style.fontFamily,
                          fontWeight: 600,
                        }}
                      >
                        {doc.pages} pages • {doc.chunks} chunks • {doc.uploaded}
                      </div>
                    </div>
                  </div>
                  <button
                    className="px-6 py-2 border-10 border-gray-500 hover:bg-blue-500/20 transition text-gray-400"
                    style={{
                      fontFamily: googleSansDisplay.style.fontFamily,
                      fontWeight: 600,
                    }}
                  >
                    SEARCH
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        * {
          border-radius: 0 !important;
        }
      `}</style>
    </div>
  );
}
