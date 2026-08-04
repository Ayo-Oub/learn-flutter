export default {
  id: "list-view",
  order: 18,
  category: "layout",
  duration: "12 min",
  title: "ListView",
  tagline: "Liste défilante simple",
  docsUrl: "https://api.flutter.dev/flutter/widgets/ListView-class.html",
  summary:
    "Widget de liste défilante qui construit tous ses enfants dès l'initialisation, pratique pour un nombre d'éléments limité et connu à l'avance.",
  blocks: [
    {
      type: "text",
      content:
        "ListView est la version « liste » de SingleChildScrollView : il affiche plusieurs enfants les uns après les autres et les fait défiler automatiquement dès qu'ils dépassent l'espace disponible, sans avoir besoin de l'envelopper dans un widget de scroll supplémentaire.",
    },
    { type: "heading", content: "Le constructeur par défaut" },
    {
      type: "text",
      content:
        "Le constructeur ListView(children: [...]) fonctionne comme une Column qui défile : tu lui passes directement la liste de ses enfants. C'est le plus simple à utiliser, mais il construit tous les éléments d'un coup — à réserver aux listes courtes ou de taille fixe.",
    },
    {
      type: "code",
      title: "list_view_example.dart",
      language: "dart",
      code:
        "ListView(\n  padding: const EdgeInsets.all(16),\n  children: const [\n    ListTile(title: Text('Premier élément')),\n    ListTile(title: Text('Deuxième élément')),\n    ListTile(title: Text('Troisième élément')),\n  ],\n)\n",
    },
    { type: "heading", content: "Liste horizontale et séparateurs" },
    {
      type: "text",
      content:
        "scrollDirection: Axis.horizontal transforme la liste en défilement horizontal. Pour insérer un séparateur visuel entre chaque élément (une ligne fine, par exemple), le constructeur nommé ListView.separated combine un itemBuilder pour les éléments et un separatorBuilder pour ce qui les sépare.",
    },
    {
      type: "code",
      title: "list_view_separated.dart",
      language: "dart",
      code:
        "ListView.separated(\n  itemCount: items.length,\n  separatorBuilder: (context, index) => const Divider(height: 1),\n  itemBuilder: (context, index) => ListTile(title: Text(items[index])),\n)\n",
    },
    { type: "heading", content: "Quand éviter ListView" },
    {
      type: "text",
      content:
        "Pour une liste longue ou dont le nombre d'éléments n'est pas connu à l'avance (des résultats de recherche, un fil d'actualité), préfère ListView.builder : il ne construit que les éléments visibles à l'écran, au fur et à mesure du défilement, ce qui évite de payer le coût de construction de milliers de widgets inutiles (voir la fiche dédiée à ListView.builder).",
    },
  ],
};
