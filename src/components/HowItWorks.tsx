"use client";

import { Package, Scan, Bed, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Choose Your Sleep System",
    description:
      "Pick the plan that matches your sleep style. From solo sleepers to couples, we have you covered.",
    gradient: "from-sleep-purple to-aurora-blue",
  },
  {
    number: "02",
    icon: Scan,
    title: "We Learn Your Patterns",
    description:
      "Our AI analyzes your sleep data within the first 7 nights to build a personalized comfort profile.",
    gradient: "from-aurora-blue to-sleep-purple",
  },
  {
    number: "03",
    icon: Bed,
    title: "Experience the Difference",
    description:
      "Feel the magic on night one. Our adaptive technology adjusts in real-time to keep you in perfect comfort.",
    gradient: "from-dream-pink to-warm-gold",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Wake Up Transformed",
    description:
      "Better sleep means better days. More energy, sharper focus, and a smile you can't suppress.",
    gradient: "from-warm-gold to-dream-pink",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-aurora-blue mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Four Steps to
            <br />
            <span className="gradient-text">Perfect Sleep</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-dim text-lg">
            Getting started is easier than falling asleep on a NetRest mattress
            (which, by the way, is really easy).
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-px bg-gradient-to-r from-lavender/20 to-lavender/10" />
              )}

              {/* Step Card */}
              <div className="relative text-center p-6">
                {/* Number Badge */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-midnight border-2 border-lavender/30 flex items-center justify-center text-xs font-bold text-lavender">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-dim leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
