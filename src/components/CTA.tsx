"use client";

import { ArrowRight, Moon, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/20 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating elements */}
        <div className="absolute top-10 left-10 animate-float opacity-30">
          <Moon className="w-8 h-8 text-lavender" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float-slow opacity-30">
          <Sparkles className="w-8 h-8 text-dream-pink" />
        </div>

        {/* Main CTA Card */}
        <div className="relative rounded-3xl glass p-10 sm:p-16 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-sleep-purple/20 via-transparent to-dream-pink/20" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sleep-purple to-dream-pink flex items-center justify-center mx-auto mb-8 shadow-lg shadow-sleep-purple/30">
              <Moon className="w-8 h-8 text-white" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Best Sleep
              <br />
              <span className="gradient-text">Starts Tonight</span>
            </h2>

            {/* Subtext */}
            <p className="max-w-lg mx-auto text-slate-dim text-lg mb-10">
              Join 50,000+ dreamers who&apos;ve already made the switch. Try NetRest
              risk-free for 100 nights. If you don&apos;t love it, we&apos;ll refund
              every penny.
            </p>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-lavender/20 text-white placeholder:text-slate-dim/60 focus:outline-none focus:border-sleep-purple focus:ring-1 focus:ring-sleep-purple transition-all text-sm"
              />
              <a
                href="#"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-sleep-purple to-dream-pink text-white font-semibold text-sm hover:shadow-lg hover:shadow-sleep-purple/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust */}
            <p className="text-xs text-slate-dim/60">
              No credit card required · 100-night free trial · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
