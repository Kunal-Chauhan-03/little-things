"use client";

import { motion } from "framer-motion";

export default function NextButton({
  targetId,
  label,
  delay = 0,
  onClick
}: {
  targetId?: string;
  label: string;
  delay?: number;
  onClick?: () => void;
}) {
  const handleClick = () => {
    onClick?.();
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="mt-8 rounded-full border border-champagne/60 bg-espresso/60 px-8 py-3 font-body text-sm tracking-wide text-champagne backdrop-blur-xs transition-colors hover:bg-champagne hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne shadow-lg"
      >
        {label}
      </motion.button>
    </motion.div>
  );
}
