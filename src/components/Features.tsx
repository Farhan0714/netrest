"use client";

import { Zap, Shield, Thermometer, Cpu, Moon, Droplets } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Smart Sleep Tracking",
    description:
      "Our AI-powered sensors monitor your sleep stages in real-time, learning your unique patterns to optimize your rest cycle.",
    gradient: "from-sleep-purple to-aurora-blue",
  },
  {
    icon: Thermometer,
    title: "Adaptive Temperature",
    description:
      "Advanced micro-climate technology keeps your bed at the perfect temperature all night. Cool in summer, warm in winter.",
    gradient: "from-aurora-blue to-sleep-purple",
  },
  {
    icon: Shield,
    title: "Pressure Point Relief",
    description:
      "Memory foam with 7 ergonomic zones that adapt to your body shape, eliminating pressure points and morning aches.",
    gradient: "from-dream-pink to-warm-gold",
  },
  {
    icon: Droplets,
    title: "Moisture-Wicking Fabric",
    description:
      "Breathable, hypoallergenic bamboo fibers that draw moisture away, keeping you dry and comfortable all night.",
    gradient: "from-warm-gold to-dream-pink",
  },
  {
    icon: Moon,
    title: "Circadian Light Therapy",
    description:
      "Built-in gentle sunrise simulation helps you wake naturally at the optimal moment in your sleep cycle.",
    gradient: "from-lavender to-dream-pink",
  },
  {
    icon: Zap,
    title: "Zero-Gravity Mode",
    description:
      "Programmable recline positions that reduce spinal pressure by 40%, giving you weightless comfort.",
    gradient: "from-sleep-purple to-dream-pink",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-dream-pink mb-4">
            Why NetRest
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Sleep Technology
            <br />
            <span className="gradient-text">From the Future</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-dim text-lg">
            We spent years studying why 73% of people don&apos;t get enough quality
            sleep. Then we built the solution.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl glass-light hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-dim text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sleep-purple/5 to-dream-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
