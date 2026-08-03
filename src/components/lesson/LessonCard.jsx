import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { CATEGORIES } from "../../utils/constants";
import "./LessonCard.css";

/**
 * Carte "fiche widget" du catalogue, utilisée dans la page Lessons et
 * l'aperçu de la Home.
 * lesson: { id, title, tagline, summary, category, duration, order }
 */
export default function LessonCard({ lesson, completed = false }) {
  const { t, lang } = useContext(LanguageContext);
  const category = CATEGORIES[lesson.category];
  const categoryLabel = category ? category[lang] || category.fr : lesson.category;

  return (
    <Link to={`/lessons/${lesson.id}`} className="lesson-card">
      <div className="lesson-card__top">
        <span className={`lesson-card__category lesson-card__category--${lesson.category}`}>
          {categoryLabel}
        </span>
        <span className={"lesson-card__status" + (completed ? " lesson-card__status--done" : "")}>
          {completed ? t("catalog.statusDone") : t("catalog.statusTodo")}
        </span>
      </div>

      <h3 className="lesson-card__title">{lesson.title}</h3>
      {lesson.tagline && <p className="lesson-card__tagline">{lesson.tagline}</p>}
      <p className="lesson-card__summary">{lesson.summary}</p>

      <div className="lesson-card__footer">
        <span className="lesson-card__cta">
          {completed ? t("catalog.ctaDone") : t("catalog.cta")}
          <span aria-hidden="true"> →</span>
        </span>
      </div>
    </Link>
  );
}
