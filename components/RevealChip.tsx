"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RevealChip({
  label,
  emoji,
  text,
  text2,
  onFullyRevealed
}: {
  label: string;
  emoji?: string;
  text: string;
  text2?: string;
  onFullyRevealed?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  const handleClick = () => {
    if (!open) {
      setOpen(true);
      setStage(1);
      return;
    }
    if (text2 && stage === 1) {
      setStage(2);
      onFullyRevealed?.();
      return;
    }
    setOpen(false);
    setStage(0);
  };

  return (
    <motion.button
      layout
      onClick={handleClick}
      className={`group flex min-h-[90px] w-full flex-col items-center justify-center gap-2 rounded-2xl border px-6 py-5 sm:px-7 sm:py-6 text-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${
        open
          ? "border-champagne/70 bg-espresso/80 shadow-md"
          : "border-cream/15 bg-cream/5 hover:border-champagne/40 hover:bg-cream/10"
      }`}
    >
      <motion.span layout className="flex items-center justify-center gap-2.5 font-hand text-2xl sm:text-3xl text-champagne">
        {emoji && <span className="text-2xl sm:text-3xl">{emoji}</span>}
        <span>{label}</span>
      </motion.span>
      <AnimatePresence mode="wait">
        {open && (
          <motion.span
            key={stage}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-[260px] whitespace-pre-line text-center font-body text-sm sm:text-base text-cream/90 pt-1"
          >
            {stage === 1 ? text : text2}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
