"use client";

import { ArrowRight, Star, TrendingUp } from "lucide-react";

const products = [
  {
    name: "The DreamCloud Pillow",
    tagline: "Cloud-like comfort for your head",
    price: "$89",
    originalPrice: "$129",
    rating: 4.9,
    reviews: 2847,
    badge: "Best Seller",
    badgeColor: "bg-warm-gold text-midnight",
    gradient: "from-sleep-purple via-dream-pink to-warm-gold",
    features: ["Smart Cooling Gel", "Adjustable Loft", "Hypoallergenic"],
    emoji: "☁️",
  },
  {
    name: "The SleepSync Mattress",
    tagline: "Your body, understood",
    price: "$1,299",
    originalPrice: "$1,899",
    rating: 4.95,
    reviews: 1523,
    badge: "Editor's Pick",
    badgeColor: "bg-dream-pink text-white",
    gradient: "from-aurora-blue via-sleep-purple to-dream-pink",
    features: [
      "AI Sleep Tracking",
      "Temperature Control",
      "100-Night Trial",
    ],
    emoji: "🛏️",
  },
  {
    name: "The ZenMask Pro",
    tagline: "Block the world, find your dream",
    price: "$59",
    originalPrice: "$89",
    rating: 4.85,
    reviews: 3291,
    badge: "New",
    badgeColor: "bg-aurora-blue text-white",
    gradient: "from-dream-pink via-warm-gold to-sleep-purple",
    features: ["Zero Light Leak", "Bamboo Silk", "Built-in Speakers"],
    emoji: "😴",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-warm-gold mb-4">
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Sleep Products That
            <br />
            <span className="gradient-text">Change Everything</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-dim text-lg">
            Each product is engineered with the same obsessive attention to
            detail that made Netflix the world&apos;s favorite screen. Now, put
            that energy into your sleep.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative rounded-3xl glass-light overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              {/* Product Visual */}
              <div
                className={`relative h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
              >
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                  {product.emoji}
                </span>

                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${product.badgeColor}`}
                >
                  {product.badge}
                </div>

                {/* Trending indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                  <TrendingUp className="w-3 h-3 text-green-400" />
                  <span className="text-[10px] font-semibold text-green-400">
                    Trending
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-warm-gold fill-warm-gold"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-dim">
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-dim mb-4">{product.tagline}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-white/5 text-xs text-lavender font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white">
                      {product.price}
                    </span>
                    <span className="text-sm text-slate-dim line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-sleep-purple to-dream-pink text-white text-sm font-semibold hover:shadow-lg hover:shadow-sleep-purple/30 transition-all duration-300 group-hover:scale-105">
                    Buy Now
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
