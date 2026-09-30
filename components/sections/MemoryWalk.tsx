"use client";

import { RevealLine } from "../RevealText";
import RevealChip from "../RevealChip";
import NextButton from "../NextButton";
import { memoryWalk } from "@/lib/content";

export default function MemoryWalk() {
  return (
    <section id="memory-walk" className="section paper-texture bg-memory-spotlight text-center">
      <div className="mx-auto max-w-2xl">
        <RevealLine className="font-display text-xl sm:text-2xl text-cream/90 mb-2">
          {memoryWalk.intro}
        </RevealLine>
        <p className="mb-10 font-hand text-lg text-champagne/70">({memoryWalk.hint})</p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {memoryWalk.memories.map((m) => (
            <RevealChip key={m.key} label={m.label} text={m.text} />
          ))}
        </div>

        <NextButton targetId="attack-mode" label="Keep walking →" delay={0.5} />
      </div>
    </section>
  );
}
