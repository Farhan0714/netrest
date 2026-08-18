import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Products />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
