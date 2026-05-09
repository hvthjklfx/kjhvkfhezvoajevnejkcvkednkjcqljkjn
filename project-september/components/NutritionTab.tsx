"use client";

import { MACROS } from "@/lib/data";

export default function NutritionTab() {
  return (
    <div className="space-y-12 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Calcul énergétique</p>
        <h2 className="serif text-3xl font-light italic text-bone-50">1,400 kcal · 160 P · 65 F · 110 C</h2>
        <p className="text-sm text-bone-300 font-light mt-2 max-w-xl leading-relaxed">
          BMR Mifflin-St Jeor 1,532 kcal · TDEE estimé 2,375 kcal (modérément actif) · déficit ~1,000 kcal/j pour 0,89 kg/sem.
          Ajustement toutes les 4 semaines.
        </p>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · Progression macros</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-ink-700">
                <Th>Période</Th>
                <Th>Poids</Th>
                <Th>kcal</Th>
                <Th>P (g)</Th>
                <Th>F (g)</Th>
                <Th>C (g)</Th>
              </tr>
            </thead>
            <tbody>
              {MACROS.map((m) => (
                <tr key={m.range} className="border-b border-ink-700/40 hover:bg-ink-900/40 transition-colors">
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
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">03 · Tactiques anti-glycémie</p>
        <p className="text-xs text-bone-400 italic font-light mb-4">À chaque repas. Tous les jours. Non-négociable.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { n: "i", t: "Ordre des aliments", d: "Protéines + légumes d'abord, glucides en dernier. ↓28% glucose AUC, ↓44% insuline AUC (Shukla 2015)." },
            { n: "ii", t: "Pré-charge vinaigre", d: "1 c.à.s vinaigre de cidre dans 200 mL eau, 10 min avant déjeuner et dîner. ↓60% glucose AUC (méta-analyse 2017)." },
            { n: "iii", t: "Marche post-repas", d: "10–15 min de marche dans les 15 min après chaque repas principal. Effet comparable à 45 min/jour." },
            { n: "iv", t: "Glucides lents", d: "Lentilles, pois chiches, haricots blancs, flocons d'avoine, sarrasin, patate douce, quinoa, baies." },
            { n: "v", t: "Zéro calorie liquide", d: "Café noir, thé, eau, électrolytes uniquement. Zéro alcool 16 semaines." },
            { n: "vi", t: "Caféine off à midi", d: "Demi-vie 5–6 h. Pour coucher 22:30, dernière tasse 12:00 max." },
          ].map((p) => (
            <div key={p.n} className="border border-ink-700/60 bg-ink-900/40 p-5">
              <p className="mono text-[10px] tracking-[0.3em] text-gold">{p.n}</p>
              <p className="serif text-xl italic text-bone-50 mt-1">{p.t}</p>
              <p className="text-xs text-bone-300 font-light mt-2 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">04 · Journée type</p>
        <div className="space-y-px">
          <Meal time="08:40" name="Petit-déjeuner" kcal="430" macros="35 P / 11 F / 47 C">
            200 g skyr 0% ou fromage blanc · 30 g flocons d'avoine · 100 g baies surgelées · 10 g chia · cannelle · café noir
          </Meal>
          <Meal time="12:30" name="Déjeuner" kcal="480" macros="50 P / 20 F / 30 C" pre="ACV pré-charge 12:20">
            150 g poulet grillé / 130 g saumon / 200 g tofu mariné · 250 g salade composée + vinaigrette (15 g huile d'olive + Dijon) · 100 g lentilles cuites ou 80 g basmati
          </Meal>
          <Meal time="16:45" name="Collation pré-training" kcal="280" macros="30 P / 12 F / 22 C">
            200 g skyr + 1 fruit + 20 g amandes · OU 30 g whey isolate + 1 banane
          </Meal>
          <Meal time="19:15" name="Dîner" kcal="380" macros="40 P / 14 F / 25 C" pre="ACV pré-charge 19:05">
            150 g cabillaud/colin ou 130 g steak haché 5% MG · 300 g légumes verts sautés (10 g huile d'olive) · 80 g pois chiches cuits
          </Meal>
        </div>
        <p className="mono text-xs text-bone-400 mt-4 text-right">Total ≈ 1,400 kcal · 155 P / 57 F / 124 C</p>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">05 · Liste de courses Niort · ~60 €/sem</p>
        <div className="grid md:grid-cols-3 gap-px bg-ink-700/40 text-sm">
          <ShopList title="Protéines" items={["Œufs ×12", "Poulet 1 kg", "Cabillaud surgelé 800 g", "Saumon 400 g", "Skyr Lidl 1 kg", "Tofu nature 400 g", "Whey isolate (Decathlon Aptonia)"]} />
          <ShopList title="Glucides" items={["Lentilles vertes 500 g", "Flocons d'avoine 1 kg", "Patate douce 1 kg", "Pain complet de seigle"]} />
          <ShopList title="Lipides" items={["Huile d'olive vierge 1 L", "Amandes 250 g", "Avocat ×3"]} />
          <ShopList title="Légumes/fruits" items={["Épinards", "Brocoli", "Courgette", "Poivrons", "Concombre", "Tomates cerises", "Pommes", "Baies surgelées Picard"]} />
          <ShopList title="Garde-manger" items={["Vinaigre de cidre", "Moutarde Maille", "Sel · épices · café"]} />
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
function Meal({ time, name, kcal, macros, pre, children }: { time: string; name: string; kcal: string; macros: string; pre?: string; children: React.ReactNode }) {
  return (
    <div className="border border-ink-700/60 bg-ink-900/40 p-5">
      <div className="flex items-baseline gap-4 mb-2 flex-wrap">
        <span className="mono text-gold text-sm">{time}</span>
        <h3 className="serif text-xl italic text-bone-50">{name}</h3>
        <span className="mono text-xs text-bone-400 ml-auto">{kcal} kcal · {macros}</span>
      </div>
      {pre && <p className="mono text-[10px] uppercase tracking-[0.25em] text-rust mb-2">↟ {pre}</p>}
      <p className="text-sm text-bone-300 font-light leading-relaxed">{children}</p>
    </div>
  );
}
function ShopList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-ink-900/60 p-4">
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
