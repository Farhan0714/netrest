"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight/90 backdrop-blur-xl border-b border-lavender/10 shadow-lg shadow-sleep-purple/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sleep-purple to-dream-pink flex items-center justify-center shadow-lg shadow-sleep-purple/30 group-hover:shadow-sleep-purple/50 transition-shadow">
              <Moon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Net<span className="text-lavender">Rest</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Products", "Features", "Reviews", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-dim hover:text-lavender transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sleep-purple to-dream-pink group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#pricing"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-sleep-purple to-dream-pink text-white text-sm font-semibold hover:shadow-lg hover:shadow-sleep-purple/30 transition-all duration-300 hover:scale-105"
            >
              Start Dreaming
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-dim hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass px-4 py-6 space-y-4">
          {["Products", "Features", "Reviews", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-slate-dim hover:text-lavender transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-sleep-purple to-dream-pink text-white text-sm font-semibold"
          >
            Start Dreaming
          </a>
        </div>
      </div>
    </nav>
  );
}
