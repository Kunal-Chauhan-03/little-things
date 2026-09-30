"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { backgroundMusic } from "@/lib/assets";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const synthRef = useRef<{
    ctx: AudioContext;
    gain: GainNode;
    timeout: NodeJS.Timeout | null;
  } | null>(null);

  // Web Audio Synth Fallback: Rich, warm acoustic piano multi-voice Happy Birthday arrangement
  const startSynth = useCallback(() => {
    if (synthRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.18, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(750, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      // Acoustic Piano Harmonic Arrangement for Happy Birthday (Melody + Harmony + Bass)
      const arrangement = [
        { main: 261.63, bass: 130.81, harmony: 329.63, duration: 0.4 }, // C4 + C3 + E4
        { main: 261.63, bass: 130.81, harmony: 329.63, duration: 0.4 },
        { main: 293.66, bass: 146.83, harmony: 349.23, duration: 0.8 }, // D4 + D3 + F4
        { main: 261.63, bass: 130.81, harmony: 329.63, duration: 0.8 }, // C4 + C3 + E4
        { main: 349.23, bass: 174.61, harmony: 440.00, duration: 0.8 }, // F4 + F3 + A4
        { main: 329.63, bass: 164.81, harmony: 392.00, duration: 1.2 }, // E4 + E3 + G4

        { main: 261.63, bass: 130.81, harmony: 329.63, duration: 0.4 },
        { main: 261.63, bass: 130.81, harmony: 329.63, duration: 0.4 },
        { main: 293.66, bass: 146.83, harmony: 349.23, duration: 0.8 },
        { main: 261.63, bass: 130.81, harmony: 329.63, duration: 0.8 },
        { main: 392.00, bass: 196.00, harmony: 493.88, duration: 0.8 }, // G4 + G3 + B4
        { main: 349.23, bass: 174.61, harmony: 440.00, duration: 1.2 }, // F4 + F3 + A4

        { main: 261.63, bass: 130.81, harmony: 329.63, duration: 0.4 },
        { main: 261.63, bass: 130.81, harmony: 329.63, duration: 0.4 },
        { main: 523.25, bass: 261.63, harmony: 659.25, duration: 0.8 }, // C5 + C4 + E5
        { main: 440.00, bass: 220.00, harmony: 554.37, duration: 0.8 }, // A4 + A3 + C#5
        { main: 349.23, bass: 174.61, harmony: 440.00, duration: 0.8 },
        { main: 329.63, bass: 164.81, harmony: 392.00, duration: 0.8 },
        { main: 293.66, bass: 146.83, harmony: 349.23, duration: 1.2 },

        { main: 466.16, bass: 233.08, harmony: 587.33, duration: 0.4 }, // Bb4 + Bb3 + D5
        { main: 466.16, bass: 233.08, harmony: 587.33, duration: 0.4 },
        { main: 440.00, bass: 220.00, harmony: 523.25, duration: 0.8 },
        { main: 349.23, bass: 174.61, harmony: 440.00, duration: 0.8 },
        { main: 392.00, bass: 196.00, harmony: 493.88, duration: 0.8 },
        { main: 349.23, bass: 174.61, harmony: 440.00, duration: 1.4 }
      ];

      let noteIndex = 0;

      const playNextNote = () => {
        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const item = arrangement[noteIndex % arrangement.length];
        noteIndex++;

        const now = ctx.currentTime;

        // Play main melody oscillator
        const oscMain = ctx.createOscillator();
        const gainMain = ctx.createGain();
        oscMain.type = "sine";
        oscMain.frequency.setValueAtTime(item.main, now);
        gainMain.gain.setValueAtTime(0.001, now);
        gainMain.gain.exponentialRampToValueAtTime(0.2, now + 0.06);
        gainMain.gain.exponentialRampToValueAtTime(0.0001, now + item.duration * 0.95);
        oscMain.connect(gainMain);
        gainMain.connect(masterGain);
        oscMain.start(now);
        oscMain.stop(now + item.duration);

        // Play warm bass oscillator
        const oscBass = ctx.createOscillator();
        const gainBass = ctx.createGain();
        oscBass.type = "triangle";
        oscBass.frequency.setValueAtTime(item.bass, now);
        gainBass.gain.setValueAtTime(0.001, now);
        gainBass.gain.exponentialRampToValueAtTime(0.14, now + 0.08);
        gainBass.gain.exponentialRampToValueAtTime(0.0001, now + item.duration * 0.95);
        oscBass.connect(gainBass);
        gainBass.connect(masterGain);
        oscBass.start(now);
        oscBass.stop(now + item.duration);

        // Play soft harmony oscillator
        const oscHarmony = ctx.createOscillator();
        const gainHarmony = ctx.createGain();
        oscHarmony.type = "sine";
        oscHarmony.frequency.setValueAtTime(item.harmony, now);
        gainHarmony.gain.setValueAtTime(0.001, now);
        gainHarmony.gain.exponentialRampToValueAtTime(0.1, now + 0.07);
        gainHarmony.gain.exponentialRampToValueAtTime(0.0001, now + item.duration * 0.95);
        oscHarmony.connect(gainHarmony);
        gainHarmony.connect(masterGain);
        oscHarmony.start(now);
        oscHarmony.stop(now + item.duration);

        const timeout = setTimeout(playNextNote, item.duration * 1000 + 100);
        if (synthRef.current) {
          synthRef.current.timeout = timeout;
        }
      };

      playNextNote();
      synthRef.current = { ctx, gain: masterGain, timeout: null };
    } catch {
      // Web Audio unsupported
    }
  }, []);

  const stopSynth = useCallback(() => {
    if (synthRef.current) {
      if (synthRef.current.timeout) clearTimeout(synthRef.current.timeout);
      synthRef.current.ctx.close();
      synthRef.current = null;
    }
  }, []);

  const startMusic = useCallback(() => {
    if (started) return;
    setStarted(true);

    const el = audioRef.current;
    if (el) {
      el.volume = 0.35;
      el.play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {
          startSynth();
          setPlaying(true);
        });
    } else {
      startSynth();
      setPlaying(true);
    }
  }, [started, startSynth]);

  useEffect(() => {
    const handleFirstClick = () => {
      startMusic();
    };

    window.addEventListener("click", handleFirstClick, { once: true });
    return () => {
      window.removeEventListener("click", handleFirstClick);
      stopSynth();
    };
  }, [startMusic, stopSynth]);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!started) {
      startMusic();
      return;
    }

    const el = audioRef.current;
    if (playing) {
      if (el && !el.paused) {
        el.pause();
      }
      if (synthRef.current) {
        synthRef.current.gain.gain.setValueAtTime(0, synthRef.current.ctx.currentTime);
      }
      setPlaying(false);
    } else {
      if (el && el.src && !el.error) {
        el.play()
          .then(() => setPlaying(true))
          .catch(() => {
            startSynth();
            if (synthRef.current) {
              synthRef.current.gain.gain.setValueAtTime(0.18, synthRef.current.ctx.currentTime);
            }
            setPlaying(true);
          });
      } else {
        startSynth();
        if (synthRef.current) {
          synthRef.current.gain.gain.setValueAtTime(0.18, synthRef.current.ctx.currentTime);
        }
        setPlaying(true);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={backgroundMusic.src}
        loop
        onError={() => {
          if (playing && !synthRef.current) {
            startSynth();
          }
        }}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Mute background music" : "Play background music"}
        title={playing ? "Mute background music" : "Play background music"}
        className={`fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 shadow-lg ${
          playing
            ? "border-champagne/80 bg-espresso/80 text-champagne scale-105"
            : "border-cream/20 bg-espresso/60 text-cream/60 hover:border-champagne/50 hover:text-cream"
        } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne`}
      >
        {playing ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18 6a9 9 0 0 1 0 12" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            <line x1="16" y1="9" x2="22" y2="15" />
            <line x1="22" y1="9" x2="16" y2="15" />
          </svg>
        )}
      </button>
    </>
  );
}
