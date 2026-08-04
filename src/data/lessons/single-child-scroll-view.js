export default {
  id: "single-child-scroll-view",
  order: 16,
  category: "layout",
  duration: "10 min",
  title: "SingleChildScrollView",
  tagline: "Rendre un contenu défilable",
  docsUrl: "https://api.flutter.dev/flutter/widgets/SingleChildScrollView-class.html",
  summary:
    "Permet de faire défiler un unique widget enfant quand son contenu dépasse l'espace disponible.",
  blocks: [
    {
      type: "text",
      content:
        "SingleChildScrollView enveloppe un seul enfant (souvent une Column) et lui permet de défiler verticalement — ou horizontalement — dès que son contenu dépasse la taille de l'écran ou de l'espace qui lui est alloué.",
    },
    { type: "heading", content: "Pourquoi pas juste une Column ?" },
    {
      type: "text",
      content:
        "Une Column ne défile jamais par elle-même : si ses enfants dépassent l'espace disponible (un formulaire un peu long, par exemple), Flutter affiche un avertissement de débordement au lieu de faire défiler le contenu. Il suffit d'envelopper cette Column dans un SingleChildScrollView pour résoudre le problème, sans changer le reste de la mise en page.",
    },
    {
      type: "code",
      title: "single_child_scroll_view_example.dart",
      language: "dart",
      code:
        "SingleChildScrollView(\n  padding: const EdgeInsets.all(16),\n  child: Column(\n    crossAxisAlignment: CrossAxisAlignment.start,\n    children: const [\n      Text('Formulaire'),\n      SizedBox(height: 16),\n      TextField(decoration: InputDecoration(labelText: 'Nom')),\n      SizedBox(height: 16),\n      TextField(decoration: InputDecoration(labelText: 'Email')),\n      SizedBox(height: 400), // contenu volontairement long\n    ],\n  ),\n)\n",
    },
    { type: "heading", content: "Défiler horizontalement" },
    {
      type: "text",
      content:
        "La propriété scrollDirection accepte Axis.horizontal pour faire défiler le contenu de gauche à droite plutôt que de haut en bas — utile pour une rangée de vignettes ou de filtres qui ne tiennent pas toutes à l'écran.",
    },
    {
      type: "code",
      title: "single_child_scroll_view_horizontal.dart",
      language: "dart",
      code:
        "SingleChildScrollView(\n  scrollDirection: Axis.horizontal,\n  child: Row(\n    children: List.generate(\n      10,\n      (i) => Container(\n        width: 80,\n        height: 80,\n        margin: const EdgeInsets.only(right: 8),\n        color: Colors.indigo.shade100,\n        alignment: Alignment.center,\n        child: Text('Item $i'),\n      ),\n    ),\n  ),\n)\n",
    },
    { type: "heading", content: "SingleChildScrollView ou ListView ?" },
    {
      type: "text",
      content:
        "SingleChildScrollView construit tous ses enfants d'un coup, même ceux qui ne sont pas encore visibles à l'écran. C'est parfait pour un contenu de taille raisonnable (un formulaire, une page de détails), mais pénalisant pour une très longue liste. Dès que le contenu devient long ou dynamique (des centaines d'éléments), ListView.builder est préférable : il ne construit que les éléments visibles à l'écran, au fur et à mesure du défilement.",
    },
  ],
};
