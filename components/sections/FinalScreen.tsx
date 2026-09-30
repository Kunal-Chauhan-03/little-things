"use client";

import { RevealLine } from "../RevealText";
import { finalScreen } from "@/lib/content";

export default function FinalScreen() {
  const replay = () => {
    document.getElementById("entry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="final" className="section paper-texture bg-final-spotlight text-center relative overflow-hidden">
      <div className="mx-auto max-w-xs space-y-6 relative z-10">
        <RevealLine className="font-hand text-3xl sm:text-4xl text-blush">{finalScreen.line1}</RevealLine>
        <RevealLine className="whitespace-pre-line font-display text-lg sm:text-xl text-cream/90" delay={0.6}>
          {finalScreen.line2}
        </RevealLine>

        <button
          onClick={replay}
          className="mt-6 rounded-full border border-champagne/60 bg-espresso/60 px-8 py-3 font-body text-sm tracking-wide text-champagne backdrop-blur-xs transition-all hover:scale-105 hover:bg-champagne hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne shadow-lg"
        >
          {finalScreen.cta}
        </button>
      </div>
    </section>
  );
}
