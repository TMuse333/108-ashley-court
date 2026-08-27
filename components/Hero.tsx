"use client";

import Image from "next/image";
import { property } from "@/config/property";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={property.hero}
          alt={property.address}
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Property Name Overlay */}
      <div className="relative z-10 h-full flex items-start justify-center pt-8 px-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-tight"
          style={{
            textShadow: "3px 3px 6px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.5)",
          }}
        >
          {property.propertyName || property.address}
        </h1>
      </div>
    </section>
  );
}
