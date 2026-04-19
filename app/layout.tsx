import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Keith Merrill — Senior Software Engineer",
    template: "%s · Keith Merrill",
  },
  description:
    "Senior software engineer specializing in 3D graphics, GPUs, games, and Apple platforms. visionOS, Metal, RealityKit, ARKit, WebGPU, Three.js.",
  metadataBase: new URL("https://keithmerrill.com"),
  openGraph: {
    title: "Keith Merrill — Senior Software Engineer",
    description:
      "Senior software engineer specializing in 3D graphics, GPUs, games, and Apple platforms.",
    url: "https://keithmerrill.com",
    siteName: "Keith Merrill",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-zinc-100">
        <Nav />
        {children}
      </body>
    </html>
  );
}
