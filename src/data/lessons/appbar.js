export default {
  id: "appbar",
  order: 2,
  category: "layout",
  duration: "12 min",
  title: "AppBar",
  tagline: "Barre d'application",
  docsUrl: "https://api.flutter.dev/flutter/material/AppBar-class.html",
  summary:
    "Barre affichée en haut de l'écran : titre, actions, icône de retour et navigation.",
  blocks: [
    {
      type: "text",
      content:
        "AppBar occupe généralement la propriété appBar d'un Scaffold. Elle affiche un titre, peut inclure des icônes d'action à droite, et gère automatiquement l'icône de retour quand l'écran est empilé par un Navigator.",
    },
    { type: "heading", content: "Personnaliser l'AppBar" },
    {
      type: "text",
      content:
        "Les propriétés title, actions, backgroundColor et elevation permettent d'adapter l'apparence de la barre à l'identité visuelle de l'application.",
    },
    {
      type: "code",
      title: "appbar_example.dart",
      language: "dart",
      code:
        "AppBar(\n  title: const Text('Mes leçons'),\n  actions: [\n    IconButton(\n      icon: const Icon(Icons.search),\n      onPressed: () {},\n    ),\n  ],\n)\n",
    },
    { type: "heading", content: "Icônes d'action et menu débordant" },
    {
      type: "text",
      content:
        "Au-delà des IconButton visibles, la propriété actions peut aussi contenir un PopupMenuButton pour regrouper des actions secondaires dans un menu à trois points, évitant de surcharger la barre avec trop d'icônes.",
    },
    {
      type: "code",
      title: "appbar_popup_menu.dart",
      language: "dart",
      code:
        "AppBar(\n  title: const Text('Profil'),\n  actions: [\n    PopupMenuButton<String>(\n      onSelected: (value) {},\n      itemBuilder: (context) => const [\n        PopupMenuItem(value: 'edit', child: Text('Modifier')),\n        PopupMenuItem(value: 'logout', child: Text('Déconnexion')),\n      ],\n    ),\n  ],\n)\n",
    },
    { type: "heading", content: "AppBar transparente ou personnalisée" },
    {
      type: "text",
      content:
        "elevation: 0 combiné à backgroundColor: Colors.transparent permet une AppBar qui se fond dans le contenu — un effet fréquent sur les écrans d'accueil ou de profil avec une image en arrière-plan.",
    },
    {
      type: "code",
      title: "appbar_transparent.dart",
      language: "dart",
      code:
        "AppBar(\n  elevation: 0,\n  backgroundColor: Colors.transparent,\n  foregroundColor: Colors.white,\n  title: const Text('Profil'),\n)\n",
    },
  ],
};
