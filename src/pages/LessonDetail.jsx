import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { useLessons } from "../hooks/useLessons";
import { useProgress } from "../hooks/useProgress";
import LessonContent from "../components/lesson/LessonContent";
import Button from "../components/common/Button";
import "./LessonDetail.css";

export default function LessonDetail() {
  const { lessonId } = useParams();
  const { t } = useContext(LanguageContext);
  const { getById, getNext, getPrevious } = useLessons();
  const { isCompleted, markCompleted } = useProgress();

  const lesson = getById(lessonId);

  if (!lesson) {
    return (
      <div className="lesson-missing">
        <p>{t("lessonDetail.notFound")}</p>
        <Button as="a" href="/lessons" variant="secondary">{t("lessonDetail.back")}</Button>
      </div>
    );
  }

  const previous = getPrevious(lesson.id);
  const next = getNext(lesson.id);
  const done = isCompleted(lesson.id);

  return (
    <div className="lesson-detail">
      <Link to="/lessons" className="lesson-detail__back">← {t("lessonDetail.back")}</Link>

      <LessonContent lesson={lesson} />

      <div className="lesson-detail__complete">
        <Button
          variant={done ? "secondary" : "primary"}
          onClick={() => markCompleted(lesson.id)}
          disabled={done}
        >
          {done ? `${t("lessonDetail.done")} ✓` : t("lessonDetail.markDone")}
        </Button>
      </div>

      <nav className="lesson-detail__pager" aria-label="Navigation entre leçons">
        {previous ? (
          <Link to={`/lessons/${previous.id}`} className="lesson-detail__pager-link lesson-detail__pager-link--prev">
            <span className="lesson-detail__pager-label">← {t("lessonDetail.previous")}</span>
            <span className="lesson-detail__pager-title">{previous.title}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/lessons/${next.id}`} className="lesson-detail__pager-link lesson-detail__pager-link--next">
            <span className="lesson-detail__pager-label">{t("lessonDetail.next")} →</span>
            <span className="lesson-detail__pager-title">{next.title}</span>
          </Link>
        ) : <span />}
      </nav>
    </div>
  );
}
