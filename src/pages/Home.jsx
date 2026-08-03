import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { useLessons } from "../hooks/useLessons";
import { CATEGORIES } from "../utils/constants";
import Button from "../components/common/Button";
import LessonCard from "../components/lesson/LessonCard";
import "./Home.css";

const FEATURE_ICONS = {
  interactive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  progressive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 19V10M12 19V5M20 19v-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bilingual: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.2-3.4-8.5S9.8 5.8 12 3.5z" />
    </svg>
  ),
};

export default function Home() {
  const { t } = useContext(LanguageContext);
  const { lessons } = useLessons();
  const preview = Object.keys(CATEGORIES)
    .map((cat) => lessons.find((l) => l.category === cat))
    .filter(Boolean);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="home-hero">
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-hero__eyebrow">{t("home.hero.eyebrow")}</p>
            <h1 className="home-hero__title">{t("home.hero.title")}</h1>
            <p className="home-hero__subtitle">{t("home.hero.subtitle")}</p>

            <div className="home-hero__actions">
              <Button as="a" href={`/lessons/${lessons[0]?.id ?? ""}`}>
                {t("home.hero.ctaPrimary")}
              </Button>
              <Button as="a" href="/lessons" variant="secondary">
                {t("home.hero.ctaSecondary")}
              </Button>
            </div>

            <dl className="home-hero__stats">
              <div>
                <dt>{lessons.length}</dt>
                <dd>{t("home.hero.statLessons")}</dd>
              </div>
              <div>
                <dt>{Object.keys(CATEGORIES).length}</dt>
                <dd>{t("home.hero.statCategories")}</dd>
              </div>
              <div>
                <dt>100%</dt>
                <dd>{t("home.hero.statFree")}</dd>
              </div>
            </dl>
          </div>

          {/* Signature visuelle : l'arbre de widgets, coeur du mental model Flutter */}
          <div className="widget-tree" aria-hidden="true">
            <div className="widget-tree__node widget-tree__node--root">
              <span className="widget-tree__tag">Scaffold</span>
              <div className="widget-tree__children">
                <div className="widget-tree__node">
                  <span className="widget-tree__tag">AppBar</span>
                </div>
                <div className="widget-tree__node">
                  <span className="widget-tree__tag">Body</span>
                  <div className="widget-tree__children">
                    <div className="widget-tree__node">
                      <span className="widget-tree__tag">Column</span>
                      <div className="widget-tree__children">
                        <div className="widget-tree__node widget-tree__node--leaf">
                          <span className="widget-tree__tag">Text</span>
                        </div>
                        <div className="widget-tree__node widget-tree__node--leaf widget-tree__node--active">
                          <span className="widget-tree__tag">ElevatedButton</span>
                          <span className="widget-tree__pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="widget-tree__caption">build()</p>
          </div>
        </div>
      </section>

      {/* ---------- Fonctionnalités ---------- */}
      <section className="home-features">
        <div className="container">
          <h2 className="home-section-title">{t("home.features.title")}</h2>
          <div className="home-features__grid">
            <article className="feature-card">
              <span className="feature-card__icon feature-card__icon--sky">{FEATURE_ICONS.interactive}</span>
              <h3>{t("home.features.interactiveTitle")}</h3>
              <p>{t("home.features.interactiveText")}</p>
            </article>
            <article className="feature-card">
              <span className="feature-card__icon feature-card__icon--amber">{FEATURE_ICONS.progressive}</span>
              <h3>{t("home.features.progressiveTitle")}</h3>
              <p>{t("home.features.progressiveText")}</p>
            </article>
            <article className="feature-card">
              <span className="feature-card__icon feature-card__icon--green">{FEATURE_ICONS.bilingual}</span>
              <h3>{t("home.features.bilingualTitle")}</h3>
              <p>{t("home.features.bilingualText")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Aperçu des leçons ---------- */}
      <section className="home-preview">
        <div className="container">
          <div className="home-preview__header">
            <h2 className="home-section-title">{t("home.preview.title")}</h2>
            <Link to="/lessons" className="home-preview__link">{t("home.preview.cta")} →</Link>
          </div>
          <div className="home-preview__grid">
            {preview.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <h2>{t("home.cta.title")}</h2>
          <p>{t("home.cta.subtitle")}</p>
          <Button as="a" href={`/lessons/${lessons[0]?.id ?? ""}`} size="md">
            {t("home.cta.button")}
          </Button>
        </div>
      </section>
    </>
  );
}
