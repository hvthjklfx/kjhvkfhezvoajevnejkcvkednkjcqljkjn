// All static blueprint content lives here. Edit freely.

export const PROTOCOL = {
  startDate: "2026-05-09",
  endDate: "2026-09-01",
  startWeight: 72.2,
  targetWeight: 58.0,
  height: 173,
  age: 22,
};

export const MACROS = [
  { range: "Wk 1–4", weight: "72→68 kg", kcal: 1400, p: 160, f: 65, c: 105 },
  { range: "Wk 5–8", weight: "68→65 kg", kcal: 1350, p: 150, f: 60, c: 100 },
  { range: "Wk 9–12", weight: "65→61 kg", kcal: 1300, p: 145, f: 60, c: 90 },
  { range: "Wk 13–16", weight: "61→58 kg", kcal: 1300, p: 140, f: 60, c: 90 },
];

export const BLOODWORK = [
  {
    priority: 1,
    marker: "HOMA-IR",
    value: "3.789",
    target: "<2.0 (ideal <1.5)",
    note: "Above lab upper limit (2.26). Predictive of T2DM with family Hx. Drives fat-storage, hunger, hair thinning. PRIMARY ISSUE.",
    severity: "high",
  },
  {
    priority: 2,
    marker: "HDL-C",
    value: "1.34 mmol/L (52 mg/dL)",
    target: ">1.55 mmol/L (>60)",
    note: "Below cardioprotective threshold. Drospirenone is lipid-neutral, so this is yours to fix.",
    severity: "med",
  },
  {
    priority: 3,
    marker: "Ferritin",
    value: "23.2 ng/mL",
    target: "50–100 ng/mL",
    note: "Suboptimal for active female on minoxidil. Telogen effluvium threshold ≈ 27.5 µg/L (Karger 2013).",
    severity: "med",
  },
  {
    priority: 4,
    marker: "Iron pattern",
    value: "Low ferritin + Fe 192 µg/dL + TSAT 40.9%",
    target: "Ferritin 50–100, TSAT 20–35",
    note: "Likely analytical artefact (non-fasting draw or recent iron-pill). Re-test fasting in 8 weeks. NO iron supplementation meanwhile.",
    severity: "med",
  },
  {
    priority: 5,
    marker: "Fasting glucose",
    value: "5.45 mmol/L (98 mg/dL)",
    target: "<5.0 mmol/L (<90)",
    note: "Upper-normal. ADA 'increased risk' zone begins 5.6 mmol/L. HbA1c needed at next draw.",
    severity: "low",
  },
  {
    priority: 99,
    marker: "TSH, eGFR, ALAT/ASAT, Vit D, B12, folate, CRP",
    value: "All optimal",
    target: "—",
    note: "Clean foundation. Nothing to fix.",
    severity: "ok",
  },
];

export const SUPPLEMENTS = {
  morning: [
    { name: "Omega-3 (EPA+DHA)", dose: "2,000 mg combined", note: "≥1,000 mg EPA. Switch to high-concentration brand." },
    { name: "Vitamin D3", dose: "1,000 IU", note: "With fatty meal. Maintenance only — your level is good." },
    { name: "Berberine HCl", dose: "500 mg", note: "With food. HOMA-IR ↓0.85 in meta-analysis." },
    { name: "Myo-inositol + DCI", dose: "2,000 + 50 mg", note: "40:1 ratio. Pair AM + PM." },
    { name: "NAC", dose: "600 mg", note: "Insulin sensitivity + liver support." },
    { name: "Zinc bisglycinate", dose: "15 mg", note: "Skin + immune." },
    { name: "Creatine monohydrate", dose: "5 g", note: "Powder form, daily, micronized. ISSN gold standard." },
    { name: "Marine collagen", dose: "11 g", note: "Skin/hair peptides." },
  ],
  lunch: [
    { name: "Berberine HCl", dose: "500 mg", note: "With food." },
  ],
  afternoon: [
    { name: "Alpha-Lipoic Acid (R-ALA preferred)", dose: "600 mg", note: "Fasted, 30 min before any food." },
  ],
  dinner: [
    { name: "Berberine HCl", dose: "500 mg", note: "With food." },
    { name: "Myo-inositol + DCI", dose: "2,000 + 50 mg", note: "Second daily dose." },
    { name: "NAC", dose: "600 mg", note: "Second daily dose." },
  ],
  bed: [
    { name: "Magnesium bisglycinate", dose: "300–400 mg", note: "30–60 min before bed. Replaces marine Mg." },
    { name: "Ashwagandha (KSM-66)", dose: "600 mg", note: "Cortisol ↓, sleep quality ↑." },
  ],
  stop: [
    { name: "Alpha Men (MyProtein)", reason: "Male formulation. Iron + zinc loads inappropriate given TSAT 40.9%." },
    { name: "Creatine pill (Myvitamins)", reason: "Underdosed. Switch to 5g powder." },
    { name: "Melatonin (Granions)", reason: "You self-report disrupted sleep — likely supraphysiological dose." },
    { name: "All iron supplements", reason: "Until 8-week re-test confirms iron picture." },
  ],
};

// Thin-focused split with running (Couch-to-5K progression). 2× light resistance for HOMA-IR.
// Office worker version — steps target 7k, running replaces extended walking.
export const TRAINING_PHASE_A = [
  { day: "Mon", session: "Light full-body", detail: "Goblet squat 3×12, hip thrust 3×15, lat pulldown 3×12, push-up 3×AMRAP, plank 3×30s. Charges légères, RPE 6.", duration: "45 min", rpe: "RPE 6" },
  { day: "Tue", session: "Run easy (Z2)", detail: "Voir progression ci-dessous. Allure conversationnelle, HR 65–75%. Si essoufflée → marcher.", duration: "25–35 min", rpe: "Z2 conversationnel" },
  { day: "Wed", session: "Repos actif", detail: "Yoga / mobilité / piscine longueurs tranquilles 30 min.", duration: "30 min", rpe: "<60%" },
  { day: "Thu", session: "Light full-body", detail: "RDL haltères 3×12, fente arrière 3×10/jambe, row haltère 3×12, chest press 3×12, dead bug 3×10. RPE 6.", duration: "45 min", rpe: "RPE 6" },
  { day: "Fri", session: "Run easy (Z2)", detail: "Même format que mardi. Toujours conversationnel.", duration: "25–35 min", rpe: "Z2" },
  { day: "Sat", session: "Vélo gravel Z2", detail: "60–75 min pace conversationnel, HR 60–70%. Le seul cardio long de la semaine.", duration: "60–75 min", rpe: "Z2" },
  { day: "Sun", session: "Repos", detail: "Off complet. Étirements optionnels.", duration: "—", rpe: "off" },
];

export const TRAINING_PHASE_B = [
  { day: "Mon", session: "Light full-body (maison)", detail: "Goblet squat KB 3×12, banded hip thrust 3×15, banded pulldown 3×12, push-up genoux ou complète 3×AMRAP, plank 3×30s." },
  { day: "Tue", session: "Run easy (Z2)", detail: "Allure conversationnelle, 25–35 min selon semaine de progression." },
  { day: "Wed", session: "Repos actif", detail: "Yoga 20 min OU piscine longueurs tranquilles 30 min." },
  { day: "Thu", session: "Light full-body (maison)", detail: "RDL haltères 3×12, fente arrière 3×10/jambe, banded row 3×12, banded chest press 3×12, dead bug 3×10." },
  { day: "Fri", session: "Run easy (Z2)", detail: "Même format que mardi." },
  { day: "Sat", session: "Vélo gravel Z2", detail: "60–75 min pace conversationnel." },
  { day: "Sun", session: "Repos", detail: "Off complet." },
];

// Couch-to-5K-style progression. Conservative because she doesn't run currently.
// Run/walk intervals build aerobic base + tendon resilience without injury.
export const RUNNING_PROGRESSION = [
  { week: "S 1–2", session: "5 min marche → 8× (1 min run / 2 min marche) → 5 min marche", total: "29 min", goal: "Découvrir l'allure Z2. Aucune fatigue post-séance." },
  { week: "S 3–4", session: "5 min marche → 6× (2 min run / 1.5 min marche) → 5 min marche", total: "31 min", goal: "Run continu 2 min sans s'arrêter." },
  { week: "S 5–6", session: "5 min marche → 4× (5 min run / 2 min marche) → 5 min marche", total: "38 min", goal: "Run continu 5 min." },
  { week: "S 7–8", session: "5 min marche → 3× (10 min run / 1 min marche) → 5 min marche", total: "43 min", goal: "Run continu 10 min." },
  { week: "S 9–10", session: "5 min marche → 25 min run continu → 5 min marche", total: "35 min", goal: "Run continu 25 min." },
  { week: "S 11–16", session: "5 min échauffement → 30 min run continu → 5 min retour calme", total: "40 min", goal: "Allure stable. Possibilité de tester un 5km officiel S15–16." },
];

export const SCHEDULE = [
  { time: "06:50", block: "Optional fasted Z2 ride", flag: "optional" },
  { time: "08:15", block: "Dawn simulator wake. Bedside water 500 mL." },
  { time: "08:18", block: "10 min sunlight or window light. Cortisol awakening trigger.", flag: "key" },
  { time: "08:20", block: "Hydration + electrolytes. NO coffee yet." },
  { time: "08:25", block: "AM skincare + AM supplement stack." },
  { time: "08:40", block: "Breakfast (protein-first). Coffee with food." },
  { time: "08:55", block: "Cycle/walk to work." },
  { time: "09:00", block: "Work block 1 — Pomodoro 50/10. Posture cue every 50 min." },
  { time: "12:20", block: "ACV pre-load: 1 tbsp in 200 mL water.", flag: "key" },
  { time: "12:30", block: "Lunch — protein/veg first, slow carbs last." },
  { time: "12:50", block: "15-min walk. Non-negotiable.", flag: "key" },
  { time: "13:15", block: "Work block 2. Caffeine cutoff at 12:00." },
  { time: "16:45", block: "Snack pré-training (skyr + fruit + amandes OU whey)." },
  { time: "17:00", block: "Séance du jour (45 min light resistance · 25–35 min run · ou vélo Z2 selon planning)." },
  { time: "18:45", block: "Dîner (lowest-carb meal). ACV pré-charge." },
  { time: "19:15", block: "Post-dinner 12-min walk." },
  { time: "19:30", block: "Russian study 1h: Anki + reading + shadowing." },
  { time: "20:30", block: "Architecture coursework (Sun: financial review)." },
  { time: "21:00", block: "PM skincare + PM supplements + 5–10 min posture practice." },
  { time: "21:30", block: "Wind-down. Phone OUT of bedroom. Magnesium." },
  { time: "22:00", block: "Lights out. Target 7.5–8h sleep.", flag: "key" },
];

export const SKINCARE = {
  am: [
    "CeraVe Hydrating Cleanser",
    "Vitamin C serum (L-AA 10–15%)",
    "La Roche-Posay Cicaplast Baume B5 (if barrier compromised)",
    "Eucerin Anti-Pigmentation SPF 50 (thiamidol)",
    "Thermal water mist (optional)",
  ],
  pm: [
    "CeraVe cleanser",
    "Tue/Thu/Sat: The Ordinary Retinal 0.2% — pea-sized, face only",
    "Mon/Wed/Fri: Azelaic acid 10–20%",
    "Sun: rest night, just moisturizer",
    "CeraVe PM Facial Moisturizer (NO additives, NO minoxidil)",
  ],
  body: "CeraVe moisturizer ou Avène Trixera après douche. Optionnel : The Ordinary Granactive Retinoid pour le grain de peau (1× /2 jours). Aucun minoxidil sur le corps.",
  hair: [
    "1 mL minoxidil sur cuir chevelu sec uniquement, fingertips, 2× /jour",
    "Bien laver les mains immédiatement après application",
    "Ne pas appliquer dans les 4h suivant un shampooing (barrière compromise = absorption ↑)",
    "Pas d'occlusion immédiate (bonnet, casque) après application",
    "Si appliqué le soir : laisser 4h avant le coucher pour éviter transfert sur taie/visage",
  ],
};

export const FINANCE = {
  income: { now: 1072, after: 1300 },
  fixed: [
    { label: "Rent", amount: 250 },
    { label: "Subscriptions", amount: 30 },
    { label: "Groceries (~60€/wk)", amount: 260 },
    { label: "Transport / bike", amount: 50 },
    { label: "Supplements + skincare", amount: 70 },
    { label: "Phone/internet", amount: 25 },
  ],
  savings: { now: 300, after: 500 },
  plan: [
    { phase: "M 1–3", action: "Build Livret A emergency fund to €2,500 (~2.5mo expenses)" },
    { phase: "M 4+", action: "Open PEA (Fortuneo / Bourse Direct / BoursoBank). Auto €200/mo into ONE ETF: Amundi PEA Monde (DCAM, FR001400U5Q4) at 0.20% TER, OR iShares MSCI World Swap PEA (WPEA) at 0.25%" },
    { phase: "M 6+", action: "Optional assurance vie (Linxea Spirit 2 / Lucya Cardif) once PEA reaches €5k" },
    { phase: "Always", action: "Never: actively managed funds, structured products, crypto, individual stocks" },
  ],
};

export const TARGETS_NOV = [
  { metric: "HOMA-IR", target: "<2.0 (ideal <1.5)" },
  { metric: "Fasting glucose", target: "<5.0 mmol/L" },
  { metric: "HbA1c", target: "≤5.4%" },
  { metric: "HDL", target: ">1.55 mmol/L (>0.60 g/L)" },
  { metric: "Ferritin", target: "50–80 ng/mL" },
  { metric: "TSAT", target: "20–35%" },
];

export const REALITY_CHECK = [
  "Zero alcohol for 16 weeks. Each glass of wine = 120 kcal + blunts fat oxidation 9h + disrupts deep sleep.",
  "Near-zero processed food. >5 ingredients you don't recognize → doesn't enter the apartment.",
  "Daily food weighing. Eyeballing is off by 30–50%. €15 kitchen scale, log every bite.",
  "Training compliance ≥90%. Miss no more than 1 session per fortnight. 'Tired' is not an exception.",
  "Sleep 7.5–8h every night. Skipping = HOMA-IR climbs + hunger goes feral. No catch-up exists.",
  "Weekend ≠ off-protocol. Sat/Sun targets identical to weekdays.",
  "Restaurant meals: tracked or skipped. Aperos: sparkling water.",
];
