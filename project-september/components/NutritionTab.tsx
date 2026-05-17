"use client";

import { MACROS } from "@/lib/data";

export default function NutritionTab() {
  return (
    <div className="space-y-12 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Energy math</p>
        <h2 className="serif text-3xl font-light italic text-bone-50">1,400 kcal · 160 P · 65 F · 110 C</h2>
        <p className="text-sm text-bone-300 font-light mt-2 max-w-xl leading-relaxed">
          Mifflin-St Jeor BMR 1,532 kcal · estimated TDEE 2,375 kcal (moderately active) ·
          ~1,000 kcal/day deficit for 0.89 kg/week. Recalibrated every 4 weeks.
        </p>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · Macro progression</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-ink-700">
                <Th>Period</Th>
                <Th>Weight</Th>
                <Th>kcal</Th>
                <Th>P (g)</Th>
                <Th>F (g)</Th>
                <Th>C (g)</Th>
              </tr>
            </thead>
            <tbody>
              {MACROS.map((m) => (
                <tr key={m.range} className="border-b border-ink-700/50 hover:bg-ink-900/70 soft-shadow transition-colors">
                  <Td className="text-gold">{m.range}</Td>
                  <Td>{m.weight}</Td>
                  <Td className="mono">{m.kcal}</Td>
                  <Td className="mono">{m.p}</Td>
                  <Td className="mono">{m.f}</Td>
                  <Td className="mono">{m.c}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">03 · Glucose-blunting tactics</p>
        <p className="text-xs text-bone-400 italic font-light mb-4">Every meal. Every day. Non-negotiable.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { n: "i", t: "Food order", d: "Protein + vegetables first, carbs last. ↓28% glucose AUC, ↓44% insulin AUC (Shukla 2015)." },
            { n: "ii", t: "Vinegar pre-load", d: "1 tbsp apple cider vinegar in 200 mL water, 10 min before lunch and dinner. ↓60% glucose AUC (2017 meta-analysis)." },
            { n: "iii", t: "Slow carbs", d: "Lentils, chickpeas, white beans, oats, buckwheat, sweet potato, quinoa, berries. No refined starch." },
            { n: "iv", t: "Three meals only", d: "No snacks. Larger portions at each meal keep you satisfied. Blood glucose flatter with three protein-anchored meals than with grazing." },
            { n: "v", t: "Zero liquid calories", d: "Black coffee, tea, water, electrolytes only. Zero alcohol for 16 weeks." },
            { n: "vi", t: "Caffeine off at noon", d: "Half-life 5–6h. For 10 PM bedtime, last cup must be by 12:00 PM." },
          ].map((p) => (
            <div key={p.n} className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5">
              <p className="mono text-[10px] tracking-[0.3em] text-gold">{p.n}</p>
              <p className="serif text-xl italic text-bone-50 mt-1">{p.t}</p>
              <p className="text-xs text-bone-300 font-light mt-2 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-gold/40 bg-gold/15 p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Three meals — why this works</p>
        <p className="text-sm text-bone-100 font-light leading-relaxed">
          Snacking causes more spikes through the day. Three larger meals with high protein give you 4–5 hours of satiety per meal,
          fewer glucose excursions, and zero decisions during the day. If you find yourself hungry before lunch or dinner,
          the answer is bigger breakfast or bigger lunch — not adding a snack window.
        </p>
        <p className="text-xs text-bone-400 italic font-light mt-3">
          See the <span className="text-gold">Meal Plan</span> tab for 7 ready-built days.
        </p>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">04 · Weekly shop · ~€55 · bike-friendly</p>
        <p className="text-xs text-bone-400 italic font-light mb-4">Mostly cans and pots — heavy but compact. Split into two bike trips if needed.</p>
        <div className="grid md:grid-cols-3 gap-px bg-ink-700/40 text-sm">
          <ShopList title="Cans — protein" items={["Tuna in water ×4", "Mackerel fillets ×3", "(stock spares — they keep)"]} />
          <ShopList title="Cans — carbs" items={["Pre-cooked lentils ×3", "Chickpeas ×3", "White beans ×2"]} />
          <ShopList title="Pots & fridge" items={["Skyr large pots ×4", "Cottage cheese pots ×2", "Eggs ×12", "Pre-cooked chicken or 1 rotisserie", "Microwave rice pouches ×2"]} />
          <ShopList title="Fresh — no prep" items={["Pre-washed salad bags ×3", "Cherry tomatoes", "Cucumber ×2", "Avocado ×3", "Apples ×3", "Bananas ×3", "Frozen berries (Picard)"]} />
          <ShopList title="Pantry (lasts weeks)" items={["Olive oil", "Apple cider vinegar", "Dijon mustard", "Soy sauce", "Rolled oats 1 kg", "Mixed nuts 200g", "Salt · pepper · cinnamon", "Coffee · tea"]} />
        </div>
      </section>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left py-3 px-4 mono text-[10px] uppercase tracking-[0.3em] text-bone-400 font-normal">{children}</th>;
}
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`py-3 px-4 text-sm text-bone-100 font-light ${className}`}>{children}</td>;
}
function ShopList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-ink-800/80 p-4">
      <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{title}</p>
      <ul className="space-y-1">
        {items.map((i) => (
          <li key={i} className="text-bone-100 font-light flex items-baseline gap-2">
            <span className="text-bone-400 text-xs">·</span> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
