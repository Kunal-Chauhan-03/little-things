"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VoiceNotePlayer from "../VoiceNotePlayer";
import NextButton from "../NextButton";
import { voiceNoteSection } from "@/lib/content";
import { voiceNote } from "@/lib/assets";
import { RevealLine } from "../RevealText";

export default function VoiceNoteSection() {
  const [played, setPlayed] = useState(false);

  return (
    <section id="voice-note" className="section paper-texture bg-voice-spotlight text-center">
      <div className="mx-auto max-w-md space-y-4">
        {/* Small text at top */}
        {voiceNoteSection.topHeading && (
          <RevealLine className="font-hand text-xl sm:text-2xl text-champagne/80">
            {voiceNoteSection.topHeading}
          </RevealLine>
        )}

        {/* Text underneath */}
        {voiceNoteSection.subText && (
          <RevealLine className="whitespace-pre-line font-display text-lg sm:text-xl text-cream/90 leading-relaxed" delay={0.25}>
            {voiceNoteSection.subText}
          </RevealLine>
        )}

        {/* Label above play button */}
        {voiceNoteSection.playLabel && (
          <RevealLine className="font-hand text-2xl sm:text-3xl text-blush pt-2" delay={0.45}>
            {voiceNoteSection.playLabel}
          </RevealLine>
        )}

        <div className="flex justify-center pt-2 pb-4">
          <VoiceNotePlayer src={voiceNote.src} onPlayed={() => setPlayed(true)} />
        </div>

        <AnimatePresence>
          {played && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 space-y-1"
            >
              <p className="font-body text-base text-cream/80">{voiceNoteSection.after1}</p>
              <p className="font-hand text-xl text-blush">{voiceNoteSection.after2}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <NextButton targetId="quiet-transition" label="Continue →" delay={0.7} />
      </div>
    </section>
  );
}
