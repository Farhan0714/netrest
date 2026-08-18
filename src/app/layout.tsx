import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NetRest — Premium Sleep Technology",
  description:
    "Netflix reimagined as a luxury sleep brand. Just. Close. Your. Eyes. Discover premium pillows, smart mattresses, and sleep accessories designed for the perfect night's rest.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "NetRest — Premium Sleep Technology",
    description:
      "Just. Close. Your. Eyes. Premium sleep essentials for the dreamers.",
    type: "website",
    siteName: "NetRest",
  },
  twitter: {
    card: "summary_large_image",
    title: "NetRest — Premium Sleep Technology",
    description:
      "Just. Close. Your. Eyes. Premium sleep essentials for the dreamers.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
