"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function RevealLine({
  children,
  delay = 0,
  className = ""
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.p>
  );
}

export function RevealGroup({
  lines,
  className = "",
  lineClassName = "",
  stagger = 0.18
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
}) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <RevealLine key={i} delay={i * stagger} className={lineClassName}>
          {line}
        </RevealLine>
      ))}
    </div>
  );
}
