"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealGroup } from "../RevealText";
import NextButton from "../NextButton";
import { entry, afterEntry } from "@/lib/content";

export default function Entry() {
  const [clicked, setClicked] = useState(false);

  return (
    <section id="entry" className="section paper-texture bg-entry-spotlight text-center">
      <div className="mx-auto max-w-md">
        <RevealGroup
          lines={entry.lines}
          stagger={0.2}
          lineClassName="font-display text-2xl sm:text-3xl text-cream/95 mb-2"
        />
        {!clicked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: entry.lines.length * 0.2 + 0.2, duration: 0.4 }}
          >
            <button
              onClick={() => setClicked(true)}
              className="mt-8 rounded-full bg-champagne px-8 py-3 font-body text-sm tracking-wide text-espresso transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream shadow-lg cursor-pointer"
            >
              {entry.cta}
            </button>
          </motion.div>
        )}

        <AnimatePresence>
          {clicked && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10 space-y-6"
            >
              <p className="font-display italic text-xl text-champagne">{afterEntry.lines[0]}</p>
              <div className="space-y-1">
                {afterEntry.lines2.map((l, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.3, duration: 0.35 }}
                    className="font-body text-base text-cream/80"
                  >
                    {l}
                  </motion.p>
                ))}
              </div>
              <NextButton
                targetId="not-obvious"
                label={afterEntry.cta}
                delay={0.3 + afterEntry.lines2.length * 0.3 + 0.2}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
