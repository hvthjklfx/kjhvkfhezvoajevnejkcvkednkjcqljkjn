"use client";

import { useState } from "react";
import { useLocalStorage, todayKey, blankDaily, DailyEntry } from "@/lib/storage";

export default function TodayTab() {
  const today = todayKey();
  const [entries, setEntries] = useLocalStorage<Record<string, DailyEntry>>("ps_daily", {});
  const entry = entries[today] || blankDaily(today);

  const update = (patch: Partial<DailyEntry>) => {
    setEntries({ ...entries, [today]: { ...entry, ...patch } });
  };

  const score = [entry.caloriesHit, entry.proteinHit, entry.trainingDone, entry.stepsHit, entry.sleepHit].filter(Boolean).length;

  return (
    <div className="space-y-10 fade-up">
      <section>
        <div className="flex items-baseline justify-between mb-1">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400">Check-in du soir</p>
          <p className="mono text-xs text-bone-300">{score}/5</p>
        </div>
        <h2 className="serif text-3xl text-bone-50 font-light italic mb-1">
          {new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
        </h2>
        <p className="text-xs text-bone-400 font-light">2 minutes. Cinq lignes. Pas de négociation.</p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Check
          label="Calories"
          target="≤ 1,400 kcal"
          done={entry.caloriesHit}
          actual={entry.caloriesActual}
          onToggle={() => update({ caloriesHit: !entry.caloriesHit })}
          onActual={(v) => update({ caloriesActual: v })}
          unit="kcal"
        />
        <Check
          label="Protéines"
          target="≥ 160 g"
          done={entry.proteinHit}
          actual={entry.proteinActual}
          onToggle={() => update({ proteinHit: !entry.proteinHit })}
          onActual={(v) => update({ proteinActual: v })}
          unit="g"
        />
        <CheckTraining
          done={entry.trainingDone}
          note={entry.trainingNote}
          onToggle={() => update({ trainingDone: !entry.trainingDone })}
          onNote={(v) => update({ trainingNote: v })}
        />
        <Check
          label="Pas"
          target="≥ 7,000"
          done={entry.stepsHit}
          actual={entry.stepsActual}
          onToggle={() => update({ stepsHit: !entry.stepsHit })}
          onActual={(v) => update({ stepsActual: v })}
          unit="pas"
        />
        <Check
          label="Sommeil"
          target="≥ 7.5 h"
          done={entry.sleepHit}
          actual={entry.sleepActual}
          onToggle={() => update({ sleepHit: !entry.sleepHit })}
          onActual={(v) => update({ sleepActual: v })}
          unit="h"
          step={0.25}
        />
      </div>

      <section className="border border-ink-700/60 p-6 bg-ink-900/40">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400 mb-2">Une phrase</p>
        <p className="text-xs text-bone-400 font-light italic mb-3">Énergie · humeur · envies · observations</p>
        <textarea
          value={entry.reflection}
          onChange={(e) => update({ reflection: e.target.value })}
          rows={3}
          placeholder="Comment a été la journée ?"
          className="w-full bg-transparent border-b border-ink-700 focus:border-gold outline-none text-bone-100 font-light resize-none placeholder:text-bone-400/50 transition-colors"
        />
      </section>

      <section className="text-center pt-4">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400">Score de la journée</p>
        <p className="serif text-7xl font-light text-bone-50 mt-2">
          {score}<span className="text-bone-400 text-3xl">/5</span>
        </p>
        <p className="text-xs text-bone-400 font-light mt-2">
          {score === 5 && "Journée parfaite. C'est le standard."}
          {score === 4 && "Solide. Identifie ce qui a glissé."}
          {score === 3 && "Audit nécessaire."}
          {score < 3 && "Stop. Diagnose ce qui est cassé avant demain."}
        </p>
      </section>
    </div>
  );
}

function Check({
  label, target, done, actual, onToggle, onActual, unit, step = 1,
}: {
  label: string; target: string; done: boolean; actual: number | null;
  onToggle: () => void; onActual: (v: number | null) => void; unit: string; step?: number;
}) {
  return (
    <div className={`border p-5 transition-colors cursor-pointer ${done ? "border-gold/60 bg-gold/5" : "border-ink-700/60 bg-ink-900/40 hover:border-bone-400/40"}`}>
      <div className="flex items-start justify-between mb-3" onClick={onToggle}>
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400">{label}</p>
          <p className="serif text-2xl text-bone-50 font-light italic mt-1">{target}</p>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className={`w-6 h-6 border flex items-center justify-center transition-all ${
            done ? "border-gold bg-gold text-ink-950" : "border-bone-400/40 hover:border-bone-100"
          }`}
        >
          {done && <span className="text-xs">✓</span>}
        </button>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <input
          type="number"
          step={step}
          value={actual ?? ""}
          onChange={(e) => onActual(e.target.value === "" ? null : Number(e.target.value))}
          placeholder="—"
          className="bg-transparent border-b border-ink-700 focus:border-gold outline-none mono text-sm text-bone-100 w-24 placeholder:text-bone-400/40 transition-colors"
        />
        <span className="mono text-xs text-bone-400">{unit}</span>
      </div>
    </div>
  );
}

function CheckTraining({
  done, note, onToggle, onNote,
}: {
  done: boolean; note: string; onToggle: () => void; onNote: (v: string) => void;
}) {
  return (
    <div className={`border p-5 transition-colors ${done ? "border-gold/60 bg-gold/5" : "border-ink-700/60 bg-ink-900/40 hover:border-bone-400/40"}`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400">Entraînement</p>
          <p className="serif text-2xl text-bone-50 font-light italic mt-1">complété</p>
        </div>
        <button
          onClick={onToggle}
          className={`w-6 h-6 border flex items-center justify-center transition-all ${
            done ? "border-gold bg-gold text-ink-950" : "border-bone-400/40 hover:border-bone-100"
          }`}
        >
          {done && <span className="text-xs">✓</span>}
        </button>
      </div>
      <input
        type="text"
        value={note}
        onChange={(e) => onNote(e.target.value)}
        placeholder="ex. Lower body, 60min"
        className="w-full bg-transparent border-b border-ink-700 focus:border-gold outline-none text-sm text-bone-100 placeholder:text-bone-400/40 mt-4 transition-colors"
      />
    </div>
  );
}
