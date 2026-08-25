"use client";

import { Video } from "lucide-react";
import { property } from "@/config/property";

export default function VideoSection() {
  return (
    <section id="video" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-slate-900 rounded-lg">
            <Video className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Property Video</h2>
            <p className="text-slate-600">Watch the video walkthrough</p>
          </div>
        </div>

        {/* Video Embed */}
        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
          {property.videoUrl ? (
            <iframe
              src={property.videoUrl}
              title="Property Video"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Video className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500">Video not available</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
