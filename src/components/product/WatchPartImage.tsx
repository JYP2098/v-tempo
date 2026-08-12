"use client";

import Image from "next/image";
import { watchParts, type WatchPartKey } from "@/lib/watch-parts";

type WatchPartImageProps = {
  part: WatchPartKey;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function WatchPartImage({
  part,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 80vw, 40vw",
}: WatchPartImageProps) {
  return (
    <Image
      src={watchParts[part]}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-contain ${className}`}
    />
  );
}
