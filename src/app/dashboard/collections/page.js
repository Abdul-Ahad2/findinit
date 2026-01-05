"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { PiPlus, PiX, PiTrash } from "react-icons/pi";

const googleSansDisplay = Poppins({
  subsets: ["latin"],
  weight: ["900", "400"],
});

export default function CollectionsPage() {
  const [collections, setCollections] = useState([
    {
      id: 1,
      name: "Financial Reports",
      count: 8,
      docs: [
        "Q3 Financial Report.pdf",
        "Q2 Financial Report.pdf",
        "Q1 Financial Report.pdf",
      ],
    },
    {
      id: 2,
      name: "Product & Roadmap",
      count: 5,
      docs: [
        "Product Roadmap 2025.docx",
        "Product Strategy.pdf",
        "Feature Specs.docx",
      ],
    },
    {
      id: 3,
      name: "HR & Operations",
      count: 3,
      docs: ["Company Handbook.pdf", "Employee Handbook.pdf", "Policies.docx"],
    },
    {
      id: 4,
      name: "Market Analysis",
      count: 6,
      docs: [
        "Market Analysis 2024.xlsx",
        "Competitor Analysis.pdf",
        "Industry Report.pdf",
      ],
    },
  ]);

  const [showNewCollection, setShowNewCollection] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState("");
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleCreateCollection = () => {
    if (newCollectionName.trim()) {
      const newCollection = {
        id: collections.length + 1,
        name: newCollectionName,
        count: 0,
        docs: [],
      };
      setCollections([...collections, newCollection]);
      setNewCollectionName("");
      setShowNewCollection(false);
    }
  };

  const handleDeleteCollection = (id) => {
    setCollections(collections.filter((c) => c.id !== id));
    setSelectedCollection(null);
  };

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
          <div className="mb-20 flex items-center justify-between">
            <div>
              <h1 className="text-6xl sm:text-8xl tracking-tighter font-extrabold mb-4">
                <span className="text-white">MY</span>
                <span className="block text-blue-500">COLLECTIONS</span>
              </h1>
              <p className="text-2xl text-blue-400">
                Organize and manage your document collections
              </p>
            </div>
            <button
              onClick={() => setShowNewCollection(true)}
              className="flex items-center gap-3 px-10 py-6 border-5 border-blue-500 bg-blue-600/20 hover:bg-blue-600/30 transition h-fit font-extrabold text-lg"
            >
              <PiPlus className="text-3xl" />
              <span>NEW</span>
            </button>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collections.map((collection) => (
              <div
                key={collection.id}
                onClick={() => setSelectedCollection(collection)}
                className="border-5 border-blue-600 p-10 bg-black/50 hover:bg-black/70 transition cursor-pointer aspect-square flex flex-col justify-between group"
              >
                <div>
                  <div className="text-4xl text-white font-extrabold mb-6 line-clamp-3 leading-tight">
                    {collection.name}
                  </div>
                  <div className="text-sm text-blue-400 font-semibold">
                    {collection.count} DOCUMENTS
                  </div>
                </div>

                <div className="flex gap-2 mt-6 pt-6 border-t border-blue-600/30">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCollection(collection);
                    }}
                    className="flex-1 px-4 py-3 border-5 border-blue-500 hover:bg-blue-500/20 transition text-blue-400 font-extrabold text-sm"
                  >
                    OPEN
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteCollection(collection.id);
                    }}
                    className="px-4 py-3 border-5 border-red-600/50 hover:bg-red-600/20 transition text-red-400"
                  >
                    <PiTrash className="text-2xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {collections.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="text-8xl text-blue-600/30 mb-8 font-light">+</div>
              <p className="text-3xl text-blue-400 text-center mb-8">
                No collections yet
              </p>
              <button
                onClick={() => setShowNewCollection(true)}
                className="px-8 py-4 border-5 border-blue-500 bg-blue-600/20 hover:bg-blue-600/30 transition font-extrabold"
              >
                CREATE ONE
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Create Collection Modal */}
      {showNewCollection && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4">
          <div className="bg-black border-5 border-blue-600 w-full max-w-2xl">
            <div className="border-b border-blue-600/30 p-8 flex items-center justify-between">
              <h2 className="text-3xl font-extrabold text-white">
                CREATE COLLECTION
              </h2>
              <button
                onClick={() => {
                  setShowNewCollection(false);
                  setNewCollectionName("");
                }}
                className="p-3 hover:bg-blue-600/20 transition"
              >
                <PiX className="text-3xl text-blue-400" />
              </button>
            </div>

            <div className="p-8">
              <label className="text-lg text-blue-400 font-semibold mb-4 block">
                COLLECTION NAME
              </label>
              <input
                type="text"
                placeholder="e.g. Financial Reports, Product Docs, etc."
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleCreateCollection()
                }
                className="w-full px-8 py-4 text-xl bg-black border-5 border-blue-500 text-white placeholder-blue-400/40 focus:outline-none focus:border-blue-400 transition mb-8"
              />

              <div className="flex gap-4">
                <button
                  onClick={handleCreateCollection}
                  className="flex-1 px-8 py-4 border-5 border-blue-500 bg-blue-600/20 hover:bg-blue-600/30 transition font-extrabold"
                >
                  CREATE
                </button>
                <button
                  onClick={() => {
                    setShowNewCollection(false);
                    setNewCollectionName("");
                  }}
                  className="flex-1 px-8 py-4 border-5 border-gray-600 hover:bg-gray-600/20 transition font-extrabold text-gray-400"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collection Details Modal */}
      {selectedCollection && !showNewCollection && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4">
          <div className="bg-black border-5 border-blue-600 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-black border-b border-blue-600/30 p-8 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white">
                  {selectedCollection.name}
                </h2>
                <p className="text-sm text-blue-400 mt-2">
                  {selectedCollection.count} DOCUMENTS
                </p>
              </div>
              <button
                onClick={() => setSelectedCollection(null)}
                className="p-3 hover:bg-blue-600/20 transition"
              >
                <PiX className="text-3xl text-blue-400" />
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-xl text-blue-500 font-semibold mb-6">
                DOCUMENTS IN COLLECTION
              </h3>

              {selectedCollection.docs.length > 0 ? (
                <div className="space-y-3 mb-8">
                  {selectedCollection.docs.map((doc, idx) => (
                    <div
                      key={idx}
                      className="border-5 border-blue-600/50 p-6 bg-black/50 hover:bg-black/70 transition"
                    >
                      <p className="text-white text-lg font-light">{doc}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-blue-400">
                    No documents in this collection yet
                  </p>
                </div>
              )}

              <div className="flex gap-4 pt-8 border-t border-blue-600/30">
                <button className="flex-1 px-8 py-4 border-5 border-blue-500 bg-blue-600/20 hover:bg-blue-600/30 transition font-extrabold">
                  ADD DOCUMENTS
                </button>
                <button
                  onClick={() => setSelectedCollection(null)}
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
