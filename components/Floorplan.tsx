"use client";

import { useState } from "react";
import Image from "next/image";
import { LayoutGrid, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { property } from "@/config/property";

export default function Floorplan() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const floorplans = property.floorplans || [];

  const getFloorplanLabel = (path: string) => {
    if (path.includes("106") && path.includes("1st")) return "106 - 1st Floor";
    if (path.includes("106") && path.includes("2nd")) return "106 - 2nd Floor";
    if (path.includes("108") && path.includes("1st")) return "108 - 1st Floor";
    if (path.includes("108") && path.includes("2nd")) return "108 - 2nd Floor";
    return "Floor Plan";
  };

  const navigateModal = (direction: "prev" | "next") => {
    if (expandedIndex === null) return;
    if (direction === "prev") {
      setExpandedIndex(expandedIndex === 0 ? floorplans.length - 1 : expandedIndex - 1);
    } else {
      setExpandedIndex(expandedIndex === floorplans.length - 1 ? 0 : expandedIndex + 1);
    }
  };

  return (
    <section id="floorplan" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-slate-900 rounded-lg">
            <LayoutGrid className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Floor Plans</h2>
            <p className="text-slate-600">View the property layouts</p>
          </div>
        </div>

        {/* Floorplan Grid */}
        {floorplans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {floorplans.map((floorplan, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg bg-slate-100 cursor-pointer group"
                onClick={() => setExpandedIndex(index)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={floorplan}
                    alt={getFloorplanLabel(floorplan)}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">{getFloorplanLabel(floorplan)}</p>
                </div>
                {/* Zoom Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-4">
                    <ZoomIn className="w-8 h-8 text-slate-900" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-slate-100">
            <div className="aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <LayoutGrid className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500">Floor plans not available</p>
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-sm text-slate-500 mt-6">
          Click any floor plan to expand
        </p>
      </div>

      {/* Expanded Modal */}
      {expandedIndex !== null && floorplans[expandedIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setExpandedIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setExpandedIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          {floorplans.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateModal("prev");
                }}
                className="absolute left-4 text-white/80 hover:text-white z-10"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateModal("next");
                }}
                className="absolute right-4 text-white/80 hover:text-white z-10"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={floorplans[expandedIndex]}
              alt={getFloorplanLabel(floorplans[expandedIndex])}
              fill
              className="object-contain"
            />
          </div>

          {/* Label & Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-medium mb-1">
              {getFloorplanLabel(floorplans[expandedIndex])}
            </p>
            <p className="text-white/60 text-sm">
              {expandedIndex + 1} / {floorplans.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
