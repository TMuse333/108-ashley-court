"use client";

import Image from "next/image";
import { property } from "@/config/property";

export default function ContactForm() {
  const { agent } = property;

  return (
    <section id="contact" className="bg-white">
      {/* Red Top Stripe */}
      <div className="h-4 bg-red-600" />

      {/* Business Card Content */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Agent Photo - Left Side */}
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/3] md:aspect-auto md:h-full relative bg-gray-200">
              {agent.photo ? (
                <Image
                  src={agent.photo}
                  alt={agent.name}
                  fill
                  className="object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                  <div className="text-center text-gray-400">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-sm">Agent Photo</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Agent Info - Right Side */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            {/* RE/MAX Logo Placeholder */}
            <div className="mb-4">
              {agent.logoUrl ? (
                <Image
                  src={agent.logoUrl}
                  alt="RE/MAX"
                  width={200}
                  height={60}
                  className="object-contain"
                />
              ) : (
                <div className="flex items-center gap-2">
                  {/* Balloon icon placeholder */}
                  <div className="w-10 h-12 bg-gradient-to-b from-red-600 via-white to-blue-600 rounded-full" />
                  <div>
                    <p className="text-3xl font-black tracking-tight">RE/MAX</p>
                  </div>
                </div>
              )}
            </div>

            {/* NOVA */}
            <p className="text-2xl font-bold text-red-600 mb-2">
              {agent.brokerage || "NOVA"}
            </p>

            {/* Agent Name */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
              {agent.name}
            </h2>

            {/* Credentials */}
            <p className="text-lg text-gray-600 mb-6">
              {agent.credentials || "B.A., CELTA, REALTOR®"}
            </p>

            {/* Phone */}
            <a
              href={`tel:${agent.phone}`}
              className="text-3xl md:text-4xl font-bold text-red-600 hover:text-red-700 transition-colors mb-2"
            >
              {agent.phone}
            </a>

            {/* Email */}
            <a
              href={`mailto:${agent.email}`}
              className="text-xl text-blue-600 hover:text-blue-700 transition-colors mb-6"
            >
              {agent.email}
            </a>

            {/* Address */}
            <div className="text-gray-700 mb-2">
              <p>{agent.officeAddress || "5943 Spring Garden Road,"}</p>
              <p>{agent.officeCity || "Halifax, NS B3H 1Y4"}</p>
            </div>

            {/* Website */}
            {agent.website && (
              <a
                href={agent.website.startsWith("http") ? agent.website : `https://${agent.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors mb-6"
              >
                {agent.website}
              </a>
            )}

            {/* MLS Logo & Disclaimer */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                {/* MLS Logo Placeholder */}
                <div className="flex items-center gap-1 text-xs font-bold">
                  <span className="bg-red-600 text-white px-1">R</span>
                  <span className="border border-gray-400 px-1">MLS</span>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Each office is independently owned and operated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Bottom Stripe */}
      <div className="h-4 bg-blue-600" />
    </section>
  );
}
