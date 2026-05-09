"use client";

import { SCHEDULE } from "@/lib/data";

export default function RoutineTab() {
  return (
    <div className="space-y-10 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Journée orchestrée</p>
        <h2 className="serif text-3xl text-bone-50 font-light italic">8h15 → 22h30</h2>
      </section>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-0 md:left-2 top-2 bottom-2 w-px bg-ink-700/60" />
        {SCHEDULE.map((s, i) => (
          <div
            key={i}
            className="relative pb-5 last:pb-0"
          >
            <div
              className={`absolute -left-8 md:-left-[26px] top-2 w-2 h-2 ${
                s.flag === "key" ? "bg-gold" : s.flag === "optional" ? "bg-bone-400/30" : "bg-bone-400"
              }`}
            />
            <div className="grid grid-cols-[60px_1fr] gap-4 md:gap-6 items-baseline">
              <p className="mono text-sm text-gold">{s.time}</p>
              <p className={`text-sm font-light leading-relaxed ${s.flag === "optional" ? "text-bone-400 italic" : "text-bone-100"}`}>
                {s.block}
                {s.flag === "key" && <span className="ml-2 mono text-[9px] uppercase tracking-[0.3em] text-gold">non-négo</span>}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="border border-gold/30 bg-gold/5 p-6">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Système nerveux · cortisol</p>
        <ul className="space-y-3 text-sm text-bone-100 font-light">
          <li className="flex gap-3"><span className="text-gold mono">i</span><span>Lumière du matin 10 min dans les 30 min après le réveil — quotidien.</span></li>
          <li className="flex gap-3"><span className="text-gold mono">ii</span><span>Caféine off à 12h00.</span></li>
          <li className="flex gap-3"><span className="text-gold mono">iii</span><span>Box-breathing 4-4-4-4 ou 4-7-8, 2× par jour (post-déjeuner + pré-coucher).</span></li>
          <li className="flex gap-3"><span className="text-gold mono">iv</span><span>Stimulation vagale : eau froide visage 10 s, fredonner 30 s sous la douche, gargariser 30 s.</span></li>
          <li className="flex gap-3"><span className="text-gold mono">v</span><span>Téléphone PAS dans la chambre. Chargeur dans la cuisine. Réveil €10.</span></li>
          <li className="flex gap-3"><span className="text-gold mono">vi</span><span>Dernier repas ≥ 3h avant le coucher (dernière bouchée 19h30 → coucher 22h30).</span></li>
          <li className="flex gap-3"><span className="text-gold mono">vii</span><span>Sommeil/réveil dans une fenêtre de 30 min · 7 jours/7 · weekend inclus.</span></li>
        </ul>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · Posture & élégance · 5–10 min/soir</p>
        <div className="space-y-2">
          {[
            "Wall stand 2 min : talons–fesses–omoplates–arrière du crâne contre le mur, bassin neutre.",
            "Chin tucks 2 × 10 reps (tenu 2 s) — corrige la forward-head posture du screen work.",
            "Rétractions scapulaires 2 × 12 (bande ou poids du corps T-pull).",
            "Équilibre unipodal pendant le brossage de dents (1 min/jambe, yeux ouverts → fermés).",
            "Hebdo : 15 min Iyengar yoga ou Alexander Technique.",
          ].map((p, i) => (
            <div key={i} className="border border-ink-700/60 bg-ink-900/40 p-4 text-sm text-bone-100 font-light">
              {p}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
