export default {
  id: "flexible",
  order: 17,
  category: "layout",
  duration: "10 min",
  title: "Flexible",
  tagline: "S'adapter à l'espace disponible",
  docsUrl: "https://api.flutter.dev/flutter/widgets/Flexible-class.html",
  summary:
    "Permet à son enfant de s'adapter à l'espace disponible dans une Row ou une Column, sans forcément le remplir entièrement.",
  blocks: [
    {
      type: "text",
      content:
        "Comme Expanded, Flexible ne fonctionne qu'à l'intérieur d'une Row, une Column ou plus généralement un Flex. Il autorise son enfant à occuper jusqu'à une certaine portion de l'espace disponible sur l'axe principal, sans forcer cet enfant à remplir exactement cette portion.",
    },
    { type: "heading", content: "FlexFit.loose vs FlexFit.tight" },
    {
      type: "text",
      content:
        "La propriété fit détermine le comportement exact. Par défaut, FlexFit.loose laisse l'enfant garder sa taille naturelle tant qu'elle tient dans l'espace attribué — l'enfant peut donc être plus petit que la portion réservée. FlexFit.tight, au contraire, force l'enfant à occuper exactement cette portion, ce qui revient au comportement d'Expanded.",
    },
    {
      type: "code",
      title: "flexible_loose_example.dart",
      language: "dart",
      code:
        "Row(\n  children: [\n    Flexible(\n      child: Container(\n        color: Colors.indigo.shade100,\n        padding: const EdgeInsets.all(12),\n        child: const Text('Ce texte garde sa taille naturelle'),\n      ),\n    ),\n    const SizedBox(width: 8),\n    Container(width: 48, height: 48, color: Colors.amber),\n  ],\n)\n",
    },
    { type: "heading", content: "flex : répartir l'espace proportionnellement" },
    {
      type: "text",
      content:
        "Comme pour Expanded, la propriété flex (par défaut 1) répartit l'espace disponible proportionnellement entre plusieurs widgets flexibles d'un même parent. Un Flexible avec flex: 3 se voit attribuer trois fois plus d'espace maximum qu'un Flexible avec flex: 1, même si chacun peut ensuite choisir de ne pas tout occuper selon son fit.",
    },
    {
      type: "code",
      title: "flexible_flex_ratio.dart",
      language: "dart",
      code:
        "Row(\n  children: [\n    Flexible(\n      flex: 3,\n      child: Container(height: 48, color: Colors.indigo),\n    ),\n    const SizedBox(width: 8),\n    Flexible(\n      flex: 1,\n      child: Container(height: 48, color: Colors.amber),\n    ),\n  ],\n)\n",
    },
    { type: "heading", content: "Flexible vs Expanded : lequel choisir ?" },
    {
      type: "text",
      content:
        "Utilise Expanded quand tu veux qu'un widget remplisse systématiquement tout l'espace qui lui est réservé — le cas le plus fréquent (un champ de recherche, une zone de contenu principale). Réserve Flexible pour les cas où l'enfant doit pouvoir rester plus petit que cet espace, par exemple un texte court qui ne doit pas s'étirer inutilement mais doit quand même pouvoir rétrécir si l'espace vient à manquer.",
    },
  ],
};
