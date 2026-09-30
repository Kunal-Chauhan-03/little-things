"use client";

import { RevealLine } from "../RevealText";
import NextButton from "../NextButton";
import { notObvious } from "@/lib/content";

export default function NotObvious() {
  return (
    <section id="not-obvious" className="section paper-texture bg-not-obvious-spotlight text-center">
      <div className="mx-auto max-w-md space-y-5">
        <RevealLine className="font-display text-xl sm:text-2xl text-cream/90" delay={0}>
          {notObvious.line1}
        </RevealLine>
        <RevealLine className="font-display text-3xl italic text-champagne" delay={0.4}>
          {notObvious.line2}
        </RevealLine>
        <RevealLine className="font-body text-base text-cream/85" delay={0.8}>
          {notObvious.line3}
        </RevealLine>
        <RevealLine className="font-hand text-2xl text-blush" delay={1.2}>
          {notObvious.line4}
        </RevealLine>
        <div className="pt-2">
          <NextButton targetId="memory-walk" label={notObvious.cta} delay={1.5} />
        </div>
      </div>
    </section>
  );
}
