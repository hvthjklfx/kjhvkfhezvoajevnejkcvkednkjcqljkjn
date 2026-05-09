"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Area, AreaChart } from "recharts";
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

  // Chart data with target line
  const chartData = [
    { date: PROTOCOL.startDate, weight: PROTOCOL.startWeight, label: "Départ" },
    ...weekly.filter(w => w.weight).map((w) => ({ date: w.date, weight: w.weight, label: "" })),
  ];

  const targetLineData = [
    { date: PROTOCOL.startDate, weight: PROTOCOL.startWeight },
    { date: PROTOCOL.endDate, weight: PROTOCOL.targetWeight },
  ];

  const currentWeight = weekly.length > 0 ? weekly[weekly.length - 1].weight : PROTOCOL.startWeight;
  const lost = currentWeight !== null ? PROTOCOL.startWeight - currentWeight : 0;
  const remaining = currentWeight !== null ? currentWeight - PROTOCOL.targetWeight : 0;
  const totalToLose = PROTOCOL.startWeight - PROTOCOL.targetWeight;
  const pctLost = (lost / totalToLose) * 100;

  // Daily compliance summary
  const dailyValues = Object.values(daily);
  const last7 = dailyValues
    .filter((d) => {
      const dDate = new Date(d.date);
      const daysAgo = (Date.now() - dDate.getTime()) / (1000 * 60 * 60 * 24);
      return daysAgo <= 7;
    });
  const compliance = last7.length > 0 ? Math.round((last7.reduce((sum, d) => sum + [d.caloriesHit, d.proteinHit, d.trainingDone, d.stepsHit, d.sleepHit].filter(Boolean).length, 0) / (last7.length * 5)) * 100) : 0;

  return (
    <div className="space-y-10 fade-up">
      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">01 · État du projet</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-700/40">
          <Stat label="Poids actuel" value={`${currentWeight?.toFixed(1) ?? "—"} kg`} />
          <Stat label="Perdu" value={`${lost.toFixed(1)} kg`} accent />
          <Stat label="À perdre" value={`${Math.max(0, remaining).toFixed(1)} kg`} />
          <Stat label="Compliance 7j" value={`${compliance}%`} accent={compliance >= 80} />
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">02 · Trajectoire</p>
        <div className="border border-ink-700/60 bg-ink-900/40 p-5">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="goldFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c9a96a" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#c9a96a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#3a2f24" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                stroke="#9a8460"
                tick={{ fill: "#bfac82", fontSize: 10, fontFamily: "JetBrains Mono" }}
                tickFormatter={(d) => new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}
              />
              <YAxis
                stroke="#9a8460"
                tick={{ fill: "#bfac82", fontSize: 10, fontFamily: "JetBrains Mono" }}
                domain={[55, 75]}
                ticks={[58, 62, 66, 70, 74]}
              />
              <Tooltip
                contentStyle={{ background: "#16120e", border: "1px solid #c9a96a", borderRadius: 0, fontSize: 12 }}
                labelStyle={{ color: "#c9a96a", fontFamily: "JetBrains Mono" }}
                itemStyle={{ color: "#ebe2cf" }}
                formatter={(v: any) => [`${v} kg`, "Poids"]}
                labelFormatter={(d) => new Date(d).toLocaleDateString("fr-FR")}
              />
              <ReferenceLine y={58} stroke="#c9a96a" strokeDasharray="5 5" label={{ value: "Cible 58 kg", position: "right", fill: "#c9a96a", fontSize: 10, fontFamily: "JetBrains Mono" }} />
              <Area type="monotone" dataKey="weight" stroke="#c9a96a" strokeWidth={2} fill="url(#goldFade)" dot={{ fill: "#c9a96a", stroke: "#0c0a08", strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>

          <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-ink-700/40">
            <div>
              <p className="mono text-[9px] uppercase tracking-[0.25em] text-bone-400">Progression</p>
              <p className="mono text-sm text-bone-100 mt-1">{pctLost.toFixed(1)}%</p>
            </div>
            <div>
              <p className="mono text-[9px] uppercase tracking-[0.25em] text-bone-400">Rythme cible</p>
              <p className="mono text-sm text-bone-100 mt-1">0.89 kg/sem</p>
            </div>
            <div>
              <p className="mono text-[9px] uppercase tracking-[0.25em] text-bone-400">Objectif</p>
              <p className="mono text-sm text-gold mt-1">58.0 kg</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">03 · Nouvelle pesée</p>
        <div className="border border-ink-700/60 bg-ink-900/40 p-5 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Date" type="date" value={date} onChange={setDate} />
            <Input label="Poids (kg)" type="number" value={weight} onChange={setWeight} step="0.1" placeholder="72.0" />
            <Input label="Tour de taille — nombril (cm)" type="number" value={waistNavel} onChange={setWaistNavel} step="0.5" placeholder="—" />
            <Input label="Tour de taille — hanches (cm)" type="number" value={waistHip} onChange={setWaistHip} step="0.5" placeholder="—" />
          </div>
          <div>
            <label className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400 mb-1 block">Notes</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="ex. force au DL stable, énergie haute"
              className="w-full bg-transparent border-b border-ink-700 focus:border-gold outline-none text-sm text-bone-100 font-light placeholder:text-bone-400/40 transition-colors py-1"
            />
          </div>
          <button
            onClick={addEntry}
            disabled={!weight}
            className="mono text-xs uppercase tracking-[0.3em] px-5 py-2 bg-gold text-ink-950 hover:bg-gold-light disabled:bg-ink-700 disabled:text-bone-400 transition-colors"
          >
            Enregistrer
          </button>
          <p className="text-xs text-bone-400 italic font-light">
            Dimanche matin · à jeun · après toilette · avant eau · même balance · même endroit
          </p>
        </div>
      </section>

      <section>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">04 · Historique</p>
        {weekly.length === 0 ? (
          <p className="text-sm text-bone-400 italic font-light border border-ink-700/40 bg-ink-900/40 p-5">
            Aucune pesée enregistrée. Première mesure dimanche matin.
          </p>
        ) : (
          <div className="border border-ink-700/60 bg-ink-900/40 divide-y divide-ink-700/40">
            {[...weekly].reverse().map((w) => (
              <div key={w.date} className="grid grid-cols-[100px_1fr_auto] gap-4 px-5 py-3 items-baseline">
                <p className="mono text-xs text-gold">{new Date(w.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}</p>
                <div>
                  <p className="text-sm text-bone-100 font-light">
                    <span className="serif italic text-base">{w.weight} kg</span>
                    {w.waistNavel && <span className="text-bone-400 ml-3">· taille {w.waistNavel}cm</span>}
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
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-gold mb-3">05 · Briefing exécutif</p>
        <p className="text-xs text-bone-400 italic font-light mb-3">Ce qu'exigent 14 kg en 16 semaines · pas de négociation</p>
        <div className="space-y-px">
          {REALITY_CHECK.map((r, i) => (
            <div key={i} className="border border-ink-700/60 bg-ink-900/40 p-4 flex gap-4">
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
    <div className="bg-ink-900/60 p-4">
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
