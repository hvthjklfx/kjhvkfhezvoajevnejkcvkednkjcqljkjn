"use client";

import { FINANCE } from "@/lib/data";

export default function FinanceTab() {
  const totalFixed = FINANCE.fixed.reduce((s, f) => s + f.amount, 0);

  return (
    <div className="space-y-10 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Allocation mensuelle</p>
        <div className="grid md:grid-cols-2 gap-px bg-ink-700/40">
          <div className="bg-ink-900/60 p-5">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400">Aujourd'hui</p>
            <p className="serif text-4xl font-light text-bone-50 mt-1 italic">{FINANCE.income.now} €</p>
            <p className="mono text-xs text-bone-400 mt-1">épargne : {FINANCE.savings.now} € · 28%</p>
          </div>
          <div className="bg-ink-900/60 p-5 border-l border-gold/30">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold">Après augmentation</p>
            <p className="serif text-4xl font-light text-gold mt-1 italic">{FINANCE.income.after} €</p>
            <p className="mono text-xs text-bone-300 mt-1">épargne : {FINANCE.savings.after} € · 38%</p>
          </div>
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · Postes fixes</p>
        <div className="border border-ink-700/60 bg-ink-900/40 divide-y divide-ink-700/40">
          {FINANCE.fixed.map((f) => (
            <div key={f.label} className="flex justify-between items-center px-5 py-3">
              <span className="text-sm text-bone-100 font-light">{f.label}</span>
              <span className="mono text-sm text-bone-300">{f.amount} €</span>
            </div>
          ))}
          <div className="flex justify-between items-center px-5 py-3 bg-ink-900/80">
            <span className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400">Total</span>
            <span className="mono text-sm text-bone-100">{totalFixed} €</span>
          </div>
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">03 · Plan d'investissement</p>
        <div className="space-y-px">
          {FINANCE.plan.map((p) => (
            <div key={p.phase} className="border border-ink-700/60 bg-ink-900/40 p-5 grid grid-cols-[80px_1fr] gap-4 items-baseline">
              <p className="serif text-2xl italic text-gold font-light">{p.phase}</p>
              <p className="text-sm text-bone-100 font-light leading-relaxed">{p.action}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">04 · ROI compétences</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-ink-700/60 bg-ink-900/40 p-5">
            <p className="serif text-xl italic text-bone-50">Russe</p>
            <p className="text-xs text-bone-400 italic font-light mt-1">B1 dans 12 mois</p>
            <ul className="mt-3 space-y-2 text-sm text-bone-100 font-light">
              <li>· Anki 25 min/jour</li>
              <li>· Podcast (Slow Russian, Russian with Max) 20 min trajet</li>
              <li>· 1 conversation italki par semaine (€8) après S8</li>
            </ul>
          </div>
          <div className="border border-ink-700/60 bg-ink-900/40 p-5">
            <p className="serif text-xl italic text-bone-50">Architecture</p>
            <p className="text-xs text-bone-400 italic font-light mt-1">1 cert. industrie en 16 sem.</p>
            <ul className="mt-3 space-y-2 text-sm text-bone-100 font-light">
              <li>· Revit/Archicad BIM cert</li>
              <li>· €150–300, co-fundable OPCO/Pôle emploi</li>
              <li>· Architecture data + russe : multiplicateur EU consultancies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border border-gold/30 bg-gold/5 p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Revue dominicale · 17h00–17h30</p>
        <ul className="space-y-2 text-sm text-bone-100 font-light">
          <li>· Mise à jour spreadsheet : revenus, fixes, variables, taux d'épargne</li>
          <li>· Revue 5 métriques check-in (agrégat semaine)</li>
          <li>· 3 objectifs spécifiques pour la semaine à venir</li>
          <li>· 1 apprentissage investissement (Avenue des Investisseurs · Plus Riche)</li>
        </ul>
      </section>
    </div>
  );
}
