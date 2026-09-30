"use client";

import { motion } from "framer-motion";
import { RevealLine } from "../RevealText";
import NextButton from "../NextButton";
import { photoApology } from "@/lib/content";

export default function PhotoApology() {
  return (
    <section
      id="photo-apology"
      className="section paper-texture bg-apology-spotlight text-center relative overflow-hidden py-16 px-4"
    >
      <div className="mx-auto max-w-2xl relative z-10 w-full">
        {/* Confession Parchment Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-b from-[#2D2018] via-[#241913] to-[#1C130E] text-cream rounded-2xl p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(214,178,124,0.15)] border border-[#D6B27C]/40 backdrop-blur-md overflow-hidden text-left"
        >
          {/* Micro Noise Grain Texture */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#D6B27C_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Golden Corner Accents */}
          <div className="absolute top-4 left-4 pointer-events-none opacity-60">
            <svg className="w-7 h-7 text-[#D6B27C]" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 25 V 5 H 25" />
              <path d="M12 12 Q 25 12 25 25" />
              <circle cx="8" cy="8" r="2" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 pointer-events-none opacity-60">
            <svg className="w-7 h-7 text-[#D6B27C]" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M45 25 V 5 H 25" />
              <path d="M38 12 Q 25 12 25 25" />
              <circle cx="42" cy="8" r="2" fill="currentColor" />
            </svg>
          </div>

          {/* Title */}
          <RevealLine className="font-serif text-2xl sm:text-3xl text-[#D6B27C] font-bold mb-6 text-center tracking-tight drop-shadow-[0_2px_12px_rgba(214,178,124,0.35)]">
            {photoApology.title}
          </RevealLine>

          {/* Paragraphs */}
          <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-[#F7EDE3]/90">
            {photoApology.paragraphs.map((p, i) => {
              // Special styling for key emphasis lines
              if (i === 1) {
                // Sorryyy in advance...
                return (
                  <RevealLine
                    key={i}
                    delay={0.15 + i * 0.08}
                    className="font-serif font-semibold text-blush text-base sm:text-lg my-4 bg-blush/10 p-4 rounded-xl border border-blush/20 leading-relaxed text-center"
                  >
                    {p}
                  </RevealLine>
                );
              }

              if (i === 11) {
                // So... did I redeem that walk with you? 👀
                return (
                  <RevealLine
                    key={i}
                    delay={0.15 + i * 0.08}
                    className="font-serif font-bold text-xl sm:text-2xl text-[#D6B27C] mt-6 text-center drop-shadow-sm"
                  >
                    {p}
                  </RevealLine>
                );
              }

              if (i === 12) {
                // *(I'm actually serious about this one.)*
                return (
                  <RevealLine
                    key={i}
                    delay={0.15 + i * 0.08}
                    className="font-hand text-lg sm:text-xl text-cream/70 italic text-center -mt-1"
                  >
                    {p}
                  </RevealLine>
                );
              }

              if (i === 13) {
                // Happy Birthday, Pri. ❤️
                return (
                  <RevealLine
                    key={i}
                    delay={0.15 + i * 0.08}
                    className="font-serif font-bold text-2xl sm:text-3xl text-blush mt-6 text-center drop-shadow-md"
                  >
                    {p}
                  </RevealLine>
                );
              }

              return (
                <RevealLine
                  key={i}
                  delay={0.15 + i * 0.08}
                  className="font-serif text-base sm:text-lg leading-relaxed text-[#F7EDE3]/90"
                >
                  {p}
                </RevealLine>
              );
            })}
          </div>
        </motion.div>

        {/* Action Button to Final Replay Screen */}
        <div className="pt-8 text-center">
          <NextButton
            targetId="final"
            label="One final note →"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
