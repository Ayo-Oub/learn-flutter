import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useContext(LanguageContext);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">FlutterLearn</p>
        <p className="footer__note">{t("footer.tagline")}</p>
        <p className="footer__copy">© {year} FlutterLearn — {t("footer.rights")}</p>
      </div>
    </footer>
  );
}
