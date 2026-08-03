import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Button from "./Button";
import "./Navbar.css";

export default function Navbar() {
  const { t, lang, setLang, availableLanguages } = useContext(LanguageContext);

  const navLink = ({ isActive }) => "navbar__link" + (isActive ? " navbar__link--active" : "");

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand">
          <span className="navbar__brand-mark">{"</>"}</span>
          Flutter<span className="navbar__brand-accent">Learn</span>
        </NavLink>

        <nav className="navbar__links" aria-label="Navigation principale">
          <NavLink to="/lessons" className={navLink}>{t("nav.lessons")}</NavLink>
          <NavLink to="/about" className={navLink}>{t("nav.about")}</NavLink>
        </nav>

        <div className="navbar__actions">
          <select
            className="navbar__lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label={t("nav.language")}
          >
            {availableLanguages.map((code) => (
              <option key={code} value={code}>{code.toUpperCase()}</option>
            ))}
          </select>
          <Button as="a" href="/lessons" size="sm">{t("nav.start")}</Button>
        </div>
      </div>
    </header>
  );
}
