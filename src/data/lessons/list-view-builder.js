export default {
  id: "list-view-builder",
  order: 19,
  category: "layout",
  duration: "14 min",
  title: "ListView.builder",
  tagline: "Liste défilante paresseuse",
  docsUrl: "https://api.flutter.dev/flutter/widgets/ListView/ListView.builder.html",
  summary:
    "Construit ses éléments à la demande, au fur et à mesure du défilement — la manière recommandée d'afficher une liste longue ou dynamique.",
  blocks: [
    {
      type: "text",
      content:
        "ListView.builder est un constructeur nommé de ListView, optimisé pour les listes longues. Plutôt que de construire tous les enfants d'un coup, il ne construit que les éléments visibles à l'écran (plus une petite marge), et les reconstruit au fur et à mesure que l'utilisateur fait défiler la liste.",
    },
    { type: "heading", content: "itemBuilder et itemCount" },
    {
      type: "text",
      content:
        "itemBuilder est une fonction appelée pour chaque élément visible, avec son index ; elle retourne le widget correspondant. itemCount précise le nombre total d'éléments — utile pour que Flutter sache où s'arrête la liste et affiche une barre de défilement cohérente.",
    },
    {
      type: "code",
      title: "list_view_builder_example.dart",
      language: "dart",
      code:
        "ListView.builder(\n  itemCount: items.length,\n  itemBuilder: (context, index) {\n    return ListTile(\n      leading: const Icon(Icons.article_outlined),\n      title: Text(items[index]),\n    );\n  },\n)\n",
    },
    { type: "heading", content: "Listes infinies (pagination)" },
    {
      type: "text",
      content:
        "En omettant itemCount (en le laissant à null), ListView.builder peut afficher une liste théoriquement infinie, à condition qu'itemBuilder soit capable de générer un élément pour n'importe quel index. C'est le pattern classique pour charger des données par pages au fur et à mesure du défilement : dès que l'index dépasse les données déjà chargées, on déclenche le chargement de la page suivante.",
    },
    {
      type: "code",
      title: "list_view_builder_pagination.dart",
      language: "dart",
      code:
        "ListView.builder(\n  itemBuilder: (context, index) {\n    if (index >= items.length) {\n      _loadMoreItems();\n      return const Padding(\n        padding: EdgeInsets.all(16),\n        child: Center(child: CircularProgressIndicator()),\n      );\n    }\n    return ListTile(title: Text(items[index]));\n  },\n)\n",
    },
    { type: "heading", content: "Pourquoi c'est plus performant" },
    {
      type: "text",
      content:
        "Ce chargement à la demande est ce qui rend ListView.builder capable d'afficher des milliers, voire des millions d'éléments sans ralentir l'application : seuls les widgets réellement affichés à l'écran existent en mémoire à un instant donné, contrairement au constructeur par défaut de ListView qui garde tous ses enfants construits en permanence.",
    },
  ],
};
