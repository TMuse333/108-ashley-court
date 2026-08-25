"use client";

import { MapPin, Navigation } from "lucide-react";
import { property } from "@/config/property";

export default function LocationMap() {
  const { location } = property;

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    location.address
  )}`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-slate-900 rounded-lg">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Location</h2>
            <p className="text-slate-600">{location.address}</p>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-[16/9] w-full bg-slate-200">
            {location.mapEmbedUrl ? (
              <iframe
                src={location.mapEmbedUrl}
                title="Property Location"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500">Map not available</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Address Card */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-slate-100 rounded-lg">
              <MapPin className="w-6 h-6 text-slate-700" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900">Property Address</h3>
              <p className="text-slate-600 mt-1">{location.address}</p>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
