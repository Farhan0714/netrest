"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Star } from "lucide-react";

function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-lavender"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animation: `pulse-glow ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sleep-purple/10 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-dream-pink/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sleep-purple/5 rounded-full blur-[150px]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <StarField />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8 animate-float-slow">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 text-warm-gold fill-warm-gold"
              />
            ))}
          </div>
          <span className="text-xs font-medium text-lavender">
            Rated #1 Sleep Brand 2026
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
          <span className="block text-white">Just.</span>
          <span className="block text-white">Close.</span>
          <span className="block text-white">Your.</span>
          <span className="block gradient-text">Eyes.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-xl mx-auto text-lg sm:text-xl text-slate-dim leading-relaxed mb-10">
          Remember when Netflix kept you up all night? We took that obsession
          and flipped it.{" "}
          <span className="text-lavender font-medium">
            Premium sleep technology
          </span>{" "}
          for the dreams you deserve.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-sleep-purple to-dream-pink text-white font-semibold text-lg hover:shadow-2xl hover:shadow-sleep-purple/30 transition-all duration-300 hover:scale-105"
          >
            Start Your Free Trial
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-light text-white font-medium text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Explore Products
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          <div className="flex -space-x-3">
            {[
              "bg-gradient-to-br from-sleep-purple to-dream-pink",
              "bg-gradient-to-br from-dream-pink to-warm-gold",
              "bg-gradient-to-br from-aurora-blue to-sleep-purple",
              "bg-gradient-to-br from-warm-gold to-dream-pink",
              "bg-gradient-to-br from-sleep-purple to-aurora-blue",
            ].map((bg, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full ${bg} border-2 border-midnight flex items-center justify-center text-white text-xs font-bold`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-sm">
              50,000+ Dreamers
            </p>
            <p className="text-slate-dim text-xs">
              have upgraded their sleep
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-slate-dim font-medium">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-lavender/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-lavender rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}
