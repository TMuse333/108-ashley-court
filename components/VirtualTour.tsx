"use client";

import { View } from "lucide-react";
import { property } from "@/config/property";

export default function VirtualTour() {
  return (
    <section id="tour" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-slate-900 rounded-lg">
            <View className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Virtual Tour</h2>
            <p className="text-slate-600">Explore the property in 3D</p>
          </div>
        </div>

        {/* Matterport Embed */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
          {property.virtualTourUrl ? (
            <iframe
              src={property.virtualTourUrl}
              title="Virtual Tour"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              allow="xr-spatial-tracking"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <View className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500">Virtual tour not available</p>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-white rounded border text-xs">Click + Drag</kbd>
            to look around
          </span>
          <span className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-white rounded border text-xs">Scroll</kbd>
            to zoom
          </span>
          <span className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-white rounded border text-xs">Click Circles</kbd>
            to move
          </span>
        </div>
      </div>
    </section>
  );
}
