/** Met la première lettre en majuscule. */
export function capitalize(str = "") {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Tronque un texte à `max` caractères, en coupant sur un mot entier. */
export function truncate(str = "", max = 120) {
  if (str.length <= max) return str;
  const cut = str.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

/**
 * Regroupe un tableau d'éléments par la valeur retournée par `keyFn`.
 * Utile par ex. pour grouper les exercices par leçon.
 */
export function groupBy(items, keyFn) {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    (acc[key] ||= []).push(item);
    return acc;
  }, {});
}

/** Nombre de blocs d'un type donné (ex: "code") dans une leçon — sert de proxy à sa richesse. */
export function countBlockTypes(lesson, type) {
  return lesson.blocks.filter((b) => b.type === type).length;
}

/** Slugifie une chaîne (utile si on veut générer des ancres de titres). */
export function slugify(str = "") {
  return str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Classe utilitaire façon `clsx` minimaliste, sans dépendance. */
export function cx(...args) {
  return args.filter(Boolean).join(" ");
}
