"use client";

import { motion } from "framer-motion";
import Photo from "./Photo";
import type { PhotoAsset } from "@/lib/assets";

export default function PolaroidCard({
  photo,
  rotate = 0,
  delay = 0,
  size = "md"
}: {
  photo: PhotoAsset;
  rotate?: number;
  delay?: number;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "lg" ? "w-80 sm:w-[420px]" : size === "sm" ? "w-44 sm:w-56" : "w-64 sm:w-80";

  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.04 }}
      className={`polaroid ${sizeClass} shrink-0`}
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-espresso/20">
        <Photo photo={photo} imgClassName="h-full w-full object-cover" className="h-full w-full" />
      </div>
      {photo.caption && (
        <figcaption className="mt-3.5 whitespace-pre-line px-1 text-center font-hand text-xl sm:text-2xl leading-snug text-espresso">
          {photo.caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
