export const APP_NAME = "FlutterLearn";

export const ROUTES = {
  HOME: "/",
  LESSONS: "/lessons",
  LESSON_DETAIL: (id) => `/lessons/${id}`,
  ABOUT: "/about",
};

/**
 * Catégories du catalogue de widgets (page Lessons). Chaque catégorie est
 * reliée à une couleur de badge définie dans variables.css :
 * layout -> --color-sky, basics -> --color-green, styling -> --color-violet
 */
export const CATEGORIES = {
  layout: { fr: "Structure et disposition", en: "Layout & structure", ar: "البنية والتخطيط" },
  basics: { fr: "Éléments de base", en: "Basic elements", ar: "العناصر الأساسية" },
  styling: { fr: "Design et style", en: "Design & styling", ar: "التصميم والمظهر" },
};

export const EXTERNAL_LINKS = {
  FLUTTER_DOCS: "https://docs.flutter.dev",
  DART_DOCS: "https://dart.dev/guides",
  GITHUB: "https://github.com",
};

export const LANGUAGE_LABELS = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};
