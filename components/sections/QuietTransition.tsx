"use client";

import { RevealLine } from "../RevealText";
import NextButton from "../NextButton";
import { quietTransition } from "@/lib/content";

export default function QuietTransition() {
  return (
    <section id="quiet-transition" className="section paper-texture bg-quiet-spotlight text-center">
      <div className="mx-auto max-w-sm space-y-6">
        <RevealLine className="font-display text-2xl text-cream/85" delay={0.2}>
          {quietTransition.line1}
        </RevealLine>
        <RevealLine className="font-display italic text-2xl text-champagne" delay={0.6}>
          {quietTransition.line2}
        </RevealLine>
        <div className="pt-2">
          <NextButton targetId="important-message" label="→" delay={0.9} />
        </div>
      </div>
    </section>
  );
}
