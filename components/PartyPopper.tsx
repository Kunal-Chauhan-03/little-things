"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  color: string;
  rotation: number;
  rotSpeed: number;
  opacity: number;
  shape: "rect" | "ribbon" | "circle" | "star";
}

interface FlyingEmoji {
  id: number;
  emoji: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  rot: number;
}

interface PartyPopperProps {
  /** Optional custom emojis for this section burst */
  emojis?: string[];
  /** Auto-trigger explosion when section scrolls into view */
  autoTrigger?: boolean;
  /** Explicit key change to re-trigger explosion */
  triggerKey?: number | string;
  /** Custom button label */
  buttonLabel?: string;
  /** Show manual trigger button */
  showButton?: boolean;
  /** Position of trigger button: "center" (default) or "bottom-left" */
  buttonPosition?: "center" | "bottom-left";
  className?: string;
}

const DEFAULT_EMOJIS = ["🎉", "🥳", "💥", "🎈", "🎁", "✨", "❤️", "⭐"];
const PARTY_COLORS = [
  "#FFD700", // Gold
  "#E8A0B5", // Blush Pink
  "#D6B27C", // Champagne
  "#F7EDE3", // Cream White
  "#FF5964", // Vibrant Rose
  "#9B51E0", // Violet Sparkle
  "#35A7FF", // Sky Blue
  "#FF9F1C"  // Warm Orange
];

export default function PartyPopper({
  emojis = DEFAULT_EMOJIS,
  autoTrigger = false,
  triggerKey,
  buttonLabel = "Pop Party Popper! 🎉",
  showButton = false,
  buttonPosition = "center",
  className = ""
}: PartyPopperProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [flyingEmojis, setFlyingEmojis] = useState<FlyingEmoji[]>([]);
  const hasTriggeredRef = useRef(false);

  // Trigger massive full-screen party popper explosion from bottom corners
  const pop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // 180+ full-screen confetti particles
    const particleCount = 180;
    const newParticles: ConfettiParticle[] = [];

    // Left cannon (12% X) & Right cannon (88% X)
    [
      { originX: width * 0.12, minAngle: -Math.PI / 2.3, maxAngle: -Math.PI / 6 },
      { originX: width * 0.88, minAngle: (-5 * Math.PI) / 6, maxAngle: -Math.PI / 2.5 }
    ].forEach(({ originX, minAngle, maxAngle }) => {
      for (let i = 0; i < particleCount / 2; i++) {
        const angle = minAngle + Math.random() * (maxAngle - minAngle);
        const speed = Math.random() * 20 + 14;
        newParticles.push({
          x: originX,
          y: height + 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          width: Math.random() * 10 + 6,
          height: Math.random() * 14 + 6,
          color: PARTY_COLORS[Math.floor(Math.random() * PARTY_COLORS.length)],
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.3,
          opacity: 1,
          shape: Math.random() > 0.4 ? "rect" : Math.random() > 0.5 ? "ribbon" : "circle"
        });
      }
    });

    // 16 Flying Celebration Emojis shooting upward symmetrically across screen
    const activeEmojis = emojis.length > 0 ? emojis : DEFAULT_EMOJIS;
    const newFlying: FlyingEmoji[] = [];
    for (let i = 0; i < 16; i++) {
      const isLeft = i % 2 === 0;
      const angle = isLeft
        ? -Math.PI / 3.2 + (Math.random() * 0.4 - 0.2)
        : (-2 * Math.PI) / 3.2 + (Math.random() * 0.4 - 0.2);
      const speed = Math.random() * 12 + 10;
      newFlying.push({
        id: Date.now() + Math.random(),
        emoji: activeEmojis[Math.floor(Math.random() * activeEmojis.length)],
        x: isLeft ? width * 0.08 : width * 0.92,
        y: height - 60,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        scale: Math.random() * 0.4 + 1.0,
        rot: Math.random() * 40 - 20
      });
    }

    setFlyingEmojis((prev) => [...prev.slice(-24), ...newFlying]);

    // Animate full-screen canvas confetti physics
    let activeParticles = [...newParticles];
    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      activeParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.28; // gravity
        p.vx *= 0.985; // air resistance
        p.rotation += p.rotSpeed;
        p.opacity -= 0.006;

        if (p.opacity > 0) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillStyle = p.color;

          if (p.shape === "rect") {
            ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
          } else if (p.shape === "ribbon") {
            ctx.beginPath();
            ctx.moveTo(-p.width / 2, -p.height / 2);
            ctx.lineTo(p.width / 2, -p.height / 4);
            ctx.lineTo(-p.width / 4, p.height / 2);
            ctx.closePath();
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, p.width / 2, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }
      });

      activeParticles = activeParticles.filter((p) => p.opacity > 0 && p.y < height + 80);

      if (activeParticles.length > 0) {
        animId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [emojis]);

  // Sync canvas dimensions with viewport
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Trigger on triggerKey change
  useEffect(() => {
    if (triggerKey !== undefined && triggerKey !== 0) {
      hasTriggeredRef.current = true;
      pop();
    }
  }, [triggerKey, pop]);

  // Intersection observer for auto-trigger
  useEffect(() => {
    if (!autoTrigger) {
      hasTriggeredRef.current = false;
      return;
    }
    if (hasTriggeredRef.current) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setTimeout(() => pop(), 250);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoTrigger, pop]);

  // Clean up flying emojis
  useEffect(() => {
    if (flyingEmojis.length === 0) return;
    const timer = setTimeout(() => {
      setFlyingEmojis((prev) => prev.slice(10));
    }, 2000);
    return () => clearTimeout(timer);
  }, [flyingEmojis]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* FULL-SCREEN CANVAS OVERLAY FOR PARTY POPPERS */}
      <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />

        {/* Flying Emojis Arc Across Viewport */}
        <AnimatePresence>
          {flyingEmojis.map((e) => (
            <motion.span
              key={e.id}
              initial={{ opacity: 0, scale: 0.3, x: e.x, y: e.y, rotate: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.3, e.scale, e.scale * 1.1, 0.7],
                x: e.x + e.vx * 22,
                y: e.y + e.vy * 22,
                rotate: e.rot
              }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="absolute text-3xl sm:text-5xl pointer-events-none select-none drop-shadow-lg"
            >
              {e.emoji}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* Interactive Trigger Button */}
      {showButton && (
        buttonPosition === "bottom-left" ? (
          <div className="fixed bottom-5 left-5 z-50 pointer-events-auto">
            <motion.button
              whileHover={{ scale: 1.15, rotate: 12 }}
              whileTap={{ scale: 0.88 }}
              onClick={pop}
              title="Pop Party Popper! 🎉"
              aria-label="Pop Party Popper"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/80 bg-espresso/90 text-2xl shadow-xl backdrop-blur-md transition-colors hover:border-champagne hover:bg-champagne/30"
            >
              🎉
            </motion.button>
          </div>
        ) : (
          <div className="relative z-40 pointer-events-auto text-center my-6">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={pop}
              className="inline-flex items-center gap-2 rounded-full border border-champagne/60 bg-champagne/20 px-7 py-3 font-display text-base font-semibold text-champagne shadow-xl backdrop-blur-md transition-all hover:bg-champagne hover:text-espresso"
            >
              <span>🎉</span>
              <span>{buttonLabel}</span>
              <span>✨</span>
            </motion.button>
          </div>
        )
      )}
    </div>
  );
}
