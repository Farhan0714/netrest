"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO at SleepTech",
    content:
      "I used to think I was just a bad sleeper. After one week with the SleepSync Mattress, I realized I just had the wrong mattress. Life-changing isn't an exaggeration.",
    rating: 5,
    avatar: "S",
    gradient: "from-sleep-purple to-dream-pink",
  },
  {
    name: "Marcus Johnson",
    role: "Professional Athlete",
    content:
      "As an athlete, recovery is everything. NetRest's sleep system has improved my deep sleep by 40%. My performance has never been better.",
    rating: 5,
    avatar: "M",
    gradient: "from-dream-pink to-warm-gold",
  },
  {
    name: "Elena Rodriguez",
    role: "New Mom",
    content:
      "When you only get short windows to sleep, quality matters even more. The DreamCloud Pillow gives me the best sleep I've had since before baby.",
    rating: 5,
    avatar: "E",
    gradient: "from-aurora-blue to-sleep-purple",
  },
  {
    name: "David Park",
    role: "Software Engineer",
    content:
      "I was skeptical about 'smart sleep.' Then I saw my sleep data and realized my 7 hours of 'sleep' was actually 5 hours of quality rest. NetRest fixed that.",
    rating: 5,
    avatar: "D",
    gradient: "from-warm-gold to-dream-pink",
  },
  {
    name: "Priya Sharma",
    role: "Interior Designer",
    content:
      "Not only does it perform like a dream, it looks incredible. The design team clearly cares about aesthetics as much as sleep science.",
    rating: 5,
    avatar: "P",
    gradient: "from-sleep-purple to-aurora-blue",
  },
  {
    name: "James Wilson",
    role: "Chronic Insomnia Sufferer",
    content:
      "After 10 years of insomnia, I finally sleep through the night. The ZenMask Pro combined with their pillow system is the closest thing to a miracle.",
    rating: 5,
    avatar: "J",
    gradient: "from-dream-pink to-sleep-purple",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-lavender mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Don&apos;t Take Our Word
            <br />
            <span className="gradient-text">Hear the Dreamers</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-dim text-lg">
            Join 50,000+ people who&apos;ve transformed their sleep with NetRest.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl glass-light hover:bg-white/[0.08] transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-sleep-purple/40 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-warm-gold fill-warm-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-dim text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {[
            { value: "50K+", label: "Happy Dreamers" },
            { value: "4.9", label: "Average Rating" },
            { value: "98%", label: "Would Recommend" },
            { value: "100", label: "Night Free Trial" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="text-xs text-slate-dim mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
