export default {
  id: "scaffold",
  order: 1,
  category: "layout",
  duration: "14 min",
  title: "Scaffold",
  tagline: "Structure de page",
  docsUrl: "https://api.flutter.dev/flutter/material/Scaffold-class.html",
  summary:
    "Fournit la structure visuelle de base d'une application conforme aux principes Material Design (barre d'app, corps, tiroir, bouton flottant...).",
  blocks: [
    {
      type: "text",
      content:
        "Scaffold est le widget racine de la plupart des écrans Flutter. Il assemble les grandes zones d'une page — barre d'application, corps, tiroir de navigation, bouton d'action flottant, barre de navigation basse — et gère leur agencement à ta place, y compris les décalages liés aux zones sécurisées de l'appareil.",
    },
    { type: "heading", content: "Les emplacements principaux" },
    {
      type: "text",
      content:
        "Scaffold expose des propriétés nommées pour chaque zone : appBar, body, floatingActionButton, drawer, bottomNavigationBar. Tu n'as qu'à fournir les widgets qui t'intéressent, les autres restent vides.",
    },
    {
      type: "code",
      title: "scaffold_example.dart",
      language: "dart",
      code:
        "Scaffold(\n  appBar: AppBar(title: const Text('Mon app')),\n  body: const Center(child: Text('Contenu principal')),\n  floatingActionButton: FloatingActionButton(\n    onPressed: () {},\n    child: const Icon(Icons.add),\n  ),\n)\n",
    },
    { type: "heading", content: "Gérer le tiroir de navigation (Drawer)" },
    {
      type: "text",
      content:
        "La propriété drawer affiche un panneau latéral accessible par un glissement depuis le bord de l'écran ou via l'icône hamburger automatiquement ajoutée à l'AppBar. endDrawer fait la même chose depuis le bord opposé — pratique pour un panneau de filtres à droite, par exemple.",
    },
    {
      type: "code",
      title: "scaffold_drawer.dart",
      language: "dart",
      code:
        "Scaffold(\n  appBar: AppBar(title: const Text('Accueil')),\n  drawer: Drawer(\n    child: ListView(\n      children: const [\n        DrawerHeader(child: Text('Menu')),\n        ListTile(leading: Icon(Icons.home), title: Text('Accueil')),\n        ListTile(leading: Icon(Icons.settings), title: Text('Réglages')),\n      ],\n    ),\n  ),\n  body: const Center(child: Text('Contenu principal')),\n)\n",
    },
    { type: "heading", content: "SnackBar et retours utilisateur" },
    {
      type: "text",
      content:
        "Scaffold gère aussi l'affichage des SnackBar (messages temporaires en bas de l'écran) via ScaffoldMessenger.of(context).showSnackBar(...). C'est le moyen standard de confirmer une action à l'utilisateur sans bloquer l'interface avec une boîte de dialogue.",
    },
    {
      type: "code",
      title: "scaffold_snackbar.dart",
      language: "dart",
      code:
        "ElevatedButton(\n  onPressed: () {\n    ScaffoldMessenger.of(context).showSnackBar(\n      const SnackBar(content: Text('Action effectuée !')),\n    );\n  },\n  child: const Text('Valider'),\n)\n",
    },
    { type: "heading", content: "Naviguer entre plusieurs Scaffold" },
    {
      type: "text",
      content:
        "Chaque écran d'une application Flutter a généralement son propre Scaffold. Le Navigator empile ces écrans les uns sur les autres ; Scaffold gère alors automatiquement l'affichage de la flèche de retour dans l'AppBar dès que l'écran n'est plus le premier de la pile.",
    },
  ],
};
