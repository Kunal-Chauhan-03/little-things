"use client";

import { motion } from "framer-motion";
import { RevealLine } from "../RevealText";
import NextButton from "../NextButton";
import { finalLetter } from "@/lib/content";

export default function FinalLetter() {
  return (
    <section
      id="final-letter"
      className="section paper-texture bg-final-spotlight text-left relative overflow-hidden py-16 px-4"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-xl relative z-10 w-full">
        {/* Vintage Parchment Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-b from-[#FAF5EC] via-[#F5EFE4] to-[#EFE6D5] text-[#33261D] rounded-xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_1px_rgba(214,178,124,0.5)] border border-[#D6B27C]/40 overflow-hidden"
        >
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#8C6D46_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Pressed Flower Accent (Top Right) */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none opacity-80">
            <svg className="w-12 h-12 text-[#9E7B56]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              {/* Stem */}
              <path d="M50 90 Q 45 60 50 20" strokeWidth="2" strokeLinecap="round" />
              {/* Petals */}
              <path d="M50 35 C 30 20, 20 40, 50 50 C 80 40, 70 20, 50 35 Z" fill="#D89CA9" fillOpacity="0.4" stroke="#B87B88" strokeWidth="1.5" />
              <path d="M50 45 C 35 60, 20 70, 42 78 C 55 70, 65 60, 50 45 Z" fill="#C6A477" fillOpacity="0.35" stroke="#9E7B56" strokeWidth="1.5" />
              {/* Small Leaves */}
              <path d="M48 65 C 38 60, 32 68, 48 72 Z" fill="#7A8B6E" fillOpacity="0.5" stroke="#5C6C52" strokeWidth="1.2" />
              <path d="M52 55 C 62 50, 68 58, 52 62 Z" fill="#7A8B6E" fillOpacity="0.5" stroke="#5C6C52" strokeWidth="1.2" />
            </svg>
          </div>

          {/* Letter Salutation */}
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif italic text-2xl sm:text-3xl text-[#523A28] mb-6 tracking-wide"
          >
            {finalLetter.salutation}
          </motion.h3>

          {/* Letter Paragraphs */}
          <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-[#3B2C20]">
            {finalLetter.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Closing Wish */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 + finalLetter.paragraphs.length * 0.2 + 0.1 }}
            className="mt-8 font-serif font-semibold text-xl sm:text-2xl text-[#6B4423]"
          >
            {finalLetter.closingWish}
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + finalLetter.paragraphs.length * 0.2 + 0.3 }}
            className="mt-6 text-right font-hand text-3xl sm:text-4xl text-[#7A4E29] tracking-wider font-bold"
          >
            {finalLetter.signature}
          </motion.div>
        </motion.div>

        {/* Continue to Final Replay Screen */}
        <div className="mt-10 text-center">
          <NextButton
            targetId="final"
            label="Replay or wrap up →"
            delay={1.4}
          />
        </div>
      </div>
    </section>
  );
}
