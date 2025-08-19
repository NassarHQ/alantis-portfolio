// src/lib/theme.ts
export const palette = {
  // Midnight ink -> indigo glow
  bgFrom: "#0a0d12",
  bgVia:  "#0b1530",
  bgTo:   "#0a0e18",
  textOn: "text-white",
  gold:   "#f5c86f",
  blue:   "#7cc7ff",
};

export const cls = {
  pageBg:
    "min-h-screen bg-gradient-to-br from-[#0a0d12] via-[#0b1530] to-[#0a0e18] text-white antialiased",
  card:
    "rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
  pill:
    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs",
  sectionWrap: "mx-auto max-w-6xl px-4 sm:px-6",
};
