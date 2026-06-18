import type { BackgroundParticle, FloatDirection, FloatSpeed, ParticleIcon } from "./personal";

const COLORS = [
  { colorClass: "text-white", glowColor: "rgba(255,255,255,0.6)" },
  { colorClass: "text-brand-lavender", glowColor: "rgba(216,180,254,0.7)" },
  { colorClass: "text-brand-purple", glowColor: "rgba(181,95,230,0.7)" },
  { colorClass: "text-teal-300", glowColor: "rgba(45,212,191,0.6)" },
];

/** Top-left corner kept clear so shapes don't pile up near the logo area. */
const CORNER_EXCLUDE = { leftMax: 16, topMax: 14 };

function seededValue(index: number, salt: number): number {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

/** Stable string formatting — avoids SSR/client float precision hydration mismatches. */
export function formatPercent(value: number): string {
  return `${(Math.round(value * 10_000) / 10_000).toFixed(4)}%`;
}

export function formatDelaySeconds(value: number): string {
  return `${(Math.round(value * 100_000) / 100_000).toFixed(5)}s`;
}

function clampPercent(value: number, min = 3, max = 97): number {
  return Math.round(Math.min(max, Math.max(min, value)) * 10_000) / 10_000;
}

function isInExcludedCorner(left: number, top: number): boolean {
  return left < CORNER_EXCLUDE.leftMax && top < CORNER_EXCLUDE.topMax;
}

function pickIcon(index: number, left: number, top: number): ParticleIcon {
  if (isInExcludedCorner(left, top)) {
    return seededValue(index, 9) > 0.5 ? "sparkle" : "plus";
  }

  const roll = seededValue(index, 4);
  if (roll < 0.22) return "sparkle";
  if (roll < 0.38) return "plus";
  if (roll < 0.52) return "circle-dashed";
  if (roll < 0.62) return "star";
  if (roll < 0.72) return "dot";
  if (roll < 0.84) return "square-dashed";
  return "triangle";
}

function pickSize(index: number): string {
  const roll = seededValue(index, 3);
  if (roll > 0.82) return "w-4 h-4";
  if (roll > 0.55) return "w-3 h-3";
  if (roll > 0.28) return "w-2.5 h-2.5";
  return "w-2 h-2";
}

/**
 * Even grid placement with jitter — spreads shapes across the full viewport
 * without clustering in any corner (especially top-left).
 */
export function generateSiteParticles(total: number): BackgroundParticle[] {
  const cols = 8;
  const rows = Math.ceil(total / cols);
  const particles: BackgroundParticle[] = [];
  let index = 0;

  for (let row = 0; row < rows && particles.length < total; row++) {
    for (let col = 0; col < cols && particles.length < total; col++) {
      const cellW = 100 / cols;
      const cellH = 100 / rows;
      const jitterX = (seededValue(index, 1) - 0.5) * cellW * 0.55;
      const jitterY = (seededValue(index, 2) - 0.5) * cellH * 0.55;

      let left = col * cellW + cellW / 2 + jitterX;
      let top = row * cellH + cellH / 2 + jitterY;

      left = clampPercent(left);
      top = clampPercent(top);

      if (isInExcludedCorner(left, top)) {
        left = clampPercent(CORNER_EXCLUDE.leftMax + seededValue(index, 10) * 12);
        top = clampPercent(CORNER_EXCLUDE.topMax + seededValue(index, 11) * 10);
      }

      const icon = pickIcon(index, left, top);
      const palette = COLORS[Math.floor(seededValue(index, 5) * COLORS.length)] ?? COLORS[0];
      const floatDirection: FloatDirection = index % 2 === 0 ? "up" : "down";
      const floatSpeed: FloatSpeed = seededValue(index, 6) > 0.5 ? "medium" : "slow";

      particles.push({
        className: pickSize(index),
        colorClass: palette.colorClass,
        glowColor: palette.glowColor,
        icon,
        floatDirection,
        floatSpeed,
        twinkle: icon === "star" || icon === "dot",
        style: {
          left: formatPercent(left),
          top: formatPercent(top),
          animationDelay: formatDelaySeconds(seededValue(index, 7) * 8),
        },
      });

      index += 1;
    }
  }

  return particles;
}

export interface StarDot {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  direction: FloatDirection;
  speed: FloatSpeed;
  delay: number;
}

export function generateStarDots(count: number): StarDot[] {
  const cols = 10;
  const rows = Math.ceil(count / cols);
  const stars: StarDot[] = [];
  let id = 0;

  for (let row = 0; row < rows && stars.length < count; row++) {
    for (let col = 0; col < cols && stars.length < count; col++) {
      const cellW = 100 / cols;
      const cellH = 100 / rows;
      const jitterX = (seededValue(id, 1) - 0.5) * cellW * 0.7;
      const jitterY = (seededValue(id, 2) - 0.5) * cellH * 0.7;

      let left = col * cellW + cellW / 2 + jitterX;
      let top = row * cellH + cellH / 2 + jitterY;

      if (isInExcludedCorner(left, top)) {
        left = CORNER_EXCLUDE.leftMax + seededValue(id, 8) * 14;
        top = CORNER_EXCLUDE.topMax + seededValue(id, 9) * 12;
      }

      stars.push({
        id,
        left: clampPercent(left, 2, 98),
        top: clampPercent(top, 2, 98),
        size: seededValue(id, 3) > 0.6 ? 2 : 1.5,
        opacity: Math.round((0.2 + seededValue(id, 4) * 0.45) * 1000) / 1000,
        direction: id % 2 === 0 ? "up" : "down",
        speed: seededValue(id, 5) > 0.5 ? "medium" : "slow",
        delay: Math.round(seededValue(id, 6) * 8 * 100_000) / 100_000,
      });

      id += 1;
    }
  }

  return stars;
}
