export default {
  id: "edge-insets",
  order: 13,
  category: "styling",
  duration: "10 min",
  title: "EdgeInsets",
  tagline: "Marges et espacement",
  docsUrl: "https://api.flutter.dev/flutter/painting/EdgeInsets-class.html",
  summary: "Décrit un espacement (padding ou margin) autour ou à l'intérieur d'un widget.",
  blocks: [
    {
      type: "text",
      content:
        "EdgeInsets est utilisé pour les propriétés padding et margin. Plusieurs constructeurs pratiques existent : EdgeInsets.all(), .symmetric(), .only(), pour éviter de répéter les quatre valeurs à chaque fois.",
    },
    { type: "heading", content: "Les constructeurs les plus utiles" },
    {
      type: "text",
      content:
        "EdgeInsets.symmetric(horizontal: ..., vertical: ...) est très courant pour un espacement différent selon l'axe ; EdgeInsets.only(top: ...) cible un seul côté.",
    },
    {
      type: "code",
      title: "edge_insets_example.dart",
      language: "dart",
      code:
        "Padding(\n  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),\n  child: const Text('Texte avec marges'),\n)\n",
    },
    { type: "heading", content: "Cibler un seul côté avec only" },
    {
      type: "text",
      content:
        "EdgeInsets.only(top: ..., left: ...) permet de ne définir que les côtés réellement nécessaires, les autres restant à zéro — plus explicite que symmetric quand l'espacement n'est pas symétrique.",
    },
    {
      type: "code",
      title: "edge_insets_only.dart",
      language: "dart",
      code:
        "Padding(\n  padding: const EdgeInsets.only(top: 24, left: 16, right: 16),\n  child: const Text('Espacement asymétrique'),\n)\n",
    },
    { type: "heading", content: "S'adapter aux zones sécurisées" },
    {
      type: "text",
      content:
        "Sur certains appareils (encoche, barre de gestes), il faut parfois tenir compte de la zone sécurisée. SafeArea enveloppe un widget et ajoute automatiquement le padding nécessaire ; pour un contrôle plus fin, MediaQuery.of(context).padding donne directement ces valeurs à combiner avec ton propre EdgeInsets.",
    },
  ],
};
