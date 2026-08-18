"use client";

import { Moon, Globe, Send, Play, Heart } from "lucide-react";

const footerLinks = {
  Products: ["Pillows", "Mattresses", "Sleep Masks", "Weighted Blankets", "Bed Frames"],
  Company: ["About Us", "Careers", "Press", "Blog", "Sustainability"],
  Support: ["Help Center", "Contact Us", "Returns", "Warranty", "Shipping"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-lavender/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sleep-purple to-dream-pink flex items-center justify-center">
                <Moon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Net<span className="text-lavender">Rest</span>
              </span>
            </a>
            <p className="text-sm text-slate-dim leading-relaxed mb-6 max-w-xs">
              Netflix reimagined as a luxury sleep brand. Because the best
              binge-watching happens with your eyes closed.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[Globe, Send, Play].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full glass-light flex items-center justify-center text-slate-dim hover:text-lavender hover:bg-white/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-dim hover:text-lavender transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-lavender/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-dim/60">
            © 2026 NetRest. All rights reserved. This is a fictional brand
            created for educational purposes.
          </p>
          <p className="text-xs text-slate-dim/60 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-dream-pink fill-dream-pink" /> for better sleep
          </p>
        </div>
      </div>
    </footer>
  );
}
