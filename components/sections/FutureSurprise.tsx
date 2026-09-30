"use client";

import { RevealLine } from "../RevealText";
import NextButton from "../NextButton";
import { motion } from "framer-motion";
import { futureSurprise } from "@/lib/content";

export default function FutureSurprise() {
  return (
    <section id="future-surprise" className="section paper-texture bg-future-spotlight text-center relative overflow-hidden">
      <div className="mx-auto max-w-md space-y-6 relative z-10">
        <RevealLine className="font-display text-2xl text-cream/95 mb-6">
          {futureSurprise.line1}
        </RevealLine>

        <RevealLine className="whitespace-pre-line font-body text-base sm:text-lg leading-relaxed text-cream/90" delay={0.3}>
          {futureSurprise.line2}
        </RevealLine>

        {/* Small handwritten line appearing after 1.2s */}
        {futureSurprise.handwrittenNote && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-4 font-hand text-2xl sm:text-3xl text-champagne"
          >
            {futureSurprise.handwrittenNote}
          </motion.p>
        )}

        <div className="pt-4">
          <NextButton targetId="photo-apology" label="Continue →" />
        </div>
      </div>
    </section>
  );
}
