"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

// Aesthetic side margin badges
const SIDE_QUOTES = [
  { text: "marungi 😭", style: "top-[15%] left-[3%] sm:left-[5%]", rotate: -6 },
  { text: "chup kar 🤫", style: "top-[30%] right-[3%] sm:right-[5%]", rotate: 8 },
  { text: "Sherrr Zinda h!! 🦁", style: "top-[48%] left-[2%] sm:left-[4%]", rotate: -4 },
  { text: "drink water 💧", style: "top-[68%] right-[3%] sm:right-[5%]", rotate: 5 },
  { text: "Seoul is waiting ✈️", style: "top-[85%] left-[3%] sm:left-[6%]", rotate: -8 }
];

export default function BackgroundAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Mouse position tracking for parallax
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 50 };
  const mouseX = useSpring(rawMouseX, springConfig);
  const mouseY = useSpring(rawMouseY, springConfig);

  // Mouse movement for ambient parallax & subtle cursor fairy dust
  useEffect(() => {
    let lastSparkleTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      rawMouseX.set(normX);
      rawMouseY.set(normY);

      const now = Date.now();
      if (now - lastSparkleTime > 70) {
        lastSparkleTime = now;
        const colors = ["#E8A0B5", "#D6B27C", "#F7EDE3"];
        const newSparkle: Sparkle = {
          id: now + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 2,
          color: colors[Math.floor(Math.random() * colors.length)]
        };

        setSparkles((prev) => [...prev.slice(-12), newSparkle]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  // Clean up mouse sparkles
  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.slice(1));
    }, 500);
    return () => clearTimeout(timer);
  }, [sparkles]);

  // Glowing ambient particle & star dust canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Glowing dust, stars, and swaying flower petals
    const particleCount = 55;
    const particles = Array.from({ length: particleCount }, () => {
      const isPetal = Math.random() > 0.65;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isPetal ? Math.random() * 2.5 + 1.8 : Math.random() * 2 + 0.8,
        speedY: isPetal ? Math.random() * 0.35 + 0.15 : Math.random() * 0.3 + 0.1,
        speedX: Math.sin(Math.random() * Math.PI * 2) * 0.25,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        swayAmp: Math.random() * 1.2 + 0.4,
        swayFreq: Math.random() * 0.02 + 0.005,
        opacity: Math.random() * 0.45 + 0.1,
        fadeSpeed: Math.random() * 0.004 + 0.002,
        isPetal,
        type: isPetal ? "petal" : Math.random() > 0.55 ? "star" : "dot",
        color: Math.random() > 0.5 ? "232, 160, 181" : "214, 178, 124"
      };
    });

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += Math.sin(tick * p.swayFreq) * p.swayAmp * 0.4 + p.speedX;
        p.rotation += p.rotationSpeed;

        p.opacity += p.fadeSpeed;
        if (p.opacity > 0.5 || p.opacity < 0.08) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y < -20) p.y = height + 20;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0, p.opacity)})`;

        if (p.type === "petal") {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.radius * 1.6, p.radius, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "star") {
          ctx.beginPath();
          const r = p.radius * 1.5;
          ctx.moveTo(0, -r);
          ctx.lineTo(r * 0.3, -r * 0.3);
          ctx.lineTo(r, 0);
          ctx.lineTo(r * 0.3, r * 0.3);
          ctx.lineTo(0, r);
          ctx.lineTo(-r * 0.3, r * 0.3);
          ctx.lineTo(-r, 0);
          ctx.lineTo(-r * 0.3, -r * 0.3);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Dynamic Luminous Ambient Spotlight Glowing Orbs */}
      <motion.div style={{ x: mouseX, y: mouseY }} className="absolute inset-0 pointer-events-none">
        {/* Warm Coffee Ambient Glow Top */}
        <div className="absolute -top-32 left-1/2 h-[650px] w-[850px] -translate-x-1/2 rounded-full bg-coffee/20 blur-[150px]" />

        {/* Blush Pink Glow Upper Right */}
        <div className="absolute top-[20%] -right-32 h-[550px] w-[550px] rounded-full bg-blush/16 blur-[140px]" />

        {/* Champagne Gold Glow Middle Left */}
        <div className="absolute top-[45%] -left-36 h-[600px] w-[600px] rounded-full bg-champagne/16 blur-[150px]" />

        {/* Deep Warm Blush Glow Lower Right */}
        <div className="absolute top-[70%] -right-28 h-[500px] w-[500px] rounded-full bg-blush/14 blur-[130px]" />

        {/* Golden Sunset Glow Bottom Left */}
        <div className="absolute top-[90%] -left-20 h-[500px] w-[500px] rounded-full bg-champagne/18 blur-[130px]" />
      </motion.div>

      {/* 2. Floating Star Dust & Swaying Petals Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-80 pointer-events-none" />

      {/* 3. Aesthetic Side Margin Doodles (Kept cleanly in margins so text is 100% readable) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* Coffee Cup ☕ (Top Left Margin) */}
        <motion.div
          className="absolute top-[10%] left-[3%]"
          style={{ x: mouseX, y: mouseY }}
          animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-12 h-12 text-champagne/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M25 40 H75 V60 C75 75, 65 85, 50 85 C35 85, 25 75, 25 60 Z" />
            <path d="M75 48 C85 48, 88 56, 85 64 C82 70, 75 70, 75 70" />
            <path d="M40 28 C37 20, 44 16, 40 10" opacity="0.6" />
            <path d="M60 28 C57 20, 64 16, 60 10" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Tulip 🌷 (Top Right Margin) */}
        <motion.div
          className="absolute top-[7%] right-[4%]"
          style={{ x: mouseX, y: mouseY }}
          animate={{ y: [0, 10, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-14 h-14 text-blush/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M32 45 C30 25, 45 15, 50 32 C55 15, 70 25, 68 45 C65 65, 35 65, 32 45 Z" fill="currentColor" fillOpacity="0.08" />
            <path d="M50 63 V90" />
            <path d="M50 78 C35 75, 30 60, 30 60" />
            <path d="M50 82 C65 80, 70 68, 70 68" />
          </svg>
        </motion.div>

        {/* Paper Plane ✈️ (Mid Left Margin) */}
        <motion.div
          className="absolute top-[28%] left-[2%]"
          style={{ x: mouseX, y: mouseY }}
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-12 h-12 text-champagne/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M15 50 L85 15 L55 85 L42 58 Z" />
            <path d="M85 15 L42 58" />
          </svg>
        </motion.div>

        {/* Movie Ticket 🎬 (Mid Right Margin) */}
        <motion.div
          className="absolute top-[36%] right-[3%]"
          style={{ x: mouseX, y: mouseY }}
          animate={{ y: [0, -10, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-12 h-12 text-blush/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <rect x="20" y="30" width="60" height="40" rx="4" />
            <circle cx="20" cy="50" r="5" fill="#211814" />
            <circle cx="80" cy="50" r="5" fill="#211814" />
          </svg>
        </motion.div>

        {/* Hydration Water Drop 💧 (Lower Right Margin) */}
        <motion.div
          className="absolute top-[80%] right-[4%]"
          style={{ x: mouseX, y: mouseY }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-10 h-10 text-champagne/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M50 20 C50 20, 25 55, 25 70 C25 83, 36 90, 50 90 C64 90, 75 83, 75 70 C75 55, 50 20, 50 20 Z" fill="currentColor" fillOpacity="0.08" />
          </svg>
        </motion.div>
      </div>

      {/* 4. Side Catchphrase Badges */}
      {SIDE_QUOTES.map((q, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${q.style} pointer-events-none hidden xl:block`}
          style={{ x: mouseX, y: mouseY }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [0, idx % 2 === 0 ? -8 : 8, 0],
            rotate: q.rotate
          }}
          transition={{
            opacity: { duration: 5 + idx, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 7 + idx * 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="rounded-full border border-champagne/20 bg-espresso/80 px-3.5 py-1 font-hand text-sm text-champagne/70 shadow-sm backdrop-blur-xs select-none">
            {q.text}
          </span>
        </motion.div>
      ))}

      {/* 5. Cursor Fairy Dust Trail */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <AnimatePresence>
          {sparkles.map((sp) => (
            <motion.span
              key={sp.id}
              initial={{ opacity: 0.8, scale: 0.4 }}
              animate={{ opacity: 0, scale: 1.5, y: -12 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: sp.x,
                top: sp.y,
                width: sp.size,
                height: sp.size,
                backgroundColor: sp.color,
                boxShadow: `0 0 6px ${sp.color}`
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
