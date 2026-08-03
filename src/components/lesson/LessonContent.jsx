import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { CATEGORIES } from "../../utils/constants";
import CodeBlock from "./CodeBlock";
import "./LessonContent.css";

/**
 * Rend le contenu structuré d'une fiche widget (lesson.blocks[]).
 * Types de bloc supportés : "text" | "heading" | "code" | "image"
 * Champs optionnels : docsUrl (lien doc officielle), links[] ({ label, url })
 */
export default function LessonContent({ lesson }) {
  const { t, lang } = useContext(LanguageContext);
  const category = CATEGORIES[lesson.category];
  const categoryLabel = category ? category[lang] || category.fr : null;

  return (
    <article className="lesson-content">
      <header className="lesson-content__header">
        <p className="lesson-content__eyebrow">
          {categoryLabel || `${t("nav.lessons")} ${String(lesson.order).padStart(2, "0")}`}
          {lesson.duration ? ` · ${lesson.duration}` : ""}
        </p>
        <h1>{lesson.title}</h1>
        <p className="lesson-content__summary">{lesson.summary}</p>
        {(lesson.docsUrl || (lesson.links && lesson.links.length > 0)) && (
          <div className="lesson-content__links">
            {lesson.docsUrl && (
              <a
                className="lesson-content__link lesson-content__link--primary"
                href={lesson.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("lessonDetail.officialDocs")}
                <span aria-hidden="true"> ↗</span>
              </a>
            )}
            {lesson.links?.map((link, i) => (
              <a
                key={i}
                className="lesson-content__link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            ))}
          </div>
        )}
      </header>

      {lesson.blocks.map((block, i) => {
        switch (block.type) {
          case "text":
            return <p key={i} className="lesson-content__text">{block.content}</p>;
          case "heading":
            return <h2 key={i}>{block.content}</h2>;
          case "code":
            return <CodeBlock key={i} code={block.code} language={block.language} title={block.title} />;
          case "image":
            return (
              <figure key={i} className="lesson-content__figure">
                <img src={block.src} alt={block.alt || ""} />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
