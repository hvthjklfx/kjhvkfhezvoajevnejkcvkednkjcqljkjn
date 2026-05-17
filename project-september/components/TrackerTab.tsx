"use client";

import { useState } from "react";
import { CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Area, AreaChart, XAxis, YAxis } from "recharts";
import { useLocalStorage, DailyEntry, WeeklyEntry } from "@/lib/storage";
import { PROTOCOL, REALITY_CHECK } from "@/lib/data";

export default function TrackerTab() {
  const [weekly, setWeekly] = useLocalStorage<WeeklyEntry[]>("ps_weekly", []);
  const [daily] = useLocalStorage<Record<string, DailyEntry>>("ps_daily", {});

  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [weight, setWeight] = useState("");
  const [waistNavel, setWaistNavel] = useState("");
  const [waistHip, setWaistHip] = useState("");
  const [notes, setNotes] = useState("");

  const addEntry = () => {
    if (!weight) return;
    const entry: WeeklyEntry = {
      date,
      weight: Number(weight),
      waistNavel: waistNavel ? Number(waistNavel) : null,
      waistHip: waistHip ? Number(waistHip) : null,
      notes,
    };
    const filtered = weekly.filter((w) => w.date !== date);
    setWeekly([...filtered, entry].sort((a, b) => a.date.localeCompare(b.date)));
    setWeight(""); setWaistNavel(""); setWaistHip(""); setNotes("");
  };

  const removeEntry = (d: string) => setWeekly(weekly.filter((w) => w.date !== d));

  const chartData = [
    { date: PROTOCOL.startDate, weight: PROTOCOL.startWeight, label: "Start" },
    ...weekly.filter(w => w.weight).map((w) => ({ date: w.date, weight: w.weight, label: "" })),
  ];

  const currentWeight = weekly.length > 0 ? weekly[weekly.length - 1].weight : PROTOCOL.startWeight;
  const lost = currentWeight !== null ? PROTOCOL.startWeight - currentWeight : 0;
  const remaining = currentWeight !== null ? currentWeight - PROTOCOL.targetWeight : 0;
  const totalToLose = PROTOCOL.startWeight - PROTOCOL.targetWeight;
  const pctLost = (lost / totalToLose) * 100;

  const dailyValues = Object.values(daily);
  const last7 = dailyValues
    .filter((d) => {
      const dDate = new Date(d.date);
      const daysAgo = (Date.now() - dDate.getTime()) / (1000 * 60 * 60 * 24);
      return daysAgo <= 7;
    });
  // 4-metric compliance now (no steps)
  const compliance = last7.length > 0
    ? Math.round((last7.reduce((sum, d) => sum + [d.caloriesHit, d.proteinHit, d.trainingDone, d.sleepHit].filter(Boolean).length, 0) / (last7.length * 4)) * 100)
    : 0;

  return (
    <div className="space-y-10 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · Project status</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-700/40">
          <Stat label="Current weight" value={`${currentWeight?.toFixed(1) ?? "—"} kg`} />
          <Stat label="Lost" value={`${lost.toFixed(1)} kg`} accent />
          <Stat label="To go" value={`${Math.max(0, remaining).toFixed(1)} kg`} />
          <Stat label="Compliance 7d" value={`${compliance}%`} accent={compliance >= 80} />
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · Trajectory</p>
        <div className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="goldFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c98b96" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#c98b96" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#dccfbe" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                stroke="#9d8f7e"
                tick={{ fill: "#776a5c", fontSize: 10, fontFamily: "JetBrains Mono" }}
                tickFormatter={(d) => new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}
              />
              <YAxis
                stroke="#9d8f7e"
                tick={{ fill: "#776a5c", fontSize: 10, fontFamily: "JetBrains Mono" }}
                domain={[55, 75]}
                ticks={[58, 62, 66, 70, 74]}
              />
              <Tooltip
                contentStyle={{ background: "#ffffff", border: "1px solid #c98b96", borderRadius: 0, fontSize: 12 }}
                labelStyle={{ color: "#c98b96", fontFamily: "JetBrains Mono" }}
                itemStyle={{ color: "#4c443e" }}
                formatter={(v: any) => [`${v} kg`, "Weight"]}
                labelFormatter={(d) => new Date(d).toLocaleDateString("en-GB")}
              />
              <ReferenceLine y={58} stroke="#c98b96" strokeDasharray="5 5" label={{ value: "Target 58 kg", position: "right", fill: "#c98b96", fontSize: 10, fontFamily: "JetBrains Mono" }} />
              <Area type="monotone" dataKey="weight" stroke="#c98b96" strokeWidth={2} fill="url(#goldFade)" dot={{ fill: "#c98b96", stroke: "#faf7f3", strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>

          <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-ink-700/50">
            <div>
              <p className="mono text-[9px] uppercase tracking-[0.25em] text-bone-400">Progress</p>
              <p className="mono text-sm text-bone-100 mt-1">{pctLost.toFixed(1)}%</p>
            </div>
            <div>
              <p className="mono text-[9px] uppercase tracking-[0.25em] text-bone-400">Target rate</p>
              <p className="mono text-sm text-bone-100 mt-1">0.89 kg/wk</p>
            </div>
            <div>
              <p className="mono text-[9px] uppercase tracking-[0.25em] text-bone-400">Goal</p>
              <p className="mono text-sm text-gold mt-1">58.0 kg</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">03 · New weigh-in</p>
        <div className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-5 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Date" type="date" value={date} onChange={setDate} />
            <Input label="Weight (kg)" type="number" value={weight} onChange={setWeight} step="0.1" placeholder="72.0" />
            <Input label="Waist — navel (cm)" type="number" value={waistNavel} onChange={setWaistNavel} step="0.5" placeholder="—" />
            <Input label="Waist — hips (cm)" type="number" value={waistHip} onChange={setWaistHip} step="0.5" placeholder="—" />
          </div>
          <div>
            <label className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400 mb-1 block">Notes</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. energy high, no cravings"
              className="w-full bg-transparent border-b border-ink-700 focus:border-gold outline-none text-sm text-bone-100 font-light placeholder:text-bone-400/40 transition-colors py-1"
            />
          </div>
          <button
            onClick={addEntry}
            disabled={!weight}
            className="mono text-xs uppercase tracking-[0.3em] px-5 py-2 bg-gold text-white hover:bg-gold-dark disabled:bg-ink-700 disabled:text-bone-400 transition-colors"
          >
            Save
          </button>
          <p className="text-xs text-bone-400 italic font-light">
            Sunday morning · fasted · after toilet · before water · same scale · same spot.
          </p>
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">04 · History</p>
        {weekly.length === 0 ? (
          <p className="text-sm text-bone-400 italic font-light border border-ink-700/50 bg-ink-900/70 soft-shadow p-5">
            No weigh-ins recorded. First measurement Sunday morning.
          </p>
        ) : (
          <div className="border border-ink-700/70 bg-ink-900/70 soft-shadow divide-y divide-ink-700/40">
            {[...weekly].reverse().map((w) => (
              <div key={w.date} className="grid grid-cols-[100px_1fr_auto] gap-4 px-5 py-3 items-baseline">
                <p className="mono text-xs text-gold">{new Date(w.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}</p>
                <div>
                  <p className="text-sm text-bone-100 font-light">
                    <span className="serif italic text-base">{w.weight} kg</span>
                    {w.waistNavel && <span className="text-bone-400 ml-3">· waist {w.waistNavel}cm</span>}
                  </p>
                  {w.notes && <p className="text-xs text-bone-400 italic font-light mt-0.5">{w.notes}</p>}
                </div>
                <button
                  onClick={() => removeEntry(w.date)}
                  className="text-bone-400 hover:text-rust text-xs mono"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">05 · Executive briefing</p>
        <p className="text-xs text-bone-400 italic font-light mb-3">What 14 kg in 16 weeks demands · no negotiation</p>
        <div className="space-y-px">
          {REALITY_CHECK.map((r, i) => (
            <div key={i} className="border border-ink-700/70 bg-ink-900/70 soft-shadow p-4 flex gap-4">
              <span className="mono text-xs text-gold pt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-bone-100 font-light leading-relaxed">{r}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="bg-ink-800/80 p-4">
      <p className="mono text-[9px] uppercase tracking-[0.25em] text-bone-400">{label}</p>
      <p className={`serif text-3xl mt-1 italic font-light ${accent ? "text-gold" : "text-bone-50"}`}>{value}</p>
    </div>
  );
}

function Input({ label, type, value, onChange, step, placeholder }: { label: string; type: string; value: string; onChange: (v: string) => void; step?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400 mb-1 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        step={step}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-ink-700 focus:border-gold outline-none mono text-sm text-bone-100 placeholder:text-bone-400/40 transition-colors py-1"
      />
    </div>
  );
}
