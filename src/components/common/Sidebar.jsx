import { NavLink } from "react-router-dom";
import "./Sidebar.css";

/**
 * Sidebar de navigation entre leçons, utilisée par LessonLayout.
 * lessons: [{ id, title, order }]
 * completedIds: Set des ids complétés (progression utilisateur)
 */
export default function Sidebar({ lessons = [], completedIds = new Set() }) {
  return (
    <aside className="sidebar" aria-label="Sommaire des leçons">
      <p className="sidebar__title">Sommaire</p>
      <ol className="sidebar__list">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <NavLink
              to={`/lessons/${lesson.id}`}
              className={({ isActive }) =>
                "sidebar__item" + (isActive ? " sidebar__item--active" : "")
              }
            >
              <span
                className={
                  "sidebar__dot" +
                  (completedIds.has(lesson.id) ? " sidebar__dot--done" : "")
                }
              />
              {lesson.title}
            </NavLink>
          </li>
        ))}
      </ol>
    </aside>
  );
}
