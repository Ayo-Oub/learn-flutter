# FlutterLearn

Catalogue interactif pour apprendre les widgets **Flutter** et **Dart** :
une fiche détaillée par widget (explications, exemples de code, lien vers la
documentation officielle) et suivi de progression — en français, anglais et
arabe (avec support RTL).

## Stack technique

- [React 18](https://react.dev) + [Vite 5](https://vitejs.dev)
- [React Router 6](https://reactrouter.com) (routes imbriquées avec layouts)
- CSS "vanilla" (design tokens dans `src/styles/variables.css`, pas de framework)
- Aucune dépendance de state management externe : Context API + `localStorage`

## Démarrer le projet

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:5173.

```bash
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build de production
```

## Structure du projet

```
src/
├── components/
│   ├── common/     # Navbar, Footer, Sidebar, Button, Loader
│   ├── lesson/      # LessonCard, LessonContent, CodeBlock
│   └── layout/      # MainLayout (navbar+footer), LessonLayout (navbar+sommaire)
├── pages/           # Home, Lessons, LessonDetail, About, NotFound
├── data/
│   └── lessons/     # une fiche widget = un fichier (scaffold.js, appbar.js, ...)
├── context/         # LanguageContext (i18n + RTL), ProgressContext (progression)
├── hooks/           # useLessons, useProgress
├── locales/         # fr.json, en.json, ar.json
├── utils/           # constants.js, helpers.js
├── router/          # AppRouter.jsx
├── styles/          # variables.css (design tokens), global.css
├── App.jsx
└── main.jsx
```

## Ajouter un widget au catalogue

1. Crée `src/data/lessons/mon-widget.js` sur le modèle des fiches existantes :

   ```js
   export default {
     id: "mon-widget",
     order: 15,
     category: "layout" | "basics" | "styling", // détermine la couleur du badge
     duration: "10 min",
     title: "MonWidget",
     tagline: "Description courte affichée en bleu sur la carte",
     docsUrl: "https://api.flutter.dev/flutter/widgets/MonWidget-class.html",
     links: [
       // optionnel — liens complémentaires affichés à côté de docsUrl
       { label: "Tutoriel vidéo", url: "https://..." },
       { label: "Article détaillé", url: "https://..." },
     ],
     summary: "Résumé en une phrase, affiché sur la carte et en haut de la fiche.",
     blocks: [
       { type: "text", content: "..." },
       { type: "heading", content: "..." },
       { type: "code", title: "fichier.dart", language: "dart", code: "..." },
       { type: "source", title: "Nom de la source", code: "https://..." }, // lien externe (article, vidéo...)
     ],
   };
   ```

   `docsUrl` et `links` sont tous les deux optionnels. Si tu ne renseignes que
   `docsUrl`, seul le lien vers la doc officielle apparaît. Si tu ajoutes des
   entrées à `links`, elles s'affichent juste à côté, chacune ouvrant un
   nouvel onglet.

2. Ajoute-la dans `src/data/lessons/index.js` (import + tableau `lessons`).

Le sommaire (`Sidebar`), le catalogue filtrable (`Lessons`), la Home et la
navigation précédent/suivant se mettent à jour automatiquement — aucun autre
fichier à toucher. Les 3 catégories (`layout`, `basics`, `styling`) et leurs
couleurs sont définies dans `src/utils/constants.js` (`CATEGORIES`) ; ajoute
une nouvelle catégorie là si besoin, puis un token de couleur assorti dans
`src/styles/variables.css`.

## Ajouter une langue

1. Crée `src/locales/xx.json` en copiant `fr.json` et en traduisant chaque clé.
2. Dans `src/context/LanguageContext.jsx`, importe le fichier et ajoute-le à
   l'objet `DICTIONARIES`. Si la langue s'écrit de droite à gauche, ajoute son
   code à `RTL_LANGS`.

Le contenu des leçons (`data/lessons/*.js`) reste pour l'instant rédigé en
français ; c'est un axe naturel d'extension (titres/résumés déjà prêts à être
transformés en objets `{ fr, en, ar }` si besoin).

## Progression utilisateur

`ProgressContext` stocke les leçons terminées dans `localStorage`
(`flutter-learn:progress`). Une leçon est marquée comme terminée manuellement,
via le bouton "Marquer comme terminée" sur sa fiche.

## Assets

Le logo (`public/assets/images/logo.svg`) sert aussi de favicon ; `logo.png`
et `favicon.ico` sont générés depuis ce SVG. Remplace-les par ta propre
identité visuelle si besoin.
