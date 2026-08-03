import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Button from "../components/common/Button";
import "./NotFound.css";

export default function NotFound() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="container not-found">
      <p className="not-found__trace">Error: RouteNotFoundException</p>
      <h1 className="not-found__code">{t("notFound.title")}</h1>
      <p className="not-found__message">{t("notFound.message")}</p>
      <Button as="a" href="/">{t("notFound.cta")}</Button>
    </div>
  );
}
