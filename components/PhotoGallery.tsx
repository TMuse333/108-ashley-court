"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Camera, X, ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";
import { property } from "@/config/property";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const INITIAL_DISPLAY_COUNT = 12;

export default function PhotoGallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const displayedPhotos = showAll
    ? property.photos
    : property.photos.slice(0, INITIAL_DISPLAY_COUNT);
  const remainingCount = property.photos.length - INITIAL_DISPLAY_COUNT;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setLightboxIndex((prev) =>
        prev === 0 ? property.photos.length - 1 : prev - 1
      );
    } else {
      setLightboxIndex((prev) =>
        prev === property.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") navigateLightbox("prev");
    if (e.key === "ArrowRight") navigateLightbox("next");
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section id="photos" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 rounded-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Photo Gallery</h2>
              <p className="text-slate-600">
                {property.photos.length} photos of the property
              </p>
            </div>
          </div>
        </div>

        {/* Main Carousel */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="aspect-[16/10] gallery-swiper"
          >
            {property.photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={photo}
                    alt={`Property photo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3">
          {displayedPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={photo}
                alt={`Property photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}

          {/* Show More Card */}
          {!showAll && remainingCount > 0 && (
            <div
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center"
              onClick={() => setShowAll(true)}
            >
              <div className="text-center p-2">
                <Grid3X3 className="w-6 h-6 text-slate-500 mx-auto mb-1" />
                <p className="text-slate-700 font-medium text-sm">+{remainingCount}</p>
              </div>
            </div>
          )}
        </div>

        {/* Collapse Button */}
        {showAll && property.photos.length > INITIAL_DISPLAY_COUNT && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="text-slate-600 hover:text-slate-900 transition-colors underline text-sm"
            >
              Show less
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 text-white/80 hover:text-white z-10"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 text-white/80 hover:text-white z-10"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4">
            <Image
              src={property.photos[lightboxIndex]}
              alt={`Property photo ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Counter & Thumbnail Strip */}
          <div className="absolute bottom-4 left-0 right-0">
            <p className="text-center text-white/80 text-sm mb-3">
              {lightboxIndex + 1} / {property.photos.length}
            </p>
            <div className="flex justify-center gap-1 px-4 overflow-x-auto">
              {property.photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className={`relative w-12 h-12 rounded overflow-hidden flex-shrink-0 ${
                    index === lightboxIndex
                      ? "ring-2 ring-white"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={photo}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
