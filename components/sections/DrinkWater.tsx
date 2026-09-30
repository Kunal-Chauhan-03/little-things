"use client";

import { RevealLine } from "../RevealText";
import NextButton from "../NextButton";
import { motion } from "framer-motion";
import { drinkWaterCallback } from "@/lib/content";

export default function DrinkWater() {
  return (
    <section id="drink-water" className="section paper-texture bg-drink-spotlight text-center relative overflow-hidden">
      <div className="mx-auto max-w-md space-y-4 relative z-10">
        <RevealLine className="font-body text-base text-cream/85">{drinkWaterCallback.line1}</RevealLine>
        <RevealLine className="font-body text-base text-cream/85" delay={0.3}>
          {drinkWaterCallback.line2}
        </RevealLine>
        <RevealLine className="font-body text-base text-cream/85" delay={0.6}>
          {drinkWaterCallback.line3}
        </RevealLine>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="py-4 font-display text-2xl text-champagne sm:text-3xl"
        >
          {drinkWaterCallback.big}
        </motion.p>
        <RevealLine className="font-hand text-xl text-blush" delay={1.2}>
          {drinkWaterCallback.line4}
        </RevealLine>

        <NextButton targetId="birthday-moment" label="Continue →" delay={1.5} />
      </div>
    </section>
  );
}
