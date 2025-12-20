"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { PiPlus, PiTrash } from "react-icons/pi";

const googleSansDisplay = Poppins({
  subsets: ["latin"],
  weight: ["900", "400"],
});

export default function DocumentsLibrary() {
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
      name: "Market Analysis.xlsx",
      pages: 15,
      uploaded: "1 month ago",
      chunks: 78,
    },
    {
      id: 5,
      name: "Engineering Guidelines.pdf",
      pages: 56,
      uploaded: "2 weeks ago",
      chunks: 289,
    },
    {
      id: 6,
      name: "2024 Strategy.pptx",
      pages: 34,
      uploaded: "3 days ago",
      chunks: 167,
    },
  ];

  return (
    <div className="w-full text-white mt-20 overflow-hidden min-h-screen ">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-200 h-200 bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-200 h-200 bg-blue-600/10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-20 flex items-center justify-between">
            <div>
              <h1
                className="text-6xl sm:text-8xl tracking-tighter font-extrabold mb-4"
                style={{ fontFamily: googleSansDisplay.style.fontFamily }}
              >
                <span className="text-white">MY</span>
                <span className="block text-blue-500">DOCUMENTS</span>
              </h1>
              <p
                className="text-2xl text-blue-400"
                style={{
                  fontFamily: googleSansDisplay.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                <span className="text-white font-extrabold">
                  {mockDocuments.length}
                </span>{" "}
                documents total
              </p>
            </div>
            <button
              className="flex items-center gap-3 px-10 py-6 border-10 border-blue-500 bg-blue-600/20 hover:bg-blue-600/30 transition h-fit font-extrabold text-lg"
              style={{ fontFamily: googleSansDisplay.style.fontFamily }}
            >
              <PiPlus className="text-3xl" />
              <span>UPLOAD</span>
            </button>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockDocuments.map((doc) => (
              <div
                key={doc.id}
                className="border-10 border-blue-600 p-8 bg-black/50 hover:bg-black/70 transition aspect-square flex flex-col justify-between group"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div
                      className="text-3xl text-white font-extrabold mb-6 line-clamp-3 leading-tight"
                      style={{ fontFamily: googleSansDisplay.style.fontFamily }}
                    >
                      {doc.name.replace(/\.[^/.]+$/, "")}
                    </div>
                    <div className="space-y-2">
                      <div
                        className="text-sm text-blue-400 font-semibold"
                        style={{
                          fontFamily: googleSansDisplay.style.fontFamily,
                          fontWeight: 600,
                        }}
                      >
                        {doc.pages} PAGES
                      </div>
                      <div
                        className="text-sm text-blue-400 font-semibold"
                        style={{
                          fontFamily: googleSansDisplay.style.fontFamily,
                          fontWeight: 600,
                        }}
                      >
                        {doc.chunks} CHUNKS
                      </div>
                      <div
                        className="text-xs text-blue-500/60 font-semibold"
                        style={{
                          fontFamily: googleSansDisplay.style.fontFamily,
                          fontWeight: 600,
                        }}
                      >
                        ADDED {doc.uploaded.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6 pt-6 border-t border-blue-600/30">
                    <button
                      className="flex-1 px-4 py-3 border-10 border-blue-500 hover:bg-blue-500/20 transition text-blue-400 font-extrabold text-sm"
                      style={{ fontFamily: googleSansDisplay.style.fontFamily }}
                    >
                      SEARCH
                    </button>
                    <button className="px-4 py-3 border-10 border-red-600/50 hover:bg-red-600/20 transition text-red-400">
                      <PiTrash className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
