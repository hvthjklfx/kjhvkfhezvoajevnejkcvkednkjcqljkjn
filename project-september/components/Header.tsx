"use client";

import { PROTOCOL } from "@/lib/data";
import { daysFromStart, daysUntil } from "@/lib/storage";

export default function Header() {
  const elapsed = Math.max(0, daysFromStart(PROTOCOL.startDate));
  const remaining = Math.max(0, daysUntil(PROTOCOL.endDate));
  const total = elapsed + remaining;
  const pct = total > 0 ? Math.min(100, (elapsed / total) * 100) : 0;

  return (
    <header className="relative z-10 px-6 md:px-12 pt-10 pb-8 border-b border-ink-700/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400 mb-2 dot-pulse">
            <span className="text-gold">●</span> Protocole actif · jour {elapsed + 1}
          </p>
          <h1 className="serif text-5xl md:text-7xl font-light text-bone-50 leading-none tracking-tight">
            Project<br />
            <span className="italic text-gold">September</span>
          </h1>
          <p className="mt-3 text-sm text-bone-300 max-w-md font-light">
            16-week recomposition & metabolic blueprint —{" "}
            {PROTOCOL.startWeight} kg → {PROTOCOL.targetWeight} kg by {new Date(PROTOCOL.endDate).toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-right">
            <p className="mono text-[10px] uppercase tracking-[0.25em] text-bone-400">Restants</p>
            <p className="serif text-5xl text-bone-50 font-light">{remaining}<span className="text-bone-400 text-2xl">j</span></p>
          </div>

          <svg width="80" height="80" viewBox="0 0 80 80" className="rotate-[-90deg]">
            <circle cx="40" cy="40" r="34" fill="none" stroke="#3a2f24" strokeWidth="2" />
            <circle
              cx="40" cy="40" r="34" fill="none"
              stroke="#c9a96a" strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${(pct / 100) * 213.6} 213.6`}
              style={{ transition: "stroke-dasharray 1s ease" }}
            />
            <text x="40" y="44" textAnchor="middle" className="mono fill-bone-100" fontSize="14" transform="rotate(90 40 40)">
              {Math.round(pct)}%
            </text>
          </svg>
        </div>
      </div>
    </header>
  );
}
