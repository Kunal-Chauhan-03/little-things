"use client";

import { motion } from "framer-motion";
import RevealChip from "../RevealChip";
import NextButton from "../NextButton";
import { lookAround } from "@/lib/content";

const floatIcons = ["☕", "🌷", "🎬", "✈️", "🥟", "📝"];

export default function LookAround() {
  return (
    <section
      id="look-around"
      className="section relative overflow-hidden paper-texture bg-look-around-spotlight text-center"
    >
      {/* ambient floating world elements */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        {floatIcons.map((icon, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl sm:text-3xl"
            style={{ left: `${8 + i * 16}%`, top: `${15 + (i % 3) * 32}%` }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6 + i * 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-2 sm:px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-2 font-display text-2xl italic text-cream/95 sm:text-4xl"
        >
          {lookAround.title}
        </motion.h2>
        <p className="mb-10 font-hand text-xl text-champagne/80">({lookAround.hint})</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 justify-center items-stretch">
          {lookAround.objects.map((o) => (
            <RevealChip key={o.key} label={o.label} emoji={o.emoji} text={o.text} text2={o.text2} />
          ))}
        </div>

        <NextButton targetId="photo-moment" label={lookAround.cta} delay={0.6} />
      </div>
    </section>
  );
}
