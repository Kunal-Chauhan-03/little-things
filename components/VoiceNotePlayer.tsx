"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VoiceNotePlayer({
  src,
  onPlayed
}: {
  src: string;
  onPlayed?: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
    } else {
      el.play().catch(() => setMissing(true));
      onPlayed?.();
    }
  };

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4">
      <audio
        ref={audioRef}
        src={src}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => setMissing(true)}
        onTimeUpdate={(e) => {
          const el = e.currentTarget;
          if (el.duration) setProgress(el.currentTime / el.duration);
        }}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause voice note" : "Play voice note"}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-blush text-espresso shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
      >
        {playing ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <rect x="4" y="3" width="4" height="14" rx="1" />
            <rect x="12" y="3" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M5 3.5v13l12-6.5-12-6.5z" />
          </svg>
        )}
      </button>
      <div className="h-1 w-full overflow-hidden rounded-full bg-cream/15">
        <motion.div
          className="h-full bg-champagne"
          animate={{ width: `${progress * 100}%` }}
          transition={{ ease: "linear", duration: 0.15 }}
        />
      </div>
      {missing && (
        <p className="text-center text-xs text-cream/40">
          add your voice note to /public/audio/voice-note.mp3
        </p>
      )}
    </div>
  );
}
