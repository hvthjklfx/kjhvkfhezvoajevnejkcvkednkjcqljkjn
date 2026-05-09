"use client";

import { BLOODWORK, SUPPLEMENTS, TARGETS_NOV } from "@/lib/data";

export default function BiologyTab() {
  return (
    <div className="space-y-12 fade-up">
      <Section title="Bilan sanguin" subtitle="Marqueurs sous-optimaux par ordre de priorité clinique" numeral="01">
        <div className="space-y-px">
          {BLOODWORK.filter(b => b.severity !== "ok").map((b) => (
            <div key={b.priority} className="border border-ink-700/60 p-5 bg-ink-900/40">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="mono text-xs text-gold">#{b.priority}</span>
                <h3 className="serif text-xl text-bone-50 italic">{b.marker}</h3>
                <span className={`ml-auto mono text-[10px] uppercase tracking-[0.2em] ${
                  b.severity === "high" ? "text-rust" : b.severity === "med" ? "text-gold" : "text-bone-400"
                }`}>
                  {b.severity === "high" ? "critique" : b.severity === "med" ? "à corriger" : "surveiller"}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div>
                  <p className="mono text-[9px] uppercase tracking-[0.25em] text-bone-400">Valeur</p>
                  <p className="text-sm text-bone-100 mt-1 font-light">{b.value}</p>
                </div>
                <div>
                  <p className="mono text-[9px] uppercase tracking-[0.25em] text-bone-400">Cible</p>
                  <p className="text-sm text-gold mt-1 font-light">{b.target}</p>
                </div>
              </div>
              <p className="text-xs text-bone-300 mt-3 font-light leading-relaxed">{b.note}</p>
            </div>
          ))}
          <div className="border border-sage/30 p-5 bg-sage/5">
            <p className="serif text-lg text-bone-100 italic">Marqueurs optimaux</p>
            <p className="text-xs text-bone-300 font-light mt-1">TSH · eGFR · ALAT/ASAT · Vit D · B12 · Folates · CRP</p>
          </div>
        </div>
      </Section>

      <Section title="Cibles novembre" subtitle="Bilan de contrôle 6 mois — les chiffres qui comptent" numeral="02">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-ink-700/40">
          {TARGETS_NOV.map((t) => (
            <div key={t.metric} className="bg-ink-900/60 p-4">
              <p className="mono text-[9px] uppercase tracking-[0.25em] text-bone-400">{t.metric}</p>
              <p className="serif text-xl text-gold italic mt-1">{t.target}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Stack de suppléments" subtitle="Protocole révisé · introduire progressivement (S1→S3)" numeral="03">
        <div className="space-y-1">
          <SuppGroup label="Matin" items={SUPPLEMENTS.morning} />
          <SuppGroup label="Midi" items={SUPPLEMENTS.lunch} />
          <SuppGroup label="Après-midi (à jeun)" items={SUPPLEMENTS.afternoon} />
          <SuppGroup label="Soir" items={SUPPLEMENTS.dinner} />
          <SuppGroup label="Coucher" items={SUPPLEMENTS.bed} />
        </div>
      </Section>

      <Section title="À arrêter" subtitle="Effet immédiat" numeral="04">
        <div className="space-y-px">
          {SUPPLEMENTS.stop.map((s) => (
            <div key={s.name} className="border border-rust/30 bg-rust/5 p-4">
              <p className="text-bone-100 font-light line-through decoration-rust/60">{s.name}</p>
              <p className="text-xs text-bone-400 mt-1 font-light no-underline">{s.reason}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, subtitle, numeral, children }: { title: string; subtitle: string; numeral: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-baseline gap-4 mb-5">
        <span className="mono text-[10px] tracking-[0.3em] text-gold">{numeral}</span>
        <div>
          <h2 className="serif text-2xl text-bone-50 font-light">{title}</h2>
          <p className="text-xs text-bone-400 font-light italic">{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function SuppGroup({ label, items }: { label: string; items: { name: string; dose: string; note: string }[] }) {
  return (
    <div className="border border-ink-700/60 bg-ink-900/40 p-5">
      <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">{label}</p>
      <div className="space-y-3">
        {items.map((s) => (
          <div key={s.name} className="flex flex-col md:flex-row md:items-baseline md:gap-6 pb-2 border-b border-ink-700/40 last:border-0 last:pb-0">
            <div className="flex-1">
              <p className="text-bone-100 font-light">{s.name}</p>
              <p className="text-xs text-bone-400 font-light italic mt-1">{s.note}</p>
            </div>
            <p className="mono text-sm text-gold whitespace-nowrap mt-1 md:mt-0">{s.dose}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
