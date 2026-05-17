"use client";

type Tab = { id: string; label: string; numeral: string };

export const TABS: Tab[] = [
  { id: "today", label: "Today", numeral: "I" },
  { id: "biology", label: "Biology", numeral: "II" },
  { id: "nutrition", label: "Nutrition", numeral: "III" },
  { id: "meals", label: "Meal Plan", numeral: "IV" },
  { id: "training", label: "Training", numeral: "V" },
  { id: "routine", label: "Routine", numeral: "VI" },
  { id: "skincare", label: "Skincare", numeral: "VII" },
  { id: "finance", label: "Finance", numeral: "VIII" },
  { id: "tracker", label: "Tracker", numeral: "IX" },
];

export default function Nav({ active, onChange }: { active: string; onChange: (id: string) => void }) {
  return (
    <nav className="relative z-10 sticky top-0 backdrop-blur-md bg-ink-950/85 border-b border-ink-700/70">
      <div className="max-w-7xl mx-auto px-2 md:px-12 overflow-x-auto">
        <ul className="flex gap-0 min-w-max">
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <li key={tab.id}>
                <button
                  onClick={() => onChange(tab.id)}
                  className={`group relative px-4 md:px-5 py-4 transition-colors ${
                    isActive ? "text-gold" : "text-bone-400 hover:text-bone-100"
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className="mono text-[9px] tracking-[0.3em] opacity-70">{tab.numeral}</span>
                    <span className="text-sm font-light mt-0.5">{tab.label}</span>
                  </div>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
