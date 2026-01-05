"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { PiX, PiCaretDown } from "react-icons/pi";

const googleSansDisplay = Poppins({
  subsets: ["latin"],
  weight: ["900", "400"],
});

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [showCollectionDropdown, setShowCollectionDropdown] = useState(false);

  const collections = [
    { id: "all", name: "All Documents" },
    { id: "financial", name: "Financial Reports" },
    { id: "product", name: "Product & Roadmap" },
    { id: "hr", name: "HR & Operations" },
    { id: "market", name: "Market Analysis" },
  ];

  const mockResults = [
    {
      id: 1,
      collection: "financial",
      doc: "Q3 Financial Report.pdf",
      page: 12,
      snippet:
        "Revenue increased by 23% YoY, driven primarily by enterprise segment growth and expansion into new markets. The company achieved record-breaking quarterly earnings...",
      fullContext:
        "Q3 represents our strongest quarter to date. Revenue increased by 23% YoY, driven primarily by enterprise segment growth and expansion into new markets. The company achieved record-breaking quarterly earnings of $2.4B. Operating margins improved to 34%, up from 31% in Q2. Key drivers include the launch of our new AI-powered analytics platform and strategic partnerships with industry leaders. Customer acquisition costs declined by 18% while lifetime value increased by 25%. The company is well-positioned for continued growth in Q4.",
    },
    {
      id: 2,
      collection: "market",
      doc: "Market Analysis.xlsx",
      page: 5,
      snippet:
        "Market penetration in North America reached 34%, up from 28% last quarter. Our competitive positioning remains strong with a 15% market share advantage...",
      fullContext:
        "Market penetration in North America reached 34%, up from 28% last quarter. Our competitive positioning remains strong with a 15% market share advantage over our nearest competitor. The enterprise segment shows the highest growth rate at 42% YoY, while SMB segment growth stands at 18%. EMEA region is emerging as our fastest-growing market with 56% growth. APAC market shows steady growth of 28% with significant untapped potential. Price elasticity analysis suggests room for 8-12% price increases without significant churn impact.",
    },
    {
      id: 3,
      collection: "product",
      doc: "Product Roadmap 2025.docx",
      page: 8,
      snippet:
        "Q4 priorities include launch of enterprise features, integration with major platforms, and expansion of our AI capabilities. Expected market impact...",
      fullContext:
        "Q4 2024 priorities include launch of enterprise features, integration with major platforms, and expansion of our AI capabilities. The mobile app redesign will focus on improving user engagement metrics. Expected market impact includes 30% increase in enterprise adoption and 45% improvement in daily active users. Security and compliance certifications will be finalized by end of Q4. The product team has allocated 40% of engineering resources to platform stability and performance improvements.",
    },
    {
      id: 4,
      collection: "hr",
      doc: "Company Handbook.pdf",
      page: 42,
      snippet:
        "Our core values emphasize innovation, transparency, and customer obsession. These principles guide all decision-making across the organization...",
      fullContext:
        "Our core values emphasize innovation, transparency, and customer obsession. These principles guide all decision-making across the organization. We believe in empowering every team member to make decisions that benefit our customers. Our commitment to transparency means regular communication of company goals, progress, and challenges. Customer obsession is embedded in our product development process, with direct customer input shaping our roadmap. These values have enabled us to build a strong company culture and attract top talent.",
    },
  ];

  const filteredResults =
    selectedCollection === "all"
      ? mockResults
      : mockResults.filter((r) => r.collection === selectedCollection);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setHasSearched(true);
    }
  };

  const getCollectionName = (id) => {
    return collections.find((c) => c.id === id)?.name || "All Documents";
  };

  return (
    <div className="w-full mt-20 text-white overflow-hidden  min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-200 h-200 bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-200 h-200 bg-blue-600/10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl sm:text-8xl tracking-tighter font-extrabold mb-6">
              <span className="text-white">SEARCH YOUR</span>
              <span className="block text-blue-500">DOCUMENTS</span>
            </h1>
          </div>

          {/* Search Input */}
          <div className="mb-20">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask anything in plain English..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 px-8 py-6 text-xl bg-black border-5 border-blue-500 text-white placeholder-blue-400/40 focus:outline-none focus:border-blue-400 transition"
              />
              <button
                onClick={handleSearch}
                className="px-10 py-6 border-5 border-blue-500 bg-blue-600/20 hover:bg-blue-600/30 transition font-extrabold text-lg"
              >
                SEARCH
              </button>
              <div className="relative w-full md:w-70">
                <button
                  onClick={() =>
                    setShowCollectionDropdown(!showCollectionDropdown)
                  }
                  className="w-full px-10 py-6 border-5 border-blue-600 bg-black/50 hover:bg-black/70 overflow-hidden transition flex items-center justify-between text-left text-lg font-semibold truncate"
                >
                  <span className="truncate">
                    {getCollectionName(selectedCollection)}
                  </span>
                  <PiCaretDown
                    className={`text-lg transition shrink-0 ${
                      showCollectionDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showCollectionDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-black border-5 border-blue-600 z-40">
                    {collections.map((collection) => (
                      <button
                        key={collection.id}
                        onClick={() => {
                          setSelectedCollection(collection.id);
                          setShowCollectionDropdown(false);
                        }}
                        className={`w-full text-left px-6 py-3 border-b border-blue-600/30 font-semibold transition ${
                          selectedCollection === collection.id
                            ? "bg-blue-600/30 text-blue-400"
                            : "text-white hover:bg-blue-600/10"
                        }`}
                      >
                        {collection.name.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results */}
          {hasSearched && (
            <div>
              <div className="mb-12">
                <p className="text-2xl text-blue-400 font-semibold">
                  Found{" "}
                  <span className="text-white font-extrabold">
                    {filteredResults.length}
                  </span>{" "}
                  results{" "}
                  {selectedCollection !== "all" &&
                    `in ${getCollectionName(selectedCollection)}`}{" "}
                  for "<span className="text-white">{searchQuery}</span>"
                </p>
              </div>

              {filteredResults.length > 0 ? (
                <div className="space-y-4">
                  {filteredResults.map((result) => (
                    <div
                      key={result.id}
                      className="border-5 border-blue-600 p-10 bg-black/50 hover:bg-black/70 transition cursor-pointer"
                      onClick={() => setSelectedResult(result)}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="text-lg text-blue-500 font-semibold">
                            {result.doc} • PAGE {result.page}
                          </div>
                          {selectedCollection === "all" && (
                            <div className="text-sm text-blue-400/60 mt-2">
                              {getCollectionName(result.collection)}
                            </div>
                          )}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedResult(result);
                          }}
                          className="px-6 py-2 border-5 border-blue-500 hover:bg-blue-500/20 transition text-blue-400 font-semibold text-sm"
                        >
                          VIEW
                        </button>
                      </div>
                      <p className="text-white text-lg leading-relaxed font-light">
                        {result.snippet}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-2xl text-blue-400">No results found</p>
                </div>
              )}
            </div>
          )}

          {/* Empty State */}
          {!hasSearched && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="text-8xl text-blue-600/30 mb-8 font-light">?</div>
              <p className="text-3xl text-blue-400 text-center">
                Start typing to search
                <br />
                your documents
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedResult && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4">
          <div className="bg-black border-5 border-blue-600 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-black border-b border-blue-600/30 p-8 flex items-center justify-between">
              <div>
                <div className="text-2xl text-blue-500 font-semibold">
                  {selectedResult.doc}
                </div>
                <div className="text-sm text-blue-400 mt-2">
                  PAGE {selectedResult.page}
                </div>
              </div>
              <button
                onClick={() => setSelectedResult(null)}
                className="p-3 hover:bg-blue-600/20 transition"
              >
                <PiX className="text-3xl text-blue-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="mb-8 pb-8 border-b border-blue-600/30">
                <h3 className="text-xl text-blue-500 font-semibold mb-4">
                  FULL CONTEXT
                </h3>
                <p className="text-white text-lg leading-relaxed font-light">
                  {selectedResult.fullContext}
                </p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-8 py-4 border-5 border-blue-500 bg-blue-600/20 hover:bg-blue-600/30 transition font-extrabold">
                  OPEN DOCUMENT
                </button>
                <button
                  onClick={() => setSelectedResult(null)}
                  className="flex-1 px-8 py-4 border-5 border-gray-600 hover:bg-gray-600/20 transition font-extrabold text-gray-400"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        * {
          border-radius: 0 !important;
        }
      `}</style>
    </div>
  );
}
