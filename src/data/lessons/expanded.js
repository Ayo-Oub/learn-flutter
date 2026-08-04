export default {
  id: "expanded",
  order: 15,
  category: "layout",
  duration: "12 min",
  title: "Expanded",
  tagline: "Occuper l'espace restant",
  docsUrl: "https://api.flutter.dev/flutter/widgets/Expanded-class.html",
  summary:
    "Force son enfant à occuper l'espace disponible restant dans une Row, une Column ou un Flex.",
  blocks: [
    {
      type: "text",
      content:
        "Expanded ne fonctionne qu'à l'intérieur d'une Row, une Column ou plus généralement un Flex. Il indique à son enfant de s'étirer pour occuper tout l'espace restant sur l'axe principal, une fois que les autres enfants non flexibles ont pris la place dont ils ont besoin.",
    },
    { type: "heading", content: "Un seul Expanded pour remplir l'espace" },
    {
      type: "text",
      content:
        "Le cas le plus courant : un widget de taille fixe (une icône, un bouton) à côté d'un champ qui doit s'étirer pour occuper tout le reste de la largeur disponible. Sans Expanded, ce champ ne prendrait que la largeur nécessaire à son contenu.",
    },
    {
      type: "code",
      title: "expanded_example.dart",
      language: "dart",
      code: "Row(\n  children: [\n    const Icon(Icons.search),\n    const SizedBox(width: 8),\n    Expanded(\n      child: TextField(\n        decoration: const InputDecoration(hintText: 'Rechercher...'),\n      ),\n    ),\n  ],\n)\n",
    },
    { type: "heading", content: "Répartir l'espace avec flex" },
    {
      type: "text",
      content:
        "La propriété flex (par défaut 1) permet de répartir l'espace disponible proportionnellement entre plusieurs Expanded placés dans le même parent. Un Expanded avec flex: 2 occupe deux fois plus d'espace restant qu'un Expanded avec flex: 1 juste à côté.",
    },
    {
      type: "code",
      title: "expanded_flex_ratio.dart",
      language: "dart",
      code: "Row(\n  children: [\n    Expanded(\n      flex: 2,\n      child: Container(height: 60, color: Colors.indigo),\n    ),\n    const SizedBox(width: 8),\n    Expanded(\n      flex: 1,\n      child: Container(height: 60, color: Colors.amber),\n    ),\n  ],\n)\n",
    },
    { type: "heading", content: "Expanded vs Flexible" },
    {
      type: "text",
      content:
        "Expanded force son enfant à remplir tout l'espace qui lui est attribué — c'est en réalité un raccourci pour Flexible avec fit: FlexFit.tight. Flexible, par défaut (FlexFit.loose), laisse l'enfant décider de sa propre taille jusqu'à cette limite maximale, sans être obligé de la remplir entièrement. Utilise Flexible quand tu veux juste borner la taille d'un enfant sans forcément l'étirer.",
    },
    {
      type: "code",
      title: "expanded_vs_flexible.dart",
      language: "dart",
      code: "Row(\n  children: [\n    // Occupe tout l'espace qui lui est attribué\n    Expanded(child: Container(height: 40, color: Colors.indigo)),\n    // Ne prend que la taille de son enfant, dans la limite de l'espace restant\n    Flexible(child: Container(width: 60, height: 40, color: Colors.amber)),\n  ],\n)\n",
    },
    {
      type: "text",
      content: "Autres sources d'information",
    },
    {
      type: "source",
      title: "Claude - Expanded",
      language: "dart",
      code: "https://claude.ai/share/64f30347-8116-4055-9baa-538ade12fd54",
    },
    {
      type: "source",
      title: "ChatGPT - Expanded",
      language: "dart",
      code: "https://chatgpt.com/s/t_6a707bf5fbc481919454d1791946e220",
    },
    {
      type: "source",
      title: "YouTube - Expanded",
      language: "dart",
      code: "https://www.youtube.com/watch?v=aHT7HF8sV14",
    },
  ],
};
