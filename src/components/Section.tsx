"use client";
import { motion as m } from "framer-motion";
import { cls } from "@/lib/theme";
import React from "react";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  noCard?: boolean;
};

export default function Section({
  id,
  title,
  children,
  className = "",
  noCard = false,
}: SectionProps) {
  return (
    <section
      id={id}
      data-nav-section
      className={`py-16 sm:py-24 scroll-mt-24 ${className}`}
    >
      <div className={cls.sectionWrap}>
        <m.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          {title}
        </m.h2>
        <div className="mt-6 sm:mt-8">
          {noCard ? children : <div className={cls.card}>{children}</div>}
        </div>
      </div>
    </section>
  );
}
