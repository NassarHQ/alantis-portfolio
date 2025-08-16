"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export default function Frame({ children, className }: Props) {
  return (
    <motion.div
      className={`relative rounded-2xl border border-amber-700/40 bg-[rgb(250,247,240)]/70 
                  backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5),0_6px_20px_rgba(0,0,0,0.07)]
                  ${className || ""}`}
      whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.4 }}
    >
      {/* gold fillet */}
      <div className="pointer-events-none absolute inset-[6px] rounded-xl border border-amber-500/40" />
      {children}
    </motion.div>
  );
}
