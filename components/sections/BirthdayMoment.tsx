"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Photo from "../Photo";
import NextButton from "../NextButton";
import PartyPopper from "../PartyPopper";
import { birthdayMoment } from "@/lib/content";
import { birthdayHeroPhoto } from "@/lib/assets";

export default function BirthdayMoment() {
  const [inView, setInView] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [count, setCount] = useState<number | null>(3);
  const [isRevealed, setIsRevealed] = useState(false);
  const [popperTriggerKey, setPopperTriggerKey] = useState(0);

  // Start countdown ONLY when section enters viewport
  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
    }
  }, [inView, hasStarted]);

  // Countdown step timer logic (runs ONLY after section enters viewport)
  useEffect(() => {
    if (!hasStarted || isRevealed || count === null) return;

    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 900);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      setIsRevealed(true);
      setCount(null);
      // Burst party popper ONCE after countdown finishes
      setPopperTriggerKey((prev) => prev + 1);
    }
  }, [hasStarted, count, isRevealed]);

  const restartCountdown = () => {
    document.getElementById("birthday-moment")?.scrollIntoView({ behavior: "smooth" });
    setIsRevealed(false);
    setCount(3);
  };

  return (
    <section
      id="birthday-moment"
      className="section paper-texture bg-birthday-spotlight text-center relative overflow-hidden min-h-screen flex flex-col justify-center items-center py-10 px-4"
    >
      {/* Intersection Observer Trigger */}
      <motion.div
        onViewportEnter={() => setInView(true)}
        viewport={{ once: true, margin: "-50px" }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Full-Screen Party Popper — ONLY bursts when triggerKey updates after countdown finishes or on click */}
      <PartyPopper
        autoTrigger={false}
        triggerKey={popperTriggerKey}
        showButton={true}
        buttonPosition="bottom-left"
        emojis={["🎉", "🥳", "💥", "🎈", "🎁", "✨", "❤️", "⭐"]}
        className="w-full"
      />

      <div className="mx-auto max-w-5xl relative z-10 w-full">
        <AnimatePresence mode="wait">
          {!isRevealed && count !== null && count > 0 ? (
            /* SLEEK INLINE COUNTDOWN (NO PARTY POPPER DURING COUNTDOWN) */
            <motion.div
              key={`countdown-${count}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 1.4, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="my-24 flex flex-col items-center justify-center"
            >
              <div className="font-display text-8xl sm:text-9xl lg:text-[10rem] text-champagne drop-shadow-[0_0_40px_rgba(214,178,124,0.9)] font-bold">
                {count}
              </div>
              <p className="mt-4 font-hand text-2xl sm:text-3xl text-blush tracking-wider animate-pulse font-bold">
                Get ready... ✨
              </p>
            </motion.div>
          ) : (
            /* REVEALED STAGE: PHOTO ON LEFT, LETTER ON RIGHT + PARTY POPPER BURST */
            <motion.div
              key="revealed-content"
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center justify-center mb-6">
                {/* LEFT SIDE: PHOTO POLAROID FRAME */}
                <motion.div
                  initial={{ opacity: 0, x: -20, rotate: -4 }}
                  animate={{ opacity: 1, x: 0, rotate: -3 }}
                  whileHover={{ scale: 1.03, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-5 flex flex-col items-center justify-center"
                >
                  <div className="polaroid w-72 sm:w-80 lg:w-[350px] shadow-2xl bg-[#FCF8F3] relative group">
                    {/* Washi Tape Accent */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-champagne/45 backdrop-blur-xs border border-champagne/50 rotate-[-3deg] z-20 shadow-xs pointer-events-none" />
                    <div className="aspect-[4/5] w-full overflow-hidden bg-coffee/10 rounded-xs">
                      <Photo
                        photo={birthdayHeroPhoto}
                        imgClassName="h-full w-full object-cover"
                        className="h-full w-full"
                      />
                    </div>
                    <p className="mt-3 text-center font-hand text-2xl sm:text-3xl text-[#6F4E37] font-semibold">
                      Birthday Girl ✨
                    </p>
                  </div>
                </motion.div>

                {/* RIGHT SIDE: RICH COFFEE & GOLD LETTER CARD */}
                <div className="lg:col-span-7 w-full text-left">
                  <div className="relative bg-gradient-to-b from-[#2D2018] via-[#241913] to-[#1C130E] text-cream rounded-2xl p-6 sm:p-8 lg:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(214,178,124,0.15)] border border-[#D6B27C]/40 overflow-hidden text-center backdrop-blur-md">
                    {/* Micro Noise Grain Texture */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#D6B27C_1px,transparent_1px)] [background-size:20px_20px]" />

                    {/* Golden Corner Filigree Accents */}
                    <div className="absolute top-4 left-4 pointer-events-none opacity-60">
                      <svg className="w-7 h-7 text-[#D6B27C]" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 25 V 5 H 25" />
                        <path d="M12 12 Q 25 12 25 25" />
                        <circle cx="8" cy="8" r="2" fill="currentColor" />
                      </svg>
                    </div>

                    <div className="absolute top-4 right-4 pointer-events-none opacity-60">
                      <svg className="w-7 h-7 text-[#D6B27C]" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M45 25 V 5 H 25" />
                        <path d="M38 12 Q 25 12 25 25" />
                        <circle cx="42" cy="8" r="2" fill="currentColor" />
                      </svg>
                    </div>

                    {/* Pressed Flower Accent (Top Center) */}
                    <div className="flex justify-center mb-3 opacity-80 pointer-events-none">
                      <svg className="w-9 h-9 text-[#D6B27C]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                        <path d="M50 90 Q 45 60 50 20" strokeWidth="2" strokeLinecap="round" />
                        <path d="M50 35 C 30 20, 20 40, 50 50 C 80 40, 70 20, 50 35 Z" fill="#E8A0B5" fillOpacity="0.4" stroke="#E8A0B5" strokeWidth="1.5" />
                        <path d="M50 45 C 35 60, 20 70, 42 78 C 55 70, 65 60, 50 45 Z" fill="#D6B27C" fillOpacity="0.35" stroke="#D6B27C" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Headline */}
                    <h2 className="mb-4 font-serif text-2xl sm:text-3xl lg:text-4xl text-[#D6B27C] font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(214,178,124,0.35)]">
                      {birthdayMoment.headline}
                    </h2>

                    {/* Birthday Message Paragraphs */}
                    <div className="space-y-3 font-serif text-sm sm:text-base leading-relaxed text-[#F7EDE3]/90">
                      {birthdayMoment.message.map((line, i) => (
                        <p
                          key={i}
                          className={`font-serif leading-relaxed ${
                            i === birthdayMoment.message.length - 1
                              ? "font-serif font-semibold text-base sm:text-lg text-blush mt-3"
                              : "text-[#F7EDE3]/90"
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={restartCountdown}
                  className="rounded-full border border-champagne/60 bg-espresso/80 px-6 py-2.5 font-hand text-lg text-champagne hover:bg-champagne hover:text-espresso transition-all shadow-lg backdrop-blur-md"
                >
                  Replay Countdown ⏱️
                </button>

                <NextButton
                  targetId="future-surprise"
                  label="One more thing →"
                  delay={0.2}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
