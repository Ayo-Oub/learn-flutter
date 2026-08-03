export default {
  id: "text-style",
  order: 11,
  category: "styling",
  duration: "12 min",
  title: "TextStyle()",
  tagline: "Style du texte",
  docsUrl: "https://api.flutter.dev/flutter/painting/TextStyle-class.html",
  summary: "Objet pour définir la taille, la couleur et le style d'un texte.",
  blocks: [
    {
      type: "text",
      content:
        "TextStyle n'est pas un widget mais un objet de configuration que l'on passe à la propriété style d'un Text. Il regroupe fontSize, fontWeight, color, letterSpacing, fontStyle, et bien d'autres.",
    },
    { type: "heading", content: "Réutiliser un style" },
    {
      type: "text",
      content:
        "Comme TextStyle est un simple objet Dart, on peut le déclarer une fois (dans une constante ou un thème) et le réutiliser partout dans l'application pour garder une typographie cohérente.",
    },
    {
      type: "code",
      title: "text_style_example.dart",
      language: "dart",
      code:
        "const titleStyle = TextStyle(\n  fontSize: 22,\n  fontWeight: FontWeight.bold,\n  color: Colors.indigo,\n);\n\nconst Text('Titre stylisé', style: titleStyle)\n",
    },
    { type: "heading", content: "Copier et modifier un style avec copyWith" },
    {
      type: "text",
      content:
        "copyWith permet de partir d'un TextStyle existant et de ne changer que certaines propriétés, sans tout redéclarer. C'est très utile pour dériver une variante (par exemple la même police mais en gras) à partir d'un style de base défini dans le thème.",
    },
    {
      type: "code",
      title: "text_style_copywith.dart",
      language: "dart",
      code:
        "final base = Theme.of(context).textTheme.bodyLarge!;\nfinal emphasized = base.copyWith(\n  fontWeight: FontWeight.bold,\n  color: Colors.indigo,\n);\n",
    },
    { type: "heading", content: "Style hérité du thème vs style local" },
    {
      type: "text",
      content:
        "Plutôt que de définir des TextStyle en dur partout, il est préférable de partir de Theme.of(context).textTheme (titleLarge, bodyMedium, labelSmall...) puis d'ajuster avec copyWith si besoin. L'application reste cohérente et réagit automatiquement à un changement de thème.",
    },
  ],
};
