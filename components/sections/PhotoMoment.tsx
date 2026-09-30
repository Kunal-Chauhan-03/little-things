"use client";

import { motion } from "framer-motion";
import { RevealLine } from "../RevealText";
import PolaroidCard from "../PolaroidCard";
import NextButton from "../NextButton";
import { photoMoment } from "@/lib/content";
import { soloPhotos } from "@/lib/assets";

const rotations = [-4, 3, -2, 4, -3, 2, -4, 3, -2];

export default function PhotoMoment() {
  return (
    <section id="photo-moment" className="section paper-texture bg-photo-moment-spotlight text-center py-16">
      <div className="mx-auto max-w-6xl w-full px-4 relative">
        {/* Archive Title */}
        <RevealLine className="font-serif italic text-3xl sm:text-4xl text-champagne mb-2">
          Little Archive 📸
        </RevealLine>
        <RevealLine className="font-hand text-2xl text-blush mb-12" delay={0.3}>
          {photoMoment.line3}
        </RevealLine>

        {/* Clothesline Section Container */}
        <div className="relative pt-8 pb-4">
          {/* Wooden Clothesline Wire String */}
          <div className="hidden md:block absolute top-6 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-[#C6A477]/50 to-transparent rounded-full z-0 shadow-sm" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center items-start relative z-10">
            {soloPhotos.map((photo, i) => {
              const rot = rotations[i % rotations.length];

              return (
                <div key={`${photo.src}-${i}`} className="relative group w-full max-w-[280px]">
                  {/* Wooden Clothespin Peg Clip */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none drop-shadow-md">
                    <div className="w-3 h-7 bg-gradient-to-b from-[#E2C498] via-[#C6A477] to-[#A37F55] rounded-xs border border-[#8C6D46] relative">
                      {/* Metallic Spring Clip Wire */}
                      <div className="absolute top-3 left-0 right-0 h-[2px] bg-[#664D31]" />
                    </div>
                  </div>

                  {/* Clothesline Hanging Polaroid */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotate: rot }}
                    whileInView={{ opacity: 1, y: 0, rotate: rot }}
                    whileHover={{ scale: 1.04, rotate: 0, zIndex: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="origin-top"
                  >
                    <PolaroidCard
                      photo={photo}
                      rotate={0}
                      delay={0}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <NextButton targetId="favorite-photo" label="Keep going →" delay={1.2} />
      </div>
    </section>
  );
}
