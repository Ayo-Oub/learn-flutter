export default {
  id: "row",
  order: 4,
  category: "layout",
  duration: "12 min",
  title: "Row",
  tagline: "Alignement horizontal",
  docsUrl: "https://api.flutter.dev/flutter/widgets/Row-class.html",
  summary:
    "Aligne une liste de widgets enfants côte à côte, horizontalement.",
  blocks: [
    {
      type: "text",
      content:
        "Row range ses enfants sur un axe horizontal. Elle est indispensable dès qu'on veut placer plusieurs widgets sur la même ligne — une icône suivie d'un texte, par exemple.",
    },
    { type: "heading", content: "Contrôler l'alignement" },
    {
      type: "text",
      content:
        "mainAxisAlignment contrôle la répartition sur l'axe horizontal (start, center, spaceBetween...), tandis que crossAxisAlignment contrôle l'alignement vertical des enfants.",
    },
    {
      type: "code",
      title: "row_example.dart",
      language: "dart",
      code:
        "Row(\n  mainAxisAlignment: MainAxisAlignment.spaceBetween,\n  children: const [\n    Icon(Icons.star),\n    Text('4.8'),\n    Icon(Icons.favorite_border),\n  ],\n)\n",
    },
    { type: "heading", content: "Répartir l'espace avec Expanded et Flexible" },
    {
      type: "text",
      content:
        "Par défaut, une Row ne prend que la largeur nécessaire à ses enfants. Pour répartir l'espace restant, on enveloppe un ou plusieurs enfants dans Expanded (qui occupe toute la portion disponible) ou Flexible (qui peut s'adapter sans forcément tout occuper). C'est indispensable dès qu'un enfant doit s'étirer, comme un champ de recherche à côté d'un bouton fixe.",
    },
    {
      type: "code",
      title: "row_expanded.dart",
      language: "dart",
      code:
        "Row(\n  children: [\n    Expanded(\n      child: TextField(\n        decoration: const InputDecoration(hintText: 'Rechercher...'),\n      ),\n    ),\n    const SizedBox(width: 8),\n    ElevatedButton(onPressed: () {}, child: const Text('OK')),\n  ],\n)\n",
    },
    { type: "heading", content: "Éviter le débordement horizontal" },
    {
      type: "text",
      content:
        "Comme Column, Row ne défile pas et affiche un avertissement si ses enfants dépassent la largeur disponible. Pour une liste horizontale scrollable (une rangée de vignettes, par exemple), on utilise plutôt un ListView avec scrollDirection: Axis.horizontal.",
    },
  ],
};
