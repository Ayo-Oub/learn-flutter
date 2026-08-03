import { useContext, useMemo, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useLessons } from "../hooks/useLessons";
import { useProgress } from "../hooks/useProgress";
import { CATEGORIES } from "../utils/constants";
import LessonCard from "../components/lesson/LessonCard";
import "./Lessons.css";

const CATEGORY_KEYS = Object.keys(CATEGORIES); // ["layout", "basics", "styling"]

export default function Lessons() {
  const { t, lang } = useContext(LanguageContext);
  const { lessons } = useLessons();
  const { isCompleted } = useProgress();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const byCategory = filter === "all" ? lessons : lessons.filter((l) => l.category === filter);
    const q = query.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter((l) =>
      [l.title, l.tagline, l.summary].filter(Boolean).some((field) => field.toLowerCase().includes(q))
    );
  }, [lessons, filter, query]);

  return (
    <div className="container lessons-page">
      <header className="lessons-page__header">
        <h1>{t("lessons.title")}</h1>
        <p>{t("lessons.subtitle")}</p>
      </header>

      <div className="catalog-toolbar">
        <div className="catalog-search">
          <svg className="catalog-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("catalog.searchPlaceholder")}
            aria-label={t("catalog.searchPlaceholder")}
          />
        </div>

        <div className="catalog-filters" role="tablist" aria-label={t("lessons.title")}>
          <button
            type="button"
            className={"filter-pill" + (filter === "all" ? " filter-pill--active" : "")}
            onClick={() => setFilter("all")}
            aria-pressed={filter === "all"}
          >
            {t("catalog.filterAll")}
          </button>
          {CATEGORY_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              className={"filter-pill" + (filter === key ? " filter-pill--active" : "")}
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
            >
              {CATEGORIES[key][lang] || CATEGORIES[key].fr}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="lessons-page__grid">
          {filtered.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} completed={isCompleted(lesson.id)} />
          ))}
        </div>
      ) : (
        <p className="catalog-empty">{t("catalog.empty")}</p>
      )}
    </div>
  );
}
