import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import { useLessons } from "../../hooks/useLessons";
import { useProgress } from "../../hooks/useProgress";
import "./LessonLayout.css";

/** Layout à deux colonnes pour les pages de leçon (sommaire + contenu). */
export default function LessonLayout() {
  const { lessons } = useLessons();
  const { completedIds } = useProgress();

  return (
    <div className="app-shell">
      <Navbar />
      <div className="lesson-layout">
        <Sidebar lessons={lessons} completedIds={completedIds} />
        <div className="lesson-layout__content container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
