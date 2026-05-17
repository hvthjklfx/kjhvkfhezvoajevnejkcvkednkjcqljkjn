"use client";

import { useState } from "react";
import { MEAL_PLAN, BATCH_PREP } from "@/lib/data";

export default function MealsTab() {
  const todayDay = new Date().toLocaleDateString("en-GB", { weekday: "long" });
  const todayIdx = MEAL_PLAN.findIndex((d) => d.day === todayDay);
  const [selected, setSelected] = useState(todayIdx >= 0 ? todayIdx : 0);

  const day = MEAL_PLAN[selected];

  return (
    <div className="space-y-10 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Assembly-only plan</p>
        <h2 className="serif text-3xl font-light italic text-bone-50">No cooking. Open, mix, eat.</h2>
        <p className="text-sm text-bone-300 font-light mt-2 max-w-xl leading-relaxed">
          Every meal is built from cans, pots, and pre-cooked components. Nothing takes more than 4 minutes.
          One 20-minute batch task on Sunday (boil eggs, prep chicken) and the rest of the week is pure assembly.
        </p>
      </section>

      <section className="border border-gold/40 bg-gold/15 p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Sunday batch task · 20 min total</p>
        <div className="space-y-3">
          {BATCH_PREP.map((b) => (
            <div key={b.task} className="flex flex-col md:flex-row md:items-baseline md:gap-6 pb-2 border-b border-ink-700/50 last:border-0 last:pb-0">
              <div className="flex-1">
                <p className="text-bone-50 font-light serif text-lg italic">{b.task}</p>
                <p className="text-xs text-bone-300 font-light mt-1">{b.detail}</p>
              </div>
              <p className="mono text-xs text-gold whitespace-nowrap mt-1 md:mt-0">{b.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="grid grid-cols-7 gap-px bg-ink-700/40">
          {MEAL_PLAN.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setSelected(i)}
              className={`p-3 transition-colors ${
                selected === i
                  ? "bg-gold text-white"
                  : "bg-ink-800/80 text-bone-300 hover:bg-ink-800/90"
              }`}
            >
              <p className="mono text-[9px] uppercase tracking-[0.25em] opacity-70">
                {d.day.slice(0, 3)}
              </p>
              <p className="serif text-lg italic mt-1">{i + 1}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-px">
        <Meal time="Breakfast" data={day.breakfast} pre={null} />
        <Meal time="Lunch" data={day.lunch} pre="ACV pre-load 10 min prior" />
        <Meal time="Dinner" data={day.dinner} pre="ACV pre-load 10 min prior" />
      </section>

      <section className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">The component logic</p>
        <p className="text-sm text-bone-100 font-light leading-relaxed">
          You always have the same building blocks in the kitchen, so groceries are simple and bike-friendly
          (cans are heavy but small — split shopping across two trips if needed). Mix and match freely:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.25em] text-gold mb-1">Protein anchors</p>
            <p className="text-sm text-bone-300 font-light">Canned tuna · canned mackerel · hard-boiled eggs · skyr/cottage cheese pots · pre-cooked chicken</p>
          </div>
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.25em] text-gold mb-1">Carb anchors</p>
            <p className="text-sm text-bone-300 font-light">Pre-cooked lentils · chickpeas · white beans (all canned) · microwave rice pouches · oats</p>
          </div>
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.25em] text-gold mb-1">Fresh (no prep)</p>
            <p className="text-sm text-bone-300 font-light">Pre-washed salad bags · cherry tomatoes · cucumber · avocado · frozen berries · apples/bananas</p>
          </div>
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.25em] text-gold mb-1">Flavour</p>
            <p className="text-sm text-bone-300 font-light">Olive oil · lemon · vinegar · mustard · soy sauce · salt · pepper · cinnamon</p>
          </div>
        </div>
      </section>

      <section className="border border-gold/40 bg-gold/15 p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Hunger troubleshooting</p>
        <p className="text-sm text-bone-100 font-light leading-relaxed">
          Hungry between meals? Drink a large glass of water with electrolytes first — thirst and stress mimic hunger and fade in 10–15 min.
          If real hunger persists before dinner regularly, the fix is a <strong className="text-gold">bigger lunch</strong> (add a second egg or extra ½ can of beans),
          not a snack. Snacking at this calorie level breaks satiety.
        </p>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · Drinks</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5">
            <p className="serif text-xl italic text-bone-50">Allowed</p>
            <ul className="mt-3 space-y-1 text-sm text-bone-100 font-light">
              <li>· Black coffee (max 2 cups, last by 12 PM)</li>
              <li>· Black / green / herbal tea</li>
              <li>· Sparkling water · Perrier</li>
              <li>· Diet drinks (occasional, max 1/day)</li>
            </ul>
          </div>
          <div className="border border-rust/50 bg-rust/15 p-5">
            <p className="serif text-xl italic text-bone-50">Banned 16 weeks</p>
            <ul className="mt-3 space-y-1 text-sm text-bone-100 font-light">
              <li>· Wine · beer · spirits · cocktails</li>
              <li>· Fruit juice · commercial smoothies</li>
              <li>· Soda · sweetened iced coffee</li>
              <li>· Lattes with milk &gt;30 mL daily</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function Meal({ time, data, pre }: { time: string; data: { name: string; ingredients: string; macros: string; assembly: string }; pre: string | null }) {
  return (
    <div className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5">
      <div className="flex items-baseline gap-4 mb-2 flex-wrap">
        <span className="mono text-[10px] uppercase tracking-[0.3em] text-gold">{time}</span>
        <span className="mono text-xs text-bone-400 ml-auto">{data.macros}</span>
      </div>
      <h3 className="serif text-2xl italic text-bone-50 mb-2">{data.name}</h3>
      {pre && <p className="mono text-[10px] uppercase tracking-[0.25em] text-rust mb-2">↟ {pre}</p>}
      <p className="text-sm text-bone-300 font-light leading-relaxed">{data.ingredients}</p>
      <p className="mono text-[10px] uppercase tracking-[0.25em] text-gold mt-3">⏱ {data.assembly}</p>
    </div>
  );
}
