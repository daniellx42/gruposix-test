"use client";

import { useEffect, useState, useTransition } from "react";

interface CountdownTimerProps {
  labels: { hours: string; minutes: string; seconds: string };
}

export function CountdownTimer({ labels }: CountdownTimerProps) {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const STORAGE_KEY = "vg_promo_deadline";
    let deadline: number;

    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      deadline = parseInt(stored, 10);
    } else {
      deadline = Date.now() + 2 * 60 * 60 * 1000;
      sessionStorage.setItem(STORAGE_KEY, deadline.toString());
    }

    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      setTime({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    startTransition(() => {
      setMounted(true);
    });
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-3">
        {[labels.hours, labels.minutes, labels.seconds].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <span className="rounded-lg bg-green-900 px-3 py-2 font-mono text-2xl font-bold text-white tabular-nums md:px-4 md:text-3xl">
              00
            </span>
            <span className="mt-1 text-xs text-neutral-500 uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const segments = [
    { value: time.h, label: labels.hours },
    { value: time.m, label: labels.minutes },
    { value: time.s, label: labels.seconds },
  ];

  return (
    <div
      className="flex items-center justify-center gap-3"
      aria-live="polite"
      aria-label="Countdown timer"
    >
      {segments.map((seg, i) => (
        <div key={seg.label} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <span className="rounded-lg bg-green-900 px-3 py-2 font-mono text-2xl font-bold text-white tabular-nums md:px-4 md:text-3xl">
              {String(seg.value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-xs text-neutral-500 uppercase">
              {seg.label}
            </span>
          </div>
          {i < segments.length - 1 && (
            <span className="mb-4 text-2xl font-bold text-green-900">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
