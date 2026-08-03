import { useMemo } from "react";
import { lessons } from "../data/lessons";

/**
 * Donne accès à la liste des leçons (triées) et à des helpers de lookup.
 */
export function useLessons() {
  const sorted = useMemo(() => [...lessons].sort((a, b) => a.order - b.order), []);

  const getById = (id) => sorted.find((lesson) => lesson.id === id);

  const getNext = (id) => {
    const index = sorted.findIndex((lesson) => lesson.id === id);
    return index >= 0 ? sorted[index + 1] : undefined;
  };

  const getPrevious = (id) => {
    const index = sorted.findIndex((lesson) => lesson.id === id);
    return index > 0 ? sorted[index - 1] : undefined;
  };

  return { lessons: sorted, getById, getNext, getPrevious };
}
