"use client";

import { SKINCARE } from "@/lib/data";

export default function SkincareTab() {
  return (
    <div className="space-y-10 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Routine corrigée</p>
        <h2 className="serif text-3xl text-bone-50 font-light italic">Visage · corps · cuir chevelu</h2>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Block label="Matin" steps={SKINCARE.am} accent="bone" />
        <Block label="Soir" steps={SKINCARE.pm} accent="ink" />
      </div>

      <section className="border border-ink-700/60 bg-ink-900/40 p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Corps</p>
        <p className="text-sm text-bone-100 font-light leading-relaxed">{SKINCARE.body}</p>
      </section>

      <section className="border border-gold/30 bg-gold/5 p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Cuir chevelu · Minoxidil</p>
        <p className="serif text-xl italic text-bone-50 mb-3">Application stricte · cuir chevelu sec uniquement</p>
        <ul className="space-y-2 text-sm text-bone-100 font-light">
          {SKINCARE.hair.map((h, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-gold mono text-xs">·</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-bone-400 italic font-light mt-4 leading-relaxed">
          L'application correcte = ~1.4% d'absorption systémique. Sans risque aux dosages standards.
          Effets visibles (réduction chute, repousse fine) à partir de 3–4 mois d'usage régulier.
        </p>
      </section>
    </div>
  );
}

function Block({ label, steps, accent }: { label: string; steps: string[]; accent: "bone" | "ink" }) {
  return (
    <div className={`border ${accent === "bone" ? "border-bone-400/30 bg-bone-50/[0.02]" : "border-ink-700/60 bg-ink-900/40"} p-5`}>
      <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">{label}</p>
      <ol className="space-y-3">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span className="mono text-gold text-xs pt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-bone-100 font-light">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
