"use client";

import { motion } from "framer-motion";
import { RevealLine } from "../RevealText";
import PolaroidCard from "../PolaroidCard";
import NextButton from "../NextButton";
import { togetherSection } from "@/lib/content";
import { togetherPhotos } from "@/lib/assets";

const rotations = [-6, 5, -3];

export default function Together() {
  const count = togetherPhotos.length;
  const isPair = count === 2;

  return (
    <section id="together" className="section paper-texture bg-together-spotlight text-center relative overflow-hidden py-16">
      {/* Soft Bokeh Background Lights */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-champagne/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blush/15 rounded-full blur-[110px] pointer-events-none" />

      <div className={`mx-auto relative z-10 ${isPair ? "max-w-xs sm:max-w-xl" : "max-w-3xl"}`}>
        {/* Scrapbook Section Header */}
        <RevealLine className="font-serif italic text-3xl sm:text-4xl text-champagne mb-2">
          Memories & Chaos ✨
        </RevealLine>
        <RevealLine className="font-display text-lg text-cream/90 mb-10">
          {togetherSection.line1}
        </RevealLine>

        {/* Scrapbook Overlapping Collage Layout */}
        {isPair ? (
          <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0 relative">
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, rotate: rotations[0] }}
              whileHover={{ scale: 1.05, zIndex: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sm:relative sm:z-10 sm:translate-y-3 relative group"
            >
              {/* Washi Tape Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-champagne/40 backdrop-blur-xs border border-champagne/50 rotate-[-4deg] z-20 shadow-xs pointer-events-none" />
              <PolaroidCard photo={togetherPhotos[0]} rotate={0} delay={0} size="md" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 6 }}
              whileInView={{ opacity: 1, x: 0, rotate: rotations[1] }}
              whileHover={{ scale: 1.05, zIndex: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="-mt-6 sm:relative sm:z-20 sm:-mt-0 sm:-ml-10 sm:-translate-y-3 relative group"
            >
              {/* Washi Tape Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-blush/40 backdrop-blur-xs border border-blush/50 rotate-[6deg] z-20 shadow-xs pointer-events-none" />
              <PolaroidCard photo={togetherPhotos[1]} rotate={0} delay={0.2} size="md" />
            </motion.div>
          </div>
        ) : (
          <div className="mb-12 flex flex-wrap items-start justify-center gap-6 relative">
            {togetherPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20, rotate: rotations[i % rotations.length] }}
                whileInView={{ opacity: 1, y: 0, rotate: rotations[i % rotations.length] }}
                whileHover={{ scale: 1.05, zIndex: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative group"
              >
                <PolaroidCard photo={photo} rotate={0} delay={0} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Section Text Copy */}
        <div className="space-y-2">
          <RevealLine className="font-display text-lg sm:text-xl text-cream/90" delay={0.2}>
            {togetherSection.line2}
          </RevealLine>
          <RevealLine className="font-body text-base text-cream/85" delay={0.4}>
            {togetherSection.line3}
          </RevealLine>
          <RevealLine className="font-hand text-2xl sm:text-3xl text-blush" delay={0.7}>
            {togetherSection.line4}
          </RevealLine>
          <RevealLine className="font-body text-base text-cream/85" delay={1.0}>
            {togetherSection.line5}
          </RevealLine>
        </div>

        <NextButton targetId="voice-note" label="Keep going →" delay={1.3} />
      </div>
    </section>
  );
}
