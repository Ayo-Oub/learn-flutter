import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { EXTERNAL_LINKS } from "../utils/constants";
import "./About.css";

const STACK = [
  { name: "React", href: "https://react.dev" },
  { name: "Vite", href: "https://vitejs.dev" },
  { name: "React Router", href: "https://reactrouter.com" },
  { name: "Flutter", href: EXTERNAL_LINKS.FLUTTER_DOCS },
  { name: "Dart", href: EXTERNAL_LINKS.DART_DOCS },
];

export default function About() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="container about-page">
      <header className="about-page__header">
        <h1>{t("about.title")}</h1>
      </header>

      <section className="about-section">
        <h2>{t("about.missionTitle")}</h2>
        <p>{t("about.mission")}</p>
      </section>

      <section className="about-section">
        <h2>{t("about.stackTitle")}</h2>
        <ul className="about-stack">
          {STACK.map((item) => (
            <li key={item.name}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">{item.name}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h2>{t("about.contactTitle")}</h2>
        <p>{t("about.contactText")}</p>
      </section>
    </div>
  );
}
