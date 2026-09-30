"use client";

import { useState } from "react";
import type { PhotoAsset } from "@/lib/assets";

export default function Photo({
  photo,
  className = "",
  imgClassName = ""
}: {
  photo: PhotoAsset;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-coffee/40 to-blush/30 text-cream/50 text-sm font-body ${className}`}
        role="img"
        aria-label={photo.alt}
      >
        <span className="px-3 text-center">add {photo.src.split("/").pop()} to /public{photo.src.split("/").slice(0, -1).join("/")}</span>
      </div>
    );
  }

  // Using a plain <img> intentionally: photos are provided post-hoc by the
  // user and may not exist at build time, which breaks next/image's
  // optimizer. A plain tag with graceful onError keeps the site resilient.
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={imgClassName || className}
    />
  );
}
