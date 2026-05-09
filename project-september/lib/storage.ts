"use client";

import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initial: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) setValue(JSON.parse(item));
    } catch (e) {
      console.error(e);
    }
    setHydrated(true);
  }, [key]);

  const update = (v: T) => {
    setValue(v);
    try {
      window.localStorage.setItem(key, JSON.stringify(v));
    } catch (e) {
      console.error(e);
    }
  };

  return [hydrated ? value : initial, update];
}

export function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function daysFromStart(startISO: string): number {
  const start = new Date(startISO);
  const now = new Date();
  return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

export function daysUntil(endISO: string): number {
  const end = new Date(endISO);
  const now = new Date();
  return Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export type DailyEntry = {
  date: string;
  caloriesHit: boolean;
  caloriesActual: number | null;
  proteinHit: boolean;
  proteinActual: number | null;
  trainingDone: boolean;
  trainingNote: string;
  stepsHit: boolean;
  stepsActual: number | null;
  sleepHit: boolean;
  sleepActual: number | null;
  reflection: string;
};

export type WeeklyEntry = {
  date: string;
  weight: number | null;
  waistNavel: number | null;
  waistHip: number | null;
  notes: string;
};

export const blankDaily = (date: string): DailyEntry => ({
  date,
  caloriesHit: false,
  caloriesActual: null,
  proteinHit: false,
  proteinActual: null,
  trainingDone: false,
  trainingNote: "",
  stepsHit: false,
  stepsActual: null,
  sleepHit: false,
  sleepActual: null,
  reflection: "",
});
