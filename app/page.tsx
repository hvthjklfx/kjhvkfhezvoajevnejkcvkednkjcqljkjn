"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import TodayTab from "@/components/TodayTab";
import BiologyTab from "@/components/BiologyTab";
import NutritionTab from "@/components/NutritionTab";
import MealsTab from "@/components/MealsTab";
import TrainingTab from "@/components/TrainingTab";
import RoutineTab from "@/components/RoutineTab";
import SkincareTab from "@/components/SkincareTab";
import FinanceTab from "@/components/FinanceTab";
import TrackerTab from "@/components/TrackerTab";

export default function Home() {
  const [tab, setTab] = useState("today");

  useEffect(() => {
    const stored = window.localStorage.getItem("ps_active_tab");
    if (stored) setTab(stored);
  }, []);

  const handleTabChange = (id: string) => {
    setTab(id);
    window.localStorage.setItem("ps_active_tab", id);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <Nav active={tab} onChange={handleTabChange} />
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
        {tab === "today" && <TodayTab />}
        {tab === "biology" && <BiologyTab />}
        {tab === "nutrition" && <NutritionTab />}
        {tab === "meals" && <MealsTab />}
        {tab === "training" && <TrainingTab />}
        {tab === "routine" && <RoutineTab />}
        {tab === "skincare" && <SkincareTab />}
        {tab === "finance" && <FinanceTab />}
        {tab === "tracker" && <TrackerTab />}
      </main>
      <footer className="relative z-10 border-t border-ink-700/60 mt-16 py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-baseline gap-2">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-bone-400">
            Project September · v1.2
          </p>
          <p className="serif text-sm italic text-bone-400">
            "Discipline is a habit, not a feeling."
          </p>
        </div>
      </footer>
    </div>
  );
}
