"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { href: "#photos", label: "Photos Video" },
  // { href: "#tour", label: "Virtual Tour" },
  { href: "#floorplan", label: "Floor Plans" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

const BROCHURE_URL = "/Pheasant-Cove-Estate-Brochure.pdf";

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
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-sky-400 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-6 py-2 rounded-full bg-blue-500/60 hover:bg-blue-400/70 text-white text-sm font-medium transition-all border border-sky-300/40 hover:border-sky-200/60 shadow-sm"
              >
                {link.label}
              </button>
            ))}
            <a
              href={BROCHURE_URL}
              download="Pheasant-Cove-Estate-Brochure.pdf"
              className="px-6 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-all border border-red-400/60 hover:border-red-300/80 shadow-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-500/30">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-center px-4 py-3 text-white bg-blue-500/40 hover:bg-blue-400/50 rounded-full transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={BROCHURE_URL}
              download="Pheasant-Cove-Estate-Brochure.pdf"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-white bg-red-500 hover:bg-red-600 rounded-full transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
