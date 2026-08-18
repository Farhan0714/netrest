"use client";

import { Check, Sparkles, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Basic Dream",
    tagline: "For casual sleepers",
    price: "9",
    period: "mo",
    icon: Sparkles,
    gradient: "from-slate-dim to-lavender",
    borderColor: "border-lavender/20",
    features: [
      "Standard DreamCloud Pillow",
      "Sleep Score Tracking",
      "Basic Temperature Control",
      "Email Support",
      "30-Day Returns",
    ],
    cta: "Start Dreaming",
    popular: false,
  },
  {
    name: "Premium Sleep",
    tagline: "Most popular choice",
    price: "29",
    period: "mo",
    icon: Crown,
    gradient: "from-sleep-purple to-dream-pink",
    borderColor: "border-sleep-purple/40",
    features: [
      "The DreamCloud Pillow + ZenMask",
      "AI Sleep Analytics",
      "Adaptive Temperature System",
      "Circadian Light Therapy",
      "Priority 24/7 Support",
      "100-Night Trial",
      "Free Shipping & Returns",
    ],
    cta: "Get Premium Sleep",
    popular: true,
  },
  {
    name: "Elite Rest",
    tagline: "The complete sleep revolution",
    price: "59",
    period: "mo",
    icon: Rocket,
    gradient: "from-warm-gold to-dream-pink",
    borderColor: "border-warm-gold/30",
    features: [
      "Full Sleep System Bundle",
      "Real-Time AI Coaching",
      "Zero-Gravity Bed Frame",
      "Personal Sleep Consultant",
      "VIP Concierge Support",
      "Lifetime Warranty",
      "Free Installation",
      "Early Access to New Products",
    ],
    cta: "Go Elite",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/20 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sleep-purple/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-dream-pink mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <br />
            <span className="gradient-text">Dream Plan</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-dim text-lg">
            Remember when Netflix had three tiers? We kept that idea. Choose
            your level of sleep perfection.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-3xl border ${plan.borderColor} overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "glass glow-purple"
                  : "glass-light"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sleep-purple via-dream-pink to-warm-gold" />
              )}

              <div className="p-8 sm:p-10 flex flex-col flex-1">
                {/* Plan Header */}
                <div className="mb-8">
                  {plan.popular && (
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-sleep-purple to-dream-pink text-white text-xs font-bold mb-4">
                      Most Popular
                    </span>
                  )}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}
                  >
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-sm text-slate-dim mt-1">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg text-slate-dim">$</span>
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-dim">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.popular ? "text-dream-pink" : "text-lavender"
                        }`}
                      />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={`w-full py-4 rounded-full text-center font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-sleep-purple to-dream-pink text-white hover:shadow-2xl hover:shadow-sleep-purple/30"
                      : "glass-light text-white hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-slate-dim mt-8">
          All plans include free shipping. Cancel anytime. No questions asked. 💤
        </p>
      </div>
    </section>
  );
}
