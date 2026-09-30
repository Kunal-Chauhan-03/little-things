"use client";

import { motion } from "framer-motion";
import { RevealLine } from "../RevealText";
import NextButton from "../NextButton";
import { attackMode } from "@/lib/content";

export default function AttackMode() {
  return (
    <section id="attack-mode" className="section paper-texture bg-attack-spotlight text-center">
      <div className="mx-auto w-full max-w-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-2 inline-block rounded-full border border-blush/50 bg-espresso/60 px-4 py-1 font-body text-xs tracking-[0.15em] text-blush backdrop-blur-xs"
        >
          {attackMode.title}
        </motion.div>
        <RevealLine className="font-display text-2xl text-cream/95 mb-8" delay={0.2}>
          {attackMode.subtitle}
        </RevealLine>

        <div className="space-y-4 rounded-2xl border border-cream/15 bg-espresso/60 p-6 text-left backdrop-blur-xs shadow-xl">
          {attackMode.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.35 }}
              className="flex items-center justify-between border-b border-cream/10 pb-3 last:border-none last:pb-0"
            >
              <span className="font-body text-sm text-cream/70">{s.label}</span>
              <span className="font-display text-lg text-champagne">{s.value}</span>
            </motion.div>
          ))}
        </div>

        <RevealLine className="mt-8 font-body text-base text-cream/80" delay={0.9}>
          {attackMode.outro1}
        </RevealLine>
        <RevealLine className="font-hand text-2xl text-blush" delay={1.2}>
          {attackMode.outro2}
        </RevealLine>

        <NextButton targetId="look-around" label={attackMode.cta} delay={1.5} />
      </div>
    </section>
  );
}
