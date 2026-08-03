export default {
  id: "text",
  order: 6,
  category: "basics",
  duration: "10 min",
  title: "Text()",
  tagline: "Afficher du texte",
  docsUrl: "https://api.flutter.dev/flutter/widgets/Text-class.html",
  summary: "Widget simple pour afficher une chaîne de caractères formatée.",
  blocks: [
    {
      type: "text",
      content:
        "Text est probablement le widget le plus utilisé en Flutter : il affiche une chaîne de caractères et se charge de l'essentiel du travail typographique — retour à la ligne automatique, alignement, troncature. Il accepte un objet TextStyle pour contrôler la police, la taille, la couleur, la graisse ou l'espacement des lettres.",
    },
    { type: "heading", content: "Styliser avec TextStyle" },
    {
      type: "text",
      content:
        "La propriété style attend un TextStyle, un simple objet Dart qui regroupe fontSize, fontWeight, color, fontStyle, letterSpacing, height (interligne) et bien d'autres. Comme c'est un objet réutilisable, on le déclare souvent une seule fois en constante pour garder une typographie cohérente dans toute l'application.",
    },
    {
      type: "code",
      title: "text_style.dart",
      language: "dart",
      code:
        "const heading = TextStyle(\n  fontSize: 24,\n  fontWeight: FontWeight.bold,\n  color: Colors.indigo,\n  letterSpacing: 0.4,\n);\n\nconst Text('Titre stylisé', style: heading)\n",
    },
    { type: "heading", content: "Aligner et espacer le texte" },
    {
      type: "text",
      content:
        "textAlign contrôle l'alignement horizontal du texte à l'intérieur de l'espace qui lui est alloué (start, center, end, justify...). C'est différent de la position du widget Text lui-même dans son parent, qui dépend plutôt du widget englobant (Center, Align, Column avec crossAxisAlignment, etc.).",
    },
    {
      type: "code",
      title: "text_align.dart",
      language: "dart",
      code:
        "const Text(\n  'Ce texte est centré, même sur plusieurs lignes.',\n  textAlign: TextAlign.center,\n)\n",
    },
    { type: "heading", content: "Gérer les longs textes" },
    {
      type: "text",
      content:
        "Les propriétés maxLines et overflow permettent de tronquer proprement un texte trop long, par exemple avec des points de suspension (TextOverflow.ellipsis). Sans ces propriétés, un texte trop long provoque un débordement visuel — les fameuses bandes jaunes et noires en mode debug.",
    },
    {
      type: "code",
      title: "text_example.dart",
      language: "dart",
      code:
        "const Text(\n  'Bonjour Flutter !',\n  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w600),\n  maxLines: 1,\n  overflow: TextOverflow.ellipsis,\n)\n",
    },
    { type: "heading", content: "Texte enrichi avec Text.rich" },
    {
      type: "text",
      content:
        "Quand un même bloc de texte doit mélanger plusieurs styles — un mot en gras au milieu d'une phrase, par exemple — Text.rich accepte un TextSpan qui peut lui-même contenir des enfants TextSpan avec des styles différents, sans avoir à empiler plusieurs widgets Text.",
    },
    {
      type: "code",
      title: "text_rich.dart",
      language: "dart",
      code:
        "Text.rich(\n  TextSpan(\n    text: 'Bienvenue sur ',\n    style: const TextStyle(color: Colors.black87),\n    children: const [\n      TextSpan(\n        text: 'FlutterLearn',\n        style: TextStyle(fontWeight: FontWeight.bold, color: Colors.indigo),\n      ),\n      TextSpan(text: ' !'),\n    ],\n  ),\n)\n",
    },
  ],
};
