import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alantis Hub",
  description: "A curated collection of work and exhibits",
};

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
