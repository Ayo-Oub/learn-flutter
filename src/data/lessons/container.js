export default {
  id: "container",
  order: 3,
  category: "layout",
  duration: "15 min",
  title: "Container",
  tagline: "Boîte polyvalente",
  docsUrl: "https://api.flutter.dev/flutter/widgets/Container-class.html",
  links: [
    { label: "Tutoriel vidéo", url: "https://..." },
    { label: "Article détaillé", url: "https://..." },
  ],
  summary:
    "Widget polyvalent pour la mise en page, la décoration et les dimensions d'un élément.",
  blocks: [
    {
      type: "text",
      content:
        "Container combine plusieurs préoccupations qui seraient autrement réparties sur plusieurs widgets : dimensionnement (width, height, constraints), espacement interne et externe (padding, margin), décoration visuelle (couleur, bordure, arrondis, ombre, dégradé) et positionnement de son enfant (alignment, transform). C'est souvent le premier widget vers lequel on se tourne pour habiller un élément.",
    },

    { type: "heading", content: 'Un widget "couteau suisse"' },
    {
      type: "text",
      content:
        "Container est pratique pour prototyper rapidement une interface, car il évite d'empiler plusieurs widgets spécialisés. Mais cette polyvalence a un coût : pour des besoins précis, Flutter propose des widgets plus légers et plus explicites — Padding pour un simple espacement, ColoredBox pour une couleur de fond sans les autres calculs de Container, SizedBox pour des dimensions fixes. Utiliser le bon widget rend l'arbre de widgets plus lisible et légèrement plus performant.",
    },
    { type: "heading", content: "Comprendre width, height et les contraintes" },
    {
      type: "text",
      content:
        "Si tu ne précises ni width ni height, Container essaie de s'adapter à la taille de son enfant. Mais dès que Container est placé dans un parent qui impose des contraintes (comme Expanded ou une Row sans bornes), ces règles peuvent changer. La propriété constraints (un BoxConstraints) permet de définir des bornes minimales et maximales plus fines que width/height seuls — pratique pour un bouton qui doit rester lisible sans devenir trop large sur tablette.",
    },

    {
      type: "code",
      title: "container_constraints.dart",
      language: "dart",
      code: "Container(\n  constraints: const BoxConstraints(\n    minWidth: 100,\n    maxWidth: 240,\n    minHeight: 48,\n  ),\n  alignment: Alignment.center,\n  color: Colors.indigo.shade50,\n  child: const Text('Largeur flexible'),\n)\n",
    },
    {
      type: "heading",
      content: "padding vs margin : bien choisir son espacement",
    },
    {
      type: "text",
      content:
        "padding ajoute de l'espace à l'intérieur de la boîte, entre sa bordure et son enfant. margin ajoute de l'espace à l'extérieur, entre la boîte et les widgets voisins. Les confondre est une source fréquente de bugs de mise en page : si ton enfant colle visuellement au bord de sa boîte, c'est probablement padding qu'il te faut ; si c'est la boîte entière qui colle à ses voisines, c'est margin.",
    },
    {
      type: "code",
      title: "container_spacing.dart",
      language: "dart",
      code: "Container(\n  margin: const EdgeInsets.symmetric(vertical: 8),\n  padding: const EdgeInsets.all(16),\n  decoration: BoxDecoration(\n    color: Colors.white,\n    border: Border.all(color: Colors.grey.shade300),\n    borderRadius: BorderRadius.circular(10),\n  ),\n  child: const Text(\"padding à l'intérieur, margin à l'extérieur\"),\n)\n",
    },
    { type: "heading", content: "Décorer avec BoxDecoration" },

    {
      type: "text",
      content:
        "La propriété decoration accepte un BoxDecoration pour la couleur, la bordure, les coins arrondis ou une ombre. Attention : on ne peut pas utiliser color et decoration en même temps sur un même Container — si tu utilises BoxDecoration, la couleur doit être définie à l'intérieur de celle-ci (voir la fiche BoxDecoration pour aller plus loin). ",
    },
    {
      type: "code",
      title: "source: chatgpt",
      code: "https://chatgpt.com/c/6a6e318e-c388-83ea-aac2-0948ec7740fb",
    },
    {
      type: "code",
      title: "container_example.dart",
      language: "dart",
      code: "Container(\n  width: 160,\n  padding: const EdgeInsets.all(16),\n  decoration: BoxDecoration(\n    color: Colors.blue.shade50,\n    borderRadius: BorderRadius.circular(12),\n  ),\n  child: const Text('Dans une boîte'),\n)\n",
    },
    { type: "heading", content: "Container ou un widget plus léger ?" },
    {
      type: "text",
      content:
        "Une bonne règle de pouce : si tu n'utilises que padding, préfère Padding. Si tu n'utilises qu'une couleur de fond sans bordure ni ombre, ColoredBox est plus léger. Si tu veux juste imposer une taille fixe, SizedBox suffit. Garde Container pour les cas qui combinent réellement plusieurs de ces besoins en même temps.",
    },
  ],
};
