"use client";

import Link from "next/link";

export default function TicketButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  // match the wall color for the notch cutouts
  const wall = "rgb(248,245,238)";
  return (
    <div className="relative inline-block">
      {/* left notch */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-2 top-1/2 size-4 -translate-y-1/2 rounded-full border border-stone-300/70"
        style={{ background: wall }}
      />
      {/* right notch */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 top-1/2 size-4 -translate-y-1/2 rounded-full border border-stone-300/70"
        style={{ background: wall }}
      />
      <Link
        href={href}
        className="inline-flex items-center rounded-xl bg-stone-900 px-5 py-2 text-white shadow hover:bg-stone-800"
      >
        {children}
      </Link>
    </div>
  );
}
