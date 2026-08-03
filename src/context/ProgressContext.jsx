import { createContext, useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "flutter-learn:progress";

export const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [completedIds, setCompletedIds] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return new Set(raw ? JSON.parse(raw) : []);
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedIds]));
  }, [completedIds]);

  const markCompleted = useCallback((lessonId) => {
    setCompletedIds((prev) => new Set(prev).add(lessonId));
  }, []);

  const toggleCompleted = useCallback((id) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => setCompletedIds(new Set()), []);

  const isCompleted = useCallback((lessonId) => completedIds.has(lessonId), [completedIds]);

  const value = { completedIds, markCompleted, toggleCompleted, resetProgress, isCompleted };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
