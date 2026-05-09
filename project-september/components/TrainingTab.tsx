"use client";

import { useState } from "react";
import { TRAINING_PHASE_A, TRAINING_PHASE_B, RUNNING_PROGRESSION } from "@/lib/data";

export default function TrainingTab() {
  const [phase, setPhase] = useState<"A" | "B">("A");
  const data = phase === "A" ? TRAINING_PHASE_A : TRAINING_PHASE_B;

  return (
    <div className="space-y-10 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Périodisation</p>
        <h2 className="serif text-3xl text-bone-50 font-light italic">Split hebdomadaire</h2>
        <p className="text-sm text-bone-300 font-light mt-2 max-w-xl leading-relaxed">
          Force × 3 (préserve la masse maigre dans le déficit) · Zone 2 × 3 (mitochondries, GLUT-4) ·
          HIIT × 1 (HOMA-IR ↓ rapide) · Pas ≥ 10,000/jour.
        </p>
      </section>

      <div className="flex border border-ink-700/60 w-fit">
        <button
          onClick={() => setPhase("A")}
          className={`px-5 py-3 transition-colors ${phase === "A" ? "bg-gold text-ink-950" : "text-bone-100 hover:bg-ink-800"}`}
        >
          <p className="mono text-[10px] uppercase tracking-[0.3em]">Phase A</p>
          <p className="text-sm font-light italic serif">Basic Fit · jusqu'au 16 juillet</p>
        </button>
        <button
          onClick={() => setPhase("B")}
          className={`px-5 py-3 transition-colors border-l border-ink-700/60 ${phase === "B" ? "bg-gold text-ink-950" : "text-bone-100 hover:bg-ink-800"}`}
        >
          <p className="mono text-[10px] uppercase tracking-[0.3em]">Phase B</p>
          <p className="text-sm font-light italic serif">Maison + vélo + piscine</p>
        </button>
      </div>

      <section>
        <div className="space-y-px">
          {data.map((d) => {
            const isToday = isDayToday(d.day);
            return (
              <div
                key={d.day}
                className={`border p-5 transition-colors ${
                  isToday ? "border-gold bg-gold/5" : "border-ink-700/60 bg-ink-900/40"
                }`}
              >
                <div className="grid md:grid-cols-[80px_1fr_auto] gap-4 items-baseline">
                  <p className="serif text-3xl italic text-gold font-light">{d.day}</p>
                  <div>
                    <p className="serif text-xl text-bone-50 italic">{d.session}</p>
                    <p className="text-sm text-bone-300 font-light mt-1 leading-relaxed">{d.detail}</p>
                  </div>
                  <div className="text-right md:text-right">
                    {"duration" in d && <p className="mono text-xs text-bone-300">{(d as any).duration}</p>}
                    {"rpe" in d && <p className="mono text-[10px] text-bone-400 mt-1">{(d as any).rpe}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · Progression course (mardi & vendredi)</p>
        <p className="text-xs text-bone-400 italic font-light mb-4 max-w-2xl leading-relaxed">
          Couch-to-5K conservatif. Démarrage en intervalles run/marche pour bâtir base aérobie + résilience tendineuse
          sans blessure. Cortisol : la course Z2 conversationnelle ne provoque PAS de pic chronique de cortisol —
          le cortisol aigu monte puis descend sous le baseline 1–2h post-séance. Le surentraînement vient des séances
          longues à haute intensité sans récupération. Ici, 25–35 min facile = optimum métabolique.
        </p>
        <div className="space-y-px">
          {RUNNING_PROGRESSION.map((r) => (
            <div key={r.week} className="border border-ink-700/60 bg-ink-900/40 p-5 grid md:grid-cols-[100px_1fr_120px] gap-4 items-baseline">
              <p className="serif text-2xl italic text-gold font-light">{r.week}</p>
              <div>
                <p className="text-sm text-bone-100 font-light leading-relaxed">{r.session}</p>
                <p className="text-xs text-bone-400 italic font-light mt-1">{r.goal}</p>
              </div>
              <p className="mono text-xs text-bone-300 text-right">{r.total}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-gold/30 bg-gold/5 p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Règles course Z2</p>
        <ul className="space-y-2 text-sm text-bone-100 font-light">
          <li>· <strong className="text-bone-50">Test conversation</strong> : tu dois pouvoir prononcer 4–5 mots par respiration. Si tu cherches ton souffle → marcher.</li>
          <li>· <strong className="text-bone-50">FC cible</strong> : 65–75% FC max (≈ 130–150 bpm). Apple Watch live HR.</li>
          <li>· <strong className="text-bone-50">Surface</strong> : herbe, terre, piste si possible. Bitume OK avec bonnes chaussures.</li>
          <li>· <strong className="text-bone-50">Chaussures</strong> : minimum 30 €/séance d'amorti. Asics Cumulus, Nike Pegasus, ou similaire. Pas de minimalistes pour démarrer.</li>
          <li>· <strong className="text-bone-50">Si fatigue</strong> : courir le matin à jeun = AUTORISÉ uniquement après semaine 4 et seulement avec petit-déjeuner protéiné dans les 30 min post-séance.</li>
          <li>· <strong className="text-bone-50">Règle d'or</strong> : 0 progression de durée si une séance a été pénible. Refaire la même semaine.</li>
        </ul>
      </section>


        <section className="border border-ink-700/60 p-5 bg-ink-900/40">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Matériel à acquérir · ~55 €</p>
          <ul className="space-y-2 text-sm text-bone-100 font-light">
            <li>· Set bandes de résistance + ancrage de porte (Decathlon Domyos, ~25 €)</li>
            <li>· Paire d'haltères ajustables OU 2 kettlebells fixes (10 + 16 kg, ~30 € Leboncoin)</li>
            <li>· Barre de traction de porte (~20 €) — même sans tractions strictes, dead hangs essentiels</li>
          </ul>
          <p className="text-xs text-bone-400 italic font-light mt-3">
            Objectif progression : 1 traction stricte avant Sept 1. Bandes lourde → moyenne → légère → poids du corps.
          </p>
        </section>
      )}
    </div>
  );
}

function isDayToday(dayCode: string): boolean {
  const map: Record<number, string> = { 0: "Sun", 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat" };
  return map[new Date().getDay()] === dayCode;
}
