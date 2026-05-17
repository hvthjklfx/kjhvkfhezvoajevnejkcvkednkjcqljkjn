// All static blueprint content lives here. Edit freely.

export const PROTOCOL = {
  startDate: "2026-05-27",
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
    note: "Above lab upper limit (2.26). Predictive of T2DM with family history. Drives fat storage, hunger, and hair thinning. PRIMARY ISSUE.",
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
    note: "Suboptimal for an active female on minoxidil. Telogen effluvium threshold ≈ 27.5 µg/L (Karger 2013).",
    severity: "med",
  },
  {
    priority: 4,
    marker: "Iron pattern",
    value: "Low ferritin + Fe 192 µg/dL + TSAT 40.9%",
    target: "Ferritin 50–100, TSAT 20–35",
    note: "Likely analytical artefact (non-fasting draw or recent iron pill). Re-test fasting in 8 weeks. NO iron supplementation meanwhile.",
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
    { name: "Omega-3 (EPA+DHA)", dose: "2,000 mg combined", note: "≥1,000 mg EPA. Switch to a high-concentration brand." },
    { name: "Vitamin D3", dose: "1,000 IU", note: "With a fatty meal. Maintenance dose only — your level is already good." },
    { name: "Berberine HCl", dose: "500 mg", note: "With breakfast. HOMA-IR ↓0.85 in meta-analysis." },
    { name: "NAC", dose: "600 mg (2 × 300 mg caps)", note: "Your 300 mg caps — take 2 with breakfast." },
    { name: "Zinc bisglycinate", dose: "15 mg", note: "Skin + immune." },
    { name: "Creatine monohydrate", dose: "5 g", note: "Powder form, daily, micronized. ISSN gold standard." },
    { name: "Marine collagen", dose: "11 g", note: "Skin and hair peptides." },
  ],
  lunch: [
    { name: "Berberine HCl", dose: "500 mg", note: "With lunch." },
  ],
  afternoon: [
    { name: "Alpha-Lipoic Acid", dose: "500 mg (1 cap)", note: "Fasted, 30–60 min before any food. Your 500 mg is a solid effective dose." },
  ],
  dinner: [
    { name: "Berberine HCl", dose: "500 mg", note: "With dinner." },
    { name: "NAC", dose: "900 mg (3 × 300 mg caps)", note: "Your 300 mg caps — take 3 with dinner. Daily total ≈ 1,500 mg." },
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
  // Note shown in the Biology tab explaining the inositol substitution.
  notes: "Myo-inositol was dropped — the correct 40:1 myo/D-chiro dose was unavailable to you. It is not essential: berberine, NAC and ALA already cover the insulin-resistance angle with strong evidence. If you later find a proper myo-inositol + D-chiro-inositol 40:1 product (2g + 50mg per dose), you can add it back AM + PM, but the stack works without it. NAC: research shows 1,600–3,000 mg/day for insulin resistance; your 300 mg caps reach ~1,500 mg/day at 2 AM + 3 PM, which is the practical floor of the effective range — fine to run with.",
};

// 4 sessions/week: 2 short bodyweight strength + 2 cardio. Deficit drives fat loss.
export const TRAINING_PHASE_A = [
  { day: "Mon", session: "Bodyweight strength", detail: "Bodyweight squat 3×15, glute bridge 3×20, incline push-up 3×AMRAP, supine towel row 3×12, plank 3×30s. 25 min, RPE 6.", duration: "25 min", rpe: "RPE 6" },
  { day: "Tue", session: "Cardio (your pick)", detail: "Run, swim, or bike — 30 min easy/conversational. Whatever you feel like.", duration: "30 min", rpe: "Z2" },
  { day: "Wed", session: "Rest", detail: "Full off.", duration: "—", rpe: "off" },
  { day: "Thu", session: "Bodyweight strength", detail: "Single-leg glute bridge 3×12/leg, reverse lunge 3×10/leg, push-up 3×AMRAP, supine row 3×12, dead bug 3×10. 25 min, RPE 6.", duration: "25 min", rpe: "RPE 6" },
  { day: "Fri", session: "Rest", detail: "Full off.", duration: "—", rpe: "off" },
  { day: "Sat", session: "Cardio (your pick)", detail: "Run, swim, or a longer easy bike ride — 35–45 min. Make it enjoyable.", duration: "35–45 min", rpe: "Z2" },
  { day: "Sun", session: "Rest", detail: "Full off. Optional gentle stretching.", duration: "—", rpe: "off" },
];

export const TRAINING_PHASE_B = [
  { day: "Mon", session: "Bodyweight strength", detail: "Bodyweight squat 3×15, glute bridge 3×20, incline push-up 3×AMRAP, supine towel row 3×12, plank 3×30s." },
  { day: "Tue", session: "Cardio (your pick)", detail: "Run, swim, or bike, 30 min easy." },
  { day: "Wed", session: "Rest", detail: "Full off." },
  { day: "Thu", session: "Bodyweight strength", detail: "Single-leg glute bridge 3×12/leg, reverse lunge 3×10/leg, push-up 3×AMRAP, supine row 3×12, dead bug 3×10." },
  { day: "Fri", session: "Rest", detail: "Full off." },
  { day: "Sat", session: "Cardio (your pick)", detail: "Run, swim, or longer easy bike, 35–45 min." },
  { day: "Sun", session: "Rest", detail: "Full off." },
];

// Optional running progression — only if Wednesday cardio choice is running.
export const RUNNING_PROGRESSION = [
  { week: "Wk 1–2", session: "5 min walk → 6× (1 min run / 2 min walk) → 5 min walk", total: "28 min", goal: "Find your easy pace. Zero post-session fatigue." },
  { week: "Wk 3–4", session: "5 min walk → 5× (2 min run / 1.5 min walk) → 5 min walk", total: "28 min", goal: "Run continuously for 2 min." },
  { week: "Wk 5–8", session: "5 min walk → 3× (5 min run / 2 min walk) → 5 min walk", total: "31 min", goal: "Run continuously for 5 min." },
  { week: "Wk 9–14", session: "5 min walk → 20 min continuous run → 5 min walk", total: "30 min", goal: "Run continuously for 20 min." },
];

// MAY schedule — work 9 AM to 4:45 PM
export const SCHEDULE_MAY = [
  { time: "8:15 AM", block: "Dawn simulator wake. 500 mL water bedside." },
  { time: "8:18 AM", block: "10 min sunlight or window light. Anchors cortisol awakening response.", flag: "key" },
  { time: "8:20 AM", block: "Hydrate + electrolytes. NO coffee yet." },
  { time: "8:25 AM", block: "AM skincare + AM supplement stack." },
  { time: "8:40 AM", block: "Breakfast (protein-first). Coffee with food." },
  { time: "8:55 AM", block: "Cycle/walk to work." },
  { time: "9:00 AM", block: "Work block 1 — Pomodoro 50/10. Posture cue every 50 min." },
  { time: "12:20 PM", block: "Vinegar pre-load: 1 tbsp ACV in 200 mL water.", flag: "key" },
  { time: "12:30 PM", block: "Lunch — protein/veg first, slow carbs last." },
  { time: "1:15 PM", block: "Work block 2. Caffeine cutoff was 12:00 noon." },
  { time: "4:45 PM", block: "End of work day." },
  { time: "5:00 PM", block: "Training session (per weekly split)." },
  { time: "6:45 PM", block: "Dinner (lowest-carb meal). ACV pre-load 10 min before.", flag: "key" },
  { time: "7:30 PM", block: "Russian study 1h: Anki 25 min + reading + shadowing." },
  { time: "8:30 PM", block: "Architecture coursework (Sun: weekly financial review)." },
  { time: "9:00 PM", block: "PM skincare + PM supplements + 5–10 min posture practice." },
  { time: "9:30 PM", block: "Wind-down. Phone OUT of bedroom. Magnesium." },
  { time: "10:00 PM", block: "Lights out. Target 7.5–8 h sleep.", flag: "key" },
];

// JUNE+ schedule — work 7 AM to 4 PM (earlier wake, earlier bed)
export const SCHEDULE_JUNE = [
  { time: "6:30 AM", block: "Dawn simulator wake. 500 mL water bedside." },
  { time: "6:33 AM", block: "10 min sunlight or window light. Cortisol anchor.", flag: "key" },
  { time: "6:35 AM", block: "Hydrate + electrolytes. NO coffee yet." },
  { time: "6:40 AM", block: "AM skincare + AM supplement stack." },
  { time: "6:50 AM", block: "Breakfast (protein-first). Coffee with food." },
  { time: "6:55 AM", block: "Cycle/walk to work." },
  { time: "7:00 AM", block: "Work block 1 — Pomodoro 50/10." },
  { time: "11:50 AM", block: "Vinegar pre-load: 1 tbsp ACV in 200 mL water.", flag: "key" },
  { time: "12:00 PM", block: "Lunch — protein/veg first, slow carbs last." },
  { time: "12:45 PM", block: "Work block 2. Caffeine cutoff is 12:00 noon." },
  { time: "4:00 PM", block: "End of work day." },
  { time: "4:30 PM", block: "Training session (per weekly split)." },
  { time: "6:15 PM", block: "Dinner (lowest-carb meal). ACV pre-load 10 min before.", flag: "key" },
  { time: "7:00 PM", block: "Russian study 1h: Anki 25 min + reading + shadowing." },
  { time: "8:00 PM", block: "Architecture coursework (Sun: weekly financial review)." },
  { time: "8:30 PM", block: "PM skincare + PM supplements + posture practice." },
  { time: "9:00 PM", block: "Wind-down. Phone OUT of bedroom. Magnesium." },
  { time: "9:30 PM", block: "Lights out. Target 8 h sleep. (Earlier wake = earlier bed.)", flag: "key" },
];

export const SKINCARE = {
  am: [
    "CeraVe Hydrating Cleanser",
    "Vitamin C serum (L-AA 10–15%)",
    "La Roche-Posay Cicaplast Baume B5 (if barrier feels compromised)",
    "Eucerin Anti-Pigmentation SPF 50 (thiamidol)",
    "Thermal water mist (optional)",
  ],
  pm: [
    "CeraVe cleanser",
    "Tue/Thu/Sat: The Ordinary Retinal 0.2% — pea-sized, face only",
    "Mon/Wed/Fri: Azelaic acid 10–20%",
    "Sun: rest night, just moisturizer",
    "CeraVe PM Facial Moisturizer",
  ],
  body: "CeraVe moisturizer or Avène Trixera after shower. Optional: The Ordinary Granactive Retinoid for skin texture (every other day).",
  hair: [
    "1 mL minoxidil to dry scalp ONLY, fingertips, twice daily",
    "Wash hands immediately after application",
    "Do NOT apply within 4h of washing hair (compromised barrier = ↑ absorption)",
    "No occlusion (cap, helmet) immediately after application",
    "If applied at night: leave 4h before bed to avoid pillow/face transfer",
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
    { phase: "M 1–3", action: "Build Livret A emergency fund to €2,500 (~2.5 months of fixed expenses)." },
    { phase: "M 4+", action: "Open a PEA at Fortuneo / Bourse Direct / BoursoBank. Auto-transfer €200/month into ONE ETF: Amundi PEA Monde (DCAM, FR001400U5Q4) at 0.20% TER, OR iShares MSCI World Swap PEA (WPEA) at 0.25%." },
    { phase: "M 6+", action: "Optional assurance vie (Linxea Spirit 2 / Lucya Cardif) once PEA reaches €5k." },
    { phase: "Always", action: "Never: actively managed funds, structured products, crypto, individual stocks." },
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
  "Zero alcohol for 16 weeks. Each glass of wine = 120 kcal + blunts fat oxidation for 9h + disrupts deep sleep.",
  "Near-zero processed food. >5 ingredients you don't recognize → doesn't enter the apartment.",
  "Daily food weighing. Eyeballing portions is off by 30–50%. €15 kitchen scale, log every bite.",
  "Training compliance ≥90%. No more than 1 missed session per fortnight. 'Tired' is not an exception.",
  "Sleep 7.5–8 h every night. Skipping = HOMA-IR climbs + hunger goes feral. No catch-up exists.",
  "Weekend ≠ off-protocol. Sat/Sun targets identical to weekdays.",
  "Restaurant meals: tracked or skipped. Apéros: sparkling water only.",
];

// ASSEMBLY-ONLY meal plan. No daily cooking.
// Built from: canned tuna/mackerel, pre-cooked lentils/chickpeas (canned or vacuum-pack),
// hard-boiled eggs, yogurt/skyr pots, pre-washed salad, microwave rice pouches.
// One optional batch-cook on Sunday for protein. Everything else is cold assembly.
// Each day ≈ 1,400 kcal · ~155g protein · ~60g fat · ~110g carbs.
export const MEAL_PLAN = [
  {
    day: "Monday",
    breakfast: {
      name: "Yogurt + oats jar",
      ingredients: "1 large skyr pot (300g) + 40g oats (no cooking, just stir in) + handful frozen berries + sprinkle of nuts. Eat from the pot.",
      macros: "540 kcal · 48P / 13F / 55C",
      assembly: "Stir, eat. 1 minute.",
    },
    lunch: {
      name: "Tuna lentil bowl",
      ingredients: "1 can tuna (drained) + ½ can pre-cooked lentils (rinsed) + handful pre-washed salad + cherry tomatoes + drizzle olive oil + lemon/vinegar",
      macros: "510 kcal · 50P / 18F / 38C",
      assembly: "Open, drain, mix in one bowl. 3 minutes.",
    },
    dinner: {
      name: "Eggs + chickpeas plate",
      ingredients: "3 hard-boiled eggs (batch-boiled Sunday) + ½ can chickpeas + pre-washed spinach + olive oil + salt. Microwave chickpeas 1 min if you want them warm.",
      macros: "430 kcal · 30P / 24F / 28C",
      assembly: "Assemble cold or warm chickpeas. 3 minutes.",
    },
  },
  {
    day: "Tuesday",
    breakfast: {
      name: "Cottage cheese bowl",
      ingredients: "1 large cottage cheese pot (250g) + 1 apple chopped + 30g oats stirred in + cinnamon",
      macros: "470 kcal · 40P / 12F / 48C",
      assembly: "Stir, eat. 2 minutes.",
    },
    lunch: {
      name: "Chicken rice pouch bowl",
      ingredients: "150g pre-cooked chicken (batch Sunday, or store rotisserie) + 1 microwave rice pouch (½ used, ~125g) + pre-washed salad + olive oil + soy sauce",
      macros: "540 kcal · 55P / 18F / 40C",
      assembly: "Microwave rice 2 min, assemble. 4 minutes.",
    },
    dinner: {
      name: "Mackerel + bean salad",
      ingredients: "1 can mackerel fillets + ½ can white beans (rinsed) + cucumber + cherry tomatoes + olive oil + lemon",
      macros: "470 kcal · 38P / 26F / 22C",
      assembly: "Open, drain, mix. 3 minutes.",
    },
  },
  {
    day: "Wednesday",
    breakfast: {
      name: "Yogurt + oats jar",
      ingredients: "1 large skyr pot (300g) + 40g oats + frozen berries + nuts",
      macros: "540 kcal · 48P / 13F / 55C",
      assembly: "Stir, eat. 1 minute.",
    },
    lunch: {
      name: "Tuna chickpea bowl",
      ingredients: "1 can tuna (drained) + ½ can chickpeas (rinsed) + pre-washed salad + ½ avocado + olive oil + lemon",
      macros: "540 kcal · 48P / 24F / 32C",
      assembly: "Open, drain, mix. 3 minutes.",
    },
    dinner: {
      name: "Chicken + lentils plate",
      ingredients: "150g pre-cooked chicken + ½ can lentils (rinsed) + pre-washed spinach + olive oil + mustard dressing",
      macros: "440 kcal · 55P / 16F / 26C",
      assembly: "Assemble cold, or microwave 1 min. 3 minutes.",
    },
  },
  {
    day: "Thursday",
    breakfast: {
      name: "Egg + yogurt plate",
      ingredients: "2 hard-boiled eggs + 1 small skyr pot (150g) + 1 fruit + 30g oats handful",
      macros: "470 kcal · 38P / 18F / 38C",
      assembly: "No prep, just plate. 2 minutes.",
    },
    lunch: {
      name: "Mackerel rice bowl",
      ingredients: "1 can mackerel + ½ microwave rice pouch + pre-washed salad + olive oil + lemon",
      macros: "550 kcal · 38P / 26F / 38C",
      assembly: "Microwave rice 2 min, assemble. 4 minutes.",
    },
    dinner: {
      name: "Chickpea + egg salad",
      ingredients: "3 hard-boiled eggs + ½ can chickpeas + cucumber + tomato + olive oil + salt",
      macros: "440 kcal · 32P / 24F / 30C",
      assembly: "Assemble cold. 3 minutes.",
    },
  },
  {
    day: "Friday",
    breakfast: {
      name: "Overnight oats jar",
      ingredients: "40g oats + 1 large skyr pot (300g) + frozen berries — stir together Thursday night, grab Friday morning",
      macros: "540 kcal · 48P / 13F / 55C",
      assembly: "Prepped night before. 0 min in morning.",
    },
    lunch: {
      name: "Tuna lentil bowl",
      ingredients: "1 can tuna (drained) + ½ can lentils (rinsed) + pre-washed salad + cherry tomatoes + olive oil + vinegar",
      macros: "510 kcal · 50P / 18F / 38C",
      assembly: "Open, drain, mix. 3 minutes.",
    },
    dinner: {
      name: "Chicken + white beans",
      ingredients: "150g pre-cooked chicken + ½ can white beans (rinsed) + pre-washed spinach + olive oil + lemon",
      macros: "450 kcal · 55P / 16F / 28C",
      assembly: "Assemble cold or warm. 3 minutes.",
    },
  },
  {
    day: "Saturday",
    breakfast: {
      name: "Cottage cheese bowl",
      ingredients: "1 large cottage cheese pot (250g) + 1 banana + 30g oats + cinnamon + nuts",
      macros: "510 kcal · 40P / 16F / 50C",
      assembly: "Stir, eat. 2 minutes.",
    },
    lunch: {
      name: "Egg + chickpea bowl",
      ingredients: "3 hard-boiled eggs + ½ can chickpeas + ½ avocado + pre-washed salad + olive oil + lemon",
      macros: "510 kcal · 30P / 30F / 30C",
      assembly: "Assemble cold. 3 minutes.",
    },
    dinner: {
      name: "Tuna bean salad",
      ingredients: "1 can tuna (drained) + ½ can white beans + cucumber + tomato + olive oil + lemon",
      macros: "440 kcal · 48P / 14F / 30C",
      assembly: "Open, drain, mix. 3 minutes.",
    },
  },
  {
    day: "Sunday",
    breakfast: {
      name: "Yogurt + oats jar",
      ingredients: "1 large skyr pot (300g) + 40g oats + frozen berries + nuts",
      macros: "540 kcal · 48P / 13F / 55C",
      assembly: "Stir, eat. 1 minute.",
    },
    lunch: {
      name: "Mackerel chickpea bowl",
      ingredients: "1 can mackerel + ½ can chickpeas (rinsed) + pre-washed salad + olive oil + lemon",
      macros: "520 kcal · 38P / 26F / 30C",
      assembly: "Open, drain, mix. 3 minutes.",
    },
    dinner: {
      name: "Chicken + lentils plate",
      ingredients: "150g pre-cooked chicken + ½ can lentils + pre-washed spinach + olive oil + mustard dressing",
      macros: "440 kcal · 55P / 16F / 26C",
      assembly: "Assemble. 3 minutes. (Cook next week's chicken now — see batch note.)",
    },
  },
];

// The single weekly cooking task — 20 minutes, Sunday.
export const BATCH_PREP = [
  { task: "Boil 12 eggs", detail: "One pot, 10 min boil, cool, store in fridge. Covers all the egg meals for the week.", time: "12 min (mostly hands-off)" },
  { task: "Cook chicken", detail: "Either: (a) buy 1 store rotisserie chicken and shred it, OR (b) bake 600g chicken breast at 200°C for 25 min, slice, store. Covers all chicken meals.", time: "5 min hands-on" },
  { task: "Stock check", detail: "Make sure you have 7+ cans (tuna/mackerel), 4+ cans pre-cooked lentils/chickpeas/white beans, yogurt/cottage cheese pots, pre-washed salad bags, microwave rice pouches.", time: "3 min" },
];
