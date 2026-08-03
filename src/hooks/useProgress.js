import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";
import { useLessons } from "./useLessons";

/**
 * Combine ProgressContext + liste des leçons pour exposer un pourcentage
 * de complétion global, pratique pour la Home et le Sidebar.
 */
export function useProgress() {
  const ctx = useContext(ProgressContext);
  const { lessons } = useLessons();

  const total = lessons.length;
  const done = lessons.filter((l) => ctx.isCompleted(l.id)).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return { ...ctx, total, done, percent };
}
