"use client";

import { useState } from "react";

import Image from "next/image";

const VIDEO_ID = "843BeweI1qQ";

interface VideoPlayerProps {
  label: string;
}

export function VideoPlayer({ label }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title="SixGreen Presentation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-2xl shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-green-500/50"
      aria-label={label}
    >
      <Image
        src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
        alt="Video thumbnail"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all group-hover:bg-black/30">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform group-hover:scale-110 md:h-20 md:w-20">
          <svg
            viewBox="0 0 24 24"
            className="ml-1 h-7 w-7 text-green-900 md:h-8 md:w-8"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
