"use client";

import { useState } from "react";
import { Menu, X, Home, Phone } from "lucide-react";
import { property } from "@/config/property";

const navLinks = [
  { href: "#tour", label: "Virtual Tour" },
  { href: "#photos", label: "Photos" },
  { href: "#video", label: "Video" },
  { href: "#floorplan", label: "Floorplan" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Address */}
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-slate-700" />
            <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">
              {property.address}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${property.agent.phone}`}
              className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {property.agent.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${property.agent.phone}`}
              className="flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg text-sm font-medium mt-4"
            >
              <Phone className="w-4 h-4" />
              Call {property.agent.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
