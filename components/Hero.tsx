"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { property } from "@/config/property";

export default function Hero() {
  const scrollToTour = () => {
    const element = document.querySelector("#tour");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={property.hero}
          alt={property.address}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Property Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Featured Property</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {property.address}
          </h1>

          {property.tagline && (
            <p className="text-xl text-white/90 max-w-2xl">
              {property.tagline}
            </p>
          )}

          {/* Features */}
          <div className="flex flex-wrap gap-4 pt-2">
            {property.features.map((feature, index) => (
              <span
                key={index}
                className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Agent Quick Contact */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={`tel:${property.agent.phone}`}
              className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {property.agent.phone}
            </a>
            <a
              href={`mailto:${property.agent.email}`}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Agent
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToTour}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
