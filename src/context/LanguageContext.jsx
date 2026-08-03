import { createContext, useEffect, useMemo, useState } from "react";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

const DICTIONARIES = { fr, en, ar };
const RTL_LANGS = new Set(["ar"]);
const STORAGE_KEY = "flutter-learn:lang";

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem(STORAGE_KEY) || "fr");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.has(lang) ? "rtl" : "ltr";
  }, [lang]);

  const t = useMemo(() => {
    const dict = DICTIONARIES[lang] || DICTIONARIES.fr;
    // clé imbriquée façon "nav.lessons"
    return (key) => key.split(".").reduce((acc, part) => acc?.[part], dict) ?? key;
  }, [lang]);

  const value = {
    lang,
    setLang,
    t,
    isRTL: RTL_LANGS.has(lang),
    availableLanguages: Object.keys(DICTIONARIES),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
