"use client";

import { SKINCARE } from "@/lib/data";

export default function SkincareTab() {
  return (
    <div className="space-y-10 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Routine</p>
        <h2 className="serif text-3xl text-bone-50 font-light italic">Face · body · scalp</h2>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Block label="Morning" steps={SKINCARE.am} accent="bone" />
        <Block label="Evening" steps={SKINCARE.pm} accent="ink" />
      </div>

      <section className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Body</p>
        <p className="text-sm text-bone-100 font-light leading-relaxed">{SKINCARE.body}</p>
      </section>

      <section className="border border-gold/40 bg-gold/15 p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Scalp · Minoxidil</p>
        <p className="serif text-xl italic text-bone-50 mb-3">Application protocol — scalp only</p>
        <ul className="space-y-2 text-sm text-bone-100 font-light">
          {SKINCARE.hair.map((h, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-gold mono text-xs">·</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-bone-400 italic font-light mt-4 leading-relaxed">
          Correct application = ~1.4% systemic absorption. No risk at standard dosing.
          Visible effects (reduced shedding, fine regrowth) appear after 3–4 months of consistent use.
        </p>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · The why</p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Vitamin C (AM)" body="L-ascorbic acid 10–15% photoprotects + boosts collagen synthesis. Apply on slightly damp skin, before SPF." />
          <Card title="SPF 50 with Thiamidol (AM)" body="Thiamidol is one of the few clinically proven non-prescription pigment inhibitors. Daily SPF is non-negotiable for hyperpigmentation prevention." />
          <Card title="Retinal 0.2% (PM, 3×/wk)" body="The Ordinary's retinal is 11× more potent than retinol with less irritation. Builds collagen, smooths texture, accelerates cell turnover. Pea-sized, face only." />
          <Card title="Azelaic acid 10–20% (PM, 3×/wk)" body="Anti-inflammatory + anti-pigment + antibacterial. Alternates with retinal so you don't over-irritate. The Ordinary 10% or Paula's Choice 10%." />
          <Card title="Cicaplast B5 (rescue)" body="La Roche-Posay's repair balm. Use when actives have over-irritated, after sun exposure, or when barrier feels compromised. Layer over moisturizer." />
        </div>
      </section>
    </div>
  );
}

function Block({ label, steps, accent }: { label: string; steps: string[]; accent: "bone" | "ink" }) {
  return (
    <div className={`border ${accent === "bone" ? "border-bone-400/30 bg-bone-50/[0.02]" : "border-ink-700/70 bg-ink-900/70 soft-shadow"} p-5`}>
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

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5">
      <p className="serif text-lg italic text-bone-50">{title}</p>
      <p className="text-xs text-bone-300 font-light mt-2 leading-relaxed">{body}</p>
    </div>
  );
}
