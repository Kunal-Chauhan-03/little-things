"use client";

import { motion } from "framer-motion";
import NextButton from "../NextButton";
import { importantMessage } from "@/lib/content";

export default function ImportantMessage() {
  return (
    <section
      id="important-message"
      className="section paper-texture bg-important-spotlight text-center"
    >
      <div className="mx-auto max-w-lg">
        {importantMessage.paragraphs.map((p, i) => {
          if (p.poem) {
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="my-10 whitespace-pre-line font-display text-lg italic leading-[1.9] text-blush/80 sm:text-xl"
              >
                {p.text}
              </motion.p>
            );
          }

          if (p.emphasis) {
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="my-10 font-display text-xl leading-relaxed text-champagne sm:text-2xl"
              >
                {p.text}
              </motion.p>
            );
          }

          return (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="my-6 font-display text-lg leading-relaxed text-cream/90 sm:text-xl"
            >
              {p.text}
            </motion.p>
          );
        })}

        <div className="pt-8">
          <NextButton targetId="drink-water" label="→" />
        </div>
      </div>
    </section>
  );
}
