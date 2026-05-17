"use client";

import { TRAINING_PHASE_A, RUNNING_PROGRESSION } from "@/lib/data";

export default function TrainingTab() {
  const data = TRAINING_PHASE_A;

  return (
    <div className="space-y-10 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Weekly split</p>
        <h2 className="serif text-3xl text-bone-50 font-light italic">Four sessions a week.</h2>
        <p className="text-sm text-bone-300 font-light mt-2 max-w-xl leading-relaxed">
          Two short bodyweight strength sessions (25 min) + two cardio sessions you choose and enjoy.
          Three rest days. The calorie deficit drives the fat loss — training protects your muscle and
          insulin sensitivity so you arrive at 58 kg lean, not depleted.
        </p>
      </section>

      <section>
        <div className="space-y-px">
          {data.map((d) => {
            const isToday = isDayToday(d.day);
            return (
              <div
                key={d.day}
                className={`border p-5 transition-colors ${
                  isToday ? "border-gold bg-gold/15" : "border-ink-700/70 bg-ink-900/70 soft-shadow"
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
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · Running progression (only if you pick running)</p>
        <p className="text-xs text-bone-400 italic font-light mb-4 max-w-2xl leading-relaxed">
          Your Wednesday cardio is your choice — run, swim, or bike. If you choose running, follow this gentle
          build-up so you don't get injured. On cortisol: easy running does NOT chronically raise cortisol.
          Cortisol rises acutely during any exercise, then drops below baseline 1–2h after. Chronic elevation
          comes from overtraining — not from one easy 30-min session a week.
        </p>
        <div className="space-y-px">
          {RUNNING_PROGRESSION.map((r) => (
            <div key={r.week} className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5 grid md:grid-cols-[100px_1fr_120px] gap-4 items-baseline">
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

      <section className="border border-gold/40 bg-gold/15 p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Z2 running rules</p>
        <ul className="space-y-2 text-sm text-bone-100 font-light">
          <li>· <strong className="text-bone-50">Talk test</strong> — you should be able to say 4–5 words per breath. Out of breath → walk.</li>
          <li>· <strong className="text-bone-50">Heart rate</strong> — 65–75% of max (~130–150 bpm). Apple Watch live HR.</li>
          <li>· <strong className="text-bone-50">Surface</strong> — grass, dirt, track if possible. Asphalt OK with good shoes.</li>
          <li>· <strong className="text-bone-50">Shoes</strong> — proper cushioned running shoes. Asics Cumulus, Nike Pegasus, Brooks Ghost. Don't run in cross-trainers or minimalists.</li>
          <li>· <strong className="text-bone-50">Fasted runs</strong> — only after week 4 and only with protein breakfast within 30 min after.</li>
          <li>· <strong className="text-bone-50">Golden rule</strong> — never advance the duration if a session was painful. Repeat the same week.</li>
        </ul>
      </section>

      <section className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">The training logic</p>
        <p className="text-sm text-bone-100 font-light leading-relaxed">
          Four sessions is the sweet spot — enough to protect muscle and keep your HOMA-IR moving in the right
          direction, without the fatigue and cortisol load of daily hard training. The two 25-minute bodyweight
          sessions are the non-negotiable ones: they signal your body to keep muscle while you lose weight, so
          you end up lean at 58 kg rather than soft. The two cardio days are yours to shape — pick what you
          enjoy, keep it conversational.
        </p>
        <p className="text-xs text-bone-400 italic font-light mt-3">
          No equipment needed. Progress bodyweight moves by adding reps (12 → 15 → 20) and slowing the tempo
          (3-second descent, 1-second pause). As you lean toward 58 kg the same moves stay challenging because
          relative load rises.
        </p>
      </section>
    </div>
  );
}

function isDayToday(dayCode: string): boolean {
  const map: Record<number, string> = { 0: "Sun", 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat" };
  return map[new Date().getDay()] === dayCode;
}
