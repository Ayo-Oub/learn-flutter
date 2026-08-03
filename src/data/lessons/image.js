export default {
  id: "image",
  order: 7,
  category: "basics",
  duration: "12 min",
  title: "Image()",
  tagline: "Afficher une image",
  docsUrl: "https://api.flutter.dev/flutter/widgets/Image-class.html",
  summary: "Affiche une image depuis les assets du projet, le réseau ou la mémoire.",
  blocks: [
    {
      type: "text",
      content:
        "Le widget Image peut charger une image de plusieurs façons : Image.asset() pour un fichier packagé avec l'app, Image.network() pour une URL, ou Image.memory() pour des octets déjà en mémoire.",
    },
    { type: "heading", content: "Adapter l'image à son espace" },
    {
      type: "text",
      content:
        "La propriété fit (BoxFit.cover, BoxFit.contain...) contrôle comment l'image se redimensionne pour remplir l'espace qui lui est alloué, un peu comme background-size en CSS.",
    },
    {
      type: "code",
      title: "image_example.dart",
      language: "dart",
      code:
        "Image.network(\n  'https://picsum.photos/400/200',\n  height: 180,\n  fit: BoxFit.cover,\n)\n",
    },
    { type: "heading", content: "Superposer une image et un dégradé" },
    {
      type: "text",
      content:
        "Un cas fréquent consiste à assombrir une image pour que du texte reste lisible par-dessus. On combine alors Stack, Positioned.fill et un Container avec un dégradé semi-transparent au-dessus de l'Image.",
    },
    {
      type: "code",
      title: "image_gradient_overlay.dart",
      language: "dart",
      code:
        "Stack(\n  children: [\n    Image.network('https://picsum.photos/400/200', fit: BoxFit.cover),\n    Positioned.fill(\n      child: Container(\n        decoration: BoxDecoration(\n          gradient: LinearGradient(\n            begin: Alignment.topCenter,\n            end: Alignment.bottomCenter,\n            colors: [Colors.transparent, Colors.black.withOpacity(0.6)],\n          ),\n        ),\n      ),\n    ),\n  ],\n)\n",
    },
    { type: "heading", content: "Placeholder pendant le chargement" },
    {
      type: "text",
      content:
        "Image.network télécharge l'image de manière asynchrone. loadingBuilder permet d'afficher un indicateur de progression pendant ce temps, et errorBuilder un widget de secours si le téléchargement échoue.",
    },
    {
      type: "code",
      title: "image_loading_state.dart",
      language: "dart",
      code:
        "Image.network(\n  'https://picsum.photos/400/200',\n  loadingBuilder: (context, child, progress) {\n    if (progress == null) return child;\n    return const Center(child: CircularProgressIndicator());\n  },\n  errorBuilder: (context, error, stackTrace) =>\n      const Icon(Icons.broken_image),\n)\n",
    },
  ],
};
