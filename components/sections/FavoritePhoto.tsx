"use client";

import { RevealLine } from "../RevealText";
import Photo from "../Photo";
import NextButton from "../NextButton";
import { motion } from "framer-motion";
import { favoritePhotoSection } from "@/lib/content";
import { favoritePhoto } from "@/lib/assets";

export default function FavoritePhoto() {
  return (
    <section id="favorite-photo" className="section paper-texture bg-favorite-spotlight text-center">
      <div className="mx-auto max-w-md">
        <RevealLine className="font-display text-xl italic text-cream/85 mb-8">
          {favoritePhotoSection.line1}
        </RevealLine>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="polaroid mx-auto w-72 sm:w-96 shadow-2xl"
        >
          <div className="aspect-[4/5] w-full overflow-hidden bg-coffee/20">
            <Photo photo={favoritePhoto} imgClassName="h-full w-full object-cover" className="h-full w-full" />
          </div>
        </motion.div>

        <div className="mt-8 space-y-1">
          <RevealLine className="font-body text-base text-cream/85" delay={0.3}>
            {favoritePhotoSection.line2}
          </RevealLine>
          <RevealLine className="font-hand text-2xl text-blush" delay={0.6}>
            {favoritePhotoSection.line3}
          </RevealLine>
        </div>

        <NextButton targetId="together" label="Keep going →" delay={0.9} />
      </div>
    </section>
  );
}
