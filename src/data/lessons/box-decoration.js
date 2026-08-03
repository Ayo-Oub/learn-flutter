export default {
  id: "box-decoration",
  order: 12,
  category: "styling",
  duration: "14 min",
  title: "BoxDecoration()",
  tagline: "Décoration de boîte",
  docsUrl: "https://api.flutter.dev/flutter/painting/BoxDecoration-class.html",
  summary:
    "Permet de décorer un Container avec des bordures, des arrondis, des ombres, des couleurs ou des dégradés.",
  blocks: [
    {
      type: "text",
      content:
        "BoxDecoration se passe à la propriété decoration d'un Container. Elle regroupe tout ce qui concerne l'apparence visuelle de la boîte : color, border, borderRadius, boxShadow, gradient.",
    },
    { type: "heading", content: "Décoration vs. couleur directe" },
    {
      type: "text",
      content:
        "Attention : on ne peut pas utiliser color et decoration en même temps sur un Container — si tu utilises BoxDecoration, la couleur doit être définie à l'intérieur de celle-ci.",
    },
    {
      type: "code",
      title: "box_decoration_example.dart",
      language: "dart",
      code:
        "Container(\n  padding: const EdgeInsets.all(16),\n  decoration: BoxDecoration(\n    color: Colors.white,\n    borderRadius: BorderRadius.circular(16),\n    boxShadow: [\n      BoxShadow(\n        color: Colors.black.withOpacity(0.08),\n        blurRadius: 12,\n        offset: const Offset(0, 4),\n      ),\n    ],\n  ),\n  child: const Text('Carte avec ombre'),\n)\n",
    },
    { type: "heading", content: "Dégradés avec gradient" },
    {
      type: "text",
      content:
        "La propriété gradient (LinearGradient, RadialGradient ou SweepGradient) permet de faire transitionner plusieurs couleurs dans une même boîte, un effet très utilisé pour les bannières ou les boutons d'action principaux.",
    },
    {
      type: "code",
      title: "box_decoration_gradient.dart",
      language: "dart",
      code:
        "Container(\n  height: 120,\n  decoration: const BoxDecoration(\n    gradient: LinearGradient(\n      colors: [Colors.indigo, Colors.purpleAccent],\n      begin: Alignment.topLeft,\n      end: Alignment.bottomRight,\n    ),\n    borderRadius: BorderRadius.all(Radius.circular(16)),\n  ),\n)\n",
    },
    { type: "heading", content: "Bordures partielles avec Border" },
    {
      type: "text",
      content:
        "Border.all() applique la même bordure sur les 4 côtés, mais Border(top: ..., bottom: ...) permet de ne styliser qu'un ou deux côtés — pratique pour un séparateur discret entre deux sections.",
    },
    {
      type: "code",
      title: "box_decoration_border.dart",
      language: "dart",
      code:
        "Container(\n  decoration: BoxDecoration(\n    border: Border(\n      bottom: BorderSide(color: Colors.grey.shade300, width: 1),\n    ),\n  ),\n  padding: const EdgeInsets.symmetric(vertical: 12),\n  child: const Text('Section avec séparateur'),\n)\n",
    },
  ],
};
