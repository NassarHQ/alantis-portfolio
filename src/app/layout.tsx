import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alantis Museum",
  description: "A curated collection of work and exhibits",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[rgb(248,245,238)] text-stone-900">
        <NavBar />
        {/* Remove container for hero/home page */}
        <main>{children}</main>
      </body>
    </html>
  );
}
