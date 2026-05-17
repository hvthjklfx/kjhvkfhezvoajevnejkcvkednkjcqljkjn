"use client";

import { FINANCE } from "@/lib/data";

export default function FinanceTab() {
  const totalFixed = FINANCE.fixed.reduce((s, f) => s + f.amount, 0);

  return (
    <div className="space-y-10 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Monthly allocation</p>
        <div className="grid md:grid-cols-2 gap-px bg-ink-700/40">
          <div className="bg-ink-800/80 p-5">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400">Currently</p>
            <p className="serif text-4xl font-light text-bone-50 mt-1 italic">{FINANCE.income.now} €</p>
            <p className="mono text-xs text-bone-400 mt-1">savings: {FINANCE.savings.now} € · 28%</p>
          </div>
          <div className="bg-ink-800/80 p-5 border-l border-gold/40">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold">After raise</p>
            <p className="serif text-4xl font-light text-gold mt-1 italic">{FINANCE.income.after} €</p>
            <p className="mono text-xs text-bone-300 mt-1">savings: {FINANCE.savings.after} € · 38%</p>
          </div>
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · Fixed costs</p>
        <div className="border border-ink-700/70 bg-ink-900/70 soft-shadow divide-y divide-ink-700/40">
          {FINANCE.fixed.map((f) => (
            <div key={f.label} className="flex justify-between items-center px-5 py-3">
              <span className="text-sm text-bone-100 font-light">{f.label}</span>
              <span className="mono text-sm text-bone-300">{f.amount} €</span>
            </div>
          ))}
          <div className="flex justify-between items-center px-5 py-3 bg-ink-800/80">
            <span className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400">Total</span>
            <span className="mono text-sm text-bone-100">{totalFixed} €</span>
          </div>
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">03 · Investment plan</p>
        <div className="space-y-px">
          {FINANCE.plan.map((p) => (
            <div key={p.phase} className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5 grid grid-cols-[80px_1fr] gap-4 items-baseline">
              <p className="serif text-2xl italic text-gold font-light">{p.phase}</p>
              <p className="text-sm text-bone-100 font-light leading-relaxed">{p.action}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">04 · Skill ROI</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5">
            <p className="serif text-xl italic text-bone-50">Russian</p>
            <p className="text-xs text-bone-400 italic font-light mt-1">B1 in 12 months</p>
            <ul className="mt-3 space-y-2 text-sm text-bone-100 font-light">
              <li>· Anki 25 min/day</li>
              <li>· Podcast (Slow Russian, Russian with Max) 20 min commute</li>
              <li>· 1 italki conversation per week (€8) after week 8</li>
            </ul>
          </div>
          <div className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5">
            <p className="serif text-xl italic text-bone-50">Architecture</p>
            <p className="text-xs text-bone-400 italic font-light mt-1">1 industry cert in 16 weeks</p>
            <ul className="mt-3 space-y-2 text-sm text-bone-100 font-light">
              <li>· Revit/Archicad BIM cert</li>
              <li>· €150–300, co-fundable via OPCO/Pôle emploi</li>
              <li>· Architecture data + Russian = EU consultancy salary multiplier</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border border-gold/40 bg-gold/15 p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Sunday review · 5:00–5:30 PM</p>
        <ul className="space-y-2 text-sm text-bone-100 font-light">
          <li>· Update spreadsheet: income, fixed, variable, savings rate</li>
          <li>· Review 4 metrics from check-in (week aggregate)</li>
          <li>· 3 specific goals for the coming week</li>
          <li>· 1 investing learning (Avenue des Investisseurs · Plus Riche YouTube)</li>
        </ul>
      </section>
    </div>
  );
}
