export default {
  id: "column",
  order: 5,
  category: "layout",
  duration: "12 min",
  title: "Column",
  tagline: "Alignement vertical",
  docsUrl: "https://api.flutter.dev/flutter/widgets/Column-class.html",
  summary:
    "Aligne une liste de widgets enfants les uns au-dessus des autres, verticalement.",
  blocks: [
    {
      type: "text",
      content:
        "Column est le pendant vertical de Row. C'est l'un des widgets les plus utilisés en Flutter pour empiler du contenu : titre, description, bouton...",
    },
    { type: "heading", content: "Attention au débordement" },
    {
      type: "text",
      content:
        "Une Column ne défile pas : si son contenu dépasse l'espace disponible, Flutter affiche un avertissement de débordement. Pour du contenu scrollable, on utilise plutôt ListView.",
    },
    {
      type: "code",
      title: "column_example.dart",
      language: "dart",
      code:
        "Column(\n  crossAxisAlignment: CrossAxisAlignment.start,\n  children: const [\n    Text('Titre', style: TextStyle(fontWeight: FontWeight.bold)),\n    SizedBox(height: 8),\n    Text('Une courte description sous le titre.'),\n  ],\n)\n",
    },
    { type: "heading", content: "Répartir l'espace verticalement" },
    {
      type: "text",
      content:
        "Comme pour Row, Expanded et Flexible fonctionnent aussi dans une Column, mais sur l'axe vertical. C'est utile pour qu'une zone de contenu occupe tout l'espace restant au-dessus d'un bouton fixé en bas de l'écran.",
    },
    {
      type: "code",
      title: "column_expanded.dart",
      language: "dart",
      code:
        "Column(\n  children: [\n    Expanded(\n      child: ListView(\n        children: const [Text('Élément 1'), Text('Élément 2')],\n      ),\n    ),\n    ElevatedButton(onPressed: () {}, child: const Text('Continuer')),\n  ],\n)\n",
    },
    { type: "heading", content: "mainAxisSize : occuper tout l'espace ou pas" },
    {
      type: "text",
      content:
        "mainAxisSize: MainAxisSize.min réduit la Column à la taille exacte de ses enfants au lieu de s'étirer sur tout l'axe vertical disponible — pratique à l'intérieur d'une Card ou d'une boîte de dialogue qui ne doit pas prendre toute la hauteur de l'écran.",
    },
  ],
};
