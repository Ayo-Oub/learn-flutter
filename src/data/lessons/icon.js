export default {
  id: "icon",
  order: 8,
  category: "basics",
  duration: "10 min",
  title: "Icon()",
  tagline: "Afficher une icône",
  docsUrl: "https://api.flutter.dev/flutter/widgets/Icon-class.html",
  summary: "Affiche une icône vectorielle, typiquement issue du set Material Icons.",
  blocks: [
    {
      type: "text",
      content:
        "Icon affiche un symbole vectoriel qui se redimensionne sans perte de qualité. Flutter fournit par défaut le jeu d'icônes Material via la classe Icons (Icons.home, Icons.search, Icons.favorite...).",
    },
    { type: "heading", content: "Taille et couleur" },
    {
      type: "text",
      content:
        "Les propriétés size et color permettent d'adapter l'icône au contexte visuel, exactement comme pour du texte.",
    },
    {
      type: "code",
      title: "icon_example.dart",
      language: "dart",
      code: "const Icon(\n  Icons.favorite,\n  color: Colors.pink,\n  size: 32,\n)\n",
    },
    { type: "heading", content: "Icônes personnalisées" },
    {
      type: "text",
      content:
        "Au-delà du jeu Material, on peut utiliser un IconData provenant d'une police d'icônes personnalisée (générée par exemple avec FlutterIcon ou IcoMoon), ou afficher directement un fichier SVG via un package comme flutter_svg lorsqu'une icône Material ne suffit pas.",
    },
    { type: "heading", content: "Icônes dans un bouton" },
    {
      type: "text",
      content:
        "IconButton combine une Icon avec la zone tactile et le retour visuel (effet d'ondulation, tooltip) attendus d'un bouton — à préférer à un GestureDetector manuel autour d'une simple Icon.",
    },
    {
      type: "code",
      title: "icon_button.dart",
      language: "dart",
      code:
        "IconButton(\n  icon: const Icon(Icons.favorite_border),\n  tooltip: 'Ajouter aux favoris',\n  onPressed: () {},\n)\n",
    },
  ],
};
