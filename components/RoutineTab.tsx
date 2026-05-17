"use client";

import { useState } from "react";
import { SCHEDULE_MAY, SCHEDULE_JUNE } from "@/lib/data";

export default function RoutineTab() {
  // Auto-detect: June onward shows the new schedule by default
  const month = new Date().getMonth(); // 0-11
  const [variant, setVariant] = useState<"may" | "june">(month >= 5 ? "june" : "may");
  const data = variant === "may" ? SCHEDULE_MAY : SCHEDULE_JUNE;

  return (
    <div className="space-y-10 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Daily orchestration</p>
        <h2 className="serif text-3xl text-bone-50 font-light italic">
          {variant === "may" ? "8:15 AM → 10:00 PM" : "6:30 AM → 9:30 PM"}
        </h2>
      </section>

      <div className="flex border border-ink-700/70 w-fit">
        <button
          onClick={() => setVariant("may")}
          className={`px-5 py-3 transition-colors ${variant === "may" ? "bg-gold text-white" : "text-bone-100 hover:bg-ink-800/90"}`}
        >
          <p className="mono text-[10px] uppercase tracking-[0.3em]">May</p>
          <p className="text-sm font-light italic serif">work 9–4:45 PM</p>
        </button>
        <button
          onClick={() => setVariant("june")}
          className={`px-5 py-3 transition-colors border-l border-ink-700/70 ${variant === "june" ? "bg-gold text-white" : "text-bone-100 hover:bg-ink-800/90"}`}
        >
          <p className="mono text-[10px] uppercase tracking-[0.3em]">June+</p>
          <p className="text-sm font-light italic serif">work 7 AM–4 PM</p>
        </button>
      </div>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-0 md:left-2 top-2 bottom-2 w-px bg-ink-700/60" />
        {data.map((s, i) => (
          <div
            key={i}
            className="relative pb-5 last:pb-0"
          >
            <div
              className={`absolute -left-8 md:-left-[26px] top-2 w-2 h-2 ${
                s.flag === "key" ? "bg-gold" : "bg-bone-400"
              }`}
            />
            <div className="grid grid-cols-[80px_1fr] gap-4 md:gap-6 items-baseline">
              <p className="mono text-sm text-gold">{s.time}</p>
              <p className="text-sm text-bone-100 font-light leading-relaxed">
                {s.block}
                {s.flag === "key" && <span className="ml-2 mono text-[9px] uppercase tracking-[0.3em] text-gold">non-neg</span>}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="border border-gold/40 bg-gold/15 p-6">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Nervous system · cortisol</p>
        <ul className="space-y-3 text-sm text-bone-100 font-light">
          <li className="flex gap-3"><span className="text-gold mono">i</span><span>Morning sunlight 10 min within 30 min of waking — daily.</span></li>
          <li className="flex gap-3"><span className="text-gold mono">ii</span><span>Caffeine off at 12:00 PM.</span></li>
          <li className="flex gap-3"><span className="text-gold mono">iii</span><span>Box breathing 4-4-4-4 or 4-7-8, 2× per day (post-lunch + pre-bed).</span></li>
          <li className="flex gap-3"><span className="text-gold mono">iv</span><span>Vagus nerve stimulation: cold water face splash 10 s, humming 30 s in shower, gargling 30 s.</span></li>
          <li className="flex gap-3"><span className="text-gold mono">v</span><span>Phone NOT in the bedroom. Charger in kitchen. Buy a €10 alarm clock.</span></li>
          <li className="flex gap-3"><span className="text-gold mono">vi</span><span>Last food ≥ 3h before bed (last bite by 7:30 PM → bed by 10 PM).</span></li>
          <li className="flex gap-3"><span className="text-gold mono">vii</span><span>Sleep/wake within a 30-min window · 7 days/week · weekends included.</span></li>
        </ul>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · Posture & poise · 5–10 min/evening</p>
        <div className="space-y-2">
          {[
            "Wall stand 2 min: heels–glutes–shoulder blades–back of head against wall, neutral pelvis.",
            "Chin tucks 2 × 10 reps (held 2 s) — corrects forward-head posture from screen work.",
            "Scapular retractions 2 × 12 reps (band or bodyweight T-pull).",
            "Single-leg balance during teeth brushing (1 min/leg, eyes open → eyes closed progression).",
            "Weekly: 15 min Iyengar yoga or Alexander Technique video.",
          ].map((p, i) => (
            <div key={i} className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-4 text-sm text-bone-100 font-light">
              {p}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
