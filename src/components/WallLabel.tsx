"use client";
import { motion } from "framer-motion";

export default function WallLabel({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`w-fit inline-flex items-center gap-2 rounded-full border border-stone-300/60 bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-stone-600 backdrop-blur ${className}`}
    >
      <span className="size-1.5 rounded-full bg-amber-600" />
      <span>{title}</span>
      {subtitle ? (
        <span className="hidden sm:inline text-stone-400">— {subtitle}</span>
      ) : null}
    </motion.div>
  );
}
